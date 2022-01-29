(function(){
    const questionlist = document.querySelectorAll(".question-list_item")
    const list = document.querySelector(".question-list")
    
    const addClick = () =>{
        questionlist.forEach(element => {
            element.addEventListener('click', ()=>{
                let menu = element.children[1]
                let h = 0
                element.classList.toggle('answer_active')
                if(menu.clientHeight == 0){
                    h = menu.scrollHeight
                }

                menu.style.height = `${h}px`
            })
        });
    }

    addClick()
})()