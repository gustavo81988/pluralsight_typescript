function GetAllBooks() {
    var books = [
        { title: 'Ulysses', author: 'James Joyce', available: true },
        { title: 'A Farewell to Arms', author: 'Ernes Hemingway', available: false },
        { title: 'I know why the caged bird sings', author: 'Maya Angelou', available: true },
        { title: 'Moby Dick', author: 'Herman Melville', available: true },
    ];
    return books;
}
function LogFirstAvailable(books) {
    var numberOfBooks = books.length;
    var firstAvailable = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var curretBook = books_1[_i];
        if (curretBook.available) {
            firstAvailable = curretBook.title;
            break;
        }
    }
    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
}
var allBooks = GetAllBooks();
LogFirstAvailable(allBooks);
//# sourceMappingURL=app.js.map