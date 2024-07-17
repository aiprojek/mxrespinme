/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

//Kontak Telegram
function redirectToTelegram() {
  /* Isi Pesan Form */
  var name = document.getElementById("cName").value;
  var email = document.getElementById("cEmail").value;
  var subject = document.getElementById("cSubject").value;
  var message = document.getElementById("cMessage").value;
  var postLink = window.location.href;
  
  /* validation */
  var error_name = document.getElementById("error_name"),
      error_email = document.getElementById("error_email"),
      error_message = document.getElementById("error_message");
  
  var text;
  if (name == "") {
    text = 'Please enter your name';
    error_name.setAttribute('data-text', text);
    return false;
  } 

  if (email.indexOf("@") == -1 || email.length < 6) {
    text = 'Please enter valid email';
    error_email.setAttribute('data-text', text);
    return false;
  }

  if (message == "") {
    text = 'Please enter your message';
    error_message.setAttribute('data-text', text);
    return false;
  }
  /* Pengaturan Pesan */
  var messageText = "Pesan baru dari " + name + "\n\n"; // Pesan Pembuka
  messageText += "*Nama:* " + name + "\n";
  messageText += "*Email:* " + email + "\n";
  messageText += "*Subjek:* " + subject + "\n";
  messageText += "*Pesan:* " + message + "\n\n";
  messageText += "=============================" + "\n";
  messageText += "*Dari:* " + postLink + "\n";
  messageText += "=============================";
  /* Pengaturan Telegram */
  var telegramLink = 'https://t.me/aiprojek01', // Ganti dengan username Telegram Anda
      encodedMessage = encodeURIComponent(messageText);
  var telegramUrl = telegramLink + "?text=" + encodedMessage;
  window.open(telegramUrl, '_blank');
  return true;
}

var inputs = document.querySelectorAll('.Fcontrol input[type=text], .Fcontrol input[type=email], .Fcontrol textarea');
for (var i = 0; i < inputs.length; i++) {
  var input = inputs[i];
  input.addEventListener('input', function() {
    var bg = this.value ? 'show' : 'none';
    this.setAttribute('class', bg);
  });
}


