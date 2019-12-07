var happyBtn= document.querySelector('.happy');
var sillyBtn= document.querySelector('.silly');
var cryingBtn= document.querySelector('.crying');
var messageSlot= document.querySelector('.message');
var lastBtnClicked
var lastIndex

var happyResponses= ['You go!', 'Your smile just cheered me up!', 'YAY!'];

var sillyResponses= ['Interesting response', 'Sounds ... good?', 'Me too.'];

var cryingResponses= ['Do you want to talk?', 'Keep your head up', 'We can cry together!', 'What can I do?'];


happyBtn.addEventListener('click', generateResponse);
sillyBtn.addEventListener('click', generateResponse);
cryingBtn.addEventListener('click', generateResponse);

function generateResponse(event){
  if (event.target === happyBtn){
    lastBtnClicked = happyBtn;
    setMessageSlot(happyResponses, event.target);
  } else if (event.target=== sillyBtn){
    lastBtnClicked = sillyBtn;
    setMessageSlot(sillyResponses, event.target);
  } else if (event.target=== cryingBtn){
    lastBtnClicked = cryingBtn;
    setMessageSlot(cryingResponses, event.target);
  }
}

function setMessageSlot(responses, btnClicked){
  var index = generateIndex(responses);
  while (lastIndex===index && lastBtnClicked=== btnClicked){
    index = generateIndex(responses);
  }
  lastIndex= index;
  messageSlot.innerText= responses[index];
}

function generateIndex(responses){
  return Math.floor(Math.random() * responses.length);
}
