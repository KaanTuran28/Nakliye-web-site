$(document).ready(function () {
  // Set hedef değerler
  var targetCounter1 = 45454;
  var targetCounter2 = 42;
  var targetCounter3 = 20;

  // Animasyon süresi (milisaniye cinsinden)
  var animationDuration = 5000;

  // Sayaçları animasyonla artır
  animateCounter($('#counter1'), targetCounter1);
  animateCounter($('#counter2'), targetCounter2);
  animateCounter($('#counter3'), targetCounter3);

  // Fonksiyon: Belirli bir sayaç değerine kadar artışı animasyonla gerçekleştir
  function animateCounter($counter, targetValue) {
    $({ countValue: parseInt($counter.text()) }).animate(
      {
        countValue: targetValue
      },
      {
        duration: animationDuration,
        easing: 'swing',
        step: function () {
          $counter.text(Math.ceil(this.countValue));
        },
        complete: function () {
          $counter.text(targetValue);
        }
      }
    );
  }
});

// Resimlerin bulunduğu diziyi tanımlayın
const backgrounds = [
  'img/arkaplan/nakliyat4.jpg',
  'img/arkaplan/nakliyat5.jpg',
  'img/arkaplan/nakliyat3.jpg'
  // İhtiyacınıza göre daha fazla resim ekleyebilirsiniz
];

let currentBackgroundIndex = 0;

const heroSection = document.getElementById('heroSection');

function changeBackground() {
  heroSection.classList.remove('fade-in');
  heroSection.classList.add('fade-out');

  setTimeout(function () {
    heroSection.style.backgroundImage = `url('${backgrounds[currentBackgroundIndex]}')`;
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;

    heroSection.classList.remove('fade-out');
    heroSection.classList.add('fade-in');
  }, 1000); // 1 saniye sonra arka plan değişecek
}

// İlk arka planı ayarla ve değişimleri başlat
heroSection.style.backgroundImage = `url('${backgrounds[currentBackgroundIndex]}')`;
setInterval(changeBackground, 4000); // 4 saniyede bir arka plan değiştir

// Sayfa açılır açılmaz çalıştır
changeBackground();
