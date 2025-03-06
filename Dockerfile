# Step 1: Build the React app
FROM node:16 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire app to the working directory
COPY . ./

# Build the React app
RUN npm run build

# Step 2: Set up the production server (using a smaller image)
FROM nginx:alpine

# Copy the build files from the build image
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 (the default port for Nginx)
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
