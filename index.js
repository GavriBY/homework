function transform(input){
    console.clear();
    switch (input.value) {
             case '0':
                 input.style='border: 1px solid blue';
                 console.log('zero');
                 break;
             case "zero": 
                 console.log(0);
                 break;
             case '1':
                 console.log('one');
                 break;
             case "one": 
                 console.log(1);
                 break;
             case '2':
                 console.log('two');
                 break;
             case "two": 
                 console.log(2);
                 break;
             case '3':
                 console.log('three');
                 break;
             case "three": 
                 console.log(3);
                 break;
             case '4':
                 console.log('four');
                 break;
             case "four": 
                 console.log(4);
                 break;
             case '5':
                  console.log('five');
                 break;
             case "five": 
                 console.log(5);
                 break;
                 
             default: 
                 console.log('smth went wrong');
         } 
         input.value='';
}

    


    // const sex=prompt('введите свой пол','мужской');
    // const age=prompt('введите свой возраст','0');

    // getUserStatus(sex,age);


    // function getUserStatus (sex,age){
    //     if (sex.toLowerCase()==='мужской' || sex.toLowerCase()=== 'male' ){
    //         if (age>0 && age<=14){
    //             console.log('подросток');
    //         } else if (age>14 && age<=20){
    //             console.log('юноша');
    //         } else if (age>20 && age<=60){
    //             console.log('молодой человек');
    //         } else if (age>60 && age<=100){
    //             console.log('дед');
    //         } else {
    //             console.log('R.I.P.');
    //         }
    //     } else if (sex.toLowerCase()==='женский' || sex.toLowerCase()=== 'female' ){
    //         console.log('девушка');
    //     } else {
    //         console.log('hello non-binary');
    //     }
    // }






    String(5) && typeof(20) && '' || Boolean('') || 0;