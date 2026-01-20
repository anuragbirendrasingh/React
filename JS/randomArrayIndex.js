let arr = [1,2,3,4,5,6,7,8] ;

// let randomIdx = Math.floor(Math.random() * arr.length) ;
// console.log(randomIdx);
// console.log(randomIdx,arr[randomIdx]);


for(let i=0 ; i<arr.length ;i++){
    let idx =  Math.floor(Math.random()*arr.length);
    
    console.log(idx,arr[idx]);
}

