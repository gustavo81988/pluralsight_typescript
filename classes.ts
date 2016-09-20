import { Book, DamageLogger, Author, Librarian } from './interfaces';

class UniversityLibrarian implements Librarian{

    name: string;
    email: string;
    department: string;

    assistCustomer(custName: string){
        console.log(this.name + ' is assisting ' + custName);
    }

}

class ReferenceItem{
    
    private _publisher : string;
    static  department : string = 'Research';

    public constructor(public title: string, public year: number)
    {
        console.log('Creating a new ReferenceItem...');
    }

    public printItem(): void
    {
        console.log(`${this.title} was published in ${this.year}.`);
        console.log(`Department: ${ReferenceItem.department}`);
    }

    get publisher(): string
    {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher: string)
    {
        this._publisher = newPublisher;
    }
           
}

export{ UniversityLibrarian, ReferenceItem };