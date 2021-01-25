import printQuestionTrueFalse from './printQuestionTrueFalse.js'
import printQuestionMultiple from './printQuestionMultiple.js';
// import getQuestionAnswered from './enPrueba.js'
// import printButton from './printButton.js';
let d;
export default class optionType {
    static getValues() {
        // let d;
        const numQuestions = document.getElementById("numQuestion").value;
        const idCategory = document.getElementById("numCategory").value;
        const getDifiiculty = document.getElementById("Difiiculty").value;
        const getType = document.getElementById("typeQuestion").value;
        fetch(
          `https://opentdb.com/api.php?amount=${numQuestions}&category=${idCategory}&difficulty=${getDifiiculty}&type=${getType}`
        )
          .then((response) => response.json())
          .then((data) => {
            if (getType === "boolean") {
               d = printQuestionTrueFalse.ClassPrintQuestionTrueFalse(data); 
            } else {
              d = printQuestionMultiple.toPrint(data);
              
            }
          
          });
      }   

      static getQ(){
        return d
      }
}