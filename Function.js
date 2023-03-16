const name="Jeevan";

function greet(){
  console.log((`Hello ${name}\n`).repeat(4));
  return 11;
}
x=greet()

function adder(n1,n2){
  console.log(n1+n2)
}
adder(2,4)

function upper(s){
  return s.split('').map(function(c){
    return 'a'<=c && c<='z' ? String.fromCharCode(c.charCodeAt(0)-32):c
  }).join('')
}
console.log(upper('jadhjah'))

const upp=(s)=>{
  return s.toUpperCase()
}
console.log(upp('jdajas'))