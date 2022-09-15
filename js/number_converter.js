$(document).ready(function()
{

    function convert(number, base, resultBase)
    {
        let decimal_result = parseInt(number, base);               // Interpret the number to a decimal value;
        let base_result = decimal_result.toString(resultBase);     // Transform a decimal number to a string;
        return base_result;
    }
    function clear_invalid(number, base)
    {
        let splitedNumber = number.split('');
        let converted_charset = [];
        let invalid_chars = 0;
        splitedNumber.forEach(convert_charset);
        function convert_charset(element, index)
        {
            if(element == 'a' && base > 10)
            {
                converted_charset[index-invalid_chars] = element;
            }
            else if(element == 'b' && base > 11)
            {
                converted_charset[index-invalid_chars] = element;
            }
            else if(element == 'c'  && base > 12)
            {
                converted_charset[index-invalid_chars] = element;
            }
            else if(element == 'd'  && base > 13)
            {
                converted_charset[index-invalid_chars] = element;
            }
            else if(element == 'e'  && base > 14)
            {
                converted_charset[index-invalid_chars] = element;
            }
            else if(element == 'f'  && base > 15)
            {
                converted_charset[index-invalid_chars] = 'f';
            }
            else if(parseInt(element, 10) < base && !isNaN(element) && element != ' ')
            {
                converted_charset[index-invalid_chars] = element;
            }
            else  
            {
                invalid_chars++;
        }
        };
        return converted_charset.join('');
    }
    function change_placeholder(target, value){
        let basenumber = parseInt(value.val());
        let placeholder = '';
        basenumber == 2 ? placeholder = "Ex: 1001001100101100000001011010010" : 0;
        basenumber == 3 ? placeholder = "Ex: 10012001001112202200" : 0;
        basenumber == 4 ? placeholder = "Ex: 1021211200023102" : 0;
        basenumber == 5 ? placeholder = "Ex: 10012022133030" : 0;
        basenumber == 6 ? placeholder = "Ex: 322301024030" : 0;
        basenumber == 7 ? placeholder = "Ex: 42410440203" : 0;
        basenumber == 8 ? placeholder = "Ex: 11145401322" :0;
        basenumber == 9 ? placeholder = "Ex: 3161045680" : 0;
        basenumber == 10 ? placeholder = "Ex: 1234567890" : 0;
        basenumber == 11 ? placeholder = "Ex: 583977146" : 0;
        basenumber == 12 ? placeholder = "Ex: 2a5555016" : 0;
        basenumber == 13 ? placeholder = "Ex: 168a0865a" : 0;
        basenumber == 14 ? placeholder = "Ex: b9d6b5aa" : 0;
        basenumber == 15 ? placeholder = "Ex: 4c3c6162a" : 0;
        basenumber == 16 ? placeholder = "Ex: 499602d2" : 0;
        console.log(placeholder)
        target.attr("placeholder", placeholder);
    }
    function calculate_number1()
    {
        let number1 = $('#number1');
        let base_number = $('#base_number').val();
        let result_base = $('#result_base').val();
        if ($('#number2').val() != '')
        {
            let number2 = clear_invalid($('#number2').val(), result_base);
            number1.val(convert(number2, result_base, base_number));
        }
        else
        {
            number1.val('');
        }
        
    }
    function calculate_number2()
    {
        let number2 = $('#number2');
        let base_number = $('#base_number').val();
        let result_base = $('#result_base').val();
        if ($('#number1').val() != '')
        {
            let number1 = clear_invalid($('#number1').val(), base_number);
            number2.val(convert(number1, base_number, result_base));
        }
        else
        {
            number2.val('');
        }
    }
    function copy_to_clipboard(target, trigger)
    {
        navigator.clipboard.writeText(target.val()).then(
            () => {
            trigger.html('Copiado ✔')
            setTimeout(() => {trigger.html('📄')}, 700), 
            () => 
            {trigger.html('Erro, Não foi possível Copiar ✖')}
            setTimeout(() => {trigger.html('📄')}, 2000)
        })
    }
    $('#copy_number1').click(() => {copy_to_clipboard($('#number1'), $('#copy_number1'))});
    $('#copy_number2').click(() => {copy_to_clipboard($('#number2'), $('#copy_number2'))});
    $('#base_number').change(() => {change_placeholder($('#number1'),$('#base_number')); calculate_number2()});
    $('#result_base').change(() => {change_placeholder($('#number2'),$('#result_base')); calculate_number2()});
    $('#number1').keyup(() => {calculate_number2()});
    $('#number2').keyup(() => {calculate_number1()});
});