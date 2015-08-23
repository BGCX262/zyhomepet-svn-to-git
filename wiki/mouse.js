Clrs=new Array('ff0000','00ff00','ffffff','ff00ff','ffa500','ffff00','00ff00','ffffff','ff00ff')
amount=10;
Xpos = 0;
Ypos = 0;
if (document.layers){
for (i = 0; i < amount; i++)
{document.write('<layer name=nstrs'+i+' top=0 left=0 width='+i/2+' height='+i/2+' bgcolor=#ff0000></layer>')}
window.captureEvents(Event.MOUSEMOVE);
function nsMouse(evnt){
Xpos = winClrs=new Array('ff0000','00ff00','ffffff','ff00ff','ffa500','ffff00','00ff00','ffffff','ff00ff')
amount=10;
Xpos = 0;
Ypos = 0;
if (document.layers){
for (i = 0; i < amount; i++)
{document.write('<layer name=nstrs'+i+' top=0 left=0 width='+i/2+' height='+i/2+' bgcolor=#ff0000></layer>')}
window.captureEvents(Event.MOUSEMOVE);
function nsMouse(evnt){
Xpos = window.pageYOffset+evnt.pageX+1;
Ypos = window.pageYOffset+evnt.pageY+4;
}
window.onMouseMove = nsMouse;
}
else if (document.all){
document.write('<div id="ieDiv" style="position:absolute;z-index:9999999;top:0px;left:0px">'
+'<div id="c" style="position:relative">');
for (i = 0; i < amount; i++)
{document.write('<div style="position:absolute;z-index:9999999;top:0px;left:0px;width:'+i/2+';height:'+i/2+';font-size:'+i/2+'"></div>')}
document.write('</div></div>');
function ieMouse(){
Ypos = document.body.scrollTop+event.y+4;
Xpos = document.body.scrollLeft+event.x+1;
}
document.onmousemove = ieMouse;
}

function animateLogo(){
if (document.layers){
for (i = 0; i < amount; i++)
{
var randCol=Math.round(Math.random()*8);
document.layers['nstrs'+i].bgColor=Clrs[randCol];

if (i < amount-1) 
 {
 document.layers['nstrs'+i].top=document.layers['nstrs'+(i+1)].top;
 document.layers['nstrs'+i].left=document.layers['nstrs'+(i+1)].left;
 } 
else  
 {
 document.layers['nstrs'+i].top = Ypos;
 document.layers['nstrs'+i].left =Xpos;
 }
}
}
else if (document.all){
for (i = 0; i <  amount; i++)
{
var randCol=Math.round(Math.random()*8);
ieDiv.all.c.all[i].style.background=Clrs[randCol]; 
if (i < amount-1) 
 {
 ieDiv.all.c.all[i].style.top=ieDiv.all.c.all[i+1].style.top;
 ieDiv.all.c.all[i].style.left=ieDiv.all.c.all[i+1].style.left;
 } 
else 
 {
 ieDiv.all.c.all[i].style.top = Ypos;
 ieDiv.all.c.all[i].style.left =Xpos;
 }
}
}
setTimeout("animateLogo()",40);
}
animateLogo();dow.pageYOffset+evnt.pageX+1;
Ypos = window.pageYOffset+evnt.pageY+4;
}
window.onMouseMove = nsMouse;
}
else if (document.all){
document.write('<div id="ieDiv" style="position:absolute;top:0px;left:0px">'
+'<div id="c" style="position:relative">');
for (i = 0; i < amount; i++)
{document.write('<div style="position:absolute;top:0px;left:0px;width:'+i/2+';height:'+i/2+';font-size:'+i/2+'"></div>')}
document.write('</div></div>');
function ieMouse(){
Ypos = document.body.scrollTop+event.y+4;
Xpos = document.body.scrollLeft+event.x+1;
}
document.onmousemove = ieMouse;
}

function animateLogo(){
if (document.layers){
for (i = 0; i < amount; i++)
{
var randCol=Math.round(Math.random()*8);
document.layers['nstrs'+i].bgColor=Clrs[randCol];

if (i < amount-1) 
 {
 document.layers['nstrs'+i].top=document.layers['nstrs'+(i+1)].top;
 document.layers['nstrs'+i].left=document.layers['nstrs'+(i+1)].left;
 } 
else  
 {
 document.layers['nstrs'+i].top = Ypos;
 document.layers['nstrs'+i].left =Xpos;
 }
}
}
else if (document.all){
for (i = 0; i <  amount; i++)
{
var randCol=Math.round(Math.random()*8);
ieDiv.all.c.all[i].style.background=Clrs[randCol]; 
if (i < amount-1) 
 {
 ieDiv.all.c.all[i].style.top=ieDiv.all.c.all[i+1].style.top;
 ieDiv.all.c.all[i].style.left=ieDiv.all.c.all[i+1].style.left;
 } 
else 
 {
 ieDiv.all.c.all[i].style.top = Ypos;
 ieDiv.all.c.all[i].style.left =Xpos;
 }
}
}
setTimeout("animateLogo()",40);
}
animateLogo();