function tablasmultiplicar(n){
  for( var i=1; i<= 10; i++)
  console.log(i,"*",n,"=",i*n);
}
var tabla;
for( var i=1; i<= 10; i++){
  tabla=parseInt(prompt("ingrese la tabla que desea mostrar: "));
  tablasmultiplicar(tabla);
}