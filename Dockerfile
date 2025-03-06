# Step 1: Build the Vite app
FROM node:20 as build

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

# Step 2: Set up Nginx server to serve the build
FROM nginx:alpine

# Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy the build output to Nginx's web root directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 (default for Nginx)
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
