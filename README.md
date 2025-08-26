# 🔗 URL Shortener

A modern, responsive web application for shortening URLs with a beautiful user interface and real-time database storage using Firestore Database.

![Status](https://img.shields.io/badge/Status-Live-brightgreen) ![Firebase](https://img.shields.io/badge/Firebase-Firestore-orange) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5\&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3\&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript\&logoColor=black)

---

## ✨ Features

* **Modern UI/UX**: Beautiful glassmorphism design with smooth animations
* **URL Validation**: Only valid HTTP/HTTPS URLs are accepted
* **Real-time Storage**: Uses Firebase Firestore for persistent data
* **Copy to Clipboard**: One-click copying with visual feedback
* **Delete URLs**: Remove shortened URLs from the database
* **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
* **Error Handling**: User-friendly messages and loading states
* **Keyboard Support**: Press Enter to shorten URLs quickly
* **Recent URLs**: Displays up to 50 most recently shortened URLs

---

## 🚀 Live Demo

[Click here to try the URL Shortener](https://lovnishverma.github.io/URL-shortener/)

---

## 🛠️ Technology Stack

* **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
* **Backend**: Firebase Firestore (NoSQL Database)
* **Styling**: Modern CSS with glassmorphism and animations
* **Icons**: Unicode emoji icons

---

## 📁 Project Structure

```
URL-shortener/
│
├── index.html          # Main application file
├── style.css           # Styling for UI/UX
├── script.js           # JavaScript logic for URL shortening and Firebase
├── 404.html            # Optional redirect handling or error page
├── LICENSE             # MIT License
└── README.md           # Project documentation
```

---

## 🔧 Setup Instructions

### Prerequisites

* Modern web browser (Chrome, Firefox, Safari, Edge)
* Internet connection (for Firebase services)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/lovnishverma/URL-shortener.git
   cd URL-shortener
   ```

2. **Open the Application**

   * Simply open `index.html` in a web browser
   * No build process or dependencies required

### Firebase Configuration (Optional)

To use your own Firebase project:

1. **Create a Firebase Project**

   * Go to [Firebase Console](https://console.firebase.google.com/)
   * Create a new project
   * Enable Firestore Database

2. **Get Configuration**

   * Go to Project Settings → General
   * Click on "Web App" → copy the configuration object

3. **Update Configuration**

   * Replace the `firebaseConfig` object in `script.js`

4. **Set Firestore Rules**

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /urls/{document} {
      allow read, write: if true;
    }
  }
}
```

---

## 🎯 Usage

1. **Shorten a URL**

   * Enter a valid URL in the input field
   * Click "Shorten URL" or press Enter
   * Your shortened URL appears in the list

2. **Copy Shortened URL**

   * Click the "Copy" button to copy the URL to the clipboard

   Your shortened URL format: `https://lovnishverma.github.io/URL-shortener/?r=abc123`


3. **Delete URL**

   * Click the "Delete" button to remove a URL from the list and Firestore

4. **Visit Original URL**

   * Click on any shortened URL to visit the original website

---

## 🎨 Design Features

* **Glassmorphism**: Semi-transparent containers with backdrop blur
* **Gradient Backgrounds**: Beautiful gradient colors
* **Smooth Animations**: Fade-in, slide-in, hover effects
* **Responsive Layout**: Adapts to all screen sizes

---

## 📱 Browser Compatibility

* ✅ Chrome 60+
* ✅ Firefox 55+
* ✅ Safari 12+
* ✅ Edge 79+
* ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🔐 Security Features

* **URL Validation**: Prevents invalid or malicious URLs
* **HTTPS Firebase**: Encrypted data transmission
* **Input Sanitization**: Prevents XSS attacks

---

## 🚀 Performance

* **Lightweight**: No external dependencies besides Firebase
* **Fast Loading**: Single HTML file with embedded CSS and JS
* **Optimized Queries**: Firebase queries limited and ordered
* **Lazy Loading**: Loads only necessary data

---

## 🐛 Troubleshooting

### Common Issues

* **URLs not saving**: Check internet connection and Firebase config
* **Copy not working**: HTTPS required; falls back to legacy method
* **Styling issues**: Clear browser cache and reload

---

## 🤝 Contributing

1. Fork the repository
2. Create a branch (`git checkout -b feature/awesome-feature`)
3. Commit your changes (`git commit -m "Add feature"`)
4. Push (`git push origin feature/awesome-feature`)
5. Open a Pull Request

---

## 📈 Future Enhancements

* Custom short URL aliases
* Click analytics and statistics
* QR code generation
* Bulk URL shortening
* User authentication
* URL expiration dates
* Custom domains support

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

Created with ❤️ by [Lovnish Verma](https://github.com/lovnishverma)

---

## 🙏 Acknowledgments

* [Firebase](https://firebase.google.com/) for backend
* Modern CSS techniques for UI
* Web development community for inspiration


