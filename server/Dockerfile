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

EXPOSE 3000

CMD ["npm", "run", "start"]
