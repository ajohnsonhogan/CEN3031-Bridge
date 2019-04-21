$.get("nav.html", function(data){
        $("#nav-placeholder").replaceWith(data);
      });
/* Other buttons toggle hide and show jquery */
$('input[name="picSize"]').click(function(e) {
  if(e.target.value === 'Other') {
    $('#sizeText').show();
  } else {
    $('#sizeText').hide();
  }
});




// When the user clicks on the button, open the modal 
var showLogin = function() {
	document.getElementById('adminModal').style.display = "block";
	document.getElementsByClassName('modalID')[0].focus();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == document.getElementById('adminModal')) {
    document.getElementById('adminModal').style.display = "none";
  }
}

$('#sizeText').hide();

$('input[name="picMedium"]').click(function(f) {
  if(f.target.value === 'Other') {
    $('#mediumText').show();
  } else {
    $('#mediumText').hide();
  }
});

$('#mediumText').hide();

var mediumPrice = 0;
var sizePrice = 0;
var imageSelected = false;
var sizeSelected = false;
var mediumSelected = false;

$('input[name="picMedium"]').click(function(f) {
  if(f.target.value === 'Matte') {
    mediumPrice = 1;
  } if(f.target.value === 'Glossy') {
    mediumPrice = 2;
  } if(f.target.value === 'Large') {
    mediumPrice = 3;
  } else {
    mediumPrice = mediumPrice;
  }
});

$('input[name="picSize"]').click(function(f) {
  if(f.target.value === 'Small') {
    sizePrice = 1;
  } if(f.target.value === 'Medium') {
    sizePrice = 2;
  } if(f.target.value === 'Large') {
    sizePrice = 3;
  } else {
    sizePrice = sizePrice;
  }
  sizeSelected = true;
  console.log("size selected");
  checkAllSelected();
});

var fileList;

function preview_image(event) 
{
  fileList = $('#image').prop('files');
  var reader = new FileReader();
  reader.onload = function()
  {
    document.getElementById('browse_button').style.marginTop = "0px";
    document.getElementById('browse_button').classList.remove("btn-primary");
    document.getElementById('browse_button').classList.add("btn-default");
    var output = document.getElementById('output_image');
    output.style.display = "inline";
    output.src = reader.result;
 }
  reader.readAsDataURL(event.target.files[0]);
  imageSelected = true;
  console.log("image selected");
  checkAllSelected();
}

function selectSize() {
  console.log("size selected");
  sizeSelected = true;
  checkAllSelected();
}

function checkAllSelected() {
  if (imageSelected && mediumSelected && sizeSelected) {
    document.getElementById('temp_add_to_cart').style.remove = "btn-disabled";
  }
}

function onCartClick() {
  window.stop();
    document.getElementById('paypal-button-container').style.display = "block";
    document.getElementById('paypal-button-container').style.display = "block";
    document.getElementById('temp_add_to_cart').style.display = "none";
}

var parseQueryString = function( queryString ) {
    var params = {}, queries, temp, i, l;
    // Split into key/value pairs
    queries = queryString.split("&");
    // Convert the array of strings into an object
    for ( i = 0, l = queries.length; i < l; i++ ) {
        temp = queries[i].split('=');
        params[temp[0]] = temp[1];
    }
    return params;
};

function getPrice() {
  $("#overallPrice").html(sizePrice + mediumPrice);
  //sizePrice=0;
  //mediumPrice=0;
}





$("#getPrice").click(function() {
  getPrice();
});



/* popover script */
$(document).ready(function(){
  $('[data-toggle="popover"]').popover({ trigger: "hover" });   
});

var _validFileExtensions = [".jpg", ".jpeg", ".bmp", ".gif", ".png"];    
function ValidateSingleInput(oInput) {
  if (oInput.type == "file") {
    var sFileName = oInput.value;
    if (sFileName.length > 0) {
      var blnValid = false;
      for (var j = 0; j < _validFileExtensions.length; j++) {
          var sCurExtension = _validFileExtensions[j];
          if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
              blnValid = true;
              break;
          }
      }
      return true;
    }
  }
} 
