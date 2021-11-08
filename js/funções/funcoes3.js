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
