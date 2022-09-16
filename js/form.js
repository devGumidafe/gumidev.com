const form = document.querySelector('#form');

const expressions = {
  name: /^[a-zA-Z0-9À-ÿ\s]{2,40}$/, // Letras y espacios, pueden llevar acentos.
  email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
  message: /^[a-zA-Z0-9.!#$%&'*+@/=?^_`{|}~-À-ÿ\s]{10,500}$/,
};

const errorMessages = {
  name: 'El nombre tiene que contener de 2 a 40 caracteres y solo admite caracteres validos',
  email: 'El email no es válido, ejemplo@email.com',
  message:
    'El mensaje tiene que contener de 10 a 500 caracteres y solo admite caracteres validos',
};

const fieldList = ['name', 'email', 'message'];

const validateForm = (fieldList) => {
  let isValid = true;

  fieldList.map((field) => {
    const value = document.getElementById(field).value.trim();

    if (expressions[field].test(value)) {
      offError(field, '');
    } else {
      isValid = false;
      onError(field, errorMessages[field]);
    }
  });

  return isValid;
};

const onError = (id, message) => {
  const element = document.getElementById(id);
  const messageElement = document.getElementById(`${id}-error`);

  if (element) {
    element.classList.add('error');
  }

  if (messageElement) {
    messageElement.textContent = message;
    messageElement.classList.add('error-message');
  }
};

const offError = (id, message) => {
  const element = document.getElementById(id);
  const messageElement = document.getElementById(`${id}-error`);

  if (element) {
    element.classList.remove('error');
  }

  if (messageElement) {
    messageElement.textContent = message;
    messageElement.classList.remove('error-message');
  }
};

const sendEmail = (formData) => {
  fetch('phpMailer/email.php', {
    method: 'POST',
    body: formData,
  })
    .then((res) => res.json())
    .then((res) => {
      showAlert(res);
    });
};

const showAlert = (res) => {
  if (res === 'ok') {
    Swal.fire({
      title: 'Genial!',
      text: 'Mensaje enviado correctamente',
      icon: 'success',
    });
    form.reset();
  } else {
    Swal.fire({
      title: 'Oops!',
      text: 'Error al enviar el mensaje',
      icon: 'error',
      footer:
        'Inténtelo de nuevo, si el problema persiste contacte en devgumidafe@gmail.com',
    });
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  if (validateForm(fieldList)) sendEmail(formData);
});
