function encode() {

    var plain_text = document.getElementById("message").value;
    var upperOrLower = document.getElementById("UpperOrLower").value;
    var cypher_text = [];
    var loweralphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","g","r","s",
                        "t","u","v","w","x","y","z"]
    var upperalphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
                       "T","U","V","W","X","Y","Z"]
    
    if(upperOrLower == "1"){
        var lower = plain_text.toLowerCase();
        for(var idx=0; idx<lower.length; idx++){
            var lowerinput = loweralphabet.indexOf(lower[idx]);
            if(lowerinput == -1 ) {
                cypher_text.push(lower[idx]);
            }
            else{
                var lowercoded = (lowerinput+97);
                cypher_text.push(lowercoded);
            }
        }
    }
    if(upperOrLower == "2"){
        var upper = plain_text.toUpperCase();
        for(var i=0; i<upper.length; i++){
            var upperinput = upperalphabet.indexOf(upper[i]);
            if(upperinput == -1 ) {
                cypher_text.push(upper[i]);
            }
            else{
                var coded = (upperinput+65);
                cypher_text.push(coded);
            }
        }
    }
document.getElementById("output").innerHTML = cypher_text.join(" ");
}

function decode() {
    
    var plain_text = document.getElementById("output").innerHTML;
    var upperOrLower = document.getElementById("UpperOrLower").value;
    var cypher_text = [];
    var loweralphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","g","r","s",
                        "t","u","v","w","x","y","z"]
    var upperalphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
                       "T","U","V","W","X","Y","Z"]
    
    var splitt=plain_text.split(" ");
    
    if(upperOrLower == "1"){
        for(var idx=0; idx<splitt.length; idx++){
            var chara=String.fromCharCode(splitt[idx]);
            cypher_text.push(chara);
        }
    }
    else if(upperOrLower == "2"){
        for(var i=0; i<splitt.length; i++){
             var chara1=String.fromCharCode(splitt[i]);
            cypher_text.push(chara1);
        }
    }
document.getElementById("output2").innerHTML = cypher_text.join(" ");
}