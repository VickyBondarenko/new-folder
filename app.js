function meet() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  let like = prompt("Do you like French Bulldog?");
  like = like.toLowerCase();
  like = like.trim();

  if (like === "yes") {
    alert(
      "Thank you, " +
        name +
        "! We'll be in touch by email, and you can meet your puppy🐶! "
    );
  } else {
    alert(name + ", how sad that you don't like these cuties 😢");
  }
}

let meetButton = document.querySelector(".meet-button");
meetButton.addEventListener("click", meet);
