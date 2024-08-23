let input;
let response;

function setup() {
  createCanvas(400, 400);
  background(220);
  textSize(16);
  input = createInput();
  input.position(20, height - 50);
  button = createButton('Send');
  button.position(input.x + input.width + 20, height - 50);
  button.mousePressed(chat);
  response = createElement('h2', 'Hello! How can I assist you today?');
  response.position(20, 20);
}

function draw() {
  background(220);
}

function chat() {
  let message = input.value();
  input.value(''); // Clear input field

  if (message.toLowerCase().includes('time')) {
    let now = new Date();
    let time = now.toLocaleTimeString();
    response.html(`The current time is ${time}`);
  } else if (message.toLowerCase().includes('weather')) {
    response.html('I need more information to check the weather. Please tell me the city.');
  } else if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
    response.html('Hello there! How can I help you?');
  } else if (message.toLowerCase().includes('budget')) {
    response.html('The budget of the project is...');
  } else if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
    response.html('Hello there! How can I help you?');
  }  else {
    response.html('I am still learning. I can\'t understand that yet.');
  }
  
}