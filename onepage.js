const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  // const name = form.elements['name'].value;
  // const email = form.elements['email'].value;
  // const telephone = form.elements['telephone'].value;
  // const message = form.elements['message'].value;
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const telephone = document.getElementById('telephone').value;
  const message = document.getElementById('message').value;

  // if (!name) {
  //   alert('Veuillez entrer votre nom.');
  //   return;
  // }

  // if (!email) {
  //   alert('Veuillez entrer votre adresse e-mail.');
  //   return;
  // }
  // if (!telephone) {
  //   alert('Veuillez entrer votre adresse numéro de telephone.');
  //   return;
  // }

  // if (!message) {
  //   alert('Veuillez entrer un message.');
  //   return;
  // }
  if(!name || !telephone || !message || !email){
    alert('ggggg');
    return;
  }
  else{
    alert('Merci pour votre message !');
    form.reset();
  }
 
});