var doc = app.activeDocument;

var sizeSets = [
  20,
  29,
  40,
  48,
  55,
  58,
  60,
  76,
  80,
  87,
  88,
  100,
  120,
  152,
  167,
  172,
  180,
  182,
  196,
  216,
  1024,
];

var FILE_PREFIX = "icon";

// retrieve dest dir
var folder = Folder.selectDialog("Please select icon image destination directory");
var destDir = folder.absoluteURI;

for (var index = 0; index < sizeSets.length; index++) {
  var size = sizeSets[index];

  // calc scales
  var width = doc.width;
  var scale = size * 100 / width

  // create file name
  var fileName = FILE_PREFIX + size + ".png";

  // create options
  var exportOptions = new ExportOptionsPNG24();
  var type = ExportType.PNG24;
  var fileSpec = new File(destDir + "/" + fileName);
  exportOptions.antiAliasing = true;
  exportOptions.transparency = false;
  exportOptions.saveAsHTML = false;
  exportOptions.artBoardClipping = true;
  exportOptions.horizontalScale = scale;
  exportOptions.verticalScale = scale;

  // export
  app.activeDocument.exportFile(fileSpec, type, exportOptions);
}
