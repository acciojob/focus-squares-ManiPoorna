
const squares = document.getElementsByClassName("square");
// console.log(squares)

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("mouseover", (e) => {
        const id = e.target.id
        console.log(id)
        for (let i = 0; i < squares.length; i++) {
            if(squares[i].id !== id){
                squares[i].style.backgroundColor = "#6F4E37";
            }            
        }
    });
    for (let j = 0; j < squares.length; j++) {
        squares[j].addEventListener('mouseout',()=>{
            squares[i].style.backgroundColor = "#E6E6FA"
        })        
    }
}