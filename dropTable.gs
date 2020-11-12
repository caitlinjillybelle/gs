function onEdit(){
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  var problemsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("problems");
  var metaSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("meta");
  var hellyeahSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("hell yeah");
  var solutionsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("solutions");
  var competitionSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("competition");
  var activeCell = ss.getActiveCell();
  
  // Choice One
  // Meta Type
  if(activeCell.getColumn() == 7 && activeCell.getRow() > 1){
    if(activeCell.getValue().toString() == "problem"){
      var validationRange = problemsSheet.getRange(1, 1, 1, problemsSheet.getLastColumn());
      var validationRule = SpreadsheetApp.newDataValidation().requireValueInRange(validationRange).build();
      activeCell.offset(0, 1).setDataValidation(validationRule);
    }
    if(activeCell.getValue().toString() == "solution"){
      var validationRange = solutionsSheet.getRange(1, 1, 1, solutionsSheet.getLastColumn());
      var validationRule = SpreadsheetApp.newDataValidation().requireValueInRange(validationRange).build();
      activeCell.offset(0, 1).setDataValidation(validationRule);
    }
    if(activeCell.getValue().toString() == "hell yeah"){
      var validationRange = hellyeahSheet.getRange(1, 1, 1, hellyeahSheet.getLastColumn());
      var validationRule = SpreadsheetApp.newDataValidation().requireValueInRange(validationRange).build();
      activeCell.offset(0, 1).setDataValidation(validationRule);
    }
    if(activeCell.getValue().toString() == "competition"){
      var validationRange = competitionSheet.getRange(2, 1, 20);
      var validationRule = SpreadsheetApp.newDataValidation().requireValueInRange(validationRange).build();
      activeCell.offset(0, 1).setDataValidation(validationRule); 
    }
    if (activeCell.getValue().toString() == ""){
      activeCell.offset(0, 1).clearContent().clearDataValidations();
    }
  }
  // Choice Two
  if(activeCell.getColumn() == 8 && activeCell.getRow() > 1){
    // Hell yeah
    if(activeCell.getValue().toString() == "hell yeah comments"){
      var validationRange = hellyeahSheet.getRange(2, 1, 20);
      var validationRule = SpreadsheetApp.newDataValidation().requireValueInRange(validationRange).build();
      activeCell.offset(0, 1).setDataValidation(validationRule);
    }
    // Solution
    if(activeCell.getValue().toString() == "bi-directional"){
    }
    if(activeCell.getValue().toString() == "querying"){
    }
    if(activeCell.getValue().toString() == "playbook editing"){
    }
    // Problems
    if(activeCell.getValue().toString() == "Navigating Code" ){
      var validationRange = problemsSheet.getRange(2, 1, 20);
      var validationRule = SpreadsheetApp.newDataValidation().requireValueInRange(validationRange).build();
      activeCell.offset(0, 1).setDataValidation(validationRule);
    } 
    if(activeCell.getValue().toString() == "Sharing Knowledge" ){
      var validationRange = problemsSheet.getRange(2, 2, 20);
      var validationRule = SpreadsheetApp.newDataValidation().requireValueInRange(validationRange).build();
      activeCell.offset(0, 1).setDataValidation(validationRule);
    }     
    if(activeCell.getValue().toString() == "Tech Debt" ){
      var validationRange = problemsSheet.getRange(2, 3, 20);
      var validationRule = SpreadsheetApp.newDataValidation().requireValueInRange(validationRange).build();
      activeCell.offset(0, 1).setDataValidation(validationRule);
    } 
    if(activeCell.getValue().toString() == "Productivity" ){
      var validationRange = problemsSheet.getRange(2, 4, 20);
      var validationRule = SpreadsheetApp.newDataValidation().requireValueInRange(validationRange).build();
      activeCell.offset(0, 1).setDataValidation(validationRule);
    }
    if (activeCell.getValue().toString() == ""){
      activeCell.offset(0, 1).clearContent().clearDataValidations();
    }
  }
}
