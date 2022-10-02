//name="q" id="search"
const search_button = document.querySelector('.search_button');
const search_box = document.querySelector('.search_box');
const search_form = document.querySelector('.search_form');
const main = document.querySelector('.main_menu');
const close_search = document.querySelector('#close_search');
const search_field = document.querySelector('.search_field');

search_button.addEventListener('click', () => 
{
    search_box.classList.toggle('hide', false);
    close_search.classList.toggle('hide', false);
    search_form.classList.toggle('hide', false);
    setTimeout(() => 
    {
        search_field.classList.toggle('active', true);
        search_form.classList.toggle('active', true);
        search_box.setAttribute("name", "q");
        search_box.setAttribute("id", "search");
        search_box.classList.toggle("active", true);
        main.classList.toggle("active", true);
        close_search.classList.toggle("active", true);
        search_box.focus();
        search_button.setAttribute("formaction", "https://multiconversor.com/search?");
        search_button.setAttribute("form", "search_form");
        search_button.setAttribute("type", "submit");
    }, 1)
})
close_search.addEventListener('click', () => {
    search_box.classList.toggle("active", false);
    search_form.classList.toggle("active", false);
    close_search.classList.toggle("active", false);
    main.classList.toggle("active", false);
    search_button.removeAttribute("formaction", "https://multiconversor.com/search?");
    search_button.removeAttribute("form", "search_form");
    search_button.removeAttribute("type", "submit");
    setTimeout(() => 
    {
    search_box.classList.toggle('hide', true);
    close_search.classList.toggle('hide', true);
    search_form.classList.toggle('hide', true);
    }, 100)
})