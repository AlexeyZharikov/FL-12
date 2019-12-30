function pipe(num, func) {
    let funcResuslt = 0;   
    for (let i = 1; i <= arguments.length; i++) {
        if (arguments[i] === func) {
            let res = func(num);
            num = res;
            funcResuslt = res
        } 
    }
return funcResuslt;
}

pipe();