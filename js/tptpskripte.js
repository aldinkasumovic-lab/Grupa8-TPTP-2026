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
//