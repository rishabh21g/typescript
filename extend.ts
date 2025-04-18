interface Book {
    name: string; 
    price : number;
}

// interface EBOOK{
//     name: string;
//     price : number;
//     fileSize : number;
//     format: string;
// }

interface EBOOK extends Book{
    fileSize : number;
    format: string;
}

// interface AUDIOBOOK {
//     name: string;
//     price: number;
//     duration: number;
//     fileSize: number;
//     format: string;
// }

interface AUDIOBOOK extends EBOOK{
    duration : number;
}

// There is three interfaces with repetations what we can do to avoid repetations !

interface Book {
    size : number;
} // merge with og one


const book: Book = {
    name : "NCERT MATHS",
    price : 185,
    size:353
}

const audiobook : AUDIOBOOK={
    name: "Quantum Mechanics",
    price:589,
    duration :25,
    fileSize:89,
    format:".mp3",
    size:900
}

// merging in interface is allowed but not in alias