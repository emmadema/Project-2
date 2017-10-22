 var db = require('./models');

// db.Clothing.remove({}, function(err, clothing) {
//   console.log('removed clothing');
//   db.Author.create(clothing_list, function(err, clothing){
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log('recreated all clothing');
//     console.log("created", clothing.length, "clothing");


//     db.Clothing.remove({}, function(err, clothes){
//       console.log('removed all books');
//       books_list.forEach(function (bookData) {
//         var book = new db.Book({
//           title: bookData.title,
//           image: bookData.image,
//           releaseDate: bookData.releaseDate
//         });
//         db.Author.findOne({name: bookData.author}, function (err, foundAuthor) {
//           console.log('found author ' + foundAuthor.name + ' for book ' + book.title);
//           if (err) {
//             console.log(err);
//             return;
//           }
//           book.author = foundAuthor;
//           book.save(function(err, savedBook){
//             if (err) {
//               return console.log(err);
//             }
//             console.log('saved ' + savedBook.title + ' by ' + foundAuthor.name);
//           });
//         });
//       });
//     });

//   });
// });




