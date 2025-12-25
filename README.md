# ☁️ Cloud-Based Chat Application

A real-time cloud chat application built using **HTML, CSS, JavaScript**, **Node.js**, and **Firebase**.
It supports **secure authentication**, **real-time messaging**, and **multi-user chat** using **Firebase Authentication** and **Firestore Database**.

---

## 📸 Project Screenshots

### 🔐 Login & Registration Page

![Image alt](https://github.com/Indhumithra/Simple-Cloud-Based-Chat-Application/blob/f6dfef3402d8d057c3e7fd4bfe3edf67f4cc8927/Cloud%20Chat%20login%20page.png)


### 💬 Real-Time Chat Page

![Image](<img width="1912" height="1077" alt="Chat page" src="https://github.com/user-attachments/assets/3b6842fe-2293-470b-96cc-cc0b0d5cae99" />)



---

## 🚀 Features

* 🔐 User Registration & Login (Firebase Authentication)
* 💬 Real-time chat using Firebase Firestore
* 👥 Multi-user support
* ☁️ Cloud-based backend
* ⚡ Instant message updates (no refresh)
* 🔒 Secure user sessions
* 📱 Responsive UI

---

## 🛠️ Tech Stack

**Frontend**

* HTML
* CSS
* JavaScript

**Backend**

* Node.js
* Express.js

**Cloud & Database**

* Firebase Authentication
* Firebase Firestore (Real-time database)

---

## 📂 Project Structure

```
cloud-based-chat-application/
│
├── index.html          # Login & Chat UI
├── style.css           # Styling
├── script.js           # Frontend logic (Firebase + UI)
├── server.js           # Node.js backend
├── package.json        # Dependencies
├── node_modules/       # Installed packages
└── README.md           # Documentation
```

---

## 🔧 Prerequisites

Make sure you have the following installed:

* Node.js (LTS)
* npm
* Firebase account
* Code editor (VS Code recommended)
* Modern web browser

---

## 🔥 Firebase Setup (Important)

### Step 1: Create Firebase Project

1. Go to 👉 [https://console.firebase.google.com](https://console.firebase.google.com)
2. Click **Add Project**
3. Give project name → `cloud-chat-application`
4. Disable Google Analytics (optional)
5. Create project

---

### Step 2: Enable Authentication

1. Firebase Console → **Authentication**
2. Click **Get Started**
3. Go to **Sign-in Method**
4. Enable **Email/Password**
5. Save

---

### Step 3: Create Firestore Database

1. Firebase Console → **Firestore Database**
2. Click **Create Database**
3. Choose **Test Mode**
4. Select nearest location
5. Done ✅

---

### Step 4: Get Firebase Config

1. Firebase Console → **Project Settings**
2. Scroll to **Your Apps**
3. Click **Web App (</>)**
4. Copy Firebase config
5. Paste it inside `script.js`

---

## ▶️ How to Run the Project

### Step 1: Clone Repository

```bash
git clone https://github.com/your-username/cloud-chat-application.git
```

### Step 2: Open Project Folder

```bash
cd cloud-chat-application
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Run Backend Server

```bash
node server.js
```

You should see:

```
Server running at http://localhost:5000
```

---

### Step 5: Run Frontend

* Open `index.html` using **Live Server**
* OR open directly in browser

```
http://127.0.0.1:5500/index.html
```

---

## 🧪 How to Use the App

1. **Register** with Email & Password
2. Login using registered credentials
3. Enter message in input box
4. Click **Send**
5. Messages appear in real time
6. Click **Logout** to end session

---

## 📌 Example Chat Output

```
user1@gmail.com: hi
user2@gmail.com: hello
user1@gmail.com: how are you?
```

---

## 🧠 Learning Outcomes

* Firebase Authentication integration
* Firestore real-time data handling
* Full-stack JavaScript workflow
* Cloud-based application deployment concepts
* Secure user management

---


## 📜 License

This project is for **educational and learning purposes**.


