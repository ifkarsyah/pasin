FROM node:14.17-alpine

# Create app directory
WORKDIR /usr/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./

RUN npm install --silent
RUN npm install react-scripts -g
# RUN npm install yarn -g
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# Dependencies for serving
RUN npm run build
RUN yarn global add serve

# start app
# CMD ["serve", "-s", "build"]