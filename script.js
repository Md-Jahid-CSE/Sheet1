document.addEventListener("DOMContentLoaded", () => {
    // Load saved data from localStorage on page load
    const savedData = JSON.parse(localStorage.getItem("submittedData")) || [];
    savedData.forEach(data => addListItem(data.name, data.email));
});

document.getElementById("data-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Clear the form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";

    // Add the data to localStorage
    const data = { name, email };
    const submittedData = JSON.parse(localStorage.getItem("submittedData")) || [];
    submittedData.push(data);
    localStorage.setItem("submittedData", JSON.stringify(submittedData));

    // Add the new item to the list display
    addListItem(name, email);
});

function addListItem(name, email) {
    // Create a new list item
    const listItem = document.createElement("div");
    listItem.classList.add("list-item");
    listItem.textContent = `Name: ${name}, Email: ${email}`;

    // Add the new item to the data list
    document.getElementById("data-list").appendChild(listItem);
}
