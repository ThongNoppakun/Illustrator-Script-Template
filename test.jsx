// Check if Adobe Illustrator is running
if (app && app.name === "Adobe Illustrator") {
    var doc = app.activeDocument;
    var selection = doc.selection;

    // Check if an object is selected
    if (selection.length > 0) {
        var selectedObject = selection[0]; // Assuming you are working with the first selected object

        // Display object's size
        alert("Width: " + selectedObject.width + " pt\nHeight: " + selectedObject.height + " pt");

        // Prompt for new size and color
        var newWidth = parseFloat(prompt("Enter new width (pt):", selectedObject.width));
        var newHeight = parseFloat(prompt("Enter new height (pt):", selectedObject.height));
        var newColor = prompt("Enter new color (e.g., 'red', '#FF0000', 'CMYK 100, 0, 0, 0'):");

        // Update object's size
        selectedObject.width = newWidth;
        selectedObject.height = newHeight;

        // Update object's color
        if (newColor) {
            try {
                selectedObject.fillColor = newColor;
            } catch (e) {
                alert("Invalid color format: " + newColor);
            }
        }
    } else {
        alert("Please select an object in Illustrator.");
    }
} else {
    alert("Adobe Illustrator is not running.");
}
