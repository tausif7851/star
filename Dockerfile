# Step 1: Use the official Node.js image to build and serve the Vite app
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files to the container
COPY . ./

# Build the Vite app
RUN npm run build

# Install a simple HTTP server to serve the build files
RUN npm install -g serve

# Expose the port
EXPOSE 5000

# Command to start the server and serve the app
CMD ["serve", "-s", "dist", "-l", "5000"]
