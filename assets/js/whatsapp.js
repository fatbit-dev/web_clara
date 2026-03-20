function sendToWhatsapp() {
    let number = "+34649362370";
    
    let name = document.getElementById('form_name').value;
    let phone = document.getElementById('form_phone').value;
    let message = document.getElementById('form_message').value;

    var url = "https://wa.me/" + number + "?text="
        + "Nombre : " + name  + "%0a"
        + "Teléfono : " + phone  + "%0a"
        + "Mensaje : " + message + "%0a";

    window.open(url, '_blank').focus();
}