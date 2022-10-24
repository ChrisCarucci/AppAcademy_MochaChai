function isFive(num) {
  if (num === 5) {
    return true;
  } else {
    return false;
  }
}

function isOdd(number) {
  if (typeof number != 'number' && !Number.isNaN(number)) {
    throw new Error("Not a number")
  } else if (number % 2 === 0) {
    return false;
  } else {
    return true;
  }
}



function myRange(min, max, step = 1) {  
  let newArray = [];
  if (typeof step === 'undefined') {
    return true;
  } else {
    for (let i = min; i <= max; i+=step)
    newArray.push(i)
  }
  return newArray;
}


module.exports = { isFive, isOdd, myRange };


// In the file funcs.js, you will find three skeleton
 // functions. Your job is to complete those functions according to the specs found in test/funcs-spec.js.