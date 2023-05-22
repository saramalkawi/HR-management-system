'use strict';
let Ghazi = {
    

    FullName : 'Ghazi Samer',

    imageUrl: 'https://www.google.com/search?q=men+picture&rlz=1C1GCEA_enJO999JO999&oq=men+picture+&aqs=chrome..69i57j0i512.11838j0j7&sourceid=chrome&ie=UTF-8#imgrc=v_5_YaESXTg9tM&bsht=Cgdic2h3Y2hwEgQIBDAB',

    Department : 'Administration',

    level : 'Senior',

    salary : 0,

    id : 0,

    generateEmployeeId : function() {
        let id = Math.floor(Math.random() * 900) + 1000; 
        return id;
      },
      


    calculateSalary : function() {
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
      },

      
    
}

Ghazi.salary = Ghazi.calculateSalary();
Ghazi.salary = Ghazi.generateEmployeeId();


let Lana = {
    
    
    FullName : 'Lana Ali',
    
    
    imageUrl: 'https://www.google.com/search?q=women+picture&rlz=1C1GCEA_enJO999JO999&sxsrf=APwXEdcdYcCfTjiLbDEnRwXHQGp5Z8mglg%3A1684685362806&ei=MkJqZJrDMPHixc8Pz8Gq6AI&ved=0ahUKEwiapO6E5ob_AhVxcfEDHc-gCi0Q4dUDCA8&uact=5&oq=women+picture&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzoJCAAQBxAeELADOgYIABAHEB46CAgAEAcQHhAKSgQIQRgBUPIJWMQeYKImaAJwAHgAgAH5AYgBxgmSAQUwLjMuM5gBAKABAcgBAcABAQ&sclient=gws-wiz-serp#imgrc=oot4quHMjvK0HM&bsht=Cgdic2h3Y2hwEgQIBDAB',

    Department : 'Finance',
    
    level : 'Senior',

    salary : 0,

    id : 0,


    generateEmployeeId : function() {
        let id = Math.floor(Math.random() * 900) + 1000;
        return id;
      },

    calculateSalary : function() {
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
      },
    
}

  Lana.salary = Lana.calculateSalary();
  Lana.salary = Lana.generateEmployeeId();

    
let Tamara = {
    
        
    FullName : 'Tamara Ayoub',
               
    imageUrl: 'https://www.google.com/search?q=women+picture&rlz=1C1GCEA_enJO999JO999&sxsrf=APwXEdcdYcCfTjiLbDEnRwXHQGp5Z8mglg%3A1684685362806&ei=MkJqZJrDMPHixc8Pz8Gq6AI&ved=0ahUKEwiapO6E5ob_AhVxcfEDHc-gCi0Q4dUDCA8&uact=5&oq=women+picture&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzoJCAAQBxAeELADOgYIABAHEB46CAgAEAcQHhAKSgQIQRgBUPIJWMQeYKImaAJwAHgAgAH5AYgBxgmSAQUwLjMuM5gBAKABAcgBAcABAQ&sclient=gws-wiz-serp#imgrc=7SIL0sWMWD16QM&bsht=Cgdic2h3Y2hwEgQIBDAB',

    Department : 'Marketing',
        
    level : 'Senior',

    salary : 0,

    id : 0,


    generateEmployeeId : function() {
        let id = Math.floor(Math.random() * 900) + 1000; 
        return id;
      },

      calculateSalary : function() {
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
      },
        
}
Tamara.salary = Tamara.calculateSalary();
Tamara.salary = Tamara.generateEmployeeId();

let Safi  = {
    
            
    FullName : 'Safi Walid',          
  
    imageUrl: 'https://www.google.com/search?q=men+picture&rlz=1C1GCEA_enJO999JO999&oq=men+picture+&aqs=chrome..69i57j0i512.11838j0j7&sourceid=chrome&ie=UTF-8#imgrc=l4ZbIpfEZ6w9zM&bsht=Cgdic2h3Y2hwEgQIBDAB',
            
    Department : 'Administration',
            
    level : 'Mid-Senior',

    salary : 0,

    id : 0,


    generateEmployeeId : function() {
        let id = Math.floor(Math.random() * 900) + 1000; 
        return id;
      },

    calculateSalary : function() {
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
      },
            
}

Safi.salary = Safi.calculateSalary();
Safi.salary = Safi.generateEmployeeId();

let Omar = {
    
                        
    FullName : 'Omar Zaid',
       
    imageUrl:'https://www.google.com/search?q=men+picture&rlz=1C1GCEA_enJO999JO999&oq=men+picture+&aqs=chrome..69i57j0i512.11838j0j7&sourceid=chrome&ie=UTF-8#imgrc=pD2XsonmQW76BM&bsht=Cgdic2h3Y2hwEgQIBDAB',

    Department : 'Development',
                        
    level : 'Senior',

    salary : 0,

    id : 0,


    generateEmployeeId : function() {
        let id = Math.floor(Math.random() * 900) + 1000; 
        return id;
      },

      calculateSalary : function() {
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
      },
                        
}

Omar.salary = Omar.calculateSalary();
Omar.salary = Omar.generateEmployeeId();

let Rana = {
    
                        
    FullName : 'Rana Saleh',
                        
  

    imageUrl: 'https://www.google.com/search?rlz=1C1GCEA_enJO999JO999&sxsrf=APwXEdc_uneommt0s6LWMczdHiYUEmaqDw:1684685369425&q=women+picture&tbm=isch&source=univ&fir=vtqQRrAwg6EcDM%252CjjEgRYASCasmzM%252C_%253BzxjJzGqy4X-MGM%252C7UmgYVfZYRF64M%252C_%253Bt53oOkAcEXgPwM%252C83i0JGUU0vDxuM%252C_%253Boot4quHMjvK0HM%252ClVBtkykEdkmmjM%252C_%253B7SIL0sWMWD16QM%252CoSEf4_B1kAvfvM%252C_%253BfYotdYw7qZV0UM%252C83i0JGUU0vDxuM%252C_%253BFNY6d3liN9FhEM%252CjjEgRYASCasmzM%252C_%253BB1fZJIrdmsHPbM%252ClVBtkykEdkmmjM%252C_%253BhQyXZ_HMX9y9eM%252CQhZ6SHUi-363AM%252C_%253BONEjkVOuEIBZbM%252CIhooW0grXfEemM%252C_%253BdqdkD4y4bfby5M%252C7UmgYVfZYRF64M%252C_%253BCt-uiOtx-b-3mM%252CuKB70qhYa7cBnM%252C_&usg=AI4_-kRbjrBPTgThVmfH9lXa6DUwAaHIWQ&sa=X&ved=2ahUKEwjSuIKI5ob_AhUUSPEDHWVcBIMQ7Al6BAgTEFM&biw=1536&bih=714&dpr=1.25#imgrc=dqdkD4y4bfby5M',
                        
    Department : 'Development',
                        
    level : 'Junior',

    salary : 0,

    id : 0,


    generateEmployeeId : function() {
        let id = Math.floor(Math.random() * 900) + 1000; 
        return id;
      },

      calculateSalary : function() {
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
      },
                        
}

Rana.salary = Rana.calculateSalary();
Rana.salary = Rana.generateEmployeeId();


let Hadi = {
    
                        
    FullName : 'Hadi Ahmad',
        
    imageUrl: 'https://www.google.com/search?q=men+picture&rlz=1C1GCEA_enJO999JO999&oq=men+picture+&aqs=chrome..69i57j0i512.11838j0j7&sourceid=chrome&ie=UTF-8#imgrc=yF7tTQ5yEKg6yM&bsht=Cgdic2h3Y2hwEgQIBDAB',

    Department : 'Finance',
                        
    level :'Mid-Senior',

    salary : 0,

    id : 0,


    generateEmployeeId : function() {
        let id = Math.floor(Math.random() * 900) + 1000;
        return id;
      },
        
      calculateSalary : function() {
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
      },
}

Hadi.salary = Hadi.calculateSalary();
Hadi.salary = Hadi.generateEmployeeId();

function renderEmployees() {
      
      document.write('Employee name: ' + Ghazi.FullName + '<br>');
      document.write('Employee salary: ' + Ghazi.salary + '<br><br>');

      document.write('Employee name: ' + Lana.FullName + '<br>');
      document.write('Employee salary: ' + Lana.salary + '<br><br>');

      document.write('Employee name: ' + Tamara.FullName + '<br>');
      document.write('Employee salary: ' + Tamara.salary + '<br><br>');

      document.write('Employee name: ' + Safi.FullName + '<br>');
      document.write('Employee salary: ' + Safi.salary + '<br><br>');

      document.write('Employee name: ' + Omar.FullName + '<br>');
      document.write('Employee salary: ' + Omar.salary + '<br><br>');

      document.write('Employee name: ' + Rana.FullName + '<br>');
      document.write('Employee salary: ' + Rana.salary + '<br><br>');

      document.write('Employee name: ' + Hadi.FullName + '<br>');
      document.write('Employee salary: ' + Hadi.salary + '<br><br>');
    
  }
  renderEmployees();