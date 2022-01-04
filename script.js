function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result2").innerHTML= "If you deposit " + principal + ",\n"  
        + "at an interest rate of " + rate + "%.\n"
        + "You will recieve an amount of " + (interest + principal) + ",\n"
        + "in the year " + year;
    document.getElementById("result").innerText= interest   
}
        
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}