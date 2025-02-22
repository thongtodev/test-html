let arr = [9,2,2,6,5,3];
let count = 0;
let sum = 0;
for(let i = 0; i < arr.length; i++)
{
    if(arr[i] %2 == 0)
    {
        count++;
        sum += arr[i];
    }
}
let avg = sum / count;
console.log(`Trung binh cac so chan: ${avg}`);