import { db } from '@/lib/db';
import { contacts } from '@/db/schema/contacts';
import ContactForm from '@/components/ContactForm';

async function submitContactForm(formData: FormData) {
  'use server';

  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;

  if (!firstName || !lastName || !email) {
    return { success: false, message: 'Please fill in all required fields.' };
  }

  try {
    await db.insert(contacts).values({
      firstName,
      lastName,
      email,
      phone: phone || null,
    });
    return { success: true, message: 'Thank you! Your message has been sent successfully.' };
  } catch (error) {
    console.error('Contact form error:', error);
    return { success: false, message: 'An error occurred while sending your message. Please try again.' };
  }
}

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] py-12 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions about Quetrex? We'd love to hear from you. 
          Fill out the form below and our team will get back to you shortly.
        </p>
      </div>
      
      <ContactForm submitAction={submitContactForm} />
    </div>
  );
}
