class Song {
  constructor(
    public name: string,
    public artist: string,
    public duration: number,
    public movie: string
  ) {}
}

let s1 = new Song("Naina", "Arijit Singh", 3.49, "Dangal");

// class with this keyword

class Device {
  public name;
  public price;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

const d1 = new Device("Moto G62" , 15999)


// Access MOdifier

//public private protected default

