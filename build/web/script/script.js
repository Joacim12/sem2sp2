// author Thomas Hartmann - tha@cphbusiness.dk created on Aug 31, 2016 
window.onload = function () {
    var children = [
        {"name": "Hans", "age": 4, "gender": "m"},
        {"name": "Helle", "age": 7, "gender": "f"},
        {"name": "Ib", "age": 5, "gender": "m"},
        {"name": "Rikke", "age": 5, "gender": "f"},
        {"name": "Hakim", "age": 6, "gender": "m"},
        {"name": "Aise", "age": 4, "gender": "f"}
    ];
    var addChild = function (name, age, gender) {
        var child = {};
        child.name = name;
        child.age = age;
        child.gender = gender;
        children.push(child);
    };
    //addChild("Grethe", 2, "f");

    //children.forEach(function(element){ console.log(element);  });

    var allergyBtn = document.getElementById("addAllergies");
    allergyBtn.onclick = function (event) {
        event.preventDefault();
        var form = document.getElementById("inputform");
        var textA = document.createElement("TEXTAREA");
        textA.setAttribute("placeholder","enter one allergy pr text field");
        textA.setAttribute("class","allergy");
        form.insertBefore(textA, form.childNodes[form.childNodes.length-2]);
        return false;
    };


    var populateTable = function () {
        var tbody = document.getElementById("list");
        var rowCountPlus = tbody.rows.length + 1;
        if (rowCountPlus > 1)
            while (--rowCountPlus)
                tbody.deleteRow(rowCountPlus - 1);
        for (var i = 0; i < children.length; i++) {
            var row = tbody.insertRow(i);
            row.insertCell(0).innerHTML = children[i].name;
            row.insertCell(1).innerHTML = children[i].age;
            row.insertCell(2).innerHTML = children[i].gender;
        }
    };
    populateTable();
    var emptyFormFields = function(form){
        var inputs = form.getElementsByTagName("input");
        for (var i = 0; i < inputs.length; i++) {
            if(inputs[i].getAttribute("type")!= "submit")
            inputs[i].value = "";
        }
    };
    var form = document.getElementById("inputform");
    form.onsubmit = function (event) {
        event.preventDefault();
        var child = {
            "name": form.elements["firstname"].value,
            "age": form.elements["age"].value,
            "gender": form.elements["age"].value
        };
        addChild(child.name, child.age, child.gender);
        populateTable();
        emptyFormFields(this);
        return false;
    };

};

