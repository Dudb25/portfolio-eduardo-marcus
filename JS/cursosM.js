function dropDownMenu() {
    const botaoMenu = document.querySelector('#botao-menu');
    const navMenu = document.querySelector('#nav-menu');

    function handleCLick() {
        navMenu.classList.toggle('ativo');
    }

    botaoMenu.addEventListener('click', handleCLick);
}

dropDownMenu();