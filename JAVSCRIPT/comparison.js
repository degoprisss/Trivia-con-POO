// import {saveQuestion} from './printQuestionMultiple';
import optionType from './optionType.js';
// import enPrueba from './enPrueba.js'
import comparisonOptionMultipl from './comparisonOptionMultiple.js'
import comparisonOptionFalseTrue from './comparisonOptionFalseTrue.js'
// import enPrueba from './enPrueba.js'

let saveQuestionCorrect = 0;
export default class comparison {
  // constructor(resul){
  //   this.resul = resul;
  // }
    static comparison(data){
      
     
      let saveQuestion = optionType.getQ();
      // let saveQuestionCorrect = comparisonOptionMultipl.getsaveQuestionCorrect();
      let saveQuestionCorrect = comparisonOptionFalseTrue.getsaveQuestionCorrect();


        const getType = document.getElementById("typeQuestion").value;
        if (getType === 'multiple') {
          comparisonOptionMultipl.comparisonOptionMultiple(data);
          saveQuestionCorrect = comparisonOptionMultipl.getsaveQuestionCorrect();
         
          
        }else{
          comparisonOptionFalseTrue.comparisonOptionFalseTrue(data);
          saveQuestionCorrect = comparisonOptionFalseTrue.getsaveQuestionCorrect();
          
          
        }
       let resul = 0;
       resul = (10/saveQuestion.length)*saveQuestionCorrect.length;
       
       
        let printResult = document.getElementById('resulQuestion');
        printResult.innerHTML = '';
      
        if (resul >= 6) {
          printResult.innerHTML += `<div class="card">
          <div class="card-body">
            <h5 class="card-title text-center">🥳🥳!!!FELICIDADES!!!🥳🥳</h5>
            <p class="card-text text-center">Usted gano el examen con un resultado de: ${resul}</p>            
          </div>
        </div>`
        }else{
          printResult.innerHTML += `<div class="card h-100 mt-4">
          <div class="card-body">
            <h5 class="card-title text-center">🙁!!!LO SENTIMOS!!!🙁</h5>
            <p class="card-text text-center">Usted no paso el examen. Su resultado es: ${resul}</p>
          </div>
        </div>`
        
        }
        
      } 
      
} 