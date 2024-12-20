FROM node:alpine AS builder

WORKDIR /builder

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

RUN npm i typescript && npm run build

RUN npx prisma generate

FROM node:alpine AS runner

WORKDIR /runner

COPY --from=builder /builder/package*.json ./
COPY --from=builder /builder/node_modules ./node_modules
COPY --from=builder /builder/dist ./dist
COPY --from=builder /builder/prisma ./prisma  # Ensure Prisma schema is copied

EXPOSE 3000

CMD ["npm", "run", "start"]
