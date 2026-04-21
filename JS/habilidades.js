function accordionList() {
    const topicos = document.querySelectorAll('.topico');
    const descricoes = document.querySelectorAll('.descricao');
    topicos[0].classList.add('active');
    topicos[4].classList.add('active');
    topicos[0].nextElementSibling.classList.add('active');
    topicos.forEach((topico) => {
        topico.addEventListener(('click'), handleClick);
    })
    function handleClick() {
        console.log('God is good');
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('active')
    }
}

accordionList();