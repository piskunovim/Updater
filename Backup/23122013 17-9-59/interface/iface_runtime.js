/****
* |+|----------------------------------------------------------------------|
* | [interface runtime filescript]
* |
* | version v2.0.0153.000 (20080414 10:32)
* | |----------------------------------------------------------------------|
* | | interface runtime processing script
* | |
* | | ! does runtime interface generation and processing
* | |----------------------------------------------------------------------|
* |
* | Dmitriy "MeG" Agafonov // L.i.R. (LostIn)
* | HLDR
* | (C) 2006-2008
* |
* |------------------------------------------------------------------------|
* | todo:
* |
* | +
* |
* |-|----------------------------------------------------------------------|
*/

var alfa={'044030786':1,'040813770':1,'044525593':1,'049205724':1,'040407977':1,'046577964':1,'043601964':1,'047102940':1,'042202824':1,'045004774':1,'046015207':1,'048073940':1};
var otp={'044030812':1,'044660716':1,'045005798':1,'040395559':1,'046036297':1,'044525311':1,'045209777':1,'042253866':1,'047501830':1,'043602707':1};
var hkf={'048071980':1,'044585216':1,'044030875':1,'046568936':1,'040813812':1,'046043306':1,'045003840':1};
var krd={'132':1,'1244444':1,'1263410':1,'1026308':1,'1301861':1,'1026312':1,'1301854':1,'1265689':1,'1275463':1,'1265561':1,'1265564':1,'1265567':1,'1255251':1,'1026316':1,'1275543':1,'100010':1,'1265558':1,'1262318':1,'1239158':1,'1253896':1,'1239150':1,'1048936':1,'1048990':1,'1048986':1,'1253900':1,'1225247':1,'1245157':1,'1144664':1,'1218924':1,'1050692':1,'1250110':1,'1250115':1,'1245167':1,'1134861':1,'1255803':1,'1256446':1,'1294251':1,'1218823':1,'1058838':1,'1709003':1,'1224707':1,'1282716':1,'1282729':1,'1282721':1,'1282725':1,'1282733':1,'1244586':1,'1049000':1,'1233978':1,'1248969':1,'100888':1,'1213358':1,'1301886':1,'1176972':1,'1176980':1,'1176984':1,'1176976':1,'1129216':1,'1129614':1,'1026304':1,'1177832':1,'1080012':1,'1301866':1,'1301883':1,'1029234':1,'1072157':1,'1250867':1,'1041297':1,'1043158':1,'1043162':1,'1058832':1,'1126250':1,'1255746':1,'1249265':1,'1029242':1,'1043214':1,'1029238':1,'1173711':1,'1029212':1,'1255787':1,'1249255':1,'1029240':1,'1029256':1,'1255758':1,'1102632':1,'1220668':1,'1029260':1,'1114892':1,'1114886':1,'1173703':1,'1319199':1,'1029226':1,'1263394':1,'1058850':1,'1058844':1,'1285843':1,'1275492':1,'1573558':1,'1251796':1,'1263391':1,'1189233':1,'1319523':1,'1029218':1,'1096922':1,'1275592':1,'1277633':1,'1285848':1,'1241997':1,'1095819':1,'1348164':1,'1063942':1,'1063938':1,'1058854':1,'1058866':1,'1058870':1,'1051735':1,'1058892':1,'1051739':1,'1120387':1,'1058858':1,'1143164':1,'1233095':1,'102584':1,'102588':1,'1301933':1,'1205578':1,'1622457':1,'1242008':1,'1255270':1,'1095811':1,'1178306':1,'1038344':1,'1295950':1,'1334644':1,'1636016':1,'1191738':1,'1204357':1,'1213344':1,'1275459':1,'1228258':1,'1640215':1,'1188862':1,'1116874':1,'1181167':1,'1264140':1,'1263985':1,'1651877':1,'1112186':1,'1635555':1,'1295945':1,'1162756':1,'1651538':1,'1294992':1,'1263419':1,'1659038':1,'1659040':1,'1647908':1,'1319160':1,'1651540':1,'1651544':1,'1181833':1,'1224927':1,'1651548':1,'1651550':1,'1312800':1,'1190489':1,'1197692':1,'1651554':1,'1651556':1,'1651558':1,'1651560':1,'1651562':1,'1142478':1,'1166335':1,'1285964':1,'1119149':1,'1298355':1,'1116880':1,'101460':1,'100998':1,'1269933':1,'1286870':1,'1138663':1,'1189910':1,'1200203':1,'1703971':1,'1703973':1,'1159680':1,'1289711':1,'1270565':1,'1270579':1,'1708560':1,'1703977':1,'1709006':1,'1709538':1,'1709542':1,'1709008':1,'1709010':1,'1703975':1,'1049124':1,'1220565':1,'1234740':1,'1268991':1,'1146957':1,'1269155':1,'1271737':1,'1718468':1,'1189968':1,'1718507':1,'1718509':1,'1144691':1,'1686593':1,'1233252':1,'1709012':1,'1121834':1,'1314065':1,'1253110':1,'1177632':1,'1333832':1,'1227346':1,'1030954':1,'1030962':1,'1142759':1,'1229214':1,'1285865':1,'1305148':1,'1083201':1,'1219239':1,'1114630':1,'1742563':1,'1303530':1,'1249276':1,'1291048':1,'142':1,'180':1,'184':1,'186':1,'238':1,'242':1,'290':1,'314':1,'328':1,'330':1,'1177018':1,'100066':1,'374':1,'448':1,'100012':1,'100018':1,'100020':1,'100024':1,'100026':1,'100028':1,'100030':1,'100032':1,'100034':1,'100036':1,'100038':1,'100040':1,'100042':1,'100044':1,'100046':1,'100048':1,'100050':1,'100052':1,'100054':1,'100056':1,'100126':1,'100130':1,'100180':1,'1278034':1,'1280387':1,'1280383':1,'1169703':1,'1047407':1,'1274962':1,'1037699':1,'1037705':1,'1660042':1,'1660048':1,'416':1,'418':1,'100208':1,'100300':1,'100534':1,'100538':1,'100540':1,'1319228':1,'100566':1,'100568':1,'100570':1,'100574':1,'100580':1,'100582':1,'100630':1,'100640':1,'100684':1,'100702':1,'1334663':1,'100716':1,'100722':1,'100724':1,'100726':1,'100728':1,'100736':1,'100794':1,'100890':1,'100892':1,'100898':1,'100900':1,'1641736':1,'1641739':1,'1641742':1,'1641752':1,'1641754':1,'1641756':1,'1641758':1,'1641762':1,'1641764':1,'1641766':1,'1641770':1,'1641774':1,'1641776':1,'1641778':1,'1641780':1,'1641782':1,'1641784':1,'1650887':1,'1068366':1,'1651154':1,'1648026':1,'1648032':1,'1648049':1,'100976':1,'1046397':1,'100986':1,'100988':1,'100638':1,'101202':1,'100994':1,'101000':1,'101002':1,'101004':1,'101006':1,'1044796':1,'1307954':1,'100206':1,'1098449':1,'490':1,'1029501':1,'1029505':1,'1029507':1,'1187428':1,'1029511':1,'1029513':1,'1187422':1,'146':1,'304':1,'100992':1,'452':1,'100600':1,'101106':1,'101108':1,'486':1,'1285967':1,'1319223':1,'1037749':1,'1642968':1,'378':1,'380':1,'100150':1,'100632':1,'101266':1,'101124':1,'101272':1,'1718471':1,'101302':1,'101350':1,'1642187':1,'101356':1,'101374':1,'101384':1,'101386':1,'101388':1,'101416':1,'101432':1,'101462':1,'1292928':1,'101522':1,'101546':1,'101556':1,'101558':1,'101560':1,'101562':1,'101564':1,'101566':1,'101568':1,'101570':1,'101572':1,'101574':1,'101576':1,'101578':1,'101580':1,'101582':1,'101584':1,'101586':1,'101588':1,'101590':1,'101592':1,'101594':1,'101596':1,'101598':1,'101600':1,'101602':1,'101604':1,'101606':1,'101608':1,'101612':1,'101614':1,'101616':1,'101618':1,'101620':1,'101690':1,'101788':1,'102298':1,'102336':1,'102338':1,'102340':1,'102368':1,'1656204':1,'1656216':1,'1656219':1,'1650754':1,'1656213':1,'1656239':1,'1656208':1,'1650750':1,'1656202':1,'1656221':1,'1656245':1,'1650752':1,'1656206':1,'1650762':1,'1650758':1,'1650745':1,'1650760':1,'1656211':1,'1656248':1,'1650743':1,'1656223':1,'1656196':1,'1650756':1,'1656230':1,'1656228':1,'100692':1,'1656243':1,'102446':1,'102456':1,'102458':1,'102508':1,'102510':1,'102514':1,'102520':1,'1269955':1,'1214699':1,'102522':1,'102542':1,'102580':1,'102618':1,'102640':1,'102662':1,'102710':1,'102712':1,'102714':1,'102716':1,'202':1,'214':1,'222':1,'102738':1,'102776':1,'102792':1,'102796':1,'102798':1,'102800':1,'102802':1,'102806':1,'102812':1,'102814':1,'102844':1,'102854':1,'102906':1,'102914':1,'102916':1,'102918':1,'102920':1,'102820':1,'102940':1,'103058':1,'103082':1,'103084':1,'103086':1,'103138':1,'103158':1,'103234':1,'103236':1,'103242':1,'103258':1,'103260':1,'103262':1,'103268':1,'103270':1,'103272':1,'103274':1,'103360':1,'103362':1,'101008':1,'103370':1,'103444':1,'103446':1,'103448':1,'103454':1,'103456':1,'103460':1,'103466':1,'103476':1,'103482':1,'103484':1,'103488':1,'103486':1,'103490':1,'103498':1,'103500':1,'103502':1,'103504':1,'103506':1,'103508':1,'324':1,'1177046':1,'102378':1,'354':1,'1177058':1,'1177038':1,'103576':1,'103578':1,'103580':1,'1120870':1,'1183978':1,'1171608':1,'1178907':1,'1320940':1,'1269512':1,'1097040':1,'1210659':1,'1097026':1,'1210663':1,'1152774':1,'1247564':1,'1081081':1,'1113773':1,'1165338':1,'1211858':1,'1271966':1,'1620712':1,'1620722':1,'1637432':1,'1637434':1,'1638829':1,'1165445':1,'1651069':1,'1651077':1,'1651083':1,'1651085':1,'1651089':1,'1651103':1,'1651109':1,'1651113':1,'1651128':1,'1651130':1,'1651140':1,'1662822':1,'1662826':1,'1662830':1,'1662833':1,'1722686':1,'1722690':1,'1722702':1,'1722704':1,'1724165':1,'1724168':1,'1724170':1,'1727037':1,'1727045':1,'1727060':1,'1732430':1,'1732434':1,'1732448':1,'1732450':1,'1732456':1,'1732462':1,'1742618':1,'1742669':1,'1742671':1,'1742683':1,'1742691':1,'1742693':1,'1742699':1,'1742704':1,'1742718':1,'1742720':1,'1742722':1,'1742725':1,'1742667':1,'252':1,'254':1,'258':1,'100108':1,'100114':1,'100120':1,'100236':1,'100242':1,'100248':1,'100262':1,'100276':1,'100280':1,'100284':1,'100290':1,'100292':1,'101644':1,'101678':1,'101680':1,'101682':1,'101812':1,'101814':1,'101818':1,'101824':1,'101826':1,'101828':1,'101830':1,'101836':1,'101842':1,'101844':1,'101848':1,'101854':1,'101856':1,'102742':1,'103050':1,'103054':1,'103074':1,'103114':1,'103124':1,'103126':1,'103130':1,'103132':1,'103206':1,'103212':1,'103214':1,'103218':1,'103390':1,'103392':1,'103394':1,'103400':1,'103408':1,'103410':1,'103414':1,'103416':1,'103420':1,'103422':1,'103424':1,'103426':1,'103614':1,'103642':1,'103634':1,'103682':1,'103684':1,'103700':1,'103706':1,'103712':1,'103716':1,'103730':1,'103526':1,'103512':1,'103778':1,'103812':1,'103824':1,'103832':1,'103856':1,'103858':1,'102996':1,'102990':1,'103964':1,'103794':1,'103968':1,'107574':1,'103990':1,'104000':1,'1725018':1,'104070':1,'104072':1,'104074':1,'104078':1,'104102':1,'104104':1,'104106':1,'104108':1,'104110':1,'104112':1,'104114':1,'104118':1,'104116':1,'104120':1,'104122':1,'104154':1,'104156':1,'240':1,'101476':1,'104164':1,'104166':1,'104172':1,'104198':1,'104202':1,'104212':1,'104230':1,'104232':1,'104234':1,'104236':1,'104242':1,'104244':1,'104250':1,'104252':1,'104288':1,'104320':1,'104322':1,'104324':1,'104326':1,'104330':1,'1641734':1,'104356':1,'232':1,'104374':1,'104376':1,'104406':1,'104408':1,'1029224':1,'104420':1,'104426':1,'104430':1,'104432':1,'107578':1,'104436':1,'107576':1,'104462':1,'104498':1,'104518':1,'104530':1,'104534':1,'104538':1,'104540':1,'104542':1,'104544':1,'104546':1,'104548':1,'104550':1,'104552':1,'104554':1,'104556':1,'104558':1,'104560':1,'104562':1,'104564':1,'104566':1,'104568':1,'104570':1,'104572':1,'104574':1,'104576':1,'104578':1,'104580':1,'104582':1,'104586':1,'104588':1,'104590':1,'104592':1,'104594':1,'104596':1,'104598':1,'104600':1,'104602':1,'104604':1,'102624':1,'104622':1,'104626':1,'104636':1,'104648':1,'104650':1,'104662':1,'104664':1,'104798':1,'104800':1,'104802':1,'104848':1,'104850':1,'104872':1,'104880':1,'105108':1,'105132':1,'105136':1,'105138':1,'105146':1,'105166':1,'105184':1,'105192':1,'105204':1,'105206':1,'105210':1,'105212':1,'105214':1,'105226':1,'105234':1,'105238':1,'105240':1,'105250':1,'105284':1,'105292':1,'105294':1,'105296':1,'105298':1,'105300':1,'105310':1,'105338':1,'105340':1,'105342':1,'105370':1,'105400':1,'105412':1,'105414':1,'105436':1,'105488':1,'105502':1,'105512':1,'105514':1,'105516':1,'105518':1,'105532':1,'105560':1,'100706':1,'100218':1,'101702':1,'102974':1,'105610':1,'105588':1,'105586':1,'105594':1,'105682':1,'105612':1,'105584':1,'105620':1,'105622':1,'105626':1,'105632':1,'105674':1,'105676':1,'105678':1,'105696':1,'105754':1,'122':1,'105766':1,'105782':1,'105786':1,'105788':1,'104612':1,'102628':1,'104614':1,'102630':1,'105790':1,'105794':1,'105796':1,'105802':1,'104066':1,'103228':1,'105830':1,'105832':1,'105834':1,'105836':1,'105838':1,'105840':1,'105844':1,'105846':1,'105842':1,'105850':1,'105852':1,'105856':1,'105858':1,'105854':1,'105860':1,'105864':1,'105866':1,'105862':1,'105868':1,'105872':1,'105874':1,'105870':1,'105876':1,'105878':1,'105880':1,'103492':1,'105882':1,'105884':1,'105888':1,'102622':1,'246':1,'105900':1,'160':1,'105902':1,'105910':1,'105942':1,'105944':1,'105950':1,'105968':1,'106002':1,'1171468':1,'106022':1,'106028':1,'106030':1,'106034':1,'106040':1,'106048':1,'106092':1,'106094':1,'106096':1,'106118':1,'106120':1,'106122':1,'106124':1,'106126':1,'106128':1,'106130':1,'106132':1,'106134':1,'106138':1,'106136':1,'105576':1,'106140':1,'106142':1,'106144':1,'106146':1,'106148':1,'106150':1,'106152':1,'106154':1,'106156':1,'106162':1,'106160':1,'106164':1,'106166':1,'106168':1,'106170':1,'106172':1,'106174':1,'106176':1,'106178':1,'106180':1,'106182':1,'106184':1,'106188':1,'106186':1,'106190':1,'106192':1,'106198':1,'106200':1,'106194':1,'106196':1,'106202':1,'106204':1,'106208':1,'106206':1,'106210':1,'106212':1,'106214':1,'106216':1,'106218':1,'106220':1,'106222':1,'106224':1,'106228':1,'106230':1,'106226':1,'106232':1,'106234':1,'106236':1,'106240':1,'106242':1,'106238':1,'106244':1,'106246':1,'106250':1,'106252':1,'106248':1,'106254':1,'106256':1,'106260':1,'106264':1,'106266':1,'106272':1,'106280':1,'106286':1,'106282':1,'106290':1,'106292':1,'106294':1,'106296':1,'106298':1,'106300':1,'106304':1,'106306':1,'106308':1,'106310':1,'106312':1,'106316':1,'106314':1,'106318':1,'106320':1,'106322':1,'106324':1,'106326':1,'106338':1,'106340':1,'106342':1,'106374':1,'106386':1,'106388':1,'106394':1,'106414':1,'106426':1,'106436':1,'106456':1,'106462':1,'105244':1,'106468':1,'106496':1,'106498':1,'103160':1,'106500':1,'106502':1,'106506':1,'1275510':1,'1138055':1,'1285835':1,'103630':1,'103464':1,'106518':1,'106522':1,'106536':1,'106542':1,'106546':1,'106556':1,'1301901':1,'106566':1,'106564':1,'106574':1,'106578':1,'106582':1,'106592':1,'106580':1,'103280':1,'106590':1,'106594':1,'106598':1,'106600':1,'106606':1,'106610':1,'106612':1,'106650':1,'106664':1,'106670':1,'106684':1,'106692':1,'106694':1,'106698':1,'1218741':1,'106704':1,'106722':1,'106724':1,'106726':1,'1285950':1,'106816':1,'106836':1,'106840':1,'106842':1,'105898':1,'100604':1,'106908':1,'107050':1,'107052':1,'107054':1,'107056':1,'107058':1,'107060':1,'107062':1,'107064':1,'107066':1,'107068':1,'107070':1,'107072':1,'107074':1,'107076':1,'107078':1,'107080':1,'107082':1,'107084':1,'107086':1,'107088':1,'107090':1,'107092':1,'107094':1,'107096':1,'107098':1,'107100':1,'107102':1,'107104':1,'107106':1,'107108':1,'107110':1,'107112':1,'107114':1,'107116':1,'107118':1,'107120':1,'107122':1,'107124':1,'107126':1,'107128':1,'107130':1,'107132':1,'107134':1,'107136':1,'107138':1,'107140':1,'107142':1,'107144':1,'107146':1,'107148':1,'107150':1,'107186':1,'107188':1,'107190':1,'107236':1,'107248':1,'107276':1,'107278':1,'107304':1,'107306':1,'107312':1,'107314':1,'107328':1,'107334':1,'107342':1,'107344':1,'107346':1,'107350':1,'107352':1,'107370':1,'107376':1,'107378':1,'1249995':1,'1270969':1,'1666789':1,'1666935':1,'1666791':1,'1666793':1,'1666797':1,'1666801':1,'1666803':1,'1666906':1,'1666805':1,'1666807':1,'1666890':1,'1666809':1,'1666873':1,'1666862':1,'1666811':1,'1666813':1,'1666815':1,'1666843':1,'1666817':1,'1666821':1,'1666823':1,'1666825':1,'1666835':1,'1666939':1,'1666838':1,'1666840':1,'101542':1,'103564':1,'104264':1,'104266':1,'104268':1,'104270':1,'107420':1,'107422':1,'107472':1,'107474':1,'107478':1,'107486':1,'107524':1,'107526':1,'107586':1,'107590':1,'1285903':1,'107596':1,'107600':1,'107608':1,'107612':1,'107622':1,'107624':1,'107632':1,'107636':1,'107648':1,'107674':1,'107682':1,'107686':1,'107688':1,'107208':1,'107210':1,'107212':1,'106054':1,'107700':1,'107702':1,'107734':1,'105110':1,'107758':1,'107828':1,'107840':1,'107844':1,'107954':1,'105304':1,'105302':1,'108102':1,'108126':1,'108132':1,'108134':1,'108136':1,'108138':1,'108140':1,'108142':1,'106072':1,'108190':1,'108192':1,'108194':1,'106634':1,'108214':1,'108234':1,'108236':1,'108238':1,'108240':1,'108242':1,'108250':1,'108276':1,'108264':1,'104034':1,'104036':1,'108294':1,'108292':1,'108290':1,'108288':1,'108286':1,'107726':1,'108312':1,'108322':1,'108324':1,'108334':1,'108370':1,'108372':1,'108382':1,'108396':1,'108400':1,'108402':1,'108404':1,'108426':1,'108428':1,'105228':1,'105230':1,'105812':1,'106636':1,'106642':1,'108208':1,'108210':1,'108344':1,'108348':1,'104676':1,'108446':1,'1336625':1,'1336639':1,'1336628':1,'1336631':1,'1336636':1,'108270':1,'108392':1,'100762':1,'101098':1,'101100':1,'102834':1,'104608':1,'104616':1,'102626':1,'104618':1,'162':1,'108462':1,'108464':1,'108466':1,'108468':1,'108470':1,'1648023':1,'108480':1,'107234':1,'108340':1,'108342':1,'108488':1,'108490':1,'108492':1,'108494':1,'108496':1,'108498':1,'108500':1,'108508':1,'108648':1};
var comstar={'726':1,'749':1,'717':1,'725':1,'723':1,'721':1,'718':1,'750':1,'716':1,'724':1,'722':1,'720':1,'714':1,'719':1,'715':1,'727':1};
var currentPage = 0;
var $sw=0;

var $hl_id = '-1';
var $hl_def_op = '-1';
var $hl_longbar = false;
var $hl_longlowbar = false;

var $fmcheck = '-1';
var $ret_info_js1 = null;
var $ik="bonus1"
var $Arraytxi = new Array();
var $ArrayCom = new Array();
var $previd = 0;
var $icount =0;
var $Ar_search = new Array();

function Search_fill(){
	var $opcnt=0;

	for (var $tmp in $ga_jcfg['operators']) {
		if (($tmp<1999)&&($no_search_op[$tmp]!=1)&&($ga_jcfg['operators'][$tmp]['name'].indexOf('без комиссии')<0)){
			$Ar_search[$opcnt]={'value':$tmp,'label':$ga_jcfg['operators'][$tmp]['name'],'bank':'0','img':''};
			$opcnt++;	
		}
	}
	//alert($Ar_search[$opcnt-1]['value']+';'+$opcnt);
/*	if (typeof(bank_compl)!='undefined'){
		for (var $ac = 0; $ac<bank_compl.length;$ac++){
			$Ar_search[$opcnt]={'value':bank_compl[$ac]['bic'],'label':bank_compl[$ac]['label'],'bank':'1','img':bank_compl[$ac]['img']};
			$opcnt++;	
		}
	}*/
	//alert($Ar_search[$opcnt-1]['label']+';'+$opcnt);
}


function writeCookie(name, value, days){
if(days){
(time = new Date()).setTime(new Date().getTime()+days*24*60*60*1000);
var exp = '; expires='+time.toGMTString();
}else{
var exp='';
}
document.cookie=name+"="+value+exp+"; path=/";
}
function readCookie(name){
var cookies = document.cookie.split(';');
for(var i=0; i<cookies.length; i++){
var cookie=cookies[i].replace(/^\s+/, '');
if (cookie.indexOf(name+'=')==0) return cookie.substring(name.length+1);
}
return null;
}
function eraseCookie(name){
writeCookie(name, "", -1);
}


function show_bonus($ssum,$div_name)
{
writeCookie('step',1,1);
$ik=$div_name;

if ($ssum != 1132) {
document.getElementById($div_name).style.top="95px";}
else
{
document.getElementById($div_name).style.top="580px";	
}

document.getElementById("bonus_meg").SetVariable("tst",$ssum);
document.getElementById("bonus_meg").SetVariable("end",1);
}

function hide_bonus()
{
document.getElementById($ik).style.top="-1300px";
document.getElementById("bonus_meg").SetVariable("end",0);
location.reload();
}


function if3_ret_func($__s) {
	// alert('pre - if3_callback !');
	// alert('received val: ' + $__s);


	var $inc_ret_info_js_temp = false;
	try {
		eval($__s);
	}
	catch($s) {
		if3_Log('!!!IF3_RET_FUNC!!!\n\nraises exception on expression:\n\n"' + $__s + '"');
	}

	if (!$inc_ret_info_js_temp) {
		if3_Log('!!!IF3_RET_FUNC!!!\n\npossible wrong result of an expression ($inc_ret_info_js_temp == false):\n\n"' + $__s + '"');
	}
	else {
		$ret_info_js = $ret_info_js_temp;
		// $info_over = $ret_info_js;
	}


	// if3_Log('if3_ret_func');
	// alert( $ret_info_js_temp +'|'+ $inc_ret_info_js_temp );
	// MjCRIODA($ret_info_js1);
	// alert('fin - if3_callback !');
}


function if3_callback($__s) {
	// alert('pre - if3_callback !');
	// alert('received val: ' + $__s);


	var $inc_ret_info_js_temp = false;
	try {
		eval($__s);
	}
	catch($s) {
		if3_Log('!!!IF3_CALLBACK!!!\n\nraises exception on expression:\n\n"' + $__s + '"');
	}

	if (!$inc_ret_info_js_temp) {
		if3_Log('!!!IF3_CALLBACK!!!\n\npossible wrong result of an expression ($inc_ret_info_js_temp == false):\n\n"' + $__s + '"');
	}
	else {
		$ret_info_js = $ret_info_js_temp;
		// $info_over = $ret_info_js;
	}


	// alert('bill_info.sum' + $ret_info_js['payment']['bill_info']['sum']);
	// $info_over = $ret_info_js['payment']['bill_info']['sum'];

	var $s_to = $ret_info_js['cid'].replace(/:/g, '|');
	// alert('callback cid: ' + $s_to);
	if3_Log('------ if3_callback called with CID: "'+$ret_info_js['cid']+'", rising event command: "'+$s_to+'"');
	_processEvt($s_to);


	// alert( $ret_info_js_temp +'|'+ $inc_ret_info_js_temp );
	// MjCRIODA($ret_info_js1);
	// alert('fin - if3_callback !');
}



function add_term_info() {
	create_vpa('VIEW_TERMINFO_CURRENT_TIME', 'create_current_time', '-1', '-1');
	mj_RT.Add('timer_refresh', 756, 0);
	create_vpa('VIEW_TERMINFO_SUPPPHONE', 'create_supphone', '-1', '-1');
	create_vpa('VIEW_TERMINFO_TERMNUMBER', 'create_termnunmber', '-1', '-1');

	create_vpa('SOUND_CONTROL', 'create_sound_a', '-1', '-1');
	if ('undefined' !== typeof($ga_skp['VIEW_LOCALE_SELECT'])) {
		create_vpa('VIEW_LOCALE_SELECT', 'create_locale_select', '-1', '-1');
	}
}

/*function add_backtimer() {
create_vpa('VIEW_BACKTIMER', 'create_BACKTIMER', '-1', '-1');
mj_RT.Add('backtimer_refresh', 756, 0);
} */



// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
var $gs_marquee_text = MainMenuMarqueeString; // 'Итыть, бегю.строка.тут.вот!';
var $gs_comission_text = '';

var $gs_localbase_included = false;        //        инициализирована ли уже база номерных емкостей
var $go_operator_icon = null;                //  граф. объект-иконка оператора

var $g_forced_mobile_selection = false;                // принудительный выбор мобильного опреатора при невозможности опеределения онного по базе номерных емкостей

var $gs_global_check_handler = 'fields_preCheck()';
var $gs_overload_check_page = false;


var $g_vpaincreation = '';

var $g_is_metro_recepient = false;

var $fields_count = 0;

var $opObjMark = false;

var $g_current_processor = '-1';
var $g_current_i_type = '-1';


function create_ssaver($__v) {
	var $i=5;
	$i = ++$i + ++$i;
//	alert('alive: '+$i);

	var $v = $g_vpa[$__v]['v'];
	var $s = $g_vpa[$__v]['s'];

	var $o = $v.AddD(400, 400);
	$o.MoveTo(1, 0, 0);
	$o.SizeTo(1, 400, 400);

	$o.Border(1, '7px solid #ff0000');
	$o.SetBG(1, '#990000');

	$o.AddHandler("alert('wow!')");

	alert('done.');

}

// 0, 1, 2
$g_curent_helper_state = -1;
$g_need_to_create_helper = 0;
$gl_helper_html_idx = null;

function change_helper_state($__s) {
	// if (typeof($g_vpa['VIEW_HELPER']) === 'undefined') return;
	if (!$gl_helper_html_idx) return;

	if ($g_curent_helper_state == $__s) return;

	var $sk = SKP('VIEW_HELPER');
	// change helper view
	/*
	MJGA($g_vpa['VIEW_HELPER']['v'].o.i).innerHTML = '<embed src="../../skins/'+SkinName+'/i/'+$ga_skp_mods['helper'][$__s]+'" width="'+GTX($sk.r[2])+'" height="'+GTY($sk.r[3])+'" autostart="true" quality="best" wmode="transparent">';

	*/


	mj_G._a[$gl_helper_html_idx]['i'].innerHTML = '<embed src="../../skins/'+SkinName+'/i/'+$ga_skp_mods['helper'][$__s]+'" width="'+GTX($sk.r[2])+'" height="'+GTY($sk.r[3])+'" autostart="true" quality="best" wmode="transparent">';

	$g_curent_helper_state = $__s;

}



// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function if3_GetOpPage($__id) {
	// var $opId = getParameter('recepient', -1);
	// alert($opId);

	if (($__id >= 0) && (meha_IS('$ga_jcfg.operators['+$__id+'].iface_params.scen')) ) {
		return 'if3';
	}
	else {
		return 'data-entry';
	}


}



// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function main_loop()
{
	if ((!$is_ressur_mode) && (!$is_debug)) {
		mj_RT.Add('document.focus', 200, 1);
		mj_RT.Add('document.focus', 20000, 0);
	}


	// mj_RT.Add('alert("Yap!")', 1000, 4);
	// - - - - - - картинка для отображения на фоне
	// cvp_G = new MJ_VP(-1, -1, 100, 100, 1280, 1020, 'DIV', '#993333');
	/*
	/*
	var $sk = SKP('MAIN');
	cvp_G = new MJ_VP(-1, -1, 0, 0, 1280, 1024, 'IMG', $sk.i);
	if ($mg_g_vp_debug && $is_show_hi) cvp_G.o.Opacity(0, 0.7);
	cvp_G.Finalize(true);
	*/

	// - - - - - - debug info
	var $sss = 'locale test: ' + LCP('achtung')+'\n\nMAIN loop alive with:\n';
	$sss += 'fupath: ' + $mj_g_pathwc + ',\nlocale: ' + $mj_g_locale + ',\ndocnme: ' + $mj_g_docnme+'\n\n';
	$sss += 'realpath: '+document.location.href;
	CybIf_Logger(CYBIF_LOG_NFO, $sss);

	if3_Log('if2.main_loop(): перешел на: "'+$mj_g_docnme+'"');
	_processEvt('_cmd|get_saved_money|res=returned_money');
	if3_DoCommand('start_check_timer', { 'com': 'start_check_timer by main_loop('+$mj_g_docnme+')' } );


	// CybIf_Logger(1, $sss);
	// alert($sss);
	if ($is_debug === true) {
		var $sk = SKP('DEBUG_TOP_BIG');
		set_rect_text(cvp_G, [0, 0, 800, 30], $sk, $sss);
	}



	// - - - - - - detecting metro recepient
	var $opObj = jcfg_findOperatorById( getParameter('recepient', -1) );
	if ($opObj !== -1) {
		if ($opObj['processor']['type'] === 'Cyberplat_Metro') {
			$g_is_metro_recepient = true;
		}
		$g_current_processor = $opObj['processor']['type'].toLowerCase();
		$g_current_i_type = $opObj['i_type'];
	}
	// alert('passed!');

	/*
	_processAct('_cmd|delete_info|res=_all_');
	_processAct('_cmd|get_saved_money|res=saved_sum');

	*/

	// - - - - - - main action switch
	// alert($mj_g_docnme);
	switch ($mj_g_docnme.toLowerCase()) {

		// - - - - - - - - - - - - - - - - - - - - - - - -
		case 'if3.html':
		// alert('scen!!!');


		if3_Main();
		break;


		// - - - - - - - - - - - - - - - - - - - - - - - -
		// interface main page
		case 'main.html':
		eraseCookie('prnerror');
		add_term_info();
		create_vpa('VIEW_MARQUEE', 'create_marquee', '-1', '-1');

		if (!parseInt($ga_jcfg['config']['ShowTitleScreen'])) {
			$g_current_vpa = create_vpa('VIEW_MAINMENU', 'create_menu_icons', '-1', '-1');
			PlaySoundA('choose_operators');
		}
		else {
			// alert('title screen');
			$g_current_vpa = create_vpa('VIEW_TITLESCREEN', 'create_title_screen', '-1', '-1');

			// title_menu_1.gif
		}
		// $g_current_vpa = create_vpa('VIEW_OPERATORS', 'create_menu_germany', '-1', '-1');
		// alert($g_current_vpa);
		if (!$is_ressur_mode) {
			create_vpa('VIEW_OP_MARK1', 'create_ad_vp', '-1', $g_current_vpa);
		}
		//create_vpa('VIEW_OP_MARK2');

		// PlaySoundA('choose_operators');

		// play_sound('choose_operators');
		// create_vpa('SSAVER', 'create_ssaver', '-1', '-1');
		eraseCookie('step');
		eraseCookie('init_sum');
		eraseCookie('field99');
		//Search_fill();
		break;



		// - - - - - - - - - - - - - - - - - - - - - - - -
		// interface recipient requisites input page
		case 'data-entry.html':
		$sw=0;
		var $opId = getParameter('recepient', -1);
		 var $err = getParameter('err', -1);
		if (($opId==778)&&!(getParameter('school'))) {document.location.href = 'tc.html?error=0'}
		if ($opId==777) {document.location.href = 'osmi.html'}
		if ($opId==756) {document.location.href = 'SMSMedia.html'}
		if ($opId==893) {document.location.href = 'oic.html'}
		// alert($opId);
		/*
		if (($opId >= 0) && (meha_IS('$ga_jcfg.operators['+$opId+'].iface_params.scen')) ) {
		$goto_locdoc = 'if3';
		alert('here for ID: '+ $opId);
		if3_Main();
		break;
		}
		*/

		// _processEvt('_top|if3');



		add_term_info();
		$gs_marquee_text = jcfg_getCommissionText(getParameter('recepient', -1));
		//create_vpa('VIEW_MARQUEE', 'create_marquee', '-1', '-1');

		if (!$is_ressur_mode) {
			create_vpa('VIEW_OP_MARK2');



			if (meha_IS('$ga_skp_mods._helper') && ($ga_skp_mods._helper)) {
				// if ()

				if ( MjGetAL($opObj.fields) < 3) {
					// create_vpa('VIEW_HELPER');
					$g_need_to_create_helper = true;

					// $gl_helper_html =
				}
				// MjCRIODA($g_vpa['VIEW_HELPER']);
				// alert( MJGA($g_vpa['VIEW_HELPER']['v'].o.i).innerHTML );



			}


		}

		var $is_main_vp_created = false;

		var $pr = $g_current_processor.toLowerCase();
		var $i_pr = $g_current_i_type.toLowerCase();

		var $state = getParameter('state', '-1');


		if (($state !== '-1') && ($i_pr == 'comm_plat')) {
			switch ($state) {

				// - - - - - - -
				case 'auth_check':
				create_vpa('VIEW_MESSAGE', 'show_message_comm_plzwait', '-1', '-1');
				$is_main_vp_created = true;
				break;


				// - - - - - - -
				case 'auth_check_complete':

				// ошибко?
				if ('undefined' !== typeof($ga_cptgl['error']) &&  ($ga_cptgl['error'] != 0) ) {
					// if ('undefined' !== typeof($ga_cptgl['error']) ) {
					$g_current_vpa = create_vpa('VIEW_MESSAGE', 'show_message_comm_error', '-1', '-1');
					$is_main_vp_created = true;
				}
				else {
					//alert(typeof($ga_cptgl['meters']));
					
					if (typeof($ga_cptgl['meters']) == 'string') {
						// alert('hara');
						//alert(Parameters['account']);
						
						Parameters['field100'] = Parameters['account'];
						goto_Check();
					}
					else {
						// спрашивать про ввод счетчиков?
						if ( ('undefined' !== typeof($opObj['iface_params'])) &&  ('undefined' !== typeof($opObj['iface_params']['ask_counters_disable'])) ) {
							// alert('dontaskctrs');
							Parameters['state'] = 'do_meters';
							// goto_Loc("data-entry.html?"+goto_get_allurlparams() );
							// !!! и, далее, по тексту )
						}
						
						else {
							//goto_Loc("data-entry.html?"+goto_get_allurlparams());
							//$g_current_vpa = create_vpa('VIEW_MESSAGE', 'show_message_comm_dometers', '-1', '-1');
							//$is_main_vp_created = true;
							Parameters['state'] = 'do_meters';
							//break;
						}
					}
                                        

					// если есть счетчики, спрашиваем, вводить, иль нет....
					// Parameters['state'] = 'communal_meters';
					// goto_Loc('message.html?'+goto_get_allurlparams());
					// goto_Loc('data-entry.html?'+goto_get_allurlparams());

					// если нет, на чекинг



				}
				break;
			}
		}


		// - - - -
		if (!$is_main_vp_created) {
			if (!$g_is_metro_recepient) {
				$g_current_vpa = create_vpa('VIEW_ACCOUNT_DETAILS', 'create_account_fields', '-1', '-1');
				PlaySoundA('enter_number');
			}
			else {
				if (getParameter('cmd', 'unknown') == 'showmenu') {
					$g_current_vpa = create_vpa('VIEW_METRO_MENU', 'create_metro_menu', '-1', '-1');
				}
				else {
					$g_current_vpa = create_vpa('VIEW_METRO_MENU', 'create_metro_message', '-1', '-1');
				}
			}
		}


		// create_vpa('VIEW_ACCOUNT_INLET', 'create_pinpad', '-1', '-1');
		if (($opId==1000)||($opId==1003)||($opId==1004)||($opId==1007)||($opId==1005)||($opId==1010)) {
			mj_RT.Add('goto_Main', 300000, 0);
		}
		else {
			mj_RT.Add('goto_Main', 120000, 0);
		}
		

		break;

		// - - - - - - - - - - - - - - - - - - - - - - - -
		// interface recipient requisites online checking page
		case 'checking.html':
		add_term_info();
		// case 'checkingg.html':

		if (!$is_ressur_mode) {
			create_vpa('VIEW_OP_MARK1', 'create_ad_vp', '-1', '-1');
		}
		//create_vpa('VIEW_OP_MARK2');
		$gs_marquee_text = jcfg_getCommissionText(getParameter('recepient', -1));
		//create_vpa('VIEW_MARQUEE', 'create_marquee', '-1', '-1');


		create_vpa('VIEW_MESSAGE', 'show_message_checking', '-1', '-1');

		break;

		// - - - - - - - - - - - - - - - - - - - - - - - -
		// interface payment, cash-in page
		case 'payment.html':
		eraseCookie('field99');
		add_term_info();
		var $s_timeout_func = 'goto_Loc("Payment.html?end=1&'+goto_get_allurlparams()+'");';
		mj_RT.Add($s_timeout_func, 75000, 0);
		// create_vpa('VIEW_OP_MARK1', 'create_ad_vp', '-1', '-1');
		// create_vpa('VIEW_OP_MARK2');
		if (!$is_ressur_mode) {
			create_vpa('VIEW_OP_MARK1', 'create_ad_vp', '-1', '-1');
		}
		//$gs_marquee_text = jcfg_getCommissionText(getParameter('recepient', -1));
		$gs_marquee_text = '';//jcfg_getCommissionText(getParameter('recepient', -1));
        $gs_comission_text = jcfg_getCommissionText(getParameter('recepient', -1),0,'get with BR');
		//create_vpa('VIEW_MARQUEE', 'create_marquee', '-1', '-1');
		//create_vpa('VIEW_OP_MARK2');


		create_vpa('VIEW_MESSAGE_COMISSION', 'show_comission_in_payment', '-1', '-1');
		create_vpa('VIEW_MESSAGE_PAYMENT', 'show_message_payment', '-1', '-1');
		//create_vpa('VIEW_MESSAGE', 'show_message_payment', '-1', '-1');


		// alert(document.location.href);

		break;

		// - - - - - - - - - - - - - - - - - - - - - - - -
		// interface payment complete info page
		case 'paymentcomplete.html':
		add_term_info();
		eraseCookie('step');
		eraseCookie('init_sum');
                var opId = Parameters['recepient'];
		if ('undefined' !== typeof($opObj['marketing_operator_id']) ) {
			$opObjMark = jcfg_findOperatorById( $opObj['marketing_operator_id'] );
		}

		$g_current_vpa = create_vpa('VIEW_MESSAGE', 'show_message_thanks', '-1', '-1');
		if (!$is_ressur_mode) {
			create_vpa('-VIEW_OP_MARK1', 'create_ad_vp', '-1', '-1');
		}

		if ('undefined' !== typeof($opObj['marketing_operator_id']) ) {

			if (!$is_ressur_mode) {
				$ga_skp['VIEW_OP_MARK3'].t['allow_flash'] = true;
				$ga_skp['VIEW_OP_MARK3'].r = [120, 350, 1011, 456],
				$ga_skp['VIEW_OP_MARK3'].b = false;
				$ga_skp['VIEW_OP_MARK3'].f = $opObjMark['rootmenuimage'];
			}



		}
		if ((!$is_ressur_mode)&&(opId != 671)&&(opId != 673)) 
		//if (!$is_ressur_mode)
		{
			if (opId==778) {
				create_vpa('-VIEW_OP_MARK3', 'create_tc_ok', '-1','-1');
			}
			else
			{
				create_vpa('-VIEW_OP_MARK3');
			}
		}
		else
		{
			create_vpa('-VIEW_OP_MARK33');
		}
		if (opId==677) {
		var $s_timeout_func = 'goto_Loc("main.html");';
		mj_RT.Add($s_timeout_func, 3000, 0);
		}

		break;

		// - - - - - - - - - - - - - - - - - - - - - - - -
		// ошибка проверки номера
		// !!! only after 'checking.html'
		// соотв, только при online-режиме
		case 'full-screen-message.html':
		add_term_info();
		if (!$is_ressur_mode) {
			create_vpa('VIEW_OP_MARK1', 'create_ad_vp', '-1', '-1');
		}
		create_vpa('VIEW_MESSAGE', 'show_message_error', '-1', '-1');

		mj_RT.Add('goto_Main', 7000, 0);
		break;

		// - - - - - - - - - - - - - - - - - - - - - - - -
		// service menu
		// !!!! only after 'data-entry.html'
		case 'service.html':
		add_term_info();
		break;

		// - - - - - - - - - - - - - - - - - - - - - - - -
		// shows terminal error
		case 'terminal_error.html':
		add_term_info();
		create_vpa('VIEW_MESSAGE', 'show_message_termerror', '-1', '-1');
		break;



		// - - - - - - - - - - - - - - - - - - - - - - - -
		case 'message.html':
		add_term_info();
		writeCookie('prnerror',1,1);
		if (!$is_ressur_mode) {
			create_vpa('VIEW_OP_MARK1', 'create_ad_vp', '-1', '-1');
		}
		create_vpa('VIEW_MESSAGE', 'show_message_message', '-1', '-1');
		break;

		// - - - - - - - - - - - - - - - - - - - - - - - -
		case 'message_no_get_change.html':
		add_term_info();
		if (!$is_ressur_mode) {
			create_vpa('VIEW_OP_MARK1', 'create_ad_vp', '-1', '-1');
		}
		create_vpa('VIEW_MESSAGE', 'show_message_nochange', '-1', '-1');
		break;

		// - - - - - - - - - - - - - - - - - - - - - - - -
		case 'printererror.html':
		add_term_info();
		if (!$is_ressur_mode) {
			create_vpa('VIEW_OP_MARK1', 'create_ad_vp', '-1', '-1');
		}
		create_vpa('VIEW_MESSAGE', 'show_message_prnerror', '-1', '-1');
		break;

		// - - - - - - - - - - - - - - - - - - - - - - - -
		case 'rules.html':
		add_term_info();
		if (!$is_ressur_mode) {
			create_vpa('VIEW_OP_MARK1', 'create_ad_vp', '-1', '-1');
		}
		create_vpa('VIEW_RULES', 'show_rrles', '-1', '-1');
		break;

		case 'oic.html':
		/*add_term_info();
		if (!$is_ressur_mode) {
			create_vpa('VIEW_OP_MARK1', 'create_ad_vp', '-1', '-1');
		}*/
		mj_RT.Add('goto_Main', 120000, 0);
		break;
        
	        case 'bank.html':
		//alert('here');
		if (!$is_ressur_mode) {
			create_vpa('VIEW_OP_MARK1', 'create_ad_vp', '-1', '-1');
		}
                add_term_info();
		$g_current_vpa = create_vpa('VIEW_MARQUEE', 'create_marquee', '-1', '-1');
		create_vpa('VIEW_TEXT22', 'banks_vp', '-1', '-1');
		mj_RT.Add('goto_Main', 120000, 0);

		
		break;

	        case 'osmi.html':
		//alert('here');
		if (!$is_ressur_mode) {
			create_vpa('VIEW_OP_MARK1', 'create_ad_vp', '-1', '-1');
		}
                add_term_info();
		$g_current_vpa = create_vpa('VIEW_MARQUEE', 'create_marquee', '-1', '-1');
		create_vpa('VIEW_TEXT22', 'banks_vp', '-1', '-1');
		mj_RT.Add('goto_Main', 220000, 0);

		
		break;
	        case 'bank1.html':
		//alert('here');
		if (!$is_ressur_mode) {
			create_vpa('VIEW_OP_MARK1', 'create_ad_vp', '-1', '-1');
		}
        add_term_info();
		$g_current_vpa = create_vpa('VIEW_MARQUEE', 'create_marquee', '-1', '-1');
		create_vpa('VIEW_TEXT33', 'banks_name', '-1', '-1');
		mj_RT.Add('goto_Main', 120000, 0);

		
		break;

	        case 'search_op.html':
			if (!$is_ressur_mode) {
				create_vpa('VIEW_OP_MARK1', 'create_ad_vp', '-1', '-1');
			}
		        add_term_info();
			$g_current_vpa = create_vpa('VIEW_MARQUEE', 'create_marquee', '-1', '-1');
			create_vpa('VIEW_TEXT33', 'banks_name', '-1', '-1');
			mj_RT.Add('goto_Main', 120000, 0);
		
		break;


	        case 'choice.html':
		//alert('here');
		if (!$is_ressur_mode) {
			create_vpa('VIEW_OP_MARK1', 'create_ad_vp', '-1', '-1');
		}
        add_term_info();
		if (getParameter('publico')==1){
			create_vpa('VIEW_BONUSMEG', 'choice_public', '-1', '-1');

		}
		else if (getParameter('alfa')==1) {
			create_vpa('VIEW_BONUSMEG', 'alfa_choice', '-1', '-1');
		}
		else
		{
			create_vpa('VIEW_TEXT22', 'create_addd_vp', '-1', '-1');
		}

		mj_RT.Add('goto_Main', 120000, 0);

		
		break;

	        case 'tc.html':
		//alert('here');
		if (!$is_ressur_mode) {
			create_vpa('VIEW_OP_MARK1', 'create_ad_vp', '-1', '-1');
		}
                add_term_info();
		$g_current_vpa = create_vpa('VIEW_MARQUEE', 'create_marquee', '-1', '-1');
		create_vpa('VIEW_TEXT22', 'tc_vp', '-1', '-1');
		

		
		break;

		case 'search.html':
		add_term_info();
		if (!$is_ressur_mode) {
			create_vpa('VIEW_OP_MARK1', 'create_ad_vp', '-1', '-1');
		}
		create_vpa('VIEW_BONUSMEG', 'search_vp', '-1', '-1');
		break;

		// - - - - - - - - - - - - - - - - - - - - - - - -
		default:
		// add_term_info();
		goto_Loc('terminal_error.html?iferr=interface_no_page');
		break;

	} // switch(filename) - main interface switch

	if3_DoCommand('stop_check_timer', { 'com': 'stop_check_timer by main_loop('+$mj_g_docnme+')' } );

} // main_loop()


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// get graphics primitive object, based on MJ_V from global array
function MJGA($__index) {
	return mj_G._a[$__index]['i'];
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function create_sound_a($__v) {
	// alert($__v);

	var $v = $g_vpa['SOUND_CONTROL']['v'];
	// MJGA($v.o.i).innerHTML = 'test version!!!<br /><br />not for commercial use';
	// MjCRIODA($v);
	// wahhh!
}


function play_sound($__sound_id) {

	// play_sound(choose_operators)
	var $op_snd = LCP('sound_files')[$__sound_id];

	var $v = $g_vpa['SOUND_CONTROL']['v'];
	// MJGA($v.o.i).innerHTML = '\<BGSOUND SRC="sound/'+$op_snd+'" LOOP="1"\>';
	document.write('\<BGSOUND SRC="sound/'+$op_snd+'" LOOP="1"\>');

}


// view points name accociated array
/*
format:
'name' : {
v: viewport object
s: skin object in skin array
p: parent's name, placed in array
i: id, passed to create_vpa

bl: button's left array
br: button's right array
},
etc...

*/
var $g_vpa = new Array();
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// create VPA (view port in array) if not exists
/*
params:
$__skp - skin property in skp.js
$__func_subels - function, that generates VP subelements
$para - misc parameter for???? _ $__func_subels
*/

var $g_current_vpa = '';


function create_vpa($__skp, $__func_subels, $__id, $__parent)
{
	var $no_func_buttons_change = false;
	if ('-' === $__skp.substring(0, 1)) {
		$no_func_buttons_change = true;
		$__skp = $__skp.substring(1);
	}


	var $name = $__skp;
	if (arguments.length > 1) {
		$name += (($__id != -1) ? ('_'+$__id) : '');
	}

	$g_vpaincreation = $name;

	// if vpa was created - show+activate it and exit!
	if ('undefined' !== typeof($g_vpa[$name])) {
		$g_vpa[$name]['v'].Show(1, 1);
		return $name;
	}

	// alert('skp: '+$__skp+', id: '+$__id+', name: '+$name);
	// else create new vpa and activate it!

	$g_vpa[$name] = new Array();
	var $v = $g_vpa[$name];
	/*
	alert($name);
	$g_vpa[$__id] = new Array();
	var $v = $g_vpa[$__id];
	*/
	$v['s'] = SKP($__skp);


	// if image defined, creating image-based viewport
	if (false !== $v['s'].i) {
		// alert('here!');
		if ( ('undefined' !== typeof($v['s'].is_marketing)) && ($v['s'].is_marketing) ) {
			// alert($v['s'].f);
			$v['v'] = new MJ_VP(cvp_G, -1, $v['s'].r[0], $v['s'].r[1], $v['s'].r[2], $v['s'].r[3], 'IMG', $v['s'].f, true);

		}
		else {
			$v['v'] = new MJ_VP(cvp_G, -1, $v['s'].r[0], $v['s'].r[1], $v['s'].r[2], $v['s'].r[3], 'IMG', $v['s'].i);
		}

	}
	// else creating DIV-based viewport with customed background
	// PS if specifyed .f parameter, using flash compoenent
	else {                         
		if ($v['s'].b !== false) {
			$v['v'] = new MJ_VP(cvp_G, -1, $v['s'].r[0], $v['s'].r[1], $v['s'].r[2], $v['s'].r[3], 'DIV', $v['s'].b);
		}
		else {
			$v['v'] = new MJ_VP(cvp_G, -1, $v['s'].r[0], $v['s'].r[1], $v['s'].r[2], $v['s'].r[3], 'DIV');
		}

		if ( ('undefined' !== typeof($v['s'].t)) && ('undefined' !== typeof($v['s'].t.allow_flash)) &&  ($v['s'].t.allow_flash) ) {
			// if ('undefined' !== typeof($v['s']['t'].allow_flash)) {
			if ('undefined' !== typeof($v['s'].f)) {

				if ( ('undefined' !== typeof($v['s'].is_marketing)) && ($v['s'].is_marketing) ) {
					MJGA($v['v'].o.i).innerHTML = '<embed src="../../adv/'+$v['s'].f+'" width="'+GTX($v['s'].r[2])+'" height="'+GTY($v['s'].r[3])+'" autostart="true" quality="best" wmode="transparent">';
				}
				else {
					MJGA($v['v'].o.i).innerHTML = '<embed src="../../skins/'+SkinName+'/i/'+$v['s'].f+'" width="'+GTX($v['s'].r[2])+'" height="'+GTY($v['s'].r[3])+'" autostart="true" quality="best" wmode="transparent">';
					// alert( MJGA($v['v'].o.i).innerHTML );
				}
			}
		} // if

	}

	// - - - - - - create down buttons, if not exist
	if ('undefined' === typeof($ga_buttbig[0])) {
		create_bigbut(-2);
	}
	if ('undefined' === typeof($ga_buttbig[1])) {
		create_bigbut(-3);
	}
	// and hide them by default!


	if (!$no_func_buttons_change) {
		$ga_buttbig[0]['v'].Show(0, 1);
		$ga_buttbig[1]['v'].Show(0, 1);

		$v['bl'] = new Array();
		$v['bl']['s'] = 0;
		$v['bl']['n'] = '[BL]';
		$v['bl']['h'] = '';        // no handler

		$v['br'] = new Array();
		$v['br']['s'] = 0;
		$v['br']['n'] = '[BR]';
		$v['br']['h'] = '';        // no handler
	}

	// - - - - - - running subelement creation func
	if ( arguments.length > 1 ) {
		$v['p'] = $__parent;
		$v['i'] = $__id;
		if (typeof($__func_subels) == 'function') {
			// alert('hara!');
			$__func_subels($name);
			// $__func_subels($name);
			// alert('hara!');
		}
		else {
			eval($__func_subels+'($name);');
		};

		// alert('create_vpa: ' + $name + ' : ' + $__id);
	}
	else {
		$v['p'] = '';
		$v['i'] = '';
	}

	//  - - - - - - debug info
	if ($is_debug) {
		set_rect_text($v['v'], [0, 0, 10, 10], SKP('DEBUG_MINI_TEXT'), $name);

	}
	if ($__id==225)
	{
		set_rect_text($v['v'], [200, 220, 250, 10], SKP('VIEW_TEXT22'), 'Это оплата за ребенка за детский сад');
		set_rect_text($v['v'], [510, 220, 250, 10], SKP('VIEW_TEXT22'), 'Это оплата за кружки и т.д.');
	}

	// finalize viewport creation
	$v['v'].Finalize(1, 1);


	

	return $name;
}


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
var $a_srt = new Array();
/*
'm' - main text view element
'b' - background text view element
*/

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
/*
$__v - link to a vpa object
$__r - rect array [x,y,w,h] 4 view text in this vpa
$__s - skp array with font parameters
$__text - text oto view
*/
function set_rect_text($__v, $__r, $__s, $__text, $__am) {

	var $abs_middle = false;
	if (arguments.length > 4) {
		if ('undefined' !== typeof($__am)) {
			$abs_middle = true;
			// alert('Тру!');
		}
	}

	var $ia = $a_srt.length;
	$a_srt[$ia] = new Array();

	// add shadow text
	var $o = $__v.AddD($__r[0]+$__s.s[0], $__r[1]+$__s.s[0]);
	//        $o.SizeTo(1, $__r[2], $__r[3]);
	$o.SizeTo(1, GTX($__r[2]), $__r[3]);
	$a_srt[$ia]['b'] = $o;


	if ($abs_middle)  {
		var $style = "style='";
		$style += "font-family: "+$__s.f[0]+";";
		$style += "font-size: "+$__s.f[1]+'px'+";";
		$style += "font-weight: "+$__s.f[2]+";";
		$style += "color: "+$__s.s[1]+";";
		// $style += "background-color: #ff7777;";
		$style += "' ";

		mj_G._a[$o.i]['i'].innerHTML = '<table width="100%" height="100%"><tr><td '+$style+'valign="middle" align="center">'+$__text+'</td></tr></table>';
	}
	else {
		mj_G._a[$o.i]['i'].innerHTML = $__text;

		mj_G._a[$o.i]['i'].style["fontFamily"] = $__s.f[0];
		mj_G._a[$o.i]['i'].style["fontSize"] = $__s.f[1]+'px';
		mj_G._a[$o.i]['i'].style["fontWeight"] = $__s.f[2];

		mj_G._a[$o.i]['i'].style["color"] = $__s.s[1];
		mj_G._a[$o.i]['i'].style["textAlign"] = $__s.f[4];

		if ('undefined' !== typeof($__s.b)) {
			$o.SetBG(1, $__s.b);
			// set_rect_text
		}
	}


	// add top text
	var $o = $__v.AddD($__r[0], $__r[1]);
	//        $o.SizeTo(1, $__r[2], $__r[3]);
	$o.SizeTo(1, GTX($__r[2]), $__r[3]);
	$a_srt[$ia]['m'] = $o;


	if ($abs_middle)  {
		var $style = "style='";
		$style += "font-family: "+$__s.f[0]+";";
		$style += "font-size: "+$__s.f[1]+'px'+";";
		$style += "font-weight: "+$__s.f[2]+";";
		$style += "color: "+$__s.f[3]+";";
		$style += "' ";

		mj_G._a[$o.i]['i'].innerHTML = '<table width="100%" height="100%"><tr><td '+$style+'valign="middle" align="center">'+$__text+'</td></tr></table>';
	}
	else {
		mj_G._a[$o.i]['i'].innerHTML = $__text;

		mj_G._a[$o.i]['i'].style["fontFamily"] = $__s.f[0];
		mj_G._a[$o.i]['i'].style["fontSize"] = $__s.f[1]+'px';
		mj_G._a[$o.i]['i'].style["fontWeight"] = $__s.f[2];

		mj_G._a[$o.i]['i'].style["color"] = $__s.f[3];
		mj_G._a[$o.i]['i'].style["textAlign"] = $__s.f[4];
	}
	// alert($__v);
	if ($is_debug) {
		$o.Border(1, '1px dotted maroon');
	}



	return $ia;
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function change_srt_text($__id, $__text) {
	// $a_srt[$__id]['m'];

	mj_G._a[$a_srt[$__id]['m'].i]['i'].innerHTML = $__text;
	mj_G._a[$a_srt[$__id]['b'].i]['i'].innerHTML = $__text;
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
var $g_ia_text_timer = -1;
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function create_current_time($__v) {

	var $__s = $g_vpa[$__v]['s'];
	var $v = $g_vpa[$__v]['v'];
	$g_ia_text_timer = set_rect_text($v, [0, 0, $__s.r[2], $__s.r[3]] , $__s, GetTimeA());

	//         alert($g_ia_text_timer);
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function timer_refresh() {

	if ($g_ia_text_timer >= 0) {
		change_srt_text($g_ia_text_timer, GetTimeA());
	}

}




// -------------------------------------------------------
// -------------------------------------------------------
/*var $g_ia_text_backtimer = -1;
function create_BACKTIMER($__v) {

var $__s = $g_vpa[$__v]['s'];
var $v = $g_vpa[$__v]['v'];
$g_ia_text_backtimer = set_rect_text($v, [0, 0, $__s.r[2], $__s.r[3]] , $__s, GetBackTimer());

//         alert($g_ia_text_timer);
}

var $StartDateInHtml = new Date();

function GetBackTimer(){
var $TimeDiff = new Date() - $StartDateInHtml;
//*******
var timeout = ga_jcfg['config']['timeout_payment'];
if ('undefined' === typeof(timeout)){
timeout = 120;
}else{
timeout = (timeout > 120) ? 120 : timeout;
}
alert("timeout="+timeout);
//********
var ret = parseInt((120000-$TimeDiff)/1000);
var s = ret%60;
s = (s>9) ? s : '0'+s;
var mi = (ret-s)/60;
ret = (ret > 0 ) ? (mi+':'+s)  : '00:00';
return ret;
} */

/*function backtimer_refresh() {

if ($g_ia_text_backtimer >= 0) {
change_srt_text($g_ia_text_backtimer, GetBackTimer());
}

} */
// -------------------------------------------------------
// -------------------------------------------------------




// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function create_supphone($__v) {
	var $__s = $g_vpa[$__v]['s'];
	var $v = $g_vpa[$__v]['v'];
	set_rect_text($v, [0, 0, $__s.r[2], $__s.r[3]] , $__s, SupportString);
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function create_termnunmber($__v) {
	var $__s = $g_vpa[$__v]['s'];
	var $v = $g_vpa[$__v]['v'];

	var $s = LCP('terminal_no') + TerminalName;

	// alert('wow!');

	if (meha_IS('$ret_info_js.returned_money')) {
		// alert('wow1!');

		if ($ret_info_js.returned_money > 0) {
			$s += '<br />Внесено денег: '+$ret_info_js.returned_money+' руб.';
		}

	}
	// alert();
	// alert('wow2!');


	set_rect_text($v, [0, 0, $__s.r[2], $__s.r[3]] , $__s, $s);
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function create_menu_germany($__v) {

	var $__s = $g_vpa[$__v]['s'];
	var $v = $g_vpa[$__v]['v'];
	set_rect_text($v, [5, 05, $__s.r[2], 70], $__s, LCP('choose_operator'));

	var $s = '';

	var $sk = SKP('OPERATOR_ICON_GER');
	/*
	var $w = $sp.bd[0] + 40;
	var $h = $sp.bd[1] + 80;
	*/

	// getting max colums put into container
	var $yofs = 85;

	var $maxcols = 2; //Math.floor( $__s.r[2] / $sk.bd[0] );
	var $maxrows = 2; // Math.floor( ($__s.r[3] - $yofs) / $sk.bd[1] );


	var $xofs = Math.floor( ($__s.r[2] - $sk.bd[0]*$maxcols)/2 );
	// alert($maxcols);

	// var ndMenu=ndRoot.getElementsByTagName("menu").item(0);

	var $opofsx = parseInt(($sk.bd[0] - $sk.d[0])/2);
	var $opofsy = parseInt(($sk.bd[1] - $sk.d[1])/2);

	var $col = 0;
	var $row = 0;

	ndRoot=xmldoc.getElementsByTagName("root").item(0);
	ndOperators=ndRoot.getElementsByTagName("operators").item(0);

	// return;
	for (var i=0; i<ndOperators.childNodes.length; i++) {
		var ndOperator=ndOperators.getElementsByTagName("operator").item(i);
		if (ndOperator != null){

			var opId = ndOperator.attributes.getNamedItem('id').text;

			var opNme = ndOperator.getElementsByTagName("name").item(0).text;
			var opImg = ndOperator.getElementsByTagName("image").item(0).text;


			var $o = $v.AddI('germain/'+$sk.bi, $xofs + $col*$sk.bd[0], $yofs + $row*$sk.bd[1]);
			// alert($sk.bi);
			$o.AddHandler('goto_Loc("data-entry.html?recepient='+opId+'")');
			$v.AddI('germain/'+opImg, $xofs + $col*$sk.bd[0] + $opofsx, $yofs + $row*$sk.bd[1] + $opofsy +2);

			$col++;
			if ($col >= $maxcols) {
				$col = 0;
				$row++;


			}

			if($row > 0 && ($hl_group_num % 4 !== 0)){
				$xofs = Math.floor( ($width_full - ($spg.bd[0]+$spg.btw[0])*($hl_group_num % $maxcols))/2 );
			}

			if ($row >= $maxrows) {
				break;
			}


			// operator background
			// var $o = cvp_OP_SEL.AddI($sp.bi, $w*(opId % 2) , $h*(Math.floor(opId/2)) );
			/*
			$ipr = ndOperator.getElementsByTagName("processor").item(0);
			if ($ipr.attributes.getNamedItem('type').text == 'Cyberplat_PIN') {
			// if PIN, show cards
			$o.AddHandler('add_ShowCardsFor('+opId+')');
			}
			else {
			$o.AddHandler('add_EnterNumberFor('+opId+')');
			}
			*/

			// $o.Add
			// var $o = cvp_OP_SEL.AddI('op/'+opImg, $w*(opId % 2) + ($sp.bd[0]-$sp.d[0])/2 , $h*(Math.floor(opId/2)) + ($sp.bd[1]-$sp.d[1])/2 );

			// ($sp.bd[1]-$sp.d[1])/2

		}
	}



}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function create_marquee($__v)
{
	var $__s = $g_vpa[$__v]['s'];
	var $v = $g_vpa[$__v]['v'];

	// alert($__v);
	// MjCRIODA($v);
	$s_text = encodeURIComponent($gs_marquee_text);

	// var $v = cvp_G;
	// $v.o.i // SetBG(1, '#ff7777');
	// MJGA($v.o.i).innerHTML = '<param name="flashvars" value="myText"/\><param name="quality" value="high" /><embed src="../../skins/'+SkinName+'/swf/view_marquee.swf" FlashVars="myText='+$s_text+'" quality="best" wmode="transparent" width="'+$__s.r[2]+'" height="'+$__s.r[3]+'" align="center" autostart="true">';
	MJGA($v.o.i).innerHTML = '<marquee style="width='+$__s.r[2]+'px; height='+$__s.r[3]+'px; font-family: '+$__s.f[0]+'; font-size: '+$__s.f[1]+'px;">'+$gs_marquee_text+'</marquee>';
	//MJGA($v.o.i).innerHTML = '<marquee style="width=1000px; height=20px; font-family: '+$__s.f[0]+'; font-size: '+$__s.f[1]+'px;">'+$gs_marquee_text+'</marquee>';


	// $gs_marquee_textalert(GetComissionText(0));

}


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// adds operator logo or 'no_picture' image with text annotation
//
function gfxa_ins_oper_logo($v, $i, $x, $y, $minx, $miny, $t, $gr)
{

	// loading
	var $y_logo = $y-10;
	var $o_opimg = $v.AddI('op/'+detOpIco($i), $x, $y_logo);
	var $skp = SKP('OPERATOR_ICON');
	var $gi = SKP('GROUP_ICON');
	// set_rect_text($v, [$x, $y, $minx, $miny], SKP('OPERATOR_ICON'), $t);
	//        set_rect_text($v, [$x, $y_logo + $skp.d[1], $minx, $skp.f[1]], $skp, $t);
	//alert("$minx="+$minx+", $skp.d[0]="+$skp.d[0]+", GTX($skp.d[0])="+GTX($skp.d[0])+", $skp.d[1]="+$skp.d[1]+".");
	if ($gr=='1'){
		$hl_id = set_rect_text($v, [$x-30, $y_logo + $skp.d[1]-2, $minx+65, $miny], $gi, $t);
	}
	else
	{
		$hl_id = set_rect_text($v, [$x-15, $y_logo + $skp.d[1]+2, $minx+30, $miny], $skp, $t);
	}


	$hl_def_op = $t;
	return $o_opimg;


	// if (($o_opimg.w < $minx) && ($o_opimg.h < $miny)) {
	if (($o_opimg.w < $minx) && ($o_opimg.h < $miny)) {

		// if (($i1.width < $minx) || ($i1.height < $miny)) {
		// alert($i +' ('+$o_opimg.w+','+$o_opimg.h+')');

		// MjCRIODA(MJGA($o_opimg.i));
		/*
		var $load_res = MJGA($o_opimg.i)['readyState'];
		alert($load_res);
		if ('uninitialized' === $load_res) {
		// alert('DadoT!');
		}
		*/

		// MJGA($o_opimg.i).src = $mj_g_img_pth+'spc.gif';
		var $o_opimg1 = $v.AddI('op_no_picture.gif', $x, $y);

		// set_rect_text($v, [$x, $y, $minx, $miny], SKP('OPERATOR_ICON'), $t, true);
		set_rect_text($v, [$x, $y, $minx, $miny], SKP('OPERATOR_ICON'), $t);
	}
}

var $gs_rules = '_____';
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function check_rules($__n) {
	$gs_rules = $gs_rules.substring(1, 5)+$__n;
	// alert($gs_rules);

	if ('12112' === $gs_rules) {
		goto_Loc("rules.html");
	}

}



// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function tzzzih() {
	if ('undefined' === typeof($g_vpa['VIEW_INFO'])) {
		return;
	}

	// alert('wow!');
	// MjCRIODA($g_vpa);
	var $o = MJGA($g_vpa['VIEW_INFO']['v'].o.i); // .innerHTML;
	var $tmp = $o.innerHTML;

	$o.innerHTML = '';
	$o.innerHTML = $tmp;
	// alert($o);
	// alert('tzzzih');
}


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function create_title_screen($__v)
{
	var $__s = $g_vpa[$__v]['s'];
	var $v = $g_vpa[$__v]['v'];

	var $n_keybKHMask = mjsc_0;

	var $y_i = 187;
	var $x_i = 709;
	var $x_ofs = (mj_G.Wpx-$x_i)/2;
	var $y_ofs = 300;

	var $o = $v.AddI('title_menu_1.gif', 250, $y_ofs);
	$o.AddHandler("PlaySoundA('choose_operators'); route_to_vp('VIEW_MAINMENU', 'create_menu_icons', '-1', '"+$__v+"')", $x_i, $y_i);
	$o.AddKHMask($n_keybKHMask++);

	$y_ofs += $y_i;

	// $g_current_vpa = create_vpa('VIEW_MAINMENU', 'create_menu_icons', '-1', '-1');
        
	var $o = $v.AddI('title_menu_2.gif', 250, $y_ofs);
	$o.AddHandler("tzzzih(); $g_n_secsInHelpOrInfo=0; $g_help_backwidget='"+$__v+"'; route_to_vp('VIEW_INFO', 'create_info', '-1', '"+$__v+"')", $x_i, $y_i);
	$o.AddKHMask($n_keybKHMask++);
	$y_ofs += $y_i;

	var $o = $v.AddI('title_menu_3.gif', 250, $y_ofs);
	// alert($__v);
	$o.AddHandler("tzzzih(); $g_n_secsInHelpOrInfo=0; $g_help_backwidget='"+$__v+"'; route_to_vp('VIEW_HELP', 'create_help', '-1', '"+$__v+"')", $x_i, $y_i);
	$o.AddKHMask($n_keybKHMask++);
	$y_ofs += $y_i;
        

	mj_RT.Add('check_AmInHelpOrInfo()', 1000, 0);

}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
var $g_ad_vp_lbl = '-1';
var $g_ad_vp_idx = '-1';
var $g_ad_fs_flag = false;
var $g_ad_swf_src = false;



function create_addd_vp($__v)
{
	var $v = $g_vpa[$__v]['v'];
	var $s_kil=SKP('GROUP_ICON');
	set_rect_text($v, [-150, 50, 1024, 500], $s_kil, 'Осуществляя ввод данных, Плательщик дает согласие на их обработку. Для подтверждения согласия нажмите кнопку "ВПЕРЕД", в случае несогласия - "НАЗАД" <br>Более подробная информация отражена в Публичной оферте (кнопка "Информация")');
    $ga_buttbig[0]['v'].Show(1, 1);
	$ga_buttbig[0]['o'].AddHandler("goto_Loc('main.html')");
    $ga_buttbig[1]['v'].Show(1, 1);
	$ga_buttbig[1]['o'].AddHandler("goto_Loc('choice.html?publico=1')");
	mj_RT.Add('goto_Main', 24000, 0);
}

function alfa_choice($__v)
{
	var $sk = SKP('OPERATOR_ICON');
	var $n_keybKHMask = mjsc_0;
	var $v = $g_vpa[$__v]['v'];

	var $o = $v.AddI('nbut1_g0_menu.gif', 470, 895);
	$o.AddHandler("goto_Loc('main.html')");

	$o.AddKHMask(mjsc_Esc);
	var $o = $v.AddI('op_bg3.gif', 60, 250);
	$o.AddHandler("goto_Loc('data-entry.html?recepient=1000&field100=044030786')");
	$o.AddKHMask(mjsc_l1);
	gfxa_ins_oper_logo($v, 'bnk_alfa.gif', 120, 295, $sk.d[0], $sk.d[1], 'Оплата по номеру л/с');

	var $o = $v.AddI('op_bg3.gif', 920, 250);
	$o.AddHandler("goto_Loc('data-entry.html?recepient=1002&field100=044030786')");
	$o.AddKHMask(mjsc_r1);
	gfxa_ins_oper_logo($v, 'bnk_alfa.gif', 990, 295, $sk.d[0], $sk.d[1], 'Оплата по номеру карты');

	mj_RT.Add('goto_Main', 12000, 0);
}

function choice_public($__v)
{
	var $sk = SKP('OPERATOR_ICON');
	var $n_keybKHMask = mjsc_0;
	var $v = $g_vpa[$__v]['v'];
	var $o = $v.AddI('nbut1_g0_menu.gif', 450, 900);
	$o.AddHandler("goto_Loc('main.html')");
	$o.AddKHMask(mjsc_Esc);
	var $o = $v.AddI('op_bg3.gif', 100, 300);
	$o.AddHandler("goto_Loc('bank.html')");
	$o.AddKHMask(mjsc_l1);
	gfxa_ins_oper_logo($v, 'bnk.gif', 160, 350, $sk.d[0], $sk.d[1], 'Выбор банка');
	
	var $o = $v.AddI('op_bg3.gif', 850, 300);
	$o.AddHandler("goto_Loc('data-entry.html?recepient=1001')");
	$o.AddKHMask(mjsc_r1);
	gfxa_ins_oper_logo($v, 'bnk.gif', 910, 350, $sk.d[0], $sk.d[1], 'Поиск банка по БИК');
	
	var $o = $v.AddI('op_bg3.gif', 475, 300);
	$o.AddHandler("goto_Loc('bank1.html')");
	$o.AddKHMask(mjsc_l2);
	gfxa_ins_oper_logo($v, 'bnk.gif', 540, 350, $sk.d[0], $sk.d[1], 'Поиск банка по названию');

	var $o = $v.AddI('op_bg3.gif', 100, 480);
	$o.AddHandler("goto_Loc('data-entry.html?recepient=961')");
	$o.AddKHMask(mjsc_l2);
	gfxa_ins_oper_logo($v, 'ec_viva.gif', 160, 526, $sk.d[0], $sk.d[1], 'VIVA Деньги');

	mj_RT.Add('goto_Main', 12000, 0);
	
}


function tc_vp($__v)
{
	var $v = $g_vpa[$__v]['v'];
	var $tc_op = jcfg_findOperatorById('778');
	var $s_kil=SKP('VIEW_TEXTBNK');
	$skv=set_rect_text($v, [-120, 50, 1024, 500], $s_kil, 'Епта');

		if (typeof(getParameter('check'))=='undefined')
	{
	//	alert('1');
		if3_Log('1');
		if (getParameter('idiot')!=1) {
			change_srt_text($skv,'Вставьте карту в картридер или приложите ее.');
//			$skv=set_rect_text($v, [-120, 50, 1024, 500], $s_kil, '');
			mj_RT.Add('goto_Main', 120000, 0);
			create_bigbut_static_vp($__v, -4, 'nbut1_g0_menu.gif', LCP('button_to_main'), "goto_Loc('main.html')");
		}
	}
	else
	{
	//	alert('2');
		if3_Log('2');
		change_srt_text($skv,'Подождите, идет проверка данных.');
//		set_rect_text($v, [-120, 50, 1024, 500], $s_kil, 'Подождите идет проверка данных.');
		mj_RT.Add('goto_Main', 120000, 0);
	}
	if ((getParameter('error')!=0)&&(typeof(getParameter('error'))!='undefined'))
	{
	//	alert('3');
		if3_Log('3');
		change_srt_text($skv,'Ошибка проверки.'+getParameter('errortext'));
//		set_rect_text($v, [-120, 50, 1024, 500], $s_kil, 'Ошибка проверки карты. Сервис временно не доступен.');
		mj_RT.Add('goto_Main', 12000, 0);
		create_bigbut_static_vp($__v, -4, 'nbut1_g0_menu.gif', LCP('button_to_main'), "goto_Loc('main.html')");
	}
	if (getParameter('checked')==1) 
	{
	//	alert('4');
		if3_Log('4');
	
		if (($ga_tc['card']['cardType']=='ETKFixed')||(($ga_tc['card']['cardType']=='ЕТК')&&(typeof($ga_tc['tickets']['1'])!='undefined'))) 
		{    

			//alert('Yopta '+$ga_tc['card']['PAN']);
			change_srt_text($skv,'Выберите нужное количество поездок.');
		
			var $s1=0;
			var $x1=-100;
			var $sk = SKP('OPERATOR_ICON');
			for (var $tic in $ga_tc['tickets']) //{
			{
				var $o = $v.AddI('bg_main.gif', $x1+$s1*680, 130);
				if (typeof($tc_op['fields']['102'])!='undefined') {
					$o.AddHandler("goto_Loc('data-entry.html?school=1&recepient=778&tarif="+$tic+"&field103="+$ga_tc['tickets'][$tic]['amount']+"&field100='+$ga_tc['card']['PAN'])");
				} else {
					$o.AddHandler("goto_Loc('checking.html?recepient=778&tarif="+$tic+"&field100='+$ga_tc['card']['PAN'])");
				}
				set_rect_text($v, [$x1+$s1*680+30, 150, 200, 500], $s_kil, $ga_tc['tickets'][$tic]['counter']+' поездок' +'  '+ $ga_tc['tickets'][$tic]['amount']+' руб.');
				$s1++;
			}                                                          
			set_rect_text($v, [-120, 400, 1024, 500], $s_kil, 'Внимание!!! Внести необходимо ту сумму, которая указана, сумма меньшая зачислена не будет!');
			mj_RT.Add('goto_Main', 24000, 0);
			
		}
		else
		{
			if ($ga_tc['card']['cardType']=='Abonement')
			{ 
				var $s1=0;
				var $x1=-100;
				var $sk = SKP('OPERATOR_ICON');
				for (var $tic in $ga_tc['tickets'])
				{
					//for (var $period in $ga_tc['tickets'][$tic])
					//{
						var $o = $v.AddI('bg_main.gif', $x1+$s1*680, 130);
						$o.AddHandler("goto_Loc('checking.html?recepient=778&period="+$tic+"&field100='+$ga_tc['card']['PAN'])");
						set_rect_text($v, [$x1+$s1*680-380, 170, 1024, 500], SKP('VIEW_TEXT33'), $ga_tc['tickets'][$tic]['description'] +'<br><br><br>К оплате '+$ga_tc['tickets'][$tic]['amount']+' руб.');
						$s1++;
					//}
				}
				change_srt_text($skv,'Выберите период оплаты');
			}
			else
			{
				goto_Loc('checking.html?recepient=778&tarif=0&field100='+$ga_tc['card']['PAN']);
			}

		}
	}
	if (getParameter('idiot')==1)
	{
		if3_Log('5');
	//	alert('5');
		change_srt_text($skv,'Верните карту в картридер или приложите ее.');
	}

	
}

function search_vp($__v)
{
	var $v = $g_vpa[$__v]['v'];
	var $s_kil=SKP('VIEW_TEXTBNK');
       	var $v = $g_vpa[$__v]['v'];
       	var $err = ['Неизвестная ошибка.','Выбранный платеж не найден в базе.Или информация по данному платежу уже была напечатана.','Информация по выбраному платежу была напечатана ранее.','Информация по выбранному платежу отправлена на принтер.','Не удалось напечатеть информацию по платежу. Попробуйте позднее.'];
	
	$skv=set_rect_text($v, [120, 250, 1024, 500], $s_kil, 'Епта');       	

	
	if (typeof(getParameter('datetime')) == 'undefined') {
		change_srt_text($skv,'Введенный номер не найден в базе.');
	}
	else {
		change_srt_text($skv,'Выберите время платежа');
		var $datet=getParameter('datetime').split(';');
		var $x=80;
		var $y=300;
		var $m=0;
		for (var $c=0;$c<$datet.length-1;$c++){
			if (($c>0)&&(($c%4)==0)) {
				$x=80;
				$y+=150;
				$m=0;
			}
			var $o = $v.AddI('bg_main.gif', $x+300*$m, $y);
			$o.AddHandler('goto_Loc("search.html?me=&number='+getParameter('number')+'&datetime='+$datet[$c]+'")');
			set_rect_text($v, [$x+55+300*$m, $y+30, 140, 50], SKP('search_txt'), $datet[$c]);
			$m++;
		}
	}
	if ((typeof(getParameter('result')) != 'undefined')&&(getParameter('result')>0)) {
		change_srt_text($skv,$err[getParameter('result')]);
	}


	var $o = $v.AddI('nbut1_g0_menu.gif', 450, 900);
	$o.AddHandler("goto_Loc('main.html')");
	$o.AddKHMask(mjsc_Esc);


	mj_RT.Add('goto_Main', 24000, 0);
}

function create_tc_ok($__v)
{
	var $v = $g_vpa[$__v]['v'];
	var $__s = SKP('VIEW_METRO_MENU');   
	var $s_kil=SKP('VIEW_TEXTBNK');
	set_rect_text($v, [345, -300, 600, 500], $s_kil, 'Теперь Вы можете забрать карту.');
	set_rect_text($v, [345, 200, 600, 500], $__s, 'Не забудьте пополнить баланс мобильного телефона.');
	//set_rect_text($v, [145, -50, 1024, 500], $s_kil, 'Теперь карту можно забрать.');
}


function create_bonus_meg($__v)
{
	var $v = $g_vpa[$__v]['v'];
	var $s_siz=SKP('VIEW_BONUSMEG');
	var $s_sms=SKP('VIEW_BONUSMEG_SMS');
	var $s_dop=SKP('VIEW_BONUSMEG_DOP');
	//$v.AddI("meg_e.png", 60, 100);
	if ((($in_sum/100)>0)&&(($in_sum/100)<=79)) {
/*			set_rect_text($v, [495, 248, 1024, 500], $s_siz, '100');
			set_rect_text($v, [-15, 320, 1024, 500], $s_sms, '10');
			set_rect_text($v, [480, 620, 1024, 500], $s_dop, 100-($in_sum/100));
*/	
		$v.AddI("step1.jpg", 60, 100);

	}
	if ((($in_sum/100)>80)&&(($in_sum/100)<=149)) {
/*			set_rect_text($v, [495, 248, 1024, 500], $s_siz, '150');
			set_rect_text($v, [-15, 320, 1024, 500], $s_sms, '15');
			set_rect_text($v, [480, 620, 1024, 500], $s_dop, 150-($in_sum/100));
*/
		$v.AddI("step2.jpg", 60, 100);
	}
	if ((($in_sum/100)>149)&&(($in_sum/100)<=199)) {
/*			set_rect_text($v, [495, 248, 1024, 500], $s_siz, '200');
			set_rect_text($v, [-15, 320, 1024, 500], $s_sms, '20');
			set_rect_text($v, [480, 620, 1024, 500], $s_dop, 200-($in_sum/100));
*/
		$v.AddI("step3.jpg", 60, 100);

	}
	if ((($in_sum/100)>199)&&(($in_sum/100)<=249)) {
/*			set_rect_text($v, [495, 248, 1024, 500], $s_siz, '250');
			set_rect_text($v, [-15, 320, 1024, 500], $s_sms, '25');
			set_rect_text($v, [480, 620, 1024, 500], $s_dop, 250-($in_sum/100));
*/
		$v.AddI("step4.jpg", 60, 100);
	}
	if ((($in_sum/100)>249)&&(($in_sum/100)<=300)) {
/*			set_rect_text($v, [495, 248, 1024, 500], $s_siz, '300');
			set_rect_text($v, [-15, 320, 1024, 500], $s_sms, '30');
			set_rect_text($v, [480, 620, 1024, 500], $s_dop, 300-($in_sum/100));
*/
		$v.AddI("step5.jpg", 60, 100);
	}


	create_bigbut_static_vp($__v, -30, 'button_meg_end.png', LCP('button_to_main'), 'goto_Loc("Payment.html?'+goto_get_allurlparams().substr(goto_get_allurlparams().indexOf('&recepient')+1)+'&field101=&'+goto_get_allurlparams().substr(0,goto_get_allurlparams().indexOf('&recepient'))+'&curr_c1=&end=1");');
	create_bigbut_static_vp($__v, -31, 'button_meg_dop.png', LCP('button_to_main'), 'dop_meg("'+$in_sum+'");');
}

function dop_meg($pr)
{
$init_sum=$pr/100;
writeCookie('step',1,1);
writeCookie('init_sum',$init_sum,1);
history.go(0)
}




function banks_vp($__v)
{
	var $v = $g_vpa[$__v]['v'];
	var $s_kil=SKP('VIEW_TEXT22');
        $ga_buttbig[0]['v'].Show(1, 1);
	$ga_buttbig[0]['o'].AddHandler("goto_Loc('main.html')");
}

function banks_name($__v)
{   

	var $v = $g_vpa[$__v]['v'];
	var $__s = $g_vpa[$__v]['s'];
	var $s_kil=SKP('VIEW_TEXT33');
   	$skc = SKP('VIEW_ACCOUNT_DETAILS_FIELD_BIG2');
	$ga_buttbig[0]['v'].Show(1, 1);
	$ga_buttbig[0]['o'].AddHandler("goto_Loc('main.html')");

	if (getParameter('op')==1){
		var $o = $v.AddI('nbut1_search_b.gif', 500, 600);
		$o.AddHandler("goto_Loc('bank1.html')");
	}
	$f=$v.AddI($skc.i, 0, -65);
	$f.SizeTo(1,1250,50);
	create_keyboard_kil($__v);	
}


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function create_ad_vp($__v)
{
	var $__s = $g_vpa[$__v]['s'];
	var $v = $g_vpa[$__v]['v'];

	var $o = $v.AddD(0,0);
	$o.SizeTo(1, $__s['r'][2], $__s['r'][3]);
	//$o.Border(1, '1px dotted red');
	$o.SetBG(1, $__s['b']);
	var $obj = MJGA($o.i);
	$g_ad_vp_lbl = mj_G._a[$o.i]['l'];
	$g_ad_vp_idx = $o.i;

	if($__s['is_gen_mark']){

		$obj.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+$__s['r'][2]+'" height="'+$__s['r'][3]+'"  align="middle"><param name="movie" value="../../skins/'+SkinName+'/swf/' + $__s['is_gen_mark']['f'] + '"/><param name="allowScriptAccess" value="sameDomain" /><param name="allowFullScreen" value="false" /><param name="quality" value="high" /><param name="bgcolor" value="#ffffff" /><param name="wmode" value="transparent" /><embed src="../../skins/'+SkinName+'/swf/' + $__s['is_gen_mark']['f'] + '" quality="high" bgcolor="#ffffff" width="'+$__s['r'][2]+'" height="'+$__s['r'][3]+'" name="butt_on" align="middle" wmode="transparent" allowScriptAccess="sameDomain" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object>';

		// $o.AddHandler("alert('blaaaa!')", 100, 100);
		// $o.AddHandler("alert('blaaaa!')", 400, 400);
		//$o.AddHandler("PlaySoundA('choose_operators');", 400, 400);
		if($__s['is_gen_mark']['f']){
			//alert($__s['is_gen_mark']['f_full']);
			$g_ad_swf_src = $__s['is_gen_mark']['f_full'];
			if(!!$g_ad_fs_flag === false){
				// $o.AddHandler("route_to_vp('VIEW_OP_MARK_FULL', 'create_ad_full', '-1', '"+$__v+"');", 400, 400);
				if (!$is_ressur_mode) {
					$o.AddHandler("route_to_vp('-VIEW_OP_MARK_FULL', 'create_ad_full', '-1', '"+$__v+"');", 400, 400);
				}
				$o.AddKHMask(mjsc_Space);
			}

		}else{

			$o.AddHandler("PlaySoundA('choose_operators');", 400, 400);
			$o.AddKHMask(mjsc_Space);

		}

	}
}




// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function create_ad_full($__v){
	$g_ad_fs_flag = true;
	var $__s = $g_vpa[$__v]['s'];
	var $v = $g_vpa[$__v]['v'];

	var $o = $v.AddD(0,0);
	$o.SizeTo(1, $__s['r'][2], $__s['r'][3]);
	//$o.Border(1, '1px dotted red');
	$o.SetBG(1, $__s['b']);
	var $obj = MJGA($o.i);
	$g_ad_vp_lbl = mj_G._a[$o.i]['l'];
	$g_ad_vp_idx = $o.i;

	if(!!$g_ad_swf_src === true){
		$obj.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+$__s['r'][2]+'" height="'+$__s['r'][3]+'"  align="middle"><param name="movie" value="../../skins/'+SkinName+'/swf/' + $g_ad_swf_src + '"/><param name="allowScriptAccess" value="sameDomain" /><param name="allowFullScreen" value="false" /><param name="quality" value="high" /><param name="bgcolor" value="#ffffff" /><param name="wmode" value="window" /><embed src="../../skins/'+SkinName+'/swf/' + $g_ad_swf_src + '" quality="high" bgcolor="#ffffff" width="'+$__s['r'][2]+'" height="'+$__s['r'][3]+'" name="butt_on" align="middle" wmode="window" allowScriptAccess="sameDomain" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object>';}
		//alert('yo');

		/*
		$ga_buttbig[0]['v'].Show(1, 1);
		change_srt_text($ga_buttbig[0]['txi'], LCP('button_back'));
		// $ga_buttbig[0]['o'].AddHandler('goto_Loc("data-entry.html?recepient='+opId+'")');
		$ga_buttbig[0]['o'].AddHandler("route_to_vp('"+$g_vpa[$__v]['p']+"', -1, -1, -1);");
		*/

		mj_RT.Add('goto_Main()', 30000, 0);



}


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function create_menu_icons($__v)
{
	var $__s = $g_vpa[$__v]['s'];
	var $v = $g_vpa[$__v]['v'];
	// тескт заголовка, на главной: "выберите оператора" - отстутствует
	// set_rect_text($v, [5, 10, $__s.r[2], 70], $__s, LCP('choose_operator'));
	
	var $n_keybKHMask = mjsc_0;
	//        var $n_keybKHMask = mjsc_f1;
	// var $n_keybKHMask = 0;



	// информация об оставшемся бабле
	var $s_retmon = 0;
	if (meha_IS('$ret_info_js.returned_money')) {
		// alert('wow1!');

		if ($ret_info_js.returned_money > 0) {
			$s_retmon = 'Внесено денег: '+$ret_info_js.returned_money+' руб.';
		}

	}


	//  alert('skp: ' + meha_IS('$ga_skp.VIEW_RET_MONEY'));

	if (($s_retmon !== 0) && meha_IS('$ga_skp.VIEW_RET_MONEY')) {
		var $s_rm = SKP('VIEW_RET_MONEY');
		var $o = $v.AddD($s_rm.r[0], $s_rm.r[1]);
		$o.SizeTo(1, $s_rm['r'][2], $s_rm['r'][3]);
		// $o.Border(1, '1px dotted red');
		$o.SetBG(1, $s_rm['b']);
		var $obj = MJGA($o.i);

		var $style = "style='";
		$style += "font-family: "+$s_rm.f[0]+";";
		$style += "font-size: "+$s_rm.f[1]+'px'+";";
		$style += "font-weight: "+$s_rm.f[2]+";";
		$style += "color: "+$s_rm.f[3]+";";
		$style += "' ";

		$obj.innerHTML = '<table width="100%" height="100%"><tr><td '+$style+'valign="middle" align="center">'+$s_retmon+'</td></tr></table>';


		// $obj.innerHTML = $s_retmon;
	}

	// alert($s_retmon);



	//  - - - - - recalc & draw 'TRINITY GROUP' or '999 operator'
	var $maxcols=0;

	var $spg = SKP('GROUP_ICON');
	var $skp_tri = SKP('OPERATORS_TRINITY_ICON');
	var $skp_tri_intr = SKP('TRINITY_INTRINSIC_ICON');

	var $mnu = $ga_jcfg['menu']['0'];

	var $xofs = $skp_tri.r[0];
	var $yofs = $skp_tri.r[1];

	// - - - - find da group 100
	var $mnu100 = jcfg_findMenuById(100);
	var $main_999_detected = false;
	if ($mnu100 !== -1) {
		// count operators in menu
		var $op_cnt = 0;
		for (var $mi in $mnu100) {
			if ('undefined' !== typeof($mnu100[$mi]['id']) ) {
				$t_id = $mnu100[$mi]['id'];
			}
			else {
				continue;
			}
			$op_cnt++;

			// detect 'main_999.gif' for big image drawing
			var $s_imgname = 'op/no_image.gif';
			if ('undefined' !==  typeof($mnu100[$mi]['rootmenuimage'])) {
				$s_imgname = $mnu100[$mi]['rootmenuimage'];
			}
			else {
				if ('undefined' !==  typeof($mnu100[$mi]['image'])) {
					$s_imgname = ( (($grId == -1) ? 'op/' : '') + $mnu100[$mi]['image'] );
				}
			}

			if ($s_imgname == 'main_999.gif') {
				$main_999_detected = true;
			}

		}


		// alert($main_999_detected);

		// recalc offsets
		var $width_full = $__s.r[2];
		var $ic_ofs = ($width_full - $skp_tri_intr.bd[0]*$op_cnt)/$op_cnt;
		var $total_width = $skp_tri_intr.bd[0]*$op_cnt;
		// alert($ic_ofs);
		// var $x_abs_ofs = ( $width_full - ($ic_ofs+$skp_tri_intr.bd[0])*($op_cnt+2) ) / 2;
		var $x_abs_ofs = ( $width_full - ($ic_ofs*($op_cnt-1)+$skp_tri_intr.bd[0]*$op_cnt) ) / 2;
		// alert($x_abs_ofs);
		// alert($x_abs_ofs);
		// alert($ic_ofs);
		var $op_cnt1 = 0;
		var $ops_in_row = $op_cnt/2;



		// - - - -draw operators in menu // menu 100 drawing
		for (var $mi in $mnu100) {
		
			var $grId = _jcfg_mnuIsGroupId($mi);
			if ($grId == -1) { // if not a group
				if ('undefined' !== typeof($mnu100[$mi]['id']) ) {
					$t_id = $mnu100[$mi]['id'];
				}
				else {
					continue;
				}
			}

			var $s_imgname = 'op/no_image.gif';
			var $s_imgname_c = '';
			if ('undefined' !==  typeof($mnu100[$mi]['rootmenuimage'])) {
				$s_imgname = $mnu100[$mi]['rootmenuimage'];
				$s_imgname_c = $mnu100[$mi]['rootmenuimage'];
			}
			else {
				if ('undefined' !==  typeof($mnu100[$mi]['image'])) {
					$s_imgname = ( (($grId == -1) ? 'op/' : '') + $mnu100[$mi]['image'] );
					$s_imgname_c = $mnu100[$mi]['image'];
				}
			}

			var $goto_locdoc = 'data-entry';


			// -------------------------------------------- if no 999 colbassa
			if (!$main_999_detected) {
				var $xofs1 = $x_abs_ofs + ($ic_ofs+$skp_tri_intr.bd[0])*$op_cnt1;
				// $skp_tri.r[0]+


				if($total_width < $width_full){
					var $o = $v.AddI($skp_tri_intr.bi, $xofs1, $yofs);
					$v.AddI($s_imgname, $xofs1 + ($skp_tri_intr.bd[0]-$skp_tri_intr.d[0])/2, $yofs + ($skp_tri_intr.bd[1]-$skp_tri_intr.d[1])/2);}
					else {
						$hl_longbar = true;

						var $ic_ofs1 = ($width_full - $skp_tri_intr.bd[0]*$op_cnt*0.5)/($op_cnt*2);
						var $x_abs_ofs1 = Math.round( $width_full - ($ic_ofs1*($op_cnt*0.5-1)+$skp_tri_intr.bd[0]*$op_cnt*0.5) ) / 2;

						if($op_cnt%2!==0){
							$ic_ofs1 = ($width_full - $skp_tri_intr.bd[0]*Math.round($op_cnt*0.5))/(Math.round($op_cnt/2)*4);
							$x_abs_ofs1 = Math.round( $width_full - ($ic_ofs1*(Math.round($op_cnt*0.5)-1)+$skp_tri_intr.bd[0]*Math.round($op_cnt*0.5)) ) / 2;
						}

						if ($op_cnt1 < $op_cnt/2) {

							$xofs1 = $x_abs_ofs1 + ($ic_ofs1+$skp_tri_intr.bd[0])*$op_cnt1;

							var $o = $v.AddI($skp_tri_intr.bi, $xofs1, $yofs);

							$v.AddI($s_imgname, $xofs1 + ($skp_tri_intr.bd[0]-$skp_tri_intr.d[0])/2, $yofs + ($skp_tri_intr.bd[1]-$skp_tri_intr.d[1])/2);
						}
						else{

							if($op_cnt%2==0) $xofs1 = $x_abs_ofs1 + ($ic_ofs1+$skp_tri_intr.bd[0])*($op_cnt1%($op_cnt/2));

							else {
								$ic_ofs1 = ($width_full - $skp_tri_intr.bd[0]*Math.floor($op_cnt*0.5))/(Math.floor($op_cnt/2)*4);
								$x_abs_ofs1 = Math.round( $width_full - ($ic_ofs1*(Math.floor($op_cnt*0.5)-1)+$skp_tri_intr.bd[0]*Math.floor($op_cnt*0.5)) ) / 2;
								$xofs1 = $x_abs_ofs1 + ($ic_ofs1+$skp_tri_intr.bd[0])*($op_cnt1%(Math.round($op_cnt/2)));
							}


							var $o = $v.AddI($skp_tri_intr.bi, $xofs1, $yofs + $skp_tri_intr.bd[1]);
							$v.AddI($s_imgname, $xofs1 + ($skp_tri_intr.bd[0]-$skp_tri_intr.d[0])/2, $yofs +$skp_tri_intr.bd[1] + ($skp_tri_intr.bd[1]-$skp_tri_intr.d[1])/2);
						}


					}
					// $skp_tri.r[0]+

					if ($grId == -1) {
						// тады тута opId!!!
						$goto_locdoc = if3_GetOpPage($grId);
						/*if($ga_jcfg['config']['NoChangeMessage'] == 1){
							$goto_locdoc = 'message_no_get_change';
						}*/
						$o.AddHandler('goto_Loc("'+$goto_locdoc+'.html?recepient='+$t_id+'")', $skp_tri_intr.bd[0], $skp_tri_intr.bd[1]);
					}
					else {
						$o.AddHandler("route_to_vp('VIEW_OPERATORS', 'create_submenu_icons', '"+$grId+"', '"+$__v+"')", $skp_tri_intr.bd[0], $skp_tri_intr.bd[1]);
					}
					$o.AddKHMask($n_keybKHMask++);
			} //

			// -------------------------------------------- if yap 999 colbassa
			else {
				if ($s_imgname_c == 'main_999.gif')  {

					var $o = $v.AddI($skp_tri.i, ($width_full - $skp_tri.r[2]) / 2, $skp_tri.r[1]);

					$o.AddHandler('goto_Loc("'+$goto_locdoc+'.html?recepient=999")', $skp_tri.r[2], $skp_tri.r[3]);
					$o.AddKHMask($n_keybKHMask++);
					// break da drawing loop, нах!
					break;
				}
			}

			$op_cnt1++;

		} // - - - menu_100_elements drawing
		var $q_l =1;
		if($hl_longbar == true) $q_l = 2;
		$yofs += $skp_tri.r[3]*$q_l+10;
	}

	//count da groups
	var $hl_group_num = 0;
	//Инициализация счетчика кол-ва нижних иконок

	for(var $mi in $mnu){
		if (_jcfg_mnuIsMenuItemId($mi) === -1) {
			continue;
		}
		var $grId = _jcfg_mnuIsGroupId($mi);

		//ignoring TRINITY operators
		if ($grId === '100') {
			continue;
		}

		if ($grId !== -1 ) {$hl_group_num++; }

	}

	// - - - - draw da groups in main menu
	var $xofs = $skp_tri.r[0];


	var $width_full = $__s.r[2];
	var $height_full = $__s.r[3]-$yofs;
	var $total_width = $spg.bd[0]*$hl_group_num;
        //alert($spg.bd[0]);
        //Kil var $total_width = $spg.bd[0]*5;
	var $total_height = $spg.bd[1]*2;

	if ($total_height > $height_full || !!$hl_longbar) {$hl_longlowbar = true; } //overflow

	//HL Between Fix 20080303
	var $num_icons = 0;
	var $_w = 0;

	while($_w < $width_full) {
		$_w += $spg.bd[0];
		$num_icons++;
		$_w += $spg.btw[0];
	}

	//alert ($__s.r[2]);
	var $maxcols = Math.floor($width_full/($spg.bd[0] + (1-1/$num_icons)*$spg.btw[0]));

	//var $maxcols = Math.floor( $width_full / ($spg.bd[0]+$spg.btw[0]) );
	var $maxrows = Math.floor( $height_full / ($spg.bd[1]+$spg.btw[1]) );


	//if($hl_longlowbar === true) {$spg.btw[0]+=10; $spg.btw[1]+=10; }

	if ( ($hl_group_num%4 !==0) && ($hl_longbar === false)) {
		// $maxcols = $hl_group_num/2;
		if($hl_group_num/2 <= $num_icons) $maxcols = Math.round($hl_group_num/2);

	}

	if($hl_group_num<4) {if($hl_group_num <= $num_icons) $maxcols = $hl_group_num; }

	var $xofs = Math.floor( ($width_full - ($spg.bd[0]+$spg.btw[0])*$maxcols)/2 );
	// alert($maxcols +', '+ $maxrows);



	$col = 0;
	$row = 0;

	var $i = -1;



	for (var $mi in $mnu) {
		if (_jcfg_mnuIsMenuItemId($mi) === -1) {
			continue;
		}
		$i++;

		var $grId = _jcfg_mnuIsGroupId($mi);

		// ignoring TRINITY operators
		if ($grId === '100') {
			continue;
		}
		if ($grId !== -1) {
			// $o.AddHandler("route_to_vp('VIEW_OPERATORS', 'create_submenu_icons', '"+$grId+"', '"+$__v+"')");
			// gfxa_ins_oper_logo($v, $mnu[$mi]['image'], $xofs + $col*$sk.bd[0] + ($sk.bd[0]-$sk.d[0])/2, $yofs + $row*$sk.bd[1] + ($sk.bd[1]-$sk.d[1])/2, $sk.d[0], $sk.d[1], $mnu[$mi]['name']);

			var $o = $v.AddI($mnu[$mi]['image'], $xofs+$spg.btw[0]/2 + $col*($spg.bd[0]+$spg.btw[0]), $yofs + $row*($spg.bd[1]+$spg.btw[1]));

			if('undefined' === typeof($mnu[$mi]['as_op_id'])){
				if ($grId==104) {
					$o.AddHandler("goto_Loc('choice.html')", $spg.bd[0], $spg.bd[1]);
					//$o.AddKHMask($n_keybKHMask++);
					$o.AddKHMask(mjScanCodeById($n_keybKHMask++));
				}
				else
				{
					$o.AddHandler("route_to_vp('VIEW_OPERATORS', 'create_submenu_icons', '"+$grId+"', '"+$__v+"')", $spg.bd[0], $spg.bd[1]);
					//$o.AddKHMask($n_keybKHMask++);
					$o.AddKHMask(mjScanCodeById($n_keybKHMask++));
				}
			}
			else{
				// alert( if3_GetOpPage($mnu[$mi]['as_op_id']) + ' from '  + $grId );
				//alert($goto_locdoc);
				$o.AddHandler('goto_Loc("'+if3_GetOpPage($mnu[$mi]['as_op_id'])+'.html?recepient='+$mnu[$mi]['as_op_id']+'")', $spg.bd[0], $spg.bd[1]);
			}

			$col++;
			if ($col >= $maxcols) {
				$col = 0;
				$row++;
			}
			if($row > 0 && ($hl_group_num % 4 !== 0)){
				//alert($maxcols);
				if(!!$hl_longbar === true) break;

				if ($hl_group_num % $maxcols !== 0){

					if($num_icons !== $maxcols)$xofs = Math.floor( ($width_full - ($spg.bd[0]+$spg.btw[0])*($hl_group_num % $maxcols))/2 );
				} else {
					$xofs = Math.floor( ($width_full - ($spg.bd[0]+$spg.btw[0])*($maxcols))/2 );
				}
			}

		} // draw menu object
		if($hl_longlowbar === true && $grId>103) break; //HL
	} // for in mnu



	/*
	var $heigth_full = $__s.r[3]-$yofs;
	var $width_loc = $spg.bd[0];
	var $heigth_loc = $spg.bd[1];
	var $x_betw = $spg.btw[0];//Math.floor( ($width_full-$maxcols*$width_loc)/($maxcols+1) );
	var $y_betw = $spg.btw[1];//Math.floor( ($heigth_full-$maxrows*$heigth_loc)/($maxrows+1) );

	var $maxcols = Math.floor( ($width_full+$x_betw)/($x_betw+$width_loc) );
	var $maxrows = Math.floor( ($heigth_full+$y_betw)/($y_betw+$heigth_loc) );




	var $xofs = $skp_tri.r[0];
	var $yofs = $skp_tri.r[1];
	// alert($__s.r[1]);
	*/




	/*
	var $show_group_100 = true;
	if($skp_tri.r[3] < 1){
	$show_group_100 = false;
	}


	// - - - - - new TRINIRY icon redrawer
	var $col = 0;
	var $row = 0;

	// search for 999 operator
	var $exists999 = false;
	var $mnu100 = jcfg_findMenuById(100);
	for (var $mi in $mnu100) {
	var $t_id = -1;
	if ('undefined' !== $mnu100[$mi]['id'] ) {
	$t_id = $mnu100[$mi]['id'];
	}

	var $mt = _jcfg_mnuIsMenuOperatorId($mi, $t_id);
	if ($mt === 9999) {
	$exists999 = true;
	break;
	}
	if (_jcfg_mnuIsMenuItemId($mi, $t_id) !== -1) {
	$maxcols++;
	}
	}
	if ($show_group_100){
	if ($exists999) {
	var $op = jcfg_findOperatorById('999');
	var $o = $v.AddI($op['rootmenuimage'], $skp_tri.r[0], $skp_tri.r[1]);

	var $goto_locdoc = 'data-entry';
	if($ga_jcfg['config']['NoChangeMessage'] == 1){
	$goto_locdoc = 'message_no_get_change';
	}
	$o.AddHandler('goto_Loc("'+$goto_locdoc+'.html?recepient=999")', $skp_tri.r[2], $skp_tri.r[3]);
	//$o.AddKHMask($n_keybKHMask++);

	}
	else {
	//distance between TRINITY_INTRINSIC_ICON.bd in OPERATORS_TRINITY_ICON
	$xofs = Math.floor( ($skp_tri.r[2] - $maxcols*$skp_tri_intr.bd[0] )/($maxcols + 1) );
	// alert($xofs);
	$yofs = $skp_tri.r[1] + Math.floor( ($skp_tri.r[3] - $skp_tri_intr.bd[1] )/2 );
	// + Math.floor( ($skp_tri_intr.bd[1] - $skp_tri_intr.d[1] )/2 );
	//alert("$maxcols="+$maxcols+", $xofs="+$xofs+", $yofs="+$yofs);
	var $xofs_loc = Math.floor( ($skp_tri_intr.bd[0] - $skp_tri_intr.d[0] )/2 );
	var $yofs_loc = Math.floor( ($skp_tri_intr.bd[1] - $skp_tri_intr.d[1] )/2 );
	var j = 0;

	for (var $mi in $mnu100) {

	var $t_id = -1;
	if ('undefined' !== $mnu100[$mi]['id'] ) {
	$t_id = $mnu100[$mi]['id'];
	}

	//group???
	if (_jcfg_mnuIsGroupId($mi) !== -1) {
	//  alert('group: ' + $mi);
	var mTitImg = $mnu100[$mi]['image'];
	//alert("group_"+j+"\nmTitImg="+mTitImg+"\n$xofs="+$xofs.toString()+",  j="+j+",  $skp_tri_intr.bd[0]="+$skp_tri_intr.bd[0]+"\n$xofs + j*$skp_tri_intr.bd[0]="+($xofs + j*$skp_tri_intr.bd[0]).toString());

	var $o;
	//background of OPERATORS_TRINITY_ICON
	if($skp_tri_intr.bi){
	$o  = $v.AddI($skp_tri_intr.bi, $skp_tri.r[0] + (j+1)*$xofs + j*$skp_tri_intr.bd[0], $yofs);
	var $oimg = $v.AddI(mTitImg, $skp_tri.r[0] + (j+1)*$xofs + $xofs_loc+ j*$skp_tri_intr.bd[0], $yofs + $yofs_loc);
	}else{
	$o = $v.AddI(mTitImg, $skp_tri.r[0] + (j+1)*$xofs + $xofs_loc+ j*$skp_tri_intr.bd[0], $yofs + $yofs_loc);
	}
	$o.AddHandler("route_to_vp('VIEW_OPERATORS', 'create_submenu_icons', '"+$mi+"', '"+$__v+"')", $skp_tri_intr.bd[0], $skp_tri_intr.bd[1]);
	//$o.AddKHMask($n_keybKHMask++);
	$o.AddKHMask(mjScanCodeById($n_keybKHMask++));

	j++;
	} else if (_jcfg_mnuIsMenuOperatorId($mi, $t_id) !== -1) {
	//operator???
	var $opId = _jcfg_mnuIsMenuOperatorId($mi, $t_id);
	var $op = jcfg_findOperatorById($opId);
	var mTitImg = $op['rootmenuimage'];
	//alert("operator_"+j+",  mTitImg="+mTitImg);

	var $o;
	//background of OPERATORS_TRINITY_ICON
	if($skp_tri_intr.bi){
	$o  = $v.AddI($skp_tri_intr.bi, $skp_tri.r[0] + (j+1)*$xofs + j*$skp_tri_intr.bd[0], $yofs);
	var $oimg = $v.AddI(mTitImg, $skp_tri.r[0] + (j+1)*$xofs + $xofs_loc + j*$skp_tri_intr.bd[0], $yofs + $yofs_loc);
	}else{
	$o = $v.AddI(mTitImg, $skp_tri.r[0] + (j+1)*$xofs + $xofs_loc + j*$skp_tri_intr.bd[0], $yofs + $yofs_loc);
	}

	var $goto_locdoc = 'data-entry';
	if($ga_jcfg['config']['NoChangeMessage'] == 1){
	$goto_locdoc = 'message_no_get_change';
	}
	//alert('909: $goto_locdoc='+$goto_locdoc);
	$o.AddHandler('goto_Loc("'+$goto_locdoc+'.html?recepient='+$opId+'")', $skp_tri_intr.bd[0], $skp_tri_intr.bd[1]);


	//$o.AddHandler('goto_Loc("data-entry.html?recepient='+$opId+'")', $skp_tri_intr.bd[0], $skp_tri_intr.bd[1]);
	//$o.AddKHMask($n_keybKHMask++);
	$o.AddKHMask(mjScanCodeById($n_keybKHMask++));


	j++;

	}
	//alert("$skp_tri.r[0] + (j+1)*$xofs + $xofs_loc + j*$skp_tri_intr.bd[0]="+($skp_tri.r[0] + (j+1)*$xofs + $xofs_loc + j*$skp_tri_intr.bd[0]).toString()+", $xofs_loc="+$xofs_loc+", $yofs_loc="+$yofs_loc+".");
	// alert('passed: '+$mi);
	}
	}
	}



	//  - - - - - draw da MAIN GROUPS in da main menu
	// getting max colums put into container
	$maxcols = Math.floor( $__s.r[2] / $spg.bd[0] );
	$xofs = Math.floor( ($__s.r[2] - $spg.bd[0]*$maxcols)/2 );
	$yofs = $skp_tri.r[1]+$skp_tri.r[3];

	//lao

	if ($maxcols > 1){
	$xofs = Math.floor( ($width_full - $maxcols*$width_loc - ($maxcols-1)*$x_betw)/2 );
	}else{
	$x_betw = 0;
	$xofs = Math.floor( ($width_full - $width_loc)/2 );
	}

	if ($maxrows > 1){
	$yofs += Math.floor( ($heigth_full - $maxrows*$heigth_loc - ($maxrows-1)*$y_betw)/2 ) ;
	}else{
	$y_betw = 0;
	$yofs += Math.floor( ($heigth_full - $heigth_loc)/2 );
	}
	//        alert("mj_G.Wpx="+mj_G.Wpx+", mj_G.Hpx="+mj_G.Hpx+"\n$xofs="+$xofs+", $yofs="+$yofs+"\n$maxrows="+$maxrows+", $maxcols="+$maxcols+"\n\n$width_full="+$width_full+", $heigth_full="+$heigth_full+"\n$width_loc="+$width_loc+", $heigth_loc="+$heigth_loc+"\n\n$spg.btw[0]="+$spg.btw[0]+", $x_betw="+$x_betw+"\n$spg.btw[1]="+$spg.btw[1]+", $y_betw="+$y_betw);

	*/


	/*
	for (var i=0; i<ndMenu.childNodes.length; i++) {
	var ndMenuItem=ndMenu.childNodes.item(i);
	if (ndMenuItem.nodeName=="group") {
	var mId = ndMenuItem.attributes.getNamedItem('id').text;
	if (100 == mId) continue;

	var mTitle = ndMenuItem.attributes.getNamedItem('title').text;

	var mTitImg = $spg.bi;

	mTitImg = ndMenuItem.attributes.getNamedItem('image').text;
	// var mTitImg = ndMenuItem.attributes.getNamedItem('titleimage').text;
	var $o = $v.AddI(mTitImg, $xofs + $col*$spg.bd[0], $yofs + $row*$spg.bd[1]);
	// $o.AddHandler('route_to_vp("'+$__i+'", "'+$__p+'", "'+mId+'")');

	// $o.AddHandler("route_to_vp('VIEW_OPERATORS', 'create_operator_icons', '"+mId+"', '"+$__v+"')");
	$o.AddHandler("route_to_vp('VIEW_OPERATORS', 'create_submenu_icons', '"+mId+"', '"+$__v+"')");


	//set_rect_text($__v, [$xofs + $col*$spg.bd[0], $yofs + $row*$spg.bd[1], $spg.r[2], $spg.r[3]], $spg, mTitle);
	//set_rect_text($v, [$xofs + $col*$spg.bd[0] + 160, $yofs + $row*$spg.bd[1]+30, 200, 100], $spg, mTitle);


	$col++;
	if ($col >= $maxcols) {
	$col = 0;
	$row++;
	}

	}
	}
	*/

	// alert(ndGroups);
	// !!!!! RULEZ

        //Kirill
	

	// - - - - - information and help addtional buttons
	// create_bigbut_static_vp($__v, $__x, $__img, $__text, $__handler);

	// create_bigbut_static_vp($__v, 0, 'nbut1_g0.gif', 'РУС/АНГЛ', '');
	/*        create_bigbut_static_vp($__v, -2, 'nbut1_g0_blue.gif', LCP('button_information'), "tzzzih(); $g_n_secsInHelpOrInfo=0; route_to_vp('VIEW_INFO', 'create_info', '-1', '"+$__v+"')");
	create_bigbut_static_vp($__v, -3, 'nbut1_g0_green.gif', LCP('button_instruction'), "tzzzih(); $g_n_secsInHelpOrInfo=0; route_to_vp('VIEW_HELP', 'create_help', '-1', '"+$__v+"')");
	*/
	if (!$is_ressur_mode) {
	        //create_bigbut_static_vp($__v, -2, 'nbut1_g0_blue.gif', LCP('button_information'), "tzzzih(); $g_n_secsInHelpOrInfo=0; route_to_vp('VIEW_INFO', 'create_info', '-1', '"+$__v+"')");
		create_bigbut_static_vp($__v, -2, 'nbut1_info.gif', LCP('button_information'), "tzzzih(); $g_n_secsInHelpOrInfo=0; route_to_vp('VIEW_HELP', 'create_info', '-1', '"+$__v+"')");
		if (typeof($no_search_op)=='undefined'){
			create_bigbut_static_vp($__v, -3, 'nbut1_g0_green.gif', LCP('button_information'), "tzzzih(); $g_n_secsInHelpOrInfo=0; route_to_vp('VIEW_INFO', 'create_info', '-1', '"+$__v+"')");
		}
		else 
		{
			create_bigbut_static_vp($__v, -3, 'nbut1_search.gif', LCP('button_information'), "goto_Loc('search_op.html?op=1')");
		}

	}

	if (parseInt($ga_jcfg['config']['NoChangeMessage'])==1) {
	   
		if (jcfg_findMenuById(105) != -1) {
			var $ll=$v.AddI('reklama_visa.gif', 430, 810);
			$grId=108;
			$ll.AddHandler("route_to_vp('VIEW_OPERATORS', 'create_submenu_icons', '"+$grId+"', '"+$__v+"')", 398, 93);
		}
		else {
			if (TerminalName in krd) {
				var $ll=$v.AddI('reklama_detsad.gif', 430, 810);
				$grId=572;
				$ll.AddHandler("route_to_vp('VIEW_OPERATORS', 'create_submenu_icons', '"+$grId+"', '"+$__v+"')", 398, 93);
			}
			else {
			     if (TerminalName==102748){
					var $ll=$v.AddI('reklama_print.gif', 430, 750);
					$ll.AddHandler("executeCommands()", 398, 93);
				}
				else {
					var $ll=$v.AddI('reklama.gif', 430, 750);
					$ll.AddHandler("goto_Loc('data-entry.html?recepient=829')", 398, 93);
				}
			}
		}
	}



	mj_RT.Add('check_AmInHelpOrInfo()', 1000, 0);

}



/*
if(ndMenuItem.attributes.getNamedItem('id').text==MenuId) {
return ndMenu;
} else {
var res=GetUpMenu(MenuId, ndMenuItem);
var ares= ""+res+"";
if ('undefined'!=ares)
return res;
}
*/


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
var $g_n_secsInHelpOrInfo=0;
var $g_help_backwidget = 'VIEW_MAINMENU';


function check_AmInHelpOrInfo() {
	if ( ($g_current_vpa != 'VIEW_HELP') && ($g_current_vpa != 'VIEW_INFO') ) {
		return;
	}

	$g_n_secsInHelpOrInfo++;
	if ($g_n_secsInHelpOrInfo > 200) {
		route_to_vp($g_help_backwidget, "", "-1", "-1");
	}
}


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// creating submenu items with icons
//
function create_submenu_icons($__v) {
	var $v = $g_vpa[$__v]['v'];
	var $__s = $g_vpa[$__v]['s'];

	var $id = $g_vpa[$__v]['i'];

	var $a_id =  $id.split('_');
	create_bigbut_static_vp($__v, -4, 'nbut1_g0_menu.gif', LCP('button_to_main'), "goto_Loc('main.html')");

	//        var $n_keybKHMask = mjsc_0;
	//var $n_keybKHMask = mjsc_f1;
	var $n_keybKHMask = 0;


	//  - - - - - - perpage offset
	var $__id = $a_id[0]; // $g_vpa[$__v]['i'];
	$perp_ofs = parseInt(('undefined' === typeof($a_id[1])) ? 0 : $a_id[1]);
	// alert('id: ' +$__id+ ', perp: '+$perp_ofs);

	// - - - - - - -
	set_rect_text($v, [5, 05, $__s.r[2], 70], $__s, LCP('choose_operator'));


	var $sk = SKP('OPERATOR_ICON');
	var $skg =  SKP('GROUP_ICON');
	var $img_prefix = '';

	// getting max colums to put into container
	if (!$is_ressur_mode) {
		var $yofs = 70;
	}
	else {
		var $yofs = 20;
	}
	//lao
	var $width_full = $__s.r[2];
	var $heigth_full = $__s.r[3]-$yofs;
	var $width_loc = $sk.bd[0];
	var $heigth_loc = $sk.bd[1];
	var $x_betw = $sk.btw[0];//Math.floor( ($width_full-$maxcols*$width_loc)/($maxcols+1) );
	var $y_betw = $sk.btw[1];//Math.floor( ($heigth_full-$maxrows*$heigth_loc)/($maxrows+1) );

	var $maxcols = Math.floor( ($width_full+$x_betw)/($x_betw+$width_loc) );
	var $maxrows = Math.floor( ($heigth_full+$y_betw)/($y_betw+$heigth_loc) );

	if ($maxcols > 1){
		$xofs = Math.floor( ($width_full - $maxcols*$width_loc - ($maxcols-1)*$x_betw)/2 );
	}else{
		$x_betw = 0;
		$xofs = Math.floor( ($width_full - $width_loc)/2 );
	}

	if ($maxrows > 1){
		$yofs += Math.floor( ($heigth_full - $maxrows*$heigth_loc - ($maxrows-1)*$y_betw)/2 ) ;
	}else{
		$y_betw = 0;
		$yofs += Math.floor( ($heigth_full - $heigth_loc)/2 );
	}
	//        alert("mj_G.Wpx="+mj_G.Wpx+", mj_G.Hpx="+mj_G.Hpx+"\n$xofs="+$xofs+", $yofs="+$yofs+"\n$maxrows="+$maxrows+", $maxcols="+$maxcols+"\n\n$width_full="+$width_full+", $heigth_full="+$heigth_full+"\n$width_loc="+$width_loc+", $heigth_loc="+$heigth_loc+"\n\n$spg.btw[0]="+$spg.btw[0]+", $x_betw="+$x_betw+"\n$spg.btw[1]="+$spg.btw[1]+", $y_betw="+$y_betw);



	// - - - - - - - generate menu items (operators, groups...)

	// alert($__id);
	// var $mnu_items_count = GetMenuItemCount($__id);
	// MjCRIODA($ga_jcfg['menu'][0]);

	var $mnu = jcfg_findMenuById($__id);
	// MjCRIODA($mnu);


	var $mnu_items_count = jcfg_enumerateMenuItems($mnu);


	// номер элемента, после которого необходимо последующие элементы центровать
	var $last_center_items_count_num = $mnu_items_count - $mnu_items_count%$maxcols;
	// смещение, начиная с которого надо отрисовывать отцентрованные последние элементы подменю
	var $last_center_items_xofs = parseInt( ($width_loc + $x_betw)*($maxcols-($mnu_items_count - $last_center_items_count_num))/2 );

	var $col = 0;
	var $row = 0;
	var $items_outputed = 0;
	// for (var $i=$perp_ofs; $i<$mnu_items_count; $i++) {
	// alert($perp_ofs); // ++;
	var $i = -1;
	for (var $mi in $mnu) {
		var $t_id = -1;
		if ('undefined' !== $mnu[$mi]['id'] ) {
			$t_id = $mnu[$mi]['id'];
		}



		if (_jcfg_mnuIsMenuItemId($mi) === -1) {
			continue;
		}
		$i++;
		if ($i < $perp_ofs) {
			continue;
		}
		if ($mnu_items_count<5) {
			if ($i == $last_center_items_count_num){// && $maxcols > 2){
				$xofs += $last_center_items_xofs;
			}
		}

		$items_outputed++;



		// - - - - - group
		var $grId = _jcfg_mnuIsGroupId($mi);
		if ($grId !== -1) {
			var $o = $v.AddI($skg.bi, $xofs + $col*($sk.bd[0]+$x_betw), $yofs + $row*($sk.bd[1]+$y_betw));
			$o.AddHandler("route_to_vp('VIEW_OPERATORS', 'create_submenu_icons', '"+$grId+"', '"+$__v+"')", $sk.bd[0], $sk.bd[1]);
			//$o.AddKHMask($n_keybKHMask++);
			$o.AddKHMask(mjScanCodeById($n_keybKHMask++));
			gfxa_ins_oper_logo($v, $img_prefix+$mnu[$mi]['image'], $xofs + $col*($sk.bd[0]+$x_betw) + ($sk.bd[0]-$sk.d[0])/2, $yofs + $row*($sk.bd[1]+$y_betw) + ($sk.bd[1]-$sk.d[1])/2, $sk.d[0], $sk.d[1], $mnu[$mi]['name'],'1');

		}
		// - - - - - operator
		else  {
			var $o = $v.AddI($sk.bi, $xofs + $col*($sk.bd[0]+$x_betw), $yofs + $row*($sk.bd[1]+$y_betw));
			var $opId = _jcfg_mnuIsMenuOperatorId($mi, $t_id);
			var $op = jcfg_findOperatorById($opId);

			/*121212*/
			var $operator_Image = $op['image'];
			if('undefined' !== typeof($mnu[$mi]['image'])){
				$operator_Image = $mnu[$mi]['image'];
			}
			var $operator_Name = $op['name'];
			if('undefined' !== typeof($mnu[$mi]['name'])){
				$operator_Name = $mnu[$mi]['name'];
			}

			if ($op == -1) {
				continue;
			}

			if ($g_forced_mobile_selection === true) {
				$o.AddHandler('goto_ForcedCheck("'+$opId+'")', $sk.bd[0], $sk.bd[1]);
				$o.AddKHMask(mjScanCodeById($n_keybKHMask++));
			}
			else {

				/*
				if($opId == '112'){
				$o.AddHandler('goto_Loc("complat_message.html?recepient='+$opId+'")', $sk.bd[0], $sk.bd[1]);
				}else{
				$o.AddHandler('goto_Loc("data-entry.html?recepient='+$opId+'")', $sk.bd[0], $sk.bd[1]);
				}
				*/

				var $goto_locdoc = if3_GetOpPage($opId);

/*				if($ga_jcfg['config']['NoChangeMessage'] == 1){
					$goto_locdoc = 'message_no_get_change';
				}*/

								if (($opId==686)||($opId==690)||($opId==685)) {$o.AddHandler('goto_Loc("'+$goto_locdoc+'.html?recepient='+$opId+'&field101='+GetTm('gaz')+'curr_c=0'+'")', $sk.bd[0], $sk.bd[1]);}
				else {
					if (($opId==1007)||($opId==1005))
						{	
							$o.AddHandler('goto_Loc("bank.html")', $sk.bd[0], $sk.bd[1]);
						}
					else    {        
					                
								if ($opId in comstar) {
									$o.AddHandler('goto_Loc("'+$goto_locdoc+'.html?recepient=892&comstar='+$opId+'")', $sk.bd[0], $sk.bd[1]);
								}
								else
								{
									$o.AddHandler('goto_Loc("'+$goto_locdoc+'.html?recepient='+$opId+'")', $sk.bd[0], $sk.bd[1]);
								}
						}

				     }

				$o.AddKHMask(mjScanCodeById($n_keybKHMask++));


			}
			gfxa_ins_oper_logo($v, $img_prefix+$operator_Image, $xofs + $col*($sk.bd[0]+$x_betw) + ($sk.bd[0]-$sk.d[0])/2, $yofs + $row*($sk.bd[1]+$y_betw) + ($sk.bd[1]-$sk.d[1])/2, $sk.d[0], $sk.d[1], $operator_Name);
		}


		$col++;
		if ($col >= $maxcols) {
			$col = 0;
			$row++;
		}
		if ($row >= $maxrows) {
			break;
		}

	}

	// alert('outp: '+$items_outputed+', perp: '+$perp_ofs+', total:'+$mnu_items_count);
	// alert('mic: '+$mnu_items_count+', cto: '+($items_outputed+$perp_ofs));
	if ($mnu_items_count > ($items_outputed+$perp_ofs)) {
		$g_vpa[$__v]['br']['n'] = LCP('button_more');
		$g_vpa[$__v]['br']['s'] = 1;
		$s = $__id+'_'+($items_outputed+$perp_ofs);
		// alert($s);
		$g_vpa[$__v]['br']['h'] = ("route_to_vp('VIEW_OPERATORS', 'create_submenu_icons', '"+$s+"', '"+$__v+"')");
		// $ga_buttbig[1]['v'].Show(1, 1);

	}



} // function


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// creating subelements with operators icons
/*
function create_operator_icons($__v) {
// function create_operator_icons($__v, $__s, $__i, $__p, $__id) {

var $v = $g_vpa[$__v]['v'];
var $__s = $g_vpa[$__v]['s'];
var $__id = $g_vpa[$__v]['i'];
// alert($__v);
// alert($__id);
set_rect_text($v, [5, 15, $__s.r[2], 70], $__s, LCP('choose_operator'));

$sk = SKP('OPERATOR_ICON');

// getting max colums put into container
var $yofs = 100;

var $maxcols = Math.floor( $__s.r[2] / $sk.bd[0] );
var $maxrows = Math.floor( ($__s.r[3] - $yofs) / $sk.bd[1] );

var $xofs = Math.floor( ($__s.r[2] - $sk.bd[0]*$maxcols)/2 );
// alert($maxcols);

// var ndMenu=ndRoot.getElementsByTagName("menu").item(0);


var $col = 0;
var $row = 0;
//alert($__id);
ndOperators = GetMenu($__id,ndMenu);
// ndOperators = GetUpMenu($__id,ndMenu);

alert(ndOperators.childNodes.length);


for (var $i=0; $i<ndOperators.childNodes.length; $i++) {
var ndOperatorId=ndOperators.getElementsByTagName("operator_id").item($i);
var opId = ndOperatorId.attributes.getNamedItem('id').text;

var ndOperator=GetNodeById(opId);
if (ndOperator != null){

// var opId = ndOperator.attributes.getNamedItem('id').text;

var opNme = ndOperator.getElementsByTagName("name").item(0).text;
var opImg = ndOperator.getElementsByTagName("image").item(0).text;
// alert(opNme);


// var $o = $__v.AddI($spg.bi, $xofs + $col*$spg.bd[0], $yofs + $row*$spg.bd[1]);

var $o = $v.AddI($sk.bi, $xofs + $col*$sk.bd[0], $yofs + $row*$sk.bd[1]);
$o.AddHandler('goto_Loc("data-entry.html?recepient='+opId+'")');
$v.AddI('op/'+opImg, $xofs + $col*$sk.bd[0] + 12, $yofs + $row*$sk.bd[1] + 18);

$col++;
if ($col >= $maxcols) {
$col = 0;
$row++;
}
if ($row >= $maxrows) {
break;
}
}
}


}
*/

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// , $__t, $__tid
function route_to_vp($__skp, $__func_subels, $__id, $__parent) {
	// alert('routing to: '+$__id + ', from parent: '+$__parent);
	// MjCRIODA($g_vpa);
	//here
	PlaySoundA('click1');

	// - - - - - disable current vpa
	$g_vpa[$g_current_vpa]['v'].Show(0, 1);

	// - - - - - disable relatives
	if ('undefined' !== typeof($g_vpa[$g_current_vpa]['relative_vpa'])) {
		// alert('disable relatives: ' + $g_vpa[$g_current_vpa]['relative_vpa']);
		// $g_vpa[$g_current_vpa]['relative_vpa']
		var $parent_vpa = $g_vpa[$g_current_vpa]['relative_vpa'];
		$g_vpa[$parent_vpa]['v'].Show(0, 1);
	}

	// - - - - - enable current vpa
	$g_current_vpa = create_vpa($__skp, $__func_subels, $__id, $__parent);

	// - - - - - buttons overcreation test
	if ($ga_buttbig.length > 2) {
		alert('route_to_vp() : buttons overcreation test - fail!');
	}

	// var $v = $g_vpa[$__parent];
	// alert($__parent);

	// - - - - - buttons-vpa-logical view
	var $v = $g_vpa[$g_current_vpa];
	// alert($g_current_vpa);
	change_srt_text($ga_buttbig[0]['txi'], $v['bl']['n']);
	change_srt_text($ga_buttbig[1]['txi'], $v['br']['n']);

	$ga_buttbig[0]['v'].Show($v['bl']['s'], 1);
	$ga_buttbig[1]['v'].Show($v['br']['s'], 1);

	$ga_buttbig[0]['o'].AddHandler($v['bl']['h']);
	$ga_buttbig[1]['o'].AddHandler($v['br']['h']);

	// MjCRIODA($g_vpa[$g_current_vpa]);

	// - - - - - additional buttons logic
	if ('-1' !== $g_vpa[$g_current_vpa]['p']) {
		$ga_buttbig[0]['v'].Show(1, 1);
		// кнопка "назад"
		change_srt_text($ga_buttbig[0]['txi'], LCP('button_back'));
		// $ga_buttbig[0]['o'].AddHandler('goto_Loc("main.html")');
		//
		// MjCRIODA($g_vpa[$__parent]); // ['v']
		$ga_buttbig[0]['o'].AddHandler("route_to_vp('"+$g_vpa[$g_current_vpa]['p']+"', -1, -1, -1);");
	}
	else {

		$ga_buttbig[0]['v'].Show($v['bl']['s'], 1);
	}



	// - - - - - enable relatives
	if ('undefined' !== typeof($g_vpa[$g_current_vpa]['relative_vpa'])) {
		// alert('enable relatives: ' + $g_vpa[$g_current_vpa]['relative_vpa']);
		// $g_vpa[$g_current_vpa]['relative_vpa']
		var $parent_vpa = $g_vpa[$g_current_vpa]['relative_vpa'];
		$g_vpa[$parent_vpa]['v'].Show(1, 1);

		// alert('enabling vpa: '+$g_current_vpa);
		if ('VIEW_ACCOUNT_DETAILS' === $g_current_vpa) {
			// alert('restoring details...');
			// $ga_fields[$g_fields_active]
			activate_field($g_fields_active);
			verify_fields();
			// alert('active field: ' + $g_fields_active);

		}

	}

//        if ($__id == 500){show_bonus(1132,'rt_b');}
//	else (document.getElementById('rt_b').style.top='-400px')
		mj_RT.Add('goto_Main', 120000, 0);

}


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function goto_Loc($__s) {
	// alert($__s);
       	if (getParameter('recepient', -1)==778) {$ga_buttbig[1]['v'].Show(0,1);}
	PlaySoundA('click1');
	document.location.href = $__s;
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function goto_LocNos($__s) {
	document.location.href = $__s;

}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function goto_Main() {
	goto_Loc("main.html");
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// $s__s parameter ==== ???
function goto_Check($__s) {
	PlaySoundA('click2');


	// var $recepient_potent = getParameter('recepient_potent', -1);

	// Parameters['recepient_potent']
	// unsetk


	// alert($__s + '?recepient=' + Parameters['recepient'] + '&field100='+$s_number);
	// alert('3-2-1-GO!');
	// $__s = 'checking.html'+'?recepient=' + Parameters['recepient'];
	// $__s = 'checking.html?'+goto_get_allurlparams('recepient_potent');
	// $__s = 'payment.html?'+goto_get_allurlparams('recepient_potent');
	// alert($__s);

	var opId = Parameters['recepient'];
	var $op = jcfg_findOperatorById(opId);
	var $pr = $op['processor']['type'];

	if ($pr === 'Cyberplat_PIN') {
		// GetCardsInfo(opId);
		var $opId = getParameter('recepient', 'undefined');
		var $l_cards = $ga_jcfg['details']['pin_info'][$opId]['cards'];

		$cid = $ga_fields[$g_fields_active]['val'];

		Parameters['cardname'] = $l_cards[$cid]['name'];
		Parameters['cardvalue'] = $l_cards[$cid]['amount'];
		Parameters['cardid'] = $cid;

		/*
		$__s += '&cardname='+$l_cards[$cid]['name'];
		$__s += '&cardvalue='+$l_cards[$cid]['amount'];
		$__s += '&cardid='+$cid;
		*/

	}
	else {
		// GetFieldsInfo(opId);
		for (var $i=0; $i<$ga_fields.length; $i++)  {
			// alert($i);
			/*
			if ($ga_fields[$i]['t'] === 'e') {
			// alert('enum field id: '+$ga_fields[$i]['id']);
			// MjCRIODA($ga_fields[$i]['a']['en']);
			// alert('enum field id: '+$ga_fields[$i]['id']);
			// alert('enum addition!'+$ga_fields[$i]['id']+", "+ $ga_fields[$i]['a']['fi'][ $ga_fields[$i]['val'] ]);
			$__s += '&field'+$ga_fields[$i]['id']+'='+$ga_fields[$i]['a']['en'][ $ga_fields[$i]['val'] ];
			}
			else {
			// alert('not enum');
			$__s += '&field'+$ga_fields[$i]['id']+'='+$ga_fields[$i]['val'];
			}
			*/
			//alert(opId+' field '+Parameters['field'+$ga_fields[$i]['id']]+' value '+$ga_fields[$i]['val']);

				if (opId==823) {
					Parameters['field'+$ga_fields[$i]['id']] =$ga_fields[$i]['val'].substring(0,2)+"-"+$ga_fields[$i]['val'].substring(2,7)+"-"+$ga_fields[$i]['val'].substring(7,9);
				}
				else {
					Parameters['field'+$ga_fields[$i]['id']] = $ga_fields[$i]['val'];
				}
			// $__s += '&field'+$ga_fields[$i]['id']+'='+$ga_fields[$i]['val'];
		}

	}


	// for ($i=0;)
	if ('999' === getParameter('recepient_potent')) {
		//$__s += '&offline=' + $op['processor']['offline'];

		var $loc_offline = jcfg_findOperatorById('999')['processor']['offline'];

		//$g_forced_mobile_selection = true THEN define offline/online mode by operator (MTS,BeeLine,MegaFon...)
		if($g_forced_mobile_selection){
			$loc_offline = $op['processor']['offline'];
		}
		//alert("111: opId="+opId+"$g_forced_mobile_selection="+$g_forced_mobile_selection+"$loc_offline="+$loc_offline);
		Parameters['offline'] = $loc_offline;
		// $__s += '&offline=' + $loc_offline;
	}

	if ($is_ressur_mode) {
		$__s = 'payment.html?'+goto_get_allurlparams('recepient_potent');
	}
	else {
		
		if ($gs_overload_check_page) {
			$__s = $gs_overload_check_page+'?'+goto_get_allurlparams('recepient_potent');
		}
		else {
			$__s = 'checking.html?'+goto_get_allurlparams('recepient_potent');
		}
	}

//	alert('wow3');
	// alert($__s);
	if ((opId==686)||($opId==690)||(opId==685)) {
			if (GetTm('gaz').substring(2,6)==(GetTm('year')-1)&&(GetTm('gaz').substring(0,2)==12))
					{ 
					   if ((getParameter('field101').substring(0,2)==12)&&(getParameter('field101').substring(2,6)==GetTm('gaz').substring(2,6))) 
						{
						    $__s = 'checking.html?'+goto_get_allurlparams('recepient_potent');
						}
					   else 
						{   if ((getParameter('field101').substring(0,2)<=12)&&(getParameter('field101').substring(2,6)>GetTm('gaz').substring(2,6))){
							$__s = 'checking.html?'+goto_get_allurlparams('recepient_potent');}
						    else {$__s='data-entry.html?recepient='+opId+'&field101='+GetTm('gaz')+'&field100='+getParameter('field100')+'&field102='+getParameter('field102')+'&field104='+getParameter('field104')+'&err=1';}
							
						}
					}
			else
				{
					if (GetTm('gaz').substring(2,6)>getParameter('field101').substring(2,6))
						{  
							$__s='data-entry.html?recepient='+opId+'&field101='+GetTm('gaz')+'&field100='+getParameter('field100')+'&field102='+getParameter('field102')+'&field104='+getParameter('field104')+'&err=1';
						}
					else 
						{
							if (GetTm('gaz').substring(0,2)>getParameter('field101').substring(0,2)) {$__s='data-entry.html?recepient='+opId+'&field101='+GetTm('gaz')+'&field100='+getParameter('field100')+'&field102='+getParameter('field102')+'&field104='+getParameter('field104')+'&err=1';}
							else{$__s = 'checking.html?'+goto_get_allurlparams('recepient_potent');};
		
						}	
				}
			
		       };
	if (opId==1001) { 
				
			  if (jcfg_findOperatorById('1007')==-1){
				$recp=1005;
			  }
			  else {
				$recp=1007;
			  }
			for(i = 0; i < bankItems.length; ++i) 
			{
                if (getParameter('field100')==bankItems[i].bic) { 
					$__s = 'data-entry.html?recepient='+$recp+'&field100='+getParameter('field100')+'&img_name='+bankItems[i].img+'&bank_name='+bankItems[i].name;
					break;
				} 
				else {
					$__s = 'bank.html';
				}
		    }
			if ((getParameter('field100') in alfa)&&(jcfg_findOperatorById('60')==-1)) { 
				var $__s='choice.html?alfa=1';
			} else if ((getParameter('field100') in hkf)&&(jcfg_findOperatorById('60')==-1)) 
			{ 
				var $__s='data-entry.html?recepient=1003&field100='+getParameter('field100');
			} else if ((getParameter('field100') in otp)&&(jcfg_findOperatorById('60')==-1)) 
			{ 
				var $__s='data-entry.html?recepient=1004&field100='+getParameter('field100');
			}
	

		
	
	}
	if ((opId==829)&&((getParameter('field100').substr(0,3)=='034')||(getParameter('field100').substr(0,3)=='131')||(getParameter('field100').substr(0,3)=='152')||(getParameter('field100').substr(0,3)=='317'))){
		$__s = 'checking.html?recepient=830&field100='+getParameter('field100')+'&field101='+getParameter('field101');
	} else {
		if ((opId==829)&&((getParameter('field100').substr(0,3)=='011')||(getParameter('field100').substr(0,3)=='103'))){
			$__s = 'checking.html?recepient=831&field100='+getParameter('field100')+'&field101='+getParameter('field101');
		} else {
			if ((opId==829)&&((getParameter('field100').substr(0,3)!='011')&&(getParameter('field100').substr(0,3)!='103')&&(getParameter('field100').substr(0,3)!='034')&&(getParameter('field100').substr(0,3)!='131')&&(getParameter('field100').substr(0,3)!='152')&&(getParameter('field100').substr(0,3)=='317'))) {
				$__s = 'data-entry.html?recepient=829&field100='+getParameter('field100')+'&field101='+getParameter('field101')+'&err=1';
			}
		}

	}
	//if ((opId==1002)&&(goto_get_allurlparams('recepient_potent').slice(goto_get_allurlparams('recepient_potent').indexOf("field101")+9,goto_get_allurlparams('recepient_potent').indexOf("field101")+10))==3) {$__s = 'data-entry.html?recepient=1000&'+goto_get_allurlparams('recepient_potent').split("recepient").join("wldr");}
	if ((opId==1008)&&(getParameter('field100')=='00000000158')){
		$__s = 'data-entry.html?recepient=7777&'+goto_get_allurlparams('recepient_potent').split("recepient").join("oldrecepient");
	}
	if (opId==7777) {
		$__s = 'checking.html?'+goto_get_allurlparams('recepient_potent').split("recepient").join("notrecepient").split("oldnotrecepient").join("recepient");
	}
	if ((opId>=1003)&&(opId<=1007)) {$__s = 'data-entry.html?recepient=1009&'+goto_get_allurlparams('recepient_potent').split("recepient").join("oldrecepient");}
	if (opId==1010) {$__s = 'data-entry.html?recepient=1999&'+goto_get_allurlparams('recepient_potent').split("recepient").join("oldrecepient");}
	if ($op['fields']['999']) {$__s = 'data-entry.html?recepient=9999&'+goto_get_allurlparams('recepient_potent').split("recepient").join("oldrecepient");}	
	if (opId==9999) {$__s = 'checking.html?'+goto_get_allurlparams('recepient_potent').split("recepient").join("notrecepient").split("oldnotrecepient").join("recepient");}
	if (opId==1999) {$__s = 'checking.html?'+goto_get_allurlparams('recepient_potent').split("recepient").join("notrecepient").split("oldnotrecepient").join("recepient");}
	if (opId==1009) {$__s = 'checking.html?'+goto_get_allurlparams('recepient_potent').split("recepient").join("notrecepient").split("oldnotrecepient").join("recepient");}
	if (opId==889) {$__s = 'data-entry.html?recepient=131325&ffield101='+getParameter('field100');}
	if (opId==966) {$__s = 'data-entry.html?recepient=131327&ffield101='+getParameter('field100');}
	if ((opId==897)||(opId==901)||(opId==965)||((opId==778)&&(typeof($op['fields']['102'])!='undefined'))) {
		if (!$gs_localbase_included) {
			CreateBase('0123456789', 100000);
			$gs_localbase_included = true;
		}

		var $opdop = GetIndex_InLocalBase(getParameter('field102'));
		$__s = 'checking.html?'+goto_get_allurlparams('recepient_potent')+'&CURR_C1='+$opdop;
		if ((opId==778)&&(getParameter('school')==1)) {
			$__s = 'checking.html?recepient=778&tarif='+getParameter('tarif')+'&field100='+getParameter('field100')+'&field102='+getParameter('field102')+'&field103='+getParameter('field103')+'&CURR_C11='+$opdop;
		}

	}
	if (opId==9998) {
		$__s = 'search.html?me=&number='+getParameter('field100');
	}
	document.location.href = $__s; //  + '?recepient=' + Parameters['recepient'] + '&field100='+$s_number;
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function goto_ForcedCheck($__n) {
	// goto_Loc('command.html?cmd=playsound&parm=fedor.mp3');
	PlaySoundA('click1');

	Parameters['recepient'] = $__n;
	goto_Check();
}


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function create_field_comment($__v, $__ofs) {

	//  - - - - - activate field
	var $ae = $ga_fields[$g_fields_active];
	var $v = $g_vpa[$__v]['v'];
	var $s = $g_vpa[$__v]['s'];
	/*
	alert($g_fields_active);
	MjCRIODA($ga_fields[$g_fields_active]);
	*/

	//  - - - - - - - comment
	// alert('VP: ' + $__v);
	// $v
	$s_kil = SKP('VIEW_TEXT22');
	var $skp_comm = SKP('VIEW_ACCOUNT_DETAILS_FCOMMENT');
	/*
	MjCRIODA($s);
	MjCRIODA($skp_comm);
	*/

	// $ae['commf'] = $v.AddD($skp_comm.r[0]-$__ofs, $skp_comm.r[1]);
	// $ae['commf'] = $v.AddD($skp_comm.r[0]-100, $skp_comm.r[1]);
	$ae['commf'] = $v.AddD(0, 0);
	// var $o = $v.AddD(0, 0);
	$ae['commf'].MoveTo(1, GTX($skp_comm.r[0]), GTY($skp_comm.r[1]));

	$ae['commf'].SizeTo(1, $skp_comm.r[2], $skp_comm.r[3]);
	// $ae['commf'].o.innerHTML = 'WOW!';
	//MjCRIODA($ae['commf'].o);

	/*alert('wow!');
	if ('undefined' === typeof($ae['commft'])) {
	$ae['commft'] = 'uncommented!';
	}
	*/
	var $online = '';
	var $OpId = getParameter('recepient','-1')
	var $op = jcfg_findOperatorById($OpId);
	var $err = getParameter('err', -1);		
	//        alert("$op="+$op);
	if($op !== '-1'){
        if(($OpId>=1000)&&($OpId<=1010)||($OpId==1009)||($OpId==962))
        {
            $online='Платеж будет зачислен в течении 3-х <b>банковских дней</b>';
        }
	else
	{
		if($op['processor']['offline'] === '0'){
			$online = LCP('comment_online');
		}
	}
	}
	mj_G._a[$ae['commf'].i]['i'].innerHTML = $ae['commft'] + $online;

	mj_G._a[$ae['commf'].i]['i'].style["fontFamily"] = $skp_comm.f[0];
	mj_G._a[$ae['commf'].i]['i'].style["fontSize"] = $skp_comm.f[1]+'px';
	mj_G._a[$ae['commf'].i]['i'].style["fontWeight"] = $skp_comm.f[2];

	mj_G._a[$ae['commf'].i]['i'].style["color"] = $skp_comm.f[3];
	mj_G._a[$ae['commf'].i]['i'].style["textAlign"] = $skp_comm.f[4];


		if ($OpId==0) {
			$opEpp = $op["eppa"];
			if (('undefined' != typeof($opEpp))&&($opEpp == 1)){
										document.getElementById('eppa').style.top="430px";
										document.getElementById('eppa').style.left="310px";
										document.getElementById("sample").SetVariable("num",getParameter('field100'));
										document.getElementById("sample").SetVariable("termname",TerminalName);
										//var $mt = SKP('MTSEPPA2');
										//var $o = $v.AddI($mt.i, -720, 280);
									        //$o.AddHandler("goto_Loc('MTS_Helper/interface/index.html?TerminalNumber='+TerminalName+'&PhoneNumber='+getParameter('field100'));");	
									   }
			}
	if ((($OpId==686)||($OpId==690)||($OpId==685))&&($err==1)) {set_rect_text($v, [-440, 350, 400, 70], $s_kil, 'Внимание! Месяц оплаты не может быть меньше '+GetTm('gaz').substr(0,2)+'.'+GetTm('gaz').substr(2,6));};
	// $a_srt[$ae['txfi']]['b'].SetBG(1, $skc.b);
	// $ae['commf'].SetBG(1, '#994444');
}


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function create_pinpad($__v) {

	// $g_vpa[$g_current_vpa]['v'].Show(0, 1);

	var cvp_PP = $g_vpa[$__v]['v'];
	var $__s = $g_vpa[$__v]['s'];

	create_field_comment($__v, 0);

	var $title = $ga_fields[$g_fields_active]['title'];

	// alert("$title="+$title);

	if(1 === $fields_count){
		$title = '';
	}

	//title in field name
	//121212
	var opId = getParameter('recepient', 'undefined');

	var $op = jcfg_findOperatorById(opId);
	var $pr = $op['processor']['type'].toLowerCase();
	var $i_pr = $op['i_type'].toLowerCase();

	//HL титул пинпада
	if ($i_pr !== 'comm_plat') set_rect_text(cvp_PP, [5, -30, $__s.r[2], 50], $__s, $title );
	// var $sp = SKP('PINPAD');

	// if pinpad is not defined, create it!
	// if (!cvp_PP) {
	// cvp_PP = new MJ_VP(cvp_G, 'vp_pinpad', $sp.r[0], $sp.r[1], $sp.r[2], $sp.r[3], 'DIV');
	// cvp_PP.o.Border(1, $sp.br);
	// cvp_PP.o.SetBG(1, $sp.bc);

	$a_pin = ['1', '2', '3', '|', '4', '5', '6',  '|', '7', '8', '9', '|', 'c', '0', 'b'];
	var $x = 0;
	var $y = 0;
	var $xo = 77;
	var $yo = 145;


	var $res_ofs = 100;
	if (!$is_ressur_mode) {
		$res_ofs = 120;
	}

	var $res_ofs_x = $res_ofs;
	var $res_ofs_y = $res_ofs;
	if (typeof($ga_skp['BUT_PINPAD']) !== 'undefined') {
		var $skp_aa = SKP('BUT_PINPAD');
		var $res_ofs_x = $skp_aa.d[0];
		var $res_ofs_y = $skp_aa.d[1];
	}


	for (var $v=0; $v<$a_pin.length; $v++) {
		if ('|' !== $a_pin[$v]) {
		        //Kirill
			var $o = cvp_PP.AddI('pad_but'+$a_pin[$v]+'a0.gif', $xo + $res_ofs_x*$x, $yo + $res_ofs_y*$y);
			var $o1 = cvp_PP.AddI('pad_but'+$a_pin[$v]+'a1.gif', $xo + $res_ofs_x*$x, $yo + $res_ofs_y*$y, true);
			//--------------
			$o.AddHandler('cvp_PP_PinPress("'+$o.i+'", "'+$o1.i+'", "'+$a_pin[$v]+'")', $res_ofs_x, $res_ofs_y);
			if ($a_pin[$v] === 'c') {
				$o.AddKHMask(mjsc_Space);
			}
			else if ($a_pin[$v] === 'b') {
				$o.AddKHMask(mjsc_Delete);
			}
			else {
				$o.AddKHMask(mjsc_1+parseInt($a_pin[$v]-1));
				$o.AddKHMask(mjsc_1p+parseInt($a_pin[$v]-1));
			}

			$x++;
		}
		else {
			$y++;
			$x=0;
		}
	}


	var $__s_bg_enter_number = SKP('VIEW_ACCOUNT_INLET_NUMBER_FIELD');

	var $ofs9 = 0;
	if($fields_count > 1){
		$o_number1 = cvp_PP.AddI($__s_bg_enter_number.i, $__s_bg_enter_number.r[0], $__s_bg_enter_number.r[1]);
	}else{
		$ofs9 = 1200;
	}

	//        $o_number1 = cvp_PP.AddI($__s_bg_enter_number.i, $__s_bg_enter_number.r[0], $__s_bg_enter_number.r[1]);
	//        $o_number.SizeTo(1, $__s_bg_enter_number.r[2], $__s_bg_enter_number.r[3]);

	$o_number = cvp_PP.AddD(0, $__s_bg_enter_number.r[1]+20);
	$o_number.SizeTo(1, $__s_bg_enter_number.r[2]+$ofs9, $__s_bg_enter_number.r[3]);

	$o = $o_number;



	var $spb = SKP('BUTBIG');

	mj_G._a[$o.i]['i'].style["fontFamily"] = $__s_bg_enter_number.f[0];
	mj_G._a[$o.i]['i'].style["fontSize"] = $__s_bg_enter_number.f[1];
	mj_G._a[$o.i]['i'].style["fontWeight"] = $__s_bg_enter_number.f[2];

	mj_G._a[$o.i]['i'].style["color"] = $__s_bg_enter_number.f[3];
	mj_G._a[$o.i]['i'].style["textAlign"] = $__s_bg_enter_number.f[4];


	// if masked, update it!
	var $s_def = '';

	var $ae = $ga_fields[$g_fields_active];
	if ('m' === $ae['t']) {
		$s_def = $ae['attr']['mask'];

	}

	mj_G._a[$o_number.i]['i'].innerHTML = $s_def; // *(***)***-**-**';
	change_srt_text($ga_fields[$g_fields_active]['txi'],  $s_def);

}


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//  - - - - - animated objects
var $g_vp_aobj = new Array();

var $keyb_click_increment = 5;
var $keyb_click_multiplyer = 10;


function gfxa_aniobj_back() {
	for (var $i in $g_vp_aobj) {
		/*
		mj_G._a[ $g_vp_aobj[$i]['oi'] ]['o'].left = $g_vp_aobj[$i]['ox'];
		mj_G._a[ $g_vp_aobj[$i]['oi'] ]['o'].top = $g_vp_aobj[$i]['oy'];
		*/
		var $to = $g_vp_aobj[$i];

		if ($to['c'] > 0) {
			$to['c']--;
			mj_G._a[$i]['o'].Opacity(1, 1-$to['c']/5);
			mj_G._a[$i]['o'].SizeTo(1, $to['ow']-$to['c']*($keyb_click_multiplyer+3), $to['oh']-$to['c']*$keyb_click_multiplyer/2);
			mj_G._a[$i]['o'].MoveTo(1, $to['ox']+3*$to['c'],$to['oy']+3*$to['c']);
			// mj_G._a[$i]['o'].MoveTo(1, $to['ox']+3*$to['c'],$to['oy']+3*$to['c']);
			// mj_G._a[$i]['o'].MoveTo(1, $to['ox']+$to['c'], $to['oy']+to['c'] );
			$g_vp_aobj[$i] = $to;
			// alert('updated!');
		}


		// old logic
		/*
		if ($to['c'] > 0) {
		$to['c']--;
		mj_G._a[$i]['o'].MoveTo(1, $to['ox']+3*$to['c'],$to['oy']+3*$to['c']);
		$g_vp_aobj[$i] = $to;
		// alert('updated!');
		}
		*/


		// mj_G._a[ $g_vp_aobj[$i]['oi'] ]['o'].top = $g_vp_aobj[$i]['oy'];
	}
}


function gfxa_aniobj_use($i) {
	// alert($i);

	// дребезг!
	var $to;
	if ('undefined' === typeof($g_vp_aobj[$i])) {
		// alert('here!');
		$to = new Array();
		$to['c'] = $keyb_click_increment;
		$to['ox'] = mj_G._a[$i]['o'].x;
		$to['oy'] = mj_G._a[$i]['o'].y;

		$to['ow'] = mj_G._a[$i]['o'].w;
		$to['oh'] = mj_G._a[$i]['o'].h;


		// alert(mj_G._a[$i]['o'].w);

	}

	else {
		// alert('defined!');
		$to = $g_vp_aobj[$i];
		$to['c'] += $keyb_click_increment;
	}


	// mj_G._a[$i]['o'].MoveTo(1, $to['ox']+3*$to['c'],$to['oy']+3*$to['c']);
	$g_vp_aobj[$i] = $to;
	// alert($to['ox']);

}

//mj_RT.Add('gfxa_aniobj_back', 30, 0);


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
var $cvp_PP_apin = new Array();

var $s_number = '';

function cvp_PP_PinPress($__a, $__b, $__v) {

	// alert($__a + ' : ' + $__b);
	// собственно, кнопки
	if (($__a > 0) &&  ($__b > 0)) {
		mj_G._a[$__a]['o'].Visi(1, 0);
		mj_G._a[$__b]['o'].Visi(1, 1);
		$cvp_PP_apin[$__a] = [2, $__b];
	}


	var $ae = $ga_fields[$g_fields_active];

	$s_number = $ae['val'];

	if ('_' == $__v) {
		// инчаго не делать - пустой вызов для перерисовки

	}
	else if ('c' == $__v) {
		$s_number = '';
	}
	else if ('b' == $__v) {
		$s_number = $s_number.substring(0, $s_number.length-1);
		// $s_number = $s_number.substring(0, -1);
	}
	// add number to field
	else {
		// - - - - - - - if masked field
		if ('m' === $ae['t']) {
			$s_number += $__v;
		}
		// - - - - - - - if integer field
		if ('i' === $ae['t']) {
			if ($s_number.length < $ae['attr']['max']) {
				$s_number += $__v;
			}

		}

	} // add number to field

	// FIELD VALIDAIONS
	// - - - - - - - if masked field
	if ('m' === $ae['t']) {
		// alert($s_number);
		var $s_res = '';
		var $s_mask = $ae['attr']['mask'];
		var $s_r = '';
		var $sym = '';
		var $pos = 0;

		$ae['pass'] = 1;
		for (var $j=0; $j<$s_mask.length; $j++) {
			$sym = $s_mask.charAt($j);
			//
			if (($sym === '*') && ($pos < $s_number.length)) {
				$s_r += $s_number.charAt($pos);
				$s_res += $s_number.charAt($pos);
				$pos++;
			}
			else {
				$s_r += $s_mask.charAt($j);
				if ($sym === '*') {
					$ae['pass'] = 0;
				}
			}
		}

		if ('999' === getParameter('recepient') && '89' === $s_res) {
			$s_res = '9';
		}
		$s_number = $s_res;
	}

	// - - - - - - - if integer field
	if ('i' === $ae['t']) {
		$s_r = $s_number;
		if ($s_number.length >= $ae['attr']['min']) {
			$ae['pass'] = 1;
			// $limit_rules['min_value'] !!!
			if ('undefined' !== typeof($ae['attr']['min_value'])) {
				if (parseInt($ae['attr']['min_value']) > parseInt($s_number)) $ae['pass'] = 0;
			}
		}
		else {
			$ae['pass'] = 0;
		}

	}
if ($sw!=1){
	if (($ae['pass']==1)&&($ae['t']=='m')) {
		for (var $j=0; $j<$ae['attr']['mask'].length; $j++) {
			if ($ae['attr']['mask'].charAt($j)=='.'){
				$s_number=$s_number.substr(0,$j)+'.'+$s_number.substr($j);
				$sw=1;
			}
		}
	}
}
	// - - - - - - - verify on next
	$ae['val'] = $s_number;

	//  - - - - - - - checking in local base
	if ('999' === getParameter('recepient')) {
		Parameters['recepient_potent'] = '999';
	}

	//
	$g_forced_mobile_selection = false;

	if ('999' === getParameter('recepient_potent')) {

		if (!$gs_localbase_included) {
			CreateBase('0123456789', 100000);
			$gs_localbase_included = true;
		}

		if ($s_number.length >= 10) {
			// alert('checking: '+$s_number);
			var $idx = GetIndex_InLocalBase($s_number);

			// MjCRIODA($idx);

			// if (($idx != -1)  && ($ga_inbase_found.length === 1) &&  (jcfg_findOperatorById(OpId_InLocalBase($idx)) != -1) ) {
			if ($ga_inbase_found.length == 1) {
				change_helper_state(1);


				var $op = jcfg_findOperatorById($ga_inbase_found[0]);
				var opNme = $op["name"];
				var opImg = $op["image"];

				// MjCRIODA($go_operator_icon);
				var $iii = MJGA($go_operator_icon.i);
				$iii.src = $mj_g_img_pth+'op/'+opImg;

				Parameters['recepient'] = $ga_inbase_found[0];
				// alert( Parameters['recepient']  );

				// alert("1op: ");
				// MjCRIODA($ga_inbase_found);
				// alert(OpId_InLocalBase($idx));
				// $mj_g_img_pth+$__s
				// $go_operator_icon = $v.AddI('op/'+opImg, $xofs, $yofs);
				// $ga_buttbig[1]['o'].AddHandler('alert("goto_check!!!")');

                                $g_forced_mobile_selection = true;
				$gs_global_check_handler = 'fields_preCheck()';
				change_srt_text($hl_id, opNme);

				// alert('single: ' + $ga_inbase_found[0]);
			}
			else if ($ga_inbase_found.length > 1) {
				change_helper_state(1);

				// alert('double');
				$fmcheck = 'gateway';

				/*var $op = jcfg_findOperatorById(OpId_InLocalBase($ga_inbase_found[0]));
				var opNme = $op["name"];
				var opImg = $op["image"];*/

				// MjCRIODA($go_operator_icon);
				//var $iii = MJGA($go_operator_icon.i);
				//$iii.src = $mj_g_img_pth+'op/'+opImg;

				// alert("2op: ");
				// MjCRIODA($op);

				$g_forced_mobile_selection = true;
				$ae['pass'] = 1;
				$gs_global_check_handler = 'force_select_mobile_recepient()';

			}

			else {
				// alert('else');
				change_helper_state(2);


				// alert('not detected!');
				//alert('failed!'+$s_number);
				$fmcheck = 'all';
				$g_forced_mobile_selection = true;
				$ae['pass'] = 1;
				$gs_global_check_handler = 'force_select_mobile_recepient()';

				var $iii = MJGA($go_operator_icon.i);
				$iii.src = $mj_g_img_pth+'op/logo_no_oper.gif';

			}
		}
		else {
			change_helper_state(0);

			$ae['pass'] = 0;
			var $iii = MJGA($go_operator_icon.i);
			$iii.src = $mj_g_img_pth+'op/mob_999.gif';
			change_srt_text($hl_id, $hl_def_op);
			// alert($go_operator_icon.i);
		}
	}


	// var opId = Parameters['recepient'];
	// var $ae = $ga_fields[$g_fields_active];
	// MjCRIODA($ae['attr']);
	// MjCRIODA($ae);

	//  - - - - - - - update field text
	if (!verify_fields()) {
		PlaySoundA('click1');
	}

	mj_G._a[$o_number.i]['i'].innerHTML = $s_r;
	change_srt_text($ga_fields[$g_fields_active]['txi'],  $s_r);



}

function cvp_PP_PinBack() {
	for (var $i in $cvp_PP_apin) {
		if (0 == $cvp_PP_apin[$i][0]) {
			mj_G._a[$i]['o'].Visi(1, 1);
			mj_G._a[$cvp_PP_apin[$i][1]]['o'].Visi(1, 0);
			$cvp_PP_apin[$i][0] = -1;
		}
		else {
			$cvp_PP_apin[$i][0]--;
		}
	}
}

mj_RT.Add('cvp_PP_PinBack', 10, 0);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function force_select_mobile_recepient() {

	// alert('wow!');
	/*
	var cvp_KP = $g_vpa[$__v]['v'];
	var $__s = $g_vpa[$__v]['s'];
	*/
	// $g_vpa[$g_current_vpa]['v'].Show(0, 1);

	// create_vpa("VIEW_OPERATORS", 'create_submenu_icons', '101', '-1');
	// alert('test ar: ');
	// MjCRIODA($ga_inbase_found);


	switch ($fmcheck){

		// - - - - -
		case 'all':

		route_to_vp("VIEW_OPERATORS", 'create_submenu_icons', '101', $g_current_vpa);
		break;


		// - - - - -
		case 'gateway':
		// alert("HERE  I AM!!! 1");


		/*
		var $l = $ga_jcfg['menu'][0]['999'];
		$l = {
		'name' : 'Автоопределенные',
		'id' : '999',
		'image' : 'main_mobile_ico.gif'
		};
		*/

		$ga_jcfg['menu'][0]['999'] = {
		'name' : 'Автоопределенные',
		'id' : '999',
		'image' : 'main_mobile_ico.gif'
		};

		for (var $vv in $ga_inbase_found) {
			$ga_jcfg['menu'][0]['999']['op'+$ga_inbase_found[$vv]] = {
			'id' : $ga_inbase_found[$vv]
			/*,
			'image' : 'mob_mts_espp.gif',
			'rootmenuimage' : 'main_mts.gif'
			*/
			};
		}


		// MjCRIODA($l);



		// alert("HERE  I AM!!!");
		/*
		'op5' : {
		'id' : '0',
		'name' : ''
		};
		*/

		route_to_vp("VIEW_OPERATORS", 'create_submenu_icons', '999', $g_current_vpa);

		break;

		default:
		break;
	}
	// alert('created!');
}



// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


var $keybs = {
	i:[],        // key images layout by [rows][cols](l1,l2,l3,l4) - array with buttons length (in )
	//                                                          [acclen] - accumulated length of the row (in buton's dimensions)

	a:[],        // symbolic keys assocs by [layout][numkey][c] - char
	//                                                                                   [t] - title
	o:[],         // [numkey] gfx objects associated to each key index
	r:[],         // rect inex for change_rect_text
	l:{
		lat:
		[
		'`1234567890-=\\',
		'qwertyuiop[]11',
		'22asdfghjkl;\'',
		'33zxcvbnm,./33',
		'44        55'
		],
		rus:
		[
		'ё1234567890-_/',
		'йцукенгшщзхъ11',
		'22фывапролджэ',
		'33ячсмитьбю.33',
		'44        55'
		],
		latc:
		[
		'@1234567890-=\\',
		'QWERTYUIOP[]11',
		'22ASDFGHJKL;\'',
		'33ZXCVBNM,./33',
		'44        55'
		],
		kil:
		[
		'Ё1234567890-=\\',	
		'ЙЦУКЕНГШЩЗХЪ11',
		'22ФЫВАПРОЛДЖЭ',
		'33ЯЧСМИТЬБЮ,33',
		'44        55'
		],
		rusc:
		[
		'Ё!@#$%^?*()-=\\',
		'ЙЦУКЕНГШЩЗХЪ11',
		'22ФЫВАПРОЛДЖЭ',
		'33ЯЧСМИТЬБЮ,33',
		'44        55'
		]
	}
};



var $g_layout = null;


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function parse_keyboard_layouts() {
	// $keybs

	// - - - - - calculating 'i' part of keyboard layots
	var $kk = $keybs['lat'];

	// key associations calculations
	for (var $layout in $keybs['l']) {
		//  - - - - by layouts
		// alert($layout);

		var $kk = $keybs['l'][$layout];
		var $abs_butpos = 0;
		$keybs['a'][$layout] = new Array();
		for (var $ir=0; $ir<$kk.length; $ir++) {
			$x = 0;


			// by 'lat' - get da keyboard's pics allocation
			var $row_length_butims = 0;
			if ($layout === 'lat') {
				$keybs['i'][$ir] = new Array();
				$keybs['i'][$ir]['cols'] = new Array();
			}

			var $butpos_inrow = 0;
			var $spos = 0;
			var $lastchar = -1;
			var $butl = 1;

			while ($spos < $kk[$ir].length) {
				$lastchar = $kk[$ir].charAt($spos);
				if ($lastchar != $kk[$ir].charAt($spos+1)) {
					// store button


					$keybs['a'][$layout][$abs_butpos] = new Array();
					if ($butl>1) {
						var $imt = '???';
						switch($lastchar) {
							case '1': $imt = 'стереть'; break;
							case '2': $imt = 'заглавные'; break;
							case '3': $imt = '^^^'; break;
							case '4': $imt = 'РУС/АНГЛ'; break;
							case '5': $imt = 'очистить'; break;
							default: $imt = 'ПРОБЕЛ'; break;
						}
						$keybs['a'][$layout][$abs_butpos]['c'] = '_'+$lastchar;        // служебная клавиша
						$keybs['a'][$layout][$abs_butpos]['t'] = $imt;
					}
					else {
						$keybs['a'][$layout][$abs_butpos]['c'] = $lastchar;
						$keybs['a'][$layout][$abs_butpos]['t'] = $lastchar;
					}

					/*
					var $imi = '';
					switch ($butl) {
					case 1: $imi='keypad4_64x64.gif'; break;
					case 2: $imi='keypad5_128x64.gif'; break;
					case 4: $imi='keypad6_256x64.gif'; break;
					case 8: $imi='keypad7_512x64.gif'; break;
					default: $imi='keypad4_64x64.gif'; break;
					}

					var $o = cvp_PP.AddI($imi, $xo + $kw*$x, $yo + $kh*$ir);
					var $o1 = cvp_PP.AddD($xo+ $kw*$x, $yo + $kh*$ir);
					var $imt = '???';
					if ($butl>1) {
					switch($lastchar) {
					case '1': $imt = 'стереть'; break;
					case '2': $imt = 'заглавные'; break;
					case '3': $imt = 'shift'; break;
					case '4': $imt = 'rus/lat'; break;
					case '5': $imt = 'очистить'; break;
					default: $imt = 'S.P.C'; break;
					}
					}
					else {
					$imt = $lastchar;
					}
					*/
					if ($layout === 'lat') {
						$keybs['i'][$ir]['cols'][$butpos_inrow] = $butl;
						$butpos_inrow++;
						$row_length_butims += $butl;
					}

					$x+=$butl;
					$butl = 1;
					$abs_butpos++;

				}
				// increase button size
				else {
					$butl++;
				}

				$spos++;

			} // - - - - - row by chars
			// MjCRIODA($keybs['i'][$ir]['cols']);
			if ($layout === 'lat') {
				$keybs['i'][$ir]['acclen'] = $row_length_butims;
				// alert($keybs['i'][$ir]['acclen']);
			}


		} // - - - - - layout by rows

	} // - - - - - by layouts


	$g_layout = 'rus';

	var $recepient_id = getParameter('recepient','-1')
	if ($recepient_id >= 0){
		// type of keyboard for text field
		var $klava = jcfg_findOperatorById($recepient_id)['fields'][$ga_fields[$g_fields_active]['id']]['klava'];
		if ('undefined' !== $klava) {
			for (var $layout in $keybs['l']){
				// if exists $klava in layers of keyboard
				if($klava === $layout){
					$g_layout = $klava;
					break;
				}
			}
		}
	}


	// return;


}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// correct keyboard item with current locale
function keyboard_layout_redraw($s) {
	
	var $l = $keybs['o'].length;
	if (typeof($s)=='undefined'){
		for (var $i=0; $i<$l; $i++) {
			change_srt_text($keybs['r'][$i], $keybs['a'][$g_layout][$i]['t']);
		}
	}else 
	{
		if ($s==1){
			for (var $i=0; $i<$l; $i++) {
				change_srt_text($keybs['r'][$i], $keybs['a'][$g_layout][$i+14]['t']);
			}
		}
	}


}


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function create_keyboard($__v) {

	// alert('create_keyboard');
	if ($g_layout === null) {
		parse_keyboard_layouts();
	}
	var $ae = $ga_fields[$g_fields_active];
	if (((getParameter('recepient')==1003)||(getParameter('recepient')==1005))&&(($ae['id']==104)||($ae['id']==105))) 
	{
		$g_layout='rusc';
	} 
	else 
	{
		if (((getParameter('recepient')==1009)||(getParameter('recepient')==1005))&&(($ae['id']==110)||($ae['id']==105)))
		{
			$g_layout='rusc';
		}
		else
		{
			$g_layout='rus';
		}
	}

	if (getParameter('recepient')==824) {$g_layout='lat';}
	// $g_vpa[$g_current_vpa]['v'].Show(0, 1);

	var cvp_KP = $g_vpa[$__v]['v'];
	var $__s = $g_vpa[$__v]['s'];

	create_field_comment($__v, -450);

	var $title = $ga_fields[$g_fields_active]['title'];
	set_rect_text(cvp_KP, [5, 6, $__s.r[2], 35], $__s, $title );



	// alert('draw_keyboard...');
	var $y = 0;
	var $xo = 10;
	var $yo = 105;
	var $kw = 64;
	var $kh = 64;
	if ($is_ressur_mode) {
		$kw = 50;
		$kh = 50;
	}


	var $__s1 = SKP('BUTKEYBOARD');

	// draw the keyboard
	var $abs_butpos = 0;
	for (var $ir=0; $ir<$keybs['i'].length; $ir++) {
		// alert($keybs['i'][$ir]['acclen']);
		var $x = 0;
		var $xo_add = (900 - ($keybs['i'][$ir]['acclen']*64)) / 2;
		for (var $ic=0; $ic<$keybs['i'][$ir]['cols'].length; $ic++) {

			var $imi = '';
			var $butl = $keybs['i'][$ir]['cols'][$ic];
			switch ($butl) {
				case 1: $imi='keypad1.gif'; break;
				case 2: $imi='keypad2.gif'; break;
				case 4: $imi='keypad3.gif'; break;
				case 8: $imi='keypad4.gif'; break;
				default: $imi='keypad1.gif'; break;
			}
			// var $o = cvp_KP.AddI($imi, $xo + $xo_add + $kw*$x, $yo + $kh*$ir);
			var $o = cvp_KP.AddI($imi, $xo + $xo_add + $kw*$x, $yo + $kh*$ir);
			// $o.SizeTo(0, $kw*$butl, $kh);
			// $o.SetBG(1, '#996666');
			// var $o1 = cvp_PP.AddD($xo + $xo_add + $kw*$x, $yo + $kh*$ir);
			// MJGA($o1.i).innerHTML = '<br />&nbsp;&nbsp;'+$keybs['a'][$g_layout][$abs_butpos]['t'];

			// $o.AddHandler('gfxa_aniobj_use("'+$o.i+'");');
			// $o.AddHandler('gfxa_aniobj_use(1);');
			//                                 gfxa_aniobj_use($i)

			var $ri = set_rect_text(cvp_KP, [$xo + $xo_add + $kw*$x, $yo + $kh*$ir+14, $kw*$butl, $kh], $__s1, $keybs['a'][$g_layout][$abs_butpos]['t']);
			$o.AddHandler('cvp_KP_PinPress("'+$__v+'", "'+$abs_butpos+'", "'+$ri+'");', $kw*$butl, $kh);
			$keybs['o'][$abs_butpos] = $o;
			$keybs['r'][$abs_butpos] = $ri;

			$abs_butpos++;
			$x += $butl;
		}
	}




	// - - - - - set the field values
	var $ae = $ga_fields[$g_fields_active];
	var $s_def = $ae['val'];

	if (getParameter('recepient')==9998) {
		$o_number_k = cvp_KP.AddD(23, 55);
	} else {
		$o_number_k = cvp_KP.AddD(23, 40);
	}
	//        $o_number_k.SizeTo(1, 880, 50);
	$o_number_k.SizeTo(1, GTX($__s.r[2]), 50);
	var $o = $o_number_k;
	// $o.SetBG(1, '#666666');
	// $o.Border(1, '5px dashed lime');

	var $spb = SKP('BUTKEYBOARD');

	mj_G._a[$o.i]['i'].style["fontFamily"] = $spb.f[0];
	mj_G._a[$o.i]['i'].style["fontSize"] = $spb.f[1];
	mj_G._a[$o.i]['i'].style["fontWeight"] = $spb.f[2];

	mj_G._a[$o.i]['i'].style["color"] = '#000000';
	// $o.SetBG(1, '#6666cc');
	mj_G._a[$o.i]['i'].style["textAlign"] = $spb.f[4];


	mj_G._a[$o_number_k.i]['i'].innerHTML = $s_def; // *(***)***-**-**';
	change_srt_text($ga_fields[$g_fields_active]['txi'],  $s_def);

	// alert('draw_keyboard done.');

}

function create_keyboard_kil($__v, $layout) {

	if ($g_layout === null) {
		parse_keyboard_layouts();
	}
	
/*	if (typeof($layout)=='undefined'){
		$g_layout='kil';
	} else 
	{
		$g_layout=$layout;
	}
*/
	var cvp_KP = $g_vpa[$__v]['v'];
	var $__s = $g_vpa[$__v]['s'];

	var $title = 'Введи чего-нить';
	
	//set_rect_text(cvp_KP, [-100, 6, $__s.r[2], 35], $__s, $title );



	// alert('draw_keyboard...');
	var $y = 0;
	var $xo = 10;
	var $yo = 265;
	var $kw = 64;
	var $kh = 64;
	if ($is_ressur_mode) {
		$kw = 50;
		$kh = 50;
	}


	var $__s1 = SKP('BUTKEYBOARD');
	var $ik=set_rect_text(cvp_KP, [20, -55, 50, 70], $__s, '_');
	//alert('$ik='+$ik);
	// draw the keyboard
	var $abs_butpos = 0;
	for (var $ir=1; $ir<$keybs['i'].length; $ir++) {
		// alert($keybs['i'][$ir]['acclen']);

		var $x = 0;
		var $xo_add = (1240 - ($keybs['i'][$ir]['acclen']*64)) / 2;
		for (var $ic=0; $ic<$keybs['i'][$ir]['cols'].length; $ic++) {

			var $imi = '';
			var $butl = $keybs['i'][$ir]['cols'][$ic];
			switch ($butl) {
				case 1: $imi='keypad1.gif'; break;
				case 2: $imi='keypad2.gif'; break;
				case 4: $imi='keypad3.gif'; break;
				case 8: $imi='keypad4.gif'; break;
				default: $imi='keypad1.gif'; break;
			}
			// var $o = cvp_KP.AddI($imi, $xo + $xo_add + $kw*$x, $yo + $kh*$ir);
			var $o = cvp_KP.AddI($imi, $xo + $xo_add + $kw*$x, $yo + $kh*$ir);
			// $o.SizeTo(0, $kw*$butl, $kh);
			// $o.SetBG(1, '#996666');
			// var $o1 = cvp_PP.AddD($xo + $xo_add + $kw*$x, $yo + $kh*$ir);
			// MJGA($o1.i).innerHTML = '<br />&nbsp;&nbsp;'+$keybs['a'][$g_layout][$abs_butpos]['t'];

			// $o.AddHandler('gfxa_aniobj_use("'+$o.i+'");');
			// $o.AddHandler('gfxa_aniobj_use(1);');
			//                                 gfxa_aniobj_use($i)
			
			var $ri = set_rect_text(cvp_KP, [$xo + $xo_add + $kw*$x, $yo + $kh*$ir+14, $kw*$butl, $kh], $__s1, $keybs['a'][$g_layout][$abs_butpos+14]['t']);
			
			//$o.AddHandler('cvp_KP_PinPress("'+$__v+'", "'+$abs_butpos+'", "'+$ri+'");', $kw*$butl, $kh);
			var $nrt=$abs_butpos+14;
			$o.AddHandler('ttest("'+$__v+'", "'+$nrt+'", "'+$ik+'");', $kw*$butl, $kh);
			$keybs['o'][$abs_butpos] = $o;
			$keybs['r'][$abs_butpos] = $ri;

			$abs_butpos++;
			$x += $butl;
		}
	}



	/*
	// - - - - - set the field values
	$o_number_k = cvp_KP.AddD(-180, 40);
	//        $o_number_k.SizeTo(1, 880, 50);
	$o_number_k.SizeTo(1, GTX($__s.r[2]), 100);
	var $o = $o_number_k;
	// $o.SetBG(1, '#666666');
	// $o.Border(1, '5px dashed lime');

	var $spb = SKP('BUTKEYBOARD');

	mj_G._a[$o.i]['i'].style["fontFamily"] = $spb.f[0];
	mj_G._a[$o.i]['i'].style["fontSize"] = $spb.f[1];
	mj_G._a[$o.i]['i'].style["fontWeight"] = $spb.f[2];

	mj_G._a[$o.i]['i'].style["color"] = '#000000';
	// $o.SetBG(1, '#6666cc');
	mj_G._a[$o.i]['i'].style["textAlign"] = $spb.f[4];


	mj_G._a[$o_number_k.i]['i'].innerHTML = '';//$s_def; // *(***)***-**-**';
//	change_srt_text($ga_fields[$g_fields_active]['txi'],  $s_def);

     */	

}

function ttest($__v, $__i, $__r){
var $cc=$keybs['a'][$g_layout][$__i]['c'];
	$previd=$__r;
	if (($cc == '_6') || ($cc == '_ ')) {
		$cc = ' ';
	}
	if ($cc.length > 1) {
		switch($cc.substr(1,1))
		{
			// - - - - - del
			case '1':
			project.value = project.value.substring(0, project.value.length-1);
			break;
			// - - - - - clear
			case '2':
			// alert('wow!');
			keyboard_switch_caps(1);
			break;

			// - - - - - shift
			case '3':
			// $s_r = $s_r.substring(0, $s_r.length-1);
			keyboard_switch_caps(1);
			g_keyb_inshift = 1;
			break;

			case '4':
				var $bloc = $g_layout.substr(0,3);
				var $addl = $g_layout.substr(3);
				if ($bloc === 'rus') {
					$bloc = 'lat';
				}
				else {
					$bloc = 'rus';
				}
				$g_layout = $bloc+$addl;
				keyboard_layout_redraw(1);

			break;
			case '5':
			project.value = '';
			break;
			// - - - - - default
			default:
			
			break;
		}
	}
	else {
		project.value+=$cc;
	}
change_srt_text($__r,  project.value.replace(/\s/g,'&nbsp')+'_');
$( "#project" ).autocomplete("search");
}

function autocomplete_sel(ui){
change_srt_text($previd,'<nobr>'+ui.item.value.replace(/\s/g,'&nbsp;')+'_ </nobr>');

	if ((ui.item.bic in alfa)&&(jcfg_findOperatorById('60')==-1)) { 
		var ss='goto_Loc("choice.html?alfa=1");';
	} else if ((ui.item.bic in hkf)&&(jcfg_findOperatorById('60')==-1)) 
	{ 
		var ss='goto_Loc("data-entry.html?recepient=1003&field100='+ui.item.bic+'");';
	} else if ((ui.item.bic in otp)&&(jcfg_findOperatorById('60')==-1)) 
	{ 
		var ss='goto_Loc("data-entry.html?recepient=1004&field100='+ui.item.bic+'");';
	} else 
	{
		var ss='goto_Loc("data-entry.html?recepient=1007&field100='+ui.item.bic + '&img_name='+ui.item.img+ '&bank_name=' + ui.item.label.replace(/\"/g,'\\\"')+'");';
	}

$ga_buttbig[1]['v'].Show(1, 1);
$ga_buttbig[1]['o'].AddHandler(ss);
}

function search_sel(ui){
	change_srt_text($previd,'<nobr>'+ui.item.label.replace(/\s/g,'&nbsp;')+'_ </nobr>');
	if (ui.item.bank==1)
	{
		if ((ui.item.value in alfa)&&(jcfg_findOperatorById('60')==-1)) { 
			var ss='goto_Loc("choice.html?alfa=1");';
		} else if ((ui.item.value in hkf)&&(jcfg_findOperatorById('60')==-1)) 
		{ 
			var ss='goto_Loc("data-entry.html?recepient=1003&field100='+ui.item.value+'");';
		} else if ((ui.item.value in otp)&&(jcfg_findOperatorById('60')==-1)) 
		{ 
			var ss='goto_Loc("data-entry.html?recepient=1004&field100='+ui.item.value+'");';
		} else 
		{
			var ss='goto_Loc("data-entry.html?recepient=1007&field100='+ui.item.value + '&img_name='+ui.item.img+ '&bank_name=' + ui.item.label.replace(/\"/g,'\\\"')+'");';
		}
	} else {
		var ss='goto_Loc("data-entry.html?recepient='+ui.item.value+'");';

	}

$ga_buttbig[1]['v'].Show(1, 1);
$ga_buttbig[1]['o'].AddHandler(ss);
}


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function keyboard_switch_caps($s) {
	var $bloc = $g_layout.substr(0,3);
	var $addl = $g_layout.substr(3);
	if ($addl === 'c') {
		$addl = '';
	}
	else {
		$addl = 'c';
	}
	$g_layout = $bloc+$addl;
	if (typeof($s)=='undefined') {
		keyboard_layout_redraw();
	} 
	else
	{
		keyboard_layout_redraw($s);
	}
}

var g_keyb_inshift = 0;
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// $__v = viewport
// $__i = key absolute index
// $__r = rect index
function cvp_KP_PinPress($__v, $__i, $__r) {
	// return;
	if ($__v === '-1') {
		var $c = '';
	}
	// cvp_KP_PinPress($__v, $__i, $__r)
	// else {
	var $o = $keybs['o'][$__i];
	// gfxa_aniobj_use($o.i);
	// alert($__r);
	//alert($a_srt[$__r]['m'].i);
	// $a_srt[$__r]['m']);
	gfxa_aniobj_use($a_srt[$__r]['b'].i);
	gfxa_aniobj_use($a_srt[$__r]['m'].i);

	// mj_G._a[$a_srt[$__id]['m'].i]
	// mj_G._a[$a_srt[$__id]['b'].i]


	 
	var $ae = $ga_fields[$g_fields_active];
	$s_number = $ae['val'];
	$s_r = $s_number;


	var $c = $keybs['a'][$g_layout][$__i]['c'];
	if (($c == '_6') || ($c == '_ ')) {
		$c = ' ';
	}

	// }

	if ($c.length > 1) {
		switch($c.substr(1,1))
		{
			// - - - - - del
			case '1':
			if (((getParameter('recepient')==1003)||(getParameter('recepient')==1004))&&($ae['id']==107)&&($s_r.length==5)){$s_r = $s_r.substring(0, $s_r.length-2);}
			else {$s_r = $s_r.substring(0, $s_r.length-1);}
			//$s_number = $s_r;
			break;

			// - - - - - caps
			case '2':
			// alert('wow!');
			keyboard_switch_caps();
			break;

			// - - - - - shift
			case '3':
			// $s_r = $s_r.substring(0, $s_r.length-1);
			keyboard_switch_caps();
			g_keyb_inshift = 1;
			break;

			// - - - - - rus/lat
			case '4':
			var $bloc = $g_layout.substr(0,3);
			var $addl = $g_layout.substr(3);
			if ($bloc === 'rus') {
				$bloc = 'lat';
			}
			else {
				$bloc = 'rus';
			}
			$g_layout = $bloc+$addl;
			keyboard_layout_redraw();
			
			break;

			// - - - - - clear
			case '5':
			$s_r = '';
			break;

			// - - - - - default
			default:
			alert($c);
			break;
		}
	}
	else {
//		alert('recepient '+getParameter('recepient')+'field '+$ae['id']+'"');
//		if (((getParameter('recepient')==1000)||(getParameter('recepient')==1003)||(getParameter('recepient')==1004))&&($ae['id']==107)&&($s_r.length==4)){$s_r += '/';}
		$s_r += $c;
//		if (((getParameter('recepient')==1000)||(getParameter('recepient')==1003)||(getParameter('recepient')==1004))&&($ae['id']==107)&&($s_r.length==4)){$s_r += '/';}
		if (g_keyb_inshift) {
			keyboard_switch_caps();
			g_keyb_inshift = 0;
		}
	}
	// alert($c);



	if ($s_r.length > 0) {
		$ae['pass'] = 1;
		// alert('"'+$s_r+'"');

	}
	else {
		$ae['pass'] = 0;
	}




	$ae['val'] = $s_r;
	//  - - - - - - - update field text
	verify_fields();

	mj_G._a[$o_number_k.i]['i'].innerHTML = $s_r+'_';
	change_srt_text($ga_fields[$g_fields_active]['txi'],  $s_r);
}



// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function show_message_error($__v) {
	var $v = $g_vpa[$__v]['v'];
	var $__s = $g_vpa[$__v]['s'];
	set_rect_text($v, [5, 05, $__s.r[2], 70], $__s, LCP('checking_error'));

	$__s1 = SKP('VIEW_TEXT1');

	var opId = Parameters['recepient'];
	var $op = jcfg_findOperatorById(opId);
	var $pr = $op['processor']['type'];

	$ga_buttbig[0]['v'].Show(1, 1);
	change_srt_text($ga_buttbig[0]['txi'], LCP('button_back'));
	// $ga_buttbig[0]['o'].AddHandler('goto_Loc("data-entry.html?recepient='+opId+'")');
	if ((opId==1003)||(opId==1004)||(opId==1007)||(opId==1005)) {$ga_buttbig[0]['o'].AddHandler('goto_Loc("data-entry.html?err=1001&'+goto_get_allurlparams()+'")');}
		else {
				if (opId==916) {
					$ga_buttbig[0]['o'].AddHandler('goto_Loc("data-entry.html?recepient='+getParameter('backrecepient')+'&field100='+getParameter('field100').substr(3)+'")');
				}
				else
				{
					$ga_buttbig[0]['o'].AddHandler('goto_Loc("data-entry.html?'+goto_get_allurlparams()+'")');

				}
				
			 }




	/*        $ga_buttbig[0]['o'].AddHandler('goto_Loc("main.html")'); */


	if ($pr === 'Cyberplat_PIN') {
		var $txt = LCP('card_amount_notexists');
	}
	else if ($pr.toLowerCase() === 'marketing') {
		$txt = 'Спасибо, Ваш голос учтен!';
		change_srt_text($ga_buttbig[0]['txi'], '');
		var $o_tmp_imgl = MJGA($ga_buttbig[0]['o'].i);
		$o_tmp_imgl.src="../../skins/"+SkinName+"/i/nbut1_g0_menu.gif";

	}
	else {
		var $txt = LCP('number_check_error');
		var $txt777 = GetMessageDbError(getParameter('error', -1));
		$txt = $txt777;
		//alert("$txt777="+$txt777+"\n$cur_error="+$cur_error);
		//fields_preCheck
	}

	//        set_rect_text($v, [45, 240, 600, 70], $__s1, $txt);
	set_rect_text($v, [5, parseInt($__s.r[3]/2), $__s.r[2], 70], $__s1, $txt);

	// create_bigbut(-2);
	// create_bigbut(-3);


	/*
	$g_vpa[$__v]['v']['bl']['s'] = 1;
	$g_vpa[$__v]['bl']['s'] = 1;
	$g_vpa[$__v]['bl']['n'] = LCP('button_back');
	$g_vpa[$__v]['bl']['h'] = 'goto_Loc("main.html")';
	*/

	/*
	$ga_buttbig[0]['v'].Show(1, 1);
	change_srt_text($ga_buttbig[0]['txi'], LCP('button_back'));
	$ga_buttbig[0]['o'].AddHandler('goto_Loc("main.html")');
	*/

}


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function show_message_thanks($__v) {
	var $v = $g_vpa[$__v]['v'];
	var $__s = $g_vpa[$__v]['s'];

	create_bigbut(-2);
	create_bigbut(-3);
	var opId = Parameters['recepient'];
	set_rect_text($v, [5, 05, $__s.r[2], 70], $__s, LCP('thank_you'));

	$__s1 = SKP('VIEW_TEXT1');
	if ((opId==730)||(opId==731)||(opId==732)||(opId==821)||(opId==918)||(opId==989)){
		set_rect_text($v, [0, 40, $__s.r[2], 70], SKP('VIEW_TEXT22'), "Внимание! После оплаты оставьте приёмник включенным. Изображение на закодированных телеканалах появится в течение 8 часов.");
	}
	var $cmd = getParameter('cmd', 'none');

	if ('undefined' === typeof(Parameters['processing'])) {
		//  - - - - - сообщение юзеру
		var $msg = getParameter('msg', '');
		var $txt = '';

		if ($g_is_metro_recepient) {
			$txt = $ga_metro_menu['Message'];
		}
		else {
			$txt = $msg;
		}

		//  - - - - - ask retry?
		if ('askretry' === $cmd) {

			// если все-таки msg пуст....
			if ($txt === '')  {
				$txt = LCP('ask_retry_payment');
			}
			
			$ga_buttbig[1]['v'].Show(1, 1);
			change_srt_text($ga_buttbig[1]['txi'], LCP('button_yes'));
			$ga_buttbig[1]['o'].AddHandler('goto_Loc("paymentcomplete.html?cmd=retry")');

			$ga_buttbig[0]['v'].Show(1, 1);
			change_srt_text($ga_buttbig[0]['txi'], LCP('button_no'));
			$ga_buttbig[0]['o'].AddHandler('goto_Loc("paymentcomplete.html?cmd=cancel")');

			mj_RT.Add('goto_Loc("paymentcomplete.html?cmd=cancel', 60000, 0);
		}
		else {
			// если все-таки msg пуст....
			if (($txt === '')  && (opId != 671) && (opId != 673)) {
				$txt = LCP('take_tha_rezippt');
			}
			else
			{
				$txt = $ga_received_properties['ADDINFO'];
			}

			if ($opObjMark) {
				// MjCRIODA($opObjMark);
				$ga_buttbig[0]['v'].Show(1, 1);
				change_srt_text($ga_buttbig[0]['txi'], '');
				$ga_buttbig[0]['o'].AddHandler('goto_Loc("main.html")');

				$ga_buttbig[1]['v'].Show(1, 1);
				change_srt_text($ga_buttbig[1]['txi'], '');
				var $opObj = jcfg_findOperatorById( getParameter('recepient', -1) );
				$ga_buttbig[1]['o'].AddHandler('goto_Loc("data-entry.html?recepient='+$opObj['marketing_operator_id']+'")');


				var $o_tmp_imgr = MJGA($ga_buttbig[1]['o'].i);
				var $o_tmp_imgl = MJGA($ga_buttbig[0]['o'].i);
				// $o_tmp_imgl.src = $o_tmp_imgr.src;
				// alert($o_tmp_imgr.src);
				$o_tmp_imgl.src="../../skins/"+SkinName+"/i/nbut1_left.gif";
				$o_tmp_imgr.src="../../skins/"+SkinName+"/i/nbut1_right.gif";
			}
			else {
				$ga_buttbig[1]['v'].Show(1, 1);
				change_srt_text($ga_buttbig[1]['txi'], '');
				$ga_buttbig[1]['o'].AddHandler('goto_Loc("main.html")');
			}



			PlaySoundA('rezzipt');


			mj_RT.Add('goto_Main', 10000, 0);
		}

	}
	// typeof(processing) !== 'undefined'
	else {
		var $txt = LCP('please_wait_proc_payment');
		$__s1.f[3] = '#000000';
		//  alert('WOW1');
	}
	if ((opId != 671 )&&(opId != 673))
		{
			set_rect_text($v, [35, 170, 600, 70], $__s1, $txt);
		}
		else
		{
			$__s1 = SKP('VIEW_TEXT13');
		        set_rect_text($v, [35, 50, 600, 70], $__s1, $txt);
		}
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function show_message_termerror($__v) {
	var $v = $g_vpa[$__v]['v'];
	var $__s = $g_vpa[$__v]['s'];

	create_bigbut(-2);
	create_bigbut(-3);

	set_rect_text($v, [5, 05, $__s.r[2], 70], $__s, LCP('out_of_service_header'));

	$__s1 = SKP('VIEW_TEXT1');
	$__s1.f[3] = '#ff3333';

	var $txt = LCP('out_of_service_message');
	set_rect_text($v, [25, 210, 600, 70], $__s1, $txt);

}


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function show_message_comm_plzwait($__v) {
	var $v = $g_vpa[$__v]['v'];
	var $__s = $g_vpa[$__v]['s'];

	create_bigbut(-2);
	create_bigbut(-3);

	set_rect_text($v, [5, 05, $__s.r[2], 70], $__s, 'Пожалуйста подождите');

	$__s1 = SKP('VIEW_TEXT1');
	$__s1.f[3] = '#ff3333';

	var $txt = 'Идет проверка счета';
	set_rect_text($v, [25, 210, 600, 70], $__s1, $txt);
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function show_message_comm_error($__v) {
	var $v = $g_vpa[$__v]['v'];
	var $__s = $g_vpa[$__v]['s'];

	create_bigbut(-2);
	create_bigbut(-3);

	set_rect_text($v, [5, 05, $__s.r[2], 70], $__s, 'Ошибка');

	$__s1 = SKP('VIEW_TEXT1');
	$__s1.f[3] = '#ff3333';


	var $db_err = $ga_cptgl['error'];
	// var $db
	var $txt = 'Ошибка проверки счета';
	for (var $i in $db_errors) {
		if ($db_errors[$i][0] == $db_err) {
			$txt = $db_errors[$i][1];
			break;
		}
	}



	set_rect_text($v, [25, 210, 600, 70], $__s1, $txt);

	var opId = Parameters['recepient'];
	var $op = jcfg_findOperatorById(opId);
	var $pr = $op['processor']['type'];

	$ga_buttbig[0]['v'].Show(1, 1);
	change_srt_text($ga_buttbig[0]['txi'], LCP('button_back'));
	// $ga_buttbig[0]['o'].AddHandler('goto_Loc("data-entry.html?recepient='+opId+'")');
	if ((getParameter('recepient')>=131316)&&(getParameter('recepient')<=131324)){
		$ga_buttbig[0]['o'].AddHandler('goto_Loc("data-entry.html?recepient='+getParameter('recepient')+'&account='+getParameter('account').substr(3)+'")');	
	}
	else {
			if ((getParameter('recepient')==131325)||(getParameter('recepient')==131327)){
				$ga_buttbig[0]['o'].AddHandler('goto_Loc("data-entry.html?recepient='+getParameter('recepient')+'&account='+getParameter('account').substr(getParameter('account').lastIndexOf('|')+1)+'&ffield101='+getParameter('account').substr(0,getParameter('account').lastIndexOf('|')-1)+'")');	
			}
			else {
				$ga_buttbig[0]['o'].AddHandler('goto_Loc("data-entry.html?'+goto_get_allurlparams('state')+'")');
			}
	}

}


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function show_message_comm_dometers($__v) {
	var $v = $g_vpa[$__v]['v'];
	var $__s = $g_vpa[$__v]['s'];

	create_bigbut(-2);
	create_bigbut(-3);

	set_rect_text($v, [5, 05, $__s.r[2], 70], $__s, 'Подтверждение');

	$__s1 = SKP('VIEW_TEXT1');
	$__s1.f[3] = '#ff3333';

	var $txt = 'Желаете ввести данные счетчиков?';
	set_rect_text($v, [25, 210, 600, 70], $__s1, $txt);

	var opId = Parameters['recepient'];
	var $op = jcfg_findOperatorById(opId);
	var $pr = $op['processor']['type'];

	$ga_buttbig[0]['v'].Show(1, 1);
	change_srt_text($ga_buttbig[0]['txi'], LCP('button_back'));
	$ga_buttbig[0]['o'].AddHandler('goto_Check()');


	$ga_buttbig[1]['v'].Show(1, 1);
	change_srt_text($ga_buttbig[1]['txi'], LCP('button_next'));
	Parameters['state'] = 'do_meters';
	$ga_buttbig[1]['o'].AddHandler('goto_Loc("data-entry.html?'+goto_get_allurlparams()+'")');

}



// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function show_message_complat($__v) {
	var $v = $g_vpa[$__v]['v'];
	var $__s = $g_vpa[$__v]['s'];

	//MjCRIODA($__s);
	var $OpId = getParameter('recepient',-1);
	var $o = $v.AddI('op/plategka'+$OpId+'.jpg', 0, 0);
	$o.MoveTo(1, $__s.r[0]+($__s.r[2]-$o.w)/2, $__s.r[1]+($__s.r[3]-$o.h)/2);

	bigbutA('left',LCP('button_back'),'goto_Main()');
	bigbutA('right',LCP('button_next'),'goto_Loc("data-entry.html?recepient='+$OpId+'")');

	mj_RT.Add('goto_Main', 30000, 0);
}


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function show_message_message($__v) {
	var $v = $g_vpa[$__v]['v'];
	var $__s = $g_vpa[$__v]['s'];
	create_bigbut(-2);
	create_bigbut(-3);

	set_rect_text($v, [5, 05, $__s.r[2], 70], $__s, LCP('prn_cantprint_message_header'));

	$__s1 = SKP('VIEW_TEXT1');
	$__s1.f[3] = '#ff3333';

	// no quitance!!!
	// buttons!!!

	var $printer_ok_only = false;
	var $op = jcfg_findOperatorById(getParameter('recepient', -1));
	if (($op !== -1) && ($op['printer_ok_only'] == 1)) {
		$printer_ok_only = true;
		// alert('bingo!');
	}
	if (!$printer_ok_only) {
		var $txt = '';//LCP('prn_cantprint_message_message');
	
	}
	else {
		var $txt = LCP('prn_cantprint_message_fail');

		$ga_buttbig[0]['v'].Show(1, 1);
		change_srt_text($ga_buttbig[0]['txi'], LCP('button_no'));
		$ga_buttbig[0]['o'].AddHandler('goto_Main()');
	}

	set_rect_text($v, [50, 210, 600, 70], $__s1, $txt);

	//mj_RT.Add('goto_Main', 60000, 0);
	mj_RT.Add('goto_Next()', 100, 0);


}

function goto_Next()
{
	goto_Loc("message.html?res=1");
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function show_message_nochange($__v) {
	var $v = $g_vpa[$__v]['v'];
	var $__s = $g_vpa[$__v]['s'];

	create_bigbut(-2);
	create_bigbut(-3);

	set_rect_text($v, [5, 05, $__s.r[2], 70], $__s, LCP('attention'));

	$__s1 = SKP('VIEW_TEXT1');
	$__s1.f[3] = '#ff3333';

	var $txt = LCP('not_issue_change');
	set_rect_text($v, [25, 210, 600, 70], $__s1, $txt);

	// no change!!!
	var $gotodoc = if3_GetOpPage(getParameter('recepient', -1))+'.html?'+goto_get_allurlparams();
	/*
	if (CurrentRecepient == "111"){
	var $gotodoc = 'complat_message.html?menu='+menu+'&recepient='+CurrentRecepient;
	}
	else {
	var $gotodoc = 'data-entry.html?menu='+menu+'&recepient='+CurrentRecepient;
	}
	*/



	$ga_buttbig[1]['v'].Show(1, 1);
	change_srt_text($ga_buttbig[1]['txi'], LCP('button_yes'));
	$ga_buttbig[1]['o'].AddHandler('goto_Loc("'+$gotodoc+'")');

	$ga_buttbig[0]['v'].Show(1, 1);
	change_srt_text($ga_buttbig[0]['txi'], LCP('button_no'));
	$ga_buttbig[0]['o'].AddHandler('goto_Main()');

	mj_RT.Add('goto_Main', 10000, 0);

}


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function show_message_prnerror($__v) {
	var $v = $g_vpa[$__v]['v'];
	var $__s = $g_vpa[$__v]['s'];

	create_bigbut(-2);
	create_bigbut(-3);

	set_rect_text($v, [5, 5, $__s.r[2], 70], $__s, LCP('prn_fail_message_header'));

	$__s1 = SKP('VIEW_TEXT1');
	$__s1.f[3] = '#ff3333';

	var $txt = LCP('prn_fail_message_message');
	set_rect_text($v, [25, 210, 600, 70], $__s1, $txt);
	if ((getParameter('recepient')<1000)||(getParameter('recepient')>1010)) {
		set_rect_text($v, [25, 270, 600, 70], $__s1, "Распечатать информацию о принятых денежных средствах - можно позднее. Для этого необходимо зайти в раздел 'Информация' и нажать кнопку 'Печать информации о платеже'");
	}
	// printer error!!!
	$ga_buttbig[1]['v'].Show(1, 1);
	change_srt_text($ga_buttbig[1]['txi'], '');
	var $gotodoc = 'goto_Loc("paymentcomplete.html?'+goto_get_allurlparams()+'")';
	$ga_buttbig[1]['o'].AddHandler($gotodoc);


	mj_RT.Add('goto_Main', 30000, 0);

}




// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function show_message_checking($__v) {

	var $v = $g_vpa[$__v]['v'];
	var $__s = $g_vpa[$__v]['s'];

	set_rect_text($v, [5, 05, $__s.r[2], 70], $__s, LCP('checking_req'));

	$__s = SKP('VIEW_TEXT');
	$__s1 = SKP('VIEW_TEXT1');

	$sk = SKP('OPERATOR_ICON');

	var opId = Parameters['recepient'];
	var $op = jcfg_findOperatorById(opId);
	var $pr = $op['processor']['type'];

	var opNme = $op["name"];
	var opImg = $op["image"];
	// $v.AddI('op/'+opImg, 20, 100);
	$v.AddI($sk.bi, 20, 100);
	gfxa_ins_oper_logo($v, opImg, 20+($sk.bd[0]-$sk.d[0])/2, 100+($sk.bd[1]-$sk.d[1])/2, $sk.d[0], $sk.d[1], opNme);
	$v.AddI('bar.gif', 220, 400);



	var $valmusthave = 0;

	// ------------------------------------------------
	if ($pr === 'Cyberplat_PIN') {

		set_rect_text($v, [255, 100, 420, 70], $__s1, LCP('card') + ': '+unescape(Parameters['cardname']));
		set_rect_text($v, [205, 180, 400, 70], $__s1, LCP('summ') + ': '+Parameters['cardvalue']+' '+LCP('currency')[CurrencyType]);
		$valmusthave = Parameters['cardvalue'];

		/*
		$__s += '&cardname='+CardName[$cid];
		$__s += '&cardvalue='+CardValue[$cid];
		$__s += '&cardid='+CardID[$cid];

		*/
	}
	else {
		// GetFieldsInfo(opId);
		var $fa = new Array();
		var $ii = 0;
		for (var $ff in $op['fields']) {
			$fa[$ii] = $op['fields'][$ff];
			$fa[$ii]['id'] = $ff;
			$fa[$ii]['vali'] = getParameter('field'+$ff, '???');
			if ('???' === $fa[$ii]['vali']) continue;
			$fa[$ii]['showval'] = parse_fld_name($op['fields'][$ff]);
			$ii++;
		}

		// MjCRIODA(FieldName);
		var $showopname = '';
		// var $recId == getParameter('field100', 0);
		// alert(Parameters['field100']);
		// alert($g_is_metro_recepient);
		/*
		alert('wow!');
		*/

		if ($g_is_metro_recepient === true) {
			var $metro_i = jcfg_findMetroItem($fa[0]['vali']);
			if ($metro_i != -1) {
				$showopname = $metro_i[2];
			}
		}
		else {
			$showopname = $fa[0]['showval'];
		}

		set_rect_text($v, [255, 90, 430, 70], $__s1, $fa[0]['name']+':<br> '+$showopname);

		for (var $ii=1; $ii<$fa.length; $ii++) {
			if ($ii > 1) {
				break;
			}
			set_rect_text($v, [255, 80+$ii*90, 400, 70], $__s1, $fa[$ii]['name']+': '+$fa[$ii]['showval']); // +' '+LCP('currency')[CurrencyType]);
			// $valmusthave = Parameters['field101'];
		}

	}


} // checking


function show_comission_in_payment($__v) {
	//        add_backtimer();
	var $v = $g_vpa[$__v]['v'];
	var $__s = $g_vpa[$__v]['s'];

	 
	//$__s = SKP('VIEW_TEXT');
	$__s1 = SKP('VIEW_TEXT1');
	$sk = SKP('OPERATOR_ICON');

	var opId = Parameters['recepient'];
	var $op = jcfg_findOperatorById(opId);
	var $pr = $op['processor']['type'].toLowerCase();
	var $i_pr = $op['i_type'].toLowerCase();
	/*if ($i_pr === 'comm_plat')        {
		var $s_comm = '';
		$s_comm += ('<b>Л/c:</b>&nbsp;' + $ga_cptgl['client']['account'] + '<br><br>');
		if ($ga_cptgl['client']['address'].length > 0) {
			$s_comm += ('<b>Адрес:</b><br>' + $ga_cptgl['client']['address'] + '<br><br>');
		}
		$s_comm += ('<b>ФИО клиента:</b><br>' + $ga_cptgl['client']['name'] + '<br><br>');
		$s_comm += ('<b>Задолженность:</b><br> ' + $ga_cptgl['client']['debt'] + ' '+LCP('currency')[CurrencyType]+'<br><br>');
		if ($ga_cptgl['client']['debt'] > 0) {

			$s_comm += ('<b>Задолженность:</b><br>' + $ga_cptgl['client']['debt'] + ' '+LCP('currency')[CurrencyType]+'<br>');
		}

		$gs_comission_text += '<p>' + $s_comm + '</p>';
		
	}*/

	                                    //alert($__s.r[3]);
	if ($op['rootmenuimage']=='plat_term'){
		set_rect_text($v, [0, 230, $__s.r[2], $__s.r[3]], $__s, 'Комиссия: 0% <br> Плата за использование терминала: '+$gs_comission_text.substring($gs_comission_text.indexOf(':')+1));
	}
	else
	{
		if (opId!=755) {set_rect_text($v, [0, 230, $__s.r[2], $__s.r[3]], $__s, $gs_comission_text);}
	}
	var opNme = $op["name"];
	var opImg = $op["image"];

        var img1000 = getParameter('img_name');
//alert(escape(getParameter('bank_name')));
	var name1000 = decodeURIComponent(getParameter('bank_name'));
	//alert(name1000);
	
        if ((opId==1009)||(opId==1007)||(opId==1005)) {if ('undefined' != typeof(img1000)) {opImg=img1000;} else {opImg='no_image.gif';}; opNme=decodeURIComponent(name1000);}

	// $v.AddI('op/'+opImg, 20, 100);
	var $x_logo_ofs = ($__s.r[2] - $sk.bd[0])/2;
	var $y_logo_ofs = 60;

	$v.AddI($sk.bi, $x_logo_ofs, $y_logo_ofs);
	gfxa_ins_oper_logo($v, opImg, $x_logo_ofs+($sk.bd[0]-$sk.d[0])/2, $y_logo_ofs+($sk.bd[1]-$sk.d[1])/2, $sk.d[0], $sk.d[1], opNme);




}


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function show_message_payment($__v) {
	//add_backtimer();
	var $v = $g_vpa[$__v]['v'];
	var $__sv = $g_vpa[$__v]['s'];

	set_rect_text($v, [5, 05, $__sv.r[2], 70], $__sv, LCP('payment_enter'));

	$__s = SKP('VIEW_TEXT');
	$__s1 = SKP('VIEW_TEXT1');
//Kil
        $s_kil = SKP('VIEW_TEXT22');
	$sk = SKP('OPERATOR_ICON');
	$skg = SKP('GROUP_ICON');
        
	var f104 = getParameter('field104');
	var f105 = getParameter('field105');
	var nn = getParameter('bank_name');
	//alert(nn);
	var opId = Parameters['recepient'];
	var $op = jcfg_findOperatorById(opId);
	var $pr = $op['processor']['type'].toLowerCase();
	var $i_pr = $op['i_type'].toLowerCase();

	var opNme = $op["name"];
	var opImg = $op["image"];
	var opBon = $op["bonus"];
	var $ic=0;
	$op_dopcom = $op["ps_comission"];
	$op_complcom = $op["complex_comission"];
	$opDiv = $op["name_div"];
	$opEpp = $op["eppa"];
	$step=readCookie('step');
	$init_sum = readCookie('init_sum');
	var $erkc_meters="Показания счетчиков (задолженность по услугам): ";
	var $erkc_value="Задолженность после оплаты (по услугам): ";
	// $v.AddI('op/'+opImg, 20, 100);

	//$v.AddI($sk.bi, 20, 100);
	//gfxa_ins_oper_logo($v, opImg, 20+($sk.bd[0]-$sk.d[0])/2, 100+($sk.bd[1]-$sk.d[1])/2, $sk.d[0], $sk.d[1], opNme);


	var $valmusthave = 0;
	// ------------------------------------------------
	if ($pr === 'cyberplat_pin') {

		set_rect_text($v, [255, 100, 420, 70], $__s1, LCP('card') + ': '+unescape(Parameters['cardname']));
		set_rect_text($v, [205, 180, 400, 70], $__s1, LCP('summ') + ': '+Parameters['cardvalue']+' '+LCP('currency')[CurrencyType]);
		$valmusthave = Parameters['cardvalue'];

		/*
		$__s += '&cardname='+CardName[$cid];
		$__s += '&cardvalue='+CardValue[$cid];
		$__s += '&cardid='+CardID[$cid];

		*/
	}
	/*else if ($i_pr === 'comm_plat') {
		var $fa = new Array();
		var $s_comm = '';
		$s_comm += ('<b>Л/c:</b>&nbsp;' + $ga_cptgl['client']['account'] + '<br><br>');
		$s_comm += ('<b>ФИО клиента:</b><br>' + $ga_cptgl['client']['name'] + '<br><br>');
		set_rect_text($v, [5, 90, $__s.r[2]-10, 70], $__s1, $s_comm);


	}*/
	else {
		// GetFieldsInfo(opId);
		var $fa = new Array();
		var $ii = 0;
		for (var $ff in $op['fields']) {
			if (((opId==10)&&($ff==101))||((opId==777)&&($ff==100))||((opId==782)&&($ff==100))) {continue;};
			$fa[$ii] = $op['fields'][$ff];
			$fa[$ii]['id'] = $ff;
			$fa[$ii]['vali'] = getParameter('field'+$ff, '???');
			if ('???' === $fa[$ii]['vali']) continue;

			$fa[$ii]['showval'] = parse_fld_name($op['fields'][$ff]);
			$ii++;
		}

		// MjCRIODA(FieldName);
		var $showopname = '';
		// var $recId == getParameter('field100', 0);
		// alert(Parameters['field100']);
		/*
		alert('wow!');
		alert($g_is_metro_recepient);
		*/

		if ($g_is_metro_recepient === true) {
			var $metro_i = jcfg_findMetroItem($fa[0]['vali']);
			if ($metro_i != -1) {
				$showopname = $metro_i[2];
			}
		}
		else {  
				$showopname = $fa[0]['showval'];
			
		}

		//set_rect_text($v, [255, 90, 450, 70], $__s1, $fa[0]['name']+':<br> '+$showopname);
		set_rect_text($v, [5, 90, $__s.r[2]-10, 70], $__s1, $fa[0]['name']+': '+$showopname);
		
		for (var $ii=1; $ii<$fa.length; $ii++) {
			if (($ii > 1)||(opId==778)) {
				break;
			}
			set_rect_text($v, [5, 80+$ii*90, $__s.r[2]-10, 70], $__s1, $fa[$ii]['name']+': '+$fa[$ii]['showval']);
			 // +' '+LCP('currency')[CurrencyType]);
			// $valmusthave = Parameters['field101'];
		}

	}
	// ------------------------------------------------


	// MjCRIODA(Parameters);
	// alert(document.location.href);


	var $sum = parseFloat( getParameter('sum', 0) );
	var $cms = parseFloat( getParameter('cms', 0) );
	var $para_end = parseFloat( getParameter('end', 0) );
	//alert($sum);
	if ($sum == 0) {
		
		if (('undefined' != typeof($opEpp))&&($opEpp == 1)){
                        
					document.getElementById('eppa').style.top="370px";
					document.getElementById('eppa').style.left="555px";
					document.getElementById("sample").SetVariable("num",getParameter('field100',0));
					document.getElementById("sample").SetVariable("termname",TerminalName);
			//var $mt = SKP('MTSEPPA');
			//var $o = $v.AddI($mt.i, 220, 125);
			//        $o.AddHandler("goto_Loc('MTS_Helper/interface/index.html?TerminalNumber='+TerminalName+'&PhoneNumber='+getParameter('field100', 0));");
		     }      
		if (!$g_is_metro_recepient) {
			PlaySoundA('validator');
		}
		else {
			PlaySoundA('validator_crop');
		}
	}

	//alert($cms);

	set_rect_text($v, [5, 270, $__s.r[2], 70], $__s, LCP('money_accepted')+': '+parseFloat($sum/100)+' '+LCP('currency')[CurrencyType]);

	if ((opId!=755)&&(opId!=777)&&(opId!=782)) {
		if ((opId==1010)&&(($sum/100)<50)) {
			set_rect_text($v, [5, 320, $__s.r[2], 70], $__s, LCP('money_commission')+': '+parseFloat(Parameters['sum']/100)+' '+ LCP('currency')[CurrencyType]);		
		} else {
			set_rect_text($v, [5, 320, $__s.r[2], 70], $__s, LCP('money_commission')+': '+parseFloat(Parameters['cms']/100)+' '+ LCP('currency')[CurrencyType]);
		}
	}


	// set_rect_text($v, [5, 400, $__s.r[2], 70], $__s, LCP('money_crediting')+': '+parseFloat(Parameters['sum']/100 * (100-parseFloat(Parameters['cms']))) / 100 +' '+ LCP('currency')[CurrencyType]);

	var $mon_prefix = '<span style="color: '+$__s1.s[1]+';">';
	var $mon_postfix = '</span>';
	//alert($__s1.s[1]);
	var $mon1_prefix = '<span style="color:#ff0000 ;">';

	var $mps = parseFloat( getParameter('mps', 0) )/100;
         if (opId==777) {
			 set_rect_text($v, [50, 160, 600, 70], $__s, 'Стоимость услуги 50 р.');}

         if (opId==782) {
			 set_rect_text($v, [50, 160, 600, 70], $__s, 'Стоимость услуги 50 р.');}

         if (opId==677) {
			if (getParameter('field100')=='step1') {
			 set_rect_text($v, [50, 130, 600, 70], $__s, 'Необходимо внести 10 руб. для возможности забронировать места.');}
			else {
			 set_rect_text($v, [50, 130, 600, 70], $__s, 'Для бронирования мест необходимо внести еще 50 руб.');					
     			 create_bigbut_static_vp($__v, -4, 'nbut1_g0_menu.gif', LCP('button_to_main'), "goto_Loc('main.html')");
//kils				('goto_Loc("main.html");');

			}
		}
	if ((opId==897)||(opId==901)||(opId==965)||((opId==778)&&(typeof(getParameter('field102'))!='undefined'))) {
		 set_rect_text($v, [-400, 200, 1500, 470], $__s1, 'Контактный номер телефона:'+getParameter('field102'));		
   		 set_rect_text($v, [0, 230, 700, 470], $s_kil, 'Проверьте правильность ввода контактного номера телефона, на него будет зачислен остаток суммы');
	}

	var $maxsum = parseFloat( getParameter('maxsum', 0) );

	var $min_sum = parseFloat( getParameter('mps', 0) )/100;
/*	if (
	( (($sum-$cms)/100) < parseFloat($op['limit']['min']) )
	||
	( (($sum-$cms)/100) >= parseFloat($mps/100) )
	)  {
		$min_sum = Math.floor($mps/100);
	}
	// alert($min_sum);
*/

	if ($mps !== $maxsum) {
		// set_rect_text($v, [5, 500, $__s.r[2], 70], $__s1, LCP('min_summ')+': '+$mon_prefix+parseFloat($mps/100)+$mon_postfix+' '+LCP('currency')[CurrencyType]);


		if ((opId==827)||(opId==778))
		{
				set_rect_text($v, [5, 500, $__s.r[2], 70], $__s1, LCP('min_summ')+': '+$mon1_prefix+$min_sum+$mon_postfix+' '+LCP('currency')[CurrencyType]);
				set_rect_text($v, [5, 540, $__s.r[2], 70], $__s1, LCP('max_summ')+': '+$mon1_prefix+parseFloat($maxsum/100)+$mon_postfix+' '+LCP('currency')[CurrencyType]);
		}
		if ((opId!=827)&&(opId!=778))	{
			set_rect_text($v, [5, 540, $__s.r[2], 70], $__s1, LCP('max_summ')+': '+$mon_prefix+parseFloat($maxsum/100)+$mon_postfix+' '+LCP('currency')[CurrencyType]);
			set_rect_text($v, [5, 500, $__s.r[2], 70], $__s1, LCP('min_summ')+': '+$mon_prefix+$min_sum+$mon_postfix+' '+LCP('currency')[CurrencyType]);
		}
	}
	else {
		set_rect_text($v, [5, 500, $__s.r[2], 70], $__s1, LCP('ned_summ')+': '+$min_sum+$mon_postfix+' '+LCP('currency')[CurrencyType]);
	}
	var $ii = 0;
	var $add_info='';
		
		if ( ('undefined' !== typeof($op['processor']['show_properties'])) && ('undeifned' !== typeof($op['processor']['show_properties'][0])) && (opId != 671) && (opId != 673) && (opId != 778))
		{
                          
			for (var $vi in $ga_received_properties){
			    $icount++;
			}



			for (var $vi in $ga_received_properties) 
			{      $ic++
				if ((opId == 685)||(opId == 686)||(opId == 690))
					{
						//alert($ga_received_properties[$vi]['value']);
						var reg=/предыдущие показания:\s(\d+)/g;
						var reg1=/Пени:\s(\d+).(\d+)/g;
						var reg2=/Судебные издержки:\s(\d+).(\d+)/g;
						var arr=reg.exec($ga_received_properties[$vi]['value']);
						var arr1=reg1.exec($ga_received_properties[$vi]['value']);
						var arr2=reg2.exec($ga_received_properties[$vi]['value']);
						if (arr!=null)
							{
								
								var $curr_c1=parseFloat(getParameter('field102',0))+parseFloat(arr[1]);
								var $curr_c2=arr[1];
							}
						if (arr1!=null)
							{
								if (arr1[2]=='undefined') {arr1[2]='00';}
								var $curr_c3=parseFloat(arr1[1]+'.'+arr1[2]);
							}
						if (arr2!=null)
							{
								if (arr2[2]=='undefined') {arr2[2]='00';}
								var $curr_c4=parseFloat(arr2[1]+'.'+arr2[2]);
							}
					}
//kil				set_rect_text($v, [-420, 400+$ii, 400, 70], $__s1, $ga_received_properties[$vi]['description'] + ': ' + $ga_received_properties[$vi]['value']);
			if (opId != 131313) {
				if ((opId == 685)||(opId == 686)||(opId == 690)) 
					{
						if ($vi<=1) {continue;}
						else {
						set_rect_text($v, [-420, 400+$ii, 400, 70], $s_kil, $ga_received_properties[$vi]['description'] + ': ' + $ga_received_properties[$vi]['value']);
						$sss=$ga_received_properties[$vi]['value'];
						$ii += 70;

						}
					}
				else
					{       
						if (typeof($ga_received_properties[$vi]['value'])!='undefined'){
							$add_info += $ga_received_properties[$vi]['description'] + ': ' + $ga_received_properties[$vi]['value'] + '<br>';
							//set_rect_text($v, [-420, 400+$ii, 400, 70], $s_kil, $ga_received_properties[$vi]['description'] + ': ' + $ga_received_properties[$vi]['value']);
							$sss=$ga_received_properties[$vi]['value'];
							$ii += 70;
						}
					}
			}
/*			else {
				if ($icount-$ic<2) {
					set_rect_text($v, [-420, 400+$ii, 400, 70], $s_kil, $ga_received_properties[$vi]['description'] + ': ' + $ga_received_properties[$vi]['value']);
					$sss=$ga_received_properties[$vi]['value'];
					var $tpp=$ga_received_properties[$icount-1]['value']
					$ii += 70;

				}
			}    */
		}
		if ($add_info.length>0){
			set_rect_text($v, [-420, 400, 400, 70], $s_kil, $add_info);
		}	
	}

	if (opId==131313)
	{
		set_rect_text($v, [-410, 300, 400, 70], $s_kil, $ga_received_properties[0]['description'] + ': ' + $ga_received_properties[0]['value']);
	}
	
	if (opId==778)
	{
		if (($ga_tc['card']['cardType']=='ЕТК')&&(typeof($ga_tc['tickets']['1'])=='undefined')&&!($ga_tc['tickets']['one']))
		{       //alert('here');
			if ($ga_tc['tickets']['0']['description']=='') 
			{
				$ga_tc['tickets']['0']['description']=0;
			}
			set_rect_text($v, [-560, 450, $__s.r[2]-10, 70], $s_kil, 'Номер карты: '+$ga_tc['card']['PAN']+'<br>Активна до: '+$ga_tc['card']['enabledTo']+'<br>Тип карты: '+$ga_tc['card']['cardType']+'<br>Проездной: '+$ga_tc['tickets']['0']['name']+'<br>Баланс: '+$ga_tc['card']['amount']/100+' руб. <br>Виды транспорта: '+$ga_tc['tickets']['0']['transportType']+'<br>Скидка поставщика:'+$ga_tc['tickets']['0']['description']);
		}
		else
		{
			if ($ga_tc['card']['cardType']=='Abonement')
			{
				set_rect_text($v, [-560, 450, $__s.r[2]-10, 70], $s_kil,  'Номер карты: '+$ga_tc['card']['PAN']+'<br>Активна до: '+$ga_tc['card']['enabledTo']+'<br>Тип карты: '+$ga_tc['card']['cardType']+'<br>Выбранный период: '+$ga_tc['tickets'][getParameter('period',0)]['description']);	
			}
			else
			{
				if ($ga_tc['tickets']['one']){            
					if ($ga_tc['tickets']['one']['description']=='') 
					{
						$ga_tc['tickets']['one']['description']=0;
					}
					set_rect_text($v, [-560, 450, $__s.r[2]-10, 70], $s_kil, 'Номер карты: '+$ga_tc['card']['PAN']+'<br>Активна до: '+$ga_tc['card']['enabledTo']+'<br>Тип карты: '+$ga_tc['card']['cardType']+'<br>Проездной: '+$ga_tc['tickets']['one']['name']+'<br>Баланс: '+$ga_tc['card']['amount']/100+' руб. <br>Виды транспорта: '+$ga_tc['tickets']['one']['transportType']+'<br>Скидка поставщика:'+$ga_tc['tickets']['one']['description']);		

				} else {
					if ($ga_tc['tickets'][getParameter('tarif',0)]['description']=='') 
					{
						$ga_tc['tickets'][getParameter('tarif',0)]['description']=0;
					}
					set_rect_text($v, [-560, 450, $__s.r[2]-10, 70], $s_kil, 'Номер карты: '+$ga_tc['card']['PAN']+'<br>Активна до: '+$ga_tc['card']['enabledTo']+'<br>Тип карты: '+$ga_tc['card']['cardType']+'<br>Проездной: '+$ga_tc['tickets'][getParameter('tarif',0)]['name']+'<br>Оставшееся кол-во поездок: '+$ga_tc['card']['amount']+'<br>'+$ga_tc['tickets'][getParameter('tarif',0)]['transportType']+'<br>Скидка поставщика:'+$ga_tc['tickets'][getParameter('tarif',0)]['description']);	
				}
			}
		}
	}

/*	if (opId==1010) {
		$sss1=parseFloat($sss.substring($sss.indexOf('Сумма:')+7).substring(0,$sss.substring($sss.indexOf('Сумма:')+7).indexOf('.')))+50;
		set_rect_text($v, [0, 450, $__s.r[2]-10, 70], $s_kil, 'Внимание! Сумма к оплате: '+$sss1+'<br>Сумма меньше указанной зачислена не будет.');
	}
*/
	if (readCookie('prnerror')==1) {
		set_rect_text($v, [0, 580, $__s.r[2]-10, 70], $s_kil, 'Внимание! По техническим причинам печать чека невозможна.');
	}

	if (opId==778) {
		set_rect_text($v, [0, 150, $__s.r[2]-10, 70], $s_kil, 'Внимание! Не убирайте карту со считывателя до завершения процесса пополнения.');
	}

	set_rect_text($v, [0, 620, $__s.r[2]-10, 70], $__s1, 'Внимание! Терминал сдачи не дает.');
	create_bigbut(-2);
	create_bigbut(-3);
	if ($para_end != 1) {
		if ($sum <= 0) {
			$ga_buttbig[0]['v'].Show(1, 1);
			change_srt_text($ga_buttbig[0]['txi'], LCP('button_cancel'));
			$ga_buttbig[0]['o'].AddHandler('goto_Loc("Payment.html?end=1&'+goto_get_allurlparams()+'");');
			// $ga_buttbig[1]['o'].AddHandler('goto_Loc("main.html?end=1")');
		}


		// alert($valmusthave);

		// if ($sum >= $mps) {
		//alert('mps='+$mps+' cms='+$cms+' sum='+$sum);
		if ((opId!=677)&&(opId!=897)&&(opId!=901)&&(opId!=965)) {
			if ($mps>70) {
				var ttt=$mps;
			}
			else {
				var ttt=parseFloat($op['limit']['min']);
			}
			//if (opId==1010) {var ttt=$mps-30;}
		} 
		else {
			var ttt=$mps-parseFloat($cms/100)
		}

		if ((opId==827)||(opId==828)) {
			if (parseFloat($op['comission']['part0']['value']) != 'undefined') {
				var com=parseFloat($op['comission']['part0']['value'])+parseFloat($op['ps_comission']);
			}
			else {
				if (parseFloat($op['ps_comission']) != 'undefined') {
					var com=parseFloat($op['ps_comission']);
				} else {
					var com=1;
				}
			}
			ttt=ttt-((ttt/100)*com);
		}
   		if ((opId==901)||((opId==965))){
			ttt=getParameter('field101');
		}
		if (opId==131327){
			ttt=$mps;
		}
		
		if ((parseFloat($sum/100)-parseFloat($cms/100)) >= ttt) { //parseFloat($op['limit']['min'])) {


			// alert('WOW!');
			$ga_buttbig[1]['v'].Show(1, 1);
			change_srt_text($ga_buttbig[1]['txi'], LCP('button_payment'));
			
			
		
			$ga_buttbig[1]['o'].AddHandler('goto_Loc("Payment.html?end=1&'+goto_get_allurlparams()+'");');
			if (opId==131327) 
			{
				var $f_count=0;
				var $amount_all=parseFloat($sum/100)-parseFloat($cms/100);
				var $after_pay = 0;
				var $mserial = getParameter('meters').match(/\d+_\d{1,2}/g);
				var $mvalue = getParameter('meters').match(/:\d+(\||\r|\n|\r\n)?/g);
				
				for (var $met in $ga_cptgl['meters']){
					var $t_met = $met.split('_');
					var $t_met2 = $met.split('__');
					if ($t_met[2] > 0){
						$amount_all -= (((parseInt($mvalue[$f_count].replace(/^\s+|\s+$|:|\|/g,""))-parseInt($ga_cptgl['meters'][$met]['prev_reading']))*parseFloat($t_met[2]+'.'+$t_met2[1])) + parseFloat($t_met[5] + '.' + $t_met2[2]));
						$erkc_meters += 'Счетчик ' + $ga_cptgl['meters'][$met]['serial'] + ':' + $mvalue[$f_count].replace(/^\s+|\s+$|:|\|/g,"") + " ";
					} else
					{
						$amount_all -= parseInt($mvalue[$f_count].replace(/^\s+|\s+$|:|\|/g,""));
						$erkc_meters += $ga_cptgl['meters'][$met]['serial'] +':'+(parseInt($ga_cptgl['meters'][$met]['prev_reading'])-parseInt($mvalue[$f_count].replace(/^\s+|\s+$|:|\|/g,"")))+" ";
					}
					$f_count ++; 
				}
				$curr_c4 = 'Сумма зачисленная на телефон: 0';
				$curr_c5 = 'Контактный номер телефона: ' + getParameter('field99');
				if ($amount_all > 0){
					$curr_c4 = 'Сумма зачисленная на телефон: ' + $amount_all;
				}
				$ga_buttbig[1]['o'].AddHandler('goto_Loc("Payment.html?'+goto_get_allurlparams()+'&end=1&curr_c3='+getParameter('field100').replace(/\|/g,":")+'&curr_c2='+$erkc_meters.replace(/\s/g,"_")+'&curr_c4='+$curr_c4.replace(/\s/g,"_")+'&curr_c5='+$curr_c5.replace(/\s/g,"_")+'");');
			}

			if (opId==13131313) {
				var ff4 = new Array();
				tststr=$ga_received_properties[0]['value'];
				rege=/:\d*(\.\d*)*/ig;
				rege1=/,\d*\.\d*/ig;
				rege2=/,\d*\s\D+/ig;
				rege3=/\w+/ig;
				ff=tststr.match(rege);
				ff2=tststr.match(rege1);
				ff3=tststr.match(rege2);
				//alert('yopt '+ff);
				//alert('yopt1 '+ff3);
				//alert('float '+parseFloat(ff[1].substring(1)));
				//alert('substr='+ff3[0].substring(ff3[0].indexOf(' ')));
				szad=0;
				szad1=0;
				for (i=0;i<ff.length;i++)
				{
					szad+=parseFloat(ff[i].substring(1))+parseFloat(ff2[i].substring(1));
				}
				//alert(2500/szad);
				for (i=0;i<ff.length;i++)
				{
					if (i==(ff.length-1))
					{

						for (i=0;i<ff.length-1;i++)
						{
							szad1+=parseFloat(ff[i].substring(1))+parseFloat(ff2[i].substring(1));
						}
					ff4[i]=(parseFloat($sum/100)-parseFloat($cms/100))-(szad1*(parseFloat($sum/100)-parseFloat($cms/100))/szad);

					
					}
					else
					{
						ff4[i]=(parseFloat(ff[i].substring(1))+parseFloat(ff2[i].substring(1)))*(parseFloat($sum/100)-parseFloat($cms/100))/szad;
					}
				//alert('i='+i+'; ff4='+ff4[i]);
				}
				$trt='Итог после оплаты:';
				for (i=0;i<ff.length;i++)
				{
					$trt+=ff3[i].substring(ff3[i].indexOf(' '))+' '+((ff4[i]-parseFloat(ff2[i].substring(1)))-parseFloat(ff[i].substring(1))).toFixed(2)+',';

					
				}

				$ga_buttbig[1]['o'].AddHandler('goto_Loc("Payment.html?end=1&'+goto_get_allurlparams()+'&curr_c1='+$trt.replace(/\s/g,'_')+'");');
			} 
                      
			if ((opId == 10)&&(opBon==1)) {
				$ga_buttbig[1]['o'].AddHandler('goto_Loc("Payment.html?'+goto_get_allurlparams().substr(goto_get_allurlparams().indexOf('&recepient')+1)+'&'+goto_get_allurlparams().substr(0,goto_get_allurlparams().indexOf('&recepient'))+'&end=1&curr_c1=");');
				if (($sum/100)<=300){ 
					if ((GetTm('mon')<6)&&(GetTm('year')<=2011)) {
						if (($step != 1)||($step=='null')) {
							$in_sum=$sum;$ga_buttbig[1]['o'].AddHandler('create_vpa("VIEW_BONUSMEG", "create_bonus_meg", "-1", "-1")');
						}
						else {
							$ga_buttbig[1]['o'].AddHandler('goto_Loc("Payment.html?'+goto_get_allurlparams().substr(goto_get_allurlparams().indexOf('&recepient')+1)+'&'+goto_get_allurlparams().substr(0,goto_get_allurlparams().indexOf('&recepient'))+'&end=1&curr_c1=");');
						}
					
					}
					else {
						if ((GetTm('day')<=3)&&(GetTm('mon')==6)&&(GetTm('year')<=2011)) {
							if (($step != 1)||($step=='null')) {
								$in_sum=$sum;$ga_buttbig[1]['o'].AddHandler('create_vpa("VIEW_BONUSMEG", "create_bonus_meg", "-1", "-1")');
							}
							else {
								$ga_buttbig[1]['o'].AddHandler('goto_Loc("Payment.html?'+goto_get_allurlparams().substr(goto_get_allurlparams().indexOf('&recepient')+1)+'&'+goto_get_allurlparams().substr(0,goto_get_allurlparams().indexOf('&recepient'))+'&end=1&curr_c1=");');
							}
					
					}
					}
				}
			}
                        
			if ((opId == 685)||(opId == 686)||(opId == 690)) 
				{
					var $curr_c5=(((parseFloat($sum/100)-parseFloat($cms/100))-parseFloat($curr_c4))-parseFloat($curr_c3)).toFixed(2);
					$ga_buttbig[1]['o'].AddHandler('goto_Loc("Payment.html?'+goto_get_allurlparams().substr(goto_get_allurlparams().indexOf('&recepient')+1)+'&'+goto_get_allurlparams().substr(0,goto_get_allurlparams().indexOf('&recepient'))+'&end=1&curr_c1='+$curr_c1+'&curr_c2='+$curr_c2+'&curr_c3='+parseFloat($curr_c3)+'&curr_c4='+$curr_c4+'&curr_c5='+$curr_c5+'");');
				}
			if ((opId==1000)||(opId==1003)) 
			{
				$ga_buttbig[1]['o'].AddHandler('goto_Loc("Payment.html?'+goto_get_allurlparams()+'&end=1&curr_c1='+f104+'&curr_c2='+f105+'&curr_c3='+encodeURI(nn)+'");');
			}
			if ((opId==1007)||(opId==1005)) 
			{
				$ga_buttbig[1]['o'].AddHandler('goto_Loc("Payment.html?'+goto_get_allurlparams()+'&end=1&curr_c1='+f104+'&curr_c2='+f105+'&curr_c3='+encodeURI(nn)+'");');
			}                     
        		if (opId==131325) 
			{
				$ga_buttbig[1]['o'].AddHandler('goto_Loc("Payment.html?'+goto_get_allurlparams()+'&end=1&curr_c1='+getParameter('field100').substr(getParameter('field100').lastIndexOf('|')+1)+'");');
			}
			if ((opId==897)||(opId==901)||(opId==965))
			{
				$ga_buttbig[1]['o'].AddHandler('goto_Loc("Payment.html?'+goto_get_allurlparams()+'&end=1&curr_c2='+parseFloat( ((Parameters['sum'] - Parameters['cms'])/100 )-parseFloat(getParameter('field101')))+'&curr_c3='+parseFloat($sum/100)+'");');
			}
			if (opId==1010){
				$ga_buttbig[1]['o'].AddHandler('goto_Loc("Payment.html?'+goto_get_allurlparams()+'&end=1&curr_c1='+getParameter('field101')+'");');
			}
			if (opId==778) {
				var dt = new Date();
				dt.setDate(dt.getDate()+255);

				if (($ga_tc['card']['cardType']=='ЕТК')&&(typeof($ga_tc['tickets']['1'])=='undefined')&&!($ga_tc['tickets']['one']))
				{
                                	var $curr_c1='Скидка поставщика: '+$ga_tc['tickets']['0']['description'];
				}
				else
				{
				        if ((($ga_tc['card']['cardType']=='ЕТК')&&(typeof($ga_tc['tickets']['1'])!='undefined'))||($ga_tc['card']['cardType']=='ETKFixed'))
					{
	                        		var $curr_c1='Скидка поставщика: '+$ga_tc['tickets'][getParameter('tarif',0)]['description'];
					}
					else
					{
						if ($ga_tc['card']['cardType']=='Abonemet') {
							var $curr_c1='Выбранный период: '+$ga_tc['tickets'][getParameter('period',0)]['description'];
						}
					}

				}
				if ($ga_tc['tickets']['one']){
                                	var $curr_c1='Скидка поставщика: '+$ga_tc['tickets']['one']['description'];
				}
				$ga_buttbig[1]['o'].AddHandler('goto_Loc("Payment.html?end=1&'+goto_get_allurlparams()+'&curr_c1='+encodeURI($curr_c1)+'&curr_c2='+encodeURI(dt.toLocaleString())+'");');
			}
			if (opId!=755) {
				set_rect_text($v, [5, 400, $__s.r[2], 70], $__s, LCP('money_crediting')+': '+parseFloat( (Parameters['sum'] - Parameters['cms'])/100 )+' '+ LCP('currency')[CurrencyType]);
			}
			else {
				set_rect_text($v, [5, 400, $__s.r[2], 70], $__s, LCP('money_crediting')+': '+parseFloat(Parameters['sum']/100)+' '+ LCP('currency')[CurrencyType]);
			}                                       

		}
		else if($sum > 0){
			set_rect_text($v, [5, 380, $__s.r[2], 70], $__s, LCP('money_not_anough'));
		}
	}

	/*
	if ((Parameters['sum']/100) >= 0) {
	create_bigbut(-3);
	$ga_buttbig[1]['v'].Show(1, 1);
	change_srt_text($ga_buttbig[1]['txi'], 'Continue');
	$ga_buttbig[1]['o'].AddHandler('goto_Loc("PaymentComplete.html")');
	}
	*/

	/*
	create_bigbut(-3);
	*/

	// ------------------------------------------------ [props]
	// Принятые properties и т.д.



if (((typeof($op_dopcom) != 'undefined')&&( $op_dopcom != 0))) 
		{
			if ($op_dopcom.indexOf('%')<0) {
				$op_dopcom+=' р';
			} 
			if ((opId==828)||(opId==827)) 
				{
					set_rect_text($v, [-420, 320, 400, 70], $s_kil, 'Внимание! Организатором системы взимается доп.комиссия в размере '+$op_dopcom+'.');
				}
			else {
					set_rect_text($v, [-420, 330, 400, 70], $skg, 'Внимание! Организатором системы взимается доп.комиссия в размере '+$op_dopcom+'.');
			}
	        }
		

  if (typeof($op['complex_comission'])!= 'undefined') {   
		set_rect_text($v, [-420, 310, 400, 70], $s_kil, 'Внимание! Организатором системы взимается доп.комиссия в размере: '+jcfg_getCommissionText(getParameter('recepient', -1),1,'get with BR'));
	}	




} // function show_message_payment


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
var $ga_fields = new Array();        // fields array

var $g_fields_active = -1;                // current active field

var $g_n_blinkcnt = 0;

function field_blink($show_force) {
	if (arguments.count < 1) $show_force = false;
	// $show_force = false;

	var $skp = SKP('FIELD_BLINKER');



	$g_n_blinkcnt++;
	if ($g_fields_active < 0) return;
	// alert('blink!');
	var $ae = $ga_fields[$g_fields_active];


	// if (!($g_n_blinkcnt % 8)) alert($g_current_vpa);


	if ($g_current_vpa == 'VIEW_ACCOUNT_DETAILS') {
		if (!($g_n_blinkcnt % 2) || ($show_force))  {
			$ae['txba'].Visi(1, 1);
		}
		else {
			$ae['txba'].Visi(1, 0);
		}
	}



	/*
	if ($g_n_blinkcnt % 2) {
	$ae['txba'].SetBG(1, $skp.bp);
	}
	else {
	$ae['txba'].SetBG(1, $skp.bd);
	}
	*/


	/*
	if ($g_n_blinkcnt % 2) {
	$ae['txb'].SetBG(1, $skp.bp);
	}
	else {
	if ($ae['pass'] === 1) {
	$ae['txb'].SetBG(1, $skp.bd);
	}
	else {
	$ae['txb'].SetBG(1, $skp.bf);
	}
	}
	*/

}


mj_RT.Add('field_blink', 350, 0);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// fields array:
/*
['txb'] - background object
['txi'] - object to set_rect_text with [m] and [b] text elements
['v'] - viewport control to enter data into field !!!
['t'] - type of the field (-1)
['a'] - array of attr of the field
['id'] - id of the field
['title'] - title of the field
['commft'] - comments field text

*/
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// create new field
/*
$__type:
'i' : 'integer': minlength="11" maxlength="12"
'enum': ...

*/
/*function create_field($__v, $__title, $__id, $__type, $__attr, $__comment) {
var $v = $g_vpa[$__v]['v'];
var $s = $g_vpa[$__v]['s'];

var $f_id = $ga_fields.length;

/// Aaaah Eeeeh! - current field element in array
$ga_fields[$f_id] = new Array();
var $ae = $ga_fields[$f_id];

var $skc = SKP('VIEW_ACCOUNT_DETAILS_FIELD');
// $ae['txb'] = $v.AddD(15, $v['yofs']-10);
//        $ae['txb'] = $v.AddI($skc.i, 290, $v['yofs']+22);
$ae['txb'] = $v.AddI($skc.i, $skc.r[0], $v['yofs']+22);
// $ae['txb'].SizeTo(1, $skc.r[2], 60);
// $ae['txb'].SetBG(1, '#333366');

$ae['v'] = -1;
$ae['t'] = $__type;
$ae['a'] = $__attr;
$ae['id'] = $__id;
$ae['title'] = $__title;
$ae['pass'] = 0;
$ae['val'] = ''; // -1;

$ae['attr'] = $__attr;
// MjCRIODA($ae['attr']);

$ae['txi'] = set_rect_text($v, [$skc.r[0], $v['yofs']+29, $skc.r[2], 70], $skc, '');

var $skf = SKP('VIEW_ACCOUNT_DETAILS_FINFO');
//alert("$v['yofs']="+$v['yofs']);
set_rect_text($v, [$skc.r[0], $v['yofs'], $s.r[2], 70], $skf, $__title);
$v['yofs'] += $skc.r[3] + 23;
$ae['commft'] = $__comment;

if (($ae['t'] === 'i') && ($ae['attr']['min'] == 0)) {
$ae['pass'] = 1;
}


return $f_id;
}
*/

function create_field($__v, $__title, $__id, $__type, $__attr, $__comment) {
	var $v = $g_vpa[$__v]['v'];
	var $s = $g_vpa[$__v]['s'];
	var $f_id = $ga_fields.length;
	/// Aaaah Eeeeh! - current field element in array
	$ga_fields[$f_id] = new Array();
	var $ae = $ga_fields[$f_id];
	var $skc = SKP('VIEW_ACCOUNT_DETAILS_FIELD');
	var $skc2 = SKP('VIEW_ACCOUNT_DETAILS_FIELD2');
	//        alert('create_field: $fields_count='+$fields_count)

	if((1 === $fields_count)||(((getParameter('recepient')>=131316)&&(getParameter('recepient')<=131324))||(getParameter('recepient')==131326))){
		if (getParameter('recepient')!=966){
			$skc = SKP('VIEW_ACCOUNT_DETAILS_FIELD_BIG2');
		}
	}
	if (parseFloat($__id)-14000 > 0){
		$sec_op=1;
		$v['yofs']=1355;
	}
	if ((getParameter('recepient')==1313133)||(getParameter('recepient')==131314))
	{
		if ($icount==7) {$v['yofs']=1355;}
		$ae['txb'] = $v.AddI($skc.i, $skc.r[0], $v['yofs']+25);
		$ae['txba'] = $v.AddI($skc.ia, $skc.r[0], $v['yofs']+25);
		
	}
	else{
		if (((getParameter('recepient')==1000)||(getParameter('recepient')==1003)||(getParameter('recepient')==1004))&&(($__id==104)||($__id==105))) {
			$ae['txb'] = $v.AddI($skc2.i, $skc2.r[0], $v['yofs']);
			$ae['txba'] = $v.AddI($skc2.ia, $skc2.r[0], $v['yofs']);

		}
		else {
			if (((getParameter('recepient')==1007)||(getParameter('recepient')==1005))&&(($__id==104)||($__id==105)))
			{
				$ae['txb'] = $v.AddI($skc2.i, $skc2.r[0], $v['yofs']);
				$ae['txba'] = $v.AddI($skc2.ia, $skc2.r[0], $v['yofs']);
			}
			else
			{   if ((getParameter('recepient')!=889)||(getParameter('recepient')!=966))	{

					if (((getParameter('recepient')==131325)&&($__id<100))||((getParameter('recepient')==131327)&&(($__id<100)||(typeof($__id)=='string')))){
						$ae['txb'] = $v.AddI($skc.i, $skc.r[0], $v['yofs']+25);
						$ae['txba'] = $v.AddI($skc.ia, $skc.r[0], $v['yofs']+25);
					}
					else
					{
						$ae['txb'] = $v.AddI($skc.i, $skc.r[0], $v['yofs']);
						$ae['txba'] = $v.AddI($skc.ia, $skc.r[0], $v['yofs']);
					}

				}
			}
		}
	    }

        

	//$ae['txb'] = $v.AddI($skc.i, 290, $v['yofs']+22);


	// $ae['txb'].SizeTo(1, $skc.r[2], 60);
	// $ae['txb'].SetBG(1, '#333366');

	$ae['v'] = -1;
	$ae['t'] = $__type;
	$ae['a'] = $__attr;
	$ae['id'] = $__id;
	$ae['title'] = $__title;
	$ae['pass'] = 0;
	$ae['val'] = ''; // -1;

	// alert('fid: '+$ae['id']+', val: '+getParameter('field'+$ae['id']) );

	$ae['val'] = getParameter('field'+$ae['id'], ''); // -1;
	if ($ae['id'] == '100') {
		var $accoute = getParameter('account', '');
		if ($accoute !== '') {
			$ae['val'] = $accoute;
		}
	}


	$ae['attr'] = $__attr;
	// MjCRIODA($ae['attr']);

	//        $ae['txi'] = set_rect_text($v, [290, $v['yofs']+29, $skc.r[2], 70], $skc, '');

	// cropped by MeG
	
	if ((getParameter('recepient')==131313)||(getParameter('recepient')==131314))
	{
		if ($icount==7) { $v['yofs']=55;}
		$ae['txi'] = set_rect_text($v, [$skc.r[0], $v['yofs']+35, $skc.r[2], 70], $skc, '');
		
	}
	else{
		if(1 === $fields_count){
			if (getParameter('recepient')==131327){
				$ae['txi'] = set_rect_text($v, [$skc.r[0], $v['yofs']+35, $skc.r[2], 70], $skc, '');
			}
			else 
			{
				$ae['txi'] = set_rect_text($v, [$skc.r[0], $v['yofs']+10, $skc.r[2], 70], $skc, '');
			}
		}
		else
		{
			if (((getParameter('recepient')==131325)&&($__id<100))||((getParameter('recepient')==131327)&&(typeof($__id)=='string'))){
				$ae['txi'] = set_rect_text($v, [$skc.r[0], $v['yofs']+35, $skc.r[2], 70], $skc, '');
			}
			else
			{
				$ae['txi'] = set_rect_text($v, [$skc.r[0], $v['yofs']+10, $skc.r[2], 70], $skc, '');
			}
		}
	    }	



	var $skf = SKP('VIEW_ACCOUNT_DETAILS_FINFO');
	if ($icount<7) {
		var $idtext=set_rect_text($v, [$skc.r[0], $v['yofs']-22, $s.r[2], 70], $skf, $__title);
		$ArrayCom[$icount]=$idtext;
	
	}
	if (((getParameter('recepient')==1000)||(getParameter('recepient')==1003)||(getParameter('recepient')==1004))&&(($__id==104)||($__id==105))) {
		$v['yofs'] += $skc.r[3] + 120;
	}
	else{
	if ((getParameter('recepient')==131313)||(getParameter('recepient')==131314)){
			$v['yofs'] += $skc.r[3] + 95;
		}
		else {
			if (((getParameter('recepient')==1007)||(getParameter('recepient')==1005))&&(($__id==104)||($__id==105)))
			{
				$v['yofs'] += $skc.r[3] + 120;
			}
			else
			{
				if (getParameter('recepient')==131327) {
					$v['yofs'] += $skc.r[3] + 95;
				}
				else
				{
					$v['yofs'] += $skc.r[3] + 70;
				}
			}
		}
	}
	$ae['commft'] = $__comment;
	// $v['yofs'] += 10;
//	alert($__id);


	//  - - - - - - -


	// create_vpa('VIEW_ACCOUNT_INLET', 'create_pinpad', '-1', '-1');

	/*
	switch($__type) {
	// - - - - - - - -
	case 'i':
	// alert('int');
	// $ae['v'] = -1; // create_vpa('VIEW_ACCOUNT_INLET', 'create_pinpad', '-1', '-1');
	$ae['t'] =

	break;

	// - - - - - - - -
	case 'e':
	alert('enum');

	break;

	// - - - - - - - -
	case 'c':
	alert('card');

	// - - - - - - - -
	default:
	break;
	}
	*/

	if (($ae['t'] === 'i') && ($ae['attr']['min'] == 0)) {
		$ae['pass'] = 1;
	}


	return $f_id;

}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function create_field_tihvin($__v, $__title, $__id, $__type, $__attr, $__comment) {
//alert($__v);
//alert($__title);
//alert($__id);
//alert($__type);
//alert($__attr);
//alert($__comment);
	var $v = $g_vpa[$__v]['v'];
	var $s = $g_vpa[$__v]['s'];
	var $f_id = $ga_fields.length;

	/// Aaaah Eeeeh! - current field element in array
	$ga_fields[$f_id] = new Array();
	var $ae = $ga_fields[$f_id];

	var $skc = SKP('VIEW_ACCOUNT_DETAILS_FIELD');
	//        alert('create_field: $fields_count='+$fields_count)
	        //125
	/*
	if(1 === $fields_count){
	$skc = SKP('VIEW_ACCOUNT_DETAILS_FIELD_BIG2');
	}
	*/
	// $ae['txb'] = $v.AddD(15, $v['yofs']-10);

	var $x_ofs_f1 = 200;
	var $x_ofs_f2 = 380;


	$v.AddI('op_bgcom1.gif', $x_ofs_f1 + $skc.r[0], $v['yofs']+152);

	//121212
	$ae['txb'] = $v.AddI('op_bgcom1.gif', $x_ofs_f2 + $skc.r[0], $v['yofs']+152);
	$ae['txba'] = $v.AddI('op_bgcom3.gif', $x_ofs_f2 + $skc.r[0], $v['yofs']+152);
	//$ae['txbb'] = $v.AddI('op_bgcom1.gif', $x_ofs_f2 + $skc.r[0], $v['yofs']+152);

	// $ae['txba'].AddHandler('alert('+$f_id+')', 160, 70);
	// $ae['txba'].AddHandler('activate_field('+$f_id+')', 160, 70);



	//$ae['txb'] = $v.AddI($skc.i, 290, $v['yofs']+22);


	// $ae['txb'].SizeTo(1, $skc.r[2], 60);
	// $ae['txb'].SetBG(1, '#333366');

	$ae['v'] = -1;
	$ae['t'] = $__type;
	$ae['a'] = $__attr;
	$ae['id'] = $__id;
	$ae['title'] = $__title;
	$ae['pass'] = 0;

	// alert($ae['id']);
	$ae['val'] = ''; // -1;

	// alert('fid: '+$ae['id']+', val: '+getParameter('field'+$ae['id']) );

	$ae['val'] = getParameter('field'+$ae['id'], ''); // -1;
	if ($ae['id'] == '100') {
		var $accoute = getParameter('account', '');
		if ($accoute !== '') {
			$ae['val'] = $accoute;
		}
	}


	$ae['attr'] = $__attr;
	// MjCRIODA($ae['attr']);

	//        $ae['txi'] = set_rect_text($v, [290, $v['yofs']+29, $skc.r[2], 70], $skc, '');



	// cropped by MeG
	// $skc.b = 'red';
	set_rect_text($v, [$skc.r[0]+$x_ofs_f1, $v['yofs']+168, 160, 70], $skc, $__attr['min_value']);
	$ae['txi'] = set_rect_text($v, [$skc.r[0]+$x_ofs_f2, $v['yofs']+168, 160, 70], $skc, '');


	var $skf = SKP('VIEW_ACCOUNT_DETAILS');
	//alert("$v['yofs']="+$v['yofs']);
	//         set_rect_text($v, [$skc.r[0], $v['yofs']+160, $s.r[2], 70], $skf, $__title);
	//$skf.b = 'red';
	set_rect_text($v, [$skc.r[0]-60, $v['yofs']+180, 250, 70], $skf, $__title);
	//        set_rect_text($v, [300, $v['yofs'], $s.r[2], 70], $skf, $__title);
	$v['yofs'] += $skc.r[3] + 42;
	$ae['commft'] = $__comment;
	// $v['yofs'] += 10;


	//  - - - - - - -

	if (($ae['t'] === 'i') && ($ae['attr']['min'] == 0)) {
		$ae['pass'] = 1;
	}

	
	return $f_id;
}




// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// create all fields due to current operator
function create_account_fields($__v) {
	// $g_vpa[$g_current_vpa]['v'].Show(0, 1);
	var $v = $g_vpa[$__v]['v'];
	var $s = $g_vpa[$__v]['s'];


	if ($g_need_to_create_helper) {

		var $sk_giwi = SKP('VIEW_HELPER');

		var $o = $v.AddD($sk_giwi.r[2], $sk_giwi.r[3]);
		$o.MoveTo(1, $sk_giwi.r[0], $sk_giwi.r[1]);
		$o.SizeTo(1, $sk_giwi.r[2], $sk_giwi.r[3]);

		// $o.Border(1, '7px solid #ff0000');
		// $o.SetBG(1, '#990000');

		$gl_helper_html_idx = $o.i;

		// change_helper_state(1);
		// MjCRIODA($o);
		// alert('hara!');

	}


	set_rect_text($v, [5, 5, $s.r[2], 3], $s, LCP('title_requizites') );
	create_bigbut_static_vp($__v, -4, 'nbut1_g0_menu.gif', LCP('button_to_main'), "goto_Loc('main.html')");
	// var opId = Parameters['recepient'];
	var opId = getParameter('recepient', 'undefined');

	var $op = jcfg_findOperatorById(opId)
	if ($op == -1) goto_Main();



	var opNme = $op['name'];
	var opImg = $op['image'];
//	alert(getParameter('img_name'));
        var img1000 = getParameter('img_name');
	var name1000 = getParameter('bank_name');
//	alert('img1000='+img1000+'; name1000='+name1000);
        if ((opId==1009)||(opId==1007)||(opId==1005)) {
			if ((img1000!='')&&(typeof(img1000)!='undefined')) {
				opImg=img1000;
			} else { opImg='no_image.gif';
		  	} 
		if ((getParameter('oldrecepient', 'undefined') != 1003)&&(getParameter('oldrecepient', 'undefined') != 1004)) {
	
				opNme=decodeURIComponent(name1000);

		} 
		else {
			var opId1 = getParameter('oldrecepient', 'undefined');
			var $op1 = jcfg_findOperatorById(opId1);
			var opNme = $op1['name'];
			var opImg = $op1['image'];
		}
	}
	// alert(document.location.href);

	// $gs_marquee_text = jcfg_getCommissionText(opId);
	// var opComment = ndOperator.getElementsByTagName("comment").item(0).text;
	// opComment = opComment.replace(']', 'W');

	var $skce = SKP('ENUM_ICON');
        var $s_kil=SKP('VIEW_TEXTBNK');
       	if (opId==828) {set_rect_text($v, [250, 235, 580, 400], $s_kil, 'Внимание!!! Это не родительский взнос и не взнос за охрану!');}

       	if ((opId==829)&&(getParameter('err')==1)) {set_rect_text($v, [250, 235, 580, 400], $s_kil, 'Не возможно провести оплату на данный лицевой счет. Проверьте префикс.');}
var $skc1 = SKP('VIEW_ACCOUNT_DETAILS_FIELD');
				var $s = SKP('VIEW_TERMINFO_TERMNUMBER');
				var $sk = SKP('VIEW_ACCOUNT_INLET');

	if ((opId==892)&&(getParameter('comstar')>0)) {set_rect_text($v, [250, 235, 580, 400], $s, 'Оплата с применением выбранной кнопки закрыта с 01.04.2012 г. Для оплаты услуг КОМСТАР в терминалах Вам доступна кнопка с логотипом МТС «Домашний Интернет, ТВ и Телефон", ввести 11-значный номер лицевого счета. Узнать свой номер лицевого счета Вы можете бесплатно по тел. 8-800-250-08-90');}
	// !!!!!
	var $xofs = 50;
	var $yofs = 100;
	if (opId!=9999) {
		var $sk = SKP('OPERATOR_ICON');
		var $o = $v.AddI($sk.bi, $xofs - Math.floor(($sk.bd[0]-$sk.d[0])/2), $yofs - Math.floor(($sk.bd[1]-$sk.d[1])/2));
		// $go_operator_icon = $v.AddI('op/'+opImg, $xofs, $yofs);
		$go_operator_icon = gfxa_ins_oper_logo($v, opImg, $xofs, $yofs-10, $sk.d[0], $sk.d[1], opNme);
	}
	$v['yofs'] = 55;


	var $pr = $op['processor']['type'].toLowerCase();
	var $i_pr = $op['i_type'].toLowerCase();

	var $state = getParameter('state', '-1');


	if (($state !== '-1') && ($i_pr == 'comm_plat')) {
		switch ($state) {
                        
			// - - - - - - -
			case 'do_meters':
                        
			// $v['yofs'] = 155;
			if (opId == 131315) {
				$v.AddI('op_bgcoma.gif', 300, 60);
				var $skc1 = SKP('VIEW_ACCOUNT_DETAILS_FIELD');
				var $s = SKP('VIEW_TERMINFO_TERMNUMBER');
				var $sk = SKP('VIEW_ACCOUNT_INLET');

				var $s_txt = 'Л/c:&nbsp;<b>' + $ga_cptgl['client']['account'] + '</b>';
				$s_txt += '&nbsp;&nbsp;&nbsp;&nbsp;Абонент:<b> ' + $ga_cptgl['client']['name'] + '</b>';
				// $skc1.b = 'red';
				set_rect_text($v, [300, 100, 900, 50], $skc1, $s_txt);

				set_rect_text($v, [470, 185, 200, 30], $s, 'предыдущее');

				set_rect_text($v, [660, 185, 200, 30], $s, 'текущее');

				set_rect_text($v, [30, 210, 200, 30], $sk, 'Заполните показания счетчиков');

				// $g_verify_all_fields = true;

			}
			for (var $vi in $ga_cptgl['meters']) {
				var $s_comm = '';
				$icount+=1;
				//   $s_comm += ('<b>Пред. показания счетчиков</b> :<br>'+$ga_cptgl['meters'][$vi]['serial']+':&nbsp;' + $ga_cptgl['meters'][$vi]['prev_reading'] + '<br><br>');

				 $s_comm += ('<b>Л/c:</b>&nbsp;' + $ga_cptgl['client']['account'] + '<br><br>');
				$s_comm += ('<b>ФИО клиента:</b><br>' + $ga_cptgl['client']['name'] + '<br><br>');
				if ($ga_cptgl['client']['address'].length > 0) {
					$s_comm += ('<b>Адрес:</b><br>' + $ga_cptgl['client']['address'] + '<br><br>');
				}
				//125
				// $s_comm += ('<b>ФИО клиента:</b><br>' + $ga_cptgl['client']['name'] + '<br><br>');
				$s_comm += ('<b>Задолженность:</b><br> ' + $ga_cptgl['client']['debt'] + ' '+LCP('currency')[CurrencyType]+'<br><br>');
				if ($ga_cptgl['client']['debt'] > 0) {
					$s_comm += ('<b>Задолженность:</b><br> ' + $ga_cptgl['client']['debt'] + ' '+LCP('currency')[CurrencyType]+'<br><br>');
				}

				/*
				'client' : {
				'account' : '347690',
				'address' : 'Молодежный б-р д.36 кв. 9',
				'name' : 'БУЗЫЦКОВА О.В.',
				'debt' : '2548'
				},

				*/
				var $limit_rules = {min: 1, max: 7};

				if (meha_IS("$ga_cptgl['meters']['"+$vi+"']['prev_reading']")) {
					$limit_rules['min_value'] = $ga_cptgl['meters'][$vi]['prev_reading'];
				}
				else {
					$limit_rules['min_value'] = 0;
				}
				//alert($limit_rules['min_value']);
				// if (($__id >= 0) && (meha_IS('$ga_jcfg.operators['+$__id+'].iface_params.scen')) ) {
				//alert('pre!' + opId);
				//
				
				if (meha_IS('$ga_jcfg.operators['+opId+'].iface_params.disable_lowest_counters_vals') && ($ga_jcfg.operators[opId].iface_params.disable_lowest_counters_vals)) {

					$limit_rules['min_value'] = $ga_cptgl['meters'][$vi]['prev_reading'];

					// alert('bingo, prev: '+ $limit_rules['min_value']);
				}
				
				//alert('passed!');

				//alert (opId);
				if (opId == 131315) {
					create_field_tihvin($__v, '<div align="right">' + $ga_cptgl['meters'][$vi]['serial'] + '</div>', $vi, 'i', $limit_rules, $s_comm);

				}
				else {
						if ((getParameter('recepient')>=131316)&&(getParameter('recepient')<=131324)) {
							var $o = $v.AddI($skce.bi, 350, $icount*75);
							$o.SizeTo(1,850,50);
							set_rect_text($v, [350, $icount*75, 850, 75], $skce, '('+$vi+') '+$ga_cptgl['meters'][$vi]['serial']+'<br> Текущий баланс: '+$ga_cptgl['meters'][$vi]['prev_reading']);
							$o.AddHandler("goto_Loc('checking.html?recepient=916&backrecepient="+getParameter('recepient')+"&field100="+$ga_cptgl['client']['account']+"&field101="+$vi+"')");								
						}
						else {
								if (opId == 131327) {
									var $1 = 'Счетчик: ';
									var $2 = 'предыдущие значение счетчика: ';
									var $t1 = $vi.split('_');
									var $t2 = $vi.split('__');
									if (($t1[2] == 0)&&($t1[4] == 0))
									{
										$1 = '';
										$2 = 'задолженность: ';
									}
									create_field($__v, $1 + decodeURIComponent($ga_cptgl['meters'][$vi]['serial']) + '<br>  ('+ $2 + $ga_cptgl['meters'][$vi]['prev_reading'] + ')', $vi, 'i', $limit_rules, $s_comm);
								}
								else
								{
									create_field($__v, 'Счетчик: ' + decodeURIComponent($ga_cptgl['meters'][$vi]['serial']) + '<br>  (предыдущие значение счетчика: ' + $ga_cptgl['meters'][$vi]['prev_reading'] + ')', $vi, 'i', $limit_rules, $s_comm);
								}
						}
				}

			}
			if (((getParameter('recepient')>=131316)&&(getParameter('recepient')<=131324))||(getParameter('recepient')==131326)) {
				set_rect_text($v, [350, 5, 850, 75], $skce, 'Выберите услугу');
				$ga_buttbig[0]['v'].Show(1, 1);
				$ga_buttbig[0]['o'].AddHandler('goto_Loc("main.html")');
			}
			else
			{
				activate_field(0);

			}
			break;




		} // - - - - switch state





	}
	// if ((getParameter('state', '-1') == 'auth_check_complete') && ( $pr == 'cptgl') ) {
	// alert('check complete!!!');


	// create and detect fields
	else if ( ($pr === 'cyberplat') || ($i_pr == 'comm_plat') || ($pr === 'marketing') || ($pr === 'external') ) {
		// alert('CYB');
		// GetFieldsInfo(opId);
		for (var $fi in $op['fields']) {
			$fields_count++;
		}
		for (var $fi in $op['fields']) {
        	    if (((opId==1000)||(opId==1002)||(opId==1003)||(opId==1004)||(opId==1007))&&(($fi==100)||($fi==104)||($fi==105))) {continue;}
				if ((opId==1010)&&($fi==107)) {continue;}
        	    if ((opId==10)&&($fi==101)) {continue;}
				if ((opId==1008)&&($fi==102)) {continue;}
				if ($fi==999) {continue;}
			if ((opId==778)&&(($fi==100)||($fi==103))&&$op['fields']['102']) {continue;}
			var $cf = $op['fields'][$fi];
			// alert($fi+' in '+opId+', type: '+$cf['type']);
			var $fcomment = '';
			if ('undefined' !== typeof($cf['comment'])) {
				$fcomment = $cf['comment'];
			}
			// FieldComment[$i];
			$fcomment = $fcomment.replace(/\[/g, '<');
			$fcomment = $fcomment.replace(/\]/g, '>');

			// alert($fcomment);

			var $f_type = $cf['type']; // .toUpperCase();
			switch ($f_type) {
				// - - - - - - -
				case 'masked':
				// alert(FieldId[$i]);
				create_field($__v, $cf['name'], $fi, 'm', {mask: $cf['mask']}, $fcomment);
				break;

				// - - - - - - -
				case 'integer':
				// alert($cf['minlength'] + ' : ' + $cf['maxlength']);
				if ('undefined' === typeof($cf['minlength'])) {
					$cf['minlength'] = 1;
				}
				create_field($__v, $cf['name'], $fi, 'i', {min: $cf['minlength'], max: $cf['maxlength']}, $fcomment);
				break;

				// - - - - - - -
				case 'enum':
				/*
				alert(FieldEnumCount[$i]);
				alert(FieldEnumData[$i]);
				*/
				// var $as = FieldEnumData[$i].toString().split(',');
				// var $asd = FieldEnumSData[$i].toString().split(',');

				// create_field($__v, $cf['name'], $fi, 'e', {fi: $as, fd: $asd}, $fcomment);
				// MjCRIODA($cf['enum']);
				create_field($__v, $cf['name'], $fi, 'e', {en: $cf['enum']}, $fcomment);
				// .split(',');

				// MjCRIODA( $s );
				break;

				// - - - - - - -
				case 'text':
				// alert(FieldId[$i]);
				create_field($__v, $cf['name'], $fi, 't', null, $fcomment);
				// alert('text field!');
				break;

				// - - - - - - -
				default:
				alert('defa');
				CybIf_Logger(CYBIF_LOG_ERR, 'iface_runtime.js: create_account_fields() - unknown field type: '+$f_type+' in operator id: '+opId);
				break;
			}
			// create_field($__title, $__type, $_attr)
			// alert(FieldType[$i]);


		}
		//if (opId==1002) {activate_field(0); activate_field(1);} else {
		activate_field(0);
		//}

	}
	else if ($pr === 'cyberplat_pin') {
		// alert('CYBPIN');
		jcfg_getCardsInfo();
		// alert(CardsCount);
		create_field($__v, 'CARD', '', 'c', '');
		activate_field(0);

	}
	else {
		CybIf_Logger(CYBIF_LOG_ERR, 'iface_runtime.js: create_account_fields() - invalid processor type: '+$pr+' in operator id: '+opId);
	}


	/*
	create_bigbut(-2);
	create_bigbut(-3);
	*/
	// alert('ACTIMEL!');
	// if ($ipr.attributes.getNamedItem('type').text == 'Cyberplat_PIN') {
	// if PIN, show cards


	// var


	// set_rect_text(cvp_PP, [5, 10, $__s.r[2], 70], $__s, LCP('title_tel_number') );
	// var $sp = SKP('PINPAD');


}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function create_enum($__v) {
	// alert('wow!');
	var $v = $g_vpa[$__v]['v'];
	var $s = $g_vpa[$__v]['s'];

	var $title = $ga_fields[$g_fields_active]['title'];

	set_rect_text($v, [5, -30, $s.r[2], 70], $s, $title);


	var $ae = $ga_fields[$g_fields_active];

	var $skc = SKP('ENUM_ICON');

	var $yofs = 20;
	var $count=0;
	var $xx=$skc.d[0]-950;
if ((getParameter('recepient')==889)||(getParameter('recepient')==966)) {
	for (var $ff in $ae['a']['en']) {
		$count+=1;
		var $o = $v.AddI($skc.bi, $xx, $yofs );
		$o.SizeTo(1, $skc.d[0]-50, $skc.d[1]);
		if (getParameter('recepient')==889){
			$o.AddHandler('goto_Loc("data-entry.html?recepient=131325&ffield101='+$ff+'");');
		} else {
			$o.AddHandler('goto_Loc("data-entry.html?recepient=131327&ffield101='+$ff+'");');
		}
		set_rect_text($v, [$xx-30, $yofs+10, $skc.d[0], $skc.d[1]], $skc, $ae['a']['en'][$ff]);
		$yofs += $skc.d[1]+5;
		if ($count==13) {
			$xx = $skc.d[0]-450;
			$yofs = 1;
		}

	}
}
else
{
	for (var $ff in $ae['a']['en']) {
		//alert($ff);
		var $o = $v.AddI($skc.bi, ($s.r[2]-$skc.d[0])/2, $yofs );
		$o.SizeTo(1, $skc.d[0], $skc.d[1]);
		// $o.SetBG(1, '#555599');
		$o.AddHandler('select_fpar_enum("'+$ff+'")');
		set_rect_text($v, [($s.r[2]-$skc.d[0])/2, $yofs+10, $skc.d[0], $skc.d[1]], $skc, $ae['a']['en'][$ff]);

		$yofs += $skc.d[1]+5;
	}

}
	/*
	for (var $i=0; $i<$ae['a']['fd'].length; $i++) {
	var $o = $v.AddI($skc.bi, ($s.r[2]-$skc.d[0])/2, $yofs );
	$o.SizeTo(1, $skc.d[0], $skc.d[1]);
	// $o.SetBG(1, '#555599');
	$o.AddHandler('select_fpar_enum("'+$i+'")');
	set_rect_text($v, [($s.r[2]-$skc.d[0])/2, $yofs+10, $skc.d[0], $skc.d[1]], $s, $ae['a']['fd'][$i]);

	$yofs += $skc.d[1]+5;
	}
	*/


	// MjCRIOD();

}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function select_fpar_enum($__s) {
	var $ae = $ga_fields[$g_fields_active];

	// alert($ae['val']);

	if ($__s === '_') {
		// alert('puff!');
		$__s = $ae['val'];
		if ($__s == '') return;
	}

	$ae['val'] = $__s;
	var $s_prefix = '';
	var $s_postfix = '';
	if ($ae['a']['en'][$__s].length > 20) {
		$s_prefix = '<span style="font-size: 75%;">';
		$s_postfix = '</span>';
	}

	change_srt_text($ae['txi'],  $s_prefix + $ae['a']['en'][$__s] + $s_postfix);

	$ae['pass'] = 1;
	verify_fields();
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function create_card($__v) {
	// alert('wow!');
	var $v = $g_vpa[$__v]['v'];
	var $s = $g_vpa[$__v]['s'];

	var $title = $ga_fields[$g_fields_active]['title'];

	set_rect_text($v, [5, -30, $s.r[2], 70], $s, $title);

	var $ae = $ga_fields[$g_fields_active];

	var $skc = SKP('CARD_ICON1');

	var $yofs = 20;
	/*
	for (var $i=0; $i<CardsCount; $i++) {
	var $o = $v.AddI($skc.bi, ($s.r[2]-$skc.d[0])/2, $yofs );
	// $o.SizeTo(1, $skc.d[0], $skc.d[1]);
	// $o.SetBG(1, '#555599');

	$o.AddHandler('select_fpar_card("'+$i+'")');

	set_rect_text($v, [($s.r[2]-$skc.d[0])/2, $yofs+40, $skc.d[0], $skc.d[1]], $s, CardName[$i]);
	set_rect_text($v, [($s.r[2]-$skc.d[0])/2, $yofs+90, $skc.d[0], $skc.d[1]], $s, CardValue[$i]+' euro');

	$yofs += $skc.d[1]+5;
	}
	*/
	// alert('alive!');


	var $opId = getParameter('recepient', 'undefined');
	if ('undefined' === typeof($ga_jcfg['details']['pin_info'][$opId])) {
		return;
	}



	var $l_cards = $ga_jcfg['details']['pin_info'][$opId]['cards'];

	// alert($opId);
	// MjCRIODA($l_cards);
	// alert('alive!');

	if ($l_cards.length < 1) {
		var $o = $v.AddI($skc.bi, ($s.r[2]-$skc.d[0])/2, $yofs );
		set_rect_text($v, [($s.r[2]-$skc.d[0])/2, $yofs+25, $skc.d[0], $skc.d[1]], $skc, LCP('card_no_avialable'));
	}

	else {
		for (var $cid in $l_cards) {
			// alert($cid);

			var $o = $v.AddI($skc.bi, ($s.r[2]-$skc.d[0])/2, $yofs );
			$o.AddHandler('select_fpar_card("'+$cid+'")', $skc.d[0], $skc.d[1]);

			//                set_rect_text($v, [($s.r[2]-$skc.d[0])/2, $yofs+40, $skc.d[0], $skc.d[1]], $s, $l_cards[$cid]['name']+'<br>222');
			//                set_rect_text($v, [($s.r[2]-$skc.d[0])/2, $yofs+70, $skc.d[0], $skc.d[1]], $s, $l_cards[$cid]['amount']+' '+LCP('currency')[CurrencyType]);

			set_rect_text($v, [($s.r[2]-$skc.d[0])/2, $yofs+25, $skc.d[0], $skc.d[1]], $s, $l_cards[$cid]['name']+'<br>'+$l_cards[$cid]['amount']+' '+LCP('currency')[CurrencyType]);

			$yofs += $skc.d[1]+$skc.btw[0];
		}
	}


	// alert('wow!');

	/*
	for (var $i=0; $i<CardsCount; $i++) {
	var $o = $v.AddI($skc.bi, ($s.r[2]-$skc.d[0])/2, $yofs );
	// $o.SizeTo(1, $skc.d[0], $skc.d[1]);
	// $o.SetBG(1, '#555599');

	$o.AddHandler('select_fpar_card("'+$i+'")');

	set_rect_text($v, [($s.r[2]-$skc.d[0])/2, $yofs+40, $skc.d[0], $skc.d[1]], $s, CardName[$i]);
	set_rect_text($v, [($s.r[2]-$skc.d[0])/2, $yofs+90, $skc.d[0], $skc.d[1]], $s, CardValue[$i]+' euro');

	$yofs += $skc.d[1]+5;
	*/



	// MjCRIOD();

}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function select_fpar_card($__s) {
	var $ae = $ga_fields[$g_fields_active];

	$ae['val'] = $__s;

	var $opId = getParameter('recepient', 'undefined');
	var $l_cards = $ga_jcfg['details']['pin_info'][$opId]['cards'];

	change_srt_text($ae['txi'], $l_cards[$__s]['name'] );

	$ae['pass'] = 1;
	verify_fields();
}


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// activate field with field id
function activate_field($__id) {

	// Если родительский vpa еще доконца не создан, но тута уже начинается движуха по сходанию дочерних
	if ($icount>5){
		
			if (($g_fields_active==5)&&($__id!=4)) {
				
	  				for (var $i=0; $i<6; $i++) {
				
						if ( $i+6 <= $icount-1) {
							$ga_fields[$i+6]['txb'].MoveTo(1,$ga_fields[$i]['txb']['x'],$ga_fields[$i]['txb']['y']);
							$ga_fields[$i+6]['txba'].MoveTo(1,$ga_fields[$i]['txba']['x'],$ga_fields[$i]['txba']['y']);
							change_srt_text($ArrayCom[$i+1],$ga_fields[$i+6]['title']);
							change_srt_text($ga_fields[$i]['txi'],'');
							if ($ga_fields[$i+6]['val']!=''){
								change_srt_text($ga_fields[$i+6]['txi'],$ga_fields[$i+6]['val']);
							}
							$ga_fields[$i]['txb'].MoveTo(1,$ga_fields[$i]['txb']['x']+1300,$ga_fields[$i]['txb']['y']+1300);
							$ga_fields[$i]['txba'].MoveTo(1,$ga_fields[$i]['txba']['x']+1300,$ga_fields[$i]['txba']['y']+1300);
						}
						else {         	
							    
							$ga_fields[$i]['txb'].MoveTo(1,$ga_fields[$i]['txb']['x']+1300,$ga_fields[$i]['txb']['y']+1300);
							$ga_fields[$i]['txba'].MoveTo(1,$ga_fields[$i]['txba']['x']+1300,$ga_fields[$i]['txba']['y']+1300);
							change_srt_text($ga_fields[$i]['txi'],'');
							change_srt_text($ArrayCom[$i+1],'');
						}
					}
			} 
		
			else {
                                if (($__id==5)&&($g_fields_active==6)) {
	  				for (var $i=0; $i<6; $i++) {
						if ( $i+6 <= $icount-1) {
							$ga_fields[$i]['txb'].MoveTo(1,$ga_fields[$i]['txb']['x']-1300,$ga_fields[$i]['txb']['y']-1300);
							$ga_fields[$i]['txba'].MoveTo(1,$ga_fields[$i]['txba']['x']-1300,$ga_fields[$i]['txba']['y']-1300);
							change_srt_text($ArrayCom[$i+1],$ga_fields[$i]['title']);
							change_srt_text($ga_fields[$i]['txi'],$ga_fields[$i]['val']);
							change_srt_text($ga_fields[$i+6]['txi'],'');
							$ga_fields[$i+6]['txb'].MoveTo(1,$ga_fields[$i]['txb']['x']+1300,$ga_fields[$i]['txb']['y']+1300);
							$ga_fields[$i+6]['txba'].MoveTo(1,$ga_fields[$i]['txba']['x']+1300,$ga_fields[$i]['txba']['y']+1300);
						}
						else {         	    
							$ga_fields[$i]['txb'].MoveTo(1,$ga_fields[$i]['txb']['x']-1300,$ga_fields[$i]['txb']['y']-1300);
							$ga_fields[$i]['txba'].MoveTo(1,$ga_fields[$i]['txba']['x']-1300,$ga_fields[$i]['txba']['y']-1300);
							change_srt_text($ga_fields[$i]['txi'],$ga_fields[$i]['val']);
							change_srt_text($ArrayCom[$i+1],$ga_fields[$i]['title']);
						}
					}

				}
			} 
		
	}

//alert($ga_fields[0]['txba']['x']);
	var $parent_vpa = $g_current_vpa;
	if ($parent_vpa == '') {
		$parent_vpa = $g_vpaincreation;
	}

	/*
	alert($__id);
	alert($g_fields_active);
	*/
	//  - - - - - check if exists
	if ('undefined' === typeof($ga_fields[$__id])) {
		CybIf_Logger(CYBIF_LOG_ERR, 'field no'+$__id+' is undefined!!!');
	}
	if (getParameter('err')==1001) {$ga_fields[$g_fields_active+1]['val'] = $ga_fields[$g_fields_active+1]['val'].split("_").join(" ");$ga_fields[$g_fields_active+1]['pass']=1;}
        if ((getParameter('recepient')==1000)||(getParameter('recepient')==1004)||(getParameter('recepient')==1003))
		{
			if (($g_fields_active==3)&&(getParameter('err')!=1001)) 
			{	
				//alert('yopta fieldid:'+$g_fields_active+' : '+$ga_fields[$g_fields_active]['val']); 
				$ga_fields[$g_fields_active+1]['val']=$ga_fields[$g_fields_active]['val'];
				$ga_fields[$g_fields_active+1]['pass']=1;
			}
		}
        if ((getParameter('recepient')==1007)||(getParameter('recepient')==1005))
		{
			if (($g_fields_active==2)&&(getParameter('err')!=1001)) 
			{	
				//alert('yopta fieldid:'+$g_fields_active+' : '+$ga_fields[$g_fields_active]['val']); 
				$ga_fields[$g_fields_active+1]['val']=$ga_fields[$g_fields_active]['val'];
				$ga_fields[$g_fields_active+1]['pass']=1;
			}
		}
	
	if ((getParameter('recepient')==1009)&&($g_fields_active==2)) {$ga_fields[$g_fields_active+1]['pass']=1;
	}
//        change_srt_text($ga_fields[$g_fields_active]['txi'],  $s_r);	
	//  - - - - - deactivate current active
	if ($g_fields_active >= 0) {
		// $g_fields_active  $ga_fields
		// alert($g_vpa[$ga_fields[$g_fields_active]['v']]);
		field_blink(true);
		$g_vpa[$ga_fields[$g_fields_active]['v']]['v'].Show(0, 1);

		// !!!!
		// store [val] ue here ????
	}


	//  - - - - - - set current active field
	$g_fields_active = $__id;
	
	//  - - - - - activate field
	var $ae = $ga_fields[$__id];
	if ($ae['v'] == -1) {
		switch($ae['t']) {
			// - - - - - - - -
			case 'm':
			// alert('int');
			// $ae['v'] = -1; // create_vpa('VIEW_ACCOUNT_INLET', 'create_pinpad', '-1', '-1');
			$ae['v'] = create_vpa('VIEW_ACCOUNT_INLET', 'create_pinpad', $ae['id'], '-1');
			cvp_PP_PinPress(0, 0, '_');

			break;

			// - - - - - - - -
			case 'i':
			// alert('int');
			// $ae['v'] = -1; // create_vpa('VIEW_ACCOUNT_INLET', 'create_pinpad', '-1', '-1');
			$ae['v'] = create_vpa('VIEW_ACCOUNT_INLET', 'create_pinpad', $ae['id'], '-1');
			cvp_PP_PinPress(0, 0, '_');
			break;

			// - - - - - - - -
			case 'e':
			// alert('enum');
			$ae['v'] = create_vpa('VIEW_ACCOUNT_INLET', 'create_enum', $ae['id'], '-1');
			select_fpar_enum('_');
			break;

			// - - - - - - - -
			case 'c':
			// alert('card');
			$ae['v'] = create_vpa('VIEW_ACCOUNT_INLET', 'create_card', 'card', '-1');
			// !!!! добаффить перерисовку контролов с тек. параметирами ($ae['val']) для пыннiв
			break;

			// - - - - - - - -
			case 't':
			// alert('card');
			$ae['v'] = create_vpa('VIEW_ACCOUNT_INLET_KEYS', 'create_keyboard', $ae['id'], '-1');
			$Arraytxi[$ae['id']]=$o_number_k.i;
			//alert('$ae[id] '+$ae['id']+', arrray '+$Arraytxi[$ae['id']]);
			// cvp_KP_PinPress('-1', null, null);
			break;

			// - - - - - - - -
			default:
			alert('attempt to create/active undefined field edit control, type: '+$ae['t']);
			break;
		}
	}
	else {
		$g_vpa[$ae['v']]['v'].Show(1, 1);
		//alert('$ae[id] '+$ae['id']+', arrray '+$Arraytxi[$ae['id']]+'$g_layout = '+$g_layout);
		$g_layout='rus';
		if (typeof($Arraytxi[$ae['id']])!='undefined') {$o_number_k.i=$Arraytxi[$ae['id']]; if (($ae['id']==104)||($ae['id']==105)){$g_layout='rusc'}};
	     }

	var $ae = $ga_fields[$g_fields_active];
	$s_number = $ae['val']; // = $s_r;

	// alert($ae['v']);
	$g_vpa[$parent_vpa]['relative_vpa'] = $ae['v'];

	// alert($g_vpa[$ae['v']]);
	// MjCRIODA($g_vpa);

	if (!$g_verify_all_fields) {
		//  - - - - - - update buttons
		if ($g_fields_active == 0) {
			/*
			change_srt_text($ga_buttbig[0]['txi'], LCP('button_main'));
			$ga_buttbig[0]['v'].Show(1, 1);
			$ga_buttbig[0]['o'].AddHandler($v['bl']['h']);
			*/
			// var $v0 = $ga_buttbig[0]['v'];
			$ga_buttbig[0]['v'].Show(1, 1);
			change_srt_text($ga_buttbig[0]['txi'], LCP('button_back'));
			// alert('here!');
			$ga_buttbig[0]['o'].AddHandler('goto_Loc("main.html")');
			// change_srt_text($ga_buttbig[0]['txi'], LCP('button_back'));
			// $v0.Show(1, 1);
			// alert('here!!!');
		}
		else {
			$ga_buttbig[0]['o'].AddHandler('activate_field('+($g_fields_active-1)+')');
			$ga_buttbig[0]['v'].Show(1, 1);
			// $ga_buttbig[0]['o'].AddHandler('activate_field(0)');
		}


		// check ablility to jump into next field
		$ga_buttbig[1]['v'].Show(0, 1);

		if ( (($g_fields_active+1) < $ga_fields.length) && ($ga_fields[$g_fields_active]['pass'] == 1) ) {
			$ga_buttbig[1]['o'].AddHandler('activate_field('+($g_fields_active+1)+')');
			$ga_buttbig[1]['v'].Show(1, 1);
			
		}


		if ( (($g_fields_active+1) == $ga_fields.length) && ($ga_fields[$g_fields_active]['pass'] == 1) ) {
			//alert('check is da set!!!');
			// alert('wow');


			$ga_buttbig[1]['o'].AddHandler('goto_Check()');
			$ga_buttbig[1]['v'].Show(1, 1);

		}
		if ((getParameter('recepient')==1008)&&($ga_fields[$g_fields_active]['pass'] == 1)&&($ga_fields[$g_fields_active]['val'] != '00000000158')){
			$ga_buttbig[1]['o'].AddHandler('goto_Check()');
		}


	}
	// - - - - - - - -
	/*
	if ($g_forced_mobile_selection === true) {
	alert('force mobile selection!!!');
	$ga_buttbig[1]['o'].AddHandler('alert("activate_mobile selection!!")');
	$ga_buttbig[1]['v'].Show(1, 1);
	}
	*/

	/*
	if () {
	// alert('check!!!');
	// $ga_buttbig[1]['o'].AddHandler('goto_Check()');

	}
	*/

	/*
	if ( (($g_fields_active+1) == $ga_fields.length) && ($ga_fields[$g_fields_active]['pass'] == 1) ) {
	// alert('check!!!');
	$ga_buttbig[1]['o'].AddHandler('goto_Check()');
	}
	*/

	// $ga_fields
}

//

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
var $g_is_check_played = false;

var $g_verify_all_fields = false;

function verify_fields() {

	var $_is_validated = false;
	if ($g_verify_all_fields) {
		$_is_validated = true;
		for (var $i=0; $i<$ga_fields.length; $i++) {
			if ($ga_fields[$i]['pass'] != 1) {
				$_is_validated = false;
				break;
			}
		}
	}
	else {
		$_is_validated = ($ga_fields[$g_fields_active]['pass'] == 1);
	}




	var $rr = false;

	if ($_is_validated) {
		change_srt_text($ga_buttbig[1]['txi'], LCP('button_next'));
		if ( (($g_fields_active+1) >= $ga_fields.length) || ($g_verify_all_fields)) {
			// $ga_buttbig[1]['o'].AddHandler('goto_Check()');

			if ($g_current_i_type == 'comm_plat') {
				// $ga_buttbig[1]['o'].AddHandler('goto_Loc()');
				// alert(goto_get_allurlparams());

				// alert('hara!');
				Parameters['account'] = $ga_fields[$g_fields_active]['val'];
				// если есть ввод счетчиков

				var $state = getParameter('state', '-1');
				if ($state == 'do_meters') {

					var $cnt = 0;
					var $meters_url = '';
					for ($vi in $ga_cptgl['meters']) {
						// MjCRIODA($ga_cptgl['meters'][$vi]);        // ['serial']
						// var $s_cntdta = encodeURIComponent($ga_cptgl['meters'][$vi]['serial']) +':'+$ga_fields[$cnt]['val'];
						var $s_cntdta = encodeURIComponent($vi) +':'+$ga_fields[$cnt]['val'];

						$meters_url += ( ($meters_url != '') ? ('|'+$s_cntdta) : $s_cntdta);
						$cnt++;

					}
					Parameters['meters'] = $meters_url;
				}
				// alert($meters_url);
				// alert(goto_get_allurlparams());
				// setParameter(, '55431');


				if ($state == 'do_meters') {
					//alert('dahhhh!');
					//alert($gs_localbase_included);
				if (getParameter('recepient')==131327){
					var $t_sum = 0;
					var $f_count = 0;
					Parameters['field99'] = readCookie('field99');
					if (!$gs_localbase_included) {
						CreateBase('0123456789', 100000);
						$gs_localbase_included = true;
					}
                                        Parameters['CURR_C1'] = GetIndex_InLocalBase(Parameters['field99']);;
					for (var $met in $ga_cptgl['meters']){
						var $t_met = $met.split('_');
						var $t_met2 = $met.split('__');
						if ($t_met[2] > 0){
							$t_sum = $t_sum + ((($ga_fields[$f_count]['val']-parseInt($ga_cptgl['meters'][$met]['prev_reading']))*parseFloat($t_met[2]+'.'+$t_met2[1])) + parseFloat($t_met[5] + '.' + $t_met2[2]));
						} else
						{
							$t_sum += parseInt($ga_fields[$f_count]['val']);
						}
						$f_count ++; 
					}
					Parameters['field500'] = $t_sum;
				}
					
					Parameters['field100'] = $ga_cptgl['client']['account'];
					$ga_buttbig[1]['o'].AddHandler('goto_Loc("checking.html?'+goto_get_allurlparams()+'");');
				}
				else {
					//alert('set!');
				if (getParameter('recepient')==131327){
					Parameters['field99'] = $ga_fields[$g_fields_active-1]['val'];
					writeCookie('field99',$ga_fields[$g_fields_active-1]['val'],1);
				}
					Parameters['state'] = 'auth_check';
					$ga_buttbig[1]['o'].AddHandler('goto_Loc("data-entry.html?'+goto_get_allurlparams()+'");');
					$gs_overload_check_page        = 'data-entry.html';
				}
				// $ga_buttbig[1]['o'].AddHandler('goto_Check()');
			}
			else
			{
				// alert('unset!');
				$ga_buttbig[1]['o'].AddHandler($gs_global_check_handler);
			}
		}
		else {
			if ((getParameter('recepient')==1008)&&(($ga_fields[$g_fields_active]['val'].length==11)&&($ga_fields[$g_fields_active]['val'] != '00000000158'))){
				$ga_fields[$g_fields_active+1]['val']='&nbsp';
				$ga_buttbig[1]['o'].AddHandler('goto_Check()');
			} else {
				$ga_buttbig[1]['o'].AddHandler('activate_field('+($g_fields_active+1)+')');
			}


		}
		$ga_buttbig[1]['v'].Show(1, 1);
		$rr = true;
		if (!$g_is_check_played) {
			$g_is_check_played = true;
			PlaySoundA('confirm_number');
		}

	}
	else {
		$ga_buttbig[1]['v'].Show(0, 1);

	}
	return $rr;
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function fields_preCheck() {


	var $recepient_potent = getParameter('recepient_potent', -1);

	/*
	if ( ($ga_jcfg['config']['ShowAutodetectWarning']) && ($recepient_potent != -1) ) {
	if ( ($ga_jcfg['config']['ShowAutodetectWarning']) ) {
	*/
	if ( ($ga_jcfg['config']['ShowAutodetectWarning'] != 0) && ($recepient_potent == '999') ) {
		// alert('here!');
		route_to_vp('-VIEW_MESSAGE', 'show_message_autodetect_warning', 'autodetect_warning', $g_current_vpa);
		// alert('here!');
		return;
	}

	var $opId = parseInt( getParameter('recepient', -1) );

	// $g_vpa[
	switch ($opId) {
		// - - - - - - - - - - - - - - -
		case 401:
		// MjCRIODA($ga_fields[0]);
		// MjCRIODA($g_vpa[$g_current_vpa]['v']);
		var $sfval = $ga_fields[0]['val'];
		var $v1 = ( parseInt($sfval.charAt(0)) + parseInt($sfval.charAt(1))*3 + parseInt($sfval.charAt(2))*7 + parseInt($sfval.charAt(3))*9 ) % 10;
		var $v2 = ( parseInt($sfval.charAt(4)) + parseInt($sfval.charAt(5))*3 + parseInt($sfval.charAt(6))*7 + parseInt($sfval.charAt(7))*9 ) % 10;
		var $vc = $v1 +''+ $v2;
		var $ve = $sfval.substring(8);

		if ($vc !== $ve) {
			route_to_vp('VIEW_MESSAGE' , 'show_message_precheckerr', 'precheckerr', $g_current_vpa);
		}
		else {
			goto_Check();
		}
		break;

		// - - - - - - - - - - - - - - -
		default:
		goto_Check();
		break;
	}

	// alert('fields_preCheck()');
}


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function show_message_precheckerr($__v) {
	var $v = $g_vpa[$__v]['v'];
	var $__s = $g_vpa[$__v]['s'];

	set_rect_text($v, [5, 05, $__s.r[2], 70], $__s, LCP('achtung'));

	$__s1 = SKP('VIEW_TEXT1');
	$__s1.f[3] = '#ff3333';

	var $txt = LCP('entered_code_controldigits_err');
	set_rect_text($v, [55, 210, 600, 70], $__s1, $txt);

}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function show_message_autodetect_warning($__v) {
	var $v = $g_vpa[$__v]['v'];
	var $__s = $g_vpa[$__v]['s'];


	PlaySoundA('confirm_number');

	set_rect_text($v, [5, 05, $__s.r[2], 70], $__s, LCP('achtung'));

	$__s1 = SKP('VIEW_TEXT1');
	$__s1.f[3] = '#ff3333';

	// var $txt = ;
	set_rect_text($v, [55, 310, 600, 70], $__s1, 'проверьте правильность ввода номера: ');


	var opId = getParameter('recepient', '-1');


	var $op = jcfg_findOperatorById(opId)
	if ($op == -1) goto_Main();

	var opNme = $op['name'];
	var opImg = $op['image'];

	//alert('hara!');
	// !!!!!
	var $xofs = 250;
	var $yofs = 150;

	var $sk = SKP('OPERATOR_ICON');
	var $o = $v.AddI($sk.bi, $xofs - Math.floor(($sk.bd[0]-$sk.d[0])/2), $yofs - Math.floor(($sk.bd[1]-$sk.d[1])/2));
	// $go_operator_icon = $v.AddI('op/'+opImg, $xofs, $yofs);
	$go_operator_icon = gfxa_ins_oper_logo($v, opImg, $xofs, $yofs, $sk.d[0], $sk.d[1], opNme);

	// MjCRIODA($ga_fields[0]);

	$__s1.f[1] = '35';
	$__s1.f[3] = '#773333';
	set_rect_text($v, [55, 370, 600, 70], $__s1, '8 ' + $ga_fields[0]['val']);


	$ga_buttbig[0]['v'].Show(1, 1);
	change_srt_text($ga_buttbig[0]['txi'], LCP('button_back'));
	$ga_buttbig[0]['o'].AddHandler('goto_Main()');

	$ga_buttbig[1]['v'].Show(1, 1);
	change_srt_text($ga_buttbig[1]['txi'], LCP('button_payment'));
	$ga_buttbig[1]['o'].AddHandler('goto_Check()');


	var $op = jcfg_findOperatorById($ga_inbase_found[0]);
	var opNme = $op["name"];
	var opImg = $op["image"];

	// MjCRIODA($go_operator_icon);
	/*
	var $iii = MJGA($go_operator_icon.i);
	$iii.src = $mj_g_img_pth+'op/'+opImg;
	*/


}


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// dohlaya!!!
function show_acc_fields($__v) {
	// alert($__v);
	// $__v, $__s, $__i, $__p, $__id

	// MjCRIODA($g_vpa[$__v]);

	var $v = $g_vpa[$__v]['v'];
	var $__s = $g_vpa[$__v]['s'];


	set_rect_text($v, [5, 05, $__s.r[2], 70], $__s, LCP('title_requizites') );

	$sk = SKP('OPERATOR_ICON');


	// MjCRIODA( Parameters );
	var opId = Parameters['recepient'];

	var ndOperator=GetNodeById(opId);
	var opNme = ndOperator.getElementsByTagName("name").item(0).text;
	var opImg = ndOperator.getElementsByTagName("image").item(0).text;
	// alert(opNme);


	// var $o = $__v.AddI($spg.bi, $xofs + $col*$spg.bd[0], $yofs + $row*$spg.bd[1]);
	var $xofs = 100;
	var $yofs = 170;

	var $o = $v.AddI($sk.bi, $xofs, $yofs);
	// $o.AddHandler('goto_Loc("data-entry.html?recepient='+opId+'")');
	$v.AddI('op/'+opImg, $xofs + 12, $yofs +  18);


	$skt = SKP('FORM_TEXT');
	set_rect_text($v, [30, 80, 450, 100], $skt, opNme);



	// alert();
}


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// create big buttons
var $ga_buttbig = new Array();

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function create_bigbut($__x) {

	// alert('wow');
	//  - - - - - -
	var $spb = SKP('BUTBIG');

	var $id = $ga_buttbig.length;

	$ga_buttbig[$id] = new Array();
	var $ae = $ga_buttbig[$id];


	//  - - - - next button
	$ae['v'] = new MJ_VP(cvp_G, -1, -1, -1, $spb.d[0], $spb.d[1], 'DIV');
	// MjCRIODA(MJGA($ae['v']['o'].i));
	// MJGA($ae['v']['o'].i).style['zIndex'] = '100';

	var $v = $ae['v'];

	var $x_ofs = 20;
	var $y_ofs = 20;
	if ('undefined' !== typeof($spb.r)) {
		$x_ofs = $spb.r[0];
		$y_ofs = $spb.r[1];
	}

	var $ress_ofs = 768;
	var $ress_ofs1 = 1024;
	if (!$is_ressur_mode) {
		$ress_ofs = 1024;
		$ress_ofs1 = 1280;
	}



	if ($__x == -2) {
		//                $v.o.MoveTo(1, 20, mj_G.Hpx - $spb.d[1] - 20);
		$v.o.MoveTo(1, $x_ofs, GTY($ress_ofs - $spb.d[1] - $y_ofs));
	}
	else {

		//                $v.o.MoveTo(1, mj_G.Wpx - $spb.d[0] - 20 , mj_G.Hpx - $spb.d[1] - 20+7);
		$v.o.MoveTo(1, GTX($ress_ofs1 - $spb.d[0]) - $x_ofs , GTY($ress_ofs - $spb.d[1] - $y_ofs));
	}

	// cvp_PP_Next.o.Border(1, '1px dotted red');
	var $imgf = 'nbut1_g0.gif';
	if ('undefined' !== typeof($spb.i)) {
		$imgf = $spb.i;
	}
	if (('undefined' !== typeof($spb.i_r)) && (-3 === $__x)) {
		$imgf = $spb.i_r;
	}

	var $o = $v.AddI($imgf, 0, 0);
	$ae['o'] = $o;
	//by default BUTTON_NEXT
	$ae['txi'] = set_rect_text($v, [0, ($spb.d[1]-$spb.f[1])/2+$spb.s[0]-10, $spb.d[0], $spb.f[1]], $spb, LCP('button_next'));

	$o.AddHandler('void(0)', $spb.d[0], $spb.d[1]);
	if ($__x == -2) {
		$o.AddKHMask(mjsc_Esc);
		//$o.AddKHMask(mjsc_f4);
		$o.AddKHMask(mjsc_l4);
	}
	else if ($__x == -3) {
		$o.AddKHMask(mjsc_Enter);
		//$o.AddKHMask(mjsc_f8);
		$o.AddKHMask(mjsc_r4);
	}

	$v.Finalize(0, 1);

	return $id;
}


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function bigbutA($__type, $__txt, $__handler) {
	var $id = -1;
	if($__type === 'left'){
		$id = 0;
	}else if($__type === 'right'){
		$id = 1;
	}else{
		return;
	}
	$ga_buttbig[$id]['v'].Show(1, 1);
	change_srt_text($ga_buttbig[$id]['txi'], $__txt);
	$ga_buttbig[$id]['o'].AddHandler($__handler);
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function create_bigbut_static_vp($__v, $__x, $__img, $__text, $__handler) {

	// alert('wow');
	// alert($__v);

	//  - - - - - -
	var $spb = SKP('BUTBIG');
	var $v = $g_vpa[$__v]['v'];

	//131313
	//        if ($__x == -12) {
	//             $spb.d = $spb.d12;
	//  }


	var $x = $v.o.x+$v.o.w-$spb.d[0]-500;
	var $y = $v.o.y+$v.o.h-$spb.d[1]+107;
	//        alert("$x="+$x+", $y="+$y+"\n"+"$v.o.x="+$v.o.x+", $v.o.y="+$v.o.y+"\n$v.o.w="+$v.o.w+"$v.o.h="+$v.o.h+".");
	var $x_ofs = 20;
	var $y_ofs = 20;
	var $y_ofsm = 460;
	var $x_ofsm = 700;
	if ('undefined' !== typeof($spb.r)) {
		$x_ofs = $spb.r[0];
		$y_ofs = $spb.r[1];
	}


	var $ress_ofs_1280 = 1280;
	var $ress_ofs_1024 = 1024;
	var $ress_ofs_1024_1 = 1024;

	if ($is_ressur_mode) {
		$ress_ofs_1280 = 1024;
		$ress_ofs_1024 = 786;
		$ress_ofs_1024_1 = 781;
	}



	var $x_koeff = $ress_ofs_1280/mj_G.Wpx;
	var $y_koeff = $ress_ofs_1024/mj_G.Hpx;
	if ($__x == -2) {
		$x = $x_ofs;
		//                $y = mj_G.Hpx - $spb.d[1] - 20;
		$y = $ress_ofs_1024 - $spb.d[1] - $y_ofs;
	}
	else if ($__x == -3) {
		//                $x = mj_G.Wpx - $spb.d[0] - 20;
		//                $y = mj_G.Hpx - $spb.d[1] - 20;
		$x = $ress_ofs_1280 - $spb.d[0] - $x_ofs;
		$y = $ress_ofs_1024 - $spb.d[1] - $y_ofs;
	}
	else if ($__x == -4) {
		//                $x = mj_G.Wpx - $spb.d[0] - 20;
		//                $y = mj_G.Hpx - $spb.d[1] - 20;
		$x = ($ress_ofs_1280 - $spb.d[0])/2;
		$y = $ress_ofs_1024_1 - $spb.d[1] - $y_ofs;
	}
	else if ($__x == -12) {
		$x = ($ress_ofs_1280 - ($spb.d[0])/2) - $x_ofsm;
		$y = $ress_ofs_1024_1 - $spb.d[1] - $y_ofsm;
	}
	else if ($__x == -10) {
		$x = 1020;
		//                $y = mj_G.Hpx - $spb.d[1] - 20;
		$y = 3;
	}
	
        else if ($__x == -20) {
		$x = 280;
		//                $y = mj_G.Hpx - $spb.d[1] - 20;
		$y = 700;
	}
        else if ($__x == -21) {
		$x = 750;
		//                $y = mj_G.Hpx - $spb.d[1] - 20;
		$y = 700;
	}
	else if ($__x == -30) {
		$x = 400;
		//                $y = mj_G.Hpx - $spb.d[1] - 20;
		$y = 740;
	}
        else if ($__x == -31) {
		$x = 80;
		//                $y = mj_G.Hpx - $spb.d[1] - 20;
		$y = 740;
	}

	else if ($__x == -40) {
		$x = 280;
		//                $y = mj_G.Hpx - $spb.d[1] - 20;
		$y = 400;
	}
        else if ($__x == -41) {
		$x = 780;
		//                $y = mj_G.Hpx - $spb.d[1] - 20;
		$y = 400;
	}

	//131313

	//$y += 7;

	//        alert("mj_G.Wpx="+mj_G.Wpx+", mj_G.Hpx="+mj_G.Hpx+ "\n$x="+$x+", $y="+$y+"\n"+"$v.o.x="+$v.o.x+", $v.o.y="+$v.o.y+"\n$y-$v.o.y="+($y-$v.o.y)+".");

	//        var $o = $v.AddI($__img, $x-$v.o.x, $y-$v.o.y);
	//        set_rect_text($v, [$x-$v.o.x, $y-$v.o.y+23, $spb.d[0], $spb.f[1]], $spb, $__text);
	var $o = $v.AddI($__img, $x-$v.o.x, $y-parseInt($v.o.y*$y_koeff));
	set_rect_text($v, [$x-$v.o.x, $y-parseInt(($v.o.y-23)*$y_koeff), $spb.d[0], $spb.f[1]], $spb, $__text);


	if ($__x == -12) {
		$o.AddHandler($__handler, 450, 450);
	}
	else {
		$o.AddHandler($__handler, $spb.d[0], $spb.d[1]);
	}

	if ($__x == -2) {
		$o.AddKHMask(mjsc_Esc);
		$o.AddKHMask(mjsc_l4);
	}
	else if ($__x == -3) {
		$o.AddKHMask(mjsc_Enter);
		$o.AddKHMask(mjsc_r4);
	}
}



// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function goto_get_allurlparams($__depr)
{
	var $a = new Array();

	if (arguments.length < 1) {
		$__depr = '';
	}
	$a = $__depr.split(' ');
	// MjCRIODA($a);


	var $s = '';
	
	if ( getParameter('recepient') == 1009 ) {
		Parameters['field104'] = 	Parameters['field110'];
		Parameters['field105'] = Parameters['field110'];
	}

	if ( getParameter('recepient') == 9999 ) {
		Parameters['field999'] = Parameters['field110'];
	}

	if ( getParameter('recepient') == 1999 ) {
		Parameters['field107'] = Parameters['field110'];
	}
	
	if ( getParameter('recepient') == 964 ) {
		Parameters['field102'] = escape(Parameters['field102'].translit().toUpperCase());
		Parameters['field103'] = Parameters['field103'].translit().toUpperCase();
	}

/*	if ( getParameter('recepient') == 10 ) {
		Parameters['field101']=0;
		if (readCookie('init_sum')!=null) { 
			if (readCookie('init_sum')==(Parameters['sum']/100)) {
				Parameters['field101'] =0;
			}
			else {
				Parameters['field101'] = readCookie('init_sum');
			}
		} 
	}*/

	for ($k in Parameters) {
		var $is_depr = false;
		for (var $d in $a) {
			if ($k == $a[$d]) {
				$is_depr = true;
				break;
			}
		}
		if ($is_depr) continue;
//		alert($k + ": " + Parameters[$k]);
//		alert(getParameter('recepient'));
		if ($k=='bank_name') 
			{
						/*if(location.href.indexOf('full-screen-message.html') == -1) 
							{       alert(Parameters[$k]);
								//alert(Parameters[$k]);                encodeURIComponent(escape(Parameters[$k]))
								$s += (($s !== '') ? '&' : '') + $k+'='+escape(Parameters[$k]);
							}
							else
							{
								alert('yopta');
								$s += (($s !== '') ? '&' : '') + $k+'='+escape(Parameters[$k]);
							}*/
				$s += (($s !== '') ? '&' : '') + $k+'='+escape(Parameters[$k]);
			}
		else
			{
					if ((getParameter('recepient')==1010)||(getParameter('recepient')==1999)||(getParameter('recepient')==9999)) {
						if ($k=='field100') {
							$s += (($s !== '') ? '&' : '') + $k+'='+Parameters[$k].replace(/\s/g,"").replace(/_/g,"");
						}
					} 

				if (((getParameter('recepient')==1009)||(getParameter('recepient')==1000)||(getParameter('recepient')==1003)||(getParameter('recepient')==1005)||(getParameter('recepient')==1007)||(getParameter('recepient')==1010))&&(location.href.indexOf('full-screen-message.html') == -1)){ 

					$s += (($s !== '') ? '&' : '') + $k+'='+Parameters[$k].split(" ").join("_");
				}
				else {  
						switch (getParameter('recepient')){
						    case '131316':
							if ($k=='account') {$s += (($s !== '') ? '&' : '') + $k+'=861'+Parameters[$k];}
							else {$s += (($s !== '') ? '&' : '') + $k+'='+Parameters[$k];}
							break;
							case '131317':
							if ($k=='account') {$s += (($s !== '') ? '&' : '') + $k+'=862'+Parameters[$k];}
							else {$s += (($s !== '') ? '&' : '') + $k+'='+Parameters[$k];}
							break;
							case '131318':
							if ($k=='account') {$s += (($s !== '') ? '&' : '') + $k+'=877'+Parameters[$k];}
							else {$s += (($s !== '') ? '&' : '') + $k+'='+Parameters[$k];}
							break;
							case '131319':
							if ($k=='account') {$s += (($s !== '') ? '&' : '') + $k+'=863'+Parameters[$k];}
							else {$s += (($s !== '') ? '&' : '') + $k+'='+Parameters[$k];}
							break;
							case '131320':
							if ($k=='account') {$s += (($s !== '') ? '&' : '') + $k+'=878'+Parameters[$k];}
							else {$s += (($s !== '') ? '&' : '') + $k+'='+Parameters[$k];}
							break;
							case '131321':
							if ($k=='account') {$s += (($s !== '') ? '&' : '') + $k+'=865'+Parameters[$k];}
							else {$s += (($s !== '') ? '&' : '') + $k+'='+Parameters[$k];}
							break;
							case '131322':
							if ($k=='account') {$s += (($s !== '') ? '&' : '') + $k+'=867'+Parameters[$k];}
							else {$s += (($s !== '') ? '&' : '') + $k+'='+Parameters[$k];}
							break;
							case '131323':
							if ($k=='account') {$s += (($s !== '') ? '&' : '') + $k+'=879'+Parameters[$k];}
							else {$s += (($s !== '') ? '&' : '') + $k+'='+Parameters[$k];}
							break;
							case '131324':
							if ($k=='account') {$s += (($s !== '') ? '&' : '') + $k+'=872'+Parameters[$k];}
							else {$s += (($s !== '') ? '&' : '') + $k+'='+Parameters[$k];}
							break;
    						case '131325':
							//alert(getParameter('ffield101'));
							if ($k=='account') {$s += (($s !== '') ? '&' : '') + $k+'='+getParameter('ffield101')+'||'+Parameters[$k];}
							else {$s += (($s !== '') ? '&' : '') + $k+'='+Parameters[$k];}
							break;
    						case '131327':
							//alert(getParameter('ffield101'));
							if ($k=='account') {$s += (($s !== '') ? '&' : '') + $k+'='+getParameter('ffield101')+'||'+Parameters[$k];}
							else {$s += (($s !== '') ? '&' : '') + $k+'='+Parameters[$k];}
							break;

    						case '131326':
							//alert(getParameter('ffield101'));
							if ($k=='account') {$s += (($s !== '') ? '&' : '') + $k+'='+encodeURIComponent(Parameters[$k]);}
							else {$s += (($s !== '') ? '&' : '') + $k+'='+Parameters[$k];}
							break;
							case '1008':
           						if ($k=='field101') {
									$s += (($s !== '') ? '&' : '') + $k+'='+Parameters[$k].replace(/\s/g,"_");
								}
								else {
									$s += (($s !== '') ? '&' : '') + $k+'='+Parameters[$k];
								}
							break;
							default:
								$s += (($s !== '') ? '&' : '') + $k+'='+Parameters[$k];
							break;
						}
				}
			}   
//$s += (($s !== '') ? '&' : '') + $k+'='+Parameters[$k];
		
	}

	return $s;

}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function create_info($__v) {

	var $v = $g_vpa[$__v]['v'];
	var $s = SKP('OPERATOR_ICON');
	// set_rect_text(cvp_G, [0, 970, 200, 20], $s, 'iface v'+$gs_iface_version);
	set_rect_text($v, [450, 670, 300, 20], $s, 'v'+$gs_iface_version);
	var $o = $v.AddI('print.gif', 450, 645);
	$o.SizeTo(1,300,140);
	$o.AddHandler("goto_Loc('data-entry.html?recepient=9998');", 450, 645);

	// alert('wow');
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function create_help($__v) {

	// alert($__v);
	// $g_help_backwidget = $__v;
	// var $v = $g_vpa[$__v]['v'];
	// var $v1 = g_vpa[$__v];
	// MjCRIODA($g_vpa[$__v]);

	/*
	mj_RT.Add
	mj_RT.Add('timer_refresh', 756, 0);
	*/

	//        route_to_vp($g_vpa[$__v]['p'], '', '-1', $__v);

	// MjCRIODA($v['p']);
	// alert($v);


}


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function create_metro_menu_level() {

}


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function create_metro_message($__v) {
	/*
	var $v = $g_vpa[$g_current_vpa]['v'];
	var $s = $g_vpa[$g_current_vpa]['s'];
	*/
	var $v = $g_vpa[$__v]['v'];
	var $s = $g_vpa[$__v]['s'];


	var $cmd = getParameter('cmd', '-1');
	// alert($state);
	// alert(document.location.href);



	if ($cmd === 'getmenu') {
		set_rect_text($v, [200, 250, $s.r[2], 3], $s, 'Найдена карта: '+$ga_metro_menu['CardNum']+'<br><br>Пожалуйста подождите...' );
	}
	else {
		set_rect_text($v, [200, 250, $s.r[2], 3], $s, LCP('metro_insert_card') );
	}

	$ga_buttbig[0]['v'].Show(1, 1);
	change_srt_text($ga_buttbig[0]['txi'], LCP('button_cancel'));
	$ga_buttbig[0]['o'].AddHandler('goto_Loc("main.html")');


}


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function create_metro_menu($__v) {


	// alert($__v);
	// $g_vpa[$g_current_vpa]['v'].Show(0, 1);

	var $metro_styles = '<style>'+SKP('METRO_STYLES').s+'</style>';

	var $v = $g_vpa[$__v]['v'];
	var $s = $g_vpa[$__v]['s'];

	var $s_id = $g_vpa[$__v]['i'];
	// alert($s_id);
	$a_tmp = $s_id.split('_');
	var $id = $a_tmp[0];
	var $ofs = 0;
	if ('undefined' !== typeof($a_tmp[1])) {
		$ofs = $a_tmp[1];
	}

	// alert($ofs);
	// MjCRIODA($a_tmp);

	// prev element
	var $id_prev = 0;
	if ($id != -1) {
		$id_prev = $ga_metro_menu['Menu'][$id][1];
	}
	// alert($id);


	var $skp_i = SKP('METRO_MENU_ITEM');
	var $l = $ga_metro_menu['Menu'].length;

	if ($l > 0) {
		set_rect_text($v, [500, 25, 475, 3], $s, 'Номер карты: ' + $ga_metro_menu['CardNum'] );
		set_rect_text($v, [15, 25, 475, 3], $s, 'Статус карты: ' + $metro_styles+$ga_metro_menu['Message'] );
	}
	else {
		if ($ga_metro_menu['CardNum'] != 0) {
			var $s1 = $s;
			$s1.f[4] = 'center';
			set_rect_text($v, [50, 125, 900, 3], $s, 'Номер карты: ' + $ga_metro_menu['CardNum'] );
			set_rect_text($v, [50, 325, 900, 3], $s, '&nbsp;'+$metro_styles+$ga_metro_menu['Message'] );
		}
		else {
			var $s1 = $s;
			$s1.f[4] = 'center';
			set_rect_text($v, [50, 225, 900, 3], $s, '&nbsp;'+$metro_styles+$ga_metro_menu['Message'] );
		}

	}


	var $ai = 0;
	var $y_ofs = 260;
	var $x_ofs = 20;

	// alert( $ga_metro_menu['Menu'].length );
	var $iy = 0;
	var $cols = 2;
	var $cnt = -1;
	for (var $i=0; $i<$l; $i++) {
		// alert($ga_metro_menu['Menu'][$i][2]);
		if ($ga_metro_menu['Menu'][$i][1] != $id_prev) continue;
		$cnt++;
		if ($cnt < $ofs) continue;

		var $wx = $skp_i.d[0];
		var $wy = $skp_i.d[1];
		// var $x = $x_ofs + ($wx+10)*($iy%$cols);
		var $x = $x_ofs + ($wx+10)*($iy%$cols);
		var $y = $y_ofs + ($wy+5)*(Math.floor($iy/$cols));

		var $o = $v.AddI($skp_i.i, $x, $y);
		set_rect_text($v, [$x, $y+5, $wx, $wy], $skp_i, $ga_metro_menu['Menu'][$i][2]);
		if ($ga_metro_menu['Menu'][$i][4] !== 0) {
			$o.AddHandler("route_to_vp('VIEW_METRO_MENU', 'create_metro_menu', '"+$ga_metro_menu['Menu'][$i][0]+"', '"+$__v+"')", $skp_i.d[0], $skp_i.d[1]);
		}
		else {
			// $o.AddHandler("goto_Check('VIEW_METRO_MENU', 'create_metro_menu', '"+$ga_metro_menu['Menu'][$i][0]+"', '"+$__v+"')");
			$__s = 'checking.html'+'?recepient=' + Parameters['recepient'] + '&field100='+$ga_metro_menu['Menu'][$i][0];
			$o.AddHandler('goto_Loc("'+$__s+'")', $skp_i.d[0], $skp_i.d[1]);
		}
		// $o.AddHandler("alert('test!')");
		//

		$iy++;
		if ($iy >= 12) {
			var $t_ofs = $cnt+1;
			// alert($t_ofs);

			// if ($t_ofs < $l) {
			$g_vpa[$__v]['br']['n'] = LCP('button_more');
			$g_vpa[$__v]['br']['s'] = 1;
			// $s = $__id+'_'+($items_outputed+$perp_ofs);
			// alert($s);
			$g_vpa[$__v]['br']['h'] = "route_to_vp('VIEW_METRO_MENU', 'create_metro_menu', '"+$ga_metro_menu['Menu'][$i][0]+'_'+$t_ofs+"', '"+$__v+"')";

			/*
			$ga_buttbig[1]['v'].Show(1, 1);
			change_srt_text($ga_buttbig[1]['txi'], LCP('button_next'));
			// $ga_buttbig[0]['o'].AddHandler('goto_Loc("message.html?res=1")');
			$ga_buttbig[1]['o'].AddHandler("route_to_vp('VIEW_METRO_MENU', 'create_metro_menu', '"+$ga_metro_menu['Menu'][$i][0]+'_'+$t_ofs+"', '"+$__v+"')");
			// }
			*/


			break;


		}


		// set_rect_text($v, [$x_ofs, $y_ofs, $skp_i.d[0], $skp_i.d[1]], $skp_i, $ga_metro_menu['Menu'][$i][2]);
		// $y_ofs += 18;

		// $i++;
	}
	// alert($i);



	// !!!!!
	var $xofs = 50;
	var $yofs = 100;

	/*
	var $ga_metro_menu = {
	CardNum: 92001112201,
	CardStatus: '<div class="elInfoNormal">ПД многоразовый на 90 дней<br>Остаток поездок: 7<br>Начало действия: 09.03.2004<br>Окончание действия: 07.06.2004<br>Багаж: 1</div><div class="elInfoBlack">Доплата разрешена</div>',
	ItemsNum: 19,
	Menu: [[1, 0, 'ПБ многоразовый по тарифу', 0, 1],[2, 1, '5 Поездок', 60, 0],[3, 1, '10 Поездок', 120, 0],[4, 1, '20 Поездок', 240, 0],[5, 1, '30 Поездок', 360, 0],[6, 0, 'ПБ на 50 поездок и 30 дней', 456, 0],[7, 0, 'ПБ на 25 поездок и 15 дней', 233, 0],[8, 0, 'ПБ на 40 поездок и 30 дней', 368, 0],[9, 0, 'ПБ на 20 поездок и 15 дней', 188, 1],[10, 0, 'ПБ на 10 поездок и 7 дней', 98, 0],[11, 0, 'ПБ многоразовый на 90 дней', 0, 1],[12, 11, '3 Поездки', 36, 0],[13, 11, '20 Поездок', 240, 0],[14, 11, '42 Поездки', 493, 0],[15, 11, '60 Поездок', 690, 0],[16, 0, 'Единый на месяц на БСК', 750, 0],[17, 0, 'Проверка 0123456789 123456789 123456789 123456789', 140, 0],[18, 0, 'Проверка 0123456789 123456789 123456789', 280, 0],[19, 0, 'Проверка 0123456789 123456789', 420, 0]]
	}

	*/

	// var
	/*
	set_rect_text($v, [5, 5, $s.r[2], 3], $s, LCP('title_requizites') );
	set_rect_text($v['v'], [5, 10, $__s.r[2], 70], $__s, getParameter('cmd', 'unknown') );
	*/
	// var $sp = SKP('PINPAD');


	$ga_buttbig[0]['v'].Show(1, 1);
	change_srt_text($ga_buttbig[0]['txi'], LCP('button_back'));
	// $ga_buttbig[0]['o'].AddHandler('goto_Loc("message.html?res=1")');
	$ga_buttbig[0]['o'].AddHandler('goto_Loc("main.html")');

}


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function PlaySoundA($__s) {
	if ($is_ressur_mode) {
		return;
	}



	var $vol  = 10; // from config

	if ($vol > 0) {
		var $fname = '';
		if ('undefined' !== typeof(LCP('sound_files')[$__s])) {
			$fname = LCP('sound_files')[$__s];
		}
		if ($fname.length > 1) {
			// alert($fname.length);
			goto_LocNos('command.html?cmd=sound.play&parm='+$fname);
		}
	}

}



// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
function create_locale_select($__v) {
	var $v = $g_vpa[$__v]['v'];
	var $s = $g_vpa[$__v]['s'];



	var $s_dstloc = 'ru';
	if ($mj_g_locale == 'ru') {
		$s_dstloc = 'en';
	}

	// var $o = $v.AddI('locale_ru.jpg', 0, 0);
	Parameters['locale'] = $s_dstloc;
	var $o = $v.AddI('locale_'+$s_dstloc+'.jpg', 0, 0);
	$o.AddHandler('goto_Loc("'+$mj_g_docnme+'?'+goto_get_allurlparams()+'")', 160, 80);

	/*
	// var $o = $v.AddI('locale_'+$mj_g_locale+'.jpg', 200, 0);
	var $o = $v.AddI('locale_'+$mj_g_locale+'.jpg', 200, 0);
	Parameters['locale'] = 'ru';
	$o.AddHandler('goto_Loc("'+$mj_g_docnme+'?'+goto_get_allurlparams()+'")');
	// $o.AddHandler("route_to_vp('VIEW_METRO_MENU', 'create_metro_menu', '"+$ga_metro_menu['Menu'][$i][0]+"', '"+$__v+"')");

	*/
	/*
	var $o = $v.AddI($skp_i.i, $x, $y);
	set_rect_text($v, [$x, $y+5, $wx, $wy], $skp_i, $ga_metro_menu['Menu'][$i][2]);
	if ($ga_metro_menu['Menu'][$i][4] !== 0) {
	$o.AddHandler("route_to_vp('VIEW_METRO_MENU', 'create_metro_menu', '"+$ga_metro_menu['Menu'][$i][0]+"', '"+$__v+"')");

	*/
}

String.prototype.translit = (function(){
    var L = {
'А':'A','а':'a','Б':'B','б':'b','В':'V','в':'v','Г':'G','г':'g',
'Д':'D','д':'d','Е':'E','е':'e','Ё':'Yo','ё':'yo','Ж':'Zh','ж':'zh',
'З':'Z','з':'z','И':'I','и':'i','Й':'Y','й':'y','К':'K','к':'k',
'Л':'L','л':'l','М':'M','м':'m','Н':'N','н':'n','О':'O','о':'o',
'П':'P','п':'p','Р':'R','р':'r','С':'S','с':'s','Т':'T','т':'t',
'У':'U','у':'u','Ф':'F','ф':'f','Х':'Kh','х':'kh','Ц':'Ts','ц':'ts',
'Ч':'Ch','ч':'ch','Ш':'Sh','ш':'sh','Щ':'Sch','щ':'sch','Ъ':'"','ъ':'"',
'Ы':'Y','ы':'y','Ь':"'",'ь':"'",'Э':'E','э':'e','Ю':'Yu','ю':'yu',
'Я':'Ya','я':'ya'
        },
        r = '',
        k;
    for (k in L) r += k;
    r = new RegExp('[' + r + ']', 'g');
    k = function(a){
        return a in L ? L[a] : '';
    };
    return function(){
        return this.replace(r, k);
    };
})();

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// [ file include done. ]
$iface_runtime_js = true;




// MjCRIODA($xml1);

