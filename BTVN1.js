let mangGiaiThua = [1];
let giaiThua = 1;

for (let i = 2; i <= 10; i = i + 1){
    giaiThua = giaiThua*i;
    mangGiaiThua.push(giaiThua);
}

console.log(mangGiaiThua);