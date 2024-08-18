# Contact Management Application

This is a simple Contact Management Application built using React and Vite. The application allows you to perform CRUD (Create, Read, Update, Delete) operations on contacts, where each contact contains a first name, last name, and phone number.

## Features

- **Create**: Add a new contact with first name, last name, and phone number.
- **Read**: View a list of all contacts.
- **Update**: Edit the details of an existing contact.
- **Delete**: Remove a contact from the list.

## Prerequisites

Make sure you have the following installed on your machine:

- **Node.js**: Download and install from [here](https://nodejs.org/)
- **npm** (Node Package Manager): Comes with Node.js
- **Vite**: Vite is the build tool used for this project. Install it globally with npm:

```bash
npm install -g create-vite
```

## Screenshots

<img src="./screenshots/Screenshot 2024-08-18 084028.png" width="700px" />

<img src="./screenshots/Screenshot 2024-08-18 084058.png" width="700px" />

<img src="./screenshots/Screenshot 2024-08-18 084123.png" width="700px" />

<img src="./screenshots/Screenshot 2024-08-18 084146.png" width="700px" />

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rishi-vakharia/contact-management-app.git
   cd contact-management-app
   ```

2. **Install dependencies:**

   Run the following command to install all the required dependencies:

   ```bash
   npm install
   ```

## Running the Application

To run the application in development mode:

```bash
npm run dev
```

This will start the application and you can access it in your browser at `http://localhost:5173`.

## Project Structure

- **src/pages/ContactList.jsx**: Component responsible for displaying the list of contacts and handling deletion.
- **src/pages/NewContactForm.jsx**: Component for adding new contacts and editing existing ones.
- **src/services/ContactService.js**: Service file for making API calls to the backend.
- **src/App.jsx**: Main component that defines the routing for the application.

## CRUD Operations

### Adding a Contact

- Navigate to the "New Contact" form.
- Fill in the first name, last name, and phone number fields.
- Click the "Save" button to add the contact.

### Viewing Contacts

- The homepage displays a list of all saved contacts, including their first name, last name, and phone number.
- Use the "Edit" button next to a contact to modify its details.

### Editing a Contact

- Click the "Edit" button next to the contact you wish to edit.
- Update the necessary fields in the form.
- Click "Save" to save the changes.

### Deleting a Contact

- Click the "Delete" button next to the contact you wish to remove.
- The contact will be immediately deleted from the list.

## Building for Production

To build the application for production, run:

```bash
npm run build
```

This will create a `dist` folder with all the assets needed to deploy the application.

## Deploying

You can deploy the application using any static site hosting service. To serve the build locally:

```bash
npm install -g serve
serve -s dist
```

## References

https://www.youtube.com/watch?v=IxYa6cKimZc
