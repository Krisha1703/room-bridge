# 🏨 Roombridge - Hotel Room Booking System

## 📋 Overview
**Roombridge** is an ongoing personal project designed to streamline the hotel room booking process for users. It features a seamless experience for users to select their room preferences, view available rooms, and complete bookings. The platform supports multiple user roles, including guests, registered users, housekeeping, receptionists, managers, and admins. The project is built using **Next.js**, **Tailwind CSS**, **Framer Motion**, and **MongoDB**.

### Current Status:
- The **landing page** has been completed, with sections like **Hero**, **Popular Rooms**, **Activities**, **Gallery**, and **Footer**.
- **Login and sign-up modals** have been implemented. Users receive a **verification email** after signing up, and can only log in once their account is verified.
- The **Guest dashboard** is implemented, where users can view and manage their bookings based on their role.
- **Resend** is used for sending verification emails.
- The project is still in progress with ongoing features being added.

## 🖥️ Tech Stack
- **Frontend:** Next.js ⚡, Tailwind CSS 🎨, Framer Motion 🖼️
- **Backend:** Next.js server actions 🌐
- **Database:** MongoDB, Prisma ORM 🗄️ (for storing booking data and user information)
- **API Integration:** RESTful APIs for user management, booking, and preferences.
- **Email API:** Resend (for verification emails)

## 🚀 Features

### ✅ Implemented Features
- **Landing Page:** Sections include Hero, Popular Rooms, Activities, Gallery, and Footer.

![hero-section.png](/public/screenshots/hero-section.png)
*Hero section.*

![why-roombridge.png](/public/screenshots/why-roombridge.png)
*Why choose RoomBridge.*

![most-popular-rooms.png](/public/screenshots/popular-rooms.png)
*Popular and trending rooms.*

![gallery-image.png](/public/screenshots/gallery-image.png)
*Gallery section.*

![footer-section.png](/public/screenshots/footer-section.png)
*Footer section.*

- **Login and Sign-up Modals:** Users sign up, verify their email, and then log in to access the platform.
    - *Note: Test Credentials* 
        - username: testuser@example.com
        - password: testpassword123

![login-modal.png](/public/screenshots/login-modal.png) 
*User login modal.*

- **User Role-Based Dashboard:** Displays different views based on the user’s role (currently implemented for Guests).

![dashboard.png](/public/screenshots/dashboard.png)
*User dashboard.*

- **Email Verification:** Users must verify their email via a confirmation link before accessing the platform.
- **MongoDB Database Integration:** Data is stored securely for user management.
- **Mobile-Friendly:** Optimized for use across devices, ensuring a smooth experience on both desktop and mobile.

### 🚧 Ongoing and Future Features
- **🚀 Add More User Roles:** Expanding user roles to include Housekeeping, Receptionist, Manager, Admin, etc., with role-specific dashboards and functionalities.
- **🚀 Room Preferences:** Allow users to filter and select room types based on preferences (e.g., budget, amenities, location).
- **🚀 Implement Advanced Filtering:** Add options to filter rooms by type, location, and other attributes for easier navigation.
- **🚀 Payment Gateway Integration:** Add support for secure payments to complete the booking process.
- **🚀 Room Rating and Review System:** Implement a system for guests to rate and review rooms and services.
- **🚀 Notifications:** Email notifications for booking confirmations, cancellations, and reminders.
- **🚀 Dynamic Pricing and Exclusive Offers:** Implement a dynamic pricing model based on room availability, time, exclusive offers, and demand.

## 🛠️ Installation
1. Clone the repository:
   ```bash
   https://github.com/Krisha1703/room-bridge.git
   ```
2. Navigate to the project directory:
   ```bash
   cd room bridge
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm run dev
   ```

### 🖥️ Live Deployed Link
https://room-bridge.vercel.app

### 🖥️ Project Video Demo
https://drive.google.com/file/d/1SAXcbrW15kfVM5ShW_ScqlS0wlf9-LCb/view?usp=sharing


