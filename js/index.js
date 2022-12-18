let icon = document.getElementById('icon');
let links = document.querySelector('.links ul')
console.log(links)
icon.addEventListener('click',()=>{
    links.classList.toggle('activee');
})