var numsquare=6;
var colors=generaterandomcolors(numsquare);
var square=document.querySelectorAll('.square');
var pickedcolor=pickcolor();
var colordisplay=document.getElementById("hello");
colordisplay.textContent= pickedcolor;
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbutton =document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");


resetbutton.addEventListener("click",function()
{
   colors=generaterandomcolors(numsquare);       
    pickedcolor=pickcolor();
    colordisplay.textContent= pickedcolor;
    for (var i=0 ;i<square.length;i++)
    {  //add colors to squares 
	square[i].style.backgroundColor=colors[i]; 
    }
h1.style.backgroundColor="steelblue";
message.textContent="";
this.textContent="new colors";
});

/*for (var i =0 ; i<modbuttons.length;i++)
{
modbuttons[i].addEventListener("click",function()

{ modbuttons[0].classList.remove("selected");
modbuttons[1].classList.remove("selected");
	this.classList.add("selected");
this.textContent==="EASY" ? numsquare=3: numsquare=6;
reset();

});
}
function reset()
{
    colors=generaterandomcolors(numsquare);       
    pickedcolor=pickcolor();
    colordisplay.textContent= pickedcolor;
    message.textContent="";
    resetbutton.textContent="new colors";
    for (var i=0 ;i<square.length;i++)
    {  if(colors[i])
    {//add colors to squares 
	square[i].style.backgroundColor=colors[i];
	square[i].style.display="block"; 
}
    else 
    {
    	square[i].style.display="none";
    }
}
    h1.style.backgroundColor="steelblue";
}*/
easybtn.addEventListener("click",function()
{
  hardbtn.classList.remove("selected");
  easybtn.classList.add("selected");
  numsquare=3;
  colors =generaterandomcolors(numsquare);
  pickedcolor=pickcolor();
  colordisplay.textContent=pickedcolor;
  for (var i=0 ;i <square.length;i++)
  {  if(colors[i])
  	{
      square[i].style.backgroundColor=colors[i];

  	}else {
  		square[i].style.display="none";
  	} }
});


hardbtn.addEventListener("click",function(){

 hardbtn.classList.add("selected");
  easybtn.classList.remove("selected");
  numsquare=6;
colors =generaterandomcolors(numsquare);
  pickedcolor=pickcolor();
  colordisplay.textContent=pickedcolor;
  for (var i=0 ;i <square.length;i++)
  { square[i].style.backgroundColor=colors[i];
    square[i].style.display="block";
} 
});

for (var i=0 ;i<square.length;i++)
{  //add colors to squares 
	square[i].style.backgroundColor=colors[i];
	//add events to squares 
	square[i].addEventListener("click",function()
	{  
       var clickedcolor=this.style.backgroundColor;
       if (clickedcolor===pickedcolor)
       {
         changecolor(clickedcolor);
         message.textContent="correct!";
         h1.style.backgroundColor=clickedcolor;
         resetbutton.textContent="play again ?";
         	} 
         	else 
         	{
         	this.style.backgroundColor="#232323";
         	message.textContent="try again!";
         	}
	}); 
}
function changecolor(color)
{
for (var i=0; i<square.length;i++)
{
  square[i].style.backgroundColor=pickedcolor;
  
}

}
function pickcolor()
{
  var random =Math.floor(Math.random()*colors.length); 
  return colors[random];

}
function generaterandomcolors(num)
{
  //create an array 
  var arr=[];
  //loop through array 
   for (var i=0; i<num ;i++)
   {
    arr.push(createrandomcolor());
   }
  //return the array
  return arr; 
}
function createrandomcolor()
{

var r =Math.floor(Math.random()* 256);
var g =Math.floor(Math.random()* 256);
var b =Math.floor(Math.random()* 256);

return "rgb("+ r + ", " + g + ", " + b +")";
}  