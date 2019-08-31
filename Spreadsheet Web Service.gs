var SPREADSHEET_ID = '1ttOc7M3xQ9iTD_frISXF2NZCaIWHR7_kdQEtdx5mi7o';
var SHEET_NAME = 'locations';
function doGet(request) {
  var callback = request.parameters.jsonp;
  var range = SpreadsheetApp
      .openById(SPREADSHEET_ID)
      .getSheetByName(SHEET_NAME)
      .getDataRange();
  var json = callback + '(' + Utilities.jsonStringify(range.getValues()) + ')';

  return ContentService
      .createTextOutput(json)
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
}