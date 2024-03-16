/** @format */

class Department {
  private name: string;
  private employees: string[] = [];
  private lastReport: string;
  constructor(n: string, private reports: string[]) {
    this.name = n;
    this.lastReport = reports[0];
  }
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found. ");
  }
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a value!");
    }
    this.addReport(value);
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  describe(this: Department) {
    console.log("Department: " + this.name);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
const accounting = new Department("Sina", ["Ali", "Ava"]);
accounting.mostRecentReport = "Year End Report";
console.log(accounting.mostRecentReport);
accounting.addReport("Something went wrong...");
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.describe();
accounting.printEmployeeInformation();  
// const accountingCopy = { name: "Dummy", describe: accounting.describe };
// accountingCopy.describe();
