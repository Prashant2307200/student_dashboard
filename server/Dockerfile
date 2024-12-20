# Use the node base image for building
FROM node:20.11.1-alpine AS builder

WORKDIR /builder

COPY package*.json ./

COPY ./prisma ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:20.11.1-alpine AS runner

WORKDIR /runner

COPY --from=builder /builder/package*.json ./

RUN npm ci --omit=dev

COPY --from=builder /builder/dist ./dist

COPY --from=builder /builder/prisma ./prisma/

COPY --from=builder /builder/node_modules ./node_modules

RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "run", "start"]

