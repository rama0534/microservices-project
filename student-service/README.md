 # Student Service - Spring Boot

----
## **📌 Project Description**
The **Student Service** project is a **Spring Boot** application that provides **RESTful APIs** for managing student records and study materials. It interacts with a **PostgreSQL database** to perform **CRUD operations** on student data and includes functionality to **extract questions and answers from PDF files**.

### **🔹 Features**
✅ REST APIs for **Create, Read, Update, and Delete (CRUD)** operations on students.  
✅ API to **extract and return questions and answers** from PDF documents.  
✅ Integration with **PostgreSQL** for persistent student data storage.  
✅ Uses **Spring Data JPA** for database interactions.  
✅ Built using **Spring Boot**, **Maven**, and **Lombok** for streamlined development.  
✅ Secure and optimized API responses.

---

## **🚀 How to Run the Spring Boot Project**

### **🔹 Prerequisites**
Ensure you have the following installed before running the project:

- **Java 17+** (JDK) 
- **Maven** 
- **PostgreSQL** (or Docker for PostgreSQL)
- **Git** (To clone the repository)

---

### **🔹 Setup and Installation**

1. **Clone the repository:**
   ```sh
   git clone https://github.com/rama0534/microservices-project.git
   cd  /microservices-project/student-service
   ```

2. **Configure the database:**  
   Update `application.properties` (or `application.yml`) inside `src/main/resources/` with your PostgreSQL credentials:
   ```properties
   spring.datasource.url=jdbc:postgresql://localhost:5432/student_db
   spring.datasource.username=your_db_username
   spring.datasource.password=your_db_password

   spring.jpa.hibernate.ddl-auto=update
   spring.jpa.show-sql=true
   ```

3. **Build the project:**
   ```sh
   mvn clean install
   ```
4. **Run the Postgres:**
   Create a student table using students.sql provided in resource folder.
   ```sh
   docker run --rm --name=your_db_username  -it -d -p 5432:5432 -v /tmp/postgres/:/var/lib/postgresql/data -e POSTGRES_PASSWORD=your_db_password postgres:11-alpine
   ```
    ```sh
      CREATE TABLE students (
                          id SERIAL PRIMARY KEY,
                          name VARCHAR(50) NOT NULL,
                          score INT CHECK (score >= 0 AND score <= 100),
                          grade CHAR(1) CHECK (grade IN ('A', 'B', 'C', 'D', 'F'))
    );
   ```
   

5. **Run the application:**
   ```sh
   mvn spring-boot:run
   ```
   The application will start on **http://localhost:8080**.

---

## **🛠️ API Endpoints**

### **🔹 Student Management APIs**

| Method | Endpoint            | Description                      |
|--------|---------------------|----------------------------------|
| GET    | `/api/students`     | Get all student records         |
| GET    | `/api/students/{id}` | Get student by ID               |
| POST   | `/api/students`     | Add a new student               |
| PUT    | `/api/students/{id}` | Update student details          |
| DELETE | `/api/students/{id}` | Delete a student                |

### **🔹 PDF Processing API**

| Method | Endpoint                      | Description                          |
|--------|-------------------------------|--------------------------------------|
| GET    | `/api/pdf/extract/{fileName}` | Extract Q&A from a PDF file         |

---

## **📢 Notes**
- Ensure **PostgreSQL is running** before starting the application.
- The **Angular frontend** must be running separately to interact with this backend.
- Refer to the **Angular project’s README.md** for frontend setup.

 ## How to run the spring boot(student-service) project
*for UI please check README.md in student-angular folder


 #### Method 1
 - clone the repository and make sure you have the application properties files
 - Start your docker desktop app and run the below command in terminal for Postgres.
 - check `https://www.youtube.com/watch?v=pg19Z8LL06w` for docker.

 ```
          docker run --rm --name=your_db_username  -it -d -p 5432:5432 -v /tmp/postgres/:/var/lib/postgresql/data -e POSTGRES_PASSWORD=your_db_password postgres:11-alpine 
   ```
 - Now Postgres is ready test the connection with IDE tools and create a table with script from `src/main/resources/db/students.sql`
 - Run with Maven from src folder run ` mvn spring-boot:run -Dspring-boot.run.profiles=dev`
 - Or you can edit configuration change Active profile to Dev in IDE
 - Via command line open the src/target folder and run
     `java -jar student-service-0.0.1-SANPSHOT.jar --spring.profiles.active=dev
     `
#### Method 2
- clone the repository and make sure you have the application properties files.
- Start your docker desktop app.
- Open a terminal/command prompt, navigate to microservices-project/student-service then run `docker compose up`.
- Use the Postman to do CRUD operations.
- Here I am not using existed docker image of springboot like Postgres. 
- If you want to use the docker image Open a terminal/command prompt, navigate to microservices-project/student-service.
- Then run the below command.

 ``` 
     docker build -t student-service:0.1 ./ 
 ```
- Comment out `build: ../student-service` and use `image: student-service:0.1`
- check out `https://www.youtube.com/watch?v=3c-iBn73dDE` for more information. 
- In this method I am using The `postgres_data` volume stores the PostgreSQL database data.
- It's ensuring that the data is not lost when the container is stopped, removed, or recreated.
- PostgreSQL writes its data to `/var/lib/postgresql/data` inside the container. 
- By mapping this directory to a Docker volume (`postgres_data`), the data persists independently of the container's lifecycle.
- If you want to remove the data then run `docker-compose down -v`

