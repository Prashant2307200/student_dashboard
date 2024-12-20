FROM node:20.11.1-alpine AS builder

WORKDIR /builder

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

FROM node:20.11.1-alpine AS runner

WORKDIR /runner

COPY --from=builder /builder/package*.json ./

RUN npm install --production

COPY --from=builder /builder/dist ./dist

EXPOSE 3000

CMD ["npm", "run", "start"]
