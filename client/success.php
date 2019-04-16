<!DOCTYPE html>
<html>
  <head>
	  
    <!-- css style sheets -->
    <!-- google fonts -->
    <link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i" rel="stylesheet">

    <!-- font awesome icon font -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    
    <!-- bootstrap style sheet -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">


    <!-- in file style sheet -->
    <link rel="stylesheet" href="styles/main.css">
  </head>  <body ng-app="petreeApp">
	  
	  

	Thank you for your payment. Your transaction has been completed, and a receipt for your purchase has been emailed to you. Log into your PayPal account to view transaction details.
    
    
     <!-- TX: {{ getTransactionID() }} -->
    <!--cVbxvFGl4yiZmgd_uz6Skq_hLefNSLYNjH-CN0y3eNrk73YkIi1QIhdJ7HO -->
	<!--
    <form method=post action="https://www.sandbox.paypal.com/cgi-bin/webscr">
		<input type ="hidden" name="cmd" value="_notify-synch">
		<input type ="hidden" name="tx" value="6LL139396F504153W">
		<input type ="hidden" name="at" value="cVbxvFGl4yiZmgd_uz6Skq_hLefNSLYNjH-CN0y3eNrk73YkIi1QIhdJ7HO">
		<input type ="submit" value="PDT">
    </form> -->

    <?php
$pp_hostname = "www.sandbox.paypal.com"; // Change to www.sandbox.paypal.com to test against sandbox
// read the post from PayPal system and add 'cmd'
$req = 'cmd=_notify-synch';
 
$tx_token = "6LL139396F504153W";// $_GET['tx']; try hardcode
$auth_token = "cVbxvFGl4yiZmgd_uz6Skq_hLefNSLYNjH-CN0y3eNrk73YkIi1QIhdJ7HO";
$req .= "&tx=$tx_token&at=$auth_token";
 
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://$pp_hostname/cgi-bin/webscr");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $req);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 1);
//set cacert.pem verisign certificate path in curl using 'CURLOPT_CAINFO' field here,
//if your server does not bundled with default verisign certificates.
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
curl_setopt($ch, CURLOPT_HTTPHEADER, array("Host: $pp_hostname"));
$res = curl_exec($ch);
curl_close($ch);
if(!$res){
    //HTTP ERROR
}else{
     // parse the data
    $lines = explode("\n", trim($res));
    $keyarray = array();
    if (strcmp ($lines[0], "SUCCESS") == 0) {
        for ($i = 1; $i < count($lines); $i++) {
            $temp = explode("=", $lines[$i],2);
            $keyarray[urldecode($temp[0])] = urldecode($temp[1]);
        }
    // check the payment_status is Completed
    // check that txn_id has not been previously processed
    // check that receiver_email is your Primary PayPal email
    // check that payment_amount/payment_currency are correct
    // process payment
    $firstname = $keyarray['first_name'];
    $lastname = $keyarray['last_name'];
    $itemname = $keyarray['item_name'];
    $amount = $keyarray['payment_gross'];
     
    echo ("<p><h3>Thank you for your purchase!</h3></p>");
     
    echo ("<b>Payment Details</b><br>\n");
    echo ("<li>Name: $firstname $lastname</li>\n");
    echo ("<li>Item: $itemname</li>\n");
    echo ("<li>Amount: $amount</li>\n");
    echo ("");
    }
    else if (strcmp ($lines[0], "FAIL") == 0) {
        // log for manual investigation
    }
}
 
?>
 
Your transaction has been completed, and a receipt for your purchase has been emailed to you.<br> You may log into your account at <a href='https://www.paypal.com'>www.paypal.com</a> to view details of this transaction.<br>
    
    
    <!--
    <script>
    ipn.verify(req.body, callback_function);
    </script> -->
    
    <!-- javascript files-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>
    <script src="https://code.angularjs.org/1.4.3/angular.js"></script>
    <script src="js/app.js"></script>
    <script src="js/controllers/orderController.js"></script>
    <script src="js/main.js"></script>
    <!--<script src="PhotograFly/node_modules/paypal-ipn/lib/paypal-ipn.js"></script> -->
  </body>
</html>
