let homeDisplay= document.getElementById ("home-display")
let guestDisplay= document.getElementById ("guest-display")
homeScore=0
guestScore=0

function hPlusOne(){
    homeScore = homeScore + 1
    homeDisplay.textContent = homeScore
    
}

function hPlusTwo(){
    homeScore = homeScore + 2
    homeDisplay.textContent = homeScore
    
}

function hPlusThree(){
    homeScore = homeScore + 3
    homeDisplay.textContent = homeScore
    
}

function gPlusOne(){
    guestScore = guestScore + 1
    guestDisplay.textContent = guestScore
    
}

function gPlusTwo(){
    guestScore = guestScore + 2
    guestDisplay.textContent = guestScore
    
}

function gPlusThree(){
    guestScore = guestScore + 3
    guestDisplay.textContent = guestScore
    
}

function newGame () {
    
    homeScore=0
    guestScore=0
    homeDisplay.textContent = homeScore
    guestDisplay.textContent = guestScore
}

