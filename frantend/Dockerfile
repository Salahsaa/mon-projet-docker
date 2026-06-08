FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4200
# Le paramètre --poll permet à Docker de détecter tes modifications de code sur Windows/Mac
CMD ["npx", "ng", "serve", "--host", "0.0.0.0", "--poll", "2000"]