

gsap.to("#nav", {
  backgroundColor: "#BBE2EC",
  duration: 0.5,
  delay: 1,
  height: "80px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    //markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});



// JavaScript function for sending messages
function sendMessage() {
  // Get the input element
  var inputElement = document.querySelector('.chat-input input');
  
  // Get the value of the input field
  var messageText = inputElement.value.trim();

  // Check if the message is not empty
  if (messageText !== '') {
      // Create a new message element
      var newMessageElement = document.createElement('article');
      newMessageElement.classList.add('msg-container', 'msg-self');
      newMessageElement.id = 'msg-' + Date.now();

      newMessageElement.innerHTML = `
          <div class="msg-box">
              <div class="flr">
                  <div class="messages">
                      <p class="msg">${messageText}</p>
                  </div>
                  <span class="timestamp"><span class="username">Name</span>&bull;<span class="posttime">Now</span></span>
              </div>
              <img class="user-img" id="user-0" src="//gravatar.com/avatar/56234674574535734573000000000001?d=retro" />
          </div>
      `;
      
      // Append the new message element to the chat window
      var chatWindow = document.querySelector('.chat-window');
      chatWindow.appendChild(newMessageElement);

      // Clear the input field after sending the message
      inputElement.value = '';
  }
}

// Attach the sendMessage function to the form submission event
var chatForm = document.querySelector('.chat-input');
chatForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  sendMessage(); // Call the sendMessage function
});



