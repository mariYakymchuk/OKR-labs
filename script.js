// Функція "Діалог з користувачем"
function userDialog() {
    let userName = prompt("Введіть ваше ім'я:");
    if (!userName) {
        alert("Ви не ввели ім'я!");
        return;
    }

    let age = prompt("Скільки вам років?");
    if (age < 18) {
        alert("Вибачте, доступ дозволено лише повнолітнім.");
        return;
    }

    let continueChat = confirm("Бажаєте приєднатись до нашого книжкового клубу?");
    if (continueChat) {
        alert("Вітаємо в клубі, " + userName + "!");
    } else {
        alert("Добре, сподіваємось побачити вас пізніше.");
    }

    let books = prompt("Скільки книг ви прочитали цього року?");
    for (let i = 0; i < books; i++) {
        console.log("Книга №" + (i + 1) + " прочитана!");
    }
    alert("Молодець! Ви прочитали " + books + " книг!");
}

// Функція виводу інформації про розробника
function developerInfo(lastName, firstName, position = "Студент") {
    alert("Розробник сторінки: " + lastName + " " + firstName + ", " + position);
}

// Функція порівняння двох рядків
function compareInputStrings() {
    let str1 = document.querySelectorAll("input")[0].value; // використання document.querySelectorAll
    let str2 = document.getElementById("string2").value; // використання document.getElementById

    if (str1.length > str2.length) {
        alert("Більший рядок 1:" + str1);
    } else if (str2.length > str1.length) {
        alert("Більший рядок 2: " + str2);
    } else {
        alert("Рядки однакові за довжиною!");
    }
}



