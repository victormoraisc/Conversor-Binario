class Menu {
    constructor(menu, menuList, menuLinks){
        this.menu = document.querySelector(menu);
        this.menuList = document.querySelector(menuList);
        this.menuLinks = document.querySelectorAll(menuLinks);
        this.activeClass = "active";    
        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks()
    {
        this.menuLinks.forEach((link, index) =>
        {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `itemListFade 0.5s ease forwards ${index/7 + 0.3}s`);
        })
    }
    handleClick()
    {
        this.menuList.classList.toggle(this.activeClass);
        this.menu.classList.toggle(this.activeClass);
        this.animateLinks();
    }
    addClickEvent()
    {
        this.menu.addEventListener("click", this.handleClick);
    }

    init()
    {
        if (this.menu)
        {
            this.addClickEvent();
        }
        return this;
    }
}
const menu = new Menu
(
    ".sandwitch_menu",
    ".item_list",
    ".item_list li"

)

menu.init();