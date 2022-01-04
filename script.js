// This function pulls needed values and validates a correct pricipal was entered
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    if (principal <= 0) {       // checks if principal is greater than 0
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    } else {
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);
        var total = interest + parseInt(principal)
        document.getElementById("result").innerHTML= "<div class='center'>Summary: </div><br>" 
            + "If you deposit <span class='highlight'>" + principal +  "</span>,<br>"  
            + "at an interest rate of <span class='highlight'>" + rate + "%</span>.<br>"
            + "You will recieve an amount of: <span class='highlight'>" + interest + "</span>,<br>"
            + "in the year <span class='highlight'>" + year + "</span>.<br>"
            + "Your total amount after interest: <span class='highlight'>" + total + "</span>";
    };   
}

// updates the interest rate span upon change
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}