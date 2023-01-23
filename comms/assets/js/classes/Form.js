import { firestore } from "../firebase.js";
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js'

export class Form {
  elements = [];
  formData = {
    created: new Date()
  };

  constructor(elements, submitButton, loadingElement, errorElement, successElement) {
    elements.forEach(element => {
      this.formData[element.name] = element.value;
      this.elements.push(element);
    });
    this.submitButton = submitButton;
    this.loadingElement = loadingElement;
    this.errorElement = errorElement;
    this.successElement = successElement;
  }

  handleShowLoader(isLoading) {
    if (isLoading) {
      this.loadingElement.style.display = 'block';
    } else {
      this.loadingElement.style.display = 'none';
    }
  }

  handleShowError(errorText) {
    if (errorText) {
      this.errorElement.style.display = 'block';
      this.errorElement.innerText = errorText;
    } else {
      this.errorElement.style.display = 'none';
      this.errorElement.innerText = errorText;
    }
  }

  handleShowSuccess(successText) {
    if (successText) {
      this.successElement.style.display = 'block';
      this.successElement.innerText = successText;
    } else {
      this.successElement.style.display = 'none';
      this.successElement.innerText = '';
    }
  }

  resetFormFields() {
    this.elements.forEach(element => {
      element.value = '';
    })
  }

  async sendFormData() {
    this.handleShowLoader(true);

    try {
      const docRef = await addDoc(collection(firestore, "messages"), this.formData);
      this.handleShowLoader(false);
      this.resetFormFields();
      this.handleShowSuccess('Mesajul dumneavoastră a fost trimis. Veți fi contactat de unul dintre colegii noștri in cel mai scurt timp. Va mulțumim!');
    } catch (err) {
      if (err) {
        this.handleShowLoader(false);
        this.handleShowError('Mesajul dumneavoastră nu a putut fi trimis. Vă rugam să ne contactați prin celelalte mijloace pană remediem situația. Va mulțumim pentru ințelegere.')
      }
    }
  }

}