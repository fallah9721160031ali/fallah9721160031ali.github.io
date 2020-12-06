var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'این یک متن آزمایشی از طریق جاوا اسکریپت است';
li[1].style.fontWeight = 'bold';

for(var i = 0; i < li.length; i++){
  li[i].style.backgroundColor = '#f4f4f4';
}

li[1].style.backgroundColor = 'yellow';