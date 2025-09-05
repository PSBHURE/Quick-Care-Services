# Use the base image for React app
FROM node:16

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Copy the wait-for-it.sh script from the scripts folder into the container
COPY scripts/wait-for-it.sh /wait-for-it.sh

# Make the wait-for-it.sh script executable
RUN chmod +x /wait-for-it.sh

# Expose port for React app
EXPOSE 80

# Command to wait for Spring app and then start React app with OpenSSL legacy provider
CMD ["/wait-for-it.sh", "spring-app:8080", "--", "npm", "run", "start"]
