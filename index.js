const button=document.querySelector('.btn');
const heading=document.querySelector('.heading');
const username=document.querySelector('.username');


button.addEventListener('click',(event)=>{
    event.preventDefault();
    const value=username.value;
    window.location.href='/hello.html';
    localStorage.setItem('username',value);
})