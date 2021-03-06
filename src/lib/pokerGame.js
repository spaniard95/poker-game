const Ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a'];
const Suits = ['hearts', 'clubs', 'spades', 'diamonds'];

function buildDeck(){
     let deck = [];
    
    Ranks.forEach((rank, weight) => 
        Suits.forEach( suit => 
            deck.push({
                rank, 
                suit,
                weight,
                selected: false,
            })
        )
    );
    return deck.sort(()  => Math.random() - 0.5);
}

function dealCards(deck, numCards){
    
    return {
         cards: deck.slice(0, numCards)
            .sort((a, b) =>
                a.weight - b.weight
            ) , 
         deck: deck.slice(numCards),
     }
}

function changeCards(hand, newCards){
    return ([...hand, ...newCards].sort((a, b) =>
            a.weight - b.weight
        ) 
    );
}

export { 
    buildDeck,
    dealCards,
    changeCards,
};