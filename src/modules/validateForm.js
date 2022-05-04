const validateForm = () =>{
	const forms = document.querySelectorAll('form');
	
	
	forms.forEach(function(item){
		const typeText = item.querySelector('input[type=text]');	
			typeText.addEventListener('input', (e)=>{
				e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\s]/, "")
			});
			
		const typeEmail = item.querySelector('input[type=email]');	
			typeEmail.addEventListener('input', (e)=>{
				e.target.value = e.target.value.replace(/[^a-zA-Z0-9*~!'_@.-]/, "")
			});
			
		const typeTel = item.querySelector('input[type=tel]');	
			typeTel.addEventListener('input', (e)=>{
				e.target.value = e.target.value.replace(/[^-0-9()+]/, "")
			});
			
		const placeholder = document.querySelector('.mess');	
			placeholder.addEventListener('input', (e)=>{
				e.target.value = e.target.value.replace(/[^а-яА-ЯёЁ\s0-9.,!?]/, "")
			});			
			
	}); 
	
	

}

export default validateForm;