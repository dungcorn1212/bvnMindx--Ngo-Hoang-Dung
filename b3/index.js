var n = Number(prompt('Enter n'))
var dem = 0;
for(var i = 2; i<=n; i++){
        
    for(var j = 1; j <=i; j++){
        if(i%j == 0){
            dem++
        }
    }
    if(dem == 2){
        console.log(i)
    }
    dem = 0;
    

}