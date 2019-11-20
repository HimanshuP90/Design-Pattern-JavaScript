function minOpration(a, b){
    a.sort();
    b.sort();
    let result = 0;
    for (let i = 0; i< a.length; i++) {
        result = result + Math.abs(a[i] - b[i]);
    }
    return result;
}

console.log(minOpration([3,1,1], [1,2,2])); // 2