const getBtn = document.getElementById('get-btn')
const postBtn = document.getElementById('post-btn')
//fetch -> Promise



const getData= function(){
    axios.get('https://reqres.in/api/users').then(response=>console.log(response.data.data[0]))
}

const postData= ()=> {
    axios.post('https://reqres.in/api/register', {
        email:'eve.holt@reqres.in',
        password:'passwd1234'
    }).then(response => console.log(response))
    .catch(err=>console.log(err, err.response))
}





getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', postData)