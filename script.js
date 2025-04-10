function outerfunction(){
   let counter = 0;
   function innerfunction(){
    counter ++;
    return counter;
    }
    return innerfunction;

}
const incrementer = outerfunction;
console.log(innerfunction);