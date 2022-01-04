// This function pulls needed values and validates a correct pricipal was entered
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    if (parceInt(principal) <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    };
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var total = parceInt(principal) + parceInt(interest)
    document.getElementById("result2").innerHTML= "If you deposit " + principal + ",<br>"  
        + "at an interest rate of " + rate + "%.<br>"
        + "You will recieve an amount of " + total + ",<br>"
        + "in the year " + year;
    document.getElementById("result").innerText= interest   
}

// updates the interest rate span upon change
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}