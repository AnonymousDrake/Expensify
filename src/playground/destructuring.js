//
// Object Destructuring
// 

const book={
    title: "Ego is the enemy",
    author: "Ryan Holiday",
    publisher:{
        name: "Penguin"
    }
};


const {name: publisherName = "Self-Published"} = book.publisher

console.log(publisherName)

//
// Array Destructuring
//

const item = ["Coffee(hot)", "$2.00", "$2.50", "$2.75"];

const [itemName,,mediumPrice] = item;


console.log(`A ${itemName} costs ${mediumPrice}.`);