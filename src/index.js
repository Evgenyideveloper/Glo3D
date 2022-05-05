import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import calculation from './modules/calculation';
import validateForm from './modules/validateForm';
import tabs from './modules/tabs';
import slider from './modules/slider';
import calc from './modules/calc';
import sendForm from './modules/sendForm';


timer('31 may 2022');
menu();
modal();
calculation();
validateForm();
tabs();
slider();
calc();
sendForm({
    formId:'form',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
});