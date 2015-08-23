for (i=0;i<30;i++){
if ($("jifen"+i)){
cre=$("jifen"+i).innerHTML
for (k=0;k<jfjd.length;k++){
  if (cre<jfjd[k][1]){
     cd=k
     k=999999
  }
}
if (k!=jfjd.length){
cdx=jfjd[cd-1][1]
cds=jfjd[cd][1]
per=(cre-cdx)/(cds-cdx)*100
  $("jifen"+i).innerHTML="<div onmouseover='jfshow("+i+")' onmouseout='jfhide("+i+")' style='position:relative;margin:5px;margin-left:15px!important;'>积分:<img src='http://img13.poco.cn/mypoco/myphoto/20121030/09/56471892201210300910281997642082346_001.gif' /><img width="+per+"px height=12px src='http://img13.poco.cn/mypoco/myphoto/20121030/09/56471892201210300910281997642082346_002.gif' /><img src='http://img13.poco.cn/mypoco/myphoto/20121030/09/56471892201210300910281997642082346_003.gif' /><div id=jfin"+i+" style='position:absolute;top:10px;left:10px;background:#ffffff;display:none;border:#cacaca 2px soid;padding:8px;'>积分:"+cre+"<br />当前:<font color=red>"+jfjd[cd][0]+"</font><br />升级到<font color=red>"+jfjd[cd+1][0]+"</font>需要积分:"+(cds-cre)+"<br />升级进度:"+Math.floor(per)+"%</div></div>"
}else{
cdx=jfjd[cd-1][1]
$("jifen"+i).innerHTML="<div onmouseover='jfshow("+i+")' onmouseout='jfhide("+i+")' style='position:relative;margin:5px;margin-left:15px!important;'>积分:已经升到最高级!<div id=jfin"+i+" style='position:absolute;top:10px;left:10px;background:#ffffff;display:none;border:#cacaca 2px soid;padding:8px;'>积分:"+cre+"<br />当前:<font color=red>"+jfjd[cd][0]+"</font><br /><font color=green>已经是最高级了!</font></div></div>"
}
}}
function jfshow(a){$("jfin"+a).style.display="block"}
function jfhide(a){$("jfin"+a).style.display="none"}