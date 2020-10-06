class Vehicle{
    //creating a constructor which takes three arguments(parameters)
    constructor(make, model, year){
        //assigning local variable to the arguments
        this.make = make;
        this.model = model;
        this.year = year;
      
    }
    //method to print out the moake model and the year to the consol
    Information(){
        console.log(`Make: ${this.make}.`);
        console.log(`Model: ${this.model}.`);
        console.log(`Year:  ${this.year}.`);
    }
}
//let myVehicle = new Vehicle('VW','Gold',2000);
//myVehicle.infortmation();
//creating new class and inherit from Vehicle class using the extands word
class Cars extends Vehicle{
    //constructor which takes four arguments(parameters)
    constructor(make, model, year, doors){
        //calling the constructor from vechicle class using the super word
        super(make, model, year);
        this.doors = doors;
    }
    //creating a Information method so we can print out the information about the car to the console.
    Information(){
        //calling the information method from the vehicle class using the super word
        super.Information();
        console.log(`Doors: ${this.doors}.`);
    }
}
//creating myCar using the Cars class 
let myCar = new Cars('VW','Passat', 2020, 5);
//printing the information about the object
myCar.Information();