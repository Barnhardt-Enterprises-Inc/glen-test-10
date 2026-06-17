import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { db } from '@/lib/db';

async function main() {
  console.log('Running migrations...');
  await migrate(db, { migrationsFolder: 'src/db/migrations' });
  console.log('Migrations completed successfully');
}

main().catch((err) => {
  console.error('Migration failed:');
  console.error(err);
  process.exit(1);
});
