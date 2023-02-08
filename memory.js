let cardImages = [
"image01","image01","image02","image02","image03","image03",
"image04","image04","image05","image05","image06","image06",
"image07","image07","image08","image08","image09","image09",
"image10","image10","image11","image11","image12","image12",
];

cardImages.sort(() => Math.random() - 0.5)
let cards = document.querySelectorAll("div");
cards = [...cards];

let activeCard = "";
let pair = [];
let winCheck = cards.length/2;


const clickCard = function() {
    activeCard = this;

    if(activeCard==pair[0]) return

    activeCard.classList.remove("to_be_guessed");
    if(pair.length === 0) {
        pair[0] = activeCard;
        return;
    }
    else {
        cards.forEach(card => {
            card.removeEventListener("click", clickCard)
        })
        pair[1] = activeCard;
        setTimeout(function(){
            if(pair[0].className === pair[1].className) {
                pair.forEach(card => card.classList.add("guessed"));
                winCheck --;
                if(winCheck===0){alert("You have won")
                location.reload();}
                // console.log(winCheck);
               
            }
            // 'loose'
            else{
                pair.forEach(card => card.classList.add("to_be_guessed"))  
            } 
            activeCard="";
            pair.length=0;
            cards.forEach(card => card.addEventListener("click", clickCard))

        }, 800)

    }
}

const init = () => {
    cards.forEach((card) =>{
        card.classList.add(cardImages.pop())
    })

cards.forEach(function(card)  {
    card.classList.add("to_be_guessed")
     card.addEventListener("click", clickCard)
})

}

init()




// setTimeout(function(){
//     cards.forEach(function (card){
//         card.classList.add("to_be_guessed")

//     })

// },3000)