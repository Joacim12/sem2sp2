#Javascript
##day4 -class topics
- create a form with all the form elements.
- check content of form element;
- create a js array with objects to hold information from the form.
- show table with content from the array.
- Add data from form to array and display in table
- show how to add and remove a form field from the page based on button click.
- see the result [link here!](http://45.55.207.235:8080/SP2/)

##day4 -js and webforms exercise
- array of objects (cars)
- form to add new car
- create table to see all cars in collection
- individual button to remove cars
 
##SP exercise
- array of student objects
- categorize students red, yellow, green
- contact information (phone, email)
- form to add new student
- create group by ticking students and adding group name
- button by each name to remove a student.
- button to open edit form to edit student info
- sort student list by group name
- group request for tutor help
- new page with:
- array of taught topics (name, date, teacher initials)
- button to add comments to a topic (open up a new textarea and submit button)
- add logo to the navbar

hint:
You will need javascript closure to make the delete button:
```javascript
    var populateTable = function(){
        tb.innerHTML = "";
        for (var i = 0; i < students.length; i++) {
            var row = tb.insertRow(i);
            row.insertCell(0).innerHTML = students[i].name;
            row.insertCell(1).innerHTML = students[i].email;
            row.insertCell(2).innerHTML = students[i].phone;
            var cell = row.insertCell(3);
            var btn = document.createElement("button");
            btn.innerHTML = "Delete";
            cell.appendChild(btn);
            btn.onclick = (function(){
                var inc = i;
                return function(){
                     students.splice(inc, 1);
                    console.log("no: "+inc);
                    populateTable();
                };
            })();
        }   
    };
```
