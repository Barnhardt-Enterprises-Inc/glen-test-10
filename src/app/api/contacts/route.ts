import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { contacts } from '@/db/schema';
import { validateEmail } from '@/lib/validation';

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;
let requestCount = 0;

export async function POST(request: Request) {
  try {
    // NOTE: Use of 'x-forwarded-for' assumes the app is behind a trusted proxy 
    // that correctly sets this header. There is a risk of spoofing if the 
    // proxy is not configured to strip incoming 'x-forwarded-for' headers.
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();

    // Periodically prune expired entries to prevent memory leaks
    requestCount++;
    if (requestCount % 100 === 0) {
      for (const [key, value] of rateLimitMap.entries()) {
        if (now > value.resetAt) {
          rateLimitMap.delete(key);
        }
      }
    }

    const rateLimit = rateLimitMap.get(ip);

    if (rateLimit && now < rateLimit.resetAt) {
      if (rateLimit.count >= MAX_REQUESTS) {
        return NextResponse.json(
          { error: 'Too many requests. Please try again later.' },
          { status: 429 }
        );
      }
      rateLimit.count++;
    } else {
      rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    }

    const body = await request.json();
    const { firstName, lastName, email, phone } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'First name, last name, and email are required' },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    await db.insert(contacts).values({
      firstName,
      lastName,
      email,
      phone,
    });

    return NextResponse.json(
      { message: 'Contact submitted successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting contact:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
