function scuberGreetingForFeet(somenumber){
  // Write your code here!
      if (somenumber <= '400') { return 'This one is on me!'}
    else if (somenumber <= '2500') {return 'I will gladly take your thirty bucks.'}
    else if (somenumber > '2500') {return 'No can do.'}
}

function ternaryCheckCity(cityname){
  // Write your code here!
      return cityname === 'NYC' ? 'Ok, sounds good.' : 'No go.'

}

function switchOnCharmFromTip(typeoftype){
  // Write your code here!
  switch (typeoftype) {
    case 'generous': 
          return 'Thank you so much.'
    case 'not as generous': 
          return 'Thank you.'
    default: 
          return 'Bye.'
  }
}