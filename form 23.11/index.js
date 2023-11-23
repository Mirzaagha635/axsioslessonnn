const myForm = document.getElementById('formm')
const namee = document.getElementById('name') 
const surname = document.getElementById('surname') 
const age = document.getElementById('age')



myForm.addEventListener('submit', function (event) {
    event.preventDefault()

    axios.post('https://655d88e99f1e1093c5997177.mockapi.io/student', {
        name: namee.value,
        surname: surname.value,
        age: age.value
    })
    .then(res => {
        console.log(res.data);
    })
} )