var a = Number(prompt('Enter a'))
var b = Number(prompt('Enter b'))
var tong_uoc_a = 0
var tong_uoc_b = 0
for(var i = 1; i < a; i++){
    if(a % i == 0)
        tong_uoc_a += i
}
for(var i = 1; i < b; i++){
    if(b % i == 0)
        tong_uoc_b += i
}
if(tong_uoc_a == b && tong_uoc_b == a){
    console.log("YES")
}
else{
    console.log("NO")
}
