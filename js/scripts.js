var list = document.getElementById('list');
var add = document.getElementById('addElem');
var number = document.getElementsByTagName('li');

console.log(list);
console.log(add);
console.log(number);

add.addEventListener('click', function(e) {
    list.innerHTML += '<li>item ' + number.length + '</li>';
});