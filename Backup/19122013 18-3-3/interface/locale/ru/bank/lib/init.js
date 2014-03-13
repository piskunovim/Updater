var DEBUG = 0;
var IMAGE_PATH = "c:/webclient/interface/skins/metro2/i/op";
var BUTTON_IMAGE = "keypad4.gif"; 
var ANIMATION_DELAY = 0;
var ietmsCount = 0;

var containerHeight = 0;
var currentGroup = 0;
var previousStartIndex = 0;
var startIndex = 0;
var points = new Array();

var alfa={'044030786':1,'040813770':1,'044525593':1,'049205724':1,'040407977':1,'046577964':1,'043601964':1,'047102940':1,'042202824':1,'045004774':1,'046015207':1,'048073940':1};
var otp={'044030812':1,'044660716':1,'045005798':1,'040395559':1,'046036297':1,'044525311':1,'045209777':1,'042253866':1,'047501830':1,'043602707':1};
var hkf={'048071980':1,'044585216':1,'044030875':1,'046568936':1,'040813812':1,'046043306':1,'045003840':1};
var uni={'040349548':1,'045773873':1,'046027238':1,'042007709':1,'047501982':1,'046577971':1,'045005805':1,'044525545':1,'043601777':1,'048071948':1,'044030858':1,'040702750':1,'042202799':1,'041806701':1};
var russtd={'046027282':1,'044583151':1,'049205731':1,'045209858':1,'046577934':1,'044030847':1,'043601745':1,'042007849':1,'045005802':1,'048071981':1};

function log(message) {
    if ( DEBUG ) {
        //$("#debug-log").append(message + "\r\n");
        console.log(message);
    }
}

function getBankItemText(bankItem) {
    var text = "";
    text += "<span class=\"bank-item-text\">" + ( bankItem.bic.length > 0 ? bankItem.name : bankItem.name + "&nbsp;&gt;" ) + "</span>";
    if ( bankItem.img.length ) {
        text += "<img src=\"" + IMAGE_PATH + "/" + bankItem.img + "\"/>";
    }
    return text;
}

function draw() {
    
    log("redrawing...");
    
    $("#bank-list").empty();
    
    if ( DEBUG == 1 ) {
        $("#banks").append("<pre id=\"debug-log\"></pre>");
    }
    
    var totalHeight = 0;
    var itemsCount = 0;
    
    var from = 0;
    if ( points.length > 0 ) {
        from = points[points.length - 1];
    }
    
    log("starting from " + from + "...");
    
    var items = generateList();
    
    // drawing items until total height less than container height
    for(var i = from; i < items.length; ++i) {
        if ( items[i].bic.length == 0 ) {
            // drawing group
            $("#bank-list").append("<div bank-id=\"" + i + "\" i=\"" + itemsCount + "\" id=\"bank-item-" + itemsCount + "\" class=\"bank-item\" group=\"1\" group-id=\"" + items[i].group_id + "\">" + (DEBUG == 1 ? "" + itemsCount + ".&nbsp;" : "") + getBankItemText(items[i]) + "</div>");
            totalHeight += getRealElementHeight("#bank-item-" + itemsCount);
            ++itemsCount;
        } else {
            // drawing bank item
            $("#bank-list").append("<div bank-id=\"" + i + "\" i=\"" + itemsCount + "\" id=\"bank-item-" + itemsCount + "\" class=\"bank-item\" group=\"0\">" + (DEBUG == 1 ? "" + itemsCount + ".&nbsp;" : "") + getBankItemText(items[i]) + "</div>");
            totalHeight += getRealElementHeight("#bank-item-" + itemsCount);
            ++itemsCount;
        }     
        if ( totalHeight > containerHeight ) {
            previousStartIndex = startIndex;
            startIndex = i;
            points.push(startIndex);
            break;
        }
    }
    log("Drawed items: " + itemsCount);
    
    $(".bank-item").click(
        function () {
            // going inside/out group
            
            $(this).css("font-weight", "bold");
            
            if ( $(this).attr("group") == "1" ) {
                log("click:group");
                currentGroup = $(this).attr("group-id");
                points = new Array();
                draw();
            } 
            if ( $(this).attr("group-id") == "-1" ) {
                log("click:back");
                currentGroup = 0;
                points = new Array();
                draw();
            } else 
            if ( $(this).attr("group") == "0" ) {
//                log("click:item");
//		alert('here');
		//$(location).attr('href', "data-entry.html?recepient=690&field101='" + bankItems[$(".selected-item").attr("bank-id")].bic + "'&img_name=" + bankItems[$(".selected-item").attr("bank-id")].img);
		if (jcfg_findOperatorById('1007')==-1){
			$(location).attr('href', "data-entry.html?recepient=1005&field100=" + items[$(this).attr("bank-id")].bic + "&img_name=" + items[$(this).attr("bank-id")].img+ "&bank_name=" + items[$(this).attr("bank-id")].name);
		}
		else
		{
			if ((items[$(this).attr("bank-id")].bic in alfa)&&(jcfg_findOperatorById('60')==-1)) { 
				$(location).attr('href',"choice.html?alfa=1");
			} else if ((items[$(this).attr("bank-id")].bic in hkf)&&(jcfg_findOperatorById('60')==-1)) 
			{ 
				$(location).attr('href',"data-entry.html?recepient=1003&field100="+items[$(this).attr("bank-id")].bic);
			} else if ((items[$(this).attr("bank-id")].bic in otp)&&(jcfg_findOperatorById('60')==-1)) 
			{ 
				$(location).attr('href',"data-entry.html?recepient=1004&field100="+items[$(this).attr("bank-id")].bic);
			} else if ((items[$(this).attr("bank-id")].bic in uni)&&(jcfg_findOperatorById('60')==-1)) {
				$(location).attr('href',"data-entry.html?recepient=1006&field100="+items[$(this).attr("bank-id")].bic);
			} else if ((items[$(this).attr("bank-id")].bic in russtd)&&(jcfg_findOperatorById('60')==-1)&&(TerminalName != '107396')) {
				$(location).attr('href',"data-entry.html?recepient=1005&field100="+items[$(this).attr("bank-id")].bic);
			} else 
			{
				$(location).attr('href', "data-entry.html?recepient=1007&field100=" + items[$(this).attr("bank-id")].bic + "&img_name=" + items[$(this).attr("bank-id")].img+ "&bank_name=" + items[$(this).attr("bank-id")].name);
			}


		}
//		alert('here');
            }
        }
    );
    
    $(".bank-item").mousedown(function() { $(this).css("font-weight", "bold"); } );
    $(".bank-item").mouseout(function() { $(this).css("font-weight", "normal");	} );
    $(".bank-item").mouseup(function() { $(this).css("font-weight", "normal"); } );
       
}

// generates list according to currentGroup
function generateList() {
    log("generating list...");
    log("current group: " + currentGroup);
    var temporary = new Array();
    if ( currentGroup > 0 ) {
        // if this is group - first of all add
        // item to return from group
        temporary.push({"bic": "", "name": "Вернуться к списку банков", "inn": "", "account": "", "group_id": "-1", "img": ""});
    }
    for(var i = 0; i < bankItems.length; ++i) {
        if ( ( currentGroup == 0 ) && ( bankItems[i].bic.length == 0 ) ) {
            temporary.push(bankItems[i]);
        } else
        if ( ( bankItems[i].bic.length > 0 ) && ( bankItems[i].group_id == currentGroup ) ) {
            temporary.push(bankItems[i]);
        }
    }
    return temporary;
}


// returns real height of element
// including height of borde, marging and padding
function getRealElementHeight(element) {
    //log("Calculating \"" + element + "\" height...");
    var height = 0;
    // content height
    height += $(element).height();
    //log("  + content height: " + height);
    
    // paddings height
    var paddingTop = 0;
    var paddingBottom = 0;
    if ( ( $(element).css("padding-top") != "auto" ) && ( $(element).css("padding-top") != "medium" ) ) {
        paddingTop += parseInt($(element).css("padding-top"));
    }
    if ( ( $(element).css("padding-bottom") != "auto" ) && ( $(element).css("padding-bottom") != "medium" ) ) {
        paddingBottom += parseInt($(element).css("padding-bottom"));
    }
    height += paddingTop + paddingBottom;
    //log("  + padding(" + $(element).css("padding-top") + ", " + $(element).css("padding-bottom") + "): " + height);
    
    // margins height
    var marginTop = 0;
    var marginBottom = 0;
    if ( ( $(element).css("margin-top") != "auto" ) && ( $(element).css("margin-top") != "medium" ) ) {
        marginTop += parseInt($(element).css("margin-top"));
    }
    if ( ( $(element).css("margin-bottom") != "auto" ) && ( $(element).css("margin-bottom") != "medium" ) ) {
        marginBottom += parseInt($(element).css("margin-bottom"));
    }
    height += marginTop + marginBottom;
    //log("  + margin(" + $(element).css("margin-top") + ", " + $(element).css("margin-bottom") + "): " + height);
    
    // borders height
    var borderTop = 0
    var borderBottom = 0;
    if ( ( $(element).css("border-top-width") != "auto" ) && ( $(element).css("border-top-width") != "medium" ) ) {
        borderTop += parseInt($(element).css("border-top-width"));
    }
    if ( ( $(element).css("border-bottom-width") != "auto" ) && ( $(element).css("border-bottom-width") != "medium" ) ) {
        borderTop += parseInt($(element).css("border-bottom-width"));
    }
    height += borderTop + borderBottom;
    //log("  + border(" + $(element).css("border-top-width") + ", " + $(element).css("border-bottom-width") + "): " + height);
    
    return height;
}

$(document).ready(function () {
		
        $("#content").empty();
        $("#content").append("<div id=\"banks\"></div>");
        $("#banks").append("<div class=\"button\" id=\"bank-up\">ВВЕРХ</div>");
        $("#banks").append("<div id=\"bank-list-container\"></div>");
        $("#banks").append("<div class=\"button\" id=\"bank-down\">ВНИЗ</div>");
        $("#bank-list-container").append("<div id=\"bank-list\"></div>");
        containerHeight = getRealElementHeight("#bank-list-container");
        
        $("#bank-up").click(
            function() {
                $(this).css("font-weight", "bold");
                log("click:up");
                log("start index : " + startIndex + ", previousIndex: " + previousStartIndex);
                if ( points.length > 0 ) {
                    points.pop();
                    points.pop();
                    draw();
                }
            }
        );
        $("#bank-down").click(
            function() {
                $(this).css("font-weight", "bold");
                log("click:down");
                log("start index : " + startIndex + ", previousIndex: " + previousStartIndex);
                if ( points.length > 0 ) {
                    draw();   
                }
            }
        );
        
        draw();
        
        $("#bank-up").mousedown(function() { $(this).css("font-weight", "bold"); } );
        $("#bank-up").mouseout(function() { $(this).css("font-weight", "normal");	} );
        $("#bank-up").mouseup(function() { $(this).css("font-weight", "normal"); } );
    
        
        $("#bank-down").mousedown(function() { $(this).css("font-weight", "bold"); } );
        $("#bank-down").mouseout(function() { $(this).css("font-weight", "normal");	} );
        $("#bank-down").mouseup(function() { $(this).css("font-weight", "normal"); } );
        
});