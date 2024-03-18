import students from "../js/students.json" assert { type: "json" }
import menuTemplate from '../templates/menu.hbs'


const container = document.querySelector(".container")
const btnFilterAge = document.querySelector("#btnFilterAge")
const btnFilterGrade = document.querySelector("#btnFilterGrade")


const noFilterStudent = menuTemplate(students)
container.insertAdjacentHTML('beforeend', noFilterStudent);

btnFilterAge.addEventListener("click", fFilterAge)
btnFilterGrade.addEventListener("click", fFilterGrade)

function fFilterAge() {
    container.innerHTML = ""

    const ageFilteredSudents = students.sort((firstStudent, secondStudent) => firstStudent.age - secondStudent.age)
    const menuAgeFilteredSudents = menuTemplate(ageFilteredSudents)
    container.insertAdjacentHTML('beforeend', menuAgeFilteredSudents);
}

function fFilterGrade() {
    container.innerHTML = ""
    const gradeFilteredSudents = students.sort((firstStudent, secondStudent) => firstStudent.grade - secondStudent.grade)
    const menuAgeFilteredSudents = menuTemplate(gradeFilteredSudents)
    container.insertAdjacentHTML('beforeend', menuAgeFilteredSudents);
}







