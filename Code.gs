//this function creates the html
function doGet() {
  return HtmlService
        .createHtmlOutputFromFile('Tutor Schedule')
        .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}


function tutorSchedule(form) {
  //extracts the Student name from text box
  var nameBox = form.studentName;

  //opens spreadsheet
  var sheet = SpreadsheetApp.openById('1xoqBJFsMB8vl6luNXQoQVOuJtwWUFksFxPlIYoJzlAA');
  sheet = sheet.getActiveSheet();
  
  //extracts values
  var data = sheet.getDataRange().getValues();
  
  //loops through the data
  for (var i = 0; i < data.length; i++) {
        
        //defines current line
      var curLine = data[i];
        
        //defines name column
        var name = curLine[0];

        //searches for student's name in the name column
        var n = nameBox.search(name);
 
       //if name and studentName are the same than n will equal 1, if not it will equal -1
       if(n > 0){
    //   Logger.log("curLine 4 is " +curLine[4]);
    
   
      //spells out days of the week.
       switch (curLine[4]) {
          
          case "M":
              curLine[4] = " on Monday";
              break;
          case "T":
               curLine[4]  = " on Tuesday";
              break;
          case "W":
               curLine[4]  = " on Wednesday";
              break;
          case "R":
               curLine[4]  = " on Thursday";
              break;
          case "F":
               curLine[4] = " on Friday";
              break;
      
      }
            
            switch (curLine[7]) {
          
          case "M":
              curLine[7] = " on Monday";
              break;
          case "T":
               curLine[7]  = " on Tuesday";
              break;
          case "W":
               curLine[7]  = " on Wednesday";
              break;
          case "R":
               curLine[7]  = " on Thursday";
              break;
          case "F":
               curLine[7] = " on Friday";
              break;
      
      }
            
        
        

          //extracts the time
           var hour1 = curLine[5].getHours();
           hour1 = hour1 - 3;
           var minute1 = curLine[5].getMinutes();
            if(minute1 === 0){
               minute1 = minute1.toString();
               minute1 = minute1.concat("0pm");
            }else{
             minute1 = minute1.toString();
             minute1 = minute1.concat("am");
            }
           
            hour1 = hour1.toString();
            hour1 = hour1.concat(":");

            var time1 = hour1.concat(minute1);
            var at = " at "
            time1 = at.concat(time1);
                    
           var hour2 = curLine[8].getHours();
           hour2 = hour2 - 3;
           var minute2 = curLine[8].getMinutes();
            if(minute2 === 0){
               minute2 = minute2.toString();
               minute2 = minute2.concat("0pm");
            }else{
             minute2 = minute2.toString();
             minute2 = minute2.concat("am");
            }
           
            hour2 = hour2.toString();
            hour2 = hour2.concat(":");

            var time2 = hour2.concat(minute2);
            var at = " at ";
            time2 = at.concat(time2);
            
            var inRoom = " in ";
            curLine[9] = inRoom.concat(curLine[9]);
            curLine[10] = inRoom.concat(curLine[10]);


            
           var tutor1 =  [ curLine[11], time1, curLine[4], curLine[9]]; 
           var tutor2 =  [ curLine[12], time2, curLine[7], curLine[10]];  
                      
            tutor1 = tutor1.toString();
            var str1 = "Tutor 1 is ";
            tutor1 = str1.concat(tutor1);
            tutor1 = tutor1.replace (/,/g, "");
            Logger.log(tutor1);

            
            
            tutor2.toString();
            var str2 = "Tutor 2 is ";
            tutor2 = str2.concat(tutor2);
            tutor2 = tutor2.replace (/,/g, "");


            var schedule = tutor1.concat("<br>"+ tutor2);
            
         
   
          //sends the schedule back to the page
          return schedule;

       }
  
    }

}




