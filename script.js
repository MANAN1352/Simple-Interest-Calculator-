function compute()
{
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    result = document.getElementById("result");
    result.innerHTML="the Resut is:" +(principal * years * rate / 100);
}
