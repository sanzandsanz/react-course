console.log('util.js');

const addition = (x,y) => { return x + y}
const sub = (x,y) => { 
    if(x > y)
    {
        return x - y
    }
    else{
        return y - x
    }
}

export { addition, sub }