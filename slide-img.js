const items = [
    {
        id: 11,
        img: "./menu-img/item-4.jpeg",
        header: 1,
        color: 'blue'
    },
    {
        id: 11,
        img: "./menu-img/item-5.jpeg",
        header: 2,
        color: "red"
    },
    {
        id: 22,
        img:  "./menu-img/item-3.jpeg",
        header: 3,
        color: "red"
    },
    {
        id: 33,
        img:  "./menu-img/item-6.jpeg",
        header: 4,
        color: "red"
    },
    {
        id: 44,
        img:  "./menu-img/item-1.jpeg",
        header: 5,
        color: "red"
    },
]

const childContainer = document.querySelector('.child-container');
const btnContainer = document.querySelectorAll('.btn-container'); 
const header = document.querySelector('.numberOf');
let count = 0

btnContainer.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const select = e.target.dataset.id
        
        if(select === "prev-btn"){
            count--
            if(count < 0){
                count = items.length - 1
            }
        childContainer.innerHTML = `
        <img class="back-img" src="${items[count].img}" alt="#">
        <h2 class="numberOf">${items[count].header}</h2>`
        }

        if(select === "next-btn"){
            count++
        if(count > items.length - 1) {
                count = 0
        }
        childContainer.innerHTML = `
        <img class="back-img" src="${items[count].img}" alt="#">
        <h2 class="numberOf">${items[count].header}</h2>`
        }
    })
})

