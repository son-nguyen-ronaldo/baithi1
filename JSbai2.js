function checkNum() {
    let arr = [1, 2, 3, 4, 5, 6 , 7, 8, 9];
    let aa = +prompt("Mời bạn nhập vào số")
    for (let i = 0; i < arr.length; i++) {
        if (aa == arr[i]) {
            alert(aa + " có nằm trong mảng arr va vi tri la " + i);
            break;
        }
    }
}
checkNum()