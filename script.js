

function startGame() {
    const whatsYourNamne = prompt('Hej, vad heter du?')
    alert('Hej' + ' ' + whatsYourNamne + ',' + ' ' + 'häng med på en tur i Göteborg!')
    console.log(whatsYourNamne)
}

function firstTransport() {
    const goToFirstLocation = prompt('Vill du åka spårvagn eller promenera?')
    if (goToFirstLocation == 'spårvagn') {
        alert('Åk spårvagn nr 11 till Domkyrkan')
    }
    else {
        alert('Promenera mot Domkyrkan. Men se upp, här i Göteborg har spårvagnarna alltid företräde.')
    }
    console.log(goToFirstLocation)
}

function whatDoYouThinkofDomkyrkan() {
    const theLookofDomkyrkan = prompt('Nu är du framme vid Domkyrkan, vad tycker du? Är den fin eller ful?')
    if (theLookofDomkyrkan == 'ful') {
        alert('Synd, jag tycker att den är fin!')
    }
    else {
        alert('Ja, visst är den fin!')
    }
}

function inTheMoodForACupOfCoffee() {
    const drinkCoffee = prompt('Gillar du kaffe?')
    if (drinkCoffee == 'ja') {
        alert('Då rekomenderar jag starkt att du går till da Matteo på Vallgatan, gott kaffe!')
    }
    else {
        alert('Gå till da Matteo på vallgatan ändå och ät en god bulle!')
    }
}

function atDaMatteo() {
    alert('Du är nu framme på da Matteo och du ska beställa i kassan men inser att din plånbok inte längre ligger i din ficka.')
}

function atCashierDaMatteo() {
    const missingWallet = prompt('Vad gör du nu, suckar uppgivet  eller skriker i förtvivlan: min plånbok är borta?')
    if (missingWallet == 'suckar uppgivet') {
        alert('Någon knackar dig på axeln!')
        const doYouTurnAround = prompt('Vänder du dig om för att se vem som knackar dig på axeln?')
        if (doYouTurnAround == 'ja')
        alert('Du vänder dig om och ser Håkan Hellström som säger: Klart du ska ha fika, jag bjuder!')
    }    
    if (missingWallet == 'skriker i förtvivlan') {
        alert('Baristan ber dig gå åt sidan medan du letar efter din plånbok')
}    
}
