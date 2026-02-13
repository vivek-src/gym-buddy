FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

RUN if [ -f .env.example ]; then cp .env.example .env; fi

# IMPORTANT: No GITHUB_PAGES variable here
RUN npm run build

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
