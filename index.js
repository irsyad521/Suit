function computer() {
  let data = Math.floor(Math.random() * 3 + 1);
  let pilihan;
  let nama;
  if (data == 1) {
    pilihan = `<i class="fas fa-hand-rock"></i>`;
    nama = "batu";
  } else if (data == 2) {
    pilihan = '<i class="fas fa-hand-scissors"></i>';
    nama = "gunting";
  } else {
    pilihan = '<i class="fas fa-hand-paper"></i>';
    nama = "kertas";
  }
  return [pilihan, nama];
}

function pilihan_nama(data) {
  let nama;
  if (data == "fas fa-hand-rock") {
    nama = "batu";
  } else if (data == "fas fa-hand-scissors") {
    nama = "gunting";
  } else {
    nama = "kertas";
  }
  return nama;
}

function penentuan(player, komputer) {
  let kondisi;
  if (player == komputer) {
    kondisi = "Seri";
  } else if (player == "batu" && komputer == "gunting") {
    kondisi = "Menang";
  } else if (player == "gunting" && komputer == "batu") {
    kondisi = "Kalah";
  } else if (player == "batu" && komputer == "kertas") {
    kondisi = "Kalah";
  } else if (player == "kertas" && komputer == "batu") {
    kondisi = "Menang";
  } else if (player == "kertas" && komputer == "gunting") {
    kondisi = "Kalah";
  } else if (player == "gunting" && komputer == "kertas") {
    kondisi = "Menang";
  }
  return kondisi;
}

function pemberitahuanh1() {
  const element = document.createElement("h1");
  element.innerHTML = "Anda Menang!!";
  element.style.fontSize = "4rem";
  element.style.border = "5px solid #bc5af9";
  element.style.padding = "2rem";
  element.style.boxShadow = "5px 5px 5px rgba(0,0,0,0.7)";
  return element;
}

function pemberitahuanh2() {
  const element = document.createElement("h1");
  element.innerHTML = "Anda Kalah!!";
  element.style.fontSize = "4rem";
  element.style.border = "5px solid #bc5af9";
  element.style.padding = "2rem";
  element.style.boxShadow = "5px 5px 5px rgba(0,0,0,0.7)";
  return element;
}

function pemberitahuan_ulang() {
  const btn = document.createElement("button");
  btn.innerHTML = "click to restart the game";
  btn.style.padding = "1rem";
  btn.style.fontSize = "2rem";
  btn.style.border = "5px solid #bc5af9";
  btn.style.boxShadow = "5px 5px 5px rgba(0,0,0,0.7)";
  return btn;
}
function score(kondisi) {
  let player1 = document.querySelector(".score .P1");
  let player2 = document.querySelector(".score .P2");
  let data_player1 = Number(player1.textContent);
  let data_player2 = Number(player2.textContent);
  if (kondisi == "Menang") {
    data_player1 += 1;
    player1.innerHTML = data_player1;
  } else if (kondisi == "Kalah") {
    console.log(kondisi);
    data_player2 += 1;
    console.log(data_player2);
    player2.innerHTML = data_player2;
  }
  const game = document.querySelector(".game");
  const container = document.querySelector(".container");
  if (data_player1 == 5) {
    container.removeChild(game);
    let h1 = pemberitahuanh1();
    let btn = pemberitahuan_ulang();
    container.appendChild(h1);
    container.appendChild(btn);
  } else if (data_player2 == 5) {
    container.removeChild(game);
    let h1 = pemberitahuanh2();
    let btn = pemberitahuan_ulang();
    container.appendChild(h1);
    container.appendChild(btn);
  }
  if (data_player1 == 5 || data_player2 == 5) {
    const btn = document.querySelector(".container button");
    const h1 = document.querySelector(".container h1");
    btn.addEventListener("click", function () {
      container.removeChild(h1);
      container.removeChild(btn);
      container.appendChild(game);
      player1.innerHTML = "0";
      player2.innerHTML = "0";
    });
  }
}

// Main Program
const tempat_komputer = document.querySelector(".hasil .komputer");
const pilihan = document.querySelectorAll(".player i");
const tempat_player = document.querySelector(".hasil .player1");
const champion = document.querySelector(".hasil .tempat");

pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    pil.style.color = "red";
    let data = pil.className;
    let penyimpanan;

    tempat_player.innerHTML = `<i class="${data}"></i>`;
    setTimeout(function () {
      penyimpanan = computer();
      tempat_komputer.innerHTML = penyimpanan[0];

      let nama_player = pilihan_nama(data);
      let nama_computer = penyimpanan[1];
      const ketentuan = penentuan(nama_player, nama_computer);
      score(ketentuan);
      champion.innerHTML = ketentuan;
      pil.style.color = "#bc5af9";
    }, 1000);
    tempat_komputer.innerHTML = "Player2";
    champion.innerHTML = "Win/Lose";
  });
});
