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
