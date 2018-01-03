var button_ja = document.getElementById("button-ja");
button_ja.addEventListener("click", 
    function () {
        document.body.classList.remove('hidden-ja');
        document.body.classList.add('hidden-en');
    }, false);

var button_en = document.getElementById("button-en");
button_en.addEventListener("click", 
    function () {
        document.body.classList.remove('hidden-en');
        document.body.classList.add('hidden-ja');
    }, false);