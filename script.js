document.addEventListener('DOMContentLoaded', function(){
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    
    var text = document.getElementById("text");

    btn1.addEventListener('click', function(){
        var words = text.textContent.split(" ");
        var newWords = [];
        for (var i = 0; i < words.length; i++) {
            if (words[i].length > 8) {
                newWords.push("<span style='background-color: yellow'>" + words[i] + "</span>");
            } else {
                newWords.push(words[i]);
            }
        }
        text.innerHTML = newWords.join(" ");
        newWords = [];
    });

    btn2.addEventListener('click', function() {
        var updatedText = text.innerHTML
            .replace(/\?/g, '🤔')
            .replace(/\!/g, '😲');
        text.innerHTML = updatedText;
    });

    btn3.addEventListener('click', function() {
        //count words
        var words = text.textContent.split(" ");
        var wordCount = words.length;
        alert("Number of words: " + wordCount);
    });
})


