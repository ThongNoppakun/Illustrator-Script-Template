// Check if Adobe Illustrator is running
if (app && app.name === "Adobe Illustrator") {
    var doc = app.activeDocument;
    var selection = doc.selection;

    // Check if an object is selected
    if (selection.length > 0) {
        var selectedObject = selection[0]; // Assuming you are working with the first selected object

        // Prompt for units (cm or mm)
        var unitChoice = prompt("Choose units (cm or mm):");
        if (unitChoice === "cm") {
            var unitMultiplier = 2.54; // 1 inch = 2.54 cm
            var unitLabel = "cm";
        } else if (unitChoice === "mm") {
            var unitMultiplier = 25.4; // 1 inch = 25.4 mm
            var unitLabel = "mm";
        } else {
            alert("Invalid unit choice. Please choose 'cm' or 'mm'.");
            return;
        }

        // Prompt for line thickness and color
        var lineThickness = parseFloat(prompt("Enter line thickness (points):"));
        var lineColor = prompt("Enter line color (e.g., 'red', '#FF0000', 'CMYK 100, 0, 0, 0'):");

        // Get object dimensions
        var width = selectedObject.width / unitMultiplier;
        var height = selectedObject.height / unitMultiplier;

        // Create measurement lines
        var line1 = doc.pathItems.add();
        line1.setEntirePath([[0, 0], [width, 0]]);
        line1.strokeWidth = lineThickness;
        line1.strokeColor = lineColor;

        var line2 = doc.pathItems.add();
        line2.setEntirePath([[0, 0], [0, height]]);
        line2.strokeWidth = lineThickness;
        line2.strokeColor = lineColor;

        // Create size statement
        var sizeStatement = doc.textFrames.add();
        sizeStatement.textRange.contents = "Width: " + width.toFixed(2) + " " + unitLabel + "\nHeight: " + height.toFixed(2) + " " + unitLabel;
        sizeStatement.left = 10;
        sizeStatement.top = 10;
    } else {
        alert("Please select an object in Illustrator.");
    }
} else {
    alert("Adobe Illustrator is not running.");
}
