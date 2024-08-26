// Q1. Create an array with 5 students names, after that create a function which takes 2 parameters (allStudents , studentName) iterate over all students and find that specific user "studentName"

function studentInfo(allStudents, studentName) {
  let length = allStudents.length;
  let value = false;
  for (let i = 0; i < length; i++) {
    if (allStudents[i] == studentName) {
      console.log(`${studentName} found on ${i + 1} positon`);
      value = true;
    }
  }
  if (!value) {
    console.log(`${studentName} not found !`);
  }
}

let allStudents = ["Radha", "Krishna", "Sita", "Ram", "Hanuman"];
studentInfo(allStudents, "Radha");
