#------stage-1 => jar builder---------
    #Maven image
FROM maven:3.8.3-openjdk-17 AS builder

    #Set working directory
WORKDIR /app

    #Copy source code from local to container
COPY . .

    #Build application and skip test cases
RUN mvn clean install -DskipTests=true


#------stage-2 => app build---------
    #Impoet small size java image
FROM openjdk:17-alpine

    #Set working directory
WORKDIR /app

    #Copy build from stage 1 (builder)
COPY --from=builder /app/target/*.jar /app/Quickcareservicee.jar

    #Start the application
CMD ["java", "-jar", "Quickcareservicee.jar"]