# Use the node base image
FROM node:20.11.1-alpine AS builder

# Set the working directory
WORKDIR /builder

# Copy only necessary files for dependency installation
COPY package*.json ./

# Copy the Prisma schema if it exists
COPY prisma ./prisma/

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the source code
COPY . .

# Generate Prisma client and build the application
RUN npx prisma generate && npm run build

# Runner stage for production
FROM node:20.11.1-alpine AS runner

# Set the working directory
WORKDIR /runner

# Copy production dependencies
COPY --from=builder /builder/package*.json ./
COPY --from=builder /builder/prisma ./prisma/
RUN npm install --production

# Copy the built application and Prisma client
COPY --from=builder /builder/dist ./dist

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
