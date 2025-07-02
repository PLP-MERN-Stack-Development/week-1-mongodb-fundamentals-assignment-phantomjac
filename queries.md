# MongoDB Queries and Operations

This `README.md` file explains how to execute the MongoDB queries and operations provided in the `queries.js` script.

## Prerequisites

Before running these scripts, ensure you have:

1.  **MongoDB Server:** A running instance of MongoDB.

2.  **MongoDB Shell (`mongosh` or `mongo`):** Installed and accessible from your terminal. `mongosh` is the modern MongoDB Shell.

## How to Run the Scripts

Follow these steps to execute the queries:

### 1. Save the Script

Copy the content of the `queries.js` code block and save it to a file named `queries.js` in a directory of your choice.

### 2. Connect to Your MongoDB Database

Open your terminal or command prompt and connect to your MongoDB instance using `mongosh` (or `mongo`). Specify the database you want to use. If the database doesn't exist, MongoDB will create it upon the first data insertion.

```bash
mongosh <your_database_name>
