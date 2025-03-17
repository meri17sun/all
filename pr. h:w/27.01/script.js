var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var kisel = arr.length / 2;

for (var i = 0; i < kisel; i++) {
    console.log(`${arr[i]} - ${arr[arr.length - 1 - i]}`);
}
