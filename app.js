'use strict';

function Employee (FullName, Department, level, imageUrl) {



    this.FullName = FullName;
    this.Department = Department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = this.salary();
    this.id = this.id();
    
    
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

  Employee.prototype.renderEmployeeCard = function () {

    let employeeCard = document.createElement("div");
    employeeCard.classList.add("employee-card");
  
    let image = document.createElement("img");
    image.src = this.imageUrl;
    image.alt = this.FullName;
    employeeCard.appendChild(image);
  
    let name = document.createElement("h3");
    name.textContent = this.FullName;
    employeeCard.appendChild(name);
  
    let id = document.createElement("p");
    id.innerHTML = "<span>ID:</span> " + this.id;
    employeeCard.appendChild(id);
  
    let salary = document.createElement("p");
    salary.innerHTML = "<span>Salary:</span> $" + this.salary;
    employeeCard.appendChild(salary);
  
    let level = document.createElement("p");
    level.innerHTML = "<span>Level:</span> " + this.level;
    employeeCard.appendChild(level);
  
    let department = document.createElement("p");
    department.innerHTML = "<span>Department:</span> " + this.Department;
    employeeCard.appendChild(department);
  
    return employeeCard;
  }


  
  

  let Ghazi = new Employee('Ghazi Samer', 'Administration', 'Senior','assets/Ghazi.jpg');
  let Lana = new Employee('Lana Ali', 'Finance', 'Senior','assets/Lana.jpg');
  let Tamara = new Employee('Tamara Ayoub', 'Marketing','Senior','assets/Tamara.jpg');
  let Safi = new Employee('Safi Walid', 'Administration', 'Mid-Senior','assets/Safi.jpg');
  let Omar = new Employee('Omar Zaid', 'Development', 'Senior','assets/Omar.jpg');
  let Rana = new Employee('Rana Saleh', 'Development', 'Junior', 'assets/Rana.jpg');
  let Hadi = new Employee('Hadi Ahmad', 'Finance', 'Mid-Senior', 'assets/Hadi.jpg');

 
  
  let AdministrationCardsContainer = document.getElementById("administration-cards");
  AdministrationCardsContainer.appendChild(Ghazi.renderEmployeeCard());
  AdministrationCardsContainer.appendChild(Safi.renderEmployeeCard());

  let financeCardsContainer = document.getElementById("finance-cards");
  financeCardsContainer.appendChild(Lana.renderEmployeeCard());
  financeCardsContainer.appendChild(Hadi.renderEmployeeCard());

  let marketingCardsContainer = document.getElementById("marketing-cards");
  marketingCardsContainer.appendChild(Tamara.renderEmployeeCard());
  
  let DevelopmentCardsContainer = document.getElementById("development-cards");
  DevelopmentCardsContainer.appendChild(Ghazi.renderEmployeeCard());
  DevelopmentCardsContainer.appendChild(Safi.renderEmployeeCard());
  










  
     
       