FROM maven:3.9.6-eclipse-temurin-17 AS dev
WORKDIR /app
# On copie tout le projet dans le conteneur
COPY . .
RUN chmod +x ./mvnw
# Commande pour lancer Spring Boot en mode développement
CMD ["./mvnw", "spring-boot:run"]