
var geocoder;
var map;
window.onload = function(){
document.getElementById("mySelect").addEventListener("change", check_);
document.getElementById("submit_").addEventListener("click", checkform);
document.getElementById("reset").addEventListener("click",reset_);
//document.getElementById("name").addEventListener("keyup", suggest_);
document.getElementById("adress").addEventListener("change",initialize);

};

function check_(){
	var mySelect=document.getElementById("mySelect");
	var extras=document.getElementById("extras");
	if(mySelect.value=="Credit/DebitCard"){
		extras.style.display="block";}
		else{
			extras.style.display="none";
		}
}

function checkform(){
	
	var counter=0;
var user_=document.getElementById("Username");
var name=document.getElementById("name");
var email_=document.getElementById("email");
var pass=document.getElementById("pass");
var check=document.getElementById("check");
var tel=document.getElementById("tel");


if(user_.value==""){
	
	counter++;
}

if(name.value==""){
	alert("enter name");
	counter++;
}

var pass_pat=/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{5,}$/;
if(!pass_pat.test(pass.value)){
	counter++;
	alert("enter valid password ")
}


var pat=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
if(!pat.test(email.value)){
	alert(" enter email valid E-mail");
	counter++;
}
var tel_pat=/^[0-9]{10}/;
if(!tel_pat.test(tel.value)){
	counter++;
	alert("enter valid telephone, 10 digits");
}

if(!check.checked==true){
	counter++;
	alert("Agree with Terms");
}

if(counter>0){
alert("Sumbission Canceled")
document.getElementById("form_").addEventListener("submit", function(event){
    event.preventDefault()
});
}else{
	var temp=document.getElementById("name").value;
	var x="Form submited with name : ";
	alert(x.concat(temp));
}





}

function reset_(){
	
	var flag=confirm("Press OK to Reset the form");
	if(flag==true){
		document.getElementById("Username").value="";
		document.getElementById("pass").value="";
		document.getElementById("mySelect").value="";
		document.getElementById("name").value="";
		document.getElementById("adress").value="";
		document.getElementById("email").value="";
		document.getElementById("tel").value="";
		document.getElementById("area").value="";
		document.getElementById("coupon").value="";
		document.getElementById("type_of_card").value="";
		document.getElementById("card_number").value="";
		document.getElementById("exp").value="";
		document.getElementById("check").checked=false;
		document.getElementById("map").style.display="none";
		check_();


	}

}

/*function suggest_(){

var value = this.options[this.selectedIndex].value;
if(value.length==0){
	document.getElementById("name").value="";
}else{
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                finder(xmlhttp)
            }
        };
        xmlhttp.open("GET", "names.xml", true);
        xmlhttp.send();}
    }

    function finder(xml){

    }
}
}*/
//google API TUTORIALS//
function initialize() {
  var myLatLng = {lat: 51.508742, lng: -0.120850};
  geocoder = new google.maps.Geocoder();

  var mapProp = {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
   map=new google.maps.Map(document.getElementById("map"),mapProp);
   var address = document.getElementById("adress").value;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
 
  document.getElementById("map").style.display="block";
}


