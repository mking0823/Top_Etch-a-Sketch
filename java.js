const playArea =  document.querySelector("div.playArea")
let area = 50 *16
playArea.style.cssText = `height: ${area}px ;width:${area}px;`
const tiles = document.createElement("div")
tiles.style.cssText = "height:50px ; width:50px; background-color:black"
for(i = 0 ; i<16; i++){
   playArea.append(tiles);
   
}
