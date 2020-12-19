function findMinAndRemoveSorted(firstHalf, secondHalf){
  let minfirstHalf = firstHalf[0]
  let minsecondHalf = secondHalf[0]
 
  if(minfirstHalf < minsecondHalf){
    return firstHalf.shift()
  } else {
    return secondHalf.shift()
  }
}


  function merge(firstHalf, secondHalf){
    let sorted = []
    while(firstHalf.length != 0 && secondHalf.length != 0){
      let currentMin = findMinAndRemoveSorted(firstHalf, secondHalf)
      sorted.push(currentMin)
    }
    return sorted.concat(firstHalf).concat(secondHalf)
  }