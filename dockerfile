FROM node:22-alpine AS node

WORKDIR /app

# Dependencies
COPY package.json package-lock.json* ./

# Install dependencies 
RUN npm install

# Copy codebase
COPY . .

# Create .env from .env.example (if .env doesn't exist)
RUN if [ -f .env.example ]; then cp .env.example .env; fi

# Nextjs Build
RUN npm run build

EXPOSE 3000

# Start the app
CMD ["npm", "start"]
