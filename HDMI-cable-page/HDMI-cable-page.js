const mainimg = document.querySelector(".mainimg")
const smallImg = document.querySelectorAll(".imgsmall")


smallImg.forEach((img)=>{

    img.addEventListener("click",function(){
        
        mainimg.src = img.src
    })

})