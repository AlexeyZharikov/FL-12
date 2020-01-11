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

function executeforEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        callback(val);
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
    executeforEach(newArr, function (el) {
        console.log(el * 2)
    });
    
    let newArr2 = [];
    for (let x = 0; x < newArr.length; x++) {
        let val2 = newArr[x];
        callback(val2);
        newArr2.push(callback(val2));
    }

    return newArr2;
}

