const sequelize = require('sequelize');

const db=  new sequelize("node", "root", "", {
    host: "localhost",
    dialect: "mysql"
  })

  db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

//   model
    const student = db.define('student', {

       id : {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
       },
       name : {
        type: sequelize.STRING,
        allowNull: false,
       },
         age : {
        type: sequelize.INTEGER,
        allowNull: false,
       },   
         city : {
        type: sequelize.STRING,
        allowNull: false,
       },   
       email : {
        type: sequelize.STRING,
        allowNull: false,
       }   
    }); 
      
// // sync model
student.sync({alter:true})
.then(() => {
    console.log('User table created successfully!');
})
.catch((error) => {
    console.error('Unable to create table : ', error);
});     

// insert data
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

//retrive data
student.findAll()
.then((students) => {
    console.log(students);
})
.catch((error) => {
    console.error('Unable to retrieve data : ', error);
});

//retrive single data
student.findOne({ where: { id: 5 } })
.then((student) => {
    console.log(student);
})
.catch((error) => {
    console.error('Unable to retrieve data : ', error);
});

//update data
student.update({ city: 'rajkot' }, { where: { id: 4 } })
.then(() => {
    console.log('Data updated successfully!');
})
.catch((error) => {
    console.error('Unable to update data : ', error);
});

//delete data
student.destroy({ where: { id: 4 } })
.then(() => {
    console.log('Data deleted successfully!');
})
.catch((error) => {
    console.error('Unable to delete data : ', error);
});
