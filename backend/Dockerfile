# Use the latest LTS version of Node.js
FROM node:18

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

