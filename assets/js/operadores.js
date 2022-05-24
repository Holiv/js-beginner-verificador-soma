function getNumbers() {
    let num1 = document.getElementById('input1').value;
    let num2 = document.getElementById('input2').value;
    let soma = parseInt(num1) + parseInt(num2);
    console.log(num1, num2);

    if (!num1 || !num2){
        document.getElementById('invalid').style.display ='block';
        document.getElementById('valid-d').style.display = 'none';  
        document.getElementById('valid-e').style.display = 'none';
    }
    else if(num1 === num2){
        document.getElementById('valid-e').style.display = 'block';
        document.getElementById('equals').innerHTML = `os números ${num1} e ${num2} são iguais. Sua soma é ${soma}`;
        document.getElementById('invalid').style.display = 'none';
        document.getElementById('valid-d').style.display = 'none';
    }
    else{
        document.getElementById('valid-d').style.display = 'block';
        document.getElementById('different').innerHTML = `os numeros ${num1} e ${num2} não são iguais. Sua soma é ${soma}`;
        document.getElementById('invalid').style.display = 'none';
        document.getElementById('valid-e').style.display = 'none';
    }

}