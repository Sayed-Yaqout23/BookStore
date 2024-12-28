# Bookstore App

This project is a Bookstore application built with React for the front-end and Express for the back-end. It allows users to view books and the stores that sell them.

## Project Structure
bookstore-app/ ├── backend/ │ ├── data/ │ │ ├── authors.json │ │ ├── books.json │ │ ├── stores.json │ │ └── inventory.json │ ├── server.js │ └── package.json ├── frontend/ │ ├── public/ │ │ └── index.html │ ├── src/ │ │ ├── components/ │ │ │ ├── LeftSidebar.jsx │ │ ├── pages/ │ │ │ ├── HomePage.jsx │ │ │ ├── BooksPage.jsx │ │ │ ├── StoresPage.jsx │ │ │ └── StoreInventoryPage.jsx │ │ ├── services/ │ │ │ └── api.js │ │ ├── styles/ │ │ │ └── ShopPage.css │ │ ├── App.jsx │ │ ├── index.js │ ├── package.json │ └── README.md ├── .gitignore └── README.md


## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/bookstore-app.git
   cd bookstore-app

2. Install dependencies for the backend: 

   cd backend
   npm install

3. Install dependencies for the frontend: 

cd ../frontend
npm install

### Running the Application
#### 1.Start the backend server:
cd backend
npm start

The backend server will run on http://localhost:3001.

#### 2.Start the frontend application:
cd ../frontend
npm start
The frontend application will run on http://localhost:3000.

### Available Scripts
In the frontend directory, you can run:

npm start: Runs the app in development mode.
npm test: Launches the test runner in interactive watch mode.
npm run build: Builds the app for production to the build folder.
npm run eject: Removes the single build dependency from your project.

In the backend directory, you can run:

npm start: Starts the Express server.

### API Endpoints
The backend server provides the following API endpoints:

 #### GET /authors: Returns a list of authors.
#### GET /books: Returns a list of books.
 #### GET /stores: Returns a list of stores.
 #### GET /inventory: Returns the inventory for a specific store based on the storeId query parameter.
### Project Structure
 #### backend/: Contains the Express server and data files.
  #### frontend/: Contains the React application.
 #### data/: Contains JSON files with sample data for authors, books, stores, and inventory.
  #### src/: Contains the source code for the React application.
 #### components/: Contains reusable React components.
  #### pages/: Contains page components for different routes.
 #### services/: Contains API service functions.
 #### styles/: Contains CSS files for styling.
### Contributing
Contributions are welcome! Please open an issue or submit a pull request.

### License
This project is licensed under the MIT License.



