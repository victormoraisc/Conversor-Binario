//Class just for organization of the code

class Menu {
    constructor(menu, menuList, menuLinks){
        this.menu = document.querySelector(menu);
        this.menuList = document.querySelector(menuList);
        this.menuLinks = document.querySelectorAll(menuLinks);
        this.activeClass = "active";    
        this.handleClick = this.handleClick.bind(this);
    }

    //Function that animate the links when it apear on page
    animateLinks()
    {
        this.menuLinks.forEach((link, index) =>
        {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `itemListFade 0.5s ease forwards ${index/7 + 0.3}s`);
        })
    }
    //Function that toggle the menu
    handleClick()
    {
        this.menuList.classList.toggle(this.activeClass);
        this.menu.classList.toggle(this.activeClass);
        this.animateLinks();
    }
    //Event listener that trigger menu
    addClickEvent()
    {
        this.menu.addEventListener("click", this.handleClick);
    }
    //Function that start the code
    init()
    {
        if (this.menu)
        {
            this.addClickEvent();
        }
        return this;
    }
}
//Build the class in a variable
const menu = new Menu
(
    ".sandwitch_menu",
    ".item_list",
    ".item_list li"

)
//Start the code by the variable
menu.init();
