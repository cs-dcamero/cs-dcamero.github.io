function bigger()
{
//alert("hello, world!");
document.getElementById("inputText").style.fontSize = "2em";
}

function fancySchmancy()
{
    document.getElementById("inputText").style.textDecoration = "underline";
    document.getElementById("inputText").style.fontWeight = "bold";
    document.getElementById("inputText").style.color = "blue";
}

function undoAll()
{
    document.getElementById("inputText").style.textDecoration = "none";
    document.getElementById("inputText").style.fontWeight = "normal";
    document.getElementById("inputText").style.color = "black";
}

function Uppies()
{
    document.getElementById("inputText").style.textTransform = "uppercase";

    var str = document.getElementById("inputText").value;
    var parts = str.split(".");
    str = parts.join("-Moo");

    document.getElementById("inputText").value = str;
}   