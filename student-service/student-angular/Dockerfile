# Stage 1: Build the Angular application
FROM node:18 as build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the Angular app source code
COPY . .

# Build the Angular app for production
RUN npm run build --prod

# Stage 2: Serve the app using NGINX
FROM nginx:1.25

# Copy the built Angular app to NGINX's default public directory
COPY --from=build /app/dist/student-angular /usr/share/nginx/html

# Copy custom NGINX configuration (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
