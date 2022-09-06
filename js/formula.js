//first i need to put all the things inside a jquery function for refer to DOM element
$(function(){ 
    //Then i create a jquery function for everytime that a key is pressed calculate the value in decimal format
    $('#binary_number').keyup(function() {
        let binary_number = $('#binary_number').val();
        let decimal_result = 0;
        let invalid_char = 0;
        const divide_number = binary_number.split("");
        const reverse_number = divide_number.reverse();
        const decimal_number = [];

        //Remove all the invalid characters from the calc and if have an invalid character turn the border red

        for (let i = 0; i < reverse_number.length; i++) {
            const element = reverse_number[i];
            if(element != 0 && element != 1)
            {
                $('#binary_number').css("border-color", "red");
                reverse_number.splice(i,1);
                i --; 
                invalid_char ++;
            }
        }

        //Normalize the borders if don't have any invalid character

        if (invalid_char == 0)
        {
            $('#binary_number').css({
                'border-color': ''
            });
                
        }
        //Turn al the binary number in the array into a decimal number
        
        reverse_number.forEach(calcula_decimal); 
        function calcula_decimal(element, index){        
        if(element==1){
        decimal_number[index] = Math.pow(element*2, index);
        decimal_result += decimal_number[index];
        }
        if(element==0){
           decimal_number[index] = 0;
        }
        };

        //Show the decimal result if it exists

        if (decimal_result != '')
        {
            $('#decimal_number').val(decimal_result);
        }
        else
        {
            $('#decimal_number').val('');
        }
    });

    //Same function that calculate the decimal result, but the keyup event is triggered when is in decimal number field

    $('#decimal_number').keyup(function(){
        let decimal_number = $('#decimal_number').val();
        let sum = 0;
        let decimal_index = 0;
        const formating_number = [];
        const power = [];
        power[decimal_index] = Math.pow(2, decimal_index);

    //Loop that calculates the power bigger than the decimal number
        while (power[decimal_index]<decimal_number)
        {
            decimal_index ++;
            power[decimal_index] = Math.pow(2, decimal_index);
        }

    //When the power is bigger than the decimal number, calculate the binary number while sum the binary values, 
    //if the binary value is bigger than the decimal value will not sum but if the sum is smaller than the decimal value
    //the sum will happen and it take the true sums for the 1 value and false sums for the 0 value.

        for (let index = decimal_index; index >= 0; index--) 
        {
            sum += power[index];
            if (sum <= decimal_number)
            {
                formating_number[index] = 1;
            }
            else
            {
                formating_number[index] = 0;
                sum -= power[index];
            }
        }
        if (formating_number[decimal_index] == 0)
        { 
            formating_number.splice([decimal_index]);
        }
        binary_result = formating_number.reverse();


        //Show the result if it exists
        
        if (binary_result != '')
        {
            $('#binary_number').val(binary_result.join(''));
        }
        else
        {
            $('#binary_number').val('');
        }
    });      
    });

  
