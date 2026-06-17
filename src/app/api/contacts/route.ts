import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { contacts } from '@/db/schema';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'First name, last name, and email are required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
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
