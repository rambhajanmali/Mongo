const mongoose = require('mongoose');

main()
.then(() =>{
    console.log("connection successful")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true,
    },
    author:{
        type: String,
    },
    price:{
        type: Number,
        min: [10, "price is too low for amazon selling"],
    },
    discount: {
        type :Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"],
    },
});

const Book = mongoose.model("Book", bookSchema);

 Book.findByIdAndUpdate("65b0ff6d9ad62bb7bb4726cb", { price: -100}, {runValidators: true})
 .then((res) =>{
console.log(res);
 }).catch((err) =>{
    console.log(err.errors.price.properties.message);
 });


// const book1 = new Book({
//     title: "Marvel comics",
//     price: "500",
//     category: "fiction",
// });

// book1.save()
// .then((res) =>{
//     console.log(res);
// }).catch((err) =>{
//     console.log(err);
// });