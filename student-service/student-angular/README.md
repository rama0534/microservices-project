# **Student Service - Angular**

---
## **📌 Project Description**
This is the **frontend application** for the **Student Service** project, built using **Angular**. It provides a user-friendly interface to:
- Perform **CRUD operations** (Create, Read, Update, Delete) on student records.
- Fetch and display **study materials** from **PDF files**.
- Interact with the **Spring Boot backend** via **REST APIs**.
- Render extracted **questions and answers** from uploaded PDFs.

The application ensures **smooth navigation** and **seamless user experience** for managing student details and accessing study materials.

---

## **🚀 How to Run the Angular Project**

### **🔹 Prerequisites**
Ensure you have the following installed before running the project:
- **Node.js** (Latest LTS version) – [Download here](https://nodejs.org/)
- **Angular CLI** – Install using:
  ```sh
  npm install -g @angular/cli
  ```
- **A running backend** (Spring Boot Student Service)

---

### **🔹 Setup and Installation**

1. **Clone the repository:**
   ```sh
   git clone https://github.com/rama0534/microservices-project.git
   cd /microservices-project/student-service/student-angular
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Configure API endpoints** (If needed, update `environment.ts` with the correct backend URL)

4. **Run the development server:**
   ```sh
   ng serve
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:4200
   ```

---

## **🛠️ Build for Production**
To generate an optimized production build, run:
```sh
ng build --configuration=production
```

This will create a `dist/` folder containing the compiled files for deployment.

---

## **📢 Notes**
- Ensure the **Spring Boot backend** is running before using the UI. Otherwise, API calls won't work.
- Check the **README.md** in the backend project for backend setup instructions.

Let me know if you need further modifications! 🚀
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


