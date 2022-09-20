//name="q" id="search"
const search_button = document.querySelector('.search_button');
const search_box = document.querySelector('.search_box');
const form = document.querySelector('#search_form');
const main = document.querySelector('.main_menu');

search_button.addEventListener('click', () => {
    if (search_box.disabled)
    {
        search_box.removeAttribute("disabled");
        search_box.removeAttribute("style");
        form.setAttribute("method", "GET");
        form.setAttribute("formenctype", "application/x-www-form-urlencoded");
        form.setAttribute("action", "https://multiconversor.com/search?");
        search_box.setAttribute("name", "q");
        search_box.setAttribute("id", "search");
        search_box.classList.toggle("active");
        main.classList.toggle("active");
        search_box.focus();
    }
    else{
        search_button.setAttribute("formaction", "https://multiconversor.com/search?");
        search_button.setAttribute("form", "search_form");
        search_button.setAttribute("type", "submit");
        
    }
   
})