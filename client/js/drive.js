//Client ID: 232808760554-d091a1u5asar1o3g2mv3f9fik3gl53ek.apps.googleusercontent.com
//Client Secret: lGQWIhi0aGpEHQQgWGrABukt
$(document).ready(function(){
     
    // client id of the project

    var clientId = "232808760554-d091a1u5asar1o3g2mv3f9fik3gl53ek.apps.googleusercontent.com";

    // redirect_uri of the project

    var redirect_uri = "http://localhost/Test/upload.html";

    // scope of the project

    var scope = "https://www.googleapis.com/auth/drive";

    // the url to which the user is redirected to

    var url = "";


    // this is event click listener for the button

    $("#login").click(function(){

       // this is the method which will be invoked it takes four parameters

       signIn(clientId,redirect_uri,scope,url);

    });

    function signIn(clientId,redirect_uri,scope,url){
     
       // the actual url to which the user is redirected to 

       url = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri="+redirect_uri
       +"&prompt=consent&response_type=code&client_id="+clientId+"&scope="+scope
       +"&access_type=offline";

       // this line makes the user redirected to the url

      //  window.location = url;
      //  window.open(url,"Upload","width=700,height=500");
       var w = 600;
       var h = 625;
       var left = (window.screen.width / 2) - ((w / 2) + 10);
       var top = (window.screen.height / 2) - ((h / 2) + 50);
       var newPage = window.open(url,"Upload","width=600,height=625,left="+left+",top="+top);
    }




});
