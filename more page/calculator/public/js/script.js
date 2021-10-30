function calculator () {
    var no1 = parseFloat(document.getElementById("num1").value);
    var no2 = parseFloat(document.getElementById("num2").value);
    var oper = document.getElementById("operators").value;

    if (oper === "+") {
        document.getElementById("result").value = no1 + no2;
    }
    if (oper === "-") {
        document.getElementById("result").value = no1 - no2;
    }
    if (oper === "*") {
        document.getElementById("result").value = no1 * no2;
    }
    if (oper === "/") {
        document.getElementById("result").value = no1 / no2;
    }
}