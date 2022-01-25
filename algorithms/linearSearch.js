/**
 * Temporal Complexity -> O( n )
 * Space Complexity -> O( n )
 * Auxiliary Space -> Space Complexity - Auxiliary Space
 *                  = O( n ) - O( 1 )
 *                  = O( 1 )
*/

/** TEMPORAL COMPLEXITY
 * O( n + 3 ) - simplifier => O(n)
*/
function linearSearch(array, key) {
   for (let index = 0; index < array.length; index++) { // O(n)
     if (array[index] === key) { // 0(1)
       return index; // O(1)
     }
   }
   return -1; // O(1)
}


// Space Complexity and Auxiliary Space
function linearSearch(array, key) { // O( n )
    for (let index = 0; index < array.length; index++) { // O( 1 )
      if (array[index] === key) { 
        return index; 
      }
    }
    return -1; 
}