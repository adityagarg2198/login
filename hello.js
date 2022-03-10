const heading=document.querySelector('.heading');

const value=localStorage.getItem('username');

heading.textContent='hello '+value;