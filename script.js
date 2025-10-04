'use strict';
/*
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                            PROJECT #1: GUESS MY NUMBER!
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// AN EASY WAY OF SELECTING AN ELEMENT
document.querySelector('.message'); // .querySelector is a Method Available on the Document Object.

// So in these brackets we need to pass in a Selector and again this Selector is exactly the same Selector that we would use in CSS
// So here we pass in the String and inside the Quotes we need to select an Element with a Class name of .message. So we will then simply write '.message' inside the brackets.
// So if the Element was an ID then instead of the Dot Notation we will use the Hashtag Notation.

// Now we can quickly take a look at the Result of this Selection here by using console.log()
// Now keep in mind that we will Open up the Server using the Live Terminal.

console.log(document.querySelector('.message'));
// OUTPUT-
// <p class="message">Start guessing...</p>

// So as you can see we already have the Paragraph Element here. And if we hover over the Log we see taht it Automatically highlights the Selected Element on the Page.

// So this is basically the First DOM Manipulation that you did.

// Now as you can see this Element that we have Selected is itself not very useful here.
// Instead of this lets Select the Text "Start guessing".

// SELECTING THE TEXT:
// So all we have to do is add a Property after the bracket of the .querySelector() Called .textContent

console.log(document.querySelector('.message').textContent);
// OUTPUT-
// Start guessing...

// So as you can see we got the Output as the Text which was present inside the Element that we Selected previously.
// document.querySelector('.message') was used to Select the Element in the Page.
// .textContent Property was then used to Select the Text Out of the Element.

// So in this we Selected the Text from the Paragraph Element by using its Class .message.

// So now we know how to establish a Connection between our Code inside the JavaScript File to the Elements and Selectors present inside the HTML and CSS Files.
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                             WHAT'S THE DOM AND DOM MANIPULATION
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ONES SLIDES.MD FILE FOR NOTES OF THIS LECTURE

/*
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                              SELECTING AND MANIPULATING ELEMENTS
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// So in the Previous Lecture we Selected the Message Element here
// Then we also got the .textContent from the Selected Element

// So besides getting the Text Content From the Element we can also set the Content of the Element
// So let's do that:

document.querySelector('.message').textContent = 'Correct Number!';

// Now we after changing it we can now actually see the Change on the Rendered Site. Instead of Start guessing... it is now changed to Correct Number!
// Now if we log the value of this we will see the Output as Correct Number!
console.log(document.querySelector('.message').textContent);
// OUTPUT-
// Correct Number!

// As you can see we now got the Output as Correct Number instead of Start guessing...

// So now what we did here is already DOM Manipulation and that is because here we Manipulated the Content of an Element which in referred as a DOM Node inside the DOM Tree.

// Now let's do the same with Secret Number and also the Score.
// So both of these Values are basically stored in an Element

// So for the Secret Number here it is Stored in the Class of .number
// And for the Score which is 20 here inside the Span Elemen with the Class of .score

// Now let's go ahead and Select Both the Elements one with the Class of .number and the other one with the Class of .score

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 10;

// Now we see that the Question Mark in the Center of the page is now Number 13 and the Score on the Page is now 10.

// GRABBING A VALUE FROM THE INPUT ELEMENT
// Let's do the same with the Input Field.
// So Input Field as the name suggest is the place where we can Input some Data
// Let's see so this Input Field has a Class of .guess and it is inside a Input Element.
// So now to get the Value of an Input Element we don't user the textContent Property.
// Instead to get the Value of an Input Element we use the value Property.

console.log(document.querySelector('.guess').value);
// OUTPUT-
// BLANK

// As you can see we got no Log in the Console and that is because the Value of the Input Element is yet to be set by the User and it is currently Empty.
// Now we can also use the Input Property to set the Value of the Element. Which also means to Manipulate this Element.

document.querySelector('.guess').value = 23;

// Now with this we see the Number 23 on the Rendered Page inside the Input Box
// It looked like as if a User has given an Input or the Input was given by us.
// But instead of us writing the Number it was JavaScript which wrote the 23 for use simply by executing the Code above.

// And now if we Log the Value of the Input Element we will get the Output as 23.
console.log(document.querySelector('.guess').value);
// OUTPUT-
// 23
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                              HANDLING CLICK EVENTS
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
const number = Math.trunc(Math.random() * 20) + 1; //Can be Added inside Brackets

let score = 20;

document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);
  
  // When there is not Input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';

    // When Player Wins
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct Number!';
    
    // When Guess is Too High
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score = score - 1; // can also be written as "score--"
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
    'Game Over, You lost the Game';
  }
  
  // When Guess is Too Low
} else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score = score - 1; // can also be written as "score--"
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
    'Game Over, You lost the Game';
    document.querySelector('.score').textContent = 0;
  }
}
});
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                               MANIPULATING CSS STYLES
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
const number = Math.trunc(Math.random() * 20) + 1; //Can be Added inside Brackets

let score = 20;

document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  
  console.log(guess, typeof guess);
  
  // When there is not Input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
    
    // When Player Wins
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem'; //----here
    
    // When Guess is Too High
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score = score - 1; // can also be written as "score--"
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
    'Game Over, You lost the Game';
  }
  
  // When Guess is Too Low
} else if (guess < number) {
  if (score > 1) {
    document.querySelector('.message').textContent = 'Too Low!';
    score = score - 1; // can also be written as "score--"
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent =
  'Game Over, You lost the Game';
  document.querySelector('.score').textContent = 0;
}
}
});
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                             HIDING THE SECRET NUMBER AND FUNCTIONALITY OF PLAYING THE GAME AGAIN
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
const number = Math.trunc(Math.random() * 20) + 1; //Can be Added inside Brackets

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  
  console.log(guess, typeof guess);
  
  // When there is not Input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
    
    // When Player Wins
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = number; // ---------HERE
    
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    
    // When Guess is Too High
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score = score - 1; // can also be written as "score--"
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
    'Game Over, You lost the Game';
  }
  
  // When Guess is Too Low
} else if (guess < number) {
  if (score > 1) {
    document.querySelector('.message').textContent = 'Too Low!';
    score = score - 1; // can also be written as "score--"
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent =
  'Game Over, You lost the Game';
  document.querySelector('.score').textContent = 0;
}
}
});
*/
/*
Implement a Game Reset Functionnality, so that the Player can make a New Guess! Here is how:

1. Select the Element with the 'again' class and attach a Click Event Handler.
2. In the Handler Function, Restore Initial Values of the Score and the Number Variables.
3. Restore the Initial Condition of the Message, Number, Score and Guess Input Field.
4. Also Restore the Original Background Color (#222) and Number width (15rem).
*/
/*
let number = Math.trunc(Math.random() * 20) + 1; //Can be Added inside Brackets

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  
  console.log(guess, typeof guess);
  
  // When there is not Input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
    
    // When Player Wins
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = number; // ---------HERE
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    
    // When Guess is Too High
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score = score - 1; // can also be written as "score--"
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
    'Game Over, You lost the Game';
  }
  
  // When Guess is Too Low
} else if (guess < number) {
  if (score > 1) {
    document.querySelector('.message').textContent = 'Too Low!';
    score = score - 1; // can also be written as "score--"
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent =
  'Game Over, You lost the Game';
  document.querySelector('.score').textContent = 0;
}
}
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...'; // Resetting the Value of Message
  document.querySelector('.score').textContent = '20'; // Resetting the Value of the Score
  
  number = Math.trunc(Math.random() * 20) + 1; // Changing the Value of the Random Number
  
  document.querySelector('.number').textContent = '?'; //  Hiding the Visiblity of the New Random Number
  document.querySelector('body').style.backgroundColor = '#222'; // Resetting the Background Color
  document.querySelector('.number').style.width = '15rem'; // Resetting the Widht of the Random Number Box
  
  document.querySelector('.guess').value = ''; // Clearing he Input Value
  // Since document.querySelecotr('.guess').value is stored inside the guess Variable therefore we cannot just write guess = '';
  // This is because writing it will only change the Value of the Variable not the Value of the Value present inside the Guess Variable.
  // Mening writing this will make the Guess Variable contain "" which is the Empty String and not the Value inside it.
});
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                 IMPLEMENTING HIGH SCORES
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
let number = Math.trunc(Math.random() * 20) + 1; //Can be Added inside Brackets

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  
  console.log(guess, typeof guess);

  // When there is not Input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
    
    // When Player Wins
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    
    // When Guess is Too High
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score = score - 1; // can also be written as "score--"
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Game Over, You lost the Game';
      }
      
    // When Guess is Too Low
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score = score - 1; // can also be written as "score--"
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
    'Game Over, You lost the Game';
    document.querySelector('.score').textContent = 0;
  }
}
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1; // Changing the Value of the Random Number

  document.querySelector('.message').textContent = 'Start guessing...'; // Resetting the Value of Message
  document.querySelector('.score').textContent = score; // Resetting the Value of the Score

  document.querySelector('.number').textContent = '?'; //  Hiding the Visiblity of the New Random Number
  document.querySelector('body').style.backgroundColor = '#222'; // Resetting the Background Color
  document.querySelector('.number').style.width = '15rem'; // Resetting the Widht of the Random Number Box
  
  document.querySelector('.guess').value = ''; // Clearing he Input Value
});
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                 REFACTORING OUR CODE: THE DRY PRINCIPLE
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//1. Identifying Duplicate or Almost Duplicate Code
/*
let number = Math.trunc(Math.random() * 20) + 1; //Can be Added inside Brackets

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  
  console.log(guess, typeof guess);
  
  // When there is not Input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
    
    // When Player Wins
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    
    // When Guess is Too High
  } else if (guess !== number) {
    document.querySelector('.message').textContent =
    guess > number ? 'Too High!' : 'Too Low!';
    
    if (score > 1) {
      score = score - 1; // can also be written as "score--"
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
    'Game Over, You lost the Game';
    document.querySelector('.score').textContent = 0;
    }
  }
  //   }else if (guess > number) {
    //     if (score > 1) {
      //       document.querySelector('.message').textContent = 'Too High!';
      //       score = score - 1; // can also be written as "score--"
      //       document.querySelector('.score').textContent = score;
      //     } else {
        //       document.querySelector('.message').textContent =
  //         'Game Over, You lost the Game';
  //       }
  
  //     // When Guess is Too Low
  //   } else if (guess < number) {
    //     if (score > 1) {
      //       document.querySelector('.message').textContent = 'Too Low!';
  //       score = score - 1; // can also be written as "score--"
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent =
  //     'Game Over, You lost the Game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1; // Changing the Value of the Random Number

  document.querySelector('.message').textContent = 'Start guessing...'; // Resetting the Value of Message
  document.querySelector('.score').textContent = score; // Resetting the Value of the Score
  
  document.querySelector('.number').textContent = '?'; //  Hiding the Visiblity of the New Random Number
  document.querySelector('body').style.backgroundColor = '#222'; // Resetting the Background Color
  document.querySelector('.number').style.width = '15rem'; // Resetting the Widht of the Random Number Box
  
  document.querySelector('.guess').value = ''; // Clearing he Input Value
});
*/

// 2. Using Functions For More Refactoring:
let number = Math.trunc(Math.random() * 20) + 1; //Can be Added inside Brackets

let score = 20;
let highscore = 0;
// Function Refactoring
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  // When there is not Input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number';
    displayMessage('No Number'); // Function Refactoring

    // When Player Wins
  } else if (guess === number) {
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!'); // Function Refactoring

    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When Guess is Too High
  } else if (guess !== number) {
    //-----------------------------------------HERE

    //  document.querySelector('.message').textContent = guess > number ? 'Too High!' : 'Too Low!';
    displayMessage(guess > number ? 'Too High!' : 'Too Low!'); // Function Refactoring

    if (score > 1) {
      score = score - 1; // can also be written as "score--"
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'Game Over, You lost the Game';
      displayMessage('Game Over, You lost the Game'); // Function Refactoring

      document.querySelector('.score').textContent = 0;
    }
  }
  // } else if (guess > number) {
  //   if (score > 1) {
  //     score = score - 1; // can also be written as "score--"
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'Game Over, You lost the Game';
  //   }

  //   // When Guess is Too Low
  // } else if (guess < number) {
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1; // Changing the Value of the Random Number

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...'); // Function Refactoring

  document.querySelector('.score').textContent = score; // Resetting the Value of the Score

  document.querySelector('.number').textContent = '?'; //  Hiding the Visiblity of the New Random Number
  document.querySelector('body').style.backgroundColor = '#222'; // Resetting the Background Color
  document.querySelector('.number').style.width = '15rem'; // Resetting the Widht of the Random Number Box

  document.querySelector('.guess').value = ''; // Clearing he Input Value
});
