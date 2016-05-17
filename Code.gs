//this function creates the html
function doGet() {
  return HtmlService.createHtmlOutputFromFile('Tutor Schedule')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}


function tutorSchedule(form) {

  var nameBox = form.studentName;
  Logger.log("Student's name is= " +nameBox);




  
  var sheet = SpreadsheetApp.openById('1xoqBJFsMB8vl6luNXQoQVOuJtwWUFksFxPlIYoJzlAA');
  sheet = sheet.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  
  
  
  
  
  
  for (var i = 0; i < data.length; i++) {
  
    	var curLine = data[i];
        var name = curLine[0];

       var n = nameBox.search(name);
 //      Logger.log("n is"+ n);
 
       //you need to stringify the schedule
      if(n > 0){
        var schedule = curLine.toString();

        Logger.log(schedule);
        return schedule;

       }
       
        
  
    }
 

}




