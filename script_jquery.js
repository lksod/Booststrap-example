$(function(){	// chama uma função para conferir se foi carregado //
	$('#azul').click(function(){ 	// agora dentro da função após o botão ser clicado //
		$('p').css("color", "blue");	// vai mudar os titulos do h1 para vermelho, no caso de um id diferente de h1 deve colo o id no lugar de h1 '#exemplo'// 
		$('p').fadeOut();
	});

	$('#vermelho').click(function(){ 	// agora dentro da função após o botão ser clicado //
		$('p').css("color", "red");	// vai mudar os titulos do h1 para vermelho, no caso de um id diferente de h1 deve colo o id no lugar de h1 '#exemplo'// 
		$('p').fadeOut();
	});
});



