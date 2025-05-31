# Use OpenJDK 21 base image
FROM eclipse-temurin:21-jdk

# Set working directory
WORKDIR /app

# Copy the JAR file into the container
COPY target/research-assistant-0.0.1-SNAPSHOT.jar app.jar

# Expose default Spring Boot port
EXPOSE 8080

# Set environment variable (Render also injects this)
ENV GEMINI_KEY=${GEMINI_KEY}

# Start the Spring Boot app
ENTRYPOINT ["java", "-jar", "app.jar"]
