
// Create a CustomerOrder class with properties: orderId (string), items (array of objects with name, quantity, price), and status (string). Add a method calculateTotal() that returns the total order amount. Write an async method processPayment() that simulates payment with a Promise that resolves after 2 seconds. After calling the method, change the status to "paid" and print a success message.

class CustomerOrder {
    constructor(orderId, items, status = "pending") {
        this.orderId = orderId;
        this.items = items; 
        this.status = status;
    }

    async processPayment() {
        try {
            const paymentPromise = new Promise((resolve) => {
                setTimeout(() => {
                    resolve("Payment processed successfully");
                }, 2000);
            });

            const result = await paymentPromise;
            this.status = "paid";
            console.log(`${result} for Order ${this.orderId}`);
            return result;
        } catch (error) {
            console.error("Payment processing failed:", error);
            throw error;
        }
    }
}
CustomerOrder.prototype.calculateTotal = function() {
    return this.items.reduce((total, item) => 
        total + (item.quantity * item.price), 0);
}
const order = new CustomerOrder("order123", [
    { name: "Tablet", quantity: 1, price: 5000 },
    { name: "Android", quantity: 2, price: 4000 }
]);

console.log(order.calculateTotal());
order.processPayment().then(() => {
    console.log("Order status:", order.status);
});


// 2.Create a TeamMember class that takes name, role, and an array of tasks (each task is an object with title and completed boolean). Write a prototype method completeTask(taskTitle) that marks a task as completed. Write another method checkProgress() that returns a Promise resolving to "All tasks completed!" or rejecting with "Pending tasks remaining" based on the state of the tasks array.
class TeamMember {
    constructor(name, role, tasks) {
        this.name = name;
        this.role = role;
        this.tasks = tasks; 
    }
    checkProgress() {
        return new Promise((resolve, reject) => {
            const allCompleted = this.tasks.every(task => task.completed);
            if (allCompleted) {
                resolve("All tasks completed!");
            } else {
                reject("Pending tasks remaining");
            }
        });
    }
}
 TeamMember.prototype. completeTask=function(taskTitle) {
        const task = this.tasks.find(task => task.title === taskTitle);
        if (task) {
            task.completed = true;
            return true;
        }
        return false;
    }
const member = new TeamMember("Hagoes", "Student",[
    { title: "Exam", completed: true },
    { title: "Teaching", completed: true }
]);

console.log( member.tasks);
member.completeTask("Exam");
member.checkProgress()
    .then(message => console.log(message))
    .catch(error => console.log(error));
member.completeTask("Test feature");
member.checkProgress()
    .then(message => console.log(message))
    .catch(error => console.log(error));

// 3.Build a Candidate class with properties: name, position, and interviews (array of objects with date, status). Add a method scheduleInterview(date) that pushes a new interview with status "pending". Then write an async function sendConfirmation() that returns a Promise that resolves after 1 second with a message "Interview confirmed with [name]", and log the message.

class Candidate {
  constructor(name, position) {
    this.name = name;
    this.position = position;
    this.interviews = [];
  }

  scheduleInterview(date) {
    this.interviews.push({
      date: date,
      status: "pending"
    });
  }
   async  sendConfirmation() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const message = `Interview confirmed with ${this.name}`;
        console.log(message);
        resolve(message);
      }, 1000);
    });
  }


}
 
const candidate = new Candidate("Lemlem", "Designer");
candidate.scheduleInterview("2025-05-30");
candidate.sendConfirmation(); 
// 4.Design a Course class with properties: title, instructor, and students (array of student objects with name and progress). Add a method updateProgress(studentName, value) that modifies the student’s progress. Create an async method generateCertificate(studentName) that returns a Promise resolving only if the progress is 100, otherwise reject with "Incomplete progress".
class Course{
    constructor(title,instructor){
        this.title=title;
        this.instructor=instructor
        this.students=[];
    }
    addStudent(student){
    this.students.push(student);
}
updateProgress(studentName,value){
    const student=this.students.find(student=>student.name===studentName);
    if(student){
        student.progress=value;
    }
}
async generateCertificate(studentName){
    const student=this.students.find(student=>student.name===studentName);
    return new Promise((resolve, reject)=>{
        if(student && student.progress==100){
            resolve(`Certificate generated for ${studentName}`);
        }
        else{
            reject("Incomplete progress");
        }
    });
}
}

const course = new Course("Mathematics", "Prof. Zeraesenay");
course.addStudent({ name: "Abrhet", progress: 90 });
course.updateProgress("Abrhet", 100);

course.generateCertificate("Abrhet")
  .then(msg => console.log(msg))
  .catch(err => console.log(err)); 

course.generateCertificate("Maryana")
  .then(message => console.log(message))
  .catch(error => console.log(error)); 

// 5.Create a StockTracker class with a property watchlist (array of objects with symbol, threshold, currentPrice). Add a method updatePrice(symbol, newPrice) that updates the stock’s current price. Write an async method checkAlerts() that loops through the watchlist and returns a Promise resolving with a list of stocks where currentPrice >= threshold, or rejecting with "No alerts triggered".
class StockTracker{
    constructor(){
        this.watchlist=[];  
    }
    addStock(symbol,threshold,currentPrice=0){
        this.watchlist.push({symbol,threshold,currentPrice});
    }
    updatePrice(symbol,newPrice){
        const stock=this.watchlist.find(item=>item.symbol===symbol);
        if(stock){
            stock.currentPrice=newPrice;
        }
    }
    async checkAlerts(){
        return new Promise((resolve,reject)=>{
            const triggered=this.watchlist.filter(
                stock=>stock.currentPrice>=stock.threshold
            );
        if (triggered.length > 0) {
        resolve(triggered);
      } else {
        reject("No alerts triggered");
      }
        })
    }
}
const tracker=new StockTracker();
tracker.addStock("XXXX",150,65);
tracker.updatePrice("xxxx",150);

tracker.checkAlerts()
  .then(alerts => console.log("Alerts:", alerts))
  .catch(error => console.log(error));









