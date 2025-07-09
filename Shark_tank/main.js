
let mainSection = document.getElementById("data-list-wrapper");

// pitch
let pitchTitleInput = document.getElementById("pitch-title");
let pitchImageInput = document.getElementById("pitch-image");
let pitchCategoryInput = document.getElementById("pitch-category");
let pitchfounderInput = document.getElementById("pitch-founder");
let pitchPriceInput = document.getElementById("pitch-price");
let pitchCreateBtn = document.getElementById("add-pitch");

// Update pitch
let updatePitchIdInput = document.getElementById("update-pitch-id");
let updatePitchTitleInput = document.getElementById("update-pitch-title");
let updatePitchImageInput = document.getElementById("update-pitch-image");
let updatePitchfounderInput = document.getElementById("update-pitch-founder");
let updatePitchCategoryInput = document.getElementById("update-pitch-category");
let updatePitchPriceInput = document.getElementById("update-pitch-price");
let updatePitchBtn = document.getElementById("update-pitch");

//Update price
let updatePricePitchId = document.getElementById("update-price-pitch-id");
let updatePricePitchPrice = document.getElementById("update-price-pitch-price");
let updatePricePitchPriceButton = document.getElementById("update-price-pitch");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterFood = document.getElementById("filter-Food");
let filterElectronics = document.getElementById("filter-Electronics");
let filterPersonalCare = document.getElementById("filter-Personal-Care");

//Search by title/founder

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

// Problem 1. List of pitches on page load [3}



//fatch data 
let arr =[];

function fetchdata()
{
    fetch("http://localhost:3000/pitches")
    .then((res)=>res.json())
    .then((data)=>{
        displaydata(data)
        arr = data
    })
    .catch((err)=>console.log(err))
}
fetchdata();




//display data
function displaydata(data){
   let store = data.map((el)=>{
        let storedata = `
    <a class = "blu" href="discription.html?title=${encodeURIComponent(el.title)}&image=${encodeURIComponent(el.image)}&founder=${encodeURIComponent(el.founder)}&category=${encodeURIComponent(el.category)}&price=${encodeURIComponent(el.price)}&id=${encodeURIComponent(el.id)}&parsunteg=${el.percentage}" >  
    <div class="card" data-id=${el.id} > 
    <div class="card-img"><img src=${el.image} /></div>
    <div class="card-body">
        <h4>${el.id}</h4>
        <h4>${el.title}</h4>
        <p >${el.founder}</p>
        <p>${el.percentage}</p>
        <p>${el.category}</p>
        <p>${el.price}</p>
        <p>${el.description}</p>
     <a href="#" data-id=${el.id} class="card-link">edite</a>
     <button data-id=${el.id} class="card-button">delete</button>
    </div>
    </div>
    </a>
    `
    return storedata
})
    mainSection.innerHTML= store 
}




//add pitch

pitchCreateBtn.addEventListener("click",()=>{
  let obj = {
        title : pitchTitleInput.value ,
        image : pitchImageInput.value,
        category : pitchCategoryInput.value,
        founder : pitchfounderInput.value,
        price : pitchPriceInput.value,
    
    }
    // console.log(obj)
    fetch("http://localhost:3000/pitches",{
     method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(obj),
}).then((res)=>res.json())
.then((data)=>displaydata(data))
.catch((err)=>console.log(err))
})



//delete data

document.addEventListener("click",(e)=>{
    if  (e.target.classList.contains("card-button")) 
    {
           deletetask(e.target.dataset.id)
           
    }
})

function deletetask(id)
{
    fetch(`http://localhost:3000/pitches/${id}`,{
           
          method: 'DELETE',
    }).then((res)=>res.json())
    .then((data)=>{
        alert("delerte sucsseefully")
        console.log(data)
    })
    .catch((err)=>console.log(err))
}



//updet data

document.addEventListener('click',(e)=>{
    if (e.target.classList.contains('card-link'))
    {
        allupdet(e.target.dataset.id)
    }
})
function allupdet(id){
        fetch(`http://localhost:3000/pitches/${id}`)
    .then((res)=>res.json())
    .then((data)=>    
            {
// let updatePricePitchId = document.getElementById("update-price-pitch-id");
// let updatePricePitchPrice = document.getElementById("update-price-pitch-price");
// let updatePricePitchPriceButton = document.getElementById("update-price-pitch");
                updatePitchIdInput.value = data.id
                updatePitchPriceInput.value = data.price
                updatePitchTitleInput.value = data.title
                updatePitchImageInput.value = data.image
                updatePitchfounderInput.value = data.founder
                updatePitchCategoryInput.value = data.category
            }
    )
    .catch((err)=>console.log(err))
}

updatePitchBtn.addEventListener('click',()=>{
     let updateall = {
        id       : updatePitchIdInput.value,
        price    : updatePitchPriceInput.value,
        title    : updatePitchTitleInput.value,
        image    : updatePitchImageInput.value,
        founder  : updatePitchfounderInput.value,
        category : updatePitchCategoryInput.value,
    };

    // console.log(update)
    fetch(`http://localhost:3000/pitches/${updateall.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateall),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log('Updated:', data);
            displaydata(data); 
        })
        .catch((err) => console.log(err));
})



//edit price


document.addEventListener('click',(e)=>{
    if (e.target.classList.contains('card-link'))
    {   
        console.log(e.target.dataset.id)
        editeprice(e.target.dataset.id)
    }
})

function editeprice(id){

    fetch(`http://localhost:3000/pitches/${id}`)
    .then((res)=>res.json())
    .then((data)=>
           
            {
// let updatePricePitchId = document.getElementById("update-price-pitch-id");
// let updatePricePitchPrice = document.getElementById("update-price-pitch-price");
// let updatePricePitchPriceButton = document.getElementById("update-price-pitch");
                    updatePricePitchId.value = data.id
                    updatePricePitchPrice.value = data.price
            }
    )
    .catch((err)=>console.log(err))
}
 
updatePricePitchPriceButton.addEventListener('click', () => {
    let update = {
        id: updatePricePitchId.value,
        price : updatePricePitchPrice.value,
    };

    // console.log(update)//
    fetch(`http://localhost:3000/pitches/${update.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(update),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log('Updated:', data);
            displaydata(data); 
        })
        .catch((err) => console.log(err));
});




//filter data

filterFood.addEventListener('click', () => {
    let filteredData = arr.filter((el) => el.category === "Food");
    displaydata(filteredData);
});

filterElectronics.addEventListener('click', () =>{
    let filtere = arr.filter((el)=> el.category==="Electronics");
    displaydata(filtere);
})

filterPersonalCare.addEventListener('click', () =>{
    let filterPersonalCare = arr.filter((el)=> el.category==="personalcare");
    displaydata(filterPersonalCare);
})



//price low to hig

sortAtoZBtn.addEventListener('click', () => {
    let lowToHigh = arr.slice().sort((a, b) => a.price - b.price); 
    displaydata(lowToHigh);
});

sortZtoABtn.addEventListener('click' , ()=>{
    let high = arr.slice().sort((a,b) => b.price - a.price) ;
    displaydata(high);
})


