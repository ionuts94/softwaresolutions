export function resetFormFields(elements) {
  elements.forEach(element => {
    element.value = '';
  })
}

export function handleShowLoader(element, isLoading) {
  if (isLoading) {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}

export function handleShowError(element, errorText) {
  if (errorText) {
    element.style.display = 'block';
    element.innerText = errorText;
  } else {
    element.style.display = 'none';
    element.innerText = '';
  }
}

export function handleShowSuccess(element, successText) {
  if (successText) {
    element.style.display = 'block';
    element.innerText = successText;
  } else {
    element.style.display = 'none';
    element.innerText = '';
  }
}