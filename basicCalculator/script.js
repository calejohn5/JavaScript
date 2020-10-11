function calculate() {
    const z = Number(document.getElementById("numOne").value);
    const x = Number(document.getElementById("numTwo").value);
    var total = 0;

    if (document.getElementById("add").checked){
        total = z + x;
    }
    else if (document.getElementById("subtract").checked){
        total = z - x;
    }
    else if (document.getElementById("multiply").checked){
        total = z * x;
    }
    else {
        total = z / x;
    }
    document.getElementById("h2").innerHTML = "Your answer is =" + String(total);
}




