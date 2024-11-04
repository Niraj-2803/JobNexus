# Use the latest LTS version of Node.js
FROM node:18

# Install required dependencies for Puppeteer
RUN apt-get update && apt-get install -y \
    wget \
    ca-certificates \
    fonts-liberation \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libcups2 \
    libdbus-1-3 \
    libgbm-dev \
    libgdk-pixbuf2.0-0 \
    libgtk-3-0 \
    libnspr4 \
    libnss3 \
    libx11-xcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    libxss1 \
    libxtst6 \
    x11-utils \
    --no-install-recommends \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application files
COPY . .

# Expose the desired port (adjust if your app runs on a different port)
EXPOSE 5000

# Command to run your app
CMD ["npm", "start"]
