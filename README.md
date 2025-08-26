# 🔗 URL Shortener

A modern, responsive web application for shortening URLs with a beautiful user interface and real-time database storage using Firebase Firestore.

![URL Shortener Demo](https://img.shields.io/badge/Status-Live-brightgreen) ![Firebase](https://img.shields.io/badge/Firebase-Firestore-orange) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

- **Modern UI/UX**: Beautiful glassmorphism design with smooth animations
- **URL Validation**: Ensures only valid HTTP/HTTPS URLs are accepted
- **Real-time Storage**: Uses Firebase Firestore for persistent data storage
- **Copy to Clipboard**: One-click copying with visual feedback
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Error Handling**: User-friendly error messages and loading states
- **Keyboard Support**: Press Enter to shorten URLs quickly
- **Recent URLs**: Displays up to 50 most recently shortened URLs

## 🚀 Live Demo

Open the HTML file in any modern web browser to start using the URL shortener immediately.

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Backend**: Firebase Firestore (NoSQL Database)
- **Styling**: Custom CSS with modern design principles
- **Icons**: Unicode emoji icons

## 📁 Project Structure

```
url-shortener/
│
├── index.html          # Main application file (complete standalone app)
├── README.md           # Project documentation
└── firebase-config.js  # Firebase configuration (embedded in HTML)
```

## 🔧 Setup Instructions

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for Firebase services)

### Installation

1. **Clone or Download**
   ```bash
   git clone <repository-url>
   cd url-shortener
   ```

2. **Open the Application**
   - Simply open `index.html` in your web browser
   - No build process or dependencies required!

### Firebase Configuration (Optional)

The app comes with a pre-configured Firebase project. To use your own Firebase project:

1. **Create a Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Firestore Database

2. **Get Configuration**
   - Go to Project Settings → General
   - Scroll down to "Your apps" and click "Web"
   - Copy the configuration object

3. **Update Configuration**
   - Replace the `firebaseConfig` object in the HTML file with your configuration

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

## 🎯 Usage

1. **Shorten a URL**
   - Enter any valid URL in the input field
   - Click "Shorten URL" or press Enter
   - Your shortened URL will appear in the list below

2. **Copy Shortened URL**
   - Click the "Copy" button next to any shortened URL
   - The URL is automatically copied to your clipboard

3. **Visit Original URL**
   - Click on any shortened URL to visit the original website

## 🎨 Design Features

### Visual Elements
- **Glassmorphism Effect**: Semi-transparent containers with backdrop blur
- **Gradient Backgrounds**: Beautiful color gradients throughout the interface
- **Smooth Animations**: Fade-in, slide-in, and hover effects
- **Responsive Layout**: Adapts to different screen sizes seamlessly

### User Experience
- **Loading States**: Visual feedback during URL shortening process
- **Error Messages**: Clear, helpful error messages with auto-dismiss
- **Copy Feedback**: Button changes to "Copied!" with color animation
- **Empty States**: Friendly messages when no URLs are present

## 📱 Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔐 Security Features

- **URL Validation**: Prevents invalid or malicious URLs
- **HTTPS Firebase**: All data transmission is encrypted
- **Input Sanitization**: Prevents XSS attacks through proper encoding

## 🚀 Performance

- **Lightweight**: No external dependencies except Firebase
- **Fast Loading**: Single HTML file with embedded CSS and JavaScript
- **Optimized Queries**: Firebase queries are limited and ordered for performance
- **Lazy Loading**: Only loads necessary data when needed

## 🐛 Troubleshooting

### Common Issues

1. **URLs not saving**
   - Check internet connection
   - Verify Firebase configuration
   - Check browser console for errors

2. **Copy to clipboard not working**
   - Modern browsers require HTTPS for clipboard API
   - Falls back to legacy copy method automatically

3. **Styling issues**
   - Ensure you're using a modern browser
   - Clear browser cache and reload

### Error Messages

- **"Please enter a URL!"** - The input field is empty
- **"Please enter a valid URL"** - URL must start with http:// or https://
- **"Failed to shorten URL"** - Network or Firebase error occurred

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📈 Future Enhancements

- [ ] Custom short URL aliases
- [ ] Click analytics and statistics
- [ ] QR code generation
- [ ] Bulk URL shortening
- [ ] User authentication and personal URL management
- [ ] URL expiration dates
- [ ] Custom domains support

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created with ❤️ by [Lovnish Verma]

## 🙏 Acknowledgments

- [Firebase](https://firebase.google.com/) for providing the backend infrastructure
- Modern CSS techniques for the beautiful UI design
- The web development community for inspiration and best practices

---

**⭐ If you found this project helpful, please give it a star!**

For questions or support, please open an issue in the repository.
