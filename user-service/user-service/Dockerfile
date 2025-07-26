# ---- Stage 1: Build ----
# Use an official Node.js image as a parent image for the build stage.
# 'alpine' is a lightweight Linux distribution.
FROM node:20-alpine AS build

# Set the working directory in the container.
WORKDIR /app

# Copy package.json and package-lock.json to the working directory.
# This is done first to leverage Docker's layer caching. If these files don't change,
# Docker won't re-run 'npm install' on subsequent builds.
COPY package*.json ./

# Install all dependencies, including devDependencies needed for building/testing.
RUN npm install

# Copy the rest of your application's source code.
COPY . .

# ---- Stage 2: Production ----
# Use a slim, official Node.js image for the final, smaller production image.
FROM node:20-alpine

# Set the working directory in the container.
WORKDIR /app

# Copy package.json and package-lock.json again.
COPY package*.json ./

# Install *only* the production dependencies. devDependencies are skipped.
RUN npm install --production

# Copy the application source code from the 'build' stage.
COPY --from=build /app .

# Expose the port the app runs on (from your .env file).
EXPOSE 5000

# Define the command to run your app.
CMD [ "node", "src/index.js" ]
