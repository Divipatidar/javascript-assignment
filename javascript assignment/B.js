function sortArrayDescending(arr) {
    let len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter an array of numbers (e.g., 5,2,9,1,5,6): ', (input) => {
    const inputArray = input.split(',').map(num => parseInt(num));
    sortArrayDescending(inputArray);
    console.log('Sorted array in descending order:', inputArray);
    rl.close();
});
