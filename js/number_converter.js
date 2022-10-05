$(document).ready(function()
{

    //Main Converter that converts between different bases
    function convert(number, base, resultBase)
    {
        let decimal_result = parseInt(number, base);               // Interpret the number to a decimal value;
        let base_result = decimal_result.toString(resultBase);     // Transform a decimal number to a string;
        return base_result;
    }
    //Function that clears all the invalid chars
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
    //Function that converts a normal number to a roman one
    function roman(number, base){
        let decimal_result = parseInt(number, base);               // Interpret the number to a decimal value;
        const romanSymbols = 
        {
            M̅    : 1000000,
            C̅M̅   : 900000,
            D̅    : 500000,
            C̅D̅   : 400000,
            C̅    : 100000,
            X̅C̅   : 90000,
            L̅    : 50000,
            X̅L̅   : 40000,
            X̅    : 10000,
            I̅X̅   : 9000,
            V̅I̅I̅I̅ : 8000,
            V̅I̅I̅  : 7000,
            V̅I̅   : 6000,
            V̅    : 5000,
            I̅V̅   : 4000,
            M    : 1000,
            CM   : 900,
            D    : 500,
            CD   : 400,
            C    : 100,
            XC   : 90,
            L    : 50,
            XL   : 40,
            X    : 10,
            IX   : 9,
            V    : 5,
            IV   : 4,
            I    : 1
        }
        let romanNumber = '',i;
        for ( i in romanSymbols ) {
          while ( decimal_result >= romanSymbols[i] ) {
            romanNumber += i;
            decimal_result -= romanSymbols[i];
          }
        }
        return romanNumber;
      
    }
    //Function that converts a roman number to a normal one
    function romanConvert(number)
    {
        let uppercase = number.toUpperCase();
        let decimal_result = []
        let decimal_number = 0
        let romanNumber = []
        let d = 0, l = 0, v = 0; 

        romanNumber = uppercase.split('');
        romanNumber.forEach((value) =>
        {
            switch (value)
            {
                case "M":
                    decimal_result.push(1000)
                    break;
                case "D":
                    decimal_result.push(500)
                    d++;
                    break;
                case "C":
                    decimal_result.push(100)
                    break;
                case "L":
                    decimal_result.push(50)
                    l++;
                    break;
                case "X":
                    decimal_result.push(10)
                    break;
                case "V":
                    decimal_result.push(5)
                    v++;
                    break;
                case "I":
                    decimal_result.push(1)
                    break;
                case "̅":
                    decimal_result.push("_")
                    break;
            }
        })
            for (let i = 0; i < decimal_result.length; i++) {
                let element = decimal_result[i];

                if (element == "5" && v > 1)
                {
                    decimal_result.splice(i, 1);
                    v --;
                    i --;
                }
                else if (element == "50" && l > 1)
                {
                    decimal_result.splice(i, 1);
                    l --;
                    i --;
                }
                else if (element == "500" && d > 1)
                {
                    decimal_result.splice(i, 1);
                    d --;
                    i --;
                }

                if (element == "_")
                {
                    decimal_result[i - 1] = decimal_result[i - 1] * 1000;
                    decimal_result.splice(i, 1);
                    i --;
                }
            }
        
            decimal_result.forEach((value, index) =>
                {
                    if ((value >= decimal_result[index+1] || decimal_result[index+1] == undefined) && !(value == decimal_result[index+1] && value == decimal_result[index+2] && value == decimal_result[index+3]))
                    {
                        decimal_number += value;
                    }
                    else if (value < decimal_result[index+1])
                    {
                        decimal_number -= value;
                    }
                })
        
        return decimal_number;
        
    }
    //Function that put the super roman on textarea
    function supRoman(target){
        let thisTarget = (target.parent().attr('id'));
        if (thisTarget == 'supRom1')
        {
            $('#number1').val($('#number1').val()+target.text())
            calculate_number2();
        }
        else
        {
            $('#number2').val($('#number2').val()+target.text());
            calculate_number1(); 
        }
    }
    //Function that changes the placeholder of the converter
    function change_placeholder(target, value){
        let basenumber = value.val();
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
        if(basenumber == 'rom')
        {
            placeholder = "Ex: M̅C̅C̅X̅X̅X̅I̅V̅DLXVII"
            target.attr('id') == 'number1'? $('#supRom1').toggleClass('hide', false) : $('#supRom2').toggleClass('hide', false);
        }
        else
        {
            target.attr('id') == 'number1'? $('#supRom1').toggleClass('hide', true) : $('#supRom2').toggleClass('hide', true);
        }
        target.attr("placeholder", placeholder);
    }
    function calculate_number1()
    {
        let number1 = $('#number1');
        let base_number = $('#base_number').val();
        let result_base = $('#result_base').val();
        if($('#number2').val() != '')
        {
            if (result_base != 'rom' && base_number != 'rom')
            {
                let number2 = clear_invalid($('#number2').val(), result_base);
                number1.val(convert(number2, result_base, base_number));
            }
            else if (base_number == 'rom' && result_base != 'rom') 
            {
                let number2 = clear_invalid($('#number2').val(), result_base);
                number1.val(roman(number2, result_base, base_number));
            }
            else if (base_number != 'rom' && result_base == 'rom')
            {
                let number2 = $('#number2').val();
                number1.val(convert(romanConvert(number2), result_base, base_number));
            }
            else
            {
                number1.val($('#number2').val());
            }
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
            if (base_number != 'rom' && result_base != 'rom')
            {
            let number1 = clear_invalid($('#number1').val(), base_number);
            number2.val(convert(number1, base_number, result_base));
            }
            else if (base_number != 'rom' && result_base == 'rom')
            {
            let number1 = clear_invalid($('#number1').val(), base_number);
            number2.val(roman(number1, base_number, result_base));
            }
            else if (base_number == 'rom' && result_base != 'rom')
            {
            let number1 = $('#number1').val();
            number2.val(convert(romanConvert(number1), base_number, result_base));
            }
            else
            {
                number2.val($('#number1').val());
            }
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
    $('.supRoms').click((event) =>
    { 
        supRoman($(event.currentTarget))
    })
    $('#copy_number1').click(() => {copy_to_clipboard($('#number1'), $('#copy_number1'))});
    $('#copy_number2').click(() => {copy_to_clipboard($('#number2'), $('#copy_number2'))});
    $('#base_number').change(() => {change_placeholder($('#number1'),$('#base_number')); calculate_number2()});
    $('#result_base').change(() => {change_placeholder($('#number2'),$('#result_base')); calculate_number2()});
    $('#number1').keyup(() => {calculate_number2()});
    $('#number2').keyup(() => {calculate_number1()});
});