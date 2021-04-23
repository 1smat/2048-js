document.addEventListener('DOMContentLoaded', () => {
    const gridDisplay = document.querySelector('.grid')
   
    const width = 4
    let squares = []
    let square 
    
    // create a playing board
    function createBoard() {
        for (let i=0; i < width * width; i++) {       
            square = document.createElement('div')
            square.innerHTML = ''
            
         
            gridDisplay.appendChild(square)
            squares.push(square)
        }
        generate()
    }
    createBoard()

   
    // generate a number randomly 
    function generate() {
        setTimeout(function () {
            square.classList.add("box", "faded-out")
            square.classList.remove("faded-out")
            let randomNumber = Math.floor(Math.random() * squares.length)
            if  (squares[randomNumber].innerHTML == 0) {
                squares[randomNumber].innerHTML = 2
        } 
    }, 50)
        
       
        
    }   
 
    // swipe right 
    function moveRight () {
        for (let i=0; i < 16; i++) {
            if (i % 4 === 0) {
                let totalOne = squares[i].innerHTML
                let totalTwo = squares[i+1].innerHTML
                let totalThree = squares[i+2].innerHTML
                let totalFour = squares[i+3].innerHTML
                let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
                
                let filteredRow = row.filter(num => num)
                let missing = 4 - filteredRow.length
                let zeros = Array(missing).fill(' ')
                let newRow = zeros.concat(filteredRow)
                
                squares[i].innerHTML = newRow[0]
                squares[i+1].innerHTML = newRow[1]
                squares[i+2].innerHTML = newRow[2]
                squares[i+3].innerHTML = newRow[3]

            }
        }
    }
    

    // swipe left 
    function moveLeft () {
        for (let i=0; i < 16; i++) {
            if (i % 4 === 0) {
                let totalOne = squares[i].innerHTML
                let totalTwo = squares[i+1].innerHTML
                let totalThree = squares[i+2].innerHTML
                let totalFour = squares[i+3].innerHTML
                
                let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]           
                let filteredRow = row.filter(num => num)
                let missing = 4 - filteredRow.length
                let zeros = Array(missing).fill(' ')
                let newRow = filteredRow.concat(zeros)
               
                squares[i].innerHTML = newRow[0]
                squares[i+1].innerHTML = newRow[1]
                squares[i+2].innerHTML = newRow[2]
                squares[i+3].innerHTML = newRow[3]

            }
        }
    }
    

    // swipe down
    function moveDown() {
        for(let i=0; i < 4; i++) {
            let totalOne = squares[i].innerHTML
            let totalTwo = squares[i+width].innerHTML
            let totalThree = squares[i+(width*2)].innerHTML
            let totalFour = squares[i+(width*3)].innerHTML
            let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)] 

            let filteredColumn = column.filter(num => num)
            let missing = 4 - filteredColumn.length
            let zeros = Array(missing).fill(' ')
            let newColumn = zeros.concat(filteredColumn)

            squares[i].innerHTML = newColumn[0]
            squares[i+width].innerHTML = newColumn[1]
            squares[i+(width*2)].innerHTML = newColumn[2]
            squares[i+(width*3)].innerHTML = newColumn[3]
            
          

        }
    }

    // swipe up
    function moveUp() {
        for(let i=0; i < 4; i++) {
            let totalOne = squares[i].innerHTML
            let totalTwo = squares[i+width].innerHTML
            let totalThree = squares[i+(width*2)].innerHTML
            let totalFour = squares[i+(width*3)].innerHTML
            let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)] 

            let filteredColumn = column.filter(num => num)
            let missing = 4 - filteredColumn.length
            let zeros = Array(missing).fill(' ')
            let newColumn = filteredColumn.concat(zeros)

            squares[i].innerHTML = newColumn[0]
            squares[i+width].innerHTML = newColumn[1]
            squares[i+(width*2)].innerHTML = newColumn[2]
            squares[i+(width*3)].innerHTML = newColumn[3]
          

        }
    }
    

    function combinateRow() {
        for (let i=0; i < 15; i++) {
            if (squares[i].innerHTML === squares[i+1].innerHTML) {
                let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i+1].innerHTML)
                squares[i].innerHTML = combinedTotal
                squares[i+1].innerHTML = 0

            }
        }
    }

    function combinateColumn() {
        for (let i=0; i < 12; i++) {
            if (squares[i].innerHTML === squares[i+width].innerHTML) {
                let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i+width].innerHTML)
                squares[i].innerHTML = combinedTotal
                squares[i+width].innerHTML = 0

            }
        }
    }

    // assign keycodes 
    function control(e) {
        if(e.keyCode === 39) {
            keyRight()
        } else if (e.keyCode === 37) {
            keyLeft()
        } else if (e.keyCode === 38) {
            keyUp()
        } else if (e.keyCode === 40) {
            keyDown()
        }
    } 
    document.addEventListener('keyup', control)

    function keyRight() {
        moveRight()
        combinateRow()
        moveRight()
        generate()
    }

    function keyLeft() {
        moveLeft()
        combinateRow()
        moveLeft()
        generate()

    }

    function keyDown() {
        moveDown()
        combinateColumn()
        moveDown()
        generate()

    }

    function keyUp() {
        moveUp()
        combinateColumn()
        moveUp()
        generate()

    }
})

