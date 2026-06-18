'use client';

import React, { useState, useTransition } from 'react';

interface ContactFormProps {
  submitAction: (formData: FormData) => Promise<{ success: boolean; message: string }>;
}

export default function ContactForm({ submitAction }: ContactFormProps) {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });

  async function handleSubmit(formData: FormData) {
    setStatus({ type: null, message: '' });
    
    startTransition(async () => {
      const result = await submitAction(formData);
      if (result.success) {
        setStatus({ type: 'success', message: result.message });
        // Clear form
        const form = document.getElementById('contact-form') as HTMLFormElement;
        form?.reset();
      } else {
        setStatus({ type: 'error', message: result.message });
      }
    });
  }

  return (
    <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <form 
        id="contact-form"
        action={handleSubmit} 
        className="space-y-4"
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
        </div>

        {/* Honeypot field to prevent spam */}
        <div className="hidden" aria-hidden="true">
          <input
            type="text"
            name="honeypot"
            tabIndex={-1}
            autoComplete="off"
            className="opacity-0 pointer-events-none"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Phone Number (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors disabled:bg-blue-300 disabled:cursor-not-allowed"
        >
          {isPending ? 'Sending...' : 'Send Message'}
        </button>

        {status.type && (
          <div 
            className={`p-3 rounded-md text-sm ${
              status.type === 'success' 
                ? 'bg-green-50 text-green-700 border border-green-200' 
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}
          >
            {status.message}
          </div>
        )}
      </form>
    </div>
  );
}
