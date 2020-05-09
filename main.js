var text = "";
var input = document.getElementById("barcodeInput").value;

// Text to image converter using html2canvas
function barcode2img(){
    html2canvas(document.querySelector("#barcodeText")).then(canvas => {
        document.body.appendChild(canvas);
        var dataURL = canvas.toDataURL("image/jpeg");
        document.getElementById("barcodeIMG").src = canvas.toDataURL();
    });
}

// Disable spacebar
$("#barcodeInput").keypress(function (evt) {

    var keycode = evt.charCode || evt.keyCode;
    if (keycode  == 32) { 
      return false;
    }
  });

// Dynamic font switcher
$("#fontPicker").change(function() {
    $('#barcodeText').css("font-family", $(this).val());
});

// Updates font after changing
$(document).on('change','#fontPicker',function(){
    grabText()
});


//Text updater
function grabText() {
    input = document.getElementById("barcodeInput").value;

    if (document.getElementById("barcodeInput").value != ""){               //If something is in input box
    
        if ($('#fontPicker option:selected').text() == "TEXT"){             //If the font == text
            $('#barcodeText').css({margin: '-20px= 0px'});
                text = input;
                text.replace('*','');                                       //Remove start and stop delimiters
                document.getElementById("barcodeText").innerHTML = text;
                
            } else{
                $('#barcodeText').css({margin: '8px 0px'});
                text = "*" + input + "*";                                   //Add start and stop delimiters
                document.getElementById("barcodeText").innerHTML = text;
        }


    } else{
        document.getElementById("barcodeText").innerHTML = "";              //Fail-safe
    }

}


