import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { contacts } from '@/db/schema/contacts';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone } = body;

    // Validation: Ensure firstName, lastName, and email are present and non-empty strings
    if (!firstName || typeof firstName !== 'string' || firstName.trim() === '') {
      return NextResponse.json({ error: 'First name is required' }, { status: 400 });
    }
    if (!lastName || typeof lastName !== 'string' || lastName.trim() === '') {
      return NextResponse.json({ error: 'Last name is required' }, { status: 400 });
    }
    if (!email || typeof email !== 'string' || email.trim() === '') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Email validation using standard regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Database insertion
    const insertedRecord = await db
      .insert(contacts)
      .values({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim().toLowerCase(),
        phone: phone && typeof phone === 'string' ? phone.trim() : null,
      })
      .returning();

    if (insertedRecord.length === 0) {
      throw new Error('Failed to insert record into database');
    }

    return NextResponse.json(insertedRecord[0], { status: 201 });
  } catch (error) {
    console.error('Contact submission error:', error);
    
    // Handle JSON parsing errors as 400
    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
    }

    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
