// Show mouse coordinates only if user clicks inside the Div box
function showClickCoords(event) {
    var x = event.clientX; // Get horizontal coordinate
    var y = event.clientY; // Get vertical coordinate
    var coordinates = "X: " + x + ", Y: " + y;
    document.getElementById("click-coordinates").innerHTML = coordinates;
}

// Show mouse coordinates if it is inside the Div box
function showMoveCoords(event) {
    var coordinates = "X: " + event.clientX + ", Y: " + event.clientY;
    document.getElementById("move-coordinates").innerHTML = coordinates;
}

// Related to showMoveCoords(event) - will clear out coordinates after user leaves
function clearCoord() {
    document.getElementById("move-coordinates").innerHTML = "";
}

// Display position at all times
onmousemove = function (event) {
    var coordinates = "X: " + event.clientX + ", Y: " + event.clientY;
    const label = document.getElementById("global-coordinates").innerHTML;
    document.getElementById("global-coordinates").innerHTML = coordinates;
}

// Highlight Div box in red if mouse is inside
function showBooleanIndicator(event) {
    const responseYes = "Yes";
    const responseNo = "No";
    var x = event.clientX; // Get horizontal coordinate
    var y = event.clientY; // Get vertical coordinate
    
    // Establish position of div box
    var box = document.getElementById("detection-boolean");
    var boxX = box.getBoundingClientRect().x;
    var boxY = box.getBoundingClientRect().y;
    var boxWidth = box.getBoundingClientRect().width;
    var boxHeight = box.getBoundingClientRect().height;

    // Determine if coordinates are inside div box
    if (boxX <= x <= boxX + boxWidth && boxY <= y <= boxY + boxHeight) {
        
        // Update UI to mouse is inside div box
        box.style.backgroundColor = "red";
    }
}

// related to showBooleanIndicator(event) -- will clear when user leaves
function clearBoxStyle() {
    var box = document.getElementById("detection-boolean");
    box.style.backgroundColor = "transparent";
}