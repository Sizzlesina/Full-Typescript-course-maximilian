/** @format */

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startData: Date;
};

type ElevatedEmployee = Admin & Employee;

const el: ElevatedEmployee = {
  name: "Sina",
  privileges : ["create-server"],
  startData: new Date(),
};
