'use strict';
function handleClick() { // к названию функции добавлены скобки
  openMail();
}
const button = document.getElementById('open'); // window изменен на document
button.onclick = handleClick; // убраны скобки
