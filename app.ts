function GetAllBooks(){

    let books = [
        {title: 'Ulysses', author:'James Joyce', available: true, category: Category.Fiction},
        {title: 'A Farewell to Arms', author:'Ernes Hemingway', available: false, category: Category.Fiction},
        {title: 'I know why the caged bird sings', author:'Maya Angelou', available: true, category: Category.Poetry},
        {title: 'Moby Dick', author:'Herman Melville', available: true, category: Category.Fiction},
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

enum Category {Biography, Poetry, Fiction, History, Children}


function GetBookTitlesByCategory(categoryFilter: Category): Array<string>{
    console.log("Getting books titles in category: "+ Category[categoryFilter]);
    
    const allBooks = GetAllBooks();
    const filteredTitles: string[] = [];

    for(let curretBook of allBooks){
        if(curretBook.category == categoryFilter){
            filteredTitles.push(curretBook.title)
        }
    }

    return filteredTitles;
}


function LogBookTitles(titles: string[]): void{
    for(let title of titles){
        console.log(title);
    }
}

const poetryBooks = GetBookTitlesByCategory(Category.Poetry);
LogBookTitles(poetryBooks);