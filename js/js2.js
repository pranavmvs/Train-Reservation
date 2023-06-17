function setitem(){
    let a=document.getElementById("from_station").value;
    let b=document.getElementById("to_station").value;
    var placelink="https://www.makemytrip.com/railways/listing/?classCode=&className=All%20Classes&destCity="+b+"&destStn=ERS&srcCity="+a+"&srcStn=HX"
    // "https://www.makemytrip.com"+"/"+"railways"+"/"+a+"-"+b+"-"+"train"+"-"+"tickets"+"."+"html"
    window.open(placelink)
}
        function validate() {
            email = document.getElementById('email').value;
            pswd = document.getElementById('pswd').value;
            validEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

            if (email == '') {
                alert('Please enter your email.');
                return false;
            } else if (validEmail.test(email) == false) {
                alert('Please enter your email correctly');
                return false;
            } else if (pswd == '') {
                alert('Please enter password.');
                return false;
            } else
                return true;
        }