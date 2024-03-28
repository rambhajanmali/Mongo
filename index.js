const mongoose = require('mongoose');

main()
.then(() =>{
    console.log("connection successful")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

User.findByIdAndDelete("65aeca20176a504da24386bc")
.then((res) =>{
    console.log(res);
}).catch((err) =>{
    console.log(err);
})

// User.findOneAndUpdate({name: "bruce"},{age: 44}, {new: true})
// .then((res) =>{
//     console.log(res);
// }).catch((err) =>{
//     console.log(err);
// });

// User.updateMany({age: {$gt: 32}}, {age: 45})
// .then((res) =>{
//     console.log(res);
// }).catch((err) =>{
//     console.log(err);
// });

// User.findById("65aece39842172bf08a7afb5")
// .then((res) => {
//     console.log(res);
// })
// .catch((err) =>{
//     console.log(err);
// })

// User.insertMany([
//     {name: "adam", email: "adam@gmail.com", age: 50},
//     {name: "tony", email: "tony@gmail.com", age: 20},
//     {name: "bruce", email: "brucce@gmail.com", age: 30},
// ]).then((res) =>{
//     console.log(res);
// });

// const user2 = new User({
//     name: "adam",
//     email: "adam90@gmail.com",
//     age: 12,
// });

// user2
// .save()
// .then((res) =>{
//     console.log(res);
// })
// .catch((err) =>{
// console.log(err)
// });

