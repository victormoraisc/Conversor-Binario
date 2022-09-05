$(function(){ 
    $('#numero_binario').keyup(function() {
        let numero_binario = $('#numero_binario').val();
        let resultado_decimal = 0;
        let caracteres_invalidos = 0;
        const numero_dividido = numero_binario.split("");
        const numero_invertido = numero_dividido.reverse();
        const numero_decimal = [];

        //Remove todos os números inválidos do número binário

        for (let i = 0; i < numero_invertido.length; i++) {
            const element = numero_invertido[i];
            if(element != 0 && element != 1)
            {
                $('#numero_binario').css("border-color", "red");
                numero_invertido.splice(i,1);
                i --; 
                caracteres_invalidos ++;
            }
        }

        if (caracteres_invalidos == 0)
        {
            $('#numero_binario').css({
                'border-color': ''
            });
                
        }
        //Converte os Binários dentro do Array para decimal 
        
        numero_invertido.forEach(calcula_decimal); 
        function calcula_decimal(element, index, array){        
        if(element==1){
        numero_decimal[index] = Math.pow(element*2, index);
        resultado_decimal += numero_decimal[index];
        }
        if(element==0){
           numero_decimal[index] = 0;
        }
        };

        //Exibe o resultado em decimal no campo de decimais

        if (resultado_decimal != '')
        {
            $('#numero_decimal').val(resultado_decimal);
        }
        else
        {
            $('#numero_decimal').val('');
        }
    });

    $('#numero_decimal').keyup(function(){
        let numero_decimal = $('#numero_decimal').val();
        let soma = 0;
        let decimal_index = 0;
        const numero_em_formacao = [];
        const potencias = [];
        potencias[decimal_index] = Math.pow(2, decimal_index);

        while (potencias[decimal_index]<numero_decimal)
        {
            decimal_index ++;
            potencias[decimal_index] = Math.pow(2, decimal_index);
        }
        for (let index = decimal_index; index >= 0; index--) 
        {
            soma += potencias[index];
            if (soma <= numero_decimal)
            {
                numero_em_formacao[index] = 1;
            }
            else
            {
                numero_em_formacao[index] = 0;
                soma -= potencias[index];
            }
        }
        if (numero_em_formacao[decimal_index] == 0)
        { 
            numero_em_formacao.splice([decimal_index]);
        }
        resultado_binario = numero_em_formacao.reverse();

        if (resultado_binario != '')
        {
            $('#numero_binario').val(resultado_binario.join(''));
        }
        else
        {
            $('#numero_binario').val('');
        }
    });      
    });

  