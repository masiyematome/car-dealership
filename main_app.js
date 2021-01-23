//Selectors 

const buttonsContainer = document.querySelector(".buttons-container");
const buttons = document.querySelectorAll("button");
const carHolders = document.querySelectorAll(".car-holder");
const modal = document.querySelector(".modal");
const smallImages = document.querySelectorAll(".cars-display img");
const fullImage = document.querySelector(".full-image");
const imageCaption = document.querySelector(".image-caption");
const fullImageContainer = document.querySelector(".full-image-container");
const closeButton = document.querySelector(".close-button");

//Event listeners

buttonsContainer.addEventListener("click", showCars);

//Functions

(function(){
    
    smallImages.forEach(smallImage => {
        smallImage.addEventListener("click",() =>{
            modal.classList.add("open");
            fullImageContainer.classList.add("open");
    
            const theFullImage = smallImage.getAttribute("src");
            fullImage.src = theFullImage;
    
            const captionText = smallImage.getAttribute("alt");
            imageCaption.innerText = captionText;
    
        })
    })
    
    modal.addEventListener("click",(event) =>{
        if(event.target.classList.contains("modal") || event.target.classList.contains("close-button")){
            modal.classList.remove("open");
            fullImageContainer.classList.remove("open");
            
        }
    })

})();

function showCars(ev) {

    const clickedButton = ev.target;

    buttons.forEach(button => {
        button.addEventListener("click", function(){
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        })
    })

    carHolders.forEach(function (holder) {

        switch (clickedButton.classList[0]) {
            
            case "all-cars-button":
                holder.style.display = "flex";
                break;

            case "sedans-button":

                if (holder.classList[1] == "sedan") {
                    holder.style.display = "flex"; 
                }

                else {
                    holder.style.display = "none";
                }

                break;

            case "hatchbacks-button":
                if (holder.classList[1] == "hatchback") {
                    holder.style.display = "flex";
                }

                else {
                    holder.style.display = "none";
                }

                break;

            case "coupes-button":
                if (holder.classList[1] == "coupe") {
                    holder.style.display = "flex";
                }

                else {
                    holder.style.display = "none";
                }

                break;

            case "suvs-button":
                if (holder.classList[1] == "suv") {
                    holder.style.display = "flex";
                }

                else {
                    holder.style.display = "none";
                }

                break;

            case "bakkies-button":
                if (holder.classList[1] == "bakkie") {
                    holder.style.display = "flex";
                }

                else {
                    holder.style.display = "none";
                }

                break;
        }
    })

}
