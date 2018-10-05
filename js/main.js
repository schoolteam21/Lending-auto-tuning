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
		popup.querySelector('.popup__collection_item_1').setAttribute('data-url', 'url(' + this.querySelector(".section-2__example_pic").getAttribute("data-img") + ')')
		popup.querySelector('.popup__collection_item_2').setAttribute('data-url', 'url(' + this.querySelector(".section-2__example_pic").getAttribute("data-img-hover") + ')')
		popup.querySelector('.popup__slide_svipe_button_left').setAttribute('data-url', 'url(' + this.querySelector(".section-2__example_pic").getAttribute("data-img-hover") + ')')	
		popup.querySelector('.popup__slide_svipe_button_right').setAttribute('data-url', 'url(' + this.querySelector(".section-2__example_pic").getAttribute("data-img") + ')')


		let listArr = this.querySelector('.section-2__example_description').innerText.split(', ');
		let strList = '<div class="popup__list_title">' + this.querySelector('.section-2__example_title').innerText + '</div>';
		for(let i = 0; i < listArr.length; i++){
			strList += '<li>' + listArr[i][0].toUpperCase() + listArr[i].slice(1) + '</li>';
		}
		popup.querySelector('.popup__list').innerHTML = strList;
		popup.style.display = 'flex';
		document.body.style.overflow = 'hidden';
}
for (var i = 0; i < wrapperExample.length; i++) {
	wrapperExample[i].addEventListener('click', fillingPopup);
}
function closePopup(e) {
	if(e.target.className == 'popup__close' || e.target.className == "popup__close_x"){	
		let collect = this.querySelectorAll('.popup__collection_item');
		for (var i = 0; i < collect.length; i++) {
			(collect[i].classList.contains('active_slide'))?collect[i].classList.remove('active_slide'):0;
		}
		collect[0].classList.add('active_slide');
		popup.style.display = 'none';
		document.body.style.overflow = 'scroll';
		this.querySelector('.popup__slide_svipe_button_left').style.display = 'none';
		this.querySelector('.popup__slide_svipe_button_right').style.display = 'block';
	}
}
function slide(elem, scope){
	let self = scope;
		self.querySelector(".main_pic").style.backgroundImage = elem.getAttribute('data-url');
		let collect = self.querySelectorAll('.popup__collection_item');
		for (var i = 0; i < collect.length; i++) {
			(collect[i].classList.contains('active_slide'))?collect[i].classList.remove('active_slide'):null;
		}
		elem.classList.add('active_slide');
		if(parseInt(elem.className.match(/\d/i)[0], 10) == 2){
			self.querySelector('.popup__slide_svipe_button_left').style.display = 'block';
			self.querySelector('.popup__slide_svipe_button_right').style.display = 'none';
		}else{
			self.querySelector('.popup__slide_svipe_button_left').style.display = 'none';
			self.querySelector('.popup__slide_svipe_button_right').style.display = 'block';
		}
	}

function slider(e){
	let target = e.target;
	let className = target.classList;
	let svipeElem;
	if(className[0] == 'slide_svipe_button_right'){
		svipeElem =	this.querySelector('.active_slide').nextElementSibling;
	}
	if(className[0] == 'slide_svipe_button_left'){
		svipeElem = this.querySelector('.active_slide').previousElementSibling;
	}
	if((className[1] == 'popup__collection_item') && (!target.classList.contains('active_slide'))){ 
		svipeElem = target;
	}
	slide(svipeElem, this)	
}

function headerSlider(e){
	if(e.target.classList[1] == 'header__slide_svipe_button_right'){
		let activElem = this.querySelector('.active')
		if(this.querySelector('.active').nextElementSibling != null){
			this.querySelector('.header__slide_title').innerHTML = activElem.nextElementSibling.getAttribute('data-title');
			this.querySelector('.header__slider').style.backgroundImage = activElem.nextElementSibling.getAttribute('data-url');
			activElem.nextElementSibling.classList.add('active');
			activElem.classList.remove('active');
		}else{
			this.querySelector('.header__slide_title').innerHTML = activElem.previousElementSibling.previousElementSibling.getAttribute('data-title');
			this.querySelector('.header__slider').style.backgroundImage = activElem.previousElementSibling.previousElementSibling.getAttribute('data-url');
			activElem.previousElementSibling.previousElementSibling.classList.add('active');
			activElem.classList.remove('active');
		}

	}
	if(e.target.classList[1] == 'header__slide_svipe_button_left'){
		let activElem = this.querySelector('.active')
		if(this.querySelector('.active').previousElementSibling != null){
			this.querySelector('.header__slide_title').innerHTML = activElem.previousElementSibling.getAttribute('data-title');
			this.querySelector('.header__slider').style.backgroundImage = activElem.previousElementSibling.getAttribute('data-url');
			activElem.previousElementSibling.classList.add('active');
			activElem.classList.remove('active');
		}else{
			this.querySelector('.header__slide_title').innerHTML = activElem.nextElementSibling.nextElementSibling.getAttribute('data-title');
			this.querySelector('.header__slider').style.backgroundImage = activElem.nextElementSibling.nextElementSibling.getAttribute('data-url');
			activElem.nextElementSibling.nextElementSibling.classList.add('active');
			activElem.classList.remove('active');
		}
	}
	if(e.target.classList[0] == 'change_slide_radio'){
		let changeList = this.querySelectorAll('.change_slide_radio');
		this.querySelector('.header__slider').style.backgroundImage = e.target.getAttribute('data-url')
		for (var i = 0; i < changeList.length; i++) {
			changeList[i].classList.remove('active');
		}
		e.target.classList.add('active');
	}
}


popup.addEventListener('click', closePopup);
popup.addEventListener('click', slider);
header.addEventListener('click', headerSlider);
