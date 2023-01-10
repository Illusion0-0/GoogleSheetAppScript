function doGet() {
    return HtmlService.createHtmlOutputFromFile("Index");
}

function getValuesFromSheet() {
    // Get the active sheet by name
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Dropdown");
    // Get the range of cells that contain the values for the first dropdown
    var range1 = sheet.getRange("G2:G");//name of project
    // Get the values as an array
    var values1 = range1.getValues();
    var nonEmptyValues1 = values1.filter(function (value) {
        return value != '';
    });
    // Get the range of cells that contain the values for the second dropdown
    var range2 = sheet.getRange("C2:C");//Name of agency
    // Get the values as an array
    var values2 = range2.getValues();

    var nonEmptyValues2 = values2.filter(function (value) {
        return value != '';
    });

    var range3 = sheet.getRange("E2:E"); // Name of executive
    // Get the values as an array
    var values3 = range3.getValues();


    var nonEmptyValues3 = values3.filter(function (value) {
        return value != '';
    });

    var range4 = sheet.getRange("I2:I");//Job constraint
    // Get the values as an array
    var values4 = range4.getValues();


    var nonEmptyValues4 = values4.filter(function (value) {
        return value != '';
    });

    var range5 = sheet.getRange("A2:A");//Activity
    // Get the values as an array
    var values5 = range5.getValues();


    var nonEmptyValues5 = values5.filter(function (value) {
        return value != '';
    });


    var range6 = sheet.getRange("F2:F");//Associates
    // Get the values as an array
    var values6 = range6.getValues();


    var nonEmptyValues6 = values6.filter(function (value) {
        return value != '';
    });


    // Return the arrays as an object
    return {
        values1: nonEmptyValues1,
        values2: nonEmptyValues2,
        values3: nonEmptyValues3,
        values4: nonEmptyValues4,
        values5: nonEmptyValues5,
        values6: nonEmptyValues6
    };
}


function saveValuesToSheet(value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, value11, value12, value13, value14, value15, value16, value17) {
    // Get the target spreadsheet
    var spreadsheet = SpreadsheetApp.openById("_SHEET_ID_");
    // Get the first sheet in the spreadsheet
    var sheet = spreadsheet.getSheetByName("_SHEET_NAME_");
    // Get the next empty row in the sheet
    var lastRow = sheet.getLastRow() + 1;
    // Write the values to the sheet
    sheet.getRange(lastRow, 1).setValue(value1);
    sheet.getRange(lastRow, 2).setValue(value2);
    sheet.getRange(lastRow, 3).setValue(value3);
    sheet.getRange(lastRow, 4).setValue(value4);
    sheet.getRange(lastRow, 5).setValue(value5);
    sheet.getRange(lastRow, 6).setValue(value6);
    sheet.getRange(lastRow, 7).setValue(value7);
    sheet.getRange(lastRow, 8).setValue(value8);
    sheet.getRange(lastRow, 9).setValue(value9);
    sheet.getRange(lastRow, 10).setValue(value10);
    sheet.getRange(lastRow, 11).setValue(value11);
    sheet.getRange(lastRow, 12).setValue(value12);
    sheet.getRange(lastRow, 13).setValue(value13);
    sheet.getRange(lastRow, 14).setValue(value14);
    sheet.getRange(lastRow, 15).setValue(value15);
    sheet.getRange(lastRow, 16).setValue(value16);
    sheet.getRange(lastRow, 17).setValue(value17);
}

function uploadFiles(data) {
    var file = data.myFile; // myFile is the upload input field "name" attribute, change it according to yours!
    var folder = DriveApp.getFolderById('_GOOGLE_DRIVE_FOLDER_ID');
    var createFile = folder.createFile(file);
    return createFile.getUrl();
}