FROM node:18.15.0-alpine3.17
WORKDIR /app
COPY package*.json .
RUN npm install 
COPY . .
# ENV MONGO_URL=mongodb+srv://kanaka:11225@nodeexpressprojects.3nte6.mongodb.net/DataCenterDatabase?retryWrites=true&w=majority
EXPOSE 5000
CMD ["npm", "start"]
