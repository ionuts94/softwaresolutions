import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js'
import { getFirestore, collection, doc, setDoc, getDocs, addDoc } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js'

// Elements
const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('form-message');
const loading = document.querySelector('.loading');
const error = document.querySelector('.error-message');
const sent = document.querySelector('.sent-message');

// Event listeners
document.getElementById('submit-button').addEventListener('click', sendFormData);

const firebaseConfig = {
  apiKey: "AIzaSyDZ2Pj3IbcK1TH32N7TcefHouFXvjPS5g4",
  authDomain: "softwaresolutions-2b122.firebaseapp.com",
  projectId: "softwaresolutions-2b122",
  storageBucket: "softwaresolutions-2b122.appspot.com",
  messagingSenderId: "567973867666",
  appId: "1:567973867666:web:64fc9cce0b26b53cd1764b",
  measurementId: "G-XT5Z43LXQM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

async function sendFormData() {
  handleShowLoader(true);

  try {
    const formFields = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value
    }
    const docRef = await addDoc(collection(firestore, "messages"), formFields);
    handleShowLoader(false);
    resetFormFields();
    handleShowSuccess('Mesajul dumneavoastră a fost trimis. Veți fi contactat de unul dintre colegii noștri in cel mai scurt timp. Va mulțumim!');
  } catch (err) {
    if (err) {
      handleShowLoader(false);
      handleShowError('Mesajul dumneavoastră nu a putut fi trimis. Vă rugam să ne contactați prin celelalte mijloace pană remediem situația. Va mulțumim pentru ințelegere.')
    }
  }
}

function resetFormFields() {
  name.value = '';
  email.value = '';
  subject.value = '';
  message.value = '';
}

function handleShowLoader(isLoading) {
  if (isLoading) {
    loading.style.display = 'block';
  } else {
    loading.style.display = 'none';
  }
}

function handleShowError(errorText) {
  if (errorText) {
    error.style.display = 'block';
    error.innerText = errorText;
  } else {
    error.style.display = 'none';
    error.innerText = '';
  }
}

function handleShowSuccess(successText) {
  if (successText) {
    sent.style.display = 'block';
    sent.innerText = successText;
  } else {
    sent.style.display = 'none';
    sent.innerText = '';
  }
}
