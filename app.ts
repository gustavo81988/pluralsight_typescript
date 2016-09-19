import { Category } from './enums';
import { Book, DamageLogger } from './interfaces';

function GetAllBooks(): Book[]{

    let books = [
        {id:1, title: 'Ulysses', author:'James Joyce', available: true, category: Category.Fiction},
        {id:2, title: 'A Farewell to Arms', author:'Ernes Hemingway', available: false, category: Category.Fiction},
        {id:3, title: 'I know why the caged bird sings', author:'Maya Angelou', available: true, category: Category.Poetry},
        {id:4, title: 'Moby Dick', author:'Herman Melville', available: true, category: Category.Fiction},
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

function GetBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string>{
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

function GetBookByID(id: number): Book{
    const allBooks = GetAllBooks();
    return allBooks.filter(book => book.id === id)[0];
}

function CreateCustomerID(name: string, id:number): string{
    return name + id;
}

function CreateCustomer(name:string, age?:number, city?:string): void{
    console.log('Creating cusomer ' + name);

    if(age){
        console.log('Age: ' + age);
    }

    if(city){
        console.log('City: ' + city);
    }
}


function CheckoutBooks(customer: string, ...bookIDs: number[]):string[]{
    console.log('Checking out books for ' + customer);

    let booksCheckedOut: string[] = [];

    for(let id of bookIDs){
        let book = GetBookByID(id);
        if(book.available){
            booksCheckedOut.push(book.title);
        }
    }

    return booksCheckedOut;
}

function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];
function GetTitles(bookProperty: any): string[]{
    const allBooks = GetAllBooks();
    const foundTitles: string[] = [];
   
    if(typeof bookProperty == 'string'){
        //get all books by a particular author
        for(let book of allBooks){
            if(book.author === bookProperty){
                foundTitles.push(book.title);
            }
        }
    }
    else if(typeof bookProperty == 'boolean'){
        //get all books based on specified availability
        for(let book of allBooks){
            if(book.available === bookProperty){
                foundTitles.push(book.title);
            }
        }
    }

    return foundTitles;
}

function PrintBook(book: Book): void{
    console.log(book.title + ' by ' + book.author);
}

let myBook: Book = {
    id:1,
    title: 'Pride and Prejudice', 
    author:'Jane Austen', 
    available: true, 
    category: Category.Fiction,
    pages: 250,
    markDamaged: (reason: string) => console.log('Damaged: ' + reason)
}

//PrintBook(myBook);
//myBook.markDamaged('missing back cover');


let logDamage: DamageLogger;
logDamage = (damage: string) => console.log('Damaged reported: ' + damage);
logDamage('coffee stains');


//******************************

//let hermansBook = GetTitles('Herman Melville');
//hermansBook.forEach(title=>console.log(title));

//let myBooks: string[] = CheckoutBooks('Thorne',1,3,4);
//myBooks.forEach( title => console.log(titleu));

//let fictionBooks = GetBookTitlesByCategory();
//fictionBooks.forEach(title=> console.log(title));

//CreateCustomer('Michelle');
//CreateCustomer('Leigh', 6);
//CreateCustomer('Marie', 12, 'Atlanta');

/*
let x: number;
x= 5;

let IdGenerator: (chars: string, nums: number) => string;
IdGenerator = (name: string, id: number) => { return id + name };

let myID: string = CreateCustomerID('Daniel',2);
console.log(myID);


//const fictionBooks = GetBookTitlesByCategory(Category.Fiction);
//fictionBooks.forEach( (val, idx, arr) => console.log(++idx + '-'+val) );
*/