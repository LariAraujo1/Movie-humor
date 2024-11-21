document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login");
  
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault(); 
  
      const email = document.getElementById("email-login").value;
      const senha = document.getElementById("senha-form").value;
  
      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  
      
      const usuarioEncontrado = usuarios.find(
        (user) => user.email === email && user.senha === senha
      );
  
      if (usuarioEncontrado) {
        alert("Login realizado com sucesso!");
       
      } else {
        alert("E-mail ou senha incorretos. Tente novamente.");
      }
    });
  });
  