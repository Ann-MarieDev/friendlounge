//THIS IS ALL USED AS A PLACEHOLDER TO SIMULATE WEBSITE FUNCTIONALITY

let currentStatus = 'Offline'; // Default status

// Function to change status (sets custom or pre-defined statuses)
function changeStatus(status) {
    if (status === 'Custom') {
        showCustomStatusInput();
    } else {
        currentStatus = status;
        document.getElementById('status-text').innerText = status;
        document.getElementById('custom-status-input').style.display = 'none'; // Hide custom status input box when not using custom status
    }
}

// Function to show the custom status input when the "Custom" status option is clicked
function showCustomStatusInput() {
    document.getElementById('custom-status-input').style.display = 'block';
    document.getElementById('status-text').innerText = 'Custom';
}

// Function to update the custom status when user types in the input box
function updateCustomStatus() {
    const customStatusText = document.getElementById('custom-status').value;
    document.getElementById('status-text').innerText = customStatusText || 'Offline'; // Default to 'Offline' if no custom status is typed
}

// Function to close the custom status input when user clicks outside the input
function closeCustomStatusInput() {
    document.getElementById('custom-status-input').style.display = 'none'; // Close the input box
}

// This function sets the width of the left section for the status to be a bit wider.
function setStatusLeftWidth() {
    const statusLeft = document.querySelector('.status-left');
    statusLeft.style.width = '50%'; // Slightly wider than before
}

// Run this function to update the width after the page loads
window.onload = function() {
    setStatusLeftWidth();
    // Set profile image size on load
    const profileImg = document.querySelector('.profile-img');
    profileImg.style.width = '150px';
    profileImg.style.height = '150px';
};
