import printButton from './printButton.js'
// import getQuestionAnswered from './enPrueba.js'


export default class printQuestionMultiple {
   static toPrint(data) {
        let saveQuestion = [];
        let printResult = document.getElementById('resulQuestion');
        printResult.innerHTML = [];
        data.results.forEach((element) => {
          saveQuestion.push(element.incorrect_answers);
        });
      
        let saveQuestionCorrect = [];
        data.results.forEach((element) => {
          saveQuestionCorrect.push(element.correct_answer);
        });
      
        saveQuestion.forEach((element, index) => {
          saveQuestion[index].push(saveQuestionCorrect[index]);
        });
      
        let lista = [0, 1, 2, 3];
        lista = lista.sort(function () {
          return Math.random() - 0.5;
        });
        let num = lista[0];
        let num2 = lista[1];
        let num3 = lista[2];
        let num4 = lista[3];
        
      
        let getQuestionhtml = document.getElementById("printQuestion");
        getQuestionhtml.innerHTML = ''; 
        data.results.forEach((element, index) => {
          getQuestionhtml.innerHTML += `
                                         <div class="col-sm-6 mt-4">
                                           <div class="card h-100">
                                             <div class="card-body">
                                               <p class="card-text">${element.question}</p> 
                                               <form action="/action_page.php name="gender" class='formQuestion' id='formAnswers'">
                                               <input type="radio" id="male" name="gender" value="${saveQuestion[index][num]}">
                                               <label for="male">${saveQuestion[index][num]}</label><br>
                                               <input type="radio" id="male" name="gender" value="${saveQuestion[index][num2]}">
                                               <label for="male">${saveQuestion[index][num2]}</label><br>
                                               <input type="radio" id="male" name="gender" value="${saveQuestion[index][num3]}">
                                               <label for="male">${saveQuestion[index][num3]}</label><br>
                                               <input type="radio" id="male" name="gender" value="${saveQuestion[index][num4]}">
                                               <label for="male">${saveQuestion[index][num4]}</label><br>
                                               
                                               </form>                                                                                                                                                                          
                                             </div>                                
                                           </div>
                                         `;

        
        });
        
        printButton.printButton();
        // printButton.addFunctionButton()
        // console.log(saveQuestion);
        return saveQuestion;
   
      }
     
}