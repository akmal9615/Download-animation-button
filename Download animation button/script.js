const btn = document.querySelector('.btn')
btn.addEventListener('click',()=>{
btn.classList.add('active')
setTimeout(() => {
btn.classList.remove('active')
}, 13000);
});