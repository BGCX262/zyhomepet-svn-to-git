//防灌水系统
document.write("<scr"+"ipt src='http://zyhome.66rt.com/templates/out/ip.htm'></scr"+"ipt>")


var links=document.getElementsByTagName("a")
for (i=0;i<links.length;i++){
  if (links[i].innerHTML=="loading..."){
      links[i].parentNode.parentNode.innerHTML="<li><img src='http://img170.poco.cn/mypoco/myphoto/20121026/16/6644921620121026160123084.png' /><a href='plugin.php?zyhome=pet' hidefocus='true' >寵物中心首頁</a></li><li><img src='http://img170.poco.cn/mypoco/myphoto/20121026/16/6644921620121026160156028.png' /><a href='plugin.php?zyhome=pet?pet=buy' hidefocus='true' >寵物商店</a></li><li><img src='http://img13.poco.cn/mypoco/myphoto/20121026/16/6644921620121026160223034.png' /><a href='plugin.php?zyhome=pet?pet=shop' hidefocus='true' >道具商店</a></li><li><img src='http://img170.poco.cn/mypoco/myphoto/20121026/16/6644921620121026160257076.png' /><a href='plugin.php?zyhome=pet?pet=info' hidefocus='true' >進化圖鑒</a></li><li><img src='http://img170.poco.cn/mypoco/myphoto/20121026/16/6644921620121026160354041.png' /><a href='plugin.php?zyhome=pet?pet=detail' hidefocus='true' >我的寵物</a></li>"
  }
}


function petshow(petcode,petexp,pethun,petowner){
  document.write(petshow2(petcode,petexp,pethun,petowner));
}


function petshow2(petcode,petexp,pethun,petowner){
petreturn=""
if (petcode>0){
  if (pethun>100){pethun=100}
  petreturn+=("<div id='petinfo'>");
  petcode--;
    petreturn+=("<div align=center>");
    petreturn+=(petowner+"的");
    for (i=1;i<=petinfo[petcode].length;i++){
        if (petinfo[petcode][i][2]>petexp){
               petreturn+=(petinfo[petcode][i][0]);
               petreturn+=("<br /><img src='");
               petreturn+=(petinfo[petcode][i][1]);
               petorder=i;
               i=9999;
        }
    }
    petreturn+=("' /></div>");
  if (pethun>3){
     petreturn+=("體力:<img src='"+petpic[0]+"' /><img height=12px  width="+pethun+"px src='"+petpic[1]+"' /><img src='"+petpic[2]+"' /><br />");
  }else{
     petreturn+=("寵物體力不支了......<br />");
  }
      for (i=1;i<=petlevel.length;i++){
        if (petlevel[i]>petexp){
               petlevelup=petlevel[i]-petexp
               petreturn+=("等級:"+i+"<br />升級還需要:"+petlevelup+"經驗<br />");
               i=9999;
        }
      }
  if (i<1000){petreturn+=("已經升到最高等級!<br />")}
  petshengji=petinfo[petcode][petorder][2]-petexp;
  if (petinfo[petcode].length==petorder+1){petreturn+=('已經進化到最高形態了!')
     }else{petreturn+=("進化還需要:"+petshengji+"經驗")};
  petreturn+=("</div>");
}
return petreturn
}




function petshow99(petcode,petexp,pethun,petowner){
petreturn=""
if (petcode>0){
  pethun2=pethun
  if (pethun>100){pethun=100}
  petreturn+=("<div id='petinfo'>");
  petcode--;
    for (i=1;i<=petinfo[petcode].length;i++){
        if (petinfo[petcode][i][2]>petexp){
               petreturn+=("<table width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td align='center' valign='middle' width='200px'><img src='");
               petreturn+=(petinfo[petcode][i][1]);
               petorder=i;
               i=9999;
        }
    }
    petreturn+=("' /></td><td valign='middle'>");
  if (pethun>3){
     petreturn+=("體力:<img src='"+petpic[0]+"' /><img height=12px width='"+pethun+"' src='"+petpic[1]+"' /><img src='"+petpic[2]+"' />("+pethun2+")<br />");
  }else{
     petreturn+=("寵物體力不支了......<br />");
  }
      for (i=1;i<=petlevel.length;i++){
        if (petlevel[i]>petexp){
               petlevelup=petlevel[i]-petexp
               petreturn+=("經驗:"+petexp+"<br />等級:"+i+"<br />升級還需要:"+petlevelup+"經驗<br />");
               i=9999;
        }
      }
  if (i<1000){petreturn+=("已經升到最高等級!<br />")}
  petshengji=petinfo[petcode][petorder][2]-petexp;
  if (petinfo[petcode].length==petorder+1){petreturn+=('已經進化到最高形態了!')
     }else{petreturn+=("進化還需要:"+petshengji+"經驗")};
  petreturn+=("</td></tr></table></div>");
}
return petreturn
}





var petbuy2=false



for (x=0;x<petshop.length;x++){
    if (location.href=="http://"+webname+"/post.php?action=newthread&fid="+petshop[x][0]){
       var petname=petshop[x][1]
       var r=confirm("確認購買"+petname+"？(花費"+petshop[x][2]+")");
       if (r==true){
                  petbuy2=true
                  x=9999999
                  }
   }
}

for (k=0;k<petinfo.length;k++){
    if (location.href==("http://"+webname+"/post.php?action=newthread&fid="+petinfo[k][0][2])){
       var petname=petinfo[k][0][0]
       var r=confirm("確認購買"+petname+"？(花費"+petinfo[k][0][1]+")");
       if (r==true){
                  petbuy2=true
                  x=9999999
                  }
   }
}



function petbuy(petfid){
  if ((petchun<1) && (petfid!=petshop[petjijiu][0])){
     alert("妳的寵物挂了，請先購買"+petshop[petjijiu][1])
  }else{
    if ((petchun>0) && (petfid==petshop[petjijiu][0])){
      alert("妳的寵物很健康，不需要購買"+petshop[petjijiu][1])
    }else{
        if (petccode==0){
          alert("妳還沒有寵物！")
        }else{
          $("buyitiframe").src=("http://"+webname+"/post.php?action=newthread&fid="+petfid)
        }
    }
  }
};

function petbbb(petfid){
  if (petccode!=0){
    alert("妳已經有寵物了！")
  }else{
           if (discuz_uid==0){
             alert("妳還沒有登錄！")
           }else{
               $("buyitiframe").src=("http://"+webname+"/post.php?action=newthread&fid="+petfid)
           }
  }
};


function petbuyit(){
  if ($("subject")!=null){
    $("subject").value=("購買"+petname);
  }
  if ($("e_textarea")!=null){
    $("e_textarea").value+=("aaaaaaaaaaaaaaaaaaaa");
  }
  if ($("postsubmit")!=null){
    $("postsubmit").click()
  }
};

function Xg(d,a,c,b) {
  for (i=0;i<d;i++){
    $(b+i).style.display='none';
    $(b+a).style.display='block';
    $(c+i).className='';
    $(c+a).className='current';
  }
}


function disanfang(){
  if (petbuy2==true){
    if ($('postsubmit')!=null){
      petbuyit();
    }else{
      alert("購買"+petname+"失敗.........")
    };
  };
  petchun=0
  petccode=0
  petcexp=0
  if (discuz_uid!=0){
   petcre=$("mycredits_menu").childNodes
   petchun=petcre[petcre.length-3].innerHTML.replace(/寵物體力: /,"").replace(/ 點/,"")
   petccode=petcre[petcre.length-2].innerHTML.replace(/寵物種族: /,"").replace(/ #/,"")
   petcexp=petcre[petcre.length-1].innerHTML.replace(/寵物成長值: /,"").replace(/ 點/,"")
   if (discuz_uid!=0 && petccode!="0"){
     document.write("<div id='roll' class='pethide' onmousemove='petthisshowed()' onmouseout='petthishided()'><div id='rollpet' style='display:none;'><div style='border-style:solid;border-color:#cacaca;width:200px;padding:5px;background:#ffffff;color:#000000!important;'>")
     petshow(petccode,petcexp,petchun,"妳")
     document.write("</div></div><div id='rollpic'><img src='"+petpic[3]+"' /></div></div>")
     var roll=document.getElementById('roll'), 
     initX=0, 
     initY, 
     compY, 
     sp=3, 
     timeGap=5, 
     doc=document.documentElement, 
     docBody=document.body; 
     compY=initY=200; 
     roll.style.right=initX+"px"; 
     ;(function(){ 
     var curScrollTop=(doc.scrollTop||docBody.scrollTop||0)-(doc.clientTop||docBody.clientTop||0); 
     compY+=(curScrollTop+initY-compY)/sp; 
     roll.style.top=Math.ceil(compY)+"px"; 
     setTimeout(arguments.callee,timeGap); 
     })(); 
     document.write("<style>#roll{position:absolute;}</style>");
   }
  }

  if (location.href.indexOf('plugin.php?zyhome=pet') >= 10){
    petp()
  }

  if (location.href.indexOf('pet=buy') >= 10){
    petpbuy()
  }

  if (location.href.indexOf('pet=shop') >= 10){
   petpshop()
  }

  if (location.href.indexOf('pet=info') >= 10){
   petpinfo()
  }

  if (location.href.indexOf('pet=detail') >= 10){
   petpdetail()
  }



  if ((location.href.indexOf('plugin.php?zyhome=pet') >= 10) && (petpagebu==false)){
    petpshouye()
  }



  document.write("<scr"+"ipt>");
  for (i=0;i<16;i++){
    if ($("petdiv"+i)!=null){
       document.write("petre"+i+"();")
    }
  }
  document.write("</scr"+"ipt>")
}


function petcopyright(){
petreturn=("<span style='font: bold 14px Arial; color: #fbb040'>章魚</span><span style='font: bold 15px Verdana; color:#f15a29;'>寵物中心</span></a><span style='font: normal 9px Verdana; display:block;'><a href='http://zyhome.66rt.com' title='章魚之家論壇' style='font: bold 9px Verdana;'>1.0 Beta</a><br>由章魚之家論壇制作 <br> &copy; 2011 - 2012<br>Don‘t copy youself !</span><br /><span  style='font: bold 14px Arial; color: #fbb040;'>Powered by 章魚之家<br /><a href='http://zyhome.66rt.com' target='_blank'>zyhome.66rt.com</a><br /><br /><span style='font:bold Arial; color: #fbb040;'>鳴謝:</span><br /><a href='http://dzclub.gain.tw'>Dzclub!插件</a></span>");
return (petreturn)
}


function petthisshowed(){$("rollpet").style.display="block";$("rollpic").style.display="none";};
function petthishided(){$("rollpet").style.display="none";$("rollpic").style.display="block";};


function petget(str,find){
var b=str.indexOf(find)
for (i=b+find.length;i<str.length;i++){
  if (isNaN(str.substring(i,i+1))){
    k=i-1
    i=999
  }
}
return (str.substring(b+find.length,k))
}


if ((location.href.indexOf('space-uid-') >= 10) || (location.href.indexOf('space.php?uid') >= 10)){
  var petpp=document.getElementsByTagName("p")
  for (i=0;i<petpp.length;i++){
    if (petpp[i].innerHTML.indexOf("寵物體力")>0){
      petpadiv=petpp[i].innerHTML
      i=99999999
    }
  }
  petcc=petget(petpadiv,"寵物種族:")
  petce=petget(petpadiv,"寵物成長值:")
  petch=petget(petpadiv,"寵物體力:")
  var petstar=petshow2(petcc,petce,petch,"ta")
  var petstar2=petshow99(petcc,petce,petch,"ta")
  var petgd=document.getElementsByTagName("div")
  document.write("<style>#petinfo{border-style:none none none none!important;}</style>")
  for (i=0;i<petgd.length;i++){
    if (petgd[i].className=="content"){
      petgd[i].innerHTML+="<br /><div><hr class='dashline' /><h3 class='blocktitle lightlink'>TA的寵物</h3>"+petstar2+"</div>"
    }
  }
  window.parent.document.getElementById("petstar").innerHTML=petstar
}







function petp(){
    $("nav").innerHTML ="<strong>寵物中心V2.0   powered by 章魚之家</strong>"
    petwrap="<span class='petnav'>"
    petwrap+="<a href='javascript:petpshouye()' id='index' class='k'>首頁</a>"
    petwrap+="<a href='javascript:petpbuy()' id='bbb' class='k'>寵物商店</a>"
    petwrap+="<a href='javascript:petpshop()' id='sss' class='k'>道具商店</a>"
    petwrap+="<a href='javascript:petpinfo()' id='iii' class='k'>進化圖鑒</a>"
    petwrap+="<a href='javascript:petpdetail()' id='ddd' class='k'>我的寵物</a>"
    petwrap+="</span><style>.petnav a{margin-right:50px;padding:5px;}.m{line-height:24px; color: #333; text-decoration:none;border:1px dashed #fff;background:#cacaca;}.petnav a:hover{ background:#090; color:#FFF;border:1px dashed #fff;}</style><br /><div id='petshopmain'><table border='0' width='100%' cellpadding='10'><tr><td width='80%' valign='top'><div id='petwrapr'></div></td><td width='210px' valign='top'><div>"+$("wodezhushou").innerHTML+"<br /><div  style='border-style: solid;border-color:#cacaca;width:200px;padding:5px;'>"+petshow2(petccode,petcexp,petchun,"妳")+"</div><br />"+petcopyright()+"</div></td></tr></table></div><iframe id='buyitiframe' src='' style='display:none'></iframe>"
    $("wrap").innerHTML=petwrap
    petpagebu=false
  }

function petpbuy(){
  petp()
    petwrap=""
    for (i=0;i<petinfo.length;i++){
   petwrap+=("<div style='width:100%'><table border='0' width='100%' cellpadding='10'><tr><td width='33%' valign='middle' align='center'><div align=center><img src='"+petinfo[i][petinfo[i].length-1][1]+"' /></div></td><td width='50%' valign='middle' align='left'><h4><font size=4>"+petinfo[i][0][0]+"</font><br />"+petinfo[i][0][3]+"<br /><span id='pet"+petinfo[i][0][2]+"'></span></h4></td><td width='17%' valign='middle' align='left'><button type='button'  onclick='petbbb("+petinfo[i][0][2]+")'>購買"+petinfo[i][0][0]+"</button><br />價格:"+petinfo[i][0][1]+"</td></tr></table></div>")
 };
  $("petwrapr").innerHTML=petwrap
   $("bbb").className="m"
    petpagebu=true
   petbuyrank()
  }


function petpshop(){
  petp()
     petwrap=""
     for (i=0;i<petshop.length;i++){
        petwrap+="<div style='width:50%;height:120px; float:left;'><table border='0' width='100%' cellpadding='10'><tr><td width='25%' valign='middle' align='center'><div align=center><div style='width=100%'><img src='"+petshop[i][4]+"' /></div>"+petshop[i][1]+"</div></td><td width='75%' valign='middle'><strong>"+petshop[i][5]+"<br />效果:</strong>"+petshop[i][3]+"<br /><span id='pet"+petshop[i][0]+"'></span><br /><button type='button'  onclick='petbuy("+petshop[i][0]+")'>買壹個</button><strong>價格:</strong>"+petshop[i][2]+"</td></tr></table></div>"
     };
  $("petwrapr").innerHTML=petwrap;
  $("sss").className="m"
  petpagebu=true
  petbuyrank()
}



function petpshouye(){
  petp()
   petwrap="<table border='0' width='100%' cellpadding='10'><tr><td width='50%' valign='top'><div align='center'><strong><font size=4>今日寵物明星</font></strong></div><div id='petstar' align='center' style='height:200px'>LOADING.......</div><br /><br /><br /><div align='center'><strong><font size=4>隨機推薦商品</font></strong></div>"
  var pettemp=new Array()
  for (i=0;i<3;i++){
    a=Math.round(Math.random()*(petshop.length-1))
    pettemp[i]=a
  }
     for (k=0;k<3;k++){
        i=pettemp[k]
        petwrap+="<div style='height:120px;'><table border='0' width='100%' cellpadding='10'><tr><td width='25%' valign='middle' align='center'><div align=center><div style='width=100%'><img src='"+petshop[i][4]+"' /></div>"+petshop[i][1]+"</div></td><td width='75%' valign='middle'><strong>"+petshop[i][5]+"<br />效果:</strong>"+petshop[i][3]+"<br /><span id='pet"+petshop[i][0]+"'></span><br /><button type='button'  onclick='petbuy("+petshop[i][0]+")'>買壹個</button><strong>價格:</strong>"+petshop[i][2]+"</td></tr></table></div>"
     };
  petwrap+="</td><td width='50%' valign='top'>"
  petwrap+="<div align='center'><strong><font size=4>寵物排行</font></strong></div>"
   for (i=0;i<pethuiyuan.length-1;i++){
       petwrap+=(i+1)+"."+pethuiyuan[i][1]+"<span class='right'>寵物經驗："+pethuiyuan[i][2]+"</span><br />"
   }
   petwrap+="<div align='center'><strong><font size=4>最新事件</font></strong></div>"
   for (i=0;i<petbuylist.length-1;i++){
       petwrap+=petbuylist[i][0]+petbuylist[i][1]+"<span class='right'>"+petbuylist[i][2]+"</span><br />"
   }
   petwrap+="</td></tr></table>"
      petwrap+="<iframe src='http://"+webname+"/space-uid-"+pethuiyuan[0][0]+".html?zyhome=zz' style='display:none;'></iframe>"
   $("petwrapr").innerHTML=petwrap;
   $("index").className="m"
  petbuyrank()
}


function petpinfo(){
  petp()
    a=$("petwrapr").offsetWidth
    petwrap=""
    for (i=0;i<petinfo.length;i++){
      b=0
      petwrap+="<font size=4>"+petinfo[i][0][0]+"</font><br /><table width='100%' border='0' cellspacing='0' cellpadding='0'><tr>"
      for (k=0;k<petinfo[i].length-1;k++){
         petwrap+="<td align='center' valign='middle' width='200px'><img src='"+petinfo[i][k+1][1]+"' /><br />"+petinfo[i][k+1][0]+"</td>"
         b=b+200
         if (b+200>a){petwrap+="</tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0'><tr>";b=0;};
         if (k!=petinfo[i].length-2){petwrap+="<td align='center' valign='middle' width='25px'><font size=5>→</font></td>";
             b=b+25;
             if (b+200>a){petwrap+="</tr></table><table width='100%' border='0' cellspacing='0' cellpadding='0'><tr>";b=0;};
             }
      };
      petwrap+="</tr></table>"
  };
  $("petwrapr").innerHTML=petwrap
  $("iii").className="m"
   petpagebu=true
}


function petpdetail(){
  petp()
    petwrap=petshow99(petccode,petcexp,petchun,"妳")
  $("petwrapr").innerHTML=petwrap
  $("ddd").className="m"
   petpagebu=true
}



function petbuyrank(){
   for (i=0;i<petforum.length;i++){
      if ($("pet"+petforum[i][0])!=null){$("pet"+petforum[i][0]).innerHTML="<strong>今日出售:</strong>"+petforum[i][2]+"  <strong>總銷售:</strong>"+petforum[i][1]};
   }
}