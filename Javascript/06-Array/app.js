// console.log('hello world!');

// var fruits1 = 'apple' 
// var fruits2 = 'banana' 
// var fruits3 = 'watermelon' 
// var fruits4 = 'mango' 
// var fruits5 = 'orange' 

// var fruit = ['mango' , 'watermelon' , 'orange' , 'banana' , 'peach'];



//length
//index

// console.log(typeof(fruit));
// console.log(fruit);
// console.log(fruit[2]);



// var mixedArr = ['apple' , true , 20]

// 4 form field banani ha, har form field ma exams ka marks doga, or jaisa hi user marks likhka enter kraiga, uska total marks + uska grade + uski percentage screen pa show hojaye

// function == ()
// methods == ()

//push
//pop
//unshift
//shift
//splice
//slice
//split
//join
//concat
//sort
//reverse
//indexof


var fruit = ['mango' , 'watermelon' , 'orange' , 'banana' , 'peach' , 'guava' , 'melon' , 'avacado' , 'apple' , 'pineapple' , 'lychee' , 'kiwi'];

// console.log(fruit[2])
// fruit.push('melon')
// fruit.pop()
// fruit.unshift("guava");
// console.log(fruit);
// fruit.shift()

// splice('starting index' , 'kitna delete krna hain' , 'apple')
// fruit.splice(2 , 2)
//slice  === shallow copy

// var copyArr = fruit.slice(4 , 7);
// console.log(copyArr);
// console.log(fruit);



// var names = 'Muhammad Abdullah khan';
// var arr = names.split(' ')
// console.log(arr);


// var arr = ['Muhammad', 'Abdullah', 'khan'];
// var str = arr.join(' ');
// console.log(str);



// var fruit1 = ['mango' , 'orange' , 'banana'];
// var fruit2 = ['kiwi' , 'avacado' , 'strawberry'];

// var newArr = fruit2.concat(fruit1);
// console.log(newArr);




// var num = [4,6,2,8,3,1,9];
// var sortedArr = num.sort()
// console.log(sortedArr);

// var reversedArr = num.reverse()
// console.log(reversedArr);



// console.log(fruit.indexOf('peachfd'));











// var arr = ['muhammad' , ['abdullah' , ['khan']]]

// console.log(arr[1][1][0]);

// var arr = new Array("hello" , 'world');
// console.log(arr);

// const deeplyNestedArray = [
//     [
//       [
//         [1, 2],
//         [3, 4]
//       ],
//       [
//         [5, 6],
//         [7, 8]
//       ]
//     ],
//     [
//       [
//         [9, 10],
//         [11, 12]
//       ],
//       [
//         [13, 14],
//         [15, 16]
//       ]
//     ],
//     [
//       [
//         [17, 18],
//         [19, 20]
//       ],
//       [
//         [21, 22],
//         [23, 24]
//       ]
//     ]
//   ];
  

// console.log(deeplyNestedArray[2][0][1][1]);
















































































//assignment


// var chemMarks = document.querySelector('#chem');
// var physMarks = document.querySelector('#phys');
// var engMarks = document.querySelector('#eng');
// var urduMarks = document.querySelector('#urdu');
// var result = document.querySelector('#result');

// var totalMarks = 400;

// function calculatePercentage(){
//     if(+chemMarks.value > 100 || +physMarks.value > 100 || +engMarks.value > 100 || urduMarks.value> 100){
//         alert('marks should be less than 100')
//     } else if(chemMarks.value === "" || physMarks.value === "" || engMarks.value === "" || urduMarks.value=== ""){
//         alert('enter marks')
//     }
//     else{
//         var obtainedMarks = +chemMarks.value + +physMarks.value + +engMarks.value + +urduMarks.value

//         var percentage = obtainedMarks / totalMarks * 100;

//         var grade = 'A';

//         if(percentage >= 80){
//             grade = 'A+'
//         } else if(percentage >= 70){
//             grade = 'A'
//         } else if(percentage >= 60){
//             grade = 'B'
//         } else if(percentage >=50){
//             grade = 'C'
//         }   
        
//         result.innerHTML = "You have obtained " + obtainedMarks + " out of " + totalMarks + " and your percentage is " + percentage + "% with grade " + grade
//     }
// }


















