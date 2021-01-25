import optionType from './optionType.js';
let saveQuestionCorrect = [];
export default class comparisonOptionFalseTrue{
    static comparisonOptionFalseTrue(data){
        
        let saveQuestion = optionType.getQ();
        // resul = 0;
        // let printResult = document.getElementById('resulQuestion');
        // printResult.innerHTML = '';
        for (let index = 0; index < saveQuestion.length; index++) {
          if (data[index] === saveQuestion[index][1]) {
            saveQuestionCorrect.push(saveQuestion[index][1])
          } 
       }
      
      }
      static getsaveQuestionCorrect(){
        return saveQuestionCorrect;
    } 
    
}