function x(a, b) {
    return a + b
}

const x = function(a, b) {
    return a + b
}

const x = () => {
    return 'Hello'
}

const x = a => {
    return a + 1
}

const x = (a, b) => {
    return a + b
}

const x = (callback) => (
    (a, b) => (
        callback(a, b)
    )
 )
 
 console.log(x((a, b) => a + b)(7, 3))
 
// const
// let
// var