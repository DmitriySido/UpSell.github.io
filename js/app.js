	/*Обработка нажатия на бургер при адаптиве*/
	document.addEventListener("DOMContentLoaded", function(){
		document.getElementById("burger").addEventListener("click", function(){
			document.querySelector("header").classList.toggle("open");
		})
	})
	
	/*Анимация при скроле*/
	const scrollItems = document.querySelectorAll('.scroll-item')

	const scrollAnimation = () =>{ //Чтобы при скорле добавлялся класс nimation-class и к нему пременялись стили из CSS
		let windowCenter = (window.innerHeight / 1) + window.scrollY;
		scrollItems.forEach(el => {
			let scrollOffset = el.offsetTop + (el.offsetHeight / 1);
			if(windowCenter >= scrollOffset){
				el.classList.add('animation-class');
			}
		});
	}
	/*Конец анимаций  при скроле*/

	//ВЫзов функций
	scrollAnimation();
	window.addEventListener('scroll', () => {
		scrollAnimation();
	});

	new Swiper('.comment-slider', {
	/*Пагинация 3 точки снизу*/
	pagination: {
		el: '.swiper-pagination',
	},

	/*Переключение по клавиатуре слайдов*/
	keyboard:{
		enabled: true,
		onlyInViewport: true,
		pageUpDown: true,
	},

	mousewheel:{
		sensetivity: 1,
	/*Класс слайдера на котором будет срабатывать прокрутка колеса мыши*/
		eventTarget: ".comment-slider"
	},

	slidesPerView: 2.5,

	scrollbar:{
		el: '.swiper-scrollbar',
		draggable: true,
	},

	spaceBetween: 30,
	/*Адаптация слайдера*/
	breakpoints:{
		575:{
			slidesPerView: 2,
		},
		320:{
			slidesPerView: 1,
		}
	}



});

/*Кнопка с раскрывающийся информацией*/
let coll = document.getElementsByClassName('more');
	for(let i = 0; i<coll.length; i++){
		coll[i].addEventListener('click', function(){
			this.classList.toggle('active');
			let content = this.nextElementSibling;
			if(content.style.maxHeight){
				content.style.maxHeight = null;
			}else{
				content.style.maxHeight = content.scrollHeight + 'px';
			}
		})
	}

