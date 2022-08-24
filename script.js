function compute() // the compute function is an implementation of the logic we use to process the user input
{
    var principal = document.getElementById("principal").value; // we interpret the user input by assigning a variable to the value we derived from the element id
    if (principal <= 0) // conditional to verify that the principal is positive and non-zero
    {
        alert("Enter a positive number"); // alert for when the principal is negative or zero
        principal.focus(); // user is prompted from the alert and is sent back to the principal entry field

    }
    var rate = document.getElementById("rate").value; // similar process as above but for new variables / values
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100; // determines the amount of interest earned
    var year = new Date().getFullYear()+parseInt(years); // adds the date values of years together for output

    function updateRate() // used for updatying the slider on the html document
    {
        var rateval = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText=rateval;
    }
    document.getElementById("result").innerHTML="\<br\>\<br\>If you deposit "+principal+",\<br\>at an interest rate of "+rate+"% \<br\> You will receive an amount of "+interest+", \<br\> in the year "+year+"\<br\>"
    // final output for the user
}

        