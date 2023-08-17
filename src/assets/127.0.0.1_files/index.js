
// const memo = ()=>{
//   let memory = {}
//   return (value)=>{
//     if(value in memory){
//       console.log("in memory")
//      return memory[value]
//     }
//     else{
//       console.log("not in memory")
//       const result = value;
//       // value = 6;
//       // result =16
//       // memory = {6: 16}
//       // memory[value] = result
//       memory =  {...memory, [value]: result}
//       return memory
//     }
//    // return(memory)
//   }

// }
// const memoVal = memo()

// console.log(memoVal(30))
// console.log(memoVal(20))
// console.log(memoVal(40))
// console.log(memoVal(50))

// class eventAmitter{

//   constructor(){
//     this.events={}
//   }

//  On(eventName,callback){
//   if(this.events){
//   this.events[eventName].push([callback])
//   }
//   else{

//     this.events[eventName] = [callback]

//   }

// }
// }

// const obj = {
//   "person":{
//      "male":{
//         "name":{
//            "homename":"Pintu",
//            "othername":"Ashish"
//         }
//      },
//      "female":{
//         "homename":"mini",
//         "othername":"Minakshi"
//      },
//      "address":{
//         "home":{
//            "parentel":{
//               "own":"yes",
//               "rented":"no",
//               "address1":"kanpur"
//            }
//         },
//         "office":{
//            "country":[
//               {
//                  "india":[
//                     {
//                        "city":"Delhi",
//                        "phone":[
//                           {
//                              "mobile":23840984924,
//                              "landline":983902
//                           }
//                        ]
//                     },
//                     {
//                        "city":"second",
//                        "phone":[
//                           {
//                              "mobile":"second66666",
//                              "landline":3232
//                           }
//                        ]
//                     },
//                     {
//                        "city":"sakmdla",
//                        "phone":[
//                           {
//                              "mobile":444444,
//                              "landline":44
//                           }
//                        ]
//                     },
//                     {
//                        "city":"sakmdla",
//                        "phone":[
//                           {
//                              "mobile":55555555,
//                              "landline":555
//                           }
//                        ]
//                     }
//                  ],
//                  "america":[
//                     {
//                        "california":"dmasmdl",
//                        "newyourk":"skndasdk"
//                     }
//                  ]
//               }
//            ]
//         }
//      }
//   },
//   "car":[
//      { 
//         "small":[
//            {
//               "rand":"kdsadkla",
//               "power":"2000cc"
//            },
//            {
//             "rand":"kkkk",
//             "power":"4000cc"
//          },
//         ],
//         "big":[
//           {
//              "rand":"toyota",
//              "power":"4000cc"
//           },
//           {
//            "rand":"bmw",
//            "power":"5000cc"
//         },
//        ],
//      }
//   ]
// }

////const result = (obj)=>{
  // const {person:{address:{office:{country:[{india}]}}}} = obj 
  // //const {phone} = india
  // return india.map(({phone:[{mobile}]})=> mobile
  // )

 // const {person:{address:{home:{parentel}}}}=obj
  // return {...parentel,address2:"jaipur"}
  //return {...obj, person:{...obj.person, address:{...obj.person.address, home:{...obj.person.address.home, parentel:{...obj.person.address.home.parentel, address2:"999999"}}}}}
   // return {...obj, person:{...obj.person, address:{...obj.person.address, home:{...obj.person.address.home,parentel:{...obj.person.address.home.parentel}}}

//return{...obj, person:{...obj.person,address:{...obj.person.address,home:{...obj.person.address.home,parentel:{...obj.person.address.home.parentel,newApp2:"Klengnbacharweg"}}}}}


//}

//console.log(result(obj))



const obj = {
   firstName: "Adhish",
   lastName: "Nigam",
   fullName: function(city,country){
      return this.firstName+" "+this.lastName+ ","+ city+" "+country
   }
}

const obj2 = {
   firstName: "sonam",
   lastName: "shreya",
   
} 


Function.prototype.myBind = function(...args){
   let obj = this
   const a = args.slice(1)
return function(args){
  return obj.call(args[0],a)
}

}

const a = obj.fullName.myBind(obj2,"kanpur","india")
console.log(a())
