# Use the official Node.js image as the base image
FROM node:20.6.1

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container 
COPY package*.json ./

RUN npm config set registry https://registry.npmjs.org
RUN npm config set fetch-retries 5

# Install dependencies
RUN npm install

# Copy the rest of your application files to the container
COPY . . 

# Build your React application 
RUN npm run build 

# Expose the port your application runs on (if necessary) 
EXPOSE 80

# Start your application 
CMD ["npm", "start"]