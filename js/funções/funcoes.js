// função aproximar mouse
const exit = document.querySelectorAll(".exit");
const button = document.querySelector(".btn");
exit.forEach(function (x) {
  x.addEventListener("click", function (e) {
    var aviso = document.createElement("div");
    aviso.classList = "aviso";

    aviso.innerHTML = `
          <i class="fas fa-info-circle fa-2x m-top-1"></i>
          <p class="avisoInner">Você não possui a permissão para executar isso</p>
          
          `;

    var cardBody = document.getElementById("body");
    var paragrafo = document.getElementById("paragrafo");

    paragrafo.style.margin = "1rem 2rem";
    cardBody.insertBefore(aviso, paragrafo);

    setTimeout(clearError, 3000);

    e.preventDefault();
  });
});

function clearError() {
  document.querySelectorAll(".aviso").forEach(function (a) {
    a.remove();

    paragrafo.style.margin = "2rem 2rem";
  });
}

// button.addEventListener("click", (e) => {
//   var card = document.getElementById("card-first");
//   card.innerHTML = `
//   <div class="card mx-4" id="card">
//   <div id="head" class="head-card">
//     <div class="botoes">
//       <div class="mini"></div>
//       <div class="max"></div>
//       <div class="exit" id="exit"><i class="fas fa-times"></i></div>
//     </div>
//   </div>
//   <div id="body" class="body-card">
//     <p id="paragrafo" class="text-center m-2">
//       Deseja executar Nádia Mirka Carboni.exe?
//     </p>

//   </div>
// </div>
// </div>
//   `;
//   e.preventDefault();
// });
