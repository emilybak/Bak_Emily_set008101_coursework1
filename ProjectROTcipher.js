function encode() {

    var plain_text = document.getElementById("message").value;
    var cypher_text = [];
    var alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","g",
        "r","s","t","u","v","w","x","y","z"]
    var lower = plain_text.toLowerCase();
    
    for(var idx=0; idx<lower.length; idx++){
        input = alphabet.indexOf(lower[idx]);
        if(input == -1 ) {
            cypher_text.push(lower[idx]);
        }
        else{
        var coded = (input+13)%26;
        var letter = alphabet[coded];
        cypher_text.push(letter);
        }
    }
document.getElementById("output").innerHTML = cypher_text.join("");
}
function decode() {
    var plain_text = document.getElementById("output").innerHTML;
    var cypher_text = [];
    var alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","g",
        "r","s","t","u","v","w","x","y","z"]
    var lower = plain_text.toLowerCase();
    
    for(var idx=0; idx<lower.length; idx++){
        input = alphabet.indexOf(lower[idx]);
        if(input == -1 ) {
            cypher_text.push(lower[idx]);
        }
        else{
        var coded = (input+13)%26;
        var letter = alphabet[coded];
        cypher_text.push(letter);
        }
    }
document.getElementById("output2").innerHTML = cypher_text.join("");
}
