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

1. **Open MySQL Workbench:**

   - Start MySQL Workbench and connect to your MySQL server.

2. **Set SQL Mode:**

   - Open a new query tab by clicking `File` > `New Query Tab`.
   - Run the following command to adjust the SQL mode settings:

     ```sql
     SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));
     ```

   - This step is important for compatibility with certain SQL scripts.

3. **Create a New Schema:**

   - Click on the `Schemas` tab.
   - Right-click and select `Create Schema`.
   - Enter a name for your schema (e.g., `your_database_name`) and click `Apply`.

4. **Import the SQL Script:**

   - Go to `File` > `Open SQL Script` and select `SQL-DUMP.sql` from your project folder.
   - Make sure the new schema is selected in the dropdown menu.

5. **Execute the Script:**

   - Click the `Execute` button (lightning bolt icon) to run the script.
   - This will create tables and insert data as defined in your SQL file.

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
    database: "dbs",          // Replace with your database name (schema name)
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


### 6. Access the Website
Open your web browser and go to http://localhost:3000.

Account Types:
1. Normal Account: Username: asddd, Password: 1234
2. Admin Account: Username: 12345, Password: 12345 (Access to the back-office system)