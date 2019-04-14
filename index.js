// Convert the given sentence from text to title case
let text = 'onyetenyevwe ugwhemuhwem osas'
const transformToTitleCase = text => {
    let newText = text.split(' ');
    const titleCaseText = []
    for(let index = 0; index < newText.length; index++) {
            let titleCaseLetter = newText[index].charAt(0).toUpperCase();
            titleCaseText.push(titleCaseLetter + newText[index].slice(1))
        }
    
    return titleCaseText.join(' ')
}

// Change the first sentence in word to capital letters
let word = ['uvuvwevwevwe', 'onyetenyevwe', 'ugwemuhwem', 'osas']

let newTransformText = []
const transformtoTitleCaseWithMap = word.map (item => {
    let changeUpperCase = item.charAt(0).toUpperCase() + item.slice(1)
    newTransformText.push(changeUpperCase)
    return newTransformText.join(' ')
})

console.log(transformToTitleCase(text))
console.log(newTransformText)

                                                              
