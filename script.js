let noButtonClicks = 0; // Variable to track the number of clicks on the "No" button

// Function to handle click on "No" button
function handleNoButtonClick() {
  noButtonClicks++; // Increment the click count

  if (noButtonClicks >= 7) {
    // Check if the click count is 7 or more
    // Change the background image to "fresh.jpg"
    document.querySelector(".image").src = "images/fresh.jpg";
    // Update text content
    document.getElementById("question").textContent = "Now What";
    // Remove the "No" button
    document.getElementById("no-button").remove();
    // Make the "Yes" button huge
    document.getElementById("yesButton").style.fontSize = "10rem";
  } else if (noButtonClicks >= 5) {
    // Check if the click count is 5 or more
    // Change the image source to "mad.jpg"
    document.querySelector(".image").src = "images/mad.jpg";
    // Change text content after 5th click
    document.getElementById("question").textContent =
      "Why are you still clicking no :<";
  } else {
    // Change image source to "gun.gif"
    document.querySelector(".image").src = "images/gun.gif";
  }

  const noButton = document.getElementById("no-button");
  const container = document.querySelector(".container");
  const maxWidth = container.clientWidth - noButton.offsetWidth; // Use clientWidth of the container
  const maxHeight = container.clientHeight - noButton.offsetHeight; // Use clientHeight of the container

  // Set button position to absolute
  noButton.style.position = "absolute";

  // Generate random coordinates within the visible container
  const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
  const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

  // Apply new coordinates to the button
  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";

  // Update text content and hide name message
  if (noButtonClicks < 5) {
    const question = document.getElementById("question");
    question.textContent = "The no button is just for visuals";
    question.style.display = "block";
    question.style.fontSize = "24px"; // Set font size to match the message
    question.style.fontWeight = "bold"; // Set font weight to bold
    question.style.fontFamily = "'Lobster', cursive"; // Set font family to Lobster
  }
  document.getElementById("name").style.display = "none";

  // Optional: You can also add a timeout to reset the position after a few seconds
}

// Attach click event listener to "No" button
document
  .getElementById("no-button")
  .addEventListener("click", handleNoButtonClick);

function showMessage(response) {
  if (response === "Yes") {
    // Change background image
    document.body.style.backgroundImage = "url('images/toothless.gif')";
    document.querySelector(".image").src = "images/dance.gif";
    document.getElementById("yesButton").remove();
    // Remove the "No" button
    document.getElementById("question").textContent = "LESGOOO see you on the 14th babygirl😘😘";
    document.getElementById("no-button").remove();
    // Remove the "Yes" button

    // Update text content, show message, and change image source to "dance.gif"
    const yesMessage = document.getElementById("question");
 
    document.querySelector(".image").src = "images/dance.gif";
  }
}
