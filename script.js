// ! Filtreleme işlemi icin;

const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");

// console.log(searchBtn);
// console.log(searchInput);

searchBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let searchTerm = searchInput.value.trim().toLocaleLowerCase()
    console.log(searchTerm);

    let cards = document.querySelectorAll(".col-4")
    // console.log(cards);

    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        let productName = card.querySelector(".card-title").innerHTML.toLocaleLowerCase();
        console.log(productName);

        if (productName.includes(searchTerm)) {
            card.style.display = "block";

        } else {
            card.style.display = "none";
        }
    }
    searchInput.value = "";
})

// ! Sepeti arttırıp Azaltmak için 

const row = document.querySelector(".row")
const sepet = document.querySelector("#result");

row.addEventListener("click",function(e){
    // console.log(e.target);
    if(e.target.className.includes("add-to-cart")){
        sepet.innerHTML++;
    }else if(e.target.className.includes("remove-to-cart")){
        if(sepet.innerHTML !=0){
            sepet.innerHTML--;
        }
    }

})

// ! Markalara Gore Filtreleme 

// const toyota = document.querySelector("#toyota");
// const renault = document.querySelector("#renault");
// const peugeot = document.querySelector("#peugeot");

// toyota.addEventListener("click",function(){
//     let cards = document.querySelectorAll(".col-4")
//     // console.log(cards);

//     for (let i = 0; i < cards.length; i++) {
//         let card = cards[i];
//         let productName = card.querySelector(".card-title").innerHTML.toLocaleLowerCase();
//         console.log(productName);

//         if (productName.includes("toyota")) {
//             card.style.display = "block";

//         } else {
//             card.style.display = "none";
//         }
//     }
//     searchInput.value = "";

// })
// renault.addEventListener("click",function(){
//     let cards = document.querySelectorAll(".col-4")
//     // console.log(cards);

//     for (let i = 0; i < cards.length; i++) {
//         let card = cards[i];
//         let productName = card.querySelector(".card-title").innerHTML.toLocaleLowerCase();
//         console.log(productName);

//         if (productName.includes("renault")) {
//             card.style.display = "block";

//         } else {
//             card.style.display = "none";
//         }
//     }
//     searchInput.value = "";

// })
// peugeot.addEventListener("click",function(){
//     let cards = document.querySelectorAll(".col-4")
//     // console.log(cards);

//     for (let i = 0; i < cards.length; i++) {
//         let card = cards[i];
//         let productName = card.querySelector(".card-title").innerHTML.toLocaleLowerCase();
//         console.log(productName);

//         if (productName.includes("peugeot")) {
//             card.style.display = "block";

//         } else {
//             card.style.display = "none";
//         }
//     }
//     searchInput.value = "";

// })

// ! Yukarida'ki markaya gore filtlereme olayının kisa yolu

const toyota = document.querySelector("#toyota");
const renault = document.querySelector("#renault");
const peugeot = document.querySelector("#peugeot");

function filtrele(marka){
    const cards = document.querySelectorAll(".col-4");

    for(let i = 0; i < cards.length; i++){
        let card = cards[i];
        let productName = card.querySelector(".card-title").innerHTML.trim().toLocaleLowerCase();

        // ! short if
        card.style.display = productName.includes(marka) ? "block" : "none";

    }
}

toyota.addEventListener("click", ()=> filtrele("toyota"))
renault.addEventListener("click", ()=> filtrele("renault"))
peugeot.addEventListener("click", ()=> filtrele("peugeot"))