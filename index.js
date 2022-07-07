const myMessage = document.querySelector('.myMessage');
console.log(myMessage);

setTimeout(function(){
    myMessage.innerText = 'Choose a Fruit and type in the DOM!'
}, 3000)

const theMessageButton = document.querySelector('.theMessageButton');
theMessageButton.addEventListener('click', function() {
    alert("Confirm The Choosen Fruit By Cloking OK!")
});

theMessageButton.addEventListener('click', function() {
    myMessage.innerText = 'Button pressed'
});

const inputBox = document.querySelector('.theInputValue');

theMessageButton.addEventListener('click', function() {
    myMessage.innerText = inputBox.value
});

theMessageButton.addEventListener('click', function() {
    if (inputBox.value.trim().length > 0) {
       myMessage.innerText = inputBox.value;
    }
});

myMessage.addEventListener('click', function() {
    myMessage.classList.toggle('darkmode')
})

///
const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];
for(let i=0;i<fruits.length;i++){
    const fruit = fruits[i];
    const li = document.createElement('li');
    li.innerText = fruit;
 }

 //
