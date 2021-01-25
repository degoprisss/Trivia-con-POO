// import comparison from './comparison.js';
// import {saveQuestion} from './printQuestionMultiple';
// import printQuestionMultiple from './printQuestionMultiple.js'
import comparison from './comparison.js'
import optionType from './optionType.js';

export default class enPrueba {
    static prueba() {
      let saveQuestion = optionType.getQ();
      let saveCorrect = [];
        let marcada = document.querySelectorAll('#male'); 
        for (let index = 0; index < marcada.length; index++) {
          if (marcada[index].checked) {
            let valor = marcada[index].value; 
            saveCorrect.push(valor); 
          }
        }
        if (saveCorrect.length === saveQuestion.length) {
          comparison.comparison(saveCorrect);
        }else{
          alert('Le faltan preguntas por responder.')
        }
             
      }
  //     static getResul(){
  //       let resul;
  //     return resul = 0;
  // } 
      // static getSaveCorrect(){
      //   return saveCorrect;
      // };
}