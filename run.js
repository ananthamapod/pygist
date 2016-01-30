
function loadXMLDoc(theURL){
    /*
    Downloads the html content of any given webpage. In this case a github gist rawusercontent. 
    */
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari, SeaMonkey
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            run_python(xmlhttp.responseText);

        }
    }
    xmlhttp.open("GET", theURL, false);
    xmlhttp.send();
}

function run_python(code){

    console.log(">>>")

    console.log(code);

    Sk.configure({output:console.log});

    eval(Sk.importMainWithBody("<stdin>", false, "print('the python works!')", true));
}



$(document).ready(function() {
console.log('Welcome to pygist!')

console.log("I'm going to run the code on this page, cool?")

loadXMLDoc(window.location.href);



});
