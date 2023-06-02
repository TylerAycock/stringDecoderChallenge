//I could not figure this out on my own and had to walkthrouh solution with teacher 

const decoder = (code) => {
    let answer = ``
    for (let i = 0; i < code.length; i++){
        if(Number.isInteger(parseInt(code[i]))){
            i += parseInt(code[i])
        } else {
            answer += code[i]
        }
    }
    return answer
}


console.log(decoder('0h2xce5ngbrdy'))    // 'hey'
console.log(decoder('3vdfn') )           //'n'
// console.log(('0r' ))                    //'r'
// console.log(('2bna0p1mp2osl0e'))         // 'apple'
// console.log(('0y4akjfe0s'))             //'yes'