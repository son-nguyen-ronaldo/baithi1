function checkVowels(str) {
    let count = 0;

    //Chuyển đầu vào sang dạng chuỗi
    var string = str.toString();

    //Thực hiện lặp
    for (var i = 0; i <= string.length; i++) {

        // Biến count tăng +1 nếu trả về nguyên âm
        if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
            count += 1;
        } else {
            return false;
        }
    }
    return count;
}