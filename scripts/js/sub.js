function LoadCSV(game ,language) {
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
        ConvertCSV(csvfile.responseText, game, language);
    }
}

function ConvertCSV(csvdata, game, language){
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
		for( var i = 0; i < resultdata.length; i++ ){
            if(resultdata[i][1] != game){
                continue;
            }
            outputHTML += (ReturnURL(resultdata[i][0], resultdata[i][1], resultdata[i][4], language) + '<div class="detail">' +  resultdata[i][3] + '</div></a>');
		} 
    }
    document.getElementById('history').insertAdjacentHTML('afterbegin', outputHTML);
}

function ReturnURL(date, type, year, language) {
    switch (type) {
        case "TGA":
            switch(language){
                case "JA":
                    return '<a href="https://thegodaim.skeyll.net/ja/" class ="historyContent"><div class="title">' + year + " " + date + ' The GOD AIM</div>';
                case "CN":
                    return '<a href="https://thegodaim.skeyll.net/cn/" class ="historyContent"><div class="title">' + year + " " + date + ' The GOD AIM</div>';
                default:
                    return '<a href="https://thegodaim.skeyll.net/" class ="historyContent"><div class="title">' + year + " "  + date + ' The GOD AIM</div>';
            }
        case "BS":
            switch(language){
                case "JA":
                    return '<a href="https://battlesound.skeyll.net/ja/" class ="historyContent"><div class="title">' + year + " "  + date + ' Battle Sound</div>';
                case "CN":
                    return '<a href="https://battlesound.skeyll.net/cn/" class ="historyContent"><div class="title">' + year + " "  + date + ' Battle Sound</div>';
                default:
                    return '<a href="https://battlesound.skeyll.net/" class ="historyContent"><div class="title">' + year + " "  + date + ' Battle Sound</div>';
            }
        case "WEB":
            switch(language){
                case "JA":
                    return '<a href="https://skeyll.net/ja/" class ="historyContent"><div class="title">' + year + " "  + date + 'Website</div>';
                case "CN":
                    return '<a href="https://skeyll.net/cn/" class ="historyContent"><div class="title">' + year + " "  + date + 'Website</div>';
                default:
                    return '<a href="https://skeyll.net/" class ="historyContent"><div class="title">' + year + " "  + date + 'Website</div>';
            }
        case "BLOGE":
            return '<a href="https://blog.skeyll.net/" class ="historyContent"><div class="title">' + year + " "  + date + 'Blog(en)</div>';

        case "BLOGJ":
            return '<a href="https://skeyll.hateblo.jp/" class ="historyContent"><div class="title">' + year + " "  + date + 'Blog(jp)</div>';
    }
}