# HACKINTYM - 30 Hour Hackathon

A visually stunning, neon-themed hackathon registration website and admin portal built with Next.js 14, Tailwind CSS, Framer Motion, and Firebase.

## Setup Instructions

### 1. Prerequisites
- Node.js 18+ and npm installed
- A Firebase Project (Google account required)

### 2. Firebase Configuration
To make the project work, you need a Firebase Backend:
1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Create a new Web Project.
3. Once created, go to **Project Settings** > **General** and copy your Firebase config details.
4. Enable **Authentication** (Email/Password sign-in method).
5. Enable **Firestore Database** (Start in production or test mode). You will need these collections:
   - `teams`
   - `sponsors`
6. Create an `.env.local` file in the root of this project and add your Firebase credentials:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY="your-api-key"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="your-auth-domain"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="your-project-id"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="your-storage-bucket"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="your-sender-id"
NEXT_PUBLIC_FIREBASE_APP_ID="your-app-id"
```

### 3. Creating the First Admin
1. Go to your Firebase Console -> **Authentication** -> **Users**.
2. Click **Add User** and create an email/password combination (e.g., `admin@hackintym.com` / `securepassword`).
3. You can now use these credentials to log in at `http://localhost:3000/admin/login`.

### 4. Running the Development Server
Install dependencies and run the local development server:
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

## Deployment

### Deploying to Vercel (Recommended)
1. Push your code to a GitHub repository.
2. Log into [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. **Crucial:** In the Environment Variables section, add all your `NEXT_PUBLIC_FIREBASE_*` variables from `.env.local`.
5. Click **Deploy**.

### Deploying to Firebase Hosting
If you prefer Firebase Hosting instead of Vercel:
1. Install Firebase CLI globally: `npm install -g firebase-tools`
2. Login to Firebase: `firebase login`
3. Initialize hosting: `firebase init hosting` (Choose your project and select `out` or `build` depending on Next.js config).
4. Run `npm run build`
5. Run `firebase deploy`

## Features Included
- **Dark Neon UI:** Modern tech-aesthetic using Tailwind CSS and Framer motion.
- **Responsive Layout:** Works perfectly on Desktop, Tablet, and Mobile devices.
- **Dynamic Sponsor Pipeline:** Fetches sponsors dynamically from Firestore (with hard-coded fallbacks).
- **Registration Form:** Fast, verified team data collection seamlessly saved to Firestore.
- **Admin Dashboard:** Access-restricted area for hackathon organizers to review, approve/reject teams, and export data as CSV.
