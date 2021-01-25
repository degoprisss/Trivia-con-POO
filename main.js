// import getQuestionAnswered from './JAVSCRIPT/getQuestionAnswered';
import enPrueba from './JAVSCRIPT/enPrueba.js'
import category from './JAVSCRIPT/Category.js'
import optionType from './JAVSCRIPT/optionType.js'


category.getCategory();

const form = document.querySelector('#form-questions');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    optionType.getValues();

});
   

// const buttonQuestion = document.getElementById('dButton'); 
// console.log(buttonQuestion);
// buttonQuestion.addEventListener('click', (event) => {
    
//     enPrueba.prueba(); 

// });







