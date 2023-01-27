for(let i = 0; i < 81; i++){
    let tile = document.createElement('div');
        tile.style.minWidth = '11.1%';
        tile.style.paddingBottom = '11.1%';
        tile.style.float ='left';
        tile.style.backgroundColor = '#' + randoColor();
        document.body.appendChild(tile); 
}
  function randoColor(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
  }