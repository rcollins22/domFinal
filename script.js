const gameHolder = document.getElementById('Game')
const deck = {
    numB:[1,2,3,4,5,6,7,8,9,'+2','+4','wild','skip','rvse'],
    color : ['Red','Green','Blue','Yellow']
}

const randCard = (arr)=>Math.floor(Math.random()*arr.length)
function genCard(deck){
    let cardVal=randCard(deck.numB)
    let cardColor=randCard(deck.color)
    switch(cardColor)
        {
            case 0: cardColor = "Red"; 
                break;
            case 1: cardColor = "Green"; 
                break;
            case 2: cardColor = "Blue"; 
                break;
            case 3: cardColor = "Yellow"; 
                break;
        }
        switch(cardVal)
        {
            case 9: cardVal = "+2"; 
                break;
            case 10: cardVal = "+4"; 
                break;
            case 11: cardVal = "Wild"; 
                break;
            case 12: cardVal = "Skip"; 
                break;
            case 13: cardVal = "Rev"; 
                break;
        }
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
    card.innerText=cardData.color + cardData.value
    card.innerHTML.style = `background-color:${cardData.color.value}`
    return card;
}
actCards.forEach(card=>{
    card.node = createCardNode(card)
})
const topCard = (card) => {
    
    document.getElementById('gCard').innerText=card.value
    document.getElementById('gCard').innerHTML.style = `background-color:${card.color}`
    tCard = document.getElementById('gCard')
    tCard.style.backgroundColor = card.color
   
    // document.getElementById('gCard').innerHTML.style = `background-color:${card.color};`
    console.dir(document.getElementById('gCard'))
    // console.dir()
}
topCard(actCards[0])


let Player ={
    myTurn: false,
    playedCards: 0,
    myCards:[]
}


let game = {
    players:[],
    onTurn:0,
    direction:'right'

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
const getPlayer =(nodeId) =>{
    return{
        myTurn: false,
        playedCards: 0,
        myCards:[],
        node: document.getElementsByClassName(nodeId)
        
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
console.dir(game.players)
// game.players.forEach(player=>player.myCards.forEach(card=>player.node.append(card.node)))

// console.log(.nodeId)
console.log(game.players)
// game.Players.push(player)