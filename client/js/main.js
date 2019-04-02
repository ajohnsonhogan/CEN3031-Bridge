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
      });

function preview_image(event) 
{
 var reader = new FileReader();
 reader.onload = function()
 {
  var output = document.getElementById('output_image');
  output.src = reader.result;
 }
 reader.readAsDataURL(event.target.files[0]);
}


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
