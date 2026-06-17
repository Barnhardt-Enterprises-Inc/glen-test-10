import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { contacts } from '@/db/schema';
import { validateEmail } from '@/lib/validation';

export async function POST(request: Request) {
  try {
    // NOTE: Use of 'x-forwarded-for' assumes the app is behind a trusted proxy 
    // that correctly sets this header. We extract the first IP in the list.
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : 'unknown';

    // TODO: Implement distributed rate limiting (e.g., using Redis/Upstash).
    // In-memory rate limiting is ineffective in serverless environments as 
    // state is not shared across function instances.


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
