# Use Node.js base image
FROM node:22-slim

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
# COPY package*.json ./
# RUN npm install

# Copy the app source code
COPY routes.js ./

# Default command (can be overridden by args during job execution)
CMD ["node", "routes.js"]
