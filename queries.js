//Find all books in a specific genre
db.books.find({ genre:"Fiction})
//Find books published after a certain year.
db.books.find({published_year: {$gt:1960}})
//Find books by a specific author
db.books.find({author:"Paulo Coelho"})
//Update the price of a specific book
db.books.updateOne({title:"The Alchemist"},{$set:{price:12.99}})
//Delete a book by its title.
db.books.drop({title:"The Great Gatsby"})

//Advanced Queries

//Write a query to find books that are both in stock and published after 2010.
  db.books.find({in_stock:true,published_year: {$gt:2010}})
//Use projection to return only the title, author, and price fields in your queries.
  db.books.find({},{"title":1,"author":1,"price":1,"_id":0})
//Implement sorting to display books by price (both ascending and descending)
  db.books.aggregate([ {$sort: {price:1}}]) //Ascending
  db.books.aggregate([ {$sort: {price:-1}}]) //Descending
//Use the limit and skip methods to implement pagination (5 books per page)
  db.books.aggregate([ {$skip:5}]) //skip
  db.books.aggregate([ {$limit:5}]) //limit each page to 5 books/documents

  //Aggregation
//Create an aggregation pipeline to calculate the average price of books by genre.
  db.books.aggregate([ {$group: {_id:"$genre",Average_Price:{$avg:"$price"}}}])
//Create an aggregation pipeline to find the author with the most books in the collection.
  db.books.aggregate([{$group:{_id:"$author", Total_books: {$sum:1}}},{$sort: {Total_books:-1}},{$limit:1}])
//Implement a pipeline that groups books by publication decade and counts them.
   db.books.aggregate([{$group:{_id:{$subtract:["$published_year",{$mod:["$published_year",10]}]},count:{$sum:1}}},{$sort:{_id:1}}])

  //Indexing
//Create an index on the title field for faster searches.
  db.books.createIndex({title:1})
//Create a compound index on author and published_year
  db.books.createIndex({autho:1,published_year:1})
//Use the explain() method to demonstrate the performance improvement with your indexes
  db.collection.find({ title: "Some Title" }).explain("executionStats")

