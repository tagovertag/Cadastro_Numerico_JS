

let inputs = document.getElementsByTagName('input');
for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];
    input.addEventListener('focus', function () {
        let place = this.getAttribute('placeholder');
        this.setAttribute('placeholder', '');
        let blur = function () {
            this.setAttribute('placeholder', place);

        }
        this.addEventListener('blur', blur);

    });

}



const form = document.getElementById('verification_form')


function validar() {
    let number_1 = document.getElementById('number_1').value; 
    let number_2 = document.getElementById('number_2').value;
    let N_1 = number_1;
    let N_2 = number_2;
    let text = '';

    if (N_1 > N_2){
        text = ('Formulário é inVálido porque o valor de A = ' + N_1 + ' é maior que valor de B = ' + N_2);
        

        
    } else {
        text = ('Formulário válido porque o valor de B = ' +N_2 + ' é maior que valor de A = ' + N_1);   
        
    }  
    document.getElementById('text_area').innerText = text;           
}



