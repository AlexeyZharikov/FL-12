const NUM1 = 1;
const NUM2 = 2;

function convert() {
    let arr = [];
    for (let i = 0; i <= arguments.length; i++) {
        let val = arguments[i];
        if (typeof val === 'number') {
            arr.push(val.toString());
        } else if (typeof val === 'string') {
            arr.push(parseInt(val));
        }
    }
    return arr;
}

function executeforEach(arr, cbfunc) {
    for (let i = 0; i < arr.length; i++) {
        cbfunc(arr[i]);
    }

}

function mapArray(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let val1 = arr[i];
        if (typeof val1 === 'string') {
            newArr.push(parseInt(val1));
        } else {
            newArr.push(parseInt(val1));
        }
    }
    let newArr2 = [];
    for (let x = 0; x < newArr.length; x++) {
        let val2 = newArr[x];
        callback(val2);
        newArr2.push(callback(val2));
    }
    arr = newArr2;
    executeforEach(arr, function (el) {
        console.log(el * 2)
    });
    return arr;

}

function filterArray(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (callback(val) === true) {
            newArr.push(val);
        }
    }
    arr = newArr;
    executeforEach(arr, function (el) {
        console.log(el * 2)
    });
    return newArr;
}

function flipOver(str) {
    let arr = [];
    let i = str.length;
    while (i--) {
        arr.push(str[i]);
    }
    return arr.join('');
}

function makeListFromRange(arr) {
    let val1;
    let val2;
    let newArr = arr;
    for (let i = 0; i < arr.length; i++) {
        val1 = arr[0];
        val2 = arr[1];
    }
    let lokalArr = [];
    let val = val1;
    for (let x = 0; x < val2 - val1 - 1; x++) {
        val = val + NUM1;
        lokalArr.push(val);
    }
    return newArr = [val1, ...lokalArr, val2];
}

const actors = [{
        name: 'tommy',
        age: 36
    },
    {
        name: 'lee',
        age: 28
    }
];


function getArrayOfKeys(arr, key) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i][key]);
    }
    return newArr;

}

function substitute(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 30) {
            newArr.push(arr[i])
        } else newArr.push('*');
    }
    mapArray(newArr, function (el) {
        return el + 3
    });
    return newArr;

}