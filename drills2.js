'use strict';
function jediName(firstName, lastName){
  return `${lastName.substring(0,3) + firstName.substring(0,2)}`;
}

console.log(jediName('Beyonce', 'Knowles'));

function beyond(num){
  if (num === Infinity){
    console.log('And beyond');
  } else {
    if( num > 0 ) { 
      console.log('To infinity');
    }
    if ( num < 0){
      console.log('To negative infinity'); 
    } 
    if ( num === 0){
      console.log('Staying home');
    }
  }
}
