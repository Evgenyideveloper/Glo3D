import { animate } from './helpers';

const modal =()=>{
	const modal = document.querySelector('.popup');
	const closeBtn = modal.querySelector('.popup-close');
	const buttons = document.querySelectorAll('.popup-btn');
	
	buttons.forEach((item)=>{
		item.addEventListener('click', ()=>{	
			if (document.documentElement.clientWidth > 768) {
				
			animate({
				duration: 1000,
				timing(timeFraction) {
					return timeFraction;
				},
				draw(progress) {
					modal.style.opacity = progress ;
					modal.style.display = 'block';
				}
			});

				
			}else {
				 modal.style.display = 'block';
			};
			
		})
	})
	
	closeBtn.addEventListener('click', ()=>{
			modal.style.display = 'none';
		})	
}

export default modal