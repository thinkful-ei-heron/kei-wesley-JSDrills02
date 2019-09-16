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


function daysInMonth(month,leapYear = false){
  switch(month){
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
      return `${month} has 31 days.`;
      break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
      return `${month} has 30 days.`;
      break;
    case 'February':
      if(leapYear){
        return 'February has 29 days.';
      } else {
        return 'February has 28 days.';
      }
    default:
        throw new Error('Must provide a valid month.');
  }
}

console.log(daysInMonth('February'));