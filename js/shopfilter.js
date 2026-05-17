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

// Odmah kliknuti na prvi tab (Muškarci) pri učitavanju stranice
if (tabDugmad.length > 0) {
    tabDugmad[0].click();
}
