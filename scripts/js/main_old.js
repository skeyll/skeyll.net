function footer(needPolicy, language){
var footerText = "";
//I can't know the way to use boolean, so use 0 or 1 of intenger.
if(needPolicy == 1){
   switch(language){
    case "EN":
        footerText += '<p>　<a href="https://skeyll.net/policy">PrivacyPolicy</a><br>';
        break;
    case "JA":
        footerText += '<p>　<a href="https://skeyll.net/ja/policy">プライバシーポリシー</a><br>';
        break;
    case "CN":
        footerText += '<p>　<a href="https://skeyll.net/cn/policy">个人信息保&#25252;方&#38024;</a><br>';
        break;
    } 
}
footerText += '<div class="footerLine">　&#169;2022 Skeyll.<br>　<a href="https://www.instagram.com/skeylls2/"><font color="#FFFFFF">Instagram</font></a> / <a href="https://twitter.com/skeylls2"><font color="#FFFFFF">Twitter</font></a> / <a href="https://github.com/skeyll"><font color="#FFFFFF">Github</font></a> / <a href="https://www.youtube.com/channel/UC6MQjMSA5IqqQxhN1hYnPAw"><font color="#FFFFFF">YouTube</font></a></div></p>';
document.getElementById('footer').insertAdjacentHTML('afterbegin',footerText);
}

function translate(){
    var textData = [];
    var buttonData = [];
    var lang = GetUrlValue(0);
    //Load data
    switch(lang){
        case "JA":
            textData = [["language","日本語"],["name",'名前（任意）'],["address",'メールアドレス<font color="red">（必須）</font>'],["comments",'お問い合わせ内容<font color="red">（必須）</font>'],["category",'お問い合わせの種類<font color="red">（必須）</font>'],["inquiry",'質問'],["feedback",'評価'],["request",'要望'],["report",'バグ報告'],["other",'その他']];
            buttonData = [["submit","送信"]];
            break;
        case "CN":
            textData = [["language","中文"],["name",'名（自&#36873;）'],["address",'&#37038;箱<font color="red">（必&#39035;）</font>'],["comments",'内容<font color="red">（必&#39035;）</font>'],["category",'内容&#31867;型<font color="red">（必&#39035;）</font>'],["inquiry",'&#38382;&#39064;'],["feedback",'回&#39304;'],["request",'要求'],["report",'&#38169;&#35823;&#25253;告'],["other",'其他']];
            buttonData = [["submit",' Submit ']];
            break;
        default:
            textData = [["language","English"],["name",'Name（Optional）'],["address",'Mail Address<font color="red">（Required）</font>'],["comments",'Tell me about it<font color="red">（Required）</font>'],["category",'Chose a category<font color="red">（Required）</font>'],["inquiry",'Inquiry'],["feedback",'Feedback'],["request",'Request'],["report",'Bug report'],["other",'Other']];
            buttonData = [["submit","Submit"]];
            break;
        }
    //Insert text data
    for(i = 0; i < textData.length; i++){
        document.getElementById(textData[i][0]).insertAdjacentHTML('afterbegin',textData[i][1] +'<br>');
    }
    document.getElementById(buttonData[0][0]).value = buttonData[0][1];

    ChangeLink(GetUrlValue(1));
}

function GetUrlValue(keyPos) {
    if(document.location.search.length == 0){
        return "";
    }
    var urlValues = document.location.search.substring(1).split('&');
    var urlParameter = urlValues[keyPos].split('=');
    return urlParameter[1];
}
function ChangeLink(type){
    document.getElementById("EN").value ="https://skeyll.net/contact/?lang=EN&type=" + type;
    document.getElementById("JA").value ="https://skeyll.net/contact/?lang=JA&type=" + type;
    document.getElementById("CN").value ="https://skeyll.net/contact/?lang=CN&type=" + type;
}