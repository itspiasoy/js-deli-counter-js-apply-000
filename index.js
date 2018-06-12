// tell customer to say what number they are, keep track of numbers & increment then
//identigy by number
var katzDeliLine = [];
function takeANumber(katzDeliLine){
  var number = number++;
  katzDeliLine.push(currentName);
  return(`Welcome, ${currentName}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine){
  console.log('string of a', katzDeliLine.length);
 if (katzDeliLine.length === 0){
   return ('There is nobody waiting to be served!')
 }
 else {
   for (var i = 0; i < katzDeliLine.length; i++){
     var currentPerson = katzDeliLine.shift();
     console.log('string of b', i);
     return (`Currently serving ${currentPerson}.`)
  }
    
}
} 

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0){
   return ('The line is currently empty.')
 }
 else{
   for (var i = 0; i < katzDeliLine.length; i++){
     katzDeliLine.splice(i, 1,` ${i+1}. ${katzDeliLine[i]}`)
   }
   return (`The line is currently:${katzDeliLine}`)
 }
}
  
