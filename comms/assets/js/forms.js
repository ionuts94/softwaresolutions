import { Form } from './classes/Form.js';

export function handleFindMoreForm() {

  const findMoreSection = document.querySelector('.find-more-section');
  const closeModalBtn = document.querySelector('.close-form');

  const formInputs = document.querySelectorAll('.find-more-input');
  const loading = document.querySelector('.loading');
  const error = document.querySelector('.error-message');
  const sent = document.querySelector('.sent-message');

  const form = new Form(formInputs, loading, error, sent);

  closeModalBtn.addEventListener('click', () => {
    findMoreSection.style.animation = 'form-fade-up 0.3s ease-in-out forwards';
    setTimeout(() => {
      findMoreSection.style.display = 'none';
      form.resetFormStatus();
      form.resetFormFields();
    }, 300);
  })

  return form;
}

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