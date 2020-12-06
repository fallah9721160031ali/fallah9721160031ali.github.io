console.log(document.getElementById('sidebar-title'));
let headerTitle = document.getElementById('sidebar-title');
let header = document.getElementById('logo');
console.log(headerTitle);
headerTitle.textContent = 'Hello';
headerTitle.innerText = 'Goodbye';
console.log(headerTitle.innerText);
headerTitle.innerHTML = '<h3>Hello Ali</h3>';
header.style.borderBottom = 'solid 3px #000';