'use strict';

window.addEventListener('load', windowLoad);

function windowLoad() {

    // HTML
    const htmlBlock = document.documentElement;

    // сохранение тему пользователя
    const saveUserTheme = localStorage.getItem('user-theme');

    let userTheme;
    if(window.matchMedia) {
        userTheme = window.matchMedia('(prefers-color-scheme: dark').matches ? 'dark' : 'light';
    };
    window.matchMedia('(prefers-color-scheme: dark').addEventListener('change', e => {
          !saveUserTheme ?  changeTheme() : null;
    });

    // Смена темы по клику

    const themeButton = document.querySelector('#theme-color');
   
    if(themeButton) {
        themeButton.addEventListener('click', e => {
            changeTheme(true);
        });
    };
  
    // Функция добаление класса темы 
    
    const setThemeClass = () => {
        if(saveUserTheme) {
           htmlBlock.classList.add(saveUserTheme);
        } else {
            htmlBlock.classList.add(userTheme);
        }
    };

    // Добавляем класс темы
    setThemeClass();


    // Функция смне темы 

    function changeTheme(saveTheme = false) {
        let currentTheme = htmlBlock.classList.contains('light') ? 'light' : 'dark';
        let newTheme;

        if(currentTheme === 'light') {
            newTheme = 'dark';
        } else if(currentTheme === 'dark') {
            newTheme = 'light';
        }
        htmlBlock.classList.remove(currentTheme);
        htmlBlock.classList.add(newTheme);
        saveTheme ? localStorage.setItem('user-theme', newTheme) : null;


    }
}







