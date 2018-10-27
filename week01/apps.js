"use strict";

//2.1 - Declaring an array that contains 10 strings with book titles:

const myBookArray = ["the_hobbit", "the_fellowship_of_the_ring", "the_two_towers", "the_return_of_the_king", "the_silmarillion", "the_book_of_lost_tales", "tree_and_leaf", "the_lays_of_beleriand", "the_return_of_the_shadow", "the_peoples_of_middle_earth"];

//Checking the array with console.log, to see if everything is in order:

//console.log(myBookArray);

/* Result:

[ 'the_hobbit',
  'the_fellowship_of_the_ring',
  'the_two_towers',
  'the_return_of_the_king',
  'the_silmarillion',
  'the_book_of_lost_tales',
  'tree_and_leaf',
  'the_lays_of_beleriand',
  'the_return_of_the_shadow',
  'the_peoples_of_middle_earth' ]

*/

//2.3 - Creating a function that generates a ul with li elements for each book ID in the array using a for loop:

/* Here is the function before changing it at the step 2.5:

function createListWithBooks() {

    const genUlElement = document.createElement('ul');
    document.body.appendChild(genUlElement);

    for (i = 0; i < myBookArray.length; i++) {
        const genLiElement = document.createElement('li');
        genUlElement.appendChild(genLiElement);
    }
}*/

//2.4 - Creating an object containing information for each book:


const myBookCollection = {
    the_hobbit: {
        Title: "The Hobbit",
        Language: "English",
        Author: "J.R.R. Tolkien",
        bookImg: "bookPics/the_hobbit.JPG",
    },
    the_fellowship_of_the_ring: {
        Title: "The Fellowship Of The Ring",
        Language: "English",
        Author: "J.R.R. Tolkien",
        bookImg: "bookPics/the_fellowship_of_the_ring.JPG",
    },
    the_two_towers: {
        Title: "The Two Towers",
        Language: "English",
        Author: "J.R.R. Tolkien",
        bookImg: "bookPics/the_two_towers.JPG",
    },
    the_return_of_the_king: {
        Title: "The Return Of The King",
        Language: "English",
        Author: "J.R.R. Tolkien",
        bookImg: "bookPics/the_return_of_the_king.JPG",
    },
    the_silmarillion: {
        Title: "The Silmarillion",
        Language: "English",
        Author: "J.R.R. Tolkien",
        bookImg: "bookPics/the_silmarillion.JPG",
    },
    the_book_of_lost_tales: {
        Title: "The Book Of Lost Tales",
        Language: "English",
        Author: "J.R.R. Tolkien",
        bookImg: "bookPics/the_book_of_lost_tales.JPG",
    },
    tree_and_leaf: {
        Title: "Tree and Leaf",
        Language: "English",
        Author: "J.R.R. Tolkien",
        bookImg: "bookPics/tree_and_leaf.JPG",
    },
    the_lays_of_beleriand: {
        Title: "The Lays Of Beleriand",
        Language: "English",
        Author: "J.R.R. Tolkien",
        bookImg: "bookPics/the_lays_of_beleriand.JPG",
    },
    the_return_of_the_shadow: {
        Title: "The Return Of The Shadow",
        Language: "English",
        Author: "J.R.R. Tolkien",
        bookImg: "bookPics/the_return_of_the_shadow.JPG",
    },
    the_peoples_of_middle_earth: {
        Title: "The Peoples Of Middle-Earth",
        Language: "English",
        Author: "J.R.R. Tolkien",
        bookImg: "bookPics/the_peoples_of_middle_earth.JPG",
    }
}


//2.5 - A function that takes the actual information about the book from the object and displays that:

function createListWithBooks() {

    let genUlElement = document.createElement('ul');
    document.body.appendChild(genUlElement);


    for (let i in myBookCollection) {

        let liChild = genUlElement.appendChild(document.createElement('li'));
        let imgChild = liChild.appendChild(document.createElement('img'));
        imgChild.src = myBookCollection[i].bookImg;
        let h2Child = liChild.appendChild(document.createElement('h2'));
        let h2Text = h2Child.appendChild(document.createTextNode(myBookCollection[i].Title));
        let h3Child = liChild.appendChild(document.createElement('h3'));
        let h3Text = h3Child.appendChild(document.createTextNode('Author : ' + myBookCollection[i].Author));
        let h4Child = liChild.appendChild(document.createElement('h4'));
        let h4Text = h4Child.appendChild(document.createTextNode('Language : ' + myBookCollection[i].Language));

        liChild, h2Child, h2Text, h3Child, h3Text, h4Child, h4Text, imgChild = myBookCollection[i];

    }

};