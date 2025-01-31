
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thank you for reaching out, " + name + "! I'll get back to you soon.");
        // Here, you can also send this data to a server for processing, but for now, we're just alerting it.
        document.getElementById("contact-form").reset();  // Reset form fields
    }
});
