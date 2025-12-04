let form = document.getElementById("form")

window.addEventListener('load',()=>{
    DisplayTask(arr)
})


form.addEventListener("submit", addData)

let arr =  [];



function addData(e) {

    e.preventDefault()
     
    let taskName  = document.getElementById("task").value
    let priority = document.getElementById("priority").value;

    let taskData = {
        taskName,
        priority
    }
    arr.push(taskData)
    localStorage.setItem("Task", JSON.stringify(arr))
    DisplayTask(arr)
    document.getElementById("task").value =""
    document.getElementById("priority").value = ""


}

function DisplayTask(arr) {
    document.querySelector("tbody").innerHTML = ""
    arr.forEach((el,index)=>{
      
        let row = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")

        td1.innerText = el.taskName
        td2.innerText = el.priority
        td3.innerText = "Delete"
        td3.addEventListener('click',()=>{
            deleteTask(index)
        })

        row.append(td1,td2,td3)
        document.querySelector("tbody").append(row)


    })
}

function deleteTask(index)
{
    arr.splice(index,1)
    localStorage.setItem("Task", JSON.stringify(arr))
    DisplayTask(arr)
}