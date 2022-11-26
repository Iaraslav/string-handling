function menu() {
    choice = prompt("1) Find the number of letters L\n2) Find the number of vowels\n3) Check if the word is palindrome");
    return choice;
}

while (true) {
    let choice = menu()
    switch (Number(choice)) {
        case 1:
            let string = prompt("Enter a word or phrase");
            let lnum = string.split(/l/i);
            alert(string + " contains " + (lnum.length-1) + "xL" + " characters");
            break;
        case 2:
            let string2 = prompt("Enter a word or phrase");
            let vownum = string2.split(/[aeiouyåäö]/i);
            console.log(vownum);
            alert(string2 + " contains " + (vownum.length-1) + " vowels");
            break;
        case 3:
            let string3 = prompt("Enter a word or phrase");
            let reversedstr = string3.split("").reverse().join("")
            if (string3.toLowerCase() === reversedstr.toLowerCase()) {
                alert(string3 + " is palindrome.");
            } else {
                alert(string3 + " is NOT palindrome.");
            }
            break;
        default:
            break;
    }
}