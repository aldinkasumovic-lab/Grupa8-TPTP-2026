var tabDugmad = document.querySelectorAll('.tab-dugme');
var kartice = document.querySelectorAll('.shop-kartica');

for (var i = 0; i < tabDugmad.length; i++) {
    tabDugmad[i].addEventListener('click', function() {
        
        for (var j = 0; j < tabDugmad.length; j++) {
            tabDugmad[j].classList.remove('aktivan');
        }
        this.classList.add('aktivan');

        var izabranaKategorija = this.getAttribute('data-tab');

        for (var k = 0; k < kartice.length; k++) {
            var kategorijaKartice = kartice[k].getAttribute('data-kategorija');

            if (izabranaKategorija === kategorijaKartice) {
                kartice[k].style.display = 'block';
            } else {
                kartice[k].style.display = 'none';
            }
        }
    });
}

// kliknuti  na prvo dugme (Muškarci) da se sakriju ostali dresovi
tabDugmad[0].click();
