var happyBtn= document.querySelector('.happy');
var sillyBtn= document.querySelector('.silly');
var cryingBtn= document.querySelector('.crying');
var messageSlot= document.querySelector('.message');

var happyResponses= ['You go!', 'Your smile just cheered me up!', 'YAY!'];

var sillyResponses= ['Interesting response', 'Sounds ... good?', 'Me too.'];

var cryingResponses= ['Do you want to talk?', 'Keep your head up', 'We can cry together!', 'What can I do?'];


happyBtn.addEventListener('click', generateResponse);
sillyBtn.addEventListener('click', generateResponse);
cryingBtn.addEventListener('click', generateResponse);

function generateResponse(event){
  if (event.target === happyBtn){
    setMessageSlot(happyResponses);
  } else if (event.target=== sillyBtn){
    setMessageSlot(sillyResponses);
  } else if (event.target=== cryingBtn){
    setMessageSlot(cryingResponses);
  }
}

function setMessageSlot(responses){
  var index= Math.floor(Math.random() * responses.length);
  messageSlot.innerText= responses[index];
}
