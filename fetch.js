const getBtn = document.getElementById('get-btn')
const postBtn = document.getElementById('post-btn')
//fetch -> Promise

const sendHttpRequest = (method, url, data)=>{
    return fetch(url, {
        method:method,
        body: JSON.stringify(data),
        headers: data ? { 'Content-Type': 'application/json'} : {}
    }).then(response =>{
        if(response.status >=400){
            // ! response.ok
            return response.json().then(errResData=> {
                const error = new Error('Something went wrong!');
                error.data = errResData;
                throw error;
            })
        }
        response.json()   
    })
}

const getData = ()=>{
    // sendHttpRequest( 'GET','https://reqres.in/api/users')
    fetch('https://reqres.in/api/users').then(response => response.json())
    .then(responseData => {
        console.log(responseData)
    })
}

const postData = ()=>{
    sendHttpRequest('POST', 'https://reqres.in/api/register', {
        email:'eve.holt@reqres.in',
        password:'passwd1234'
    })
    .then(responseData => console.log(responseData))
    .catch(err=> console.log(err, err.data))
}



getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', postData)