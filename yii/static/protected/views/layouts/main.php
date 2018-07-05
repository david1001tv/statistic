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

<script type="text/javascript">

	fetch('http://localhost:8080/api/get/select/all', {
          method: 'get'
        }).then(function(res) {
					res.json().then(function(data){
						console.log(data);
						data.news.forEach(e => {
							let parent = document.getElementById('widget');
							let d = document.createElement("div");
							d.innerHTML = e.name + ' - ' + e.content;
							parent.appendChild(d);
						})
					})
        }).catch(function(err) {
          // Error :(
		});

	setInterval(function () {
        fetch('http://localhost:8080/api/get/select/new', {
          method: 'get'
        }).then(function(res) {res.json().then(function(data){
						console.log(data);
						if(data.success === true){
							data.news.forEach(e => {
								let parent = document.getElementById('widget');
								let d = document.createElement("div");
								d.innerHTML = e.name + ' - ' + e.content;
								parent.appendChild(d);
							})
						}
					})
        }).catch(function(err) {
          // Error :(
        });
    }, 1000)
</script>

</body>
</html>
