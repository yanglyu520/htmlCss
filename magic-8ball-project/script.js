/**
 * Here is our array of messages our 8ball will store!
 *  
 * FIXME: 
 * Add all the possible fortunes we can get
 * from the Magic 8-Ball! 
 */
const messages = ["FIXME", "FIXME"];

/**
 * Returns a random eight ball message
 */
function getEightBallMessage() {
  // FIXME:
  // Make a variable messageSize which gets the length
  // of the array (or counts the amount of messages inside
  // of that array)


  // FIXME:
  // Make a variable randomIndex, and set it to a random
  // number from 0 to the length of the array. 


  // FIXME:
  // Get the randomIndexth message from our array!
  // Let's call it fortuneStr.


  return fortuneStr;
}


/**
 * Takes an eightball message and places it inside
 * the ball
 */
function changeMessage() {

  // Use JavaScript to get the <div id="eight"> tag!
  const eightEl = document.getElementById('eight');

  // FIXME:
  // What do you think we can do to use JS to get
  // the <div id="answer"> tag? Name it answerEl.


  // This "clears" the eight ball message
  eightEl.textContent = '';

  // We want the 8Ball to pick a random fortune for us!

  // FIXME:
  // fill in the message with our fortune!

}

// Use JavaScript to get the <div id="button"> tag!
const buttonEl = document.getElementById('button');

// Tell our browser to make sure the message
// changes when we click on the "SHAKE" button.
// "When we click on the button, let's run the
// changeMessage function above!"
buttonEl.addEventListener('click', changeMessage);