document.getElementById('contactForm').addEventListener('submit', function (e) {
    let valid = true;
  
    const name = document.getElementById('name');
    if (name.value.length < 3) {
      valid = false;
      alert('Meno musí mať aspoň 3 znaky.');
    }
  
    const email = document.getElementById('email');
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailPattern.test(email.value)) {
      valid = false;
      alert('Prosím, zadajte platnú emailovú adresu.');
    }
  
    const message = document.getElementById('message');
    if (message.value.length < 10) {
      valid = false;
      alert('Správa musí mať aspoň 10 znakov.');
    }

    if (!valid) {
      e.preventDefault();
    }
  });
  