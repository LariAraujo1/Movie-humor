document.addEventListener("DOMContentLoaded", () => {
    const formCadastro = document.getElementById("formulario-header");
  
    formCadastro.addEventListener("submit", (e) => {
      e.preventDefault(); // Impede o envio do formulário
  
      // Captura os valores do formulário
      const nome = document.getElementById("name").value.trim();
      const sobrenome = document.getElementById("sobrenome").value.trim();
      const email = document.getElementById("email").value.trim();
      const senha = document.getElementById("senha").value.trim();
      const senhaConfirm = document.getElementById("senha-confirm").value.trim();
  
      // Validações
      if (senha !== senhaConfirm) {
        alert("As senhas não coincidem. Tente novamente.");
        return;
      }
  
      if (!nome || !email || !senha) {
        alert("Todos os campos obrigatórios devem ser preenchidos.");
        return;
      }
  
      // Recupera os usuários existentes no localStorage
      const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  
      // Verifica se o e-mail já está cadastrado
      const emailExistente = usuarios.find((user) => user.email === email);
      if (emailExistente) {
        alert("E-mail já cadastrado. Use outro ou faça login.");
        return;
      }
  
      // Adiciona o novo usuário
      usuarios.push({ nome, sobrenome, email, senha });
      localStorage.setItem("usuarios", JSON.stringify(usuarios));
  
      alert("Cadastro realizado com sucesso!");
      formCadastro.reset(); // Limpa o formulário
    });
  });
  
  