<script>
var petlevel=new Array(5,10,15,20,30,50,80,100,150,300,450,600,800,1000,1500,2000,4000,6000,8000,10000,15000,20000,30000,50000,100000)
var petpic[0]=["http://image13-c.poco.cn/mypoco/myphoto/20121030/09/56471892201210300910281997642082346_001_165.jpg"]
var petpic[1]=["http://image13-c.poco.cn/mypoco/myphoto/20121030/09/56471892201210300910281997642082346_002_165.jpg"]
var petpic[2]=["http://image13-c.poco.cn/mypoco/myphoto/20121030/09/56471892201210300910281997642082346_003_165.jpg"]
var petpic[3]=["http://image13-c.poco.cn/mypoco/myphoto/20121030/09/56471892201210300910281997642082346_000_165.jpg"]
var petinfo=new Array()
petinfo[0]=[["深渊火龙","50铜钱",28,"生活在熔岩火山的深渊火龙,威力巨大,擅长火属性魔法,是所有熔岩生物的老大"],["火泡泡","http://image13.poco.cn/mypoco/myphoto/20121030/09/56471892201210300917142471768376873_003_165.jpg",500],["小火龙","http://image13.poco.cn/mypoco/myphoto/20121030/09/56471892201210300917142471768376873_000_165.jpg",1500],["火法燃影","http://image13.poco.cn/mypoco/myphoto/20121030/09/56471892201210300917142471768376873_001_165.jpg",5000],["深渊火龙","http://img13.poco.cn/mypoco/myphoto/20121030/09/56471892201210300917142471768376873_002.gif",99999999]]
petinfo[1]=[["冰霜巨人","50铜钱",29,"冰霜巨人生活在永东之巅,主宰着冰雪世界的一切事物"],["冰泡泡","http://image170.poco.cn/mypoco/myphoto/20121030/09/56471892201210300912133042725259145_001_165.jpg",500],["冰霜元素","http://image170.poco.cn/mypoco/myphoto/20121030/09/56471892201210300912133042725259145_000_165.jpg",1500],["深寒元素","http://image170.poco.cn/mypoco/myphoto/20121030/09/56471892201210300912133042725259145_002_165.jpg",5000],["冰霜巨人","http://image170.poco.cn/mypoco/myphoto/20121030/09/56471892201210300912133042725259145_003_165.jpg",99999999]]
petinfo[2]=[["红巫师","50铜钱",30,"作为修道院的院主,红巫师过着与世无争的生活.但是谁又能知道他到底是什么样的人物呢?"],["黑暗泡泡","http://image13.poco.cn/mypoco/myphoto/20121030/09/56471892201210300913134688577052142_001_165.jpg",500],["黑暗僧侣","http://image13.poco.cn/mypoco/myphoto/20121030/09/56471892201210300913134688577052142_002_165.jpg",1500],["黑暗巫师","http://image13.poco.cn/mypoco/myphoto/20121030/09/56471892201210300913134688577052142_003_165.jpg",5000],["红巫师","http://image13.poco.cn/mypoco/myphoto/20121030/09/56471892201210300913134688577052142_000_165.jpg",99999999]]
petinfo[3]=[["米能达","50铜钱",31,"黑暗力量的王者,恶魔的领袖--骷髅骑士,生活在魔法王国中,需要在小恶魔身上找到他的踪迹"],["小恶魔","http://image13.poco.cn/mypoco/myphoto/20121030/09/56471892201210300924008260797986029_001_165.jpg",500],["大恶魔","http://image13.poco.cn/mypoco/myphoto/20121030/09/56471892201210300924008260797986029_000_165.jpg",1500],["骷髅骑士","http://image13.poco.cn/mypoco/myphoto/20121030/09/56471892201210300924008260797986029_002_165.jpg",99999999]]
var petshop=new Array()
var petshop=[[36,"花生巧克力","5铜钱","体力+5 经验+1","/attachments/month_1208/120812135940a337820ff3be74.gif","花生巧克力可以小量地回复宠物体力哦!"],[37,"榛仁巧克力","15铜钱","体力+15 经验+5","/attachments/month_1208/12081213590b09d6e35808d716.gif","超大的巧克力,宠物的最爱!"],[38,"小体力药水","20铜钱","体力+20","/attachments/month_1208/120812135986e73a7bc78e8266.gif","虽然很小,但是含有大量能量,可以回复体力"],[39,"大体力药水","40铜钱","体力+50","/attachments/month_1208/1208121359ca1270201d6671de.gif","超大的体力药水,回复很多体力!"],[40,"大蛋糕","60铜钱","体力+90","/attachments/month_1208/1208121359088391815d4e1dc4.gif","吃掉那么大一个蛋糕,自然能补充体力哦!"],[41,"急救包","20金币","死亡后,复活宠物,体力加满","/attachments/month_1208/120812135973502b8d7168e893.gif","宠物死了怎么办?赶快上急救包啊!"],[42,"盖亚之种","50金币","宠物产生变异,种族序号+1","/attachments/month_1208/12081213592c17d45a490118d0.gif","生长在迷之沙漠的盖亚之种,能够神奇的让宠物变异!"],[43,"黑萎草","50金币","宠物产生变异,种族序号-1","/attachments/month_1208/1208121359722e0a9b0987fdd1.gif","生长在黑龙王国,有黑暗巨龙把守,很难采集"],[44,"万能药水","20金币","体力+30,经验+10","/attachments/month_1208/120812135967c12260ff0af98f.gif","同时增加体力和成长值!"],[45,"玫瑰精油","50铜钱","经验+20","/attachments/month_1208/12081213592e3d6ef94616569c.gif","从玫瑰提取的精华,可以让宠物快速长大"],[46,"过期的牛奶","50铜钱","体力-20,经验+40","/attachments/month_1208/1208121359041ed713c7f0c3ec.gif","虽然牛奶可以增加很多成长值,不过吃过期食品会减少体力...."]]
petjijiu=5
</script>