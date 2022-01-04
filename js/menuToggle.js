const Select = (query) => document.querySelector(query);

let toggle = Select('.toggle');
let navigation = Select('.navigation');
let main = Select('.main');

// Toggle active class on navigation and main when clicking the toggle element
toggle.onclick = () =>  [navigation,main].forEach(e => e.classList.toggle('active'));