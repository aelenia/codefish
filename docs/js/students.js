const templateEl = document.querySelector('.template__studentlist')
console.log(templateEl)

const listTemplate = templateEl.innerHTML
console.log(listTemplate)

const studentListHtml = document.querySelector('.students__list')
const studentList = [
    { name: 'Alexa', email: 'Maxmustermann@gmail.com', mobile:'040/12345678', bday:'05.01.1986' },
    { name: 'Christian', email: 'Maxmustermann@gmail.com', mobile:'mobile', bday:'01.01.1980' },
    { name: 'Christina', email: 'Maxmustermann@gmail.com', mobile:'mobile', bday:'01.01.1980' },
    { name: 'Fabian', email: 'Maxmustermann@gmail.com', mobile:'mobile', bday:'01.01.1980' },
    { name: 'Gloria', email: 'Maxmustermann@gmail.com', mobile:'mobile', bday:'01.01.1980' },
    { name: 'Hans', email: 'Maxmustermann@gmail.com', mobile:'mobile', bday:'01.01.1980' },
    { name: 'Janna', email: 'Maxmustermann@gmail.com', mobile:'mobile', bday:'01.01.1980' },
    { name: 'Josefine', email: 'Maxmustermann@gmail.com', mobile:'mobile', bday:'01.01.1980' },
    { name: 'Maren', email: 'Maxmustermann@gmail.com', mobile:'mobile', bday:'01.01.1980' },
    { name: 'Maximilian', email: 'Maxmustermann@gmail.com', mobile:'mobile', bday:'01.01.1980' },
    { name:  'Merle', email: 'Maxmustermann@gmail.com', mobile:'mobile', bday:'01.01.1980' },
    { name: 'Michael', email: 'Maxmustermann@gmail.com', mobile:'mobile', bday:'01.01.1980' },
    { name: 'Natalia', email: 'Maxmustermann@gmail.com', mobile:'mobile', bday:'01.01.1980' },
    { name: 'Philipp', email: 'Maxmustermann@gmail.com', mobile:'mobile', bday:'01.01.1980' },
    { name: 'Barni', email: 'Maxmustermann@gmail.com', mobile:'mobile', bday:'01.01.1980' },
]

studentList.forEach(createStudentList)

function createStudentList(student, index){
    const listItem = listTemplate
    .replace('#name#', student.name )
    .replace('#email#', student.email )
    .replace('#mobile#', student.mobile )
    .replace('#bday#', student.bday )
    .replace(/#id#/g, index)
    studentListHtml.insertAdjacentHTML('beforeend', listItem)
}