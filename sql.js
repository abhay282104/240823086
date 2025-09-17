const sequelize=require('sequelize');
const db=new sequelize('node','root','', {
        host:"localhost",
        dialect:"mysql"    
}); 

db.authenticate()
    .then(() => {
        console.log("Sucess");
    })
    .catch( (err) => {
        console.error("failed",err);
     });

// const student=db.define("student",{
//     id:{
//         type:sequelize.INTEGER,
//         primaryKey:true,
//         autoincrement:true
//      },
//      name:{
//         type:sequelize.STRING,
//         allowNull:false
//      },
//      city:{
//         type:sequelize.STRING,
//         allowNull:false
//      },
//      email:{
//         type:sequelize.STRING,
//         allowNull:false,
//         unique:true
//      }
// });

// student.sync({alter:true})
//     .then(() => {
//         console.log("Sucess");
//     })
//     .catch( (err) => {
//         console.error("failed",err);
//      });



student.create({
    name: "sunil savaliya",
    age: 21,
    city: "junagadh",
    email: "sunil.savaliya@example.com"
})
.then(() => {
    console.log('Data inserted successfully!');
})
.catch((error) => {
    console.error('Unable to insert data : ', error);
});
