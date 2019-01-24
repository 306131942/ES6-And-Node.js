var lastRowSelected;
var originalColor;
var c;
var selectedrowcolor = "#63cce7";
//突出显示选定行函数
function LightSelectRow(row) {
    if (lastRowSelected != row) {
        if (lastRowSelected != null) {
            lastRowSelected.style.backgroundColor = originalColor;
        }

        if (c != null) {
            originalColor = c;
        }
        else {
            originalColor = row.style.backgroundColor;
        }

        row.style.backgroundColor = selectedrowcolor;
        lastRowSelected = row;
    }
}
//鼠标经过时函数
function GridMouseOver(row, color) {
    if (lastRowSelected != row) {
        c = row.style.backgroundColor;
    }
    row.style.backgroundColor = color;
}
//鼠标离开时函数
function GridMouseOut(row) {
    if (lastRowSelected != row) {
        row.style.backgroundColor = c;
    }
    else {
        row.style.backgroundColor = selectedrowcolor;
    }
}
//展开区域
function ChangeDisplay(e, divid) {
    var strsrc = e.src;
    var arr = divid.split(',');
    if (strsrc.indexOf("up.gif") > 0) {
        e.src = strsrc.replace("up.gif", "down.gif");
        e.alt = "显示详细资料";
        for (var i = 0; i < arr.length; i++) {
            document.getElementById(arr[i]).style.display = "none";
        }
    }
    else {
        e.src = strsrc.replace("down.gif", "up.gif");
        e.alt = "隐藏详细资料";
        for (var i = 0; i < arr.length; i++) {
            document.getElementById(arr[i]).style.display = "";
        }
    }
}
//展开查询条件
function ChangeQueryDiv(e, divid) {
    var strsrc = e.src;
    var arr = divid.split(',');
    if (strsrc.indexOf("up.gif") > 0) {
        e.src = strsrc.replace("up.gif", "down.gif");
        e.alt = "显示更多条件";
        for (var i = 0; i < arr.length; i++) {
            document.getElementById(arr[i]).style.display = "none";
        }
    }
    else {
        e.src = strsrc.replace("down.gif", "up.gif");
        e.alt = "隐藏更多条件";
        for (var i = 0; i < arr.length; i++) {
            document.getElementById(arr[i]).style.display = "";
        }
    }
}
//动态页面路径
function GetPagePath(m_id, dllname) {
    var url = "../../WFSys/csp/WFSys.dll?page=PublicFunction_Page&pcmd=GetPagePath";
    url += "&m_id=" + m_id;

    // modify:tyo 2012-02-21, 好多页面都没有sessionkey hidden;
    url += "&sessionkey=" + GetQueryString("sessionkey");
    url += "&isDeskTop=" + GetQueryString("isDeskTop");
    //url+="&sessionkey="+frm.sessionkey.value;
    //alert(url);
    //var val = AjaxHttpGet(url);
    //document.getElementById("PagePath").innerText=val;	
}
//获取URL参数 by cuiyh 20110114
function GetQueryString(strName) {
    var strHref = document.location.href;
    var intPos = strHref.indexOf("?");
    var strRight = strHref.substr(intPos + 1);
    var arrTmp = strRight.split("&");
    for (var i = 0; i < arrTmp.length; i++) {
        var arrTemp = arrTmp[i].split("=");
        if (arrTemp[0].toUpperCase() == strName.toUpperCase()) return arrTemp[1];
    }
    return 0;

    /* var reg = new RegExp("(^|&)" + strName + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) 
    {
    return unescape(r[2]); 
    }
    else
    {
    return 0;
    }*/
}
//删除左右两端的空格
function trim(text) {
    //return str.replace(/(^\s*)|(\s*$)/g, "");	
    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    return text == null ? "" : (text + "").replace(rtrim, "");
}
//计算字节数
function len(s) {
    var l = 0;
    var a = s.split("");
    for (var i = 0; i < a.length; i++) {
        if (a[i].charCodeAt(0) < 299) {
            l++;
        } else {
            l += 2;
        }
    }
    return l;
}
//function getBytes(str) { 
//	var cArr = str.match(/[^\x00-\xff]/ig); 
//	return str.length + (cArr == null ? 0 : cArr.length); 
//};
//检查字符长度、是否为空 by cuiyh 20110114
function validLen(objid, objName, strlen, errMesg, isnull, isPop) {
    var vObj = document.getElementById(objid);
    if (typeof vObj == 'undefined' || vObj == null) {
        alert('id=' + objid + '的控件不存在!');
    }
    if (isPop == null) { isPop = true; }
    if (len(vObj.value) > strlen) {
        if (isPop)
            ShowMsg(errMesg);
        setTimeout("document.getElementById('" + objid + "').focus()", 0);
        return false;
    }

    if (isPop)
        document.getElementById(objid).value = trim(document.getElementById(objid).value);

    if (document.getElementById(objid).value == "" && !isnull) {
        if (isPop)
            ShowMsg(objName + '不能为空!');
        setTimeout("document.getElementById('" + objid + "').focus()", 0);
        return false;
    }
    return true;
}
//返回id
function $J(id) {
    return document.getElementById(id);
}
//返回Name
function N(_name) {
    return document.getElementsByName(_name);
}
function setStyleWidth(elem, val) {
    setRxStyle(elem, 'width', val);
}
function setStyleHeight(elem, val) {
    setRxStyle(elem, 'height', val);
}
function setStyleTop(elem, val) {
    setRxStyle(elem, 'top', val);
}
function setStyleLeft(elem, val) {
    setRxStyle(elem, 'left', val);
}
function setRxStyle(elem, name, value) {
    if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) { return; }
    var type, style = elem.style;
    if (value !== undefined) {
        type = typeof value;
        if (value == null || type === "number" && isNaN(value)) {
            return;
        }
        if (type === "number") {
            value += "px";
        }
        try {
            style[name] = value;
        }
        catch (e) {

        }
    }
}
//保留两位小数
function numFmt(text) {
    var reg = new RegExp("^\\-?([1-9]\\d*|0)(\\.\\d{0,2})?$");
    if (text.value.length && !reg.test(text.value)) {
        text.value = text.value.substring(0, text.value.length - 1);
        return false;
    }
    if (text.value == "") {
        text.value = 0;
        text.select();
    }
    return true;
}

//回车转换
function KeyTrans() {
    if (event.keyCode == "13") {
        //不为按钮,提交按钮,文本域,自动完成框
        if (!(event.srcElement.type == "button"
        || event.srcElement.type == "submit"
        || event.srcElement.type == "textarea"
        || event.srcElement.t == "AutoSuggest"
        )) {
            //event.keyCode = "9";
            var ctlFrom = event.srcElement.form;
            if (typeof ctlFrom != 'undefined') {
                var nextCtr = nextCtl(event.srcElement);
                if (nextCtr == event.srcElement) {
                    event.srcElement.blur();
                }
                else {
                    nextCtr.focus();
                }
            }
        }
    }
}

function nextCtl(ctl) {
    var form = ctl.form;
    for (var i = 0; i < form.elements.length; i++) {
        if (ctl == form.elements[i]) {
            for (var j = i + 1; j < form.elements.length; j++) {
                var nextCtr = form.elements[j];
                if (isVisible(nextCtr) && !nextCtr.disabled && nextCtr.getAttribute("tabindex") != '-1') {
                    return nextCtr;
                }
            }
        }
    }
    return ctl;
}

/**************************************************/
/**************************************************/
/*判断当前对象是否可见*/
function isVisible(obj) {
    var visAtt, disAtt, height, type;
    try {
        height = obj.offsetHeight;
        type = obj.type;
        disAtt = obj.style.display;
        visAtt = obj.style.visibility;
    } catch (e) { }
    if (disAtt == "none" || visAtt == "hidden" || height == 0 || type == 'hidden')
        return false;
    return true;
}
/*判断当前对象及其父对象是否可见*/
function checkPrVis(obj) {
    var pr = obj.parentNode;
    do {
        if (pr == undefined || pr == "undefined") return true;
        else {
            if (!isVisible(pr)) return false;
        }
    } while (pr = pr.parentNode);
    return true;
}

/* 弹出警告对话框，用户点确定后将光标置于出错文本框上， 并且将原来输入内容选中。*/
function f_alert(obj, alertInfo) {
    alert(alertInfo);
    obj.select();
    if (isVisible(obj) && checkPrVis(obj))
        obj.focus();
}


//比较时间 格式 yyyy-mm-dd hh:mi:ss
function comptime(beginTime, endTime) {
    var beginTimes = beginTime.substring(0, 10).split('-');
    var endTimes = endTime.substring(0, 10).split('-');

    beginTime = beginTimes[1] + '-' + beginTimes[2] + '-' + beginTimes[0] + ' ' + beginTime.substring(10, 19);
    endTime = endTimes[1] + '-' + endTimes[2] + '-' + endTimes[0] + ' ' + endTime.substring(10, 19);

    var a = (Date.parse(endTime) - Date.parse(beginTime)) / 3600 / 1000;

    if (a < 0) {
        return -1;
    } else if (a > 0) {
        return 1;
    } else if (a == 0) {
        return 0;
    } else {
        return 'exception'
    }

}

/*
* 判断是否为数字，是则返回true,否则返回false
*/
function f_check_number(obj) {
    if (/^\d+$/.test(obj.value)) {
        return true;
    }
    else {
        f_alert(obj, "请输入数字!");
        return false;
    }
}

/*
* 判断是否为自然数，是则返回true,否则返回false
*/
function f_check_naturalnumber(obj) {
    var s = obj.value;
    if (/^[0-9]+$/.test(s) && (s > 0)) {
        return true;
    }
    else {
        f_alert(obj, "请输入自然数");
        return false;
    }
}



//判断是否为数字，是则返回true,否则返回false
function f_check_integer(obj) {
    if (/^(\+|-)?\d+$/.test(obj.value)) {
        return true;
    }
    else {
        f_alert(obj, "请输入整数!");
        return false;
    }
}


//判断是否为实数，是则返回true,否则返回false 
function f_check_float(obj) {
    if (/^(\+|-)?\d+($|\.\d+$)/.test(obj.value)) {
        return true;
    }
    else {
        f_alert(obj, "请输入实数!");
        //obj.value=0;
        return false;
    }
}
//------------------------------------------------------只能输入 实数 但是可以输入负数 。。。囧---------------------


//防止粘贴非数据内容
function fix_clipboard(para_obj) {
    para_obj.value = clipboardData.getData('text'); //用变量获得剪切版内容
    numberonly(para_obj);                         //数字化变量
    return false;                                //粘帖事件false
}

//求str1在str2中出现的次数 count_str_f()
function count_str_f(str1, str2) {
    //定义两个局部变量ln1,ln2,并分别赋予它们串1和串2的长度 
    var ln1 = str1.length;
    var ln2 = str2.length;
    //如果串1的长度大于串2则返回0
    if (ln1 > ln2) {
        return 0;
    }
    else {
        //定义两个局部变量i,a，其中i作为循环指数，a作为累加数，初值为0
        var i;
        var a = 0;
        for (i = 1; i <= ln2 - ln1 + 1; i++) {
            if (str2.substring(i - 1, i + ln1 - 1) == str1) {
                a = a + 1;
            }
        }
        return a;
    }
}


//求第n次出现子串的位置
function find_sub_string(para_str, para_sub_str, para_n) {
    var a = 0;
    var i;
    var ln_str = para_str.length;
    var ln_sub_str = para_sub_str.length;
    //如果串1的长度大于串2则返回0
    if (ln_sub_str > ln_str) {
        return -1;
    }
    for (i = 1; i <= para_str.length; i++) {
        if (para_str.substring(i - 1, i + ln_sub_str - 1) == para_sub_str) {
            a = a + 1;
        }
        if (a == para_n) {
            return i - 1;
        }
    }
}


//从para_obj对象内容中第para_local位开始查找并选中para_sub_str子串
function find_and_select(para_obj, para_sub_str, para_local) {
    var txt, i, found;
    txt = para_obj.createTextRange();
    for (i = 0; i <= para_local; i++) {
        txt.moveStart("character", 1);
        txt.moveEnd("textedit");

    }
    txt.moveStart("character", -1);
    txt.findText(para_sub_str);
    txt.select();
}

//去除para_obj对象内容中的非数字因素
function numberonly(para_obj) {
    //如果首两位值为-.则将首两位-.代成-0.
    if (para_obj.value.substring(0, 2) == "-.") {
        para_obj.value = para_obj.value.replace(/\-\./g, "-0.");
    }




    //如果是退格键且未尾为.,去除未尾的.
    if (window.event.keyCode == 8 && para_obj.value.substring(para_obj.value.length - 1, para_obj.value.length) == ".") {
        para_obj.value = para_obj.value.substring(0, para_obj.value.length - 1);
    }

    //如果是退格键且值为-,置为0,并选中零
    if (window.event.keyCode == 8 && para_obj.value == "-") {
        para_obj.value = "0";
        find_and_select(para_obj, "0", 0);
        return;
    }


    //因为isnumeric(0.1,,,,+)会返回true,所以必须去掉","和"+"
    if (para_obj.value.indexOf(",") >= 0) {
        para_obj.value = para_obj.value.replace(/\,/g, "");
    }
    if (para_obj.value.indexOf("+") >= 0) {
        para_obj.value = para_obj.value.replace(/\+/g, "");
    }

    //去除非第一位的所有减号
    if (para_obj.value.length > 1) {
        var temp_str;
        temp_str = para_obj.value.substring(1, para_obj.value.length);
        if (temp_str.indexOf("-") != -1) {
            para_obj.value = para_obj.value.substring(0, 1) + temp_str.replace(/\-/g, "");
        }
    }

    //如果表单值大于2位,且(首两位为-0,首三位不为-0.),去除第二位,即去除0
    if (para_obj.value.length > 2 && para_obj.value.substring(0, 2) == "-0" && para_obj.value.substring(0, 3) != "-0.") {
        para_obj.value = "-" + para_obj.value.substring(2, para_obj.value.length);
    }
    //如果表单值为空,置零并选中零
    if (para_obj.value == null || para_obj.value == "") {
        para_obj.value = "0";
        find_and_select(para_obj, "0", 0);
        return;
    }

    //初始化表单长度
    para_max_ln = para_obj.maxLength;             //文本框最大输入长度
    if (para_max_ln == null || para_max_ln == "" || para_max_ln > 30) {   //设置默认长度为30
        para_max_ln = 30;
    }

    //将" "置""
    if (para_obj.value.indexOf(" ") != -1) {
        para_obj.value = para_obj.value.replace(/\s/g, "");
    }

    //如果值的长度大于默认长度,出现提示
    if (para_obj.value.length > para_max_ln) {
        para_obj.value = '';
        alert('内容长度超过文本框最大的输入长度' + para_max_ln + '个字符');
        return;
    }




    obj_val = para_obj.value;
    obj_ln = obj_val.length;
    is_not_number = isNaN(para_obj.value);                             //不是数字标记

    is_point_outer = (obj_val.substring(0, 1) == "." || obj_val.substring(obj_ln - 1, obj_ln) == ".");       //首位未位为点标记
    is_more_zero = (obj_val.substring(0, 1) == "0" && obj_val.substring(1, 2) != "." && obj_ln > 1);         //存在多余的零标记(首位为零次位不为点)

    if (is_not_number || is_point_outer || is_more_zero) {       // 如果(不是数字) or (首位未位为点),or (存在多余的零) 作以下处理)


        //将所有非法字符代空
        para_obj.value = para_obj.value.replace(/[^\d.-]/gi, "");


        //去除多余的零---从左到右扫描串,去除右边不为.的首个0
        ln = para_obj.value.length;
        for (i = 0; i < ln; i++) {
            if (para_obj.value.substring(0, 1) == "0" && para_obj.value.substring(1, 2) != "." && para_obj.value.length > 1) { //如果首位为0,次位不为点,长度大于1,去除首位
                para_obj.value = para_obj.value.substring(1, para_obj.value.length);
            }
        }


        //如第一位为. 后边没数 置0.0 并选择0 退出function  后边有数,前边加"0"并选中"0"
        if (para_obj.value.substring(0, 1) == ".") {
            if (para_obj.value.length == 1) {
                para_obj.value = "0.0";
                find_and_select(para_obj, "0", 2);
                return;
            }
            else {
                para_obj.value = "0" + para_obj.value;
                find_and_select(para_obj, "0", 0);
            }
        }


        //如果.数不只1个去除第二个.及其后的所有内容
        if (count_str_f(".", para_obj.value) > 1) {
            point_local = find_sub_string(para_obj.value, ".", 2);
            para_obj.value = para_obj.value.substring(0, point_local);
        }

        //如果未位为.  长度未达到para_max_ln-1 代.为.0并选中0  长度达到则去除最后一位,并提示本文框最长支持para_max_ln个字符
        if (para_obj.value.substring(para_obj.value.length - 1, para_obj.value.length) == ".") {
            if (para_obj.value.length <= para_max_ln - 1) {
                para_obj.value = para_obj.value.replace(/\./g, ".0");
                find_and_select(para_obj, "0", para_obj.value.length - 1);
            }
            else {
                para_obj.value = para_obj.value.substring(0, para_obj.value.length - 1);
                alert("由于该文本框最大的输入长度为" + para_max_ln + "个字符,因此这里没法插入小数点");
            }
        }

        //如果表单值为"-",变"-"号为"-0"并选中0
        if (para_obj.value == "-") {
            para_obj.value = "-0";
            find_and_select(para_obj, "0", 0);
        }

    }

    if (para_obj.value == null || para_obj.value == "") {
        para_obj.value = 0;
    }
}

function inputfocus(obj) {
    obj.select();
}
//--------------------------------------------------------------------------------


//数值框(只能输入实数):<input name="text1" onkeyup='javascript:numberonly(document.form.text1)' onblur='javascript:document.form.text1.value=document.form.text1.value.replace(/\s/g,"")'  //onpaste='javascript:return fix_clipboard(this)'>


/*
用途：检查输入字符串是否只由汉字组成
如果通过验证返回true,否则返回false
*/
function f_check_zh(obj) {
    if (/^[\u4e00-\u9fa5]+$/.test(obj.value)) {
        return true;
    }
    f_alert(obj, "请输入汉字!");
    return false;
}


/*
* 判断是否为小写英文字母，是则返回true,否则返回false
*/
function f_check_lowercase(obj) {
    if (/^[a-z]+$/.test(obj.value)) {
        return true;
    }
    f_alert(obj, "请输入小写英文字母!");
    return false;
}


/*
* 判断是否为大写英文字母，是则返回true,否则返回false
*/
function f_check_uppercase(obj) {
    if (/^[A-Z]+$/.test(obj.value)) {
        return true;
    }
    f_alert(obj, "请输入大写英文字母!");
    return false;
}


/*
* 判断是否为英文字母，是则返回true,否则返回false
*/
function f_check_letter(obj) {
    if (/^[A-Za-z]+$/.test(obj.value)) {
        return true;
    }
    f_alert(obj, "请输入英文字母!");
    return false;
}


/*
用途：校验ip地址的格式
输入：strIP：ip地址
返回：如果通过验证返回true,否则返回false；
*/
function f_check_IP(obj) {
    var re = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/; //匹配IP地址的正则表达式  
    if (re.test(obj.value)) {
        if (RegExp.$1 < 256 && RegExp.$2 < 256 && RegExp.$3 < 256 && RegExp.$4 < 256) return true;
    }
    f_alert(obj, "请输入合法的计算机IP地址!");
    return false;
}


/*
用途：检查输入对象的值是否符合网址格式
输入：str 输入的字符串
返回：如果通过验证返回true,否则返回false
*/
function f_check_URL(obj) {
    var myReg = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    if (myReg.test(obj.value)) return true;
    f_alert(obj, "请输入合法的网页地址!");
    return false;
}


/*
用途：检查输入对象的值是否符合E-Mail格式
输入：str 输入的字符串
返回：如果通过验证返回true,否则返回false
*/
function f_check_email(obj) {
    var myReg = /^[-_a-zA-Z0-9]+@([-_a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,3}$/;
    //var myReg = /^([-_A-Za-z0-9\.]+)@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/;   
    if (myReg.test(obj.value)) return true;
    f_alert(obj, "请输入合法的电子邮件地址!");
    return false;
}


/*
功能：判断是否为日期(格式:yyyy年MM月dd日,yyyy-MM-dd,yyyy/MM/dd,yyyyMMdd)
提示信息：未输入或输入的日期格式错误！
使用：f_check_date(obj)
返回：bool
*/
function f_check_date(obj) {
    var date = Trim(obj.value);
    var format = "yyyy-MM-dd";  //日期格式  
    var year, month, day, datePat, matchArray;

    if (/^(y{4})(-|\/)(M{1,2})\2(d{1,2})$/.test(format))
        datePat = /^(\d{4})(-|\/)(\d{1,2})\2(\d{1,2})$/;
    else if (/^(y{4})(年)(M{1,2})(月)(d{1,2})(日)$/.test(format))
        datePat = /^(\d{4})年(\d{1,2})月(\d{1,2})日$/;
    else if (format == "yyyyMMdd")
        datePat = /^(\d{4})(\d{2})(\d{2})$/;
    else {
        f_alert(obj, "日期格式不对!\n(合法格式:yyyy-MM-dd)");
        return false;
    }
    matchArray = date.match(datePat);
    if (matchArray == null) {
        f_alert(obj, "日期长度不对,或日期中有非数字符号!\n(合法格式:yyyy-MM-dd)");
        return false;
    }
    if (/^(y{4})(-|\/)(M{1,2})\2(d{1,2})$/.test(format)) {
        year = matchArray[1];
        month = matchArray[3];
        day = matchArray[4];
    } else {
        year = matchArray[1];
        month = matchArray[2];
        day = matchArray[3];
    }
    if (month < 1 || month > 12) {
        f_alert(obj, "月份应该为1到12的整数!");
        return false;
    }
    if (day < 1 || day > 31) {
        f_alert(obj, "每个月的天数应该为1到31的整数!");
        return false;
    }
    if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 31) {
        f_alert(obj, "该月不存在31号!");
        return false;
    }
    if (month == 2) {
        var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
        if (day > 29) {
            f_alert(obj, "2月最多有29天!");
            return false;
        }
        if ((day == 29) && (!isleap)) {
            f_alert(obj, "闰年2月才有29天!");
            return false;
        }
    }
    return true;
}


/*
功能：校验的格式为yyyy年MM月dd日HH时mm分ss秒,yyyy-MM-dd HH:mm:ss,yyyy/MM/dd HH:mm:ss,yyyyMMddHHmmss
提示信息：未输入或输入的时间格式错误
使用：f_check_time(obj)
返回：bool
*/
function f_check_time(obj) {
    var time = Trim(obj.value);
    time = time + ":00";
    var format = "yyyy-MM-dd HH:mm:ss";  //日期格式  
    var datePat, matchArray, year, month, day, hour, minute, second;

    if (/^(y{4})(-|\/)(M{1,2})\2(d{1,2}) (HH:mm:ss)$/.test(format))
        datePat = /^(\d{4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/;
    else if (/^(y{4})(年)(M{1,2})(月)(d{1,2})(日)(HH时mm分ss秒)$/.test(format))
        datePat = /^(\d{4})年(\d{1,2})月(\d{1,2})日(\d{1,2})时(\d{1,2})分(\d{1,2})秒$/;
    else if (format == "yyyyMMddHHmmss")
        datePat = /^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/;
    else {
        f_alert(obj, "日期格式不对!\n(合法格式:yyyy-MM-dd HH:mm)");
        return false;
    }
    matchArray = time.match(datePat);
    if (matchArray == null) {
        f_alert(obj, "日期长度不对,或日期中有非数字符号!\n(合法格式:yyyy-MM-dd HH:mm)");
        return false;
    }
    if (/^(y{4})(-|\/)(M{1,2})\2(d{1,2}) (HH:mm:ss)$/.test(format)) {
        year = matchArray[1];
        month = matchArray[3];
        day = matchArray[4];
        hour = matchArray[5];
        minute = matchArray[6];
        second = matchArray[7];
    } else {
        year = matchArray[1];
        month = matchArray[2];
        day = matchArray[3];
        hour = matchArray[4];
        minute = matchArray[5];
        second = matchArray[6];
    }
    if (month < 1 || month > 12) {
        f_alert(obj, "月份应该为1到12的整数");
        return false;
    }
    if (day < 1 || day > 31) {
        f_alert(obj, "每个月的天数应该为1到31的整数");
        return false;
    }
    if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 31) {
        f_alert(obj, "该月不存在31号");
        return false;
    }
    if (month == 2) {
        var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
        if (day > 29) {
            f_alert(obj, "2月最多有29天");
            return false;
        }
        if ((day == 29) && (!isleap)) {
            f_alert(obj, "闰年2月才有29天");
            return false;
        }
    }
    if (hour < 0 || hour > 23) {
        f_alert(obj, "小时应该是0到23的整数");
        return false;
    }
    if (minute < 0 || minute > 59) {
        f_alert(obj, "分应该是0到59的整数");
        return false;
    }
    if (second < 0 || second > 59) {
        f_alert(obj, "秒应该是0到59的整数");
        return false;
    }
    return true;
}

/**
* 检测字符串是否为空
*/
function isnull(str) {
    var i;
    if (str.length == 0)
        return true;
    for (i = 0; i < str.length; i++) {
        if (str.charAt(i) != ' ')
            return false;
    }
    return true;
}
/**
* 检测字符串是否为空,并且弹出提示。
*/
function isNulls(id, name) {
    if (document.getElementById(id).value == "") {
        alert(name + "不能为空！请输入！");
        setTimeout("document.getElementById('" + id + "').focus();", 0);
        return false;
    } else {
        return true;
    }
}
/**
* 检测数字是否为正实数,并且弹出提示。
*/
function PNum(id, name, pram) {
    var plan = parseFloat(document.getElementById(id).value);
    if (plan < 0) {
        alert(name + "不能为负数！请输入正实数！");
        setTimeout("document.getElementById('" + id + "').focus();", 0);
        return false;
    } else if (plan == 0) {
        if (pram == 1) {
            alert(name + "不能为0！请输入正实数！");
            setTimeout("document.getElementById('" + id + "').focus();", 0);
            return false;
        } else {
            return true;
        }
    } else {
        return true;
    }
}

/*根据日期格式，将字符串转换成Date对象。
格式：yyyy-年，MM-月，dd-日，HH-时，mm-分，ss-秒。
（格式必须写全，例如:yy-M-d，是不允许的，否则返回null；格式与实际数据不符也返回null。）
默认格式：yyyy-MM-dd HH:mm:ss,yyyy-MM-dd。*/
function getDateByFormat(str) {
    var dateReg, format;
    var y, M, d, H, m, s, yi, Mi, di, Hi, mi, si;
    if ((arguments[1] + "") == "undefined") format = "yyyy-MM-dd HH:mm:ss";
    else format = arguments[1];
    yi = format.indexOf("yyyy");
    Mi = format.indexOf("MM");
    di = format.indexOf("dd");
    Hi = format.indexOf("HH");
    mi = format.indexOf("mm");
    si = format.indexOf("ss");
    if (yi == -1 || Mi == -1 || di == -1) return null;
    else {
        y = parseInt(str.substring(yi, yi + 4));
        M = parseInt(str.substring(Mi, Mi + 2));
        d = parseInt(str.substring(di, di + 2));
    }
    if (isNaN(y) || isNaN(M) || isNaN(d)) return null;
    if (Hi == -1 || mi == -1 || si == -1) return new Date(y, M - 1, d);
    else {
        H = str.substring(Hi, Hi + 4);
        m = str.substring(mi, mi + 2);
        s = str.substring(si, si + 2);
    }
    if (isNaN(parseInt(y)) || isNaN(parseInt(M)) || isNaN(parseInt(d))) return new Date(y, M - 1, d);
    else return new Date(y, M - 1, d, H, m, s);
}

/*Trim(string):去除字符串两边的空格*/
function Trim(str) {
    return RTrim(LTrim(str));
}

/*RTrim(string):去除右边的空格*/
function RTrim(str) {
    var whitespace = new String(" \t\n\r");
    var s = new String(str);

    if (whitespace.indexOf(s.charAt(s.length - 1)) != -1) {
        var i = s.length - 1;
        while (i >= 0 && whitespace.indexOf(s.charAt(i)) != -1) {
            i--;
        }
        s = s.substring(0, i + 1);
    }
    return s;
}

/*LTrim(string):去除左边的空格*/
function LTrim(str) {
    var whitespace = new String(" \t\n\r");
    var s = new String(str);

    if (whitespace.indexOf(s.charAt(0)) != -1) {
        var j = 0, i = s.length;
        while (j < i && whitespace.indexOf(s.charAt(j)) != -1) {
            j++;
        }
        s = s.substring(j, i);
    }
    return s;
}
//提示信息
function ShowMsg(strmsg) {
    if (strmsg.indexOf("没有查出任何数据") > -1) {
    }
    else if (strmsg.indexOf("服务器无响应") > -1) {
    }
    else {
        alert(strmsg);
    }
}
/**
* 获取光标所在的字符位置
* @param obj 要处理的控件, 支持文本域和输入框
*/
function getCursorPosition(obj) {
    var result = 0;
    if (obj.selectionStart) { //非IE浏览器
        result = obj.selectionStart;
    } else { //IE
        var rng;
        if (obj.tagName == "TEXTAREA") { //如果是文本域
            rng = event.srcElement.createTextRange();
            rng.moveToPoint(event.x, event.y);
        } else { //输入框
            rng = document.selection.createRange();
        }
        rng.moveStart("character", -event.srcElement.value.length);
        result = rng.text.length;
    }
    return result;
}
//处理回车
function keydowngo() {
    //Right
    if (event.keyCode == 39) {
        if (event.srcElement.type == "textarea" || event.srcElement.type == "text") {
            if (getCursorPosition(event.srcElement) == event.srcElement.value.length) {
                event.keyCode = 9;
            }
        }
        else { event.keyCode = 9; }

        return true;
    }

    if (event.keyCode == "13") {
        //不为按钮,提交按钮,文本域,自动完成框
        if (!(event.srcElement.type == "button" || event.srcElement.type == "submit" || event.srcElement.type == "textarea")) {
            event.keyCode = "9";
        }
    }
}
function keyupgo(collength) {
    key = window.event.keyCode;
    if (key != 37 && key != 38 && key != 40) {
        return true;
    }

    var obj = event.srcElement;
    if (obj.type == "HIDDEN" || obj.tagName != "INPUT") {
        return true;
    }

    var ctlfrom = obj.id.split('$');
    if (ctlfrom.length != 3) {
        return true;
    }

    var rownum = parseInt(ctlfrom[1]);
    var colnum = parseInt(ctlfrom[2]);
    var ctlto;
    var ctlobj;
    if (key == 38) {//up
        rownum = rownum - 1;
        if (rownum > 0) {
            ctlto = ctlfrom[0] + "$" + rownum + "$" + colnum;
            ctlobj = document.getElementById(ctlto);
            if (ctlobj != null) {
                ctlobj.select();
            }
        }

        return true;
    }
    if (key == 40) {//down
        rownum = rownum + 1;
        if (rownum > 0) {
            ctlto = ctlfrom[0] + "$" + rownum + "$" + colnum;
            ctlobj = document.getElementById(ctlto);
            if (ctlobj != null) {
                ctlobj.select();
            }
        }
        return true;
    }

    if (key == 37) {//←left
        var bt = 0;
        if (event.srcElement.type == "textarea" || event.srcElement.type == "text") {
            if (getCursorPosition(obj) == 0) {
                bt = 1;
            }
        }
        else {
            bt = 1;
        }
        if (bt == 0) return true;

        colnum = colnum - 1;
        while (ctlobj == null) {
            if (colnum < 1) {
                rownum = rownum - 1;
                colnum = collength;
            }
            ctlto = ctlfrom[0] + "$" + rownum + "$" + colnum;
            ctlobj = document.getElementById(ctlto);
            if (ctlobj != null) {
                var pdobj = ctlobj.id.split('$');
                if (pdobj.length != 3) {
                    ctlobj = null;
                }
            }
            if (rownum < 1) {
                break;
            }
            colnum = colnum - 1;
        }

        if (ctlobj != null) {
            ctlobj.select();
        }

        return true;
    }
}

function rdoClick(obj, id) {
    if (!id) {
        $J('hid_' + obj.name).value = obj.value;
    }
    else {
        $J(id).value = obj.value;
    }
}
function ChangeDisplayAll(e, divid) {
    var strsrc = e.src;
    var arr = divid.split(',');
    e.src = strsrc.replace("down.gif", "up.gif");
    e.alt = "显示详细资料";
    for (var i = 0; i < arr.length; i++) {
        document.getElementById(arr[i]).style.display = "";
    }
}

function ChangeDisplayNoneAll(e, divid) {
    var strsrc = e.src;
    var arr = divid.split(',');
    e.src = strsrc.replace("up.gif", "down.gif");
    e.alt = "隐藏详细资料";
    for (var i = 0; i < arr.length; i++) {
        document.getElementById(arr[i]).style.display = "none";
    }
}

function OpenHelpWin(PageCode) {
    var url = "../../WFSys/csp/WFSys.dll?page=HelpInfo&pcmd=init&TH=660&TW=700&pagecode=" + PageCode; //&sa=xxx&MC=0
    RXWindowOpen(url, PageCode, '', 700, 660, 0);
    //window.open(url,PageCode,'','');	
}

function OpenFeedBackWin(PageCode, m_id) {
    if (!m_id) m_id = GetQueryString('m_id');
    //var url = "../../WFSys/csp/WFSys.dll?page=FeedBack&pcmd=init&TH=300&TW=700&pagecode=" + PageCode+"&m_id="+m_id+"&sessionkey="+GetQueryString('sessionkey');//&sa=xxx&MC=0
    var url = "../../rxDeskTop/csp/rxDeskTop.dll?page=SYS09AA&pcmd=init&TH=600&TW=900&apSite=WorkNet&pageCode=" + PageCode + "&nckKey=1&m_id=" + m_id + "&sessionkey=" + GetQueryString('sessionkey');
    var sceoOpts = {
        title: "填写建议",
        winLevel: -1,
        modal: false,
        isCoverTaskbar: false
    };
    RXWindowOpen(url, PageCode, '', 900, 600, 0, sceoOpts);
}
function OpenHelpWindow(m_id) {
    var url = "../../WFSys/csp/WFSys.dll?page=PublicFunction_Page&pcmd=GetHelpWord";
    url += "&heldId=" + m_id;

    var httpRet = AjaxHttpGet(url);

    if (httpRet != "") {
        var xml = Xparse(httpRet);
        if (xml.getValueByName("error") != "") {
            url = "../../WFSys/csp/WFSys.dll?page=HelpFile&pcmd=init&kind=view&uu=123&TW=900&TH=600";
        }
        else {
            url = xml.getValueByName("url");
            url += "?kind=view&uu=123&TW=900&TH=600";
            //window.open(url)
        }
    }
    RXWindowOpen(url, '', '', 900, 600, 0);
}

//增加函数 卢小山
//取第一个节点 n:node节点对象
function getFirstChild(n) {
    var y = n.firstChild;
    while (y.nodeType != 1) {
        y = y.nextSibling;
    }
    return y;
}

//取最后一个节点
function getLastChild(n) {
    if (n.lastElementChild) {
        return n.lastElementChild;
    }
    else {
        return n.lastChild;
    }

}

//_thisObj:触发标签this对象 leftTDId：左侧面板TD的ID，width:左侧面板宽度
function hideLeftPanel(_thisObj, leftTDId, width) {
    var defaultWidth = 200;    //默认宽度
    if (typeof width === 'undefined') {
        width = defaultWidth;
    }
    var leftTd = $J(leftTDId);
    if (!_thisObj.isShow) { _thisObj.isShow = 0; }
    if (_thisObj.isShow == 0) {
        _thisObj.isShow = 1;
        leftTd.style.width = 0;
        var firstChild = getFirstChild(leftTd);
        firstChild.style.width = 0;
        firstChild.style.display = 'none';
        var secChild = nextElement(firstChild);
        if (secChild) { secChild.style.width = 0; secChild.style.display = 'none'; }
        if (autoheight_Gridview && typeof autoheight_Gridview == "function") {
            autoheight_Gridview();
        }
    }
    else {
        _thisObj.isShow = 0;
        leftTd.style.width = width;
        var firstChild = getFirstChild(leftTd);
        firstChild.style.display = 'block';
        firstChild.style.width = width;
        var secChild = nextElement(firstChild);
        if (secChild) { secChild.style.width = width; secChild.style.display = 'block'; }

        if (autoheight_Gridview && typeof autoheight_Gridview == "function") {
            autoheight_Gridview();
        }
    }
}

//_thisObj:触发标签this对象 bottomTRId：底层面板TD的ID，height:底层面板高度面板
function hideBottomPanel(_thisObj, bottomTRId, height) {
    var defaultHeight = 200;    //默认宽度
    if (typeof height === 'undefined') {
        height = defaultHeight;
    }
    var bottomTR = $J(bottomTRId);
    if (!_thisObj.isShow) { _thisObj.isShow = 0; }
    if (_thisObj.isShow == 0) {
        _thisObj.isShow = 1;
        bottomTR.style.height = 0;
        var firstChild = getFirstChild(bottomTR);
        firstChild.style.height = 0;
        var secChild = getFirstChild(firstChild);
        if (secChild) secChild.style.height = 0;
        if (autoheight_Gridview && typeof autoheight_Gridview == "function") {
            autoheight_Gridview();
        }
    }
    else {
        _thisObj.isShow = 0;
        bottomTR.style.height = height;
        var firstChild = getFirstChild(bottomTR);
        firstChild.style.height = height;
        var secChild = getFirstChild(firstChild);
        if (secChild) secChild.style.height = height;

        if (autoheight_Gridview && typeof autoheight_Gridview == "function") {
            autoheight_Gridview();
        }
    }
}

//页面内查找并选中
var findText_n = 0;
function findTextInPage(str) {
    var DOM = (document.getElementById) ? 1 : 0;
    var IE4 = 0;
    if (document.all) {
        IE4 = 1;
        DOM = 0;
    }
    var txt, i, found;
    if (str == "") { return false; }
    if (DOM) {
        window.find(str, false, true);
        return true;
    }
    if (IE4) {
        txt = window.document.body.createTextRange();
        for (i = 0; i <= findText_n && (found = txt.findText(str)) != false; i++) {
            txt.moveStart("character", 1);
            txt.moveEnd("textedit");
        }
        if (found) {
            txt.moveStart("character", -1);
            txt.findText(str);
            txt.select();
            txt.scrollIntoView();
            findText_n++;
        }
        else {
            if (findText_n > 0) {
                findText_n = 0;
                findTextInPage(str);
            }
            else {
                //alert("未找到指定内容.");
            }
        }
    }
    return false;
}

//----取得select下拉列表选择文本和值
function getSelected(selObj) {
    var _txt = '';
    var _val = '';
    var index = selObj.selectedIndex; // 选中索引
    if (index != -1) {
        _val = selObj.options[index].value; // 选中值
        _txt = selObj.options[index].text; // 选中文本
    }

    return { text: _txt, value: _val };
}

//相邻下一节点对象
function nextElement(_element) {
    if (!_element.nextSibling) return null;
    //if(!document.all){
    while (true) {
        if (_element.nextSibling) {
            if (_element.nextSibling.nodeType == 1) {
                break;
            } else {
                _element = _element.nextSibling;
            }
        } else {
            break;
        }
    }
    //}
    return _element.nextSibling;
}
//相邻下一节点对象
function prevElement(_element) {
    if (!_element.previousSibling) return null;
    //if(!document.all){
    while (true) {
        if (_element.previousSibling) {
            if (_element.previousSibling.nodeType == 1) {
                break;
            } else {
                _element = _element.previousSibling;
            }
        } else {
            break;
        }
    }
    //}
    return _element.previousSibling;
}

//获取节点对象的子节点
function getChildNodes(element) {
    var _cNodes = new Array();
    var _childNodes = element.childNodes;
    for (var i = 0; i < _childNodes.length; i++) {
        if (_childNodes[i].nodeType == 1) {
            _cNodes.push(_childNodes[i]);
        }
    }
    return _cNodes;
}
//获取父节点;
function getParentNode(element) {
    var _pNode = element.parentNode;
    while (_pNode.nodeType != 1) {
        _pNode = _pNode.parentNode;
    }
    return _pNode;
}

//删除节点
function removeNode(element) {
    var parentNode = getParentNode(element);
    parentNode.removeChild(element);
}

//动态创建标签对象
function createElement(type) {
    var ne = false;
    try {
        ne = document.createElement(type);
    }
    catch (ex) {
        type = trim(trim(type).replace(/^<|\/?\s*>$/g, ""));
        var a = type.split(/\s+/);
        ne = document.createElement(a[0]);
        if (a.length > 1) {
            type.replace(/(\w+)=([^\s\'\"]+)|(\w+)=\'([^\']+)\'|(\w+)=\"([^\"]+)\"/g, function(v, v1, v2, v3, v4, v5, v6) {
                ne.setAttribute(v1 || v3 || v5, v2 || v4 || v6);
            });
        }
    }

    if (!ne) {
        return false;
    }
    return ne;
}
//添加事件监听
function addEventHandler(element, type, handler) {
    if (element.addEventListener) {
        element.addEventListener(type, handler, false);
    }
    else if (element.attachEvent) {
        element.attachEvent("on" + type, handler);
    }
    else {
        element["on" + type] = handler;
    }
}

//根据name查找子元素
function getEByName(pElement, childName, tagName) {
    var targetTag = [];
    if (typeof tagName == "undefined") {
        targetTag[0] = "input";
    }
    else {
        if (typeof tagName == "string") {
            targetTag[0] = tagName;
        }
        else if (typeof tagName == "object") {
            targetTag = tagName;
        }
        else {
            targetTag[0] = "input";
        }
    }
    var elementObj = null;
    var children = pElement.getElementsByTagName(targetTag[0]);

    for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (child.name == childName) {
            elementObj = child;
            break;
        }
    }
    if (!elementObj && typeof targetTag[1] != 'undefined') {
        elementObj = getEByName(pElement, childName, targetTag[1]);
    }

    return elementObj;
}

//交换节点
//调用：if (navigator.userAgent.indexOf('MSIE') > 0) this.swapNode(curTr); else swapNode(this, curTr);
function swapNode(node1, node2) {
    var parent = node1.parentNode; //父节点
    var t1 = node1.nextSibling; //两节点的相对位置
    var t2 = node2.nextSibling;

    //如果是插入到最后就用appendChild
    if (t1) parent.insertBefore(node2, t1);
    else parent.appendChild(node2);
    if (t2) parent.insertBefore(node1, t2);
    else parent.appendChild(node1);
}

function setUserCache() {
    try {
        if (typeof (pageControlsCache) == "undefined" || pageControlsCache == null) return;

        for (var theKey in pageControlsCache) {
            if (typeof ($J(theKey)) != "undefined" && $J(theKey) != null && $J(theKey).getAttribute("nocache") == null) {
                try {
                    $J(theKey).value = pageControlsCache[theKey];
                }
                catch (e)
                { }
            }
        }

        if (typeof (pageDeptCache) == "undefined" || pageDeptCache == null || pageDeptCache == "") return;

        if (typeof ($J("cc_code")) != "undefined" && $J("cc_code") != null) {
            $J("cc_code").value = pageDeptCache["cc_code"];
        }

        if (typeof ($J("cc_desc")) != "undefined" && $J("cc_desc") != null) {
            $J("cc_desc").value = pageDeptCache["cc_desc"];
        }

        for (idx = 0; idx < 10; idx++) {
            if (typeof ($J("cc_code" + idx)) != "undefined" && $J("cc_code" + idx) != null) {
                $J("cc_code" + idx).value = pageDeptCache["cc_code"];
            }

            if (typeof ($J("cc_desc" + idx)) != "undefined" && $J("cc_desc" + idx) != null) {
                $J("cc_desc" + idx).value = pageDeptCache["cc_desc"];
            }
        }
    }
    catch (e) {
    }
}

///全角空格为12288，半角空格为32 
///其他字符半角(33-126)与全角(65281-65374)的对应关系是：均相差65248 
//半角转换为全角函数
function ToDBC(txtstring) {
    var tmp = "";
    for (var i = 0; i < txtstring.length; i++) {
        if (txtstring.charCodeAt(i) == 32) {
            tmp = tmp + String.fromCharCode(12288);
        }
        if (txtstring.charCodeAt(i) < 127) {
            tmp = tmp + String.fromCharCode(txtstring.charCodeAt(i) + 65248);
        }
    }
    return tmp;
}
//全角转换为半角函数
function ToCDB(str) {
    var tmp = "";
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 65248 && str.charCodeAt(i) < 65375) {
            tmp += String.fromCharCode(str.charCodeAt(i) - 65248);
        }
        else {
            tmp += String.fromCharCode(str.charCodeAt(i));
        }
    }
    return tmp;
}
function OpenCustomerSys(custCode) {
    var isDeskTop = GetQueryString('isDeskTop') == '1' ? 1 : 0;
    var url = deskTop_svr + "rxDeskTop/csp/rxDeskTop.dll?page=SYS01AF&nckKey=1&isDeskTop=" + isDeskTop + "&custcode=" + custCode;
    if (isDeskTop == 0) {
        url += "&sessionkey=" + GetQueryString("sessionkey");
    }
    if (typeof shareAspnetSite !== "undefined" && shareAspnetSite !== "") {
        var p_url = encodeURIComponent(url);
        var url = shareAspnetSite + "TransferHandler.aspx?userid=" + custCode + "&TW=1200&TH=800&pageUrl=" + p_url;
    }
    window.open(url, '', 'left=0,top=0,width=' + (screen.availWidth - 10) + ',height=' + (screen.availHeight - 55) + ',fullscreen=yes,alwaysRaised=yes,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,directories=no,status=no');
}

/*************************************************
Function: fnGetFileType
Description: 获取文件类型
Input:  @filePath		 文件路径
Return: void
*************************************************/
function fnGetFileType(filePath) {
    var filetype = filePath.split('.');
    if (filetype.length < 2) {
        alert("文件路径中没有带扩展名");
    }
    else {
        return "." + filetype[filetype.length - 1];
    }

    return "";
}
/*************************************************
Function: fnDownLoadFile
Description: 下载文件方法
Input:  @filePath		    文件路径(文件服务器的相对路径)/请求Url地址
@fileSrv          文件服务器类型 0:文件服务器，1:PDM文件服务器
@isUrl            文件路径是否为Url地址;0:不是，1：是
@fileName         文件名
Return: void
*************************************************/
function fnDownLoadFile(filePath, fileSrv, isUrl, fileName, params) {
    if (typeof fileSrv == "undefined") { fileSrv = 0; }
    if (typeof isUrl == "undefined") { isUrl = 0; }
    if (typeof fileName == "undefined") { fileName = ""; }
    filePath = filePath.toLowerCase();
    var _url = "";
    var filetype = fnGetFileType(filePath);
    var brower = RXBrowserType();
    if (isUrl == 1) {
        _url = filePath;
    }
    else {
        _url = "../../RxAPI/csp/RxAPI.dll?page=FileDown&filePath=" + encodeURIComponent(filePath) + "&fileName=" + encodeURIComponent(fileName) + "&fileSrv=" + fileSrv + params + "&charset=UTF8&ts=" + new Date().getTime();
    }
    if (brower.chrome && isUrl != 1 && (filetype == ".pdf" || filetype == ".txt")) {
        window.open(_url);
    }
    else {
        if (typeof filePath != "undefined" && filePath != "") {
            var ifrdownload = document.getElementById("ifrdownload");
            if (!ifrdownload) {
                var ifr = document.createElement("iframe");
                ifr.id = "ifrdownload";
                ifr.name = "ifrdownload";
                ifr.style.display = "none";
                ifr.src = _url;
                document.body.appendChild(ifr);
            }
            else {
                ifrdownload.src = _url;
            }
        }
        else {
            alert("文件下载路径为空!");
        }
    }
}

/*************************************************
Function: fnUploadFile
Description: 上传文件方法
Input:  @upfileId		    上传控件ID 
@actionUrl		请求URL地址. 
@callBefore		请求前调用函数
Return: void
*************************************************/
function fnUploadFile(upfileId, actionUrl, callBefore) {
    var inputfile = document.getElementById(upfileId);
    if (!inputfile) {
        alert("Id为" + upfileId + "的对象不存在!"); return false;
    }
    if (typeof actionUrl == "undefined" || actionUrl == "") {
        alert("请指定文件上传的actionUrl"); return false;
    }
    if (inputfile.type.toUpperCase() != "FILE") {
        alert("Id为" + upfileId + "控件类型不是file!"); return false;
    }
    var upfrm = inputfile.parentNode;
    if (upfrm.tagName.toUpperCase() != "FORM") {
        upfrm = document.forms[0];
        if (!upfrm) {
            alert("找不到form标签!");
            return false;
        }

    }
    if (inputfile.value == "") {
        alert("请选择上传文件!"); return false;
    }
    if (typeof callBefore == "function") {
        var r = callBefore(inputfile);
        if (typeof r != 'undefined' && r.toString() == 'false') {
            return false;
        }
    }
    var ifrupload = document.getElementById("ifrupload");
    if (!ifrupload) {
        var ifr = document.createElement("iframe");
        ifr.id = "ifrupload";
        ifr.name = "ifrupload";
        ifr.style.display = "none";
        document.body.appendChild(ifr);
    }
    if (upfrm) {
        inputfile.name = upfileId;
        upfrm.method = "POST";
        upfrm.target = "ifrupload";
        //upfrm.enctype = "multipart/form-data";
        upfrm.encoding = "multipart/form-data";
        upfrm.action = actionUrl + "&upfile=" + upfileId;
        upfrm.submit();
    }
}

/*************************************************
Function: fnUploadFileCallBack
Description: 文件上传方法回调函数
Input:  @upfileId		    上传控件ID 
@info		        回调信息
Return: void
*************************************************/
//function fnUploadFileCallBack(upfileId, info);

/*************************************************
Function: RXLocationHref
Description: 请求跳转页面方法,可替换参数
Input:  @rplObj		    传入参数对象
Return: void
Others:
假设当前页面的URL地址为: XXA.dll?page=RX01AA&mid=5&sessionkey=02f84hz7ZAg3yKp6PNWPUrOZCQMiDY82
如果需要刷新页面且变更mid的值为6
RXLocationHref({mid:6});
如果参数传值为url字符串，将相当于使用window.location.href跳转
RXLocationHref(“XXB.dll?page=RX01AA&mid=5&sessionkey=02f84hz7ZAg3yKp6PNWPUrOZCQMiDY82”);
*************************************************/
function RXLocationHref(rplObj) {
    var strHref = window.location.href;
    if (typeof rplObj == "string") {
        if (rplObj.indexOf("isDeskTop") < 0) {
            if (strHref.indexOf("isDeskTop=1") > 0) {
                rplObj += "&isDeskTop=1";
            }
            else {
                rplObj += "&isDeskTop=0";
            }
        }
        strHref = rplObj;
    }
    else {
        if (typeof rplObj == "object") {
            var paraObj = {};
            var strRight = strHref.substr(strHref.indexOf("?") + 1);
            var arrTmp = strRight.split("&");
            for (var i = 0; i < arrTmp.length; i++) {
                var arrTemp = arrTmp[i].split("=");
                paraObj[arrTemp[0]] = arrTemp[1];
            }
            for (var it in rplObj) {
                var rplStr = it + "=" + rplObj[it];
                if (paraObj[it]) {
                    var str = it + "=" + paraObj[it];
                    strHref = strHref.replace(str, rplStr);
                }
                else {
                    strHref += "&" + rplStr;
                }
            }
        }
    }
    window.location.href = strHref;
}

/*************************************************
Function: RXBrowserType
Description: 取得用户的浏览器名与版本
Return:{
name:浏览器名称
version：浏览器版本
ie:是否ie
firefox:是否firefox
chrome:是否chrome
opera:是否opera
safari:是否safari
}

*************************************************/
function RXBrowserType() {
    var browser = {
        name: "unknown",
        version: 0,
        ie: false,
        firefox: false,
        chrome: false,
        opera: false,
        safari: false
    };
    var ua = navigator.userAgent.toLowerCase(), s;
    function toFixedVersion(ver, floatLength) {
        ver = ("" + ver).replace(/_/g, ".");
        floatLength = floatLength || 1;
        ver = String(ver).split(".");
        ver = ver[0] + "." + (ver[1] || "0");
        ver = Number(ver).toFixed(floatLength);
        return ver;
    };
    function updateProperty(name, ver) {
        browser.name = name;
        browser.version = ver;
        browser[name] = true;
    };
    (s = ua.match(/trident.*; rv\:([\d.]+)/)) ? updateProperty("ie", toFixedVersion(s[1])) : //IE11的UA改变了没有MSIE
        (s = ua.match(/msie ([\d.]+)/)) ? updateProperty("ie", toFixedVersion(s[1])) :
        (s = ua.match(/firefox\/([\d.]+)/)) ? updateProperty("firefox", toFixedVersion(s[1])) :
        (s = ua.match(/chrome\/([\d.]+)/)) ? updateProperty("chrome", toFixedVersion(s[1])) :
        (s = ua.match(/opera.([\d.]+)/)) ? updateProperty("opera", toFixedVersion(s[1])) :
        (s = ua.match(/version\/([\d.]+).*safari/)) ? updateProperty("safari", toFixedVersion(s[1])) : 0;
    return browser;
}

/*************************************************
Function: RXExtend
Description: 对象继承合并函数
Input:  @des		    目标对象 
@src		    源对象
@override		相同值是否覆盖
Return: void
*************************************************/
function RXExtend(des, src, override) {
    if (src instanceof Array) {
        for (var i = 0, len = src.length; i < len; i++) {
            extend(des, src[i], override);
        }
    }
    for (var o in src) {
        if (override || !(o in des)) {
            des[o] = src[o];
        }
    }
    return des;
}

// rx.host
(function() {
    window.rx = window.rx || {};
    rx.host = rx.host || {};

    rx.host.getHostName = function() {
        return "";
    };

    rx.host.getMacAddress = function() {
        return "";
    };

    rx.host.getVersion = function() {
        return "";
    };

    rx.host.verifySetup = function() {
        return true;
    };

    rx.host.checkUpdate = function() {
        return false;
    };

    rx.host.flashWinodw = function(p) {
        return;
    };

    rx.host.minimized = function() {
        return;
    };

    rx.host.simulateKeyboard = function(p) {
        return;
    };

    rx.host.getSetupFile = function() {
        return "";
    };

    // 使用插件获取客户机信息。
    (function() {
        if (!window.nphkhost) {
            return;
        }

        rx.host.getHostName = function() {
            return nphkhost.getHostName().split(".")[0];
        };

        rx.host.getMacAddress = function() {
            return nphkhost.getMacAddress();
        };

        rx.host.getVersion = function() {
            return nphkhost.getVersion();
        };

        rx.host.verifySetup = function() {
            return nphkhost.verifySetup();
        };

        rx.host.checkUpdate = function() {
            return nphkhost.checkUpdate();
        };

        rx.host.flashWinodw = function(p) {
            return nphkhost.flashWinodw(p);
        };

        rx.host.minimized = function() {
            return nphkhost.minimized();
        };

        rx.host.simulateKeyboard = function(p) {
            return nphkhost.simulateKeyboard(p);
        };

        rx.host.getSetupFile = function() {
            return nphkhost.getSetupFile();
        };
    })();

    // 使用browser对象获取客户机信息，需要SCEO浏览器支持
    (function() {
        if (!/chrome|safari/.test(navigator.userAgent.toLowerCase()) || !window.browser) {
            return;
        }

        rx.host.getHostName = function() {
            return browser.getHostName().split(".")[0];
        };

        rx.host.getMacAddress = function() {
            return browser.getMacAddress();
        };

        rx.host.getVersion = function() {
            return browser.getVersion();
        };

        rx.host.verifySetup = function() {
            return true;
        };

        rx.host.checkUpdate = function() {
            return false;
        };

        rx.host.flashWinodw = function(p) {
            return browser.flashBrowser(p);
        };

        rx.host.minimized = function() {
            return browser.minimize();
        };

        rx.host.simulateKeyboard = function(p) {
            return;
        };

        rx.host.getSetupFile = function() {
            return "";
        };
    })();
})();