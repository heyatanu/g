document.getElementById("numberinput").focus();

function myFunction() {
    var val=document.getElementById("numberinput").value;
    val=val.trim();
    if(val==""){
        alert("Give us the number");
    }
    else{
        let t="https://api.whatsapp.com/send?phone="+val;
        location.replace(t);
    }
  }