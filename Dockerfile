FROM node:20-slim

# Install build dependencies for sharp
RUN apt-get update && apt-get install -y \
    build-essential \
    libcairo2 \
    libpango1.0-0 \
    libjpeg-dev \
    libgif-dev \
    libpango1.0-dev \
    libglib2.0-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY . .

# Install dependencies with specific platform and architecture
RUN npm install --platform=linux --arch=x64

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=1337

EXPOSE 1337

CMD ["npm", "run", "develop"]
