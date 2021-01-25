
import enPrueba from './enPrueba.js'
// let p = getQuestionAnswered.getAnswersQuestion();
export default class printButton {
    static printButton() {
        let buttonResp = document.getElementById('dButton2')
        buttonResp.innerHTML = '';
        buttonResp.innerHTML += `
                                <button type="button" class="btn btn-primary d-block prue" id="dButton" 
                                >Enivar respuestas</button>
                                `
                                const buttonQuestion = document.querySelector('#dButton'); 
                                buttonQuestion.addEventListener('click', () => {
                                    enPrueba.prueba();  
                        
                              });
                                                  
    }
   
      
}