var hannoi = function(n,a,b,c) {
    if(n>0){
        hannoi(n-1,a,c,b);
        console.log(a + "=>" + c);
        hannoi(n-1,b,a,c);
    }
}
hannoi(3,"A","B","C");

