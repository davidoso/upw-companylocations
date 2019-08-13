var SPREADSHEET_ID = '1xsXXR7Zgf5bHvRihoAxjkhtz-AUIj2BEQUD9kolD1CY';
var SHEET_NAME = 'clients';
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