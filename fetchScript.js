
//res는 "ReadableStream"
// 404 있어도 fetch api는 항상 succeed 임
// 그래서  if(res.ok){}else{}로 첵크하는 것 좋음

const getBtn = document.getElementById('get-btn')
const postBtn = document.getElementById('post-btn')

const getFetch = ()=>{
    fetch('https://reqres.in/api/users')
        .then(res=>{
            if (res.ok) {
                console.log('SUCCESS')
            }else {
                console.log('Not successful')
            }
            return res.json()
        })
        .then(data=> console.log(data))
        .catch(error=> console.log('Error'))
}
function postFetch() {
    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'User 1',
            job: 'Police'
        })
    }).then(res=> res.json())
      .then(data => console.log(data))
      .catch(error => console.log('ERROR'))
}



getBtn.addEventListener('click', getFetch)
postBtn.addEventListener('click', postFetch)