FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files into the container (ensuring basePath structure is preserved)
COPY . .

# Build the app
RUN npm run build

# Expose the port Next.js will run on
EXPOSE 5173

# Start the application
CMD ["npm", "run", "dev"]
