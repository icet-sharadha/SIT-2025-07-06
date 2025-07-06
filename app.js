// let age = 10;

// if(age>18){
//     alert("hello");

// }else if(age<18){

// }
// else{

// }


//<35 faild

//35> <40      //S

//40> <50     //C
//50> <70     //B



// let stdMarks = [40,20,30,45,60,70];

// let num = parseInt("5000");

// num = "5000"



// console.log(typeof parseInt("5000"));



// ==
// !=
// >=
// <=

// console.log(10=="10");


// let studentList = [
//     {
//         id: 1,
//         name: "saman",
//         email: "saman@gmail.com",
//         marks: [
//             {
//                 subject: "english",
//                 mark: 35
//             },
//             {
//                 subject: "english",
//                 mark: 35
//             },
//             {
//                 subject: "english",
//                 mark: 35
//             },
//             {
//                 subject: "english",
//                 mark: 35
//             },
//         ]
//     },
//         {
//         id: 2,
//         name: "kamal",
//         email: "kamal@gmail.com",
//         marks: [
//             {
//                 subject: "english",
//                 mark: 35
//             },
//             {
//                 subject: "english",
//                 mark: 35
//             },
//             {
//                 subject: "english",
//                 mark: 35
//             },
//             {
//                 subject: "english",
//                 mark: 35
//             },
//         ]
//     },
// ]



// studentList.push(
//         {
//         id: 1,
//         name: "saman",
//         email: "saman@gmail.com",
//         marks: [
//             {
//                 subject: "english",
//                 mark: 35
//             },
//             {
//                 subject: "english",
//                 mark: 35
//             },
//             {
//                 subject: "english",
//                 mark: 35
//             },
//             {
//                 subject: "english",
//                 mark: 35
//             },
//         ]
//     },
// )



// let student = {
//     name:"saman",
//     marks:{
//         class:"10B",
//         marks:[
//             {
//                 subject:"english",
//                 mark:[
//                     {
//                         data:[
//                             {
//                                 recods:[
//                                     {},
//                                     {}
//                                 ]
//                             },
//                             {},
//                             {},
//                         ]
//                     }
//                 ]
//             }
//         ]
//     }
// }

// let count=0;
// function findVowels(text){
//     let vowels= "aeiouAEIOU"

//     for(let char of text){
//         console.log(char);

//         if(vowels.includes(char))count++
//     }
// }


// findVowels("samane");

// console.log(count);





// console.log(nameList.includes("saman"));


// nameList.push("sunimal");

// console.log(nameList);


// let data = nameList.pop();

// console.log(data);




// nameList.shift();
// nameList.shift();

// console.log(nameList);


// let sortAr = nameList.sort();

// console.log(sortAr);


// let nameList= ["saman","kamal","nimal","sunil","amal","bandara"];




// let sliceAr = nameList.slice(2,5);

// console.log(sliceAr);

// nameList.splice(2,6,"s","w","k");

// console.log(nameList);




// let newAr= numberList.map(number => number*2);

// console.log(newAr);

// let eveAr = numberList.filter(number=> number%2 == 0);

// console.log(eveAr);

// let customerList = [
//     {
//         name:"saman",
//         email:"saman@gmail.com"
//     },
//     {
//         name:"ranil",
//         email:"ranil@gmail.com"
//     },
//     {
//         name:"sunil",
//         email:"sunil@gmail.com"
//     },
//     {
//         name:"kamal",
//         email:"kamal@gmail.com"
//     },
// ];

// console.log(customerList.find(obj=>obj.name=="ranil"));




// console.log(numberList.find(num=>num==5));



// let numberList1 = [5,3,8,9,1,2,4];
// let numberList2 = [50,30,80,90,10,20,40];

// console.log(numberList1.concat(numberList2));


// console.log(numberList1.join("-"));

// console.log(numberList1.reverse());




// console.log(numberList.findIndex(data=>data==4));


// console.log(numberList.indexOf(2));



























// int[] numbers = new int[10,20,40,20,60];








function searchData() {

   let txtSearchVal= document.getElementById("txtSearchVal").value;

    fetch(`https://restcountries.com/v3.1/name/${txtSearchVal}`)
        .then(res => res.json())
        .then(data => {

        //    let sinhalaName = data[0].name.nativeName.[sin].official;
           let englishName = data[0].name.official;
           let capital = data[0].capital[0]
           let flag = data[0].flags.png


            // console.log(sinhalaName);
            console.log(englishName);
            console.log(capital);
            console.log(flag);
    
            document.getElementById("rootContent").innerHTML=`
                        <img src="${flag}" width="450" alt="">
                        <h2>${englishName}</h2>
                        <p>capital: ${capital}</p>
            `
        }
        )
}


















