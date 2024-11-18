# Stage 1: Build environment (using node:18-alpine)
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if present)
COPY package*.json ./

# Install dependencies, including dev dependencies for build
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the Next.js application for production
RUN npm run build

# Stage 2: Production environment (using node:18-alpine)
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy necessary files from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Install only production dependencies (excluding dev dependencies)
RUN npm install --only=production --legacy-peer-deps

# Set environment variables for production (optional, if any)
ENV NODE_ENV=production

# Expose the port the app will run on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]
