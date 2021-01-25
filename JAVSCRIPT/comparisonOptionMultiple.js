import optionType from './optionType.js';
let saveQuestionCorrect = [];
// let resul = 0;
export default class comparisonOptionMultipl {
    static comparisonOptionMultiple(data){
        // saveQuestionCorrect = [];
        let saveQuestion = optionType.getQ();
        // resul = 0;
        // let printResult = document.getElementById('resulQuestion');
        // printResult.innerHTML = '';
        for (let index = 0; index < saveQuestion.length; index++) {
          if (data[index] === saveQuestion[index][3]) {
            saveQuestionCorrect.push(saveQuestion[index][3])
          } 
       }
      }
      static getsaveQuestionCorrect(){
          return saveQuestionCorrect;
      } 
    //   static getResul(){
    //       let resul;
    //     return resul = 0;
    // } 
}