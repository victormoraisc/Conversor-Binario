$(document).ready(function()
{

function tool_menu_show(target)
{
    target.toggleClass('show');
}

$('.ferramentas_numericas_menu').click(() => { 
    tool_menu_show($('.ferramentas_numericas_menu_list'))
  
})
});