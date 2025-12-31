# Express Dockerfile
FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --production

# Copy source code
COPY . .

# Expose Express port
EXPOSE 3000

# Run Express app
CMD ["npm", "start"]
