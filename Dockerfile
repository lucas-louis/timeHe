# Set the base image
FROM node:16.5-alpine

# Retrieve sources
WORKDIR /app
COPY . /app

# Install dependencies
RUN yarn

# Expose PORT
EXPOSE 3000

# Declare entrypoint
ENTRYPOINT ["yarn"]
CMD ["start"]