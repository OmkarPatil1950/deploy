# Use the OpenShift base image for Java applications
FROM registry.access.redhat.com/ubi8/openjdk-11

# Set the working directory in the container
WORKDIR /app

# Copy the executable JAR file and any other necessary files to the container
COPY target/my-api.jar /app/my-api.jar

# Expose the port on which the Spring Boot application will listen
EXPOSE 8080

# Set the user for running the application
USER 1001

# Set the command to run the Spring Boot application when the container starts
CMD ["java", "-jar", "/app/my-api.jar"]
