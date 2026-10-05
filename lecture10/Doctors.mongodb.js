use("HospitalDB");

//db.Doctors.find()

//create opearation
//1. insert  2. insertone  3. insertmany
// db.Doctors.insert({
//     name:"Dr. Siya Singh",
//     specialization:"Cardiologist",
//     experience:10,
//     fees: 500,
//     salary: 1000000,
//     department: "Cardiology",
// })

db.Doctors.insertMany([
    {
        name:"Dr.Vivek Rai",
        specialization:"Cardiologist",
        experience:10,
        fees: 5000,
        salary: 1500000,
        department: "Cardiology"
    },
    {
        name:"Dr. Rajesh Kumar",
        specialization:"Neurologist",
        experience:15,
        fees: 800,
        salary: 1500000,
        department: "Neurology"
    }
])