document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login");
  
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Impede o envio do formulário para outra página.
  
      // Capturar os valores do formulário
      const email = document.getElementById("email-login").value;
      const senha = document.getElementById("senha-form").value;
  
      // Buscar os dados do usuário no localStorage
      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  
      // Verificar se o e-mail e a senha correspondem a algum usuário
      const usuarioEncontrado = usuarios.find(
        (user) => user.email === email && user.senha === senha
      );
  
      if (usuarioEncontrado) {
        alert("Login realizado com sucesso!");
        // Aqui você pode redirecionar para outra página, se necessário
        // window.location.href = "pagina-inicial.html";
      } else {
        alert("E-mail ou senha incorretos. Tente novamente.");
      }
    });
  });
  