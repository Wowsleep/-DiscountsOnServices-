"use strict";
// Все данные
// Accaunt's DATA
const account1 = {
  owner: "Artem Kozlov",
  email: "test@gmail.com",
  pin: 1111,
};

const account2 = {
  owner: "Annka Tereshkiv",
  email: "test2@gmail.com",
  pin: 2222,
};

const account3 = {
  owner: "Barney Kozlov",
  email: "test3@gmail.com",
  pin: 3333,
};

const accounts = [account1, account2, account3];
// Header data
const btnSubscription = document.querySelector(".menu__item");
const subscriptionMenu = document.querySelector(".subscription__modal");

const btnLanguage = document.querySelector(".header__language");
const languageMenu = document.querySelector(".language__modal");
// Footer data
const footerBtnLanguage = document.querySelector(".footer__links-lang");
const footerLanguageMenu = document.querySelector(".footer__language-modal");

const btnHowItWorks = document.querySelectorAll(".section-5__inner-top-btn");
const imgCloseHowItWorks = document.querySelector(
  ".section-5__inner-top-img-close"
);
const imgOpenHowItWorks = document.querySelector(
  ".section-5__inner-top-img-open"
);

// Log In modal data
const modalLogin = document.querySelector(".login");
const overlay = document.querySelector(".overlay");
const btnHeaderLogin = document.querySelector(".header__login");
const btnHeaderProfile = document.querySelector(".header__profile");
const btnCloseLogin = document.querySelectorAll(".login__title-btn");

const inputPassword = document.querySelectorAll(".login__form-inner--password");
const inputEmail = document.querySelectorAll(".login__form-inner--email");
const btnShowPassword = document.querySelector(
  ".login__form-inner--password-img"
);
const btnForgot = document.querySelector(".forgot__btn");
const btnLoginAcc = document.querySelector(".forgot__login-btn");

// Create an account modal window
const btnCreateAcc = document.querySelector(".login__createacc-link");
const modalCreateAcc = document.querySelector(".createacc");
const btnSingIn = document.querySelector(".createacc__link");

// Profile modal data
const modalProfile = document.querySelector(".profile__modal");
const btnProfile = document.querySelector(".header__profile-btn");
const linkProfile = document.querySelector(".profile__myprofile");
const btnProfileLogout = document.querySelector(".profile__logout");

// Logout
const modalLogout = document.querySelector(".logout__modal");
const btnLogout = document.querySelector(".logout__top-btn");
const btnLogoutCancel = document.querySelector(".logout__btn-1");
const btnLogoutYes = document.querySelector(".logout__btn-2");
/////////////////////////////////////////////////////////////////////

// Forgot Password
const modalForgetPassword = document.querySelector(".forgetpassword");

let currentAccount;

// Модальные окна
// Открытие/Закрытие модального окна подписок в header
btnSubscription.addEventListener("click", function () {
  if (subscriptionMenu.classList.contains("hidden")) {
    subscriptionMenu.classList.remove("hidden");
    languageMenu.classList.add("hidden"); // Временная заглушка (нужно пофиксить)
  } else subscriptionMenu.classList.add("hidden");
});
subscriptionMenu.addEventListener("mouseleave", function () {
  subscriptionMenu.classList.add("hidden");
});

// Открытие/Закрытие модального окна выбора языка в footer
btnLanguage.addEventListener("click", function () {
  if (languageMenu.classList.contains("hidden")) {
    languageMenu.classList.remove("hidden");
    subscriptionMenu.classList.add("hidden"); // Временная заглушка (нужно пофиксить)
  } else languageMenu.classList.add("hidden");
});
languageMenu.addEventListener("mouseleave", function () {
  languageMenu.classList.add("hidden");
});

// Открытие/Закрытие модального окна выбора языка в футоре
footerBtnLanguage.addEventListener("click", function () {
  footerLanguageMenu.classList.toggle("hidden");
});
footerLanguageMenu.addEventListener("mouseleave", function () {
  footerLanguageMenu.classList.add("hidden");
});

// Открытие/Закрытие окна Profile
btnProfile.addEventListener("click", function (e) {
  modalProfile.classList.toggle("hidden");
});
modalProfile.addEventListener("mouseleave", function () {
  modalProfile.classList.add("hidden");
});

///////////////////////////////////////////////////////////////////

// Log In
// Открыте окна Входа в пользователя
btnHeaderLogin.addEventListener("click", function () {
  modalLogin.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

// Очистка полей
const cleanFields = function () {
  inputPassword.forEach((el) => (el.value = ""));
  inputEmail.forEach((el) => (el.value = ""));
};

// Закрытие окна
const closeModal = function () {
  modalLogin.classList.add("hidden");
  overlay.classList.add("hidden");
  modalLogout.classList.add("hidden");
  modalCreateAcc.classList.add("hidden");
  cleanFields();
};

btnCloseLogin.forEach((el) => el.addEventListener("click", closeModal));
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

// Показать пароль (НЕ РАБОТАЕТ до конца)
btnShowPassword.addEventListener("click", function () {
  inputPassword.type === "password";
  if (inputPassword.type === "password")
    inputPassword.type = inputPassword.dataset.type;
});

// Переход на страницу "Забыл пароль"
btnForgot.addEventListener("click", function () {
  closeModal();
  btnForgot.classList.remove("hidden");
});

// Вход в пользователя
btnLoginAcc.addEventListener("click", function (e) {
  e.preventDefault();
  currentAccount = accounts.find((acc) => acc.email === inputEmail.value);
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputPassword.value)) {
    modalLogin.classList.add("hidden");
    overlay.classList.add("hidden");
    btnHeaderLogin.classList.add("hidden");
    btnHeaderProfile.classList.remove("hidden");
    // Сделать стирание всех полей сразу после входа
    inputEmail.value = inputPassword.value = "";
    // Изменение имени пользователя
    document.querySelector(".header__profile-item").textContent =
      currentAccount.owner.split(" ").slice(0, 1).join();
  } else {
    cleanFields();
  }
});

// Создание нового аккаунта
// Открытие окна
btnCreateAcc.addEventListener("click", function () {
  closeModal();
  currentAccount = undefined;
  overlay.classList.remove("hidden");
  modalCreateAcc.classList.remove("hidden");
});

// Кнопка Sing In
btnSingIn.addEventListener("click", function () {
  closeModal();
  modalLogin.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

// Log Out
// Поменять, так как работает через дополнительное подальное окно
// btnLogout.addEventListener("click", function () {
//   currentAccount = undefined;
//   modalProfile.classList.add("hidden");
//   btnHeaderProfile.classList.add("hidden");
//   btnHeaderLogin.classList.remove("hidden");
// });

// const modalLogout = document.querySelector(".logout__modal");
// const btnLogout = document.querySelector(".logout__top-btn");
// const btnLogoutCancel = document.querySelector(".logout__btn-1");
// const btnLogoutYes = document.querySelector(".logout__btn-2");

btnProfileLogout.addEventListener("click", function () {
  modalProfile.classList.add("hidden");
  modalLogout.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

btnLogout.addEventListener("click", function () {
  closeModal();
});

btnLogoutCancel.addEventListener("click", function () {
  closeModal();
});

btnLogoutYes.addEventListener("click", function () {
  // Исправить. Не убирается вкладка Profile. Остановился тут
  closeModal();
  currentAccount = undefined;
  modalLogout.classList.add("hidden");
  modalProfile.classList.add("hidden");
  btnHeaderProfile.classList.add("hidden");
  btnHeaderLogin.classList.remove("hidden");
});

//////////////////////////////////////////////////////////////////////
// Открытие/Закрытие скрытого текста и кнопки секции "FAQ"
btnHowItWorks.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // Появление текста
    const question = e.currentTarget.parentElement.parentElement.querySelector(
      ".section-5__inner-question"
    );
    question.classList.toggle("hidden");

    // Изменение кнопки
    const clicked = e.target
      .closest(".section-5__inner-top-btn")
      .querySelector(".section-5__inner-top-img-close");
    clicked.classList.toggle("rotate");
  });
});

// Навигация страницы
document.querySelector(".header__menu").addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e.target.classList.contains("menu__btn"));
  console.log(e.target.getAttribute("href"));
  if (e.target.classList.contains("menu__btn")) {
    const id = e.target.getAttribute("href");
    document.querySelector(`.${id}`).scrollIntoView({ behavior: "smooth" });
  }
});

document
  .querySelector(".footer__menu-inner-nav")
  .addEventListener("click", function (e) {
    e.preventDefault();
    e.target.classList.contains("footer__menu-link-item");
    console.log(e.target.getAttribute("href"));
    if (e.target.classList.contains("footer__menu-link-nav")) {
      const id = e.target.getAttribute("href");
      document.querySelector(`.${id}`).scrollIntoView({ behavior: "smooth" });
    }
  });

// Sticky Menu
const header = document.querySelector(".header");
const section2 = document.querySelector(".section-1");
const headerHeight = header.getBoundingClientRect().height;

const stickyHeader = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) header.classList.add("sticky");
  else header.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyHeader, {
  root: null,
  threshold: 0,
});

headerObserver.observe(section2);
// TEST ZONE

// document
//   .querySelector(".login__form-inner--password")
//   .addEventListener("click", function (e) {
//     e.target.type = e.target.dataset.type;
//     console.log(e.target.type);
//   });

// const test = account1.owner.split(" ").slice(0, 1).join();
// console.log(test);

// const num = [-2.232];

// const sum = function (numbers) {
//   return numbers.reduce((acc, mov) => acc + mov, 0);
// };

// console.log(sum(num));
// console.log(Object.keys(num).length);
