function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
  function setitem(){
    let a=document.getElementById("from_station").value;
    let b=document.getElementById("to_station").value;
    var placelink="https://www.makemytrip.com/railways/listing/?classCode=&className=All%20Classes&destCity=&destStn="+b+"&srcCity=&srcStn="+a
    window.open(placelink)
}