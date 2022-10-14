$(document).ready(function()
{

    //Main Converter that converts between different bases
    
    function convert(number, base, resultBase)
    {
        let decimal_result = parseInt(number, base);               // Interpret the number to a decimal value;
        let base_result = decimal_result.toString(resultBase);     // Transform a decimal number to a string;
        return base_result;                                        // Return the number in selected base
    }
    //Function that clears all the invalid chars

    function clear_invalid(number, base)
    {
        let lowerCase = number.toLowerCase();       // First put everything in lower case
        let splitedNumber = lowerCase.split('');    // Second split everything to an array
        let converted_charset = [];                 
        let invalid_chars = 0;
        splitedNumber.forEach(convert_charset);     // Then Convert the charset to remove invalid
        
        // Main part of the function that remove all invalid chars, like invalid letters, 
        // spaces, symbols, etc...

        function convert_charset(element, index)
        {
            // Only put 'a' on the converted charset when base is higher than 10

            if(element == 'a' && base > 10)
            {
                converted_charset[index-invalid_chars] = element;
            }

            // Similar way only put 'b' when base is higher than 11

            else if(element == 'b' && base > 11)
            {
                converted_charset[index-invalid_chars] = element;
            }

            // And etc...

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

            // And if the element number is lower than base, and is a Number, and is not
            // empty, it became added on the converted charset

            else if(parseInt(element, 10) < base && !isNaN(element) && element != ' ')
            {
                converted_charset[index-invalid_chars] = element;
            }

            // But if the element is not a valid character then incrases the number
            // of invalid chars;

            else  
            {
                invalid_chars++;
        }
        };
        return converted_charset.join('');
    }
    //Function that converts a normal number to a roman one

    function roman(number, base){
        let decimal_result = parseInt(number, base);  // Interpret the number to a decimal value;
        const romanSymbols =                          // Roman Symbols  basis
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
        
        // Main loop of the Roman converter, the logic is:
        // 1. For each index of the roman symbols dictionary, will iterate the main loop.
        // 2. Then the while loop will iterade while the number is higher or equal than the 
        // roman Symbol value
        // 3. Each interation it added to the index to lower the roman index
        // 4. And it lower the decimal number
        // 5. This way will reducing the decimal result while is mounting the roman number

        for ( i in romanSymbols ) {
          while ( decimal_result >= romanSymbols[i] ) {
            romanNumber += i;
            decimal_result -= romanSymbols[i];
          }
        }
        return romanNumber;
      
    }

    //Function that converts a roman number to a normal one

    function roman2Dec(number)
    {
        let uppercase = number.toUpperCase();   // Convert the letters to upper case
        let decimal_result = [];
        let decimal_number = 0;
        let romanNumber = [];
        let d = 0, l = 0, v = 0;                // Count of D L and V characters that can
                                                // be used only ONE time
        romanNumber = uppercase.split('');      // Split the Roman Number

        // For Each splited letter of the roman number will push an int number to the decimal
        // number array and if it is d, l or v the var will be incremented to ban two or more
        // uses of this letters

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
                case "̅":                        // Symbol  that is used to multiply for 1000
                    decimal_result.push("_")
                    break;
            }
        })

            // Loop that removes duplicate V, L and D characters

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
        
            // Main loop that convert the decimal numbers to the right format respecting
            // the roman number rules

            decimal_result.forEach((value, index) =>
                {
                    if ((value >= decimal_result[index+1] || decimal_result[index+1] == undefined) && !(value == decimal_result[index+1] && value == decimal_result[index+2] && value == decimal_result[index+3]))
                    {
                        // Only increment if the number is greater or equal than the next one
                        decimal_number += value;  
                    }
                    else if (value < decimal_result[index+1])
                    {
                        // And only decrement if the number is less than the next one
                        decimal_number -= value;
                    }
                })
        
        // Return the result decimal number

        return decimal_number;
        
    }

    //Function that converts a normal number to a full number

    function fullNumber(number, base, targetOpt)
    {
        let comma = number.toString().split(",")                 // Split the number before and after a comma
        let decimalNumber = parseInt(comma[0], base); // Set the before comma number into a int
        let dividedNumber = decimalNumber.toString().split('').reverse(); // divide decimal number
        let afterCommaDecimal; 
        let dividedAfterComma;
        let factorDecimal = [];
        let fullNumber = [];
        let capitalize = targetOpt.children('#textCase').val(); // Capitalize options
        let monetize = targetOpt.children('#extType').val();    // Monetize options

        // If is money it will get the number after the comma 

        if (monetize == "extMoney")
        {
            // Only get the number after the comma if is less than 99 because (at least in Portuguese)
            // doesn't exist 100 cents.

            afterCommaDecimal = parseInt(comma[1], base) <= 99 && comma[1] != undefined? parseInt(comma[1], base) : 0;
            dividedAfterComma =  afterCommaDecimal.toString().split('').reverse();
        }

        // Dict that have the fullNumbers to convert, have both, plural and singular forms.

        const fullNumbers = 
        {
            1000000000000000  :   "quatrilhão"   ,
            1000000000000001  :   "quatrilhões"  ,
            1000000000000     :   "trilhão"      ,
            1000000000001     :   "trilhões"     ,
            1000000001        :   "bilhões"      ,
            1000000000        :   "bilhão"       ,
            1000001           :   "milhões"      ,
            1000000           :   "milhão"       ,
            1000              :   "mil"          ,
            900               :   "novecentos"   ,
            800               :   "oitocentos"   ,
            700               :   "setecentos"   ,
            600               :   "seiscentos"   ,
            500               :   "quinhentos"   ,
            400               :   "quatrocentos" ,
            300               :   "trezentos"    ,
            200               :   "duzentos"     ,
            101               :   "cento"        ,
            100               :   "cem"          ,
            90                :   "noventa"      ,
            80                :   "oitenta"      ,
            70                :   "setenta"      ,
            60                :   "sessenta"     ,
            50                :   "cinquenta"    ,
            40                :   "quarenta"     ,
            30                :   "trinta"       ,
            20                :   "vinte"        ,
            19                :   "dezenove"     ,
            18                :   "dezoito"      ,
            17                :   "dezesete"     ,
            16                :   "dezesseis"    ,
            15                :   "quinze"       ,
            14                :   "quatorze"     ,
            13                :   "treze"        ,
            12                :   "doze"         ,
            11                :   "onze"         ,
            10                :   "dez"          ,
            9                 :   "nove"         ,
            8                 :   "oito"         ,
            7                 :   "sete"         ,
            6                 :   "seis"         ,
            5                 :   "cinco"        ,
            4                 :   "quatro"       ,
            3                 :   "três"         ,
            2                 :   "dois"         ,
            1                 :   "um"           
        }


        // Get if the number is 0

        if (decimalNumber == 0 && afterCommaDecimal == 0)
        {
            fullNumber = "zero";
        }

        // Get if the number is greater than the maximum allowed number

        else if (decimalNumber > Number.MAX_SAFE_INTEGER)
        {
            fullNumber = fullNumber = "Infelizmente não conseguimos converter números maiores que Nove Quatrilhões, desculpe!";
        }

        // If the number is less than the maximum allowed number and is not zero, run the function

        else
        {
            factorDecimal = factor(dividedNumber);   // First get the multiplicative order of the numbers
            let decimalChunk = chunks(factorDecimal) // then split the number into classes of three numbers
            let chunkFull = []
            chunkFull[0] = convertThisChunks(decimalChunk); //And then convert the chunks into full numbers

            // If is money run the function to get the post comma numbers 

            if (monetize == "extMoney") 
            {
                factorAfterComma = factor(dividedAfterComma) // Multiplicative order 
                
                // If it is a single number after the comma, the number is multiply by ten
                
                if(factorAfterComma.length == 1 && factorAfterComma <= 9 && factorAfterComma != null && !("0" + parseInt(comma[1], base) == comma[1]))
                {
                    factorAfterComma[0] = factorAfterComma[0]*10
                }

                // If the first number is 0 get the number without multiply by ten

                else if("0" + parseInt(comma[1], base) == comma[1])
                {
                    factorAfterComma[0] = factorAfterComma[0]
                }

                afterCommaChunk = chunks(factorAfterComma); // Get the Chunks after the comma
                chunkFull[1] = convertThisChunks(afterCommaChunk); // Convert the chunks
                
                // Get if the number before the comma is null and transform into undefined
                
                chunkFull[0][0] != undefined && chunkFull[0][0].trim() === ""? chunkFull[0][0]= undefined : null;
                
                // If the before comma and after comma numbers is not undefined will return the 
                // monetary value of both numbers.

                if(chunkFull[0][0] != undefined && chunkFull[1][0] != undefined)
                {
                    // Plural form of the before and after comma numbers
                    chunkFull[0][0] != "um" && chunkFull[1][0] != "um"? fullNumber = chunkFull[0].join(' ') + " reais e " + chunkFull[1].join(' ') + " centavos" : null; 
                    // Plural form of the before comma and singular form of the after comma
                    chunkFull[0][0] != "um" && chunkFull[1][0] == "um"? fullNumber = chunkFull[0].join(' ') + " reais e " + chunkFull[1].join(' ') + " centavo" : null; 
                    // Singular form of the before comma and plural form of the after comma
                    chunkFull[0][0] == "um" && chunkFull[1][0] != "um"? fullNumber = chunkFull[0].join(' ') + " real e " + chunkFull[1].join(' ') + " centavos" : null; 
                    // Singular form of both numbers
                    chunkFull[0][0] == "um" && chunkFull[1][0] == "um"? fullNumber = chunkFull[0].join(' ') + " real e " + chunkFull[1].join(' ') + " centavo" : null; 
                }

                // If the before comma number is not undefined and the after comma number is
                // undefined, return the monetary value only of the before comma number

                else if(chunkFull[0][0] != undefined && chunkFull[1][0] == undefined)
                {
                    // Plural form
                    chunkFull[0][0] != "um"? fullNumber = chunkFull[0].join(' ') + " reais": null;
                    // Singular form
                    chunkFull[0][0] == "um"? fullNumber = chunkFull[0].join(' ') + " real": null;
                }

                // If the before comma number is undefined and the after comma number is not
                // undefined, return the monetary value only of the after comma number

                else if(chunkFull[0][0] == undefined && chunkFull[1][0] != undefined)
                {
                    // Plural form
                    chunkFull[1][0] != "um"? fullNumber = chunkFull[1].join(' ') + " centavos": null;
                    // Singular form
                    chunkFull[1][0] == "um"? fullNumber = chunkFull[1].join(' ') + " centavo": null;
                }
            }

            // If the number is not in monetary form, return only the before comma converted
            // value

            else
            {
                fullNumber = chunkFull[0].join(' ');
            }
        }
        
        // Function that call the function that get the multiplier of the number class
        // and call the function that convert the number to full number

        function convertThisChunks(array)
        {
            let fullNumberChunk = [];
            let result = []

            // Loop that gets the chunk of full Number and if is not null append it to the
            // result array

            array.forEach((value, index) =>
            {
                fullNumberChunk = chunkMultiplier(value, index)
                fullNumberChunk != ''? result.unshift(fullNumberChunk): null;  
            })

            // Loop that put the connective "e" on the class when it is necessary

            for (let i = 0; i < result.length; i++) {
                const element = result[i];
                const preElement = result[i-1];

                // Put the connective "e" on the class when its antecessor element is not "e"
                // the element doens't contains "e", the element is not the first element
                // and element is the last class of the full number

                // Ps: this is a brazilian full number rule!

                if((!element.includes(" e ")) && preElement != "e" && i >= 1 && element == chunkFull[chunkFull.length-1])
                {
                    // Splice is used because it have direct acess to input an element
                    // in any index position.
                    result.splice(i, 0, "e")
                }
            }
            return result;
        }

        // Function that divide the array into chunks

        function chunks(arr)
        {
            reverse = arr.reverse(); // Reverse the array
            let chunkResult = [];
            let result = []

            // Main loop of the function, iterate over the array skipping three elements
            // and put to the result three elements with the slice function.

            for (let i = 0; i < reverse.length; i+= 3)
            {
                chunkResult = reverse.slice(i, i+3);
                result.push(chunkResult);
            }
            return result;
        }
        
        // Function that get the multiplicative order of the array

        function factor(array)
        {
            let result = [];
            for (let i = 0; i < array.length; i++) 
            {
                const element = array[i];
                
                // Multiply the element by a ten based power with the index as the exponent
                // This way get the value of each element of the number.
                
                result.unshift(element*(Math.pow(10, i)));
            }
            return result;
        }

        // Function that capitalize only the first letter of the string is used for both
        // capitalize each element and capitalize the full number first element

        function capitalizeFirstLetter(string)
        {
            // Return the string first letter in upper case and the rest of the string
            // without the first letter.
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        // Function that capitalize the full string, self splain

        function capitalizeFullString(string)
        {
            return string.toUpperCase();
        }
        
        // Function that get the multiplier of the number classes and call the function
        // that changes the number to a full number.
        
        function chunkMultiplier(chunk, index)
        {  
            let reverseChunk = chunk.reverse();
            let chunkMultiplier;
            let convertedResult = [];


            // Get the multiplier based on the index of the number class (chunk)

            switch (index)
            {
                case 0:
                chunkMultiplier = 1;    
                    break;
                
                case 1:
                chunkMultiplier = 1000;
                    break;

                case 2:
                chunkMultiplier = 1000000;
                    break;

                case 3:
                chunkMultiplier = 1000000000;
                    break;
                
                case 4:
                chunkMultiplier = 1000000000000;
                    break;

                case 5:
                chunkMultiplier = 1000000000000000;
                    break;
            }

            // Calls the function that changes each number to a full number

            convertedResult = (convertChunk(reverseChunk, chunkMultiplier))
            return convertedResult;
        }

        // Finally the function that changes each number to a full number

        function convertChunk(chunk, multiplier)
        {
            let chunkNumbers = chunk;
            let chunkFullNumbers = [];

            // First loop that divide the elements by its multiplier to change them to
            // full numbers

            chunkNumbers.forEach((element, index) =>
                {
                    value = element/multiplier
                    chunkNumbers.splice(index, 1, value)
                })
            //Hundred plural form
            chunkNumbers[0] == 100 && (chunkNumbers[1] || chunkNumbers[2] > 0)? chunkNumbers.splice(0, 1, 101) : null;
            //Numbers from 10 to 19 in position 1
            chunkNumbers[1] == 10  && chunkNumbers[2] > 0? chunkNumbers.splice(1, 2, chunkNumbers[1]+chunkNumbers[2]) : null;
            //Numbers from 10 to 19 in position 0
            chunkNumbers[0] == 10  && chunkNumbers[1] > 0? chunkNumbers.splice(0, 2, chunkNumbers[0]+chunkNumbers[1]) : null;
            //Insert the thousand multiply
            (chunkNumbers[0] != 0   || chunkNumbers[1] != 0 || chunkNumbers[2] != 0) && multiplier == 1000? chunkNumbers.push(multiplier) : null;   
            //Insert the multiply in plural form from the other multipliers
            if ((chunkNumbers[0] != 0 || chunkNumbers[1] != 0 || chunkNumbers[2] != 0) && multiplier != 1000 && multiplier != 1)
            {
                chunkNumbers[0] > 1 || chunkNumbers[1] > 1 || chunkNumbers[2] > 1? chunkNumbers.push(multiplier+1) : chunkNumbers.push(multiplier)
            }
            //Remove the zeros
            for (let i = 0; i < chunkNumbers.length; i++) {
                const element = chunkNumbers[i];
                    if(element == 0)
                    {
                        chunkNumbers.splice(i, 1)
                        i--
                    } 
            }
            //If is one thousand remove the ONE (Brazilian portuguese rule)
            chunkNumbers[0] == 1 && chunkNumbers[1] == 1000? chunkNumbers.splice(0,1): null 
            //Insert " e " in the chunk
            chunkNumbers.forEach((element, index) => {
                // element > 0 && chunkNumbers[index+1] > 0 && !(element == multiplier || element == multiplier + 1) && !(chunkNumbers[index+1] == multiplier || chunkNumbers[index+1] == multiplier + 1)? chunkNumbers.splice(index+1, 0, "e"): null;
                element > 0 && chunkNumbers[index+1] > 0 && !((chunkNumbers[index+1] == multiplier && multiplier != 1)|| chunkNumbers[index+1] == multiplier + 1)? chunkNumbers.splice(index+1, 0, "e"): null;
            })

            //Transform the number into full number
            
            chunkNumbers.forEach((element) => 
            {
                // Check if the first Letters have to be in upper case and then put all in 
                // upper case

                switch(capitalize)
                    {
                        case "firstLetters":
                            element != "e"? chunkFullNumbers.push(capitalizeFirstLetter(fullNumbers[element])) : chunkFullNumbers.push("e");
                            break;
                        default:
                            element != "e"? chunkFullNumbers.push(fullNumbers[element]) : chunkFullNumbers.push("e");
                    }

            })

            // Put the full number, or the first letter of the full number in upper case if 
            // it is necessary

            switch(capitalize)
            {
                case "firstLetter":
                    return capitalizeFirstLetter(chunkFullNumbers.join(' '));
                case "upperCase":
                    return capitalizeFullString(chunkFullNumbers.join(' '));  
                default:
                    return chunkFullNumbers.join(' ');
            }
        }

        return fullNumber;
    }

    //Function that converts a full number to a normal number

    function numberFull(number)
    {
        // Get the number without the "e" connective and without any comma.
        let fullNumberArray = number.toLowerCase().replaceAll(" e ", " ").replaceAll(",", "").split(" ")
        let convertedChunk = [];
        let convertedChunks = [];
        let convertedArray = [];
        let postComma = [];
        let postCommaDecimal = 0;
        let chunkSum = 0;
        let decimalNumber = 0;

        // Dict that holds the Full Number values

        const fullNumbers = 
        {
            "quatrilhão"   : 1000000000000000,
            "quatrilhões"  : 1000000000000000,
            "trilhão"      : 1000000000000,
            "trilhões"     : 1000000000000,
            "bilhões"      : 1000000000,
            "bilhão"       : 1000000000,
            "milhões"      : 1000000,
            "milhão"       : 1000000,
            "mil"          : 1000,
            "novecentos"   : 900,
            "oitocentos"   : 800,
            "setecentos"   : 700,
            "seiscentos"   : 600,
            "quinhentos"   : 500,
            "quatrocentos" : 400,
            "trezentos"    : 300,
            "duzentos"     : 200,
            "cento"        : 100,
            "cem"          : 100,
            "noventa"      : 90,
            "oitenta"      : 80,
            "setenta"      : 70,
            "sessenta"     : 60,
            "cinquenta"    : 50,
            "quarenta"     : 40,
            "trinta"       : 30,
            "vinte"        : 20,
            "dezenove"     : 19,
            "dezoito"      : 18,
            "dezesete"     : 17,
            "dezesseis"    : 16,
            "quinze"       : 15,
            "quatorze"     : 14,
            "treze"        : 13,
            "doze"         : 12,
            "onze"         : 11,
            "dez"          : 10,
            "nove"         : 9,
            "oito"         : 8,
            "sete"         : 7,
            "seis"         : 6, 
            "cinco"        : 5,
            "quatro"       : 4,
            "três"         : 3,
            "dois"         : 2,
            "um"           : 1
        }

        // Convert each full number of the array into a numerical value

        fullNumberArray.forEach((element, index, array)=>
        {

            // Count the monetary value as a comma to divide the number into a value and
            // after comma value
            if(element == "real" || element == "reais")
            {
                for(let i = index; i < array.length; i++)
                {
                    postComma.push(array[i]);
                }
            }
            fullNumbers[element] != null? convertedArray.push(fullNumbers[element]) : null
        })

        // Convert the post comma elements into numerical values

        for(let i = 0; i < postComma.length; i++)
        {
            let element = postComma[i];
            
            // If the element is a valid value it will be changed on the array

            if (fullNumbers[element] != null)
            {
                postComma.splice(i, 1, fullNumbers[element]);
            }

            // If the element is not a valid value it will be removed from the array
            
            else
            {
                postComma.splice(i, 1);
                i--;
            }
        }

        // Get the element after the chunk and if it is higher or equal
        // to one thousand the chunk will be multiplied by the element 

        for (let i = 0; i < convertedArray.length; i++) {
            const nextElement = convertedArray[i+1];
            const nextElement2 = convertedArray[i+2];
            const nextElement3 = convertedArray[i+3];

            // Get the next element

            if(nextElement >= 1000)
            {
                convertedChunk = convertedArray.slice(i, i+1);
                convertedChunk.forEach((value, index) =>
                {
                    convertedChunk.splice(index, 1, value*nextElement)
                })
                i++;
            }

            // Two elements later
            
            else if(nextElement2 >= 1000)
            {
                convertedChunk = convertedArray.slice(i, i+2);
                convertedChunk.forEach((value, index) =>
                {
                    convertedChunk.splice(index, 1, value*nextElement2)
                })
                i +=2;
            }

            // And Three elements later

            else if(nextElement3 >= 1000)
            {
                convertedChunk = convertedArray.slice(i, i+3);
                convertedChunk.forEach((value, index) =>
                {
                    convertedChunk.splice(index, 1, value*nextElement3)
                })
                i += 3;
            }

            // If any element is greater or equal to one thousand, then the element will be
            // added on the converted Chunk

            else
            {
                convertedChunk = convertedArray.slice(i, convertedArray.length);
                i += convertedArray.length
            }

            // After multiply the elements for the respective multiplier, the element will
            // be added on an array

            convertedChunks.push(convertedChunk)
        }

        // Make the sum of the elements of the array with the separeted and properly
        // multiplied

        convertedChunks.forEach((element) =>
        {
            decimalNumber = 0;
            element.forEach((element) =>
            {
                chunkSum += element
            })
            decimalNumber += chunkSum
        })

        // Make the sum of the elements after the comma, 

        if (postComma[0] > 0)
        {
            postComma.forEach((element) =>
            {
                postCommaDecimal += element;
            })
            
            return decimalNumber.toString() + "," + postCommaDecimal.toString();
        }

        // If the number is only after comma, then will return "0," before the number

        else if ((fullNumberArray.includes("centavo") || fullNumberArray.includes("centavos") && !(fullNumberArray.includes("real") || fullNumberArray.includes("reais"))))
        {
            if (decimalNumber >= 10)
            {
                return "0," + decimalNumber.toString()
            }
            else
            {
                return "0,0" + decimalNumber.toString()
            }
        }

        // If doens't have comma will return the decimal number

        else
        {
        return decimalNumber
        }
    }

    //Function that put the super roman on textarea

    function supRoman(target){
        let thisTarget = (target.parent().attr('id')); // Get the id of the parent element
        if (thisTarget == 'supRom1')   // Targets the first field. 
        {
            $('#number1').val($('#number1').val()+target.text()) // Insert the text of the button 
            calculate_number2();
        }
        else // Targets the second field
        {
            $('#number2').val($('#number2').val()+target.text()); // Same but in the second field
            calculate_number1(); 
        }
    }

    // Function that changes the placeholder of the converter and hide or show the
    // especial options of full and roman numbers

    function change_placeholder(target, value){
        let basenumber = value.val();
        let placeholder = '';

        // Default Bases and Placeholders

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
        
        // Especial Bases
        
        switch(basenumber)
        {
            
            // Rom changes the placeholder and toggles the fullNumber options off and turn on
            // the roman options

            case 'rom':
                placeholder = "Ex: M̅C̅C̅X̅X̅X̅I̅V̅DLXVII"
                target.attr('id') == 'number1'? $('#supRom1').toggleClass('hide', false) : $('#supRom2').toggleClass('hide', false);
                target.attr('id') == 'number1'? $('#extOpt1').toggleClass('hide', true) : $('#extOpt2').toggleClass('hide', true);
                break;

            // Ext changes the placeholder and toggles the Roman options off and turn on
            // the fullNumber options
            
            case 'ext':
                placeholder = "Ex: Um bilhão e duzentos e trinta e quatro milhões e quinhentos e sessenta e sete mil e oitocentos e noventa"
                target.attr('id') == 'number1'? $('#extOpt1').toggleClass('hide', false) : $('#extOpt2').toggleClass('hide', false);
                target.attr('id') == 'number1'? $('#supRom1').toggleClass('hide', true) : $('#supRom2').toggleClass('hide', true);
                break;

            // By default turn off both especial options

            default:
                target.attr('id') == 'number1'? $('#extOpt1').toggleClass('hide', true) : $('#extOpt2').toggleClass('hide', true);
                target.attr('id') == 'number1'? $('#supRom1').toggleClass('hide', true) : $('#supRom2').toggleClass('hide', true);
        }

        // Put the placeholder in the placeholder html attribute

        target.attr("placeholder", placeholder);
    }

    // Function that Calculates the number on the first field

    function calculate_number1()
    {
        let baseNumber = $('#base_number').val();
        let resultBase = $('#result_base').val();
        let number1 = $('#number1');
        let number2;

        // Remove invalid chars only for default bases

        (resultBase == 'rom' || resultBase == 'ext')? number2 = $('#number2').val() : number2 = clear_invalid($('#number2').val(), resultBase);

        //If the field is not empty, then calculate the result
        
        if(number2 != '')
        {
            //Output Bases
            switch(baseNumber)
            {
                //Output base = Roman
                case 'rom':
                    //Input Bases
                    switch(resultBase)
                    {
                        case 'rom':
                            number1.val(number2)
                            break;
                        case 'ext':
                            number1.val(roman2Dec(numberFull(number2)))
                            break;
                        default:
                            number1.val(roman(number2, resultBase));
                    }
                    break;
                //Output base = Full number
                case 'ext':
                    //Input Bases
                    switch(resultBase)
                    {
                        case 'rom':
                            number1.val(fullNumber(roman2Dec(number2), 10, $('#extOpt1')));
                            break;
                        case 'ext':
                            number1.val(number2)
                            break;
                        default:
                            number1.val(fullNumber(number2, resultBase, $('#extOpt1')));
                    }
                    break;
                //All other output bases
                default:
                    //Input Bases
                    switch(resultBase)
                    {
                        case 'rom':
                            number1.val(convert(roman2Dec(number2), resultBase, baseNumber));
                            break;
                        case 'ext':
                            number1.val(convert(numberFull(number2), resultBase, baseNumber));
                        break;
                    default:
                            number1.val(convert(number2, resultBase, baseNumber));
                }
            }
        }
        else
        {
            number1.val('')
        }
    }

    // Function that calculate the number on the second field

    function calculate_number2()
    {
        let baseNumber = $('#base_number').val();
        let resultBase = $('#result_base').val();
        let number1;
        let number2 = $('#number2');

        // Remove invalid chars only for default bases

        (baseNumber == 'rom' || baseNumber == 'ext')? number1 = $('#number1').val() : number1 = clear_invalid($('#number1').val(), baseNumber)

        //If the field is not empty, then calculate the result
        if(number1 != '')
        {
            //Output Bases
            switch(resultBase)
            {
                //Output base = Roman
                case 'rom':
                    //Input Bases
                    switch(baseNumber)
                    {
                        case 'rom':
                            number2.val(number1)
                            break;
                        case 'ext':
                            number2.val(roman2Dec(numberFull(number1)))
                            break;
                        default:
                            number2.val(roman(number1, baseNumber));
                    }
                    break;
                //Output base = Full number
                case 'ext':
                    //Input Bases
                    switch(baseNumber)
                    {
                        case 'rom':
                            number2.val(fullNumber(roman2Dec(number1), 10, $('#extOpt2')));
                            break;
                        case 'ext':
                            number2.val(number1)
                            break;
                        default:
                            number2.val(fullNumber(number1, baseNumber, $('#extOpt2')));
                    }
                    break;
                //All other output bases
                default:
                    //Input Bases
                    switch(baseNumber)
                    {
                        case 'rom':
                            number2.val(convert(roman2Dec(number1), baseNumber, resultBase));
                            break;
                        case 'ext':
                            number2.val(convert(numberFull(number1), baseNumber, resultBase));
                            break;
                        default:
                            number2.val(convert(number1, baseNumber, resultBase));
                }
            }
        }
        else
        {
            number2.val('')
        }
    }

    // Self Splain

    function copy_to_clipboard(target, trigger)
    {
        navigator.clipboard.writeText(target.val()).then(
            () => {
            trigger.html('Copiado ✔') // if the copy is successful return
            setTimeout(() => {trigger.html('📄')}, 700), 
            () => 
            {trigger.html('Erro, Não foi possível Copiar ✖')} // Else
            setTimeout(() => {trigger.html('📄')}, 2000)
        })
    }

    // Get the click on the Buttons of the roman numbers field

    $('.supRoms').click((event) =>
    { 
        supRoman($(event.currentTarget))
    })

    // Event Listeners

    // Listen the click on the button that copy to clipboard
    $('#copy_number1').click(() => {copy_to_clipboard($('#number1'), $('#copy_number1'))});
    // Listen the click on the second button that copy to clipboard
    $('#copy_number2').click(() => {copy_to_clipboard($('#number2'), $('#copy_number2'))});
    // Listen the change of the base of the first field
    $('#base_number').change(() => {change_placeholder($('#number1'),$('#base_number')); calculate_number2()});
    // Listen the change of the base of the second field
    $('#result_base').change(() => {change_placeholder($('#number2'),$('#result_base')); calculate_number2()});
    // Listen the change of the full number first option on the first field
    $('#extOpt1').children('#textCase').change(() => {calculate_number1()});
    // Listen the change of the full number first option on the second field
    $('#extOpt2').children('#textCase').change(() => {calculate_number2()});
    // Listen the change of the full number second option on the first field
    $('#extOpt1').children('#extType').change(() => {calculate_number1()});
    // Listen the change of the full number second option on the second field
    $('#extOpt2').children('#extType').change(() => {calculate_number2()});
    // Listen the keyup and trigger the converter on the first field
    $('#number1').keyup(() => {calculate_number2()});
    // Listen the keyup and trigger the converter on the second field
    $('#number2').keyup(() => {calculate_number1()});
});