// สร้างหน้าต่างป๊อบอัพเพื่อกำหนดค่าขนาดและหน่วยของวัตถุ
var dialog = new Window("dialog", "กำหนดขนาดและหน่วยของวัตถุ");
dialog.orientation = "column";

var widthGroup = dialog.add("group");
widthGroup.add("statictext", undefined, "ความกว้าง:");
var widthInput = widthGroup.add("edittext");
widthInput.characters = 10;
widthInput.text = "100"; // ค่าเริ่มต้น

var heightGroup = dialog.add("group");
heightGroup.add("statictext", undefined, "ความสูง:");
var heightInput = heightGroup.add("edittext");
heightInput.characters = 10;
heightInput.text = "100"; // ค่าเริ่มต้น

var unitGroup = dialog.add("group");
unitGroup.add("statictext", undefined, "หน่วย:");
var unitInput = unitGroup.add("edittext");
unitInput.characters = 10;
unitInput.text = "px"; // ค่าเริ่มต้น

var thicknessGroup = dialog.add("group");
thicknessGroup.add("statictext", undefined, "ความหนาของเส้น:");
var thicknessInput = thicknessGroup.add("edittext");
thicknessInput.characters = 10;
thicknessInput.text = "1"; // ค่าเริ่มต้น

var buttonGroup = dialog.add("group");
var okButton = buttonGroup.add("button", undefined, "ตกลง");
var cancelButton = buttonGroup.add("button", undefined, "ยกเลิก");

okButton.onClick = function() {
  var widthValue = parseFloat(widthInput.text);
  var heightValue = parseFloat(heightInput.text);
  var unitValue = unitInput.text;
  var thicknessValue = parseFloat(thicknessInput.text);

  // ส่วนนี้คุณสามารถนำค่าที่ได้มาใช้ในการปรับขนาดและความหนาของวัตถุ
  // ตัวอย่าง: app.activeDocument.selection[0].width = widthValue;
  // ตัวอย่าง: app.activeDocument.selection[0].height = heightValue;
  // ตัวอย่าง: app.activeDocument.selection[0].strokeWidth = thicknessValue;

  dialog.close();
};

cancelButton.onClick = function() {
  dialog.close();
};

dialog.show();
