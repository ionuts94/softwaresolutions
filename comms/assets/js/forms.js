import { Form } from './classes/Form.js';

export function handleFindMoreForm() {
  const formInputs = document.querySelectorAll('.find-more-input');
  const loading = document.querySelector('.loading');
  const error = document.querySelector('.error-message');
  const sent = document.querySelector('.sent-message');

  const form = new Form(formInputs, null, loading, error, sent);
  form.sendFormData();
}

export function handleContactForm() {
  // Elements
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('form-message');
  const loading = document.querySelector('.loading');
  const error = document.querySelector('.error-message');
  const sent = document.querySelector('.sent-message');

  const form = new Form([
    name, email, subject, message
  ],
    null,
    loading,
    error,
    sent
  )

  form.sendFormData();
}