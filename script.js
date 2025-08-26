// Import Firebase functions
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

const urlInput = document.getElementById('url-input');
const shortenBtn = document.getElementById('shorten-btn');
const urlList = document.getElementById('url-list');
const errorContainer = document.getElementById('error-container');

// Repository folder path for GitHub Pages
const repoPath = '/URL-shortener'; // change if your repo name changes

// Generate short code
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

// Show error
function showError(message) {
  errorContainer.innerHTML = `<div class="error">${message}</div>`;
  setTimeout(() => {
    errorContainer.innerHTML = '';
  }, 5000);
}

// Copy URL
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
    alert('Failed to copy URL.');
  }
}

// Delete URL
async function deleteUrl(docId) {
  if (!confirm('Are you sure you want to delete this URL?')) return;
  await deleteDoc(doc(db, 'urls', docId));
  loadUrls();
}

// Display URLs
function displayUrls(urls) {
  if (urls.length === 0) {
    urlList.innerHTML = '<li class="empty-state">No URLs shortened yet. Create your first short link above!</li>';
    return;
  }

  urlList.innerHTML = '';
  urls.forEach((docItem, index) => {
    const data = docItem.data();
    const li = document.createElement('li');
    li.className = 'url-item';
    li.style.animationDelay = `${index * 0.1}s`;

    li.innerHTML = `
      <div class="url-content">
        <a href="${data.original}" target="_blank" class="short-url">${data.short}</a>
        <div class="original-url">${data.original}</div>
      </div>
      <div>
        <button class="copy-btn">Copy</button>
        <button class="copy-btn" style="background:#E53935;margin-left:10px;">Delete</button>
      </div>
    `;

    const copyButton = li.querySelector('.copy-btn:first-child');
    copyButton.addEventListener('click', () => copyUrl(data.short, copyButton));

    const deleteButton = li.querySelector('.copy-btn:last-child');
    deleteButton.addEventListener('click', () => deleteUrl(docItem.id));

    urlList.appendChild(li);
  });
}

// Load URLs
async function loadUrls() {
  try {
    const q = query(collection(db, 'urls'), orderBy('timestamp', 'desc'), limit(50));
    const querySnapshot = await getDocs(q);
    displayUrls(querySnapshot.docs);
  } catch (err) {
    console.error(err);
    urlList.innerHTML = '<li class="empty-state">Unable to load URLs. Try again later.</li>';
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
    showError('Please enter a valid URL (must start with http:// or https://)');
    urlInput.focus();
    return;
  }

  shortenBtn.disabled = true;
  shortenBtn.textContent = 'Shortening...';

  try {
    const shortCode = generateShort();
    const short = `${window.location.origin}${repoPath}/r/${shortCode}`;
    await addDoc(collection(db, 'urls'), { original, short, timestamp: new Date() });
    urlInput.value = '';
    loadUrls();
  } catch (err) {
    console.error(err);
    showError('Failed to shorten URL. Try again.');
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
