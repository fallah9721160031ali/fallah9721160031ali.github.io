let items = document.getElementsByClassName('box-title');
console.log(items);
console.log(items[1]);
items[1].textContent = 'جاوااسکریپت';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = '#444444';
items[1].style.color = '#fff';

// Gives error
//items.style.backgroundColor = '#f4f4f4';

for(var i = 0; i < items.length; i++){
  items[i].style.borderBottom = "1px solid red";
}
