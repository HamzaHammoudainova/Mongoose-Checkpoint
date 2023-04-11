const mongoose = require('mongoose')
const Person = require("./Person")

mongoose.connect("mongodb://127.0.0.1/testdb", { useNewUrlParser: true, useUnifiedTopology: true })




run()
async function run() {
  try{

    // 1 )              // Creat new Person
         //--------------------------------------------

  //     const person = await Person.create({
  //       name: "Sizar", 
  //       age: 27,
  //       favoriteFoods: ["One", "Two", "Three", "burritos"]
  // })

  //       console.log(person)



    // 2 )              // findById
         //--------------------------------------------

    // const person = await Person.findById("642dc6e8a1b8674c29aa7cb2")
    // console.log(person)




    // 3 )              // find
         //--------------------------------------------
  
    // const person = await Person.find({name: "Hamza"})
    // console.log(person)



    // 4 )              // findOne
         //--------------------------------------------

    // const person = await Person.findOne({name: "Hamdi"})
    // console.log(person)


    // 5 )              // FindById and Push to Array
    //      --------------------------------------------

  //  const person = await Person.findById("6434343b01f0b59088622ca0")
  //   person.favoriteFoods.push("Hunmburger")
    
  //   console.log(person)
    

    // 6 )              // findOneAndUpdate
         //--------------------------------------------

    // const person = await Person.findOneAndUpdate({name:'Sizar', age:27}, {age:20})
    // console.log(person)

    // 7 )              // findByIdAndRemove
         //--------------------------------------------

    // await Person.findByIdAndRemove({_id:"643437064fa6d5b5cec4ae16"})
    // console.log("the Person Has been removed")
    
    
    // 8 )              // deleteMany (remove)
         //--------------------------------------------
      
          // await Person.deleteMany({name: "Hamza"})
        


    // 9 )              // Query Helpers
         //--------------------------------------------

    //  const person = await Person
    //  .where("favoriteFoods").equals("burritos")
    //  .limit(2)
    //  .sort({ name: 1 })
    //  .select({ age: 0 })
    //  .exec()

    console.log(person)
  }catch(e){
    console.log(e.message)
  }
  
}

