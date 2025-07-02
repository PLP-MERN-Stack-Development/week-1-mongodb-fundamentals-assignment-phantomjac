//queries.js
db.books.find({ genre: "Fiction" });
db.books.find({ published_year: { $gt: 1960 } });
db.books.find({ author: "Paulo Coelho" });
db.books.updateOne({ title: "The Alchemist" }, { $set: { price: 12.99 } });
db.books.deleteOne({ title: "The Great Gatsby" });

db.books.find({ in_stock: true, published_year: { $gt: 2010 } });
db.books.find({}, { "title": 1, "author": 1, "price": 1, "_id": 0 });
db.books.aggregate([ { $sort: { price: 1 } }]);
db.books.aggregate([ { $sort: { price: -1 } }]);
db.books.aggregate([ { $skip: 5 }]);
db.books.aggregate([ { $limit: 5 }]);

db.books.aggregate([ { $group: { _id: "$genre", Average_Price: { $avg: "$price" } } }]);
db.books.aggregate([ { $group: { _id: "$author", Total_books: { $sum: 1 } } }, { $sort: { Total_books: -1 } }, { $limit: 1 } ]);
db.books.aggregate([ { $group: { _id: { $subtract: ["$published_year", { $mod: ["$published_year", 10] }] }, count: { $sum: 1 } } }, { $sort: { _id: 1 } } ]);

db.books.createIndex({ title: 1 });
db.books.createIndex({ author: 1, published_year: 1 });
db.collection.find({ title: "Some Title" }).explain("executionStats");
