function viewdate()
{
  var x = document.getElementById("dob").value;
  var y = document.getElementById("name").value;
  document.getElementById("demodate").innerHTML = x;  
  document.getElementById("demoname").innerHTML = y;  
}

function cleardata()
{
  document.getElementById("demodate").innerHTML = "";  
  document.getElementById("demoname").innerHTML = "";  
}

function clickme()
{
  document.write("Click me!!!")
}