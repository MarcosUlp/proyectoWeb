document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const errorsContainer = document.getElementById('formErrors');
    const successContainer = document.getElementById('formSuccess');
    errorsContainer.innerHTML = ''; // Limpiar mensajes de error previos
    successContainer.innerHTML = ''; // Limpiar mensaje de éxito previo
    let hasError = false;

    // Obtener valores de los campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Validación del nombre
    if (name === '') {
        const errorMsg = document.createElement('p');
        errorMsg.classList.add('error');
        errorMsg.textContent = 'El nombre es obligatorio.';
        errorsContainer.appendChild(errorMsg);
        hasError = true;
    }

    // Validación del email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        const errorMsg = document.createElement('p');
        errorMsg.classList.add('error');
        errorMsg.textContent = 'Introduce un correo electrónico válido.';
        errorsContainer.appendChild(errorMsg);
        hasError = true;
    }

    // Validación del teléfono
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        const errorMsg = document.createElement('p');
        errorMsg.classList.add('error');
        errorMsg.textContent = 'El número de teléfono debe tener 10 dígitos.';
        errorsContainer.appendChild(errorMsg);
        hasError = true;
    }

    // Si no hay errores, mostrar un mensaje de éxito con los datos ingresados
    if (!hasError) {
        const successMessage = document.createElement('div');
        successMessage.classList.add('success-message');
        successMessage.innerHTML = `
            <p>Formulario enviado con éxito.</p>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Correo Electrónico:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${phone}</p>
        `;
        successContainer.appendChild(successMessage);
    }
});
