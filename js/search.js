const resultTemplate = document.querySelector('[results_template]')
const resultContainer = document.querySelector('[results_container]')
const search =  window.location.search;
const urlParams = new URLSearchParams(search);
let query = [];
if (urlParams.get('q') != null)
{
    query = urlParams.get('q').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(' ');
}
let results = [];

fetch('/pages.json')
.then(res => res.json())
.then(data => {
    results = data.map(id => {
        const result = resultTemplate.content.cloneNode(true).children[0];
        const header = result.querySelector('[result_header]');
        const link = result.querySelector('[result_link]');
        const redirect = result.querySelector('[result_redirect]');
        const body = result.querySelector('[result_body]');
        header.textContent = id.title
        redirect.setAttribute("href", id.link) 
        link.textContent = id.link
        body.textContent = id.description
        resultContainer.append(result)
        return {title: id.title, link: id.link, description: id.description, element: result}
    }
    )
    results.forEach(id =>
        {
            query.forEach(value =>
                {
                    const isVisible = id.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(value) || id.description.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(value)
                    id.element.classList.toggle("hide", !isVisible);  
                })
        })
})



    
    



/*
const userCardTemplate = document.querySelector('[data-user-template]')
const userCardContainer = document.querySelector('[user-cards-container]')
const searchInput = document.querySelector('[data-search]')

let users = []

searchInput.addEventListener("input", e => 
{
const value = e.target.value.toLowerCase()
users.forEach(user => {
    const isVisible = user.name.toLowerCase().includes(value) || user.email.includes(value)
    user.element.classList.toggle("hide", !isVisible)
})
})

fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => {
users = data.map(user => {
    const card = userCardTemplate.content.cloneNode(true).children[0]
    const header = card.querySelector('[data-header]')
    const body = card.querySelector('[data-body]')
    header.textContent = user.name
    body.textContent = user.email
    userCardContainer.append(card)
    return { name: user.name, email: user.email, element: card}
})
})*/