'use strict';
function jediName(firstName, lastName){
  return `${lastName.substring(0,3) + firstName.substring(0,2)}`;
}

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

function decode(sentence){
  let decode = '';
  let arraySentence = sentence.split(' ');
  for (let i = 0; i<arraySentence.length; i++){
    if (arraySentence[i][0] === 'a'){
      decode = decode + arraySentence[i][1];
    } else if (arraySentence[i][0] === 'b'){
      decode = decode + arraySentence[i][2];
    } else if (arraySentence[i][0] === 'c'){
      decode = decode + arraySentence[i][3];
    } else if (arraySentence[i][0] === 'd'){
      decode = decode + arraySentence[i][4];
    } else {
      decode = decode + ' ';
    }
  }
  return decode;
}