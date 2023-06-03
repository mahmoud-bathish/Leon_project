let icon = document.getElementById('icon');
let links = document.querySelector('.links ul');
let dynamicLine = document.getElementById('dynamicLine');
icon.addEventListener('click',()=>{
    links.classList.toggle('activee');
    dynamicLine.classList.toggle('increase-width');
});

