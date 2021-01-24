//Selectors 


/**Selectors for filter buttons and cards that display the cars **/
const buttonsContainer = document.querySelector(".buttons-container");
const buttons = document.querySelectorAll("button");
const carHolders = document.querySelectorAll(".car-holder");
const carNamesText = document.querySelectorAll(".car-name");

/**Selectors for the modal that shows the full image of the displayed cars and all it's elements **/
const modal = document.querySelector(".modal");
const smallImages = document.querySelectorAll(".cars-display img");
const fullImage = document.querySelector(".full-image");
const imageCaption = document.querySelector(".image-caption");
const fullImageContainer = document.querySelector(".full-image-container");
const closeButton = document.querySelector(".close-button");

/**Selectors of the search bar **/
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");
const errorText = document.querySelector(".error-text");

//Event listeners

buttonsContainer.addEventListener("click", showCars);
searchButton.addEventListener("click", findSearched);

//Functions

/*A function that finds a searched item*/

function findSearched(e) {

    if (searchInput.value == "") {
        errorText.innerText = "Your search box is empty.Please input something";
        errorText.style.display = "block";
    }

    else {
        carNamesText.forEach(carName => {

            const carNameParent = carName.parentElement;
            const carNameGrandParent = carNameParent.parentElement;

            if (carName.innerText.includes(searchInput.value)) {

                carNameGrandParent.style.display = "flex";
                errorText.style.display = "none";

            }

            else {
                carNameGrandParent.style.display = "none";
            }

        })
    }

}

/*A function that views the full sized images of the displayed images*/

(function () {

    smallImages.forEach(smallImage => {
        smallImage.addEventListener("click", () => {
            modal.classList.add("open");
            fullImageContainer.classList.add("open");

            const theFullImage = smallImage.getAttribute("src");
            fullImage.src = theFullImage;

            const captionText = smallImage.getAttribute("alt");
            imageCaption.innerText = captionText;

        })
    })

    modal.addEventListener("click", (event) => {
        if (event.target.classList.contains("modal") || event.target.classList.contains("close-button")) {
            modal.classList.remove("open");
            fullImageContainer.classList.remove("open");

        }
    })

})();

/*A function that shows the cars based on the filter button clicked*/

function showCars(ev) {

    const clickedButton = ev.target;

    buttons.forEach(button => {
        button.addEventListener("click", function () {
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
