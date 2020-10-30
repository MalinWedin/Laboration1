// Startar genom att trycka på start-knappen 
function startGame() {
    const whatsYourNamne = prompt('Hej, vad heter du?')
    alert('Hej' + ' ' + whatsYourNamne + ',' + ' ' + 'häng med!')  
    firstTransport()
}

// Välj hur du vill ta dig till Domkyrkan
function firstTransport() {
    const goToFirstLocation = prompt('Du ska ta dig till Domkyrkan. Vill du åka spårvagn eller promenera?')
    if (goToFirstLocation == 'spårvagn') {
        alert('Åk spårvagn nr 11 till Domkyrkan')
        whatDoYouThinkofDomkyrkan()
    } else if (goToFirstLocation == 'promenera') {
        alert('En promenad mot Domkyrkan, härligt i detta vädret. Men se upp, spårvagnarna har alltid företräde.')
        whatDoYouThinkofDomkyrkan()
    } else {
        alert('Här blev det fel. Välj "spårvagn" eller "promenera"')
        firstTransport()
    }   
} 

// Vad tycker du om Domkyrkan
function whatDoYouThinkofDomkyrkan() {
    const theLookofDomkyrkan = prompt('Nu är du framme vid Domkyrkan, vad tycker du, är den fin eller ful?')
    if (theLookofDomkyrkan == 'ful') {
        alert('Va! Dålig smak!')
        inTheMoodForACupOfCoffee()
    } else if (theLookofDomkyrkan == 'fin') {
        alert('Ja, visst är den fin!')
        inTheMoodForACupOfCoffee()
    } else {
        alert('Här blev det fel. Välj "ful" eller "fin"')
        whatDoYouThinkofDomkyrkan()
    }
}

// Fråga om kaffe
function inTheMoodForACupOfCoffee() {
    const drinkCoffee = prompt('Gillar du kaffe?')
    if (drinkCoffee == 'ja') {
        alert('Då rekomenderar jag starkt att du går till da Matteo på Vallgatan, gott kaffe!')
        atDaMatteo()
    } else if (drinkCoffee == 'nej') {
        alert('Då kan du gå till da Matteo på Vallgatan och äta en god bulle!')
        atDaMatteo()
    } else {
        alert('Här blev det fel. Välj "ja" eller "nej"')
        inTheMoodForACupOfCoffee()
    }
}

// På da Matteo
function atDaMatteo() {
    alert('Du är nu framme på da Matteo.')
    atCashierDaMatteo()
}

// Beställa i kassan
function atCashierDaMatteo() {
    const canIHaveYourOrder = prompt('Hej! Vad får det lov att vara?')
    if (canIHaveYourOrder == 'kaffe') {
        alert('En kaffe till dig!')
        outdoorSeating()
    } else if (canIHaveYourOrder == 'bulle') {
        alert('En bulle till dig!')
        outdoorSeating()
    } else if (canIHaveYourOrder == 'kaffe och bulle') {
        alert('Bra val, här har du ditt kaffe och din bulle!')
        outdoorSeating()
    } else {
        alert('Här blev det fel. Välj "kaffe" eller "bulle"')
        atCashierDaMatteo()
    }        
}
// Till uteserveringen
function outdoorSeating() {
    alert('Nu får du sätta dig på den soliga uteserveringen och njuta av värmen, hoppas vi ses igen! Hej då!')
}

