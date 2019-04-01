$.get("nav.html", function(data){
        $("#nav-placeholder").replaceWith(data);
      });
      /* popover script */
      $(document).ready(function(){
        $('[data-toggle="popover"]').popover({ trigger: "hover" });   
      });