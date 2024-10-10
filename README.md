# Cybersecurity Dashboard App 

This is an ongoing project focused on building a **Cybersecurity Dashboard** using **React.js** and **Tailwind CSS** for frontend development. The application integrates **Firebase (Firestore & Auth)** for authentication and database services, and **AWS Lambda** and **AWS S3** for password backup functionality. 

## 🚧 Project Status: In Development

Currently, the **main dashboard page** is complete, and the remaining features are actively under development. Future features include a **Password Generator**, **User Authentication**, **Profile Manipulation**, and **Settings**. The dashboard will also provide insights into password health, such as detecting breached, weak, reused, and expired passwords.

---

##  Features (Completed & Upcoming)

### Completed:
- **Dashboard Layout**: A responsive and dynamic user interface for the cybersecurity dashboard, built with React.js and styled using Tailwind CSS.
- **Firebase Integration**: Firebase has been integrated into the project, with Firestore planned for storing user-generated passwords, and Firebase Authentication to manage users.

### Upcoming Features:
- **Password Generator**: Users will be able to generate strong, random passwords directly from the dashboard.
- **Password Health Analysis**: 
  - **Breached Passwords**: Detection of passwords found in data breaches.
  - **Weak Passwords**: Identifying passwords that are easy to crack or don't meet complexity requirements.
  - **Reused Passwords**: Alerting users to passwords that are reused across different accounts.
  - **Expired Passwords**: Notifying users about passwords that haven't been rotated or changed in a while.
- **User Authentication**: Full Firebase Authentication integration (with email and social logins) is planned.
- **Profile Manipulation**: Users will be able to edit their profiles, manage passwords, and customize their settings.
- **Password Backup to AWS S3**: Users will be able to back up their generated passwords to AWS S3, with secure password encryption using AWS Lambda.
- **Settings Page**: Options for password complexity, security preferences, and notification settings.

---

## 🛠️ Technologies Used

- **Frontend**:
  - [React.js](https://reactjs.org/) - A JavaScript library for building user interfaces.
  - [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for styling the app.
  
- **Backend & Cloud Services**:
  - **Firebase**:
    - **Firestore**: To store user data and generated passwords.
    - **Authentication**: To manage user accounts and secure access.
  - **AWS**:
    - **AWS Lambda**: For running serverless functions to encrypt and securely store password backups.
    - **AWS S3**: To store user password backups in the cloud.
---

## 📋 Setup Instructions

Follow these steps to run the project locally on your machine:

### Prerequisites
- **Node.js**: Ensure that Node.js is installed on your system.
- **Firebase Account**: You need a Firebase account and project set up.
- **AWS Account**: Set up an AWS account for Lambda and S3 integrations.

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ramankhanal7/cybersecurity-dashboard.git
   cd cybersecurity-dashboard
2. **Install Dependencies**:
   ```
   npm install
4. **Setup Firebase**:
   Create a .env file in the root of the project and add the following environment variables with your Firebase credentials:
   ```
   REACT_APP_FIREBASE_API_KEY=your-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   REACT_APP_FIREBASE_APP_ID=your-app-id
6. **Run Development Server**:
   ```
   npm start
8. **View Live App**:
   Open ```http://localhost:3000``` in your browser to view the app. If port is taken by another service on your device, edit source code to start server on different port.
