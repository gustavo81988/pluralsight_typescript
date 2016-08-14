function GetAllBooks(){

    let books = [
        {title: 'Ulysses', author:'James Joyce', available: true},
        {title: 'A Farewell to Arms', author:'Ernes Hemingway', available: false},
        {title: 'I know why the caged bird sings', author:'Maya Angelou', available: true},
        {title: 'Moby Dick', author:'Herman Melville', available: true},
    ];

    return books;
}

function LogFirstAvailable(books: any) : void{

    let numberOfBooks: number = books.length;
    let firstAvailable: string = '';

    for(let curretBook of books){
        if(curretBook.available){
            firstAvailable = curretBook.title;
            break;
        }
    }

    console.log('Total Books: '+numberOfBooks);
    console.log('First Available: '+firstAvailable);

}

const allBooks = GetAllBooks();
LogFirstAvailable(allBooks);