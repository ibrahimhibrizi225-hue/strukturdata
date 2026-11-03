//let teman = ['Rizki', 'Yono', 'Azhar', 'Nino', 'Hibrizi'];

//console.log('jumlah teman:', teman.length);
//console.log('teman pertama:', teman[0]);
//console.log('teman terakhir:', teman[teman.length-1]);

//for (let N = 0; N < teman.length; N++) {
//    console.log((N + 1) + '. ' + teman[N]); }

let nilai = [90, 80, 70, 60, 50];
let jumlah = 0;
let tertinggi = nilai[0];
let terendah = nilai[0];

console.log('jumlah nilai:', jumlah, nilai.length);
console.log('rata-rata nilai:', jumlah / nilai.length);
console.log('nilai tertinggi:', tertinggi);
console.log('nilai terendah:', terendah);

for (let I = 0; I < nilai.length; I++) {
    console.log((I + 1) + '. ' + nilai[I]); console.log(typeof(nilai[I]));
    jumlah = jumlah + nilai[I];
    if (nilai[I] > tertinggi) {
        tertinggi = nilai[I];
    }
    if (nilai[I] < terendah) {
        terendah = nilai[I];
    }
}