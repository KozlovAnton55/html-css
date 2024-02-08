


КОД JS ДЛЯ БУРГЕР МЕНЮ 


       // JavaScript для открытия и закрытия меню
       const menuToggle = document.querySelector('.menu-toggle');
       const menu = document.querySelector('.menu');

       menuToggle.addEventListener('click', () => {
           menu.classList.toggle('open'); // Добавляем или убираем класс 'open' для меню
       });