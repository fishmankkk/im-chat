var devicetype="PC"
var resize_line=function(){                     //左侧竖线
    var height=$(window).height()-310;
    $(".chat-history-body").css("height",height);
    $('#facebox').remove();
}
resize_line();
$(window).resize(function(){
    resize_line();
});
function replace_em(str){
	str = str.replace(/\</g,'&lt;');
	str = str.replace(/\>/g,'&gt;');
	str = str.replace(/\n/g,'<br/>');
	str = str.replace(/\[em_([0-9]*)\]/g,'<img src="face/$1.gif" border="0" />');
	return str;
}


function replaceSend(str){
    str=str.replace(/&lt;/g, "<");
    str=str.replace(/&gt;/g, ">");
	str = str.replace(/\n/g,'<br/>');
	str = str.replace(/\[em_([0-9]*)\]/g,function($0,$1,$2){
        var i=$1;
        return em[i].url;
    });
	return str;
}
function getFace(text){
    var text=text.replace(/&lt;/g, "<");
    var text=text.replace(/&gt;/g, ">");
    var text=text.replace(/&quot;/g, '"');
    var str=text.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function (match, capture) {
        var value = capture.replace(/[^0-9]/ig,""); 
        var str='<img src="face/'+value+'.gif" border="0"/>';
        return str;
    });
    return str;
};
$(".send-btn").click(function(){
    userSendFunc();
});
$(".mobile-send").click(function(){
    userSendFunc();
});
var userSendFunc=function(){
    var text=$(".editor-body textarea").val().trim();
    console.log(replaceSend(text));
    var textHtml=function(text){
        var  html='<li class="right-chat float-right width-100">'+
                    '<div class="avatar-icon float-right"><img src="img/user.png"></div>'+
                    '<div class="msg-con bg2 float-right">'+
                        '<i class="msg-angle border-color-angle2"></i>'+
                        '<div class="msg-item bg2">'+replace_em(text)+'</div>'+
                    '</div>'+
                '</li>';
        return html;
    }
    if(devicetype=="mobile"){
        if(text!=''){
            $(".im-mobile .im-chat-body ul").append(textHtml(text));
            $(".mobile-input").val('');
            var bodyHeight=$(".im-mobile .im-chat-body")[0].scrollHeight;
            $(".im-mobile .im-chat-body").scrollTop(bodyHeight);
        }
    }else{
        if(text!=''){
            $(".im .chat-history-body ul").append(textHtml(text));
            $(".im .editor-body textarea").val('');
            var bodyHeight=$(".im .chat-history-body")[0].scrollHeight;
            $(".im .chat-history-body").scrollTop(bodyHeight);
        }
    }

}
var kefuSendFunc=function(text){
    var  html='<li class="left-chat float-left width-100">'+
                    '<div class="avatar-icon float-left"><img src="img/kefu.png"></div>'+
                    '<div class="msg-con bg1 float-left">'+
                        '<i class="msg-angle border-color-angle1"></i>'+
                        '<div class="msg-item bg1">Hi，我是小助手，为您服务是小助手的荣幸~~ </div>'+
                    '</div>'+
                '</li>';
    if(devicetype=="mobile"){
            $(".im-mobile .im-chat-body ul").append(html);
            var bodyHeight=$(".im-mobile .im-chat-body")[0].scrollHeight;
            $(".im-mobile .im-chat-body").scrollTop(bodyHeight);
    }else{
            $(".im .chat-history-body ul").append(html);
            var bodyHeight=$(".im .chat-history-body")[0].scrollHeight;
            $(".im .chat-history-body").scrollTop(bodyHeight);
    }
}
//表情按钮
$('.smile-btn').qqFace({
    id : 'facebox', //表情盒子的ID
    assign:'saytext', //给那个控件赋值
    path:'face/'	//表情存放的路径
});
$('.close-btn').click(function(){
    open(location, '_self').close();
})
var uploadAttachmenta = function (){
	var form = $('#attachmentForm');
	$(form).ajaxSubmit({
		success: function(result){
		}
	})
	return false;
}
var changeFile=function(e){
    if($(e).val()!=''){
         $('#img-local-submit').click();
    }else{
    }
}
var setStyle=function(){
    setInterval(function(){
                    var bodyHeight=$(".im-mobile")[0].scrollHeight;
            $(window).scrollTop(bodyHeight);
    },100)
}
function browserRedirect() { 
    var sUserAgent= navigator.userAgent.toLowerCase(); 
    var bIsIpad= sUserAgent.match(/ipad/i) == "ipad"; 
    var bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os"; 
    var bIsMidp= sUserAgent.match(/midp/i) == "midp"; 
    var bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4"; 
    var bIsUc= sUserAgent.match(/ucweb/i) == "ucweb"; 
    var bIsAndroid= sUserAgent.match(/android/i) == "android"; 
    var bIsCE= sUserAgent.match(/windows ce/i) == "windows ce"; 
    var bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile"; 

    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) { 
        $(".im").hide();
        $(".im-mobile").show();
        devicetype="mobile";
    } else { 
        $(".im").show();
        $(".im-mobile").hide();
        devicetype="PC";
//            window.location= 'Website/PCWebsite/index.html';
    } 
} 
browserRedirect();

var keydownway=1;
$(".choose-send-way-btn").click(function(){
    $(".select-key-way").toggle();
})
$(".select-key-way button").each(function(index){
    $(this).click(function(){
        if(index==0){
            $(this).html("按下ENTER发送(√)");
            $(".select-key-way button").eq(1).html("按下CTRL+ENTER发送");
        }else if(index==1){
            $(".select-key-way button").eq(0).html("按下ENTER发送");
            $(this).html("按下CTRL+ENTER发送(√)");
        }
        $(".select-key-way").hide();
        keydownway=index;
    });
})
var keydownSendFunc=function(){
    if(keydownway==0){
        if(!event.ctrlKey && event.keyCode==13){
            userSendFunc();
            event.returnValue = false;
            return false;
        }
    }else if(keydownway==1){
        if(event.ctrlKey && event.keyCode==13)
            userSendFunc();
    }
}