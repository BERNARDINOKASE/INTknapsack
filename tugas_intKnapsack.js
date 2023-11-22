function profit(capacity, weights, values, n) {
    let K = [];

    for (let i = 0; i <= n; i++) {
        K[i] = [];
        for (let w = 0; w <= capacity; w++) {
            if (i === 0 || w === 0) {
                K[i][w] = 0;
            } else if (weights[i - 1] <= w) {
                K[i][w] = Math.max(values[i - 1] + K[i - 1][w - weights[i - 1]], K[i - 1][w]);
            } else {
                K[i][w] = K[i - 1][w];
            }
        }
    }

    return K[n][capacity];
}

// Contoh penggunaan:
const weights = [6, 5, 10, 5];
const values = [12, 15, 50, 10];
const capacity = 16;
const n = values.length;

const maxValue = profit(capacity, weights, values, n);

console.log(`Nilai Keuntungan : ${maxValue}`);
console.log(`Nilai bobot : ${minValue}`);
// console.log("")