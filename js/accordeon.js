let flag = true;
$(".accordeon-header").on("click", function(){
	if(flag = !$(this).hasClass('active'))
		{
			$(this).toggleClass('active', flag);
			$(this).next().slideDown(500);
		}else{
			$(this).toggleClass('active', flag);
			$(this).next().slideUp(500);
		}
})