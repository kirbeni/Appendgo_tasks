class Car{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = parseInt(year);
    }

    displayInfo = () => {
        console.log(`${this.make} ${this.model} Year: ${this.year}`);
    }

    updateYear = (newYear) => {
        this.year = newYear;
        console.log(`My car new year is ${this.year}`);

    }

    carAge = () => {
        const currentYear = 2024;
        const calculate = currentYear-this.year;
        console.log(`Assuming the currend year is ${currentYear}, your car age is: ${calculate} years old.`);
        
    }

    simulateDriving = (distance, speed) => {
        return new Promise((resolve, reject) => { 
            if (distance <= 0 || speed <= 0) {
                reject(`Distance and speed must be positive number`);
            } else {
                const time = (distance / speed).toFixed(2);
                setTimeout(() => {
                    resolve(`It will be ${time} hours to reach the goal.`);
                }, 2000);
            }
        });
    };
};

let myCar = new Car('Toyota', 'Corolla', '2021');

myCar.displayInfo();

myCar.updateYear(2022);

myCar.carAge();

myCar.simulateDriving(300, 70)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });

myCar.simulateDriving(-10, 20)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });


function cloneCar(car){
    const {make, model, year} = car;
    const clonedCar = new Car(make, model, year);
    return clonedCar;
}

let originalCar = new Car('Frod', 'Mustand', '2020');
let clonedCar = cloneCar(originalCar);  //elmentem a példányt más néven, hozza a class metódusait is magával
clonedCar.displayInfo();
clonedCar.simulateDriving(1000, 98)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });

// 'let' aminek az értéke változhat
// 'const' aminek nem módosítható

