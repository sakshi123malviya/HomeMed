const initSlider = () =>{
    const imageList = document.querySelector(".main-slide .slide-bar")

    const slideButtons = document.querySelectorAll(".main-slide .slide-btn")

    slideButtons.forEach(button =>{
        button.addEventListener("click", () =>{
            
            const direction = button.class === "prev-btn" ? -1 : 1;
            const scrollAmount=imageList.clientWidth * direction;
            imageList.scrollBy({left :scrollAmount , behavior:"smooth"});
        })
    })
}

window.addEventListener("load",initSlider);
