	/*Triagle JQuery*/

$(".section-1__about_bot").css('border', $('.section-1__about').width() / 2 + "px solid transparent");
$(".section-1__about_bot").css('border-top', "100px solid #DEDEDE");
$(window).resize(function(){
	$(".section-1__about_bot").css('border', $('.section-1__about').width() / 2 + "px solid transparent");
	$(".section-1__about_bot").css('border-top', "100px solid #DEDEDE");
});

	/*JS Popup_example*/

let wrapperExample = document.querySelectorAll('.section-2__example');
let popup = document.querySelector('.popup__example');

function fillingPopup(e){
		popup.querySelector('.popup__slider').style.backgroundImage = popup.querySelector('.popup__collection_item_1').style.backgroundImage = 'url(' + this.querySelector(".section-2__example_pic").getAttribute("data-img") + ')';
		popup.querySelector('.popup__collection_item_2').style.backgroundImage = 'url(' + this.querySelector(".section-2__example_pic").getAttribute("data-img-hover") + ')';
			
		
		let listArr = this.querySelector('.section-2__example_description').innerText.split(', ');
		let strList = '<div class="popup__list_title">' + this.querySelector('.section-2__example_title').innerText + '</div>';
		for(let i = 0; i < listArr.length; i++){
			/*let li = document.createElement('LI');*/
			
			strList += '<li>' + listArr[i][0].toUpperCase() + listArr[i].slice(1) + '</li>';
			/*li.innerHTML = listArr[i][0].toUpperCase() + listArr[i].slice(1);
			.appendChild(li);*/
		}
		popup.querySelector('.popup__list').innerHTML = strList;
		popup.style.display = 'flex';
}
for (var i = 0; i < wrapperExample.length; i++) {
	wrapperExample[i].addEventListener('click', fillingPopup);
}
function closePopup(e) {
	(e.target.className == 'popup__close')?popup.style.display = 'none' : null;
}
popup.addEventListener('click', closePopup)