function makeNumber(str) {
    let newArr = [];
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '0' || arr[i] === '1' || arr[i] === '2' || arr[i] === '3' || arr[i] === '4' ||
            arr[i] === '5' || arr[i] === '6' || arr[i] === '7' || arr[i] === '8' || arr[i] === '9') {
            newArr.push(arr[i]);
        }
    }
    return newArr.join('');
}

function countNumbers(str) {
    let Object = {};
    let str2 = makeNumber(str);
    let arr = str2.split('');
    let arr0 = [];
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    let arr4 = [];
    let arr5 = [];
    let arr6 = [];
    let arr7 = [];
    let arr8 = [];
    let arr9 = [];
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === '0') {
            arr0.push(arr[i])
            Object[0] = arr0.length;
        } else if (arr[i] === '1') {
            arr1.push(arr[i])
            Object[1] = arr1.length;
        } else if (arr[i] === '2') {
            arr2.push(arr[i])
            Object[2] = arr2.length;
        } else if (arr[i] === '3') {
            arr3.push(arr[i])
            Object[3] = arr3.length;
        } else if (arr[i] === '4') {
            arr4.push(arr[i])
            Object[4] = arr4.length;
        } else if (arr[i] === '5') {
            arr5.push(arr[i])
            Object[5] = arr5.length;
        } else if (arr[i] === '6') {
            arr6.push(arr[i])
            Object[6] = arr6.length;
        } else if (arr[i] === '7') {
            arr7.push(arr[i])
            Object[7] = arr7.length;
        } else if (arr[i] === '8') {
            arr8.push(arr[i])
            Object[8] = arr8.length;
        } else if (arr[i] === '9') {
            arr9.push(arr[i])
            Object[9] = arr9.length;
    }
    return Object;
}
countNumbers();