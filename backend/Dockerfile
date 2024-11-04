# Start from Puppeteer's official image
FROM ghcr.io/puppeteer/puppeteer:16.1.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your application files
COPY . .

# Expose the application port
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
