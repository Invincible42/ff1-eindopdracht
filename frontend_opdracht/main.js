function alertSuperheroName() {
    var superheroName = document.getElementById("superheroname").value;
    var description = document.getElementById("description").value;
    var superpower = document.getElementById("superpower").value;
    var weakness = document.getElementById("weakness").value;

    alert("Superhero " + superheroName + " has been registered!\nHis superpower is " + superpower + " and his weakness is " + weakness + "\nOmschrijving: " + description);
}

function consoleLogValues() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var superheroname = document.getElementById("superheroname").value;
    var planetname = document.getElementById("planetname").value;

    var male = document.getElementById("male");
    if (male.checked == true) {
        var gender = "Male";
    }
    var female = document.getElementById("female");
    if (female.checked == true) {
        var gender = "Female";
    }
    var x = document.getElementById("x");
    if (x.checked == true) {
        var gender = "X";
    }
    
    var superpower = document.getElementById("superpower").value;
    var weakness = document.getElementById("weakness").value;
    var description = document.getElementById("description").value;


    console.log("Firstname is " + firstname);
    console.log("Lastname is " + lastname);
    console.log("Superheroname is " + superheroname);
    console.log("Planetname is " + planetname);
    console.log("Gender is " + gender);
    console.log("Superpower is " + superpower);
    console.log("Weakness is " + weakness);
    console.log("Desciption is " + description);
}