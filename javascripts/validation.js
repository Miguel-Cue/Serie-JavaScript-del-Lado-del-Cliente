function emailValidation() {
    const form = document.getElementById('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      if(form.email.value !== form.email_confirm.value) {
        const element = document.createElement('p')
        const message = document.createTextNode("Eメールが一致しません")
        form.appendChild(element);
        element.appendChild(message);
        element.classList.add("alert");
        setTimeout(() => {
          form.removeChild(element)
        }, 3000)
      } else {
        form.submit();
      }
    });
  };
  
  window.onload = function() {
    emailValidation();
  };
  /*function confirmSubmit() {
    const forms = document.forms;
    forms[0].onsubmit = function(){
      if (!(confirm("¿Estás seguro de que quieres enviarlo?"))) {
        alert("fue cancelado");
        return false;
      }
    };
  };
  
  window.onload = confirmSubmit;*/