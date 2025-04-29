//Замінити фон сторінки на 30 секунд
function changeBackground() {
    document.body.style.backgroundColor = "#ff82f6";
    setTimeout(() => {
        document.body.style.backgroundColor = "";
    }, 30000);
}

// Перенаправити браузер на іншу сторінку
function redirectPage() {
    location.href = "https://ukrlib.com.ua";
}

// Використання властивостей DOM-вузла
function changeDomProperties() {
    // Змінюємо innerHTML заголовка "Про бібліотеку"
    let aboutHeader = document.getElementById("aboutus");
    aboutHeader.innerHTML = "<span style='color:purple;'>📖 Про нашу чудову бібліотеку</span>";

    // Змінюємо textContent першого параграфа під цим заголовком
    let firstParagraph = aboutHeader.nextElementSibling;
    firstParagraph.textContent = "Ми постійно поповнюємо нашу колекцію сучасними та класичними творами.";

    // Змінюємо текстовий вузол першого посилання
    let firstLink = document.querySelector("a");
    if (firstLink.firstChild) {
        firstLink.firstChild.nodeValue = "📚 Каталог доступних книг";
    }

    // Замінюємо всі посилання через outerHTML (робимо їх червоними)
    let allLinks = document.querySelectorAll("a");
    allLinks.forEach(link => {
        link.outerHTML = `<a href="${link.href}" style="color: red; font-weight: bold;">${link.textContent}</a>`;
    });
}

// document.write
function writeToDocument() {
    document.write("<h2>Ви перезаписали сторінку!</h2>");
}

// Створити елемент, текстовий вузол, вставити та замінити
function createAndManipulateNodes() {
    // створюємо новий елемент і текст
    let newDiv = document.createElement("div");
    let newText = document.createTextNode("Це новий блок, створений через JS.");
    newDiv.appendChild(newText);

    // додаємо на сторінку
    document.body.append(newDiv);

    // додаємо перед заголовком
    document.getElementById("top").prepend("📖 ");

    // замінюємо float-box на новий блок
    let oldBox = document.querySelector(".float-box");
    let replacement = document.createElement("div");
    replacement.className = "float-box";
    replacement.textContent = "Новий блок замість акції!";
    replacement.style.backgroundColor = "#ccffcc";
    replacement.style.padding = "10px";
    replacement.style.margin = "10px";
    oldBox.replaceWith(replacement);
}

//  Видалення вузла
function removeInfoBox() {
    let infoBox = document.querySelector(".info-box");
    if (infoBox) {
        infoBox.remove();
        alert("Інфоблок видалено.");
    } else {
        alert("Інфоблок вже видалено або його немає.");
    }
}


