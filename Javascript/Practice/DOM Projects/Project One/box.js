// const allBox = document.querySelectorAll('.box')
//  const body = document.querySelector('body')


// allBox.forEach((box) => {
//     console.log(box);

//     box.addEventListener('click', function(c){
//         console.log(c);
//         console.log(c.target);
//         if (c.target.id === 'boxone') {
//             body.style.backgroundColor='grey'
//        }
//         if (c.target.id === 'boxtwo') {
//             body.style.backgroundColor='yellow'
//         }
//         if (c.target.id === 'boxthree') {
//             body.style.backgroundColor='blue'
//         }
//         if (c.target.id === 'boxfour') {
//             body.style.backgroundColor='red'
//         }
//         if (c.target.id === 'boxfive') {
//             body.style.backgroundColor='white'
//         }
//     })

// })



let box = document.querySelectorAll('.box')
let body = document.querySelector('body')

box.forEach((c) => {
    console.log(c);
    
    c.addEventListener('click', (co) => {
        if (co.target.id === 'boxone') {
            body.style.backgroundColor='grey'
        }
        if (co.target.id === 'boxtwo') {
            body.style.backgroundColor='yellow'
        }
        if (co.target.id === 'boxthree') {
            body.style.backgroundColor='blue'
        }
        if (co.target.id === 'boxfour') {
            body.style.backgroundColor='red'
        }
        if (co.target.id === 'boxfive') {
            body.style.backgroundColor='white'
        }
    })
})

