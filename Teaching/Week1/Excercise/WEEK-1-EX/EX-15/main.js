// EXERCISE 15: Create multiple student objects and store them in an array called students. Use a combination of for...of and for...in to print each student's details

// Your code here:
let student1 = {
    name: "Student1",
    age: 11,
    major: "Data Science"
}

let student2 = {
    name: "Student2",
    age: 12,
    major: "Software Engineering"
}

let student3 = {
    name: "Student3",
    age: 1,
    major: "Telecommunications and Networking"
}

let studentArr = [student1, student2, student3];

for(let i of studentArr){
    for(let j in i){
        console.log(i[j]);
    }
}

