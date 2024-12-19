// Function to change the status text
function changeStatus(status) {
    document.getElementById("status-text").innerText = status;
    document.getElementById("custom-status-input").style.display = 'none'; // Hide custom status input
}

// Function to show the custom status input field
function showCustomStatusInput() {
    document.getElementById("custom-status-input").style.display = 'block';
}

// Function to change the emoji in the custom status
function changeEmoji() {
    // You could implement a basic emoji picker or just change the emoji directly
    const emojis = ['🙂', '😊', '😎', '😇', '😁'];
    const currentEmoji = document.getElementById('emoji');
    let currentIndex = emojis.indexOf(currentEmoji.innerText);
    let nextIndex = (currentIndex + 1) % emojis.length;
    currentEmoji.innerText = emojis[nextIndex];
}

// Update the status to custom status input text
document.getElementById("custom-status").addEventListener("input", function() {
    const customStatusText = document.getElementById("custom-status").value;
    document.getElementById("status-text").innerText = customStatusText || "Offline";
});
