import { describe, it, expect, vi, beforeEach } from 'vitest';
import { POST } from './route';
import { db } from '@/lib/db';
import { contacts } from '@/db/schema/contacts';
import { NextResponse } from 'next/server';

// Mock the db instance
vi.mock('@/lib/db', () => ({
  db: {
    insert: vi.fn().mockReturnThis(),
    values: vi.fn().mockReturnThis(),
    returning: vi.fn(),
  },
}));


vi.mock('@/db/schema/contacts', () => ({
  contacts: {},
}));

describe('POST /api/contacts', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const createRequest = (body: any) => {
    return {
      json: async () => body,
    } as unknown as Request;
  };

  it('should return 201 and the inserted record on success', async () => {
    const mockPayload = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phone: '1234567890',
    };
    const mockRecord = { id: 1, ...mockPayload };
    
    (db as any).returning.mockResolvedValue([mockRecord]);

    const request = createRequest(mockPayload);
    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(201);
    expect(data).toEqual(mockRecord);
    expect((db as any).insert).toHaveBeenCalledWith(contacts);
    expect((db as any).values).toHaveBeenCalledWith({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phone: '1234567890',
    });
  });

  it('should return 400 if firstName is missing', async () => {
    const request = createRequest({ lastName: 'Doe', email: 'john@example.com' });
    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe('First name is required');
  });

  it('should return 400 if lastName is missing', async () => {
    const request = createRequest({ firstName: 'John', email: 'john@example.com' });
    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe('Last name is required');
  });

  it('should return 400 if email is missing', async () => {
    const request = createRequest({ firstName: 'John', lastName: 'Doe' });
    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe('Email is required');
  });

  it('should return 400 if email format is invalid', async () => {
    const request = createRequest({ 
      firstName: 'John', 
      lastName: 'Doe', 
      email: 'invalid-email' 
    });
    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe('Invalid email format');
  });

  it('should handle optional phone field correctly', async () => {
    const mockPayload = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
    };
    const mockRecord = { id: 1, ...mockPayload, phone: null };
    
    (db as any).returning.mockResolvedValue([mockRecord]);

    const request = createRequest(mockPayload);
    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(201);
    expect((db as any).values).toHaveBeenCalledWith({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phone: null,
    });
  });

  it('should return 500 if database insertion fails', async () => {
    const mockPayload = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
    };
    
    (db as any).returning.mockRejectedValue(new Error('DB Error'));

    const request = createRequest(mockPayload);
    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.error).toBe('Internal Server Error');
  });

  it('should return 400 if JSON body is invalid', async () => {
    const request = {
      json: async () => { throw new SyntaxError('Unexpected token'); },
    } as unknown as Request;

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe('Invalid JSON body');
  });
});
