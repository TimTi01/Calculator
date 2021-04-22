const numbers = findAllNum();
bindClickListenerNumber(numbers);
const symbols = findAllSymbol();
bindClickListenerSymbol(symbols);
const percent = findPercentSymbol();
bindClickListenerPercentSymbol(percent);
const del = findDelSymbol();
bindClickListenerDelSymbol(del);
const delAll = findDelAllSymbol();
bindClickListenerDelAllSymbol(delAll);
const result = findResultSymbol();
bindClickListenerResultSymbol(result);



function findAllNum() {
    let sym = document.body.querySelectorAll('[data-number]');
    return sym;
}

function bindClickListenerNumber(num) {
    num.forEach(num => {
        num.addEventListener('click', (elem) => {
            let number = elem.toElement.dataset.number;
            let displayContentBottom = document.body.querySelector('.display__container_bottom');
            if (displayContentBottom.textContent === "0") {
                displayContentBottom.textContent = "";
            }
            displayContentBottom.textContent += number;
        });
    });
}


function findAllSymbol() {
    let sym = document.body.querySelectorAll('[data-symbol]');
    return sym;
}

function bindClickListenerSymbol(symbol) {
    symbol.forEach(symbol => {
        symbol.addEventListener('click', (elem) => {
            let symbol = elem.toElement.dataset.symbol;
            let displayContent = document.body.querySelector('.display__container_bottom');
            let lastSymbol = displayContent.textContent[displayContent.textContent.length - 1];
            if (isFinite(lastSymbol) === false) {
                displayContent.textContent += "";
            } else {
                displayContent.textContent += symbol;
            } 
        });
    });
}


function findPercentSymbol() {
    let percent = document.body.querySelector('[data-symbol-percent]');
    return percent;
}

function bindClickListenerPercentSymbol(symbol) {
    symbol.addEventListener('click', () => {
        let textDisplayTop = document.body.querySelector('.display__container_top');
        let textDisplayBottom = document.body.querySelector('.display__container_bottom').textContent;
        if (textDisplayBottom) {
            textDisplayTop.textContent = textDisplayBottom / 100;
        }
    });
}

function findDelAllSymbol() {
    let delAll = document.body.querySelector('[data-symbol-del-all]');
    return delAll;
}

function bindClickListenerDelAllSymbol(symbol) {
    symbol.addEventListener('click', (elem) => {
        let symbolDelAll = elem.toElement.dataset.symbolDelAll;
        let displayContentTop = document.body.querySelector('.display__container_top');
        let displayContentBottom = document.body.querySelector('.display__container_bottom');
        displayContentTop.textContent = symbolDelAll;
        displayContentBottom.textContent = symbolDelAll;
    });
}


function findDelSymbol() {
    let delAll = document.body.querySelector('[data-symbol-del]');
    return delAll;
}

function bindClickListenerDelSymbol(symbol) {
    symbol.addEventListener('click', () => {
        let displayContentBottom = document.body.querySelector('.display__container_bottom');
        displayContentBottom.textContent = displayContentBottom.textContent.slice(0, -1);
    });
}


function findResultSymbol() {
    let result = document.body.querySelector('[data-symbol-result]');
    return result;
}

function bindClickListenerResultSymbol(symbol) {
    symbol.addEventListener('click', () => {
        let textDisplayTop = document.body.querySelector('.display__container_top');
        let textDisplayBottom = document.body.querySelector('.display__container_bottom').textContent;
        if (textDisplayBottom) {
            textDisplayTop.textContent = eval(textDisplayBottom);
        }
    })
}