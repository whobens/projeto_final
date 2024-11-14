const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));


 // Obter todos os cards e modais
 var cards = document.querySelectorAll(".card");
 var modals = document.querySelectorAll(".modal");
 var closeButtons = document.querySelectorAll(".close");

 // Adicionar evento de clique a cada card
 cards.forEach(card => {
     card.onclick = function() {
         var modalId = card.getAttribute("data-modal");
         document.getElementById(modalId).style.display = "flex";
     }
 });

 // Adicionar evento de clique a cada botão de fechar
 closeButtons.forEach(button => {
     button.onclick = function() {
         var modalId = button.getAttribute("data-modal");
         document.getElementById(modalId).style.display = "none";
     }
 });

 // Fechar o modal se o usuário clicar fora do conteúdo do modal
 window.onclick = function(event) {
     modals.forEach(modal => {
         if (event.target === modal) {
             modal.style.display = "none";
         }
     });
 }