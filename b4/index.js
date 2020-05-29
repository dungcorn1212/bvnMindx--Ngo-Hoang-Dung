var n = Number(prompt('Enter n'))
for( var i = 1; i <= n; i++){
    j = Math.sqrt(i)
    if( ( j - Math.floor(j) ) == 0 ){
        console.log(i)
    }
}

