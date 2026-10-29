# L'image de base : Node.js 24, version Alpine (legere)
FROM node:24-alpine

# Le dossier de travail dans le conteneur
WORKDIR /app

# D'abord les dependances (cette couche reste en cache tant qu'elles ne changent pas)
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Ensuite le code
COPY src ./src

# On n'execute jamais l'application en root
USER node

EXPOSE 3000
CMD ["node", "src/server.js"]
