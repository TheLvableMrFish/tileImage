const grid = document.getElementById('grid')

const gridDisplay =(line)=>{

    grid.innerHTML = ''
    for(let i = 0; i < 600; i++){

        let tile = document.createElement('div')
        i < 1 * line && imgGrid[i] == 1 ? tile.className = 'tile black' : tile.className = 'tile'
        // imgGrid.push(0)
        // tile.addEventListener('click', ()=>{
        //     tile.classList.add('black')
        //     imgGrid[i] = 1
        //     console.log(imgGrid)
        // })
        grid.appendChild(tile)
    }
}

gridDisplay(0)

const blockMove =()=> {
    setTimeout(()=>{
        let j = 0
        const interval = setInterval(()=> {
            if(j >= 601) {
                clearInterval(interval)
                return
            }
        
            gridDisplay(j)
            j++
        }, 5)
    }, 700)
}

blockMove()