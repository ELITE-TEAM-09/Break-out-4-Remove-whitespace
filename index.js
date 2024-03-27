function removeWhiteSpace(arr){


    return arr.split(' ').join("");

}
let stringExample = " Hello  World  ";

let stringJoined = removeWhiteSpace(stringExample);

console.log(stringExample);

console.log(stringJoined);