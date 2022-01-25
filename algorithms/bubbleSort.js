/**
 * Temporal Complexity -> O( n^2 )
 * Space Complexity -> O( n )
 * Auxiliary Space -> O( 1 )
*/

/** TEMPORAL COMPLEXITY
 * Operation
 * O( 1 + n * n + 1 + 1 + 1 + 1 + 1 ) = O( n^2 + 6 ) 
 * 
 * Simplifier
 * O( n^2 ) 
*/

function bubbleSort(array) {
   let length = array.length; // O(1)
   for (let i = 0; i < length; i++) { // O(n)
     for (let j = 0; j < length; j++) { // O(n)
       if (array[j] > array[j + 1]) { // O(1)
         let temporal = array[j]; // O(1)
         array[j] = array[j + 1]; // O(1)
         array[j + 1] = temporal; // O(1)
       }
     }
   }
   return array; // O(1)
}


// Space Complexity and Auxiliary Space
function bubbleSort(array) { // O( n )
    let length = array.length; // O( 1 )
    for (let i = 0; i < length; i++) { // O( 1 )
      for (let j = 0; j < length; j++) { // O( 1 )
        if (array[j] > array[j + 1]) { 
          let temporal = array[j]; // O( 1 )
          array[j] = array[j + 1]; //
          array[j + 1] = temporal; //
        }
      }
    }
    return array; //
}