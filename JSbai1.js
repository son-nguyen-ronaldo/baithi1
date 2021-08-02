function firstEquation(a, b) {
    if (a == 0 && b == 0) {
        document.write('Phương trình vô số nghiệm');
    } else if (a != 0 && b == 0) {
        document.write('Phương trình có nghiệm x = 0');
    } else if (a == 0 && b != 0) {
        document.write("Phương trình vô nghiệm");
    } else {
        document.write('Phương trình có nghiệm duy nhất x = ' + (-b / a));
    }
}

firstEquation(5, 8);
