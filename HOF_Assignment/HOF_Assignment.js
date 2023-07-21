
// ******  Ques:1 *******

let Arr = [1,2,3,4,5,6]

const revArr = (el) => {
    let r = el.reverse();
    return r;
  }
  
//   console.log(revArr(Arr));

  setTimeout(() => {
    // console.log(revArr(Arr));
  }, 1000);


//   setTimeout(() => {
//     revArr(Arr);
//   }, 1000);








// ********** Ques:2 **********

// This is a first approach. for this question.
let number1 = Math.floor(Math.random()*100);


setTimeout(() => {
  // console.log(number1);
}, 3000);





// This is a second approach. for this question.
const number = (el) => {
  const randomNumber = Math.floor(Math.random() * 100);
  return el(randomNumber);
};


const callbackFunction = (number) => {
  console.log(`Random number: ${number}`);
};

number(callbackFunction);





// ******** This is a third question **********


let items  = { book:100 , shirt : 499 , watch : 1299}


const exchangeRate = 80;

const convertedItems = Object.fromEntries(

  Object.entries(items).map( ([itemName, priceInUSD]) => [itemName, priceInUSD * exchangeRate])
        
);

// console.log( 'Indian price' , items , ' And   =>' , 'US Dollar price ' , convertedItems);







// This is a fourth question.

const author = {raja : 2013 , premchand : 1990 , ramlal : 2001 , rahul : 2012}

let convert = Object.fromEntries(Object.entries(author) .filter( ([key , value])  => value < 2010))

// console.log(convert);








// This is a fifth question.
const books = [
  { title: "Book 1", author: "author 1", year: 2005 },
  { title: "Book 2", author: "author 2", year: 2012 },
  { title: "Book 3", author: "author 3", year: 2008 },
  { title: "Book 4", author: "author 4", year: 2015 },
  { title: "Book 5", author: "author 5", year: 2003 }
];

const filteredBooks = books.filter(book => book.year >= 2010).map(book => ({
  
  
    title: book.title,
    author: book.author.toUpperCase()
  }));

// console.log(filteredBooks);





//  ***** fifth question for URL validation  *****

let reg = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig

let str = 'gskinner.com.'

let result = reg.test(str)
// console.log(result);




//  ***** sixth question  for Linkdin profile URL validation *****


let reg2 = /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)\/([-a-zA-Z0-9]+)\/*/gmi


let str2 = 'http://nl.linkedin.com/in/name'

let result2  =   reg2.test(str2)
console.log(result2);



