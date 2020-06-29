
let game = {
    players:[],
    onTurn:0,
    direction:'left'

}
const gameHolder = document.getElementById('Game')
const deck = {
    numB:[1,2,3,4,5,6,7,8,9,'+2','rev','skip','wild','+4'],
    color : ['Red','Green','Blue','Yellow']
}
const getPlayer =(nodeId) =>{
    return{
        myTurn: false,
        playedCards: 0,
        myCards:[],
        node: document.getElementsByClassName(nodeId)
        
    }
}

const randCard = (arr)=>Math.floor(Math.random()*arr.length)
function genCard(deck){
    let cardVal=randCard(deck.numB)+1
    let cardColor=randCard(deck.color)
    switch(cardColor){
        case 0: cardColor = "Red"; 
            break;
        case 1: cardColor = "Green"; 
            break;
        case 2: cardColor = "Blue"; 
            break;
        case 3: cardColor = "Yellow"; 
            break; }
            // SETS WILD AND +4 TO BLACK CARDS
        if (cardVal>11){
            cardColor= "Black";
            }
    switch(cardVal){
        case 10: cardVal = "+2"; 
            break;
        case 11: cardVal = 'Rev'; 
            break;
        case 12: cardVal = "Skip"; 
            break;
        case 13: cardVal = "Wild"; 
            break;
        case 14: cardVal = "+4"; 
            break; }
        
    
    let card={
        color: cardColor,
        value: cardVal
    }
    
    return card;
}

let actCards =[]

for (let i=0; i<52;i++){
    var testD = document.getElementById('testDiv')
    actCards.push(genCard(deck))
    
    
}

const createCardNode = (cardData) =>{
    let card = document.createElement("span")
    
    
    card.innerText=cardData.value
    card.innerHTML.style = card.color
    return card;
}
actCards.forEach(card=>{
    card.node = createCardNode(card)
})

const topCard = (card) => {
    // SETS TOP CARD TO THE TOP OF DECK
    document.getElementById('gCard').innerText=card.value
    tCard = document.getElementById('gCard')
    tCard.style.backgroundColor = card.color
    // SETS YELLOW CARDS TO BLACK FONT
    if (card.color=='Yellow'){
        tCard.style.color="Black"
    }
}
const addCards = (player) =>{
    for(let i = 0; i < 7; i++){
        player.myCards.push(actCards.pop(Math.floor(Math.random() * actCards.length)))
    }
}
for (let i = 0; i < 4; i++ ){
    game.players.push(getPlayer('player'+(i+1)))
    addCards(game.players[i])
    
}
topCard(actCards[0])


let Player ={
    myTurn: false,
    playedCards: 0,
    myCards:[]
}



const gameFlow = (game) =>{
if (game.direction == 'left'){
    game.onTurn+=1;
    if(game.onTurn>3){
    game.onTurn=0
    }else{
        game.onTurn -= 1;
        if(game.onTurn <0){
            game.onTurn=3
        }
    }
}}
const skipPlayed = (game) => {
    game.onTurn+=1
    gameFlow()
    
}
const revPlayed = (game) => {
    game.direction != ''
    gameFlow()
}









var myHand = game.players[0].myCards

myHand.forEach(crd=>{
    
    
    vCard.appendChild(crd)
    vCard.style.backgroundColor = crd.color
    
})



