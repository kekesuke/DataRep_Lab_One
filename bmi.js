class BMI{
    //constructor which is getting 2 arguments
   constructor(height,weight){
       //assigning local variable to the arguments
       this.height = height;
       this.weight = weight;
     
   }
   //method to calculate the bmi
   calculateBMI(){
    let bmi = this.weight/(this.height*2);
    return bmi;
   } 

}
//creating a BMI object 
let myBMI = new BMI(2,90);
console.log(myBMI.calculateBMI());