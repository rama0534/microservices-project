 FROM eclipse-temurin:17-jdk-alpine

# Add application JAR to the container
ARG JAR_FILE=target/student-service-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} app.jar

# Default environment variable for profile (can be overridden)
ENV SPRING_PROFILES_ACTIVE=prod
ENV CORS_ALLOWED_ORIGIN=http://angular-service

# Expose application port
EXPOSE 8080

# Command to run the application with the active profile
ENTRYPOINT ["java", "-Dspring.profiles.active=${SPRING_PROFILES_ACTIVE}", "-jar", "/app.jar"]
