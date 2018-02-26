function encode() {

    var plain_text = document.getElementById("message").value;
    var num_picked = document.getElementById("numPicked").value;
    num_picked = parseInt(num_picked);
    var cypher_text = [];
    var alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","g",
        "r","s","t","u","v","w","x","y","z"]
    var lower = plain_text.toLowerCase();
    
    for(var idx=0; idx<lower.length; idx++){
        var input = alphabet.indexOf(lower[idx]);
        console.log(input);
        if(input == -1 ) {
            cypher_text.push(lower[idx]);
        }
        else{
            var coded = (input+num_picked)%26;
            console.log(coded);
            var letter = alphabet[coded];
            cypher_text.push(letter);
        }
    }
    document.getElementById("output").innerHTML = cypher_text.join("");
}
function decode() {
    var plain_text = document.getElementById("output").innerHTML;
    var num_picked = document.getElementById("numPicked").value;
    num_picked = parseInt(num_picked);
    var cypher_text = [];
    var alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","g",
        "r","s","t","u","v","w","x","y","z"]
    var lower = plain_text.toLowerCase();
    
    for(var i=0; i<lower.length; i++){
        var input2 = alphabet.indexOf(lower[i]);
        if(input2 == -1 ) {
            cypher_text.push(lower[i]);
        }
        else{
            var coded = (input2-num_picked)%26;
            console.log(coded);
            var letter = alphabet[coded];
            cypher_text.push(letter);
        }
    }
    document.getElementById("output2").innerHTML = cypher_text.join("");
}