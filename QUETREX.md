# Quetrex

Next-gen queue management system.

## Verification

Stack: Node.js / TypeScript (Next.js App Router).

Run in this order — all must pass (exit 0) before any PR:

1. `timeout 120 npm run type-check`
2. `timeout 60 npm run lint`
3. `timeout 120 npx vitest run`
4. `timeout 300 npm run build`
