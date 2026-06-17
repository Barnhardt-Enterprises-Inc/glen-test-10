import { db } from '@/lib/db';
import { contacts } from './schema/contacts';

async function main() {
  console.log('Seeding database...');
  
  const mockContacts = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '+1234567890',
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      phone: '+0987654321',
    },
    {
      firstName: 'Alice',
      lastName: 'Johnson',
      email: 'alice.j@example.com',
      phone: '+1122334455',
    },
    {
      firstName: 'Bob',
      lastName: 'Brown',
      email: 'bob.brown@example.com',
      phone: '+5566778899',
    },
    {
      firstName: 'Charlie',
      lastName: 'Davis',
      email: 'charlie.d@example.com',
      phone: '+9988776655',
    },
  ];

  await db.insert(contacts).values(mockContacts);
  console.log('Database seeded successfully');
}

main().catch((err) => {
  console.error('Seeding failed:');
  console.error(err);
  process.exit(1);
});
