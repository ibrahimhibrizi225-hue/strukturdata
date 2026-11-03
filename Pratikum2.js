let nilai = [
    [80, 75, 90],
    [85, 90, 85],
    [70, 80, 85],
    [70, 85, 100]
];
let siswa = ['Budi', 'Ani', 'Citra', 'Maulana'];

for (let b = 0; b < nilai.length; b++) {
    let total = 0;
    for (let k = 0; k < nilai[b].length; k++) {
        total = total + nilai[b][k];
    }
    let rata = total / nilai[b].length;
    console.log(siswa[b] + ' : total ' + total + ', rata-rata ' + rata.toFixed(1)
    + ', matematika ' + nilai[b][0] + ', bahasa indonesia ' + nilai[b][1] + ', bahasa inggris ' + nilai[b][2]);
}

console.log(nilai[2][1]); // Nilai[2][1] adalah 80 karena berada di kolom ke-1 baris ke-2 (indeks dimulai dari 0).