const slider =()=>{
	const sliderBlock = document.querySelector('.portfolio-content');
	const slides = document.querySelectorAll('.portfolio-item');	
	const portfolioDots = document.querySelector('.portfolio-dots');
	
	const timeInterval = 2000;
	let currentSlide = 0;
	let interval;
	
	const prevSlide = (elem, index, strClass) =>{
		elem[index].classList.remove(strClass);
	};
	const nextSlide = (elem, index, strClass) =>{
		elem[index].classList.add(strClass);
	}
	
	
		slides.forEach((item, i)=>{
			let dot = document.createElement('li');
			dot.classList.add('dot');
			portfolioDots.append(dot);
			
		})
	
	const dots = document.querySelectorAll('.dot');
	
	for (let i = 0;i < dots.length;i++){
		dots[0].classList.add('dot-active');
	}
	
	const autoSlide = () =>{
		prevSlide(slides, currentSlide, 'portfolio-item-active');		
		prevSlide(dots, currentSlide, 'dot-active');		
		currentSlide++;
		
		if(currentSlide >= slides.length){
			currentSlide = 0;
		}
		nextSlide(slides, currentSlide, 'portfolio-item-active');
		nextSlide(dots, currentSlide, 'dot-active');
	}
	
	const startSlide = (timer = 1500) =>{
		interval = setInterval(autoSlide, timer)
	}
	const stopSlide = () =>{
		clearInterval(interval);
	}
	
	sliderBlock.addEventListener('click', (e)=>{
		e.preventDefault();
		
		if(!e.target.matches('.dot, .portfolio-btn')){
			return;
		}
		
		prevSlide(slides, currentSlide, 'portfolio-item-active');		
		prevSlide(dots, currentSlide, 'dot-active');
		
		if(e.target.matches('#arrow-right')){
			currentSlide++;;
		}
		if(e.target.matches('#arrow-left')){
			currentSlide--;
		}
		if(e.target.classList.contains('dot')){
			dots.forEach((dot, index)=>{
				if(e.target === dot){
					currentSlide = index;
				}
			})
		}
		
		if(currentSlide >= slides.length){
			currentSlide = 0;
		}
		
		if(currentSlide < 0){
			currentSlide = slides.length - 1;
		}
		
		nextSlide(slides, currentSlide, 'portfolio-item-active');
		nextSlide(dots, currentSlide, 'dot-active');
	})
	
	sliderBlock.addEventListener('mouseenter', (e)=>{
		if(e.target.matches('.dot, .portfolio-btn')){
			stopSlide();
		}
	}, true);
	
	sliderBlock.addEventListener('mouseleave', (e)=>{
		if(e.target.matches('.dot, .portfolio-btn')){
			startSlide(timeInterval);
		}
	}, true);
	
	startSlide(timeInterval);
	
}

export default slider