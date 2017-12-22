var DataUrl=["photo.jpg","photo1.jpg","photo2.jpg"];
window.onload = function(){
document.getElementById("ToogleB").addEventListener("click", ToogleB_);
document.getElementById("ChangeFont").addEventListener("click",ChangeFont_);
document.getElementById("ToogleA").addEventListener("click",ToogleA_);
document.getElementById("Change_A").addEventListener("click",Change_A_);
document.getElementById("AddPic").addEventListener("click",AddPic_);


};

				function ToogleB_(){
				var info=document.getElementById("info");
				var title=document.getElementById("title");
				//var default_color=document.body.style.backgroundColor;
				if(document.body.style.backgroundColor==="red"){
					
				document.body.style.background="YELLOW";

				}else{

				  document.body.style.backgroundColor="red";
				 
				}
				}

				function ChangeFont_(){
				var color=document.getElementById("color_");
				var info=document.getElementById("info");
				info.style.color=color.value;
				}

				function ToogleA_(){
				var img=document.getElementById("photo_");

				if(img.style.borderRadius==="8px"){
					img.style.borderRadius="50%";
				}else{
					img.style.borderRadius="8px";
				}

				}

				function Change_A_(){
					
					/*floor(0-2.999);
													*/
					 var i=Math.floor((Math.random() * (DataUrl.length )));
					var img=document.getElementById("photo_");
					img.src=DataUrl[i];

				}

				function AddPic_(){


				}


