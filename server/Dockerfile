FROM node:20.11.1-alpine AS builder

WORKDIR /builder

COPY package*.json ./

COPY prisma ./prisma/

RUN npm install --legacy-peer-deps

COPY . .

RUN npx prisma generate && npm run build

FROM node:20.11.1-alpine AS runner

WORKDIR /runner

COPY --from=builder /builder/package*.json ./
COPY --from=builder /builder/prisma ./prisma/
RUN npm install --only=production --legacy-peer-deps

COPY --from=builder /builder/dist ./dist
COPY --from=builder /builder/node_modules ./node_modules

COPY --from=builder /builder/prisma ./prisma/

EXPOSE 3000

RUN npx prisma generate

CMD ["npm", "run", "start"]
