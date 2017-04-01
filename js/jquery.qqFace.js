// QQ表情插件
var em = [
				{'id':1,'phrase':'[惊讶]','url':'/::O'},{'id':2,'phrase':'[撇嘴]','url':'/::~'},
                {'id':3,'phrase':'[色]','url':'/::B'},{'id':4,'phrase':'[发呆]','url':'/::|'},
                {'id':5,'phrase':'[得意]','url':'/:8-)'},{'id':6,'phrase':'[害羞]','url':'/::$'},
                {'id':7,'phrase':'[闭嘴]','url':'/::X'},{'id':8,'phrase':'[睡]','url':'/::Z'},
                {'id':9,'phrase':'[大哭]','url':"/::'("},{'id':10,'phrase':'[尴尬]','url':'/::-|'},
                {'id':11,'phrase':'[发怒]','url':'/::@'},{'id':12,'phrase':'[调皮]','url':'/::P'},
                {'id':13,'phrase':'[呲牙]','url':'/::D'},{'id':14,'phrase':'[微笑]','url':'/::)'},
                {'id':15,'phrase':'[难过]','url':'/::('},{'id':16,'phrase':'[酷]','url':'/::+'},
                {'id':17,'phrase':'[抓狂]','url':'/::Q'},{'id':18,'phrase':'[吐]','url':'/::T'},
                {'id':19,'phrase':'[偷笑]','url':'/:,@P'},{'id':20,'phrase':'[愉快]','url':'/:,@-D'},
                {'id':21,'phrase':'[白眼]','url':'/::d'},{'id':22,'phrase':'[傲慢]','url':'/:,@o'},
                {'id':23,'phrase':'[饥饿]','url':'/::g'},{'id':24,'phrase':'[困]','url':'/:|-)'},
                {'id':25,'phrase':'[惊恐]','url':'/::!'},{'id':26,'phrase':'[流汗]','url':'/::L'},
                {'id':27,'phrase':'[憨笑]','url':'/::>'},{'id':28,'phrase':'[悠闲]','url':'/::,@'},
                {'id':29,'phrase':'[奋斗]','url':'/:,@f'},{'id':30,'phrase':'[疑问]','url':'/:?'},
                {'id':31,'phrase':'[嘘]','url':'/:,@x'},{'id':32,'phrase':'[晕]','url':'/:,@@'},
                {'id':33,'phrase':'[衰]','url':'/:,@!'},{'id':34,'phrase':'[骷髅]','url':'/:!!!'},
                {'id':35,'phrase':'[敲打]','url':'/:xx'},{'id':36,'phrase':'[再见]','url':'/:bye'},
                {'id':37,'phrase':'[发抖]','url':'/:shake'},{'id':38,'phrase':'[爱情]','url':'/:love'},
                {'id':39,'phrase':'[跳跳]','url':'/:jump'},{'id':40,'phrase':'[猪头]','url':'/:pig'},
                {'id':41,'phrase':'[拥抱]','url':'/:hug'},{'id':42,'phrase':'[蛋糕]','url':'/:cake'},
                {'id':43,'phrase':'[闪电]','url':'/:li'},{'id':44,'phrase':'[炸弹]','url':'/:bome'},
                {'id':45,'phrase':'[刀]','url':'/:kn'},{'id':46,'phrase':'[足球]','url':'/:footb'},
                {'id':47,'phrase':'[便便]','url':'/:shit'},{'id':48,'phrase':'[咖啡]','url':'/:coffee'},
                {'id':49,'phrase':'[饭]','url':'/:eat'},{'id':50,'phrase':'[玫瑰]','url':'/:rose'},
                {'id':51,'phrase':'[凋谢]','url':'/:fade'},{'id':52,'phrase':'[爱心]','url':'/:heart'},
                {'id':53,'phrase':'[心碎]','url':'/:break'},{'id':54,'phrase':'[礼物]','url':'/:gift'},
                {'id':55,'phrase':'[太阳]','url':'/:sun'},{'id':56,'phrase':'[月亮]','url':'/:moon'},
                {'id':57,'phrase':'[强]','url':'/:strong'},{'id':58,'phrase':'[弱]','url':'/:weak'},
                {'id':59,'phrase':'[握手]','url':'/:share'},{'id':60,'phrase':'[飞吻]','url':'/:<L>'},
                {'id':61,'phrase':'[怄火]','url':'/:<O>'},{'id':62,'phrase':'[西瓜]','url':'/:<W>'},
                {'id':63,'phrase':'[冷汗]','url':'/:--b'},{'id':64,'phrase':'[抠鼻]','url':'/:dig'},
                {'id':65,'phrase':'[鼓掌]','url':'/:handclap'},{'id':66,'phrase':'[糗大了]','url':'/:&-('},
                {'id':67,'phrase':'[坏笑]','url':'/:B-)'},{'id':68,'phrase':'[左哼哼]','url':'/:<@'},
                {'id':69,'phrase':'[右哼哼]','url':'/:@>'},{'id':70,'phrase':'[哈欠]','url':'/::-O'},
                {'id':71,'phrase':'[鄙视]','url':'/:>-|'},{'id':72,'phrase':'[委屈]','url':'/:P-('},
                {'id':73,'phrase':'[难过]','url':"/::'|"},{'id':74,'phrase':'[阴险]','url':'/:X-)'},
                {'id':75,'phrase':'[亲亲]','url':'/::*'},{'id':76,'phrase':'[吓]','url':'/:@x'},
                {'id':77,'phrase':'[可怜]','url':'/:8*'},{'id':78,'phrase':'[菜刀]','url':'/:pd'},
                {'id':79,'phrase':'[啤酒]','url':'/:beer'},{'id':80,'phrase':'[篮球]','url':'/:basketb'},
                {'id':81,'phrase':'[乒乓]','url':'/:oo'},{'id':82,'phrase':'[嘴唇]','url':'/:showlove'},
                {'id':83,'phrase':'[瓢虫]','url':'/:ladybug'},{'id':84,'phrase':'[抱拳]','url':'/:@)'},
                {'id':85,'phrase':'[勾引]','url':'/:jj'},{'id':86,'phrase':'[拳头]','url':'/:@@'},
                {'id':87,'phrase':'[差劲]','url':'/:bad'},{'id':88,'phrase':'[爱你]','url':'/:lvu'},
                {'id':89,'phrase':'[NO]','url':'/:no'},{'id':90,'phrase':'[OK]','url':'/:ok'},
                {'id':91,'phrase':'[转圈]','url':'/:circle'},{'id':92,'phrase':'[磕头]','url':'/:kotow'},
                {'id':93,'phrase':'[回头]','url':'/:turn'},{'id':94,'phrase':'[跳绳]','url':'/:skip'},
                {'id':95,'phrase':'[投降]','url':'/:oY'},{'id':96,'phrase':'[激动]','url':'/:#-0'},
				{'id':97,'phrase':'[乱舞]','url':'/:hiphot'},{'id':98,'phrase':'[献吻]','url':'/:kiss'},
				{'id':99,'phrase':'[左太极]','url':'/:<&'},{'id':100,'phrase':'[右太极]','url':'/:&>'},
				{'id':101,'phrase':'[流泪]','url':'/::<'},{'id':102,'phrase':'[咒骂]','url':'/::-S'},
				{'id':103,'phrase':'[疯了]','url':'/::8'},{'id':104,'phrase':'[擦汗]','url':'/:wipe'},
                {'id':105,'phrase':'[胜利]','url':'/:v'}
		];
// QQ表情插件
(function($){  
	$.fn.qqFace = function(options){
        var target=this;
		var defaults = {
			id : 'facebox',
			path : 'face/',
			assign : 'content',
			tip : 'em_'
		};
		var option = $.extend(defaults, options);
		var assign = $('#'+option.assign);
		var id = option.id;
		var path = option.path;
		var tip = option.tip;
		
		if(assign.length<=0){
			alert('缺少表情赋值对象。');
			return false;
		}
		
		$(this).click(function(e){
			var strFace, labFace;
			if($('#'+id).length<=0){
				strFace = '<div id="'+id+'" style="position:absolute;display:none;z-index:1000;border: 1px solid #ddd;background-color: #fff;" class="qqFace">' +
							  '<table border="0" cellspacing="0" cellpadding="0"><tr>';
				for(var i=1; i<=105; i++){
					labFace = '['+tip+i+']';
					strFace += '<td><img src="'+path+i+'.gif" onclick="$(\'#'+option.assign+'\').setCaret();$(\'#'+option.assign+'\').insertAtCaret(\'' + labFace + '\');" /></td>';
					if( i % 15 == 0 ) strFace += '</tr><tr>';
				}
				strFace += '</tr></table></div>';
                $(this).parent().append(strFace);
                var offset = $(this).position();
                var top = offset.top - 200;
                $('#'+id).css('top',top);
                $('#'+id).css('left',offset.left+5);
                $('#'+id).show();
                e.stopPropagation();
			}else{
                $('#'+id).hide();
                $('#'+id).remove();
                $("#"+option.assign).focus();
            }
		});

		$(document).click(function(){
			$('#'+id).hide();
			$('#'+id).remove();
            $("#"+option.assign).focus();
		});
        $(window).resize(function(){
//            var offset = $(this).position();
			var top = $(target).offset().top - 226;
			$('#'+id).css('top',top);
        });
	};

})(jQuery);

jQuery.extend({ 
unselectContents: function(){ 
	if(window.getSelection) 
		window.getSelection().removeAllRanges(); 
	else if(document.selection) 
		document.selection.empty(); 
	} 
}); 
jQuery.fn.extend({ 
	selectContents: function(){ 
		$(this).each(function(i){ 
			var node = this; 
			var selection, range, doc, win; 
			if ((doc = node.ownerDocument) && (win = doc.defaultView) && typeof win.getSelection != 'undefined' && typeof doc.createRange != 'undefined' && (selection = window.getSelection()) && typeof selection.removeAllRanges != 'undefined'){ 
				range = doc.createRange(); 
				range.selectNode(node); 
				if(i == 0){ 
					selection.removeAllRanges(); 
				} 
				selection.addRange(range); 
			} else if (document.body && typeof document.body.createTextRange != 'undefined' && (range = document.body.createTextRange())){ 
				range.moveToElementText(node); 
				range.select(); 
			} 
		}); 
	}, 

	setCaret: function(){ 
		if(!$.browser.msie) return; 
		var initSetCaret = function(){ 
			var textObj = $(this).get(0); 
			textObj.caretPos = document.selection.createRange().duplicate(); 
		}; 
		$(this).click(initSetCaret).select(initSetCaret).keyup(initSetCaret); 
	}, 

	insertAtCaret: function(textFeildValue){ 
		var textObj = $(this).get(0); 
		if(document.all && textObj.createTextRange && textObj.caretPos){ 
			var caretPos=textObj.caretPos; 
			caretPos.text = caretPos.text.charAt(caretPos.text.length-1) == '' ? 
			textFeildValue+'' : textFeildValue; 
		} else if(textObj.setSelectionRange){ 
			var rangeStart=textObj.selectionStart; 
			var rangeEnd=textObj.selectionEnd; 
			var tempStr1=textObj.value.substring(0,rangeStart); 
			var tempStr2=textObj.value.substring(rangeEnd); 
			textObj.value=tempStr1+textFeildValue+tempStr2; 
			textObj.focus(); 
			var len=textFeildValue.length; 
			textObj.setSelectionRange(rangeStart+len,rangeStart+len); 
			textObj.blur(); 
		}else{ 
			textObj.value+=textFeildValue; 
		} 
//        $(textObj).focus();
	} 
});