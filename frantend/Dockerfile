FROM node:20.18.0-alpine
WORKDIR /app
COPY package*.json ./

# Correction Ligne 4 : Utilisation de 'npm ci' et blocage des scripts malveillants
RUN npm ci --ignore-scripts

COPY . .
EXPOSE 4200

# Correction Ligne 8 : On appelle directement le binaire local au lieu de passer par 'npx'
CMD ["./node_modules/.bin/ng", "serve", "--host", "0.0.0.0", "--poll", "2000"]