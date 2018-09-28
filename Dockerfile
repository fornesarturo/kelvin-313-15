FROM node:7.8.0
# Expose port 3000 for the api
EXPOSE 3000

# Create app directory and set it
RUN mkdir /app
WORKDIR /app

# Install app dependencies
COPY package.json /app
RUN npm install

# Copy files to  app directory
COPY . /app
# Define run script
ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]