<?php /* @var $this Controller */ ?>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="language" content="en">

	<!-- blueprint CSS framework -->
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/screen.css" media="screen, projection">
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/print.css" media="print">
	<!--[if lt IE 8]>
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/ie.css" media="screen, projection">
	<![endif]-->

	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/main.css">
	<link rel="stylesheet" type="text/css" href="<?php echo Yii::app()->request->baseUrl; ?>/css/form.css">

	<title><?php echo CHtml::encode($this->pageTitle); ?></title>
</head>

<body>

<div class="container" id="page">

	<?php echo $content; ?>

	<div id="footer">
		Copyright &copy; <?php echo date('Y'); ?> by My Company.<br/>
		All Rights Reserved.<br/>
		<?php echo Yii::powered(); ?>
	</div><!-- footer -->

</div><!-- page -->

<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.1.1/socket.io.dev.js"></script>
<script src="https://code.jquery.com/jquery-1.11.1.js"></script>

<script type="text/javascript">
	const socket = io.connect('http://localhost:8080');
	socket.on('connection_custom', function (data) {
		console.log(data.url);
		fetch(data.url, {
			method: 'get'
		}).then(function(res) {
			res.json().then(function(data){
				console.log(data);
				if(data.success === true){
					let parent = document.getElementById('widget');
					while (parent.firstChild) {
						parent.removeChild(parent.firstChild);
					}
					data.news.forEach(e => {
						let d = document.createElement("div");
						d.setAttribute("id", e.id);
						d.innerHTML = e.name + ' - ' + e.content;
						parent.appendChild(d);
					})
				}
			})
		}).catch(function(err) {
			console.log(err);
		});
	});
</script>

</body>
</html>
