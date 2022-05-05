const sendForm = ({formId, someElem = []}) =>{   	
  
    const forms = document.querySelectorAll('form');   
    
    const statusBlock = document.createElement('div');
    const loadText = 'Загрузка';
    const errorText = 'Ошибка';
    const successText = 'Спасибо! Наш менеджер с вами свяжется.';

    forms.forEach((form) =>{
        const validate = (list) =>{
            let success = true;
                list.forEach((item) =>{
                    if(item.classList.contains('mess')){
                        if(!item.value.match(/[^а-яА-ЯёЁ\s0-9.,!?]/)){
                            success = false;
                            return false;
                        }
                    }

                    if(item.classList.contains('form-phone')){
                        if(!item.value.match(/[^-0-9()+]/)){
                            success = false;
                            return false;
                        }
                    }

                    if(item.classList.contains('form-name')){
                        if(!item.value.match(/[^а-яА-ЯёЁ\s]/)){
                            success = false;
                            return false;
                        }
                    }

                    if(item.classList.contains('form-email')){
                        if(!item.value.match(/[^a-zA-Z0-9*~!'_@.-]/)){
                            success = false;
                            return false;
                        }
                    }


                })
           return success;
            console.log(list);
        }
     
         const sendData = (data) =>{
             return fetch('https://jsonplaceholder.typicode.com/posts', {
                 method: 'POST',
                 body: JSON.stringify(data),
                 headers: {
                     "Content-type": "application/json"
                 }
             }).then(res => res.json())
         }
     
         form.addEventListener('submit', (event) =>{
             event.preventDefault();
     
             const formElements = form.querySelectorAll('input');
             const formData = new FormData(form)
             const formBody = {}

             statusBlock.textContent = loadText;
             form.append(statusBlock)
     
             formData.forEach((val, key) =>{
                 formBody[key] = val
             })
     
             someElem.forEach((elem) =>{
                 const element = document.getElementById(elem.id);
                 if(elem.type === 'block'){
                     formBody[elem.id] = element.textContent; 
                 }
                 if(elem.type === 'input'){
                     formBody[elem.id] = element.value; 
                 }
             })
     
             console.log('submit');
          
             validate(formElements);
     
             sendData(formBody).then(data =>{
                statusBlock.textContent = successText;
                formElements.forEach((item)=>{
                    item.value = '';
                })
                console.log(data);
             })
             .catch(error =>{
                statusBlock.textContent = errorText;
             })
         })
    })
   
}

export default sendForm