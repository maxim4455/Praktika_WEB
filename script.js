// script.js

// Функция для отображения рекламного сообщения
function showAdMessage(message) {
    alert(message);
}

// Массив рекламных сообщений
const adMessages = [
    "Покупайте наши товары со скидкой 20%! Акция действует до конца месяца.",
    "Закажите услуги нашего партнера и получите бонус!",
    "Посетите наш сайт для получения эксклюзивных предложений."
];

// Настройки
const interval = 100000; // Интервал между сообщениями (в миллисекундах)
let showOnce = false; // Показывать сообщения однократно или многократно

// Функция для показа рекламных сообщений
function startAdMessages() {
    let currentMessageIndex = 0;

    const adInterval = setInterval(() => {
        showAdMessage(adMessages[currentMessageIndex]);

        currentMessageIndex++;
        if (currentMessageIndex >= adMessages.length) {
            if (showOnce) {
                clearInterval(adInterval);
            }
            currentMessageIndex = 0;
        }
    }, interval);
}

// Запуск показа рекламных сообщений при загрузке страницы
window.onload = startAdMessages;


document.addEventListener('DOMContentLoaded', function () {
    var backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 200) { // показываем кнопку при прокрутке больше чем на 100px
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function () {
        scrollToTop(1000); // время анимации в миллисекундах (1000 = 1 секунда)
    });

    function scrollToTop(scrollDuration) {
        var scrollStep = -window.scrollY / (scrollDuration / 15);
        var scrollInterval = setInterval(function () {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Получаем контент текущей секции
            var content = this.nextElementSibling;

            // Закрываем все открытые секции, кроме текущей
            document.querySelectorAll('.accordion-content').forEach(function (content) {
                if (content !== button.nextElementSibling) {
                    content.classList.remove('active');
                }
            });

            // Переключаем состояние текущей секции
            content.classList.toggle('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const burgerIcon = document.querySelector('.burger-icon');
    const headerLower = document.querySelector('.header__lower');

    burgerIcon.addEventListener('click', function () {
        headerLower.classList.toggle('show-menu');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const serviceImages = document.querySelectorAll('.servicesphoto');

    serviceImages.forEach(function (image) {
        image.addEventListener('mouseenter', function () {
            image.style.borderRadius = '50px'; // Пример для закругленных углов
            image.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.9)'; // Тень
        });

        image.addEventListener('mouseleave', function () {
            image.style.borderRadius = '0'; // Возвращаем обычные углы
            image.style.boxShadow = 'none'; // Убираем тень
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const tooltips = document.querySelectorAll('[data-tooltip]');

    tooltips.forEach(function (element) {
        const tooltipText = element.getAttribute('data-tooltip');
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = tooltipText;
        element.appendChild(tooltip);

        element.addEventListener('mouseover', function () {
            tooltip.style.visibility = 'visible';
        });

        element.addEventListener('mouseout', function () {
            tooltip.style.visibility = 'hidden';
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const cookieConsent = document.getElementById("cookie-consent");
    const acceptCookiesBtn = document.getElementById("accept-cookies");

    // Проверка, приняты ли cookies
    if (!localStorage.getItem("cookiesAccepted")) {
        cookieConsent.style.display = "flex";
    }

    // Обработчик нажатия на кнопку "Принять"
    acceptCookiesBtn.addEventListener("click", function() {
        localStorage.setItem("cookiesAccepted", "true");
        cookieConsent.style.display = "none";
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('openFormBtn').addEventListener('click', function() {
      document.getElementById('contactForm').style.display = 'block';
    });
  
    document.getElementById('closeFormBtn').addEventListener('click', function() {
      document.getElementById('contactForm').style.display = 'none';
    });
  
    document.getElementById('feedbackForm').addEventListener('submit', function(event) {
      event.preventDefault();
      
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var message = document.getElementById('message').value;
      
      if (name === '' || email === '' || message === '') {
        alert('Все поля должны быть заполнены!');
        return;
      }
      
      if (!validateEmail(email)) {
        alert('Введите корректный email!');
        return;
      }
      
      alert('Сообщение отправлено!');
      document.getElementById('contactForm').style.display = 'none';
    });
  
    function validateEmail(email) {
      var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  });
  