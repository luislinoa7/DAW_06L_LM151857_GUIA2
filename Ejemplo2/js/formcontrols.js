function init(){
    var form = document.getElementById('form');
    form.onsubmit = function(){
    createform(document.frmconf.selcontrol.value,document.frmconf.txtnum.value);
    }
    }
    function createform(control, numero){
    var htmlform, tag, i;
    var formview = document.getElementById('view');
    htmlform = "<div class=\"row position-relative\">";
    htmlform += "<form name=\"miform\">\n";
    htmlform += '<h1 class="display-1 text-center">Formulario dinámico</h1>';
    with(document){
    switch(control){
        case "text":
        case "password":
        for(i=0; i<numero; i++){
        tag = "<input class=\"form-control\" type=\"" + control + "\" name=\"" + control + (i+1) + "\" required placeholder=\"Ingrese los datos en el campo " + control + "\" /><br>\n";
        htmlform += tag;
        }
        break;
        case "textarea":
        for(i=0; i<numero; i++){
        tag = "<textarea class=\"form-control\" name=\"" + control + (i+1) + "\" required placeholder=\"Ingrese los datos en el campo " + control + "\"></textarea><br />\n";
        htmlform += tag;
    }
        break;
        case "checkbox":
       for(i=0; i<numero; i++){
       tag = "<div>\n<input class=\"form-check-input\" type=\"" + control + "\" name=\"" + control + (i+1) + "\" id=\"" + control + (i+1) + "\" />\n";
       tag += "<label class=\"form-check-label\" for=\"" + control + (i+1) + "\">\n";
       tag += control + (i+1) + "</label>\n</div>" + "\n";
       htmlform += tag;
    }
       break;
       case "radio":
       for(i=0; i<numero; i++){
       tag = "<div>\n<label class=\"form-check-label\" for=\"" + control + (i+1) + "\">\n";
       tag += "\t<input class=\"form-check-input\" type=\"" + control + "\" name=\"" + control + "\" id=\"" + control + (i+1) + "\" />\n";
       tag += "\t<span>" + control + (i+1) + "</span>\n</label>\n</div>" + "\n";
       htmlform += tag;
    }
       break;
       case "file":
       for(i=0; i<numero; i++){
       tag = "<label class=\"custom-file-input file-blue\"><br />\n";
       tag += "\t<input class=\"form-control\" type=\"file\" name=\"" + control + (i+1) + "\" /><br />\n";
       tag += "</label><br />\n";
       htmlform += tag; 
    }
       break;
       case "button":
       for(i=0; i<numero; i++){
       tag = "<button class=\"btn btn-primary m-1\" name=\"" + control + (i+1) + "\">" + control + (i+1) + "</button><br />\n";
    }
    return;
break;
}
htmlform += "</form>\n";
}
htmlform += "</div>";
formview.innerHTML = htmlform;
}
window.onload = init;



