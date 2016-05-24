//this function creates the html
function doGet() {
  return HtmlService
        .createHtmlOutputFromFile('Tutor Schedule')
        .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}


//this function runs when the submit button is pressed
function tutorSchedule(form) {
  //extracts the Student name from text box
  var nameBox = form.studentName;

  //opens spreadsheet and extract values
  var sheet = SpreadsheetApp.openById('1xoqBJFsMB8vl6luNXQoQVOuJtwWUFksFxPlIYoJzlAA');
  var data = sheet.getActiveSheet().getDataRange().getValues();
  
  
  //loops through the data
  for (var i = 0; i < data.length; i++) {
        
        //defines current line
      var curLine = data[i];
        
        //defines name column
        var name = curLine[0];
  
        //declaring variables
        var tutor1;
        var tutor2;
        var tutorName1;
        var tutorName2;
        var time1;
        var time2;
        var day2; 
        var day1;
        var room1;
        var room2;
        var schedule;  
        
        
        //searches for student's name in the name column
        var n = nameBox.search(name);
        var nn = name.search(nameBox);
        Logger.log(nn);      
 
       //if name and studentName are the same than n will equal 1, if not it will equal -1
       if(n > 0){
   
       //spells out days of the week.      
       function spellDay(day){
          switch (day) {
          
          case "M":
              day = " on Monday";
              break;
          case "T":
               day  = " on Tuesday";
              break;
          case "W":
               day = " on Wednesday";
              break;
          case "R":
               day  = " on Thursday";
              break;
                case "MW":
                     day = " on Monday and Wednesday";
                     break;
                case "TR": 
                     day = " on Tuesday and Thursday";
                     break;
      
      }
         return day;   
      }
     
     
       //function extracts time  
       function extractTime(time){
          var hour = time.getHours();
          hour = hour - 3;
          var minute = time.getMinutes();
          if(minute === 0){
               minute = minute.toString();
               minute = minute.concat("0pm");
            }else{
             minute = minute.toString();
             minute = minute.concat("am");
            }
           
           time = hour.toString().concat(":").concat(minute);

           var at = " at "
           time = at.concat(time);
                    
           return time;
        }
       
       //compiling tutor1
       if(curLine[11] === "-" ){
          tutor1 = "Tutor 1 is not assigned.";
       }else if(curLine[3] === "NS"){
          tutor1 = "Must see Ken Hyde by Thursday of Week 2 to schedule tutors.";       
       }else{
         tutorName1 = curLine[11];
         time1 = extractTime(curLine[5]);
         day1 = spellDay(curLine[4]);   
         var inRoom = " in ";
         room1 = inRoom.concat(curLine[9]);
         tutor1 =  [ tutorName1, time1, day1, room1];
         tutor1 = tutor1.toString();
         var str1 = "Tutor 1 is ";
         tutor1 = str1.concat(tutor1);
         tutor1 = tutor1.replace (/,/g, "");
         };



       //compiling tutor2
       if(curLine[12] === "-"){
          tutor2 = "Tutor 2 is not assigned.";
           }else if(curLine[3] === "NS"){
          tutor2 = " "; 
       }else{
         tutorName2 = curLine[12];
         time2 = extractTime(curLine[8]);
         day2 = spellDay(curLine[7]);   
         var inRoom = " in ";
         room2 = inRoom.concat(curLine[10]);
         tutor2 =  [ tutorName2, time2, day2, room2];  
         tutor2.toString();
         var str2 = "Tutor 2 is ";
         tutor2 = str2.concat(tutor2);
         tutor2 = tutor2.replace (/,/g, "");
        };
     
       

      
    
       schedule = tutor1.concat("<br>"+ tutor2);
               
       //sends the schedule back to the page
      return schedule;

       }
 
    }

}




