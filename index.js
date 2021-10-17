function distanceFromHqInBlocks(blocks){
    if (blocks >=42){
        return blocks- 42}
        else if (blocks <42){
            return 42- blocks
        }
 
}
function distanceFromHqInFeet(blocks){
    let distance = distanceFromHqInBlocks(blocks)
    return (distance * 264)
}
function distanceTravelledInFeet(num1,num2){
    let feettravel= Math.abs(num1-num2)
    return (feettravel * 264)
}
function calculatesFarePrice(num1,num2){
    let totaldistance= distanceTravelledInFeet(num1,num2)
    if (totaldistance <=400){
        return 0 }
      else if (totaldistance >400 && totaldistance <=2000){
          return (((totaldistance -400)*2)/100)
      }
      else if (totaldistance >2000 && totaldistance <2500) {
          return 25
      }
     else if (totaldistance >2500 ){
         return "cannot travel that far"
     }

}