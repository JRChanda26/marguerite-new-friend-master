# Stage 1: Build the application
FROM node:18-alpine AS builder
 
# Set the working directory
WORKDIR /app
 
# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./
 
# Install dependencies
RUN npm install
 
# Copy the rest of the application code
COPY . .
 
# Build the application for production
RUN npm run build
 
# Stage 2: Run the application
FROM node:18-alpine
 
# Set the working directory
WORKDIR /app
 
# Copy only the necessary files from the build stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
 
# Set environment variables (optional)
ENV PORT 3001
EXPOSE 3001
 
# Start the Next.js application
CMD ["npm", "start"]
 