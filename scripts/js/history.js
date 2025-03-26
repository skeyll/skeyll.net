function LoadCSV(language) {
    var csvfile = new XMLHttpRequest();
    var loadFile = "";

    switch(language){
        case "JA":
            loadFile = "https://skeyll.net/resources/history_ja.csv";
            break;
        case "CN":
            loadFile = "https://skeyll.net/resources/history_cn.csv";
            break;
        default:
            loadFile = "https://skeyll.net/resources/history.csv";
            break;
    }

    csvfile.open("get", loadFile, true);
    csvfile.send(null);

    csvfile.onload = function(){
        ConvertCSV(csvfile.responseText, language);
    }
}

function ConvertCSV(csvdata, language){
	var resultdata = [];
    var tmp = csvdata.split("\n");
    for(var i = 0; i < tmp.length; i++){
        var tmpROW = tmp[i].split(',');
        if( tmpROW !== '' ){
            resultdata[i] = tmp[i].split(',');
        }
    }

	var outputHTML = '';
	if( resultdata !== undefined ){
		for( var i = 0; i < resultdata.length - 1; i++ ){
            outputHTML += (ReturnURL(resultdata[i][0], resultdata[i][1], resultdata[i][4], language) + '<div class="detail">' + resultdata[i][2] + '(' +resultdata[i][3] + ')</div></a>');
		} 
    }
    document.getElementById('history').insertAdjacentHTML('afterbegin', outputHTML);
}

function ReturnURL(date, type, year, language) {
    switch (type) {
        case "TGA":
            switch(language){
                case "JA":
                    return '<a href="https://thegodaim.skeyll.net/ja/" class ="historyContent"><div class="title">' + year + " " + date + '<br> The GOD AIM</div>';
                case "CN":
                    return '<a href="https://thegodaim.skeyll.net/cn/" class ="historyContent"><div class="title">' + year + " " + date + '<br> The GOD AIM</div>';
                default:
                    return '<a href="https://thegodaim.skeyll.net/" class ="historyContent"><div class="title">' + year + " " + date + '<br> The GOD AIM</div>';
            }
        case "BS":
            switch(language){
                case "JA":
                    return '<a href="https://battlesound.skeyll.net/ja/" class ="historyContent"><div class="title">' + year + " " + date + '<br> Battle Sound</div>';
                case "CN":
                    return '<a href="https://battlesound.skeyll.net/cn/" class ="historyContent"><div class="title">' + year + " " + date + '<br> &#25112;斗音&#20048;</div>';
                default:
                    return '<a href="https://battlesound.skeyll.net/" class ="historyContent"><div class="title">' + year + " " + date + '<br> Battle Sound</div>';
            }
        case "PON":
            return '<a href="https://ponolf.skeyll.net/" class ="historyContent"><div class="title">' + year + " " + date + '<br> Ponolf</div>';
        case "WEB":
            switch(language){
                case "JA":
                    return '<a href="https://skeyll.net/ja/" class ="historyContent"><div class="title">' + year + " " + date + '<br> Webサイト</div>';
                case "CN":
                    return '<a href="https://skeyll.net/cn/" class ="historyContent"><div class="title">' + year + " " + date + '<br> 网站</div>';
                default:
                    return '<a href="https://skeyll.net/" class ="historyContent"><div class="title">' + year + " " + date + '<br> WebSite</div>';
            }
        case "BLOGE":
            return '<a href="https://blog.skeyll.net/" class ="historyContent"><div class="title">' + year + " " + date + '<br> Blog(en)</div>';
            
        case "BLOGJ":
            return '<a href="https://skeyll.hateblo.jp/" class ="historyContent"><div class="title">' + year + " "  + date + 'Blog(jp)</div>';
    }
}