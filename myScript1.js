function showAlert() {
    alert("Button clicked!");
}

const button = document.getElementById("myButton"); //

if (button) {
    button.addEventListener("click", showAlert); //
} else {
    console.error("Button with ID 'myButton' not found.");
}
