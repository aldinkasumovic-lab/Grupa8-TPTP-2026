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
//