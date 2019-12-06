var happyBtn= document.querySelector('.happy');
var sillyBtn= document.querySelector('.silly');
var cryingBtn= document.querySelector('.crying');
var messageSlot= document.querySelector('.message');

var happyResponses= ['You go!', 'Your smile just cheered me up!', 'YAY!'];

var sillyResponses= ['Interesting response', 'Sounds ... good?', 'Me too.'];

var cryingResponses= ['Do you want to talk?', 'Keep your head up', 'We can cry together!', 'What can I do?']


happyBtn.addEventListener('click', generateHappyResponse);
sillyBtn.addEventListener('click', generateSillyResponse);
cryingBtn.addEventListener('click', generateCryingResponse);

function generateHappyResponse(event){
  var index= Math.floor(Math.random() * happyResponses.length);
    messageSlot.innerText= happyResponses[index];
}

function generateSillyResponse(event){
  var index= Math.floor(Math.random() * sillyResponses.length);
    messageSlot.innerText= sillyResponses[index];
}

function generateCryingResponse(event){
  var index= Math.floor(Math.random() * cryingResponses.length);
    messageSlot.innerText= cryingResponses[index];
}
