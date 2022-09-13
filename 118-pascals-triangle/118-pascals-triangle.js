/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows) {
    let pascal = [];
    
    if(numRows <= 0){
        return pascal;
    }
    
    pascal.push([1]);
    
    for(let i = 1; i < numRows; i++) {
        let prev = pascal[i -1].length;
        let current = [];
        
        for(let j = 0; j < prev + 1; j++) {
            let num = 1;
            if(j != 0 && j != prev) {
                num = pascal[i - 1][j - 1] + pascal[i - 1][j]
            }
            current.push(num);
        }
        pascal.push(current);
        
    }
    return pascal;
};