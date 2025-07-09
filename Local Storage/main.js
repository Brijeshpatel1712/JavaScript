

let form = document.getElementById('form')

window.addEventListener('load',()=>{
    displaayTask(arr)
})

form.addEventListener('submit',addData)

let arr = JSON.parse(localStorage.getItem('Task')) || [];

function addData(e)
{
    e.prevenDefault();

    let taskName = document.getElementById('task').value
    let priority = document.getElementById('priority').value

    let taskData = {
        taskName,
        priority
    }

    arr.push(taskData)

    let data = JSON.stringify(arr)
    document.getElementById('task').value = ""
    document.getElementById('priority').value = ""
    localStorage.setItem('Task',data)
    displaayTask(arr)
}

function displaayTask(arr)
{
    document.querySelector('tbody').innerHTML = ""
    arr.forEach((el,index)=>{
        
        console.log(el)
        let Row = document.createElement('tr')

        let col1 = document.createElement('td')
        let col2 = document.createElement('td')
        let col3 = document.createElement('td')

        col3.addEventListener('click',()=>{
            deleteTask(index)
        })

        col1.innerText = el.taskName
        col2.innerText = el.priority
        col3.innerText = "DELETE"

        Row.append(col1,col2,col3)

        document.querySelector('tbody').append(Row)


    })
}
    
function deleteTask(index)
{
    arr.splice(index,1)
    localStorage.setItem('Task',JSON.stringify(arr))
    displaayTask(arr)
}


