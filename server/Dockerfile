# Use the node base image for building
FROM node:20.11.1-alpine AS builder

# Set the working directory
WORKDIR /builder

# Copy only necessary files for dependency installation
COPY package*.json ./

# Copy the Prisma schema
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

# Set environment variables for Prisma production
ENV NODE_ENV=production
ENV DATABASE_URL=your_database_url_here # Replace with your database URL

# Copy production dependencies
COPY --from=builder /builder/package*.json ./
COPY --from=builder /builder/prisma ./prisma/
RUN npm install --only=production --legacy-peer-deps

# Copy the built application and Prisma client
COPY --from=builder /builder/dist ./dist
COPY --from=builder /builder/node_modules ./node_modules

# Copy Prisma schema for migrations if necessary
COPY --from=builder /builder/prisma ./prisma/

# Expose the application port
EXPOSE 3000

# Ensure Prisma client works in production
RUN npx prisma generate

# Start the application
CMD ["npm", "run", "start"]
