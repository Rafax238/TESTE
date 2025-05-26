// script.js
function atualizarContador() {
  const inicio = new Date("2024-05-11T18:00:00");
  const agora = new Date();
  const diff = agora - inicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  document.getElementById("contador").textContent =
    `${dias} dias, ${horas}h ${minutos}min ${segundos}s`;
}

setInterval(atualizarContador, 1000);
