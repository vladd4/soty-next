# ============================================
# Базовий образ
# ============================================
FROM node:20-slim AS base

# ============================================
# Етап 1: Залежності
# ============================================
FROM base AS deps
WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production && \
    npm cache clean --force

# ============================================
# Етап 2: Збірка
# ============================================
FROM base AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Копіюємо .env для збірки (якщо потрібно)
COPY .env .env

RUN npm run build

# ============================================
# Етап 3: Production
# ============================================
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

# Створюємо непривілейованого користувача
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Копіюємо production залежності
COPY --from=deps --chown=nextjs:nodejs /app/node_modules ./node_modules

# Копіюємо зібраний додаток
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json

# Копіюємо .env для runtime
COPY --chown=nextjs:nodejs .env .env

# Перемикаємось на непривілейованого користувача
USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]