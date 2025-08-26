// script.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, limit, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE0ar8JMPjc9-LTKn8FSOBeriVsegtot4",
  authDomain: "urlshortner-3cbda.firebaseapp.com",
  projectId: "urlshortner-3cbda",
  storageBucket: "urlshortner-3cbda.appspot.com",
  messagingSenderId: "299618523499",
  appId: "1:299618523499:web:bae9a63eb704bbda20142e",
  measurementId: "G-3D652P2L90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// DOM Elements
const urlInput = document.getElementById('url-input');
const shortenBtn = document.getElementById('shorten-btn');
const urlList = document.getElementById('url-list');
const errorContainer = document.getElementById('error-container');

// Generate random short code
function generateShort() {
  return Math.random().toString(36).substring(2, 8);
}

// Validate URL
function isValidUrl(string) {
  try {
    const url = new URL(string);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch (_) {
    return false;
  }
}

// Show error message
function showError(message) {
  errorContainer.innerHTML = `<div class="error">${message}</div>`;
  setTimeout(() => {
    errorContainer.innerHTML = '';
  }, 5000);
}

// Copy URL to clipboard
async function copyUrl(shortUrl, button) {
  try {
    await navigator.clipboard.writeText(shortUrl);
    const originalText = button.textContent;
    button.textContent = 'Copied!';
    button.style.background = '#2196F3';
    setTimeout(() => {
      button.textContent = originalText;
      button.style.background = '#4CAF50';
    }, 1500);
  } catch (err) {
    alert('Failed to copy to clipboard.');
  }
}

// Delete URL
async function deleteUrl(docId) {
  if (!confirm('Are you sure you want to delete this URL?')) return;
  try {
    await deleteDoc(doc(db, 'urls', docId));
    loadUrls();
  } catch (err) {
    console.error(err);
    showError('Failed to delete URL.');
  }
}

// Display URLs
function displayUrls(docs) {
  if (docs.length === 0) {
    urlList.innerHTML = '<li class="empty-state">No URLs shortened yet. Create your first short link above!</li>';
    return;
  }

  urlList.innerHTML = '';
  docs.forEach((docItem, index) => {
    const data = docItem.data();
    const li = document.createElement('li');
    li.className = 'url-item';
    li.style.animationDelay = `${index * 0.1}s`;

    li.innerHTML = `
      <div class="url-content">
        <a href="${data.short}" target="_blank" class="short-url">${data.short}</a>
        <div class="original-url">${data.original}</div>
      </div>
      <div>
        <button class="copy-btn">Copy</button>
        <button class="copy-btn" style="background:#f44336;margin-left:5px;">Delete</button>
      </div>
    `;

    // Copy button
    li.querySelectorAll('.copy-btn')[0].addEventListener('click', (e) => copyUrl(data.short, e.target));
    // Delete button
    li.querySelectorAll('.copy-btn')[1].addEventListener('click', () => deleteUrl(docItem.id));

    urlList.appendChild(li);
  });
}

// Load URLs from Firestore
async function loadUrls() {
  try {
    const q = query(collection(db, 'urls'), orderBy('timestamp', 'desc'), limit(50));
    const querySnapshot = await getDocs(q);
    displayUrls(querySnapshot.docs);
  } catch (err) {
    console.error(err);
    urlList.innerHTML = '<li class="empty-state">Unable to load URLs. Please try again later.</li>';
  }
}

// Shorten URL
shortenBtn.addEventListener('click', async () => {
  const original = urlInput.value.trim();

  if (!original) {
    showError('Please enter a URL!');
    urlInput.focus();
    return;
  }

  if (!isValidUrl(original)) {
    showError('Please enter a valid URL (http:// or https://)');
    urlInput.focus();
    return;
  }

  shortenBtn.disabled = true;
  shortenBtn.textContent = 'Shortening...';

  try {
    const shortCode = generateShort();
    const repoPath = window.location.pathname.replace(/\/index\.html$/, '');
    const short = `${window.location.origin}${repoPath}/r/${shortCode}`;

    await addDoc(collection(db, 'urls'), {
      original,
      short,
      shortCode,
      timestamp: new Date()
    });

    urlInput.value = '';
    await loadUrls();
  } catch (err) {
    console.error(err);
    showError('Failed to shorten URL.');
  } finally {
    shortenBtn.disabled = false;
    shortenBtn.textContent = 'Shorten URL';
  }
});

// Enter key support
urlInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') shortenBtn.click();
});

// Initialize
loadUrls();
