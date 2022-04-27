const modal =()=>{
	const modal = document.querySelector('.popup');
	const closeBtn = modal.querySelector('.popup-close');
	const buttons = document.querySelectorAll('.popup-btn');
	
	buttons.forEach((item)=>{
		item.addEventListener('click', ()=>{	
			if (document.documentElement.clientWidth > 768) {
				let op = 0;
				 setTimeout(function func() {
					 if (op > 1){					
						return;
					 }					
					 modal.style.opacity = op;
					 op += 0.1;
					 modal.style.display = 'block';
					 setTimeout (func, 100);
				 }, 100);  
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