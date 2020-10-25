<?php

$nomPrenom = $_POST["nomPrenom"];
$email = $_POST["email"];
$mobile = $_POST["mobile"];
$message = $_POST["message"];
$nbPers = $_POST["nbPers"];
$date = $_POST["date"];
$heure = $_POST["heure"];

// Email Receiver Address

$receiver = "marwen.bentaleb@gmail.com";

// Email Contenent
$subject = "Contact Bon plan Fast Food";
$okMsg = "<div class='alert alert-success'>Thank You! I will be in touch</div>";
$notOkMsg = "<div class='alert alert-danger'>Sorry there was an error sending your message. Please try again later</div>";

$message = "
			<html>
				<head>
					<title>Bon plan Fast Food email</title>
				</head>
				<body>
					<table width='80%' border='0' align='center' cellpadding='0' cellspacing='0'>
					  <tr>
						<td colspan='2' align='center' valign='top'><img style=' margin-top: 15px; width: 150px;' src='http://www.msit-demo.fr/092020-bon-plan-fast-food/logo-color.png'></td>
					  </tr>
					  <tr>
						<td width='30%' align='right'>&nbsp;</td>
						<td align='left'>&nbsp;</td>
					  </tr>
					  <tr>
						<td align='right' valign='top' style='border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 5px 7px 0;'><strong>Name:</strong></td>
						<td align='left' valign='top' style='border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 0 7px 5px;'>" . $nomPrenom . "</td>
					  </tr>
					  <tr>
						<td align='right' valign='top' style='border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 5px 7px 0;'><strong>E-mail:</strong></td>
						<td align='left' valign='top' style='border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 0 7px 5px;'>" . $email . "</td>
					  </tr>
					  <tr>
						<td align='right' valign='top' style='border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 5px 7px 0;'><strong>Téléphone:</strong></td>
						<td align='left' valign='top' style='border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 0 7px 5px;'>" . $mobile . "</td>
					  </tr>
					  <tr>
						<td align='right' valign='top' style='border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 5px 7px 0;'><strong>Nombre de personnes:</strong></td>
						<td align='left' valign='top' style='border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 0 7px 5px;'>" . $nbPers . "</td>
					  </tr>
					  <tr>
						<td align='right' valign='top' style='border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 5px 7px 0;'><strong>Date:</strong></td>
						<td align='left' valign='top' style='border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 0 7px 5px;'>" . $date . "</td>
					  </tr>
					  <tr>
						<td align='right' valign='top' style='border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 5px 7px 0;'><strong>Heure:</strong></td>
						<td align='left' valign='top' style='border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 0 7px 5px;'>" . $heure . "</td>
					  </tr>
					  <tr>
						<td align='right' valign='top' style='border-top:1px solid #dfdfdf; border-bottom:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 5px 7px 0;'><strong>Message:</strong></td>
						<td align='left' valign='top' style='border-top:1px solid #dfdfdf; border-bottom:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 0 7px 5px;'>" . nl2br($message) . "</td>
					  </tr>
					</table>
				</body>
			</html>
		";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <' . $email . '>' . "\r\n";

if (mail($receiver, $subject, $message, $headers)) {
	//Success Message
	echo "Votre message a bien été envoyé.";
} else {
	//Faild Message
	echo "Votre message n'a pas pu être envoyé!";
}
