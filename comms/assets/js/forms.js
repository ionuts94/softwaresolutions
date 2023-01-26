import { Form } from './classes/Form.js';
import { hideModal } from './main.js';


// Find more form

export function handleCreateFindMoreForm(button) {
  const key = button.dataset.for;
  const message = button.dataset.preFilledMessage;

  const modalSection = document.querySelector('.modal-section');
  injectFindMoreForm(modalSection);

  const closeModalBtn = document.querySelector('.close-form');
  const formInputs = document.querySelectorAll('.find-more-input');
  const loading = document.querySelector('.loading');
  const error = document.querySelector('.error-message');
  const sent = document.querySelector('.sent-message');
  const findMoreSubmitButton = document.querySelector('.find-more-submit-button');

  const form = new Form(formInputs, loading, error, sent);
  form.setElementProperty(key, message);
  findMoreSubmitButton.addEventListener('click', () => form.sendFormData());

  closeModalBtn.addEventListener('click', () => {
    hideModal(() => {
      form.resetFormStatus();
      form.resetFormFields();
    })
  })

  return form;
}

function injectFindMoreForm(parent) {
  parent.innerHTML = '';
  const elem = `<div class="find-more-form">
  <button class="close-form">
    <i class="fa-solid fa-xmark"></i>
  </button>

  <input name="name" type="text" class="form-control find-more-input" placeholder="Nume complet" />
  <input name="email" type="email" class="form-control find-more-input" placeholder="Email" />
  <input name="company" type="text" class="find-more-input form-control" placeholder="Companie" />
  <textarea class="form-control find-more-input" name="message" rows="5" placeholder="Mesaj" required></textarea>

  <div class="form-result">
    <div class="loading">Loading</div>
    <div class="error-message"></div>
    <div class="sent-message">Your message has been sent. Thank you!</div>
  </div>
  <button class="find-more-submit-button">Trimite mesaj</button>
</div>`;
  parent.insertAdjacentHTML('afterbegin', elem);
}

export function handleCreateAskForQuoteForm() {
  const modalSection = document.querySelector('.modal-section');
  injectAskForQuoteForm(modalSection);

  const closeModalBtn = document.querySelector('.close-form');
  const formInputs = document.querySelectorAll('.find-more-input');
  const loading = document.querySelector('.loading');
  const error = document.querySelector('.error-message');
  const sent = document.querySelector('.sent-message');
  const findMoreSubmitButton = document.querySelector('.find-more-submit-button');

  const form = new Form(formInputs, loading, error, sent);
  findMoreSubmitButton.addEventListener('click', () => form.sendFormData());

  closeModalBtn.addEventListener('click', () => {
    hideModal(() => {
      form.resetFormStatus();
      form.resetFormFields();
    })
  })

  return form;
}

function injectAskForQuoteForm(parent) {
  parent.innerHTML = '';
  const elem = `<div class="find-more-form">
  <button class="close-form">
    <i class="fa-solid fa-xmark"></i>
  </button>

  <input name="name" type="text" class="form-control find-more-input" placeholder="Nume complet" />
  <input name="email" type="email" class="form-control find-more-input" placeholder="Email" />
  <input name="company" type="text" class="find-more-input form-control" placeholder="Companie" />
  <input name="phone" type="text" class="find-more-input form-control" placeholder="Telefon" />
  <div class="service-select-container">
    <label for="services-select">Serviciu: </label>
    <select name="service" id="services-select" class="find-more-input">
      <option value="Website">Website</option>
      <option value="Aplicații Mobile">Aplicatii Mobile</option>
      <option value="Analiza Datelor">Analiza Datelor</option>
      <option value="Marketing">Marketing</option>
      <option value="SEO">SEO</option>
    </select>
  </div>
  <textarea class="form-control find-more-input" name="message" rows="5"
    placeholder="O scurta descriere a problemei pe care incercati sa o rezolvati cu ajutorul nostru."
    required></textarea>

  <div class="form-result">
    <div class="loading">Loading</div>
    <div class="error-message"></div>
    <div class="sent-message">Your message has been sent. Thank you!</div>
  </div>
  <button class="find-more-submit-button">CERE OFERTA</button>
</div>`;
  parent.insertAdjacentHTML('afterbegin', elem);
}


// Contact form

export function handleContactForm() {
  // Elements
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('form-message');
  const loading = document.getElementById('contact-form-loading');
  const error = document.getElementById('contact-form-error');
  const sent = document.getElementById('contact-form-success');


  const form = new Form([
    name, email, subject, message
  ],
    loading,
    error,
    sent
  )

  form.sendFormData();
}