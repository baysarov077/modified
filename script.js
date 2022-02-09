// Задание 1

let func = (num) => {
    if(num % 2 === 0) {
        return 'число четное'
    } else return 'число не четное'
}
console.log(func(4))

// Задание 2

let positiveOrNot = (num) => {
    if(num > 0) {
        return 'число положительное'
    } else return 'число отрицательное'
}

console.log(positiveOrNot(5))
// Задание 3

let multiplay = (x, y) => {
    return x * y
}
console.log(multiplay(2, 3))

// Задание 4
let difference = (x, y) => {
    if(x > y) {
        return x
    } else return y
}

console.log(difference(10, 45))
// Задание 5 

let str = (string) => {
    return string.length
}
console.log(str('adam'))
// Задание 6

let longest = (str, str2) => {
    if(str.lenght > str2.lenght) {
        return str
    } else return str2
}

console.log(longest('intocode', 'developer'))
// Задание 7

let stringSlice = (str, num) => {
    const arr = []
    let strArr = str.split('')
    for(i = 0; i < num; i++) {
        arr.push(strArr[i])
    }
    if(arr.join('').length < num) {
        return 'текст слишком короткий'
    } else return arr.join('')
    
}
console.log(stringSlice('wghkf', 3))
// Задание 8
//Доработал)
