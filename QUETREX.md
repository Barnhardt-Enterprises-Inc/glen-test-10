# Quetrex

Next-gen queue management system.

## Verification

Stack: Node.js / TypeScript.

Run in this order — all must pass (exit 0) before any PR:

1. `npm run type-check`
2. `npm run db:migrate`
3. `timeout 600 npm run test`
4. `rm -rf .next && timeout 600 npm run build`
