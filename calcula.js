calculadora();

function calculadora(){
    const OPERACAO = Number(prompt('Escolha sua operação:\n 1 - Adição(+)\n 2 - Subtração(-)\n 3 - Divisão(/)\n 4 - Multiplicação(*)\n 5 - Fatoração(%)\n 6 - Exponencial(**)'));

    if(OPERACAO >= 7){
        alert('Este é um valor inválido');
        calculadora();
    }else if(!OPERACAO){
        alert('Este é um valor inválido');
        calculadora();
    }else{

        const VALOR_1 = Number(prompt("Digite o 1° número:"));
        const VALOR_2 = Number(prompt("Digite o 2° número:"));
        var result;

        if(!VALOR_1 || !VALOR_2){
            alert('Este é um valor inválido');
            calculadora();
        }else{

            if(OPERACAO == 1){
                adicao();
            }else if(OPERACAO == 2){
                sub();
            }else if(OPERACAO == 3){
                div();
            }else if(OPERACAO == 4){
                mult();
            }else if(OPERACAO == 5){
                fator();
            }else if(OPERACAO == 6){
                expo();
            }
    
            function adicao(){
                result = VALOR_1 + VALOR_2;
                alert(`${VALOR_1} + ${VALOR_2} = ${result}`);
            }
    
            function sub(){
                result = VALOR_1 - VALOR_2;
                alert(`${VALOR_1} - ${VALOR_2} = ${result}`);
            }
    
            function div(){
                result = VALOR_1 / VALOR_2;
                alert(`${VALOR_1} / ${VALOR_2} = ${result}`);
            }
    
            function mult(){
                result = VALOR_1 * VALOR_2;
                alert(`${VALOR_1} * ${VALOR_2} = ${result}`);
            }
    
            function fator(){
                result = VALOR_1 % VALOR_2;
                alert(`A fatoração dos números ${VALOR_1} e ${VALOR_2} é ${result}`);
            }
    
            function expo(){
                result = VALOR_1 ** VALOR_2;
                alert(`O número ${VALOR_1} elevado ${VALOR_2} é ${result}`);
            }
    
            function novaOp(){
                const opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
                
                if(opcao == 1){
                    calculadora();
                }else if(opcao == 2){
                    alert('Tudo bem, então até logo');
                }else{
                    alert('Este é um valor inválido');
                    novaOp();
                }
            }
    
            novaOp();

        }

    }

    
}