// Create an HTML file
// Create a CSS file
// link the CSS file to the HTML file
// The page should have a header, body and footer
// Change the background color of the body to be blue
// Insert Three images next to each other


<!DOCTYPE HTML>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="C:\Users\DELL I5\Desktop\New folder\warmUp\WarmUp9">
	<title>Sofian Saleh</title>
</head>
<body>
	<center>
<h1>Welcome to my page</h1>
<button id = 'button1' type="button">
	<a href="https://www.yahoo.com/">Click her to go to Yahoo!></a>
</button>
<button id = 'button2' type="button">
	<a href="https://www.rbk.org/">Click her to go to RBK!></a>
</button>
</center>
<p>other major websites</p>
<ul>
	<li><a href="https://www.facebook.com/">Facebook</a></li>
	<li><a href="https://www.twitter.com/">Twitter</a></li>
	<li><a href="https://www.google.com/">Google</a></li>
</ul>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Facebook.svg/1200px-Facebook.svg.png">
<img src="https://upload.wikimedia.org/wikipedia/fr/thumb/c/c8/Twitter_Bird.svg/1200px-Twitter_Bird.svg.png">
<img src="https://www.usine-digitale.fr/mediatheque/5/0/0/000305005_homePageUne/logo-google-g.jpg">
<script type="text/javascript">
	var image = document.getElementsByTagName('img')
	function images(array){
	for(var i = 0; i < array.length; i++){
		array[i].style.height = '200px';
		array[i].style.width = '400px';
	}
	
}
images(image);
</script>
</body>
<footer>
	<p>COPYRIGHT CLAIMER ALL RIGHTS RESERVE TO THIER OWNERS</p>
</footer>
</html>

