// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveBtn = document.querySelector('#saveBtn');
var calEntry = document.querySelector('#entry');
var savedEntry = [];
var $description = document.querySelector('#description')
$(function () {
//   // TODO: Add a listener for click events on the save button. 
//   //This code should use the id in the containing time-block as a key to save the user input in local storage. 
  
//   // HINT: What does `this` reference in the click listener function? How can DOM traversal be used to get the "hour-x" id of the  time-block containing the button that was clicked? How might the id be useful when saving the description in local storage?
//   //
//   // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. 
  
//   //HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time?
//   //
//   // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements.
  
//   //HINT: How can the id attribute of each time-block be used to do this?
//   //
//   // TODO: Add code to display the current date in the header of the page.
});
//function to save text to local storage
function saveEntry () {
  localStorage.setItem('$description', JSON.stringify(savedEntry));
}
console.log (saveEntry + 'save entry');




// display current date at top of page
const today = dayjs ();
$('#currentDay').text(today.format('dddd MMMM D, YYYY : h:mm A'));

const h9 = document.querySelector('#hour-9');
const h10 = document.querySelector('#hour-10');
const h11 = document.querySelector('#hour-11');
const h12 = document.querySelector('#hour12');
const h13 = document.querySelector('#hour-1');
const h14 = document.querySelector('#hour-2');
const h15 = document.querySelector('#hour-3');
const h16 = document.querySelector('#hour-4');
const h17 = document.querySelector('#hour-5');

const compareTime = [h9, h10, h11, h12, h13, h14, h15, h16, ]


//replaceing text objects with dayJs objects. 
const nine = dayjs().hour(9); 
$('.t9').text(nine.format('hh A'));

const ten = dayjs().hour(10); 
$('#t10').text(ten.format('hh A'));

const eleven = dayjs().hour(11); 
$('#t11').text(eleven.format('hh A'));

const twelve = dayjs().hour(12); 
$('#t12').text(twelve.format('hh A'));

const one = dayjs().hour(13); 
$('#t1').text(one.format('hh A'));

const two = dayjs().hour(14); 
$('#t2').text(two.format('hh A'));

const three = dayjs().hour(15); 
$('#t3').text(three.format('hh A'));

const four = dayjs().hour(16); 
$('#t4').text(four.format('hh A'));

const five = dayjs().hour(17); 
$('#t5').text(five.format('hh A'));

const scheduleTime = [nine, ten, eleven, twelve, one, two, three, four, five];


//When my user opens my page the time blocks will check what time it is
//my javascript will then check each time block (for loop?) against the current time. 
// Then they will assign the class 'past'and turn gray for any block in the past
// then they will assign the class 'present' and display red for the current block
//then they will assign the class 'future' and display green for any block in the future

// 


// function to check time
function timeCheck9 () {



  var presentTime = dayjs().hour();
  console.log ("Present Time" + presentTime);

  
  let calTime = document.querySelector('.t9');
  console.log (calTime.innerText);
  
  if ( parseFloat(calTime.id) < presentTime) {
    $('#hour-9').removeClass("future");
    $('#hour-9').addClass("past"); 
    $('#hour-9').removeClass("present");
    
  } else if ( parseFloat(calTime.id) > presentTime) {
    $('#hour-9').removeClass("present");
    $('#hour-9').addClass("future"); 
    $('#hour-9').removeClass("past");
  } else {
    $('#hour-9').removeClass("future");
    $('#hour-9').addClass("present"); 
    $('#hour-9').removeClass("past");
   
  }
  }
function timeCheck10 () {



  var presentTime = dayjs().hour();
  console.log ("Present Time" + presentTime);

  
  let calTime = document.querySelector('.t10');
  console.log (calTime.innerText);
  
  if ( parseFloat(calTime.id) < presentTime) {
    $('#hour-10').removeClass("future");
    $('#hour-10').addClass("past"); 
    $('#hour-10').removeClass("present");
    
  } else if ( parseFloat(calTime.id) > presentTime) {
    $('#hour-10').removeClass("present");
    $('#hour-10').addClass("future"); 
    $('#hour-10').removeClass("past");
  } else {
    $('#hour-10').removeClass("future");
    $('#hour-10').addClass("present"); 
    $('#hour-10').removeClass("past");
   
  }
  }


function timeCheck11 () {



  var presentTime = dayjs().hour();
  console.log ("Present Time" + presentTime);

  
  let calTime = document.querySelector('.t11');
  console.log (calTime.innerText);
  
  if ( parseFloat(calTime.id) < presentTime) {
    $('#hour-11').removeClass("future");
    $('#hour-11').addClass("past"); 
    $('#hour-11').removeClass("present");
    
  } else if ( parseFloat(calTime.id) > presentTime) {
    $('#hour-11').removeClass("present");
    $('#hour-11').addClass("future"); 
    $('#hour-11').removeClass("past");
  } else {
    $('#hour-11').removeClass("future");
    $('#hour-11').addClass("present"); 
    $('#hour-11').removeClass("past");
   
  }
  }


function timeCheck12 () {



  var presentTime = dayjs().hour();
  console.log ("Present Time" + presentTime);

  
  let calTime = document.querySelector('.t12');
  console.log (calTime.innerText);
  
  if ( parseFloat(calTime.id) < presentTime) {
    $('#hour-12').removeClass("future");
    $('#hour-12').addClass("past"); 
    $('#hour-12').removeClass("present");
    
  } else if ( parseFloat(calTime.id) > presentTime) {
    $('#hour-12').removeClass("present");
    $('#hour-12').addClass("future"); 
    $('#hour-12').removeClass("past");
  } else {
    $('#hour-12').removeClass("future");
    $('#hour-12').addClass("present"); 
    $('#hour-12').removeClass("past");
   
  }
  }


function timeCheck01 () {



  var presentTime = dayjs().hour();
  console.log ("Present Time" + presentTime);

  
  let calTime = document.querySelector('.t1');
  console.log (calTime.innerText);
  
  if ( parseFloat(calTime.id) < presentTime) {
    $('#hour-1').removeClass("future");
    $('#hour-1').addClass("past"); 
    $('#hour-').removeClass("present");
    
  } else if ( parseFloat(calTime.id) > presentTime) {
    $('#hour-1').removeClass("present");
    $('#hour-1').addClass("future"); 
    $('#hour-1').removeClass("past");
  } else {
    $('#hour-1').removeClass("future");
    $('#hour-1').addClass("present"); 
    $('#hour-1').removeClass("past");
   
  }
  }


function timeCheck02 () {



  var presentTime = dayjs().hour();
  console.log ("Present Time" + presentTime);

  
  let calTime = document.querySelector('.t2');
  console.log (calTime.innerText);
  
  if ( parseFloat(calTime.id) < presentTime) {
    $('#hour-2').removeClass("future");
    $('#hour-2').addClass("past"); 
    $('#hour-2').removeClass("present");
    
  } else if ( parseFloat(calTime.id) > presentTime) {
    $('#hour-2').removeClass("present");
    $('#hour-2').addClass("future"); 
    $('#hour-2').removeClass("past");
  } else {
    $('#hour-2').removeClass("future");
    $('#hour-2').addClass("present"); 
    $('#hour-2').removeClass("past");
   
  }
  }

function timeCheck03 () {



  var presentTime = dayjs().hour();
  console.log ("Present Time" + presentTime);

  
  let calTime = document.querySelector('.t3');
  console.log (calTime.innerText);
  
  if ( parseFloat(calTime.id) < presentTime) {
    $('#hour-3').removeClass("future");
    $('#hour-3').addClass("past"); 
    $('#hour-3').removeClass("present");
    
  } else if ( parseFloat(calTime.id) > presentTime) {
    $('#hour-3').removeClass("present");
    $('#hour-3').addClass("future"); 
    $('#hour-3').removeClass("past");
  } else {
    $('#hour-3').removeClass("future");
    $('#hour-3').addClass("present"); 
    $('#hour-3').removeClass("past");
   
  }
  }
function timeCheck04 () {



  var presentTime = dayjs().hour();
  console.log ("Present Time" + presentTime);

  
  let calTime = document.querySelector('.t4');
  console.log (calTime.innerText);
  
  if ( parseFloat(calTime.id) < presentTime) {
    $('#hour-4').removeClass("future");
    $('#hour-4').addClass("past"); 
    $('#hour-4').removeClass("present");
    
  } else if ( parseFloat(calTime.id) > presentTime) {
    $('#hour-4').removeClass("present");
    $('#hour-4').addClass("future"); 
    $('#hour-4').removeClass("past");
  } else {
    $('#hour-4').removeClass("future");
    $('#hour-4').addClass("present"); 
    $('#hour-4').removeClass("past");
   
  }
  }
function timeCheck05 () {



  var presentTime = dayjs().hour();
  console.log ("Present Time" + presentTime);

  
  let calTime = document.querySelector('.t5');
  console.log (calTime.innerText);
  
  if ( parseFloat(calTime.id) < presentTime) {
    $('#hour-5').removeClass("future");
    $('#hour-5').addClass("past"); 
    $('#hour-5').removeClass("present");
    
  } else if ( parseFloat(calTime.id) > presentTime) {
    $('#hour-5').removeClass("present");
    $('#hour-5').addClass("future"); 
    $('#hour-5').removeClass("past");
  } else {
    $('#hour-5').removeClass("future");
    $('#hour-5').addClass("present"); 
    $('#hour-5').removeClass("past");
   
  }
  }



timeCheck9();
timeCheck10();
timeCheck11();
timeCheck12();
timeCheck01();
timeCheck02();
timeCheck03();
timeCheck04();
timeCheck05();
// saveBtn.addEventListener('click', saveEntry);
// const test = dayjs().isAfter('2011-01-01', 'month')
// console.log(test)
//parseFloat will be needed

// <!-- Use class for "past", "present", and "future" to apply styles to the
//         time-block divs accordingly. The javascript will need to do this by
//         adding/removing these classes on each div by comparing the hour in the
//         id to the current hour. The html provided below is meant to be an example
//         demonstrating how the css provided can be leveraged to create the
//         desired layout and colors. The html below should be removed or updated
//         in the finished product. Remember to delete this comment once the
//         code is implemented.
//         -->

//       <!-- Example of a past time block. The "past" class adds a gray background color. -->