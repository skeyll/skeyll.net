function LoadCSV(game, language) {
    // var csvfile = new XMLHttpRequest();
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

    function csvfile(dataPath) {
        const request = new XMLHttpRequest();
        request.addEventListener('load', (event) => {
            const response = event.target.responseText;
            output_svg.innerHTML = response;
            
            csvfile.open("get", dataPath, true);
            csvfile.send(null);
        });
    };
    
    console.log(csvfile(loadFile));
    csvfile.onload = function(){
        ConvertCSV(csvfile(loadFile).responseText, game);
    }
}
//for main menu
function ConvertCSV(csvdata, game){
    
    console.log(csvdata);
	var resultdata = [];
    var tmp = csvdata.split("\n");
    var matchCount = 0;

    for(var i = 0; i < tmp.length; i++){
        var tmpROW = tmp[i].split(',');
        if( tmpROW != '' ){
            resultdata[i] = tmp[i].split(',');
            console.log(resultdata[i]);
            if( resultdata[i] == game ){
                matchCount++;

                //The amount content to display on main menu.
                if(matchCount >= 2){
                    break;
                }
            }
        }
    }

	var outputHTML = '';
    if( resultdata !== undefined ){
		for( var i = 0; i < resultdata.length; i++ ){
            if(resultdata[i][1] != game){
                continue;
            }
            outputHTML += ('<div class ="newsContent"><div class="newsDate">' + year + " " + date + '</div>' + '<div class="newsDetail">' +  resultdata[i][3] + '</div></div>');
		} 
    }
    document.getElementById('history').insertAdjacentHTML('afterbegin', outputHTML);
}

