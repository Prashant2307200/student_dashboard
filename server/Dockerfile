FROM node:alpine AS builder

WORKDIR /builder

COPY package*.json ./
COPY prisma ./prisma/
COPY .env .env

RUN npm ci

COPY . .

RUN npm run build

RUN npx prisma generate

FROM node:alpine AS runner

WORKDIR /runner

COPY --from=builder /builder/package*.json ./
COPY --from=builder /builder/node_modules ./node_modules
COPY --from=builder /builder/dist ./dist
COPY --from=builder /builder/prisma ./prisma

ENV DATABASE_URL=postgresql://postgres:HorGoIlH79PxNz83@db.jxjjbdjpyyunwhzuishj.supabase.co:5432/database?schema=public&sslmode=require

EXPOSE 3000

CMD ["npm", "run", "start"]
