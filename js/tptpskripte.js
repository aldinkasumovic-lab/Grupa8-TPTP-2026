// js za retro,gifts,clearance

function prikaziTab(odabraniTab, kliknutoGugme) {
  document.querySelectorAll('.tab-dugme').forEach(function(btn) {
    btn.classList.remove('aktivan');
  });
  kliknutoGugme.classList.add('aktivan');

  var kartice = document.querySelectorAll('.shop-kartica');
  var imaKartica = false;

  kartice.forEach(function(kartica) {
    if (kartica.dataset.tab === odabraniTab) {
      kartica.classList.remove('sakrivena');
      imaKartica = true;
    } else {
      kartica.classList.add('sakrivena');
    }
  });

  var poruka = document.getElementById('nema-rezultata');
  poruka.style.display = imaKartica ? 'none' : 'block';
}

function toggleDark() {
  document.body.classList.toggle('dark-mode');

  const dugme = document.querySelector('.dark-toggle');
  if (document.body.classList.contains('dark-mode')) {
    dugme.textContent = '☀️ Light Mode';
    localStorage.setItem('darkMode', 'on');
  } else {
    dugme.textContent = '🌙 Dark Mode';
    localStorage.setItem('darkMode', 'off');
  }
}


if (localStorage.getItem('darkMode') === 'on') {
  document.body.classList.add('dark-mode');
  document.querySelector('.dark-toggle').textContent = '☀️ Light Mode';
}
//muskarci zene djeca kupuj po igracu
var tabDugmad = document.querySelectorAll('.tab-dugme');
var kartice = document.querySelectorAll('.shop-kartica');
var nemaRezultataPoruka = document.getElementById('nema-rezultata'); 

for (var i = 0; i < tabDugmad.length; i++) {
    tabDugmad[i].addEventListener('click', function() {
        
        
        for (var j = 0; j < tabDugmad.length; j++) {
            tabDugmad[j].classList.remove('aktivan');
        }
        
        this.classList.add('aktivan');

        var izabranaKategorija = this.getAttribute('data-tab');
        var brojPronadjenih = 0; // Brojač koji prati ima li artikala u toj kategoriji

        
        for (var k = 0; k < kartice.length; k++) {
            var kategorijaKartice = kartice[k].getAttribute('data-kategorija');

            if (izabranaKategorija === kategorijaKartice) {
                kartice[k].style.display = ''; 
                brojPronadjenih++;
            } else {
                kartice[k].style.display = 'none'; 
            }
        }

        //  Prikazivanje poruke za "Nema proizvoda"
        if (brojPronadjenih === 0) {
            nemaRezultataPoruka.style.display = 'block';
        } else {
            nemaRezultataPoruka.style.display = 'none';
        }
    });
}

const hash = window.location.hash;

if (hash === "#men") {
    tabDugmad[0].click();
}

if (hash === "#women") {
    tabDugmad[1].click();
}

if (hash === "#kids") {
    tabDugmad[2].click();
}

if (hash === "#players") {
    tabDugmad[3].click();
}
const retroHash = window.location.hash;

if (retroHash === "#retro") {
    prikaziTab('retro', document.querySelectorAll('.tab-dugme')[0]);
}

if (retroHash === "#gifts") {
    prikaziTab('gifts', document.querySelectorAll('.tab-dugme')[1]);
}

if (retroHash === "#clearance") {
    prikaziTab('clearance', document.querySelectorAll('.tab-dugme')[2]);
}


const targetDate = new Date("June 12, 2026 12:00:00").getTime();

const countdown = setInterval(function () {

    const now = new Date().getTime();

    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {

        clearInterval(countdown);

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }

}, 1000);

const forma = document.getElementById("kontaktForma");

forma.addEventListener("submit", function(e) {

    e.preventDefault();

    let validno = true;

    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    document.querySelectorAll("input, select, textarea").forEach(el => {
        el.classList.remove("greska");
    });

    const ime = document.getElementById("ime");
    const prezime = document.getElementById("prezime");
    const email = document.getElementById("email");
    const telefon = document.getElementById("telefon");
    const tema = document.getElementById("tema");
    const poruka = document.getElementById("poruka");

    const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    const telefonRegex = /^[0-9\s\-]+$/;

    function prikaziGresku(input, porukaTekst) {

        input.classList.add("greska");

        input.nextElementSibling.textContent = porukaTekst;

        validno = false;
    }

    if (ime.value.trim() === "") {
        prikaziGresku(ime, "Unesite ime");
    }

    if (prezime.value.trim() === "") {
        prikaziGresku(prezime, "Unesite prezime");
    }

    if (!emailRegex.test(email.value)) {
        prikaziGresku(email, "Email nije ispravan");
    }

    if (!telefonRegex.test(telefon.value)) {
        prikaziGresku(telefon, "Telefon nije ispravan");
    }

    if (tema.value === "") {
        prikaziGresku(tema, "Odaberite temu");
    }

    if (poruka.value.trim() === "") {
        prikaziGresku(poruka, "Unesite poruku");
    }

    if (validno) {

        document.getElementById("uspjesnaPoruka").textContent =
            "Hvala " + ime.value + ", uspješno ste poslali poruku!";
    }
});

forma.addEventListener("reset", function() {

    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    document.getElementById("uspjesnaPoruka").textContent = "";

    document.querySelectorAll("input, select, textarea").forEach(el => {
        el.classList.remove("greska");
    });
});
