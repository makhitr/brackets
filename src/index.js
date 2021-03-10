module.exports = function check(str, bracketsConfig) {
  //bracketsConfig - the array of pairs open-closed brackets
  // your solution  TRUE OR FALSE
let brackets = str.split('');
let m = 0;
let array = [];  
for (let i=0; i < brackets.length; i++) {  
     for (let j=0; j <  bracketsConfig.length; j++) { 
        if (brackets[i] == bracketsConfig[j][0]) {
            if (bracketsConfig[j][0] == bracketsConfig[j][1]) { 
                if (brackets[i]  == array[array.length-1]) {
                    array.pop();
                } else {
                    array.push(bracketsConfig[j][1]);
                }
            } else {
            array.push(bracketsConfig[j][1]);
            }
        } else if (brackets[i] == bracketsConfig[j][1]) { // закр
            if (brackets[i]  == array[array.length-1]) {         
                 array.pop();      
             } else { 
              return false;
             }  
            } 
      }
    }
   return array.length == 0;
}