import { firestore } from "../firebase.js";
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js'

export class Form {
  elements = [];

  constructor(elements, loadingElement, errorElement, successElement) {
    elements.forEach(element => {
      this.elements.push(element);
    });
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

  resetFormStatus() {
    this.handleShowLoader(false);
    this.handleShowError(false);
    this.handleShowSuccess(false);
  }

  async sendFormData() {
    console.log(this);
    this.handleShowLoader(true);

    let formData = {
      created: new Date()
    };

    this.elements.forEach(element => {
      formData[element.name] = element.value;
    });

    try {
      const docRef = await addDoc(collection(firestore, "messages"), formData);
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