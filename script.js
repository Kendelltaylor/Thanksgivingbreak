var a = document.getElementById("img1"); 
var b = document.getElementById("img2");
var c = document.getElementById("img3");
var d = document.getElementById("img4"); 

function changeImage1(){
	a.classList.add("img1");
} 

function changeImage2(){
	b.classList.add("img2");
} 
function changeImage3(){
	c.classList.add("img3");
} 

function changeImage4(){
	d.classList.add("img4");
}  

function titleReset(){
	a.classList.remove("img1");
	b.classList.remove("img2");
	c.classList.remove("img3"); 
	d.classList.remove("img4");
} 



