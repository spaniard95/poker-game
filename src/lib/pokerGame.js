const Ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const Suits = ['heart', 'club', 'spade', 'diamond'];

function buildDeck(){
     let deck = [];
    
    Ranks.forEach((rank, weight) => 
        Suits.forEach( suit => 
            deck.push({
                rank, 
                suit,
                weight,
            })
        )
    );
    return deck.sort(()  => Math.random() - 0.5);
}

function dealCards(deck, numCards){

     return {
         cards: deck.slice(0,numCards) , 
         deck: deck
     }
}

function changeCards(hand, cards, newCards){
    
}

export { 
    buildDeck,
    dealCards,
};