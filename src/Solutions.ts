{
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
      return input.toLowerCase();
    } else {
      return input.toUpperCase();
    }
  }

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    const filterItems: { title: string; rating: number }[] = [];
    for (let i = 0; i < items.length; i++) {
      if (items[i].rating >= 4) {
        filterItems.push(items[i]);
      }
    }
    return filterItems;
  }
  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
  ];

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    var result: T[] = [];
    for (let i = 0; i < arrays.length; i++) {
      if (arrays[i].length > 0) {
        result = result.concat(arrays[i]);
      }
    }
    return result;
  }

  class Vehicle {
    private make: string;
    private year: number;
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
    public getInfo(): string {
      return `Make ${this.make}, Year: ${this.year}`;
    }
  }
  class Car extends Vehicle {
    private model: string;
    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }
    public getModel(): string {
      return `Model: ${this.model}`;
    }
  }
  const myCar = new Car("Toyota", 2020, "Corolla");
  myCar.getInfo();
  myCar.getModel();

  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }

  interface Product {
    name: string;
    price: number;
  }

  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    }
    var mostExp = products[0];
    for (let x = 1; x < products.length; x++) {
      if (products[x].price > mostExp.price) {
        mostExp = products[x];
      }
    }
    return mostExp;
  }

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
  ];

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  }
  async function squareAsync(n: number): Promise<number> {
    return new Promise((res, rej) => {
      if (n < 0) {
        rej("Negative numbers not allow");
      } else {
        setTimeout(() => {
          res(n * n);
        }, 1000);
      }
    });
  }
}
