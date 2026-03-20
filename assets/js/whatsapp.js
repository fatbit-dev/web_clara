function sendToWhatsapp(token) {
    if (!token) {
        return;
    }

    const form = document.getElementById('whatsapp-form');
    if (!form || !form.checkValidity()) {
        if (form) {
            form.reportValidity();
        }
        if (window.grecaptcha) {
            window.grecaptcha.reset();
        }
        return;
    }

    const number = "34649362370";
    const name = document.getElementById('form_name').value.trim();
    const phone = document.getElementById('form_phone').value.trim();
    const message = document.getElementById('form_message').value.trim();

    const text = [
        "Nombre: " + name,
        "Teléfono: " + phone,
        "Mensaje: " + message
    ].join("\n");

    const url = "https://wa.me/" + number + "?text=" + encodeURIComponent(text);
    window.open(url, '_blank', 'noopener');

    if (window.grecaptcha) {
        window.grecaptcha.reset();
    }
}