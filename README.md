Team member
---
- 652115007 Jiraphat Lamun
- 652115011 Chawanakorn Sanannam
- 652115033 Pattaradanai Taemdee


---

## Prerequisites

- Node.js (v14 or higher)
- MySQL (v5.7 or higher)
- npm (Node Package Manager)

## Installation Guide

Follow these steps to set up the project on your local machine.

### 1. Clone the Repository

Clone the repository from GitHub:

```bash
git clone https://github.com/Pattaradanai888/JFF-return
cd JFF-return

```
### 2. Set Up the Database

1. Open MySQL Workbench and select the schema
2. Run the SQL script by selecting SQL-DUMP.sql
3. Execute the script to set up the database schema and initial data

### 3. Install Dependencies
Install the required Node.js packages:
```bash
npm install

```

### 4. Configure the database connection
Open db.js in the config folder and update the configuration:

```
let config = {
    host: "localhost",        // Replace with your database hostname
    user: "root",             // Replace with your database username
    password: "PASSWORD",    // Replace with your database password
    database: "dbs",          // Replace with your database name
};
```

### 5. Start the Application
Run the application:
```
nodemon app.js
```
Or:
```
node app.js
```