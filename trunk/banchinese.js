function validate(theform) {
    var message = trim(wysiwyg ? html2bbcode(getEditorContents()) : (!theform.parseurloff.checked ? parseurl(theform.message.value) : theform.message.value));
if (isChinese($("subject").value)){
        showDialog('标题必须含有中文');
        return false;
}
    if (($('postsubmit').name != 'replysubmit' && !($('postsubmit').name == 'editsubmit' && !isfirstpost) && theform.subject.value == "") || !sortid && !special && message == "") {
        showDialog('请完成标题或内容栏。');
        return false;
    } else if (mb_strlen(theform.subject.value) > 80) {
        showDialog('您的标题超过 80 个字符的限制。');
        return false;
    }
    if (tradepost) {
        if (theform.item_name.value == '') {
            showDialog('对不起，请输入商品名称。');
            return false;
        } else if (theform.item_price.value == '') {
            showDialog('对不起，请输入商品现价。');
            return false;
        } else if (!parseInt(theform.item_price.value)) {
            showDialog('对不起，商品现价必须为有效数字。');
            return false;
        } else if (theform.item_costprice.value != '' && !parseInt(theform.item_costprice.value)) {
            showDialog('对不起，商品原价必须为有效数字。');
            return false;
        } else if (theform.item_number.value != '0' && !parseInt(theform.item_number.value)) {
            showDialog('对不起，商品数量必须为数字。');
            theform.item_number.focus();
            return false;
        }
    }
    if (in_array($('postsubmit').name, ['topicsubmit', 'editsubmit'])) {
        if (theform.typeid && (theform.typeid.options && theform.typeid.options[theform.typeid.selectedIndex].value == 0) && typerequired) {
            showDialog('请选择主题对应的分类。');
            return false;
        }
        if (special == 3 && isfirstpost) {
            if (theform.rewardprice.value == "") {
                showDialog('对不起，请输入悬赏积分。');
                return false;
            }
        } else if (special == 4 && isfirstpost) {
            if (theform.activityclass.value == "") {
                showDialog('对不起，请输入活动所属类别。');
                return false;
            } else if ($('starttimefrom_0').value == "" && $('starttimefrom_1').value == "") {
                showDialog('对不起，请输入活动开始时间。');
                return false;
            } else if (theform.activityplace.value == "") {
                showDialog('对不起，请输入活动地点。');
                return false;
            }
        }
    }
    if (isfirstpost && sortid && typeof checkallsort == 'function') {
        if (!checkallsort()) return false;
    }
    if (!disablepostctrl && !sortid && !special && ((postminchars != 0 && mb_strlen(message) < postminchars) || (postmaxchars != 0 && mb_strlen(message) > postmaxchars))) {
        showDialog('您的帖子长度不符合要求。\n\n当前长度: ' + mb_strlen(message) + ' 字节\n系统限制: ' + postminchars + ' 到 ' + postmaxchars + ' 字节');
        return false;
    }
    if (UPLOADSTATUS == 0) {
        if (!confirm('您有等待上传的附件，确认不上传这些附件吗？')) {
            return false;
        }
    } else if (UPLOADSTATUS == 1) {
        showDialog('您有正在上传的附件，请稍候，上传完成后帖子将会自动发表...', 'notice');
        AUTOPOST = 1;
        return false;
    }
    if ($(editorid + '_attachlist')) {
        $('postbox').appendChild($(editorid + '_attachlist'));
        $(editorid + '_attachlist').style.display = 'none';
    }
    if ($(editorid + '_imgattachlist')) {
        $('postbox').appendChild($(editorid + '_imgattachlist'));
        $(editorid + '_imgattachlist').style.display = 'none';
    }
    hideMenu();
    theform.message.value = message;
    if ($('postsubmit').name == 'editsubmit') {
        return true;
    } else if (in_array($('postsubmit').name, ['topicsubmit', 'replysubmit'])) {
        seccheck(theform, seccodecheck, secqaacheck);
        return false;
    }
}


function isChinese(str){ 
var badChar ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 　[]{}();:,.<>";
k=0;
for (i=0;i<str.length;i++){
var c = str.charAt(i)
 if(badChar.indexOf(c) > -1){ 
   k=k+1;
 } 
} 
if (k==str.length){
 return true;
}
return false; 
} 