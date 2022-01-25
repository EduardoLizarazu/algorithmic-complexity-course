/**
 * Temporal Complexity -> O( n^2 )
 * Space Complexity -> O( n )
 * Auxiliary Space -> O( 1 )
*/

// Temporal Complexity
function selectionSort(array) {
   let length = array.length; // O(1)
 
   for (let i = 0; i < length; i++) { // O(n)
     let minimum = i; // O(1)
     for (let j = i + 1; j < length; j++) { // O(n)
       if (array[j] < array[minimum]) { // O(1)
         minimum = j; // O(1)
       }
     }
     if (minimum != i) { // O(1)
       let temporal = array[i]; // O(1)
       array[i] = array[minimum]; // O(1)
       array[minimum] = temporal; // O(1)
     }
   }
   return array; // O(1)
}


// Space Complexity and Auxiliary Space
function selectionSort(array) { // O( n )
    let length = array.length; // O( 1 )
  
    for (let i = 0; i < length; i++) { // O( 1 )
      let minimum = i; // O( 1 )
      for (let j = i + 1; j < length; j++) { // O( 1 )
        if (array[j] < array[minimum]) { 
          minimum = j; 
        }
      }
      if (minimum != i) { 
        let temporal = array[i]; // O( 1 )
        array[i] = array[minimum]; 
        array[minimum] = temporal; 
      }
    }
    return array; 
}