FROM node:lts-alpine AS base
# declare the base image for node js

FROM base AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY pnpm-lock.yaml package.json pnpm-workspace.yaml ./
RUN corepack enable pnpm && pnpm i

FROM base AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

RUN addgroup -g 1001 -S nodejs && \
        adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public
# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

ENTRYPOINT ["node"]
CMD ["server.js"]
