
function myFunction() {
    let pnumber = document.getElementById("pnumber").value;
    let ccode = document.getElementById("ccode").value;
    pnumber=pnumber.toLowerCase();
    pnumber=pnumber.trim();
    pnumber.replace(/\s+/, "");
    ccode=ccode.toLowerCase();
    ccode=ccode.trim();
    ccode.replace(/\s+/, "");
    let leng=pnumber.length;
    let lengcoce=ccode.length;
    if(leng==0 || leng!=10 || lengcoce==0){
        alert("Wrong Input")
    }
    else{
        let rel="https://wa.me/"+ccode+pnumber;
        location.replace(rel)
    }

  console.log(pnumber.length);
}