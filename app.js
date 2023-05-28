'use strict';

function Employee (FullName, Department, level, imageUrl) {



    this.FullName = FullName;
    this.Department = Department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = this.salary();
    this.id = this.id();
    this.renderEmployees = this.renderEmployees();
    
    
}


Employee.prototype.salary = function salary() {
    let salaryRange;
    switch (this.level) {
      case 'Senior':
        salaryRange = { min: 1500, max: 2000 };
        break;
      case 'Mid-Senior':
        salaryRange = { min: 1000, max: 1500 };
        break;
      case 'Junior':
        salaryRange = { min: 500, max: 1000 };
        break;
      default:
        salaryRange = { min: 0, max: 0 };
    }
    let salary = Math.floor(Math.random() * (salaryRange.max - salaryRange.min + 1)) + salaryRange.min;
    let netSalary = salary - (salary * 0.075);
    return netSalary;

  }
  Employee.prototype.id = function id() {
    let id = Math.floor(Math.random() * 900) + 1000;
    return id;
  }

 


  Employee.prototype.renderEmployees = function renderEmployees()
  {

    let divE = document.createElement("div");
    let body = document.gitElementByTagName("body")[0];
    body.appendChild(divE);
  
    let employeeName = document.createElement(h1);
    employeeName.textContent = FullName;
    divE.appendChild(FullName);
  
  }

  

  let Ghazi = new Employee('Ghazi Samer', 'Administration', 'Senior','assets/Ghazi.jpg');
  let Lana = new Employee('Lana Ali', 'Finance', 'Senior','assets/Lana.jpg');
  let Tamara = new Employee('Tamara Ayoub', 'Marketing','Senior','assets/Tamara.jpg');
  let Safi = new Employee('Safi Walid', 'Administration', 'Mid-Senior','assets/Safi.jpg');
  let Omar = new Employee('Omar Zaid', 'Development', 'Senior','assets/Omar.jpg');
  let Rana = new Employee('Rana Saleh', 'Development', 'Junior', 'assets/Rana.jpg');
  let Hadi = new Employee('Hadi Ahmad', 'Finance', 'Mid-Senior', 'assets/Hadi.jpg');

 
  
  
     
       