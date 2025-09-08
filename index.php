<html lang="pt-br">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>RM-Garage</title>
	<link rel="stylesheet" href="css/style.css">
	<meta name="descripition" content="conteudo do meu site.">
	<meta name="keywords" content="palavras,separadas,por,virgula">
	<meta name="author" content="Pedro">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Oswald:wght@200..700&display=swap"
		rel="stylesheet">
	<link rel="shortcut icon" type="image-x/png" href="./Imagens/logos-rmgarage.ico">
</head>

<body>

	<header style="border-bottom: 3px solid #eb2d2d;">

		<div class="container">

			<div class="logo">
				<img src="Imagens/logo.jpg" alt="">
			</div><!--logo-->

			<nav class="desktop">

				<ul>
					<li><a href="home">Home</a></li>
					<li><a href="vendas">Vendas</a></li>
					<li><a href="sobre">Sobre</a></li>
					<li><a href="#contact">Contato</a></li> <!--ESSE LINK FAZ REFERENCIA A SECTION DE CONTATO-->

				</ul>

			</nav><!--desktop-->


			<nav class="mobile">

				<ul>
					<li><a href="home">Home</a></li>
					<li><a href="vendas">Vendas</a></li>
					<li><a href="sobre">Sobre</a></li>
					<li><a href="#contact">Contato</a></li> <!--ESSE LINK FAZ REFERENCIA A SECTION DE CONTATO-->
				</ul>

			</nav><!--mobile-->


			<div class="clear"></div><!--clear-->

		</div><!--container-->

	</header>

	

<?php
if (isset($_GET['url'])) {
	if (file_exists($_GET['url']) . '.html') {
		include($_GET['url'] . '.html');
	} else {
		include('404.html');
	}
} else {
	include('home.html');
}
?>

<footer>
		<div class="container">

			<nav>

				<ul>
					<li><a href="home">Home</a></li>
					<li><a href="vendas">Vendas</a></li>
					<li><a href="sobre">Sobre</a></li>
					<li><a href="#contact">Contato</a></li>
				</ul>

			</nav>
			<div class="clear"></div><!--clear-->
			<p>Todos os direitos reservados</p>

		</div><!--contact-->
	</footer>

	<script src="Js/jquery.js"></script>
	<script src="Js/scroll_contatos.js"></script>
	<script src="Js/functions.js"></script>
	<script src="Js/Slider_Depoimentos_Veiculos.js"></script>
	<script src="Js/slider_depoimento_home.js"></script>
	<Script src="Js/responsive_menu.js"></Script>
	<script src="js/jquery.form.min.js"></script>

</body>

</html>