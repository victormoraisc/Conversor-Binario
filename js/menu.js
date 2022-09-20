    const menu = document.querySelector(".sandwitch_menu");
    const menuList = document.querySelector(".item_list");
    const menuLinks = document.querySelectorAll(".item_list li");
    const activeClass = "active";    

    menu.addEventListener("click", handleClick);

    //Function that animate the links when it apear on page
    function animateLinks()
    {
        menuLinks.forEach((link, index) =>
        {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `itemListFade 0.5s ease forwards ${index/7 + 0.3}s`);
        })
    }
    //Function that toggle the menu
    function handleClick()
    {   
        menuList.classList.toggle(activeClass);
        menu.classList.toggle(activeClass);
        animateLinks();
    }