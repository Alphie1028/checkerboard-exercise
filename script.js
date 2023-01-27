for(let i = 0; i < 81; i++){
    let tile = document.createElement('div');
        tile.style.minWidth = '11.1%';
        tile.style.paddingBottom = '11.1%';
        tile.style.float ='left';

        if(i % 2 === 0){
            tile.style.backgroundColor = 'black';
        }else{
            tile.style.backgroundColor = 'red';
        }
        document.body.appendChild(tile); 
}
