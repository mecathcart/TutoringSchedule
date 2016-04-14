<!DOCTYPE html>
<html>
  <script type="text/javascript" charset="utf-8" src="./papaparse.js"></script>
<body>
<iframe id="frmFile" src="masterSchedule.txt"  style="display: none;"></iframe>

<p>Tutoring Schedule</p>

 Family Name, First Name: <input type = "text" id = "studentName" value = "student name" ></text><br> <p>
<input type = "button" class="button" onClick = "tutorSchedule()" value = "Submit"></input> <p>


<p id="demo"></p>

<script>

var clearDiv = function(){
	if(document.getElementsByClassName("schedule")){
		var elements = document.getElementsByClassName("schedule");
		while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
	};
};

/*this function takes the input of the student's name and returns the student's schedule */
var tutorSchedule = function() {
	
	clearDiv();

 	var oFrame = document.getElementById("frmFile");
    var strRawContents = oFrame.contentWindow.document.body.childNodes[0].innerHTML;
    while (strRawContents.indexOf("\r") >= 0)
        strRawContents = strRawContents.replace("\r", "");
    var arrLines = strRawContents.split("\n");
    for (var i = 0; i < arrLines.length; i++) {
    	var studentName = document.getElementById("studentName").value;
    	var curLine = arrLines[i];

    	var n = curLine.search(studentName);

  		if(n > 0){
  			//make curLine look pretty
    		curLine = curLine.split('"').join('');
    		var studentSchedule = curLine.split(",");

			switch (studentSchedule[5]) {
			    
			    case "M":
			        studentSchedule[5] = "Monday";
			        break;
			    case "T":
			         studentSchedule[5]  = "Tuesday";
			        break;
			    case "W":
			         studentSchedule[5]  = "Wednesday";
			        break;
			    case "R":
			         studentSchedule[5]  = "Thursday";
			        break;
			    case "F":
			         studentSchedule[5] = "Friday";
			        break;
			
			}
			//prints out results
  			var div = document.createElement('div');
  			div.className = "schedule";
  			document.body.appendChild(div);
  			div.innerHTML = studentSchedule[0] +","+ studentSchedule[1] +":" + 
  			"<br>"+ "Tutor 1: "+studentSchedule[12] + " "+studentSchedule[5] +" "+studentSchedule[6] +" "+studentSchedule[10]+ 
  			"<br>"+ "Tutor 2: "+studentSchedule[13] + " "+studentSchedule[8] +" "+studentSchedule[9] +" "+studentSchedule[11];

  		}
       
    }

}

</script>

</body>
</html>