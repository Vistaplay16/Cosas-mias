window.onload=comienzo;
function comienzo(){
    document.formulario.boton.onclick=main;
}
let mensajeAlert="";
function main(){
    let NIFCIF=document.formulario.NIFCIF.value;
    let nombre=document.formulario.nombre.value;
    let codigoEmpresa=document.formulario.codigoEmpresa.value;
    let Direccion=document.formulario.Direccion.value;
    let localidad=document.formulario.localidad.value;
    let codigoPostal=document.formulario.codigoPostal.value;
    let telefono=document.formulario.telefono.value;
    let fecha=document.formulario.fechaEmpresa.value;
    let checkBox=document.formulario.checkbox.value;
    let codigoBanco=document.formulario.codigoBanco.value;
    let nSucursal=document.formulario.nSucursal.value;
    let nCuenta=document.formulario.nCuenta.value;
    let IBAN=document.formulario.IBAN.value;
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz";
    let numeros = "0123456789";
    let k=true;

//VALIDACION DE NOMBRE

    if(!isNaN(nombre.substr(0,1))){
        mensajeAlert+="El nombre del titular debe comenzar con una letra\n";
        k=false
    }
    var x=true;
    for (let i = 1; i < nombre.length; i++) {
        if(!letras.includes(nombre[i]) && !numeros.includes(nombre[i]) && nombre[i]!="ª" && nombre[i]!="º" && nombre[i]!="-" && nombre[i]!="."){
            x=false
        }
    }
    if(x==false){
        mensajeAlert+="El nombre del titular no puede contener carcacteres especiales\n";
        k=false
    }
    console.log(nombre);
//VALIDACION DE CODIGO DE EMPRESA
console.log(codigoEmpresa.length)
let kl=true;
for (var i = 0; i < codigoEmpresa.length; i++) {
    var caracter = codigoEmpresa.charAt(i);
    if (!(letras.includes(caracter) || numeros.includes(caracter))) {
        kl = false;
        break;
    }
}
    if(!kl){
        mensajeAlert+="El codigo de la empresa solo puede tener numeros y letras \n";
        k=false
    }
    if (codigoEmpresa.length < 5 || codigoEmpresa.length > 10) {
        mensajeAlert += "El código de la empresa debe tener entre 5 y 10 caracteres.\n";
        k=false
    }
    

//VALIDACION DE NIFCIF
    
    if(esNIFCIF(NIFCIF)=="C2"){
        mensajeAlert+="Se ha introducido un CIF erróneo. El carácter de control es erróneo\n";
        k=false
    }else if(esNIFCIF(NIFCIF)=="N2"){
        mensajeAlert+="Se ha introducido un NIF erróneo. El carácter de control es erróneo\n";
        k=false
    }else{
        mensajeAlert+="No se ha introducido un NIF o CIF\n";
        k=false
    }
//VALIDACION DIRECCION
    if(!(isNaN(Direccion.charAt(0)))){
        mensajeAlert+="La dirección del domicilio del titular debe comenzar con una letra\n"
        k=false
    }
    if (letras.includes(Direccion[Direccion.length - 1]) || numeros.includes(Direccion[Direccion.length - 1])) {
        // LA DIRECCION ACABA POR UNA LETRA O UN DIGITO 
    } else {
        mensajeAlert += "La dirección debe terminar con una letra o un dígito.\n";
        k=false
    }
    for (var i = 1; i < Direccion.length - 1; i++) {
        var caracter = Direccion[i];
        if (!letras.includes(caracter) && !numeros.includes(caracter) && caracter!="º" && caracter!="ª" && caracter!="-" && caracter!="." ) {
            mensajeAlert += "La dirección contiene caracteres no permitidos.\n";
            k=false
            break;
        }
    }

//VALIDACION DE LOCALIDAD

    if(!(isNaN(localidad.charAt(0)))){
        mensajeAlert+="La localidad del domicilio del titular debe comenzar con una letra\n"
        k=false
    }
    if((!letras.includes(localidad.charAt(localidad.length - 1)))){
        mensajeAlert+="La localidad del domicilio del titular debe terminar con una letra\n"
        k=false
    }
    for (var i = 1; i < localidad.length - 1; i++) {
        caracter = localidad[i];
        if (!letras.includes(caracter) && caracter !== ' ') {
            mensajeAlert += "La localidad contiene caracteres no permitidos. Solo se permiten letras y espacios en el medio.\n";
            k=false
            break;
        }
    }
//VALIDACION DE CODIGO POSTAL
if (codigoPostal < 1000 || codigoPostal > 52999) {
    mensajeAlert += "El código postal debe estar comprendido entre 1000 y 52999.\n";
    k=false
}

//VALIDACION DE TELEFONO
    if(telefono.length!=9){
        mensajeAlert +="El teléfono tiene que tener exactamente 9 digitos\n";
        k=false
    }
    console.log(telefono.charAt(0))
    if(telefono.charAt(0)!='6' && telefono.charAt(0)!='9' && telefono.charAt(0)!='7'){
        mensajeAlert +="El primer número del teléfono debe ser 6, 9 u 7\n";
        k=false
    }

//VALIDACION FECHA
//FORMATO DE LA FECHA (XX#XX#XXXX)
var fechaArray=fecha.split("");
    if(!numeros.includes(fechaArray[0]) || !numeros.includes(fechaArray[1])){
        mensajeAlert+="Día de la fecha incorrecto\n"
        k=false
    }
    if(!numeros.includes(fechaArray[3]) || !numeros.includes(fechaArray[4])){
        mensajeAlert+="Mes de la fecha incorrecto\n"
        k=false
    }
    if(!numeros.includes(fechaArray[6]) || !numeros.includes(fechaArray[7]) || !numeros.includes(fechaArray[8]) || !numeros.includes(fechaArray[9])){
        mensajeAlert+="Año de la fecha incorrecto\n"
        k=false
    }

    alert(mensajeAlert);
    if(k==false){
        mensajeAlert="";
    }
    return k;

    
}

function esNIF(NIF){
    var caracteresPersonaFisica="XLKMYZ";
    caracteresPersonaFisica=caracteresPersonaFisica.split("");
    var arrayNIF=NIF.split("");
    var carateresPersonaJuridica=['A','B','C','D','E','F','G','H','J','P','Q','R','S','U','V','W','N'];
    var numeros = "0123456789";
    var letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz";
    var x;
    // COMPROBAR QUE EL NIF TIENE SUS NUEVE CARACTERES
    if(arrayNIF.length<9){
        return 0;
    }
    
    // COMPROBAR SI EL NIF TIENE UNA LETRA AL INICIO
    if(letras.includes(arrayNIF[0])){
        if(carateresPersonaJuridica.includes(arrayNIF[0])){
            // PERSONA JURIDICA
            for (let i = 1; i < arrayNIF.length-1; i++) {
                if(numeros.includes(arrayNIF[i])){
                    x=true;
                }else{
                    x=false;
                    break;
                }
            }
            if(x){
                if(CaracterControl(NIF)){
                    return 3;
                }else{
                    return 1;
                }
            }else{
                alert("Tienes los digitos mal");
            }
        }else if( caracteresPersonaFisica.includes(arrayNIF[0])){
            //PERSONA FISICA
            
            for (let i = 1; i < arrayNIF.length-1; i++) {
                if(numeros.includes(arrayNIF[i])){
                    x=true;
                }else{
                    x=false;
                    break;
                }
            }
            if(x){
                if(CaracterControl(NIF)){
                    return 3;
                }else{
                    return 1;
                }
            }else{
                alert("Tienes los digitos mal");
            }
        }else{
            //alert("La letra del principio esta mal");
        }
    // SI NO TIENE UNA LETRA AL INICIO TIENE QUE TENER UN NUMERO
    }else if(numeros.includes(arrayNIF[0])){
        x=false;
        // SI TIENE UN NUMERO AL INICIO QUIERE DECIR QUE ES UN DNI, Y LE SIGUEN 8 NUMEROS MAS DESPUES DE UNA LETRA HAY QUE VER SI EL CARACTER DE CONTROL ESTA BIEN
        for (let i = 0; i < arrayNIF.length-1; i++) {
            if(numeros.includes(arrayNIF[i])){
                x=true;
            }else{
                //alert("El caracter "+arrayNIF[i]+" está mal escrito");
                break;
            }            
        }
        if(x){
            if(CaracterControl(NIF)){
                return 2;
            }else{
                return 1;
            }
        }
    // SI NO TIENE NI UN NUMERO NI UNA LETRA AL INICIO EL NIF NO ES VALIDO
    }else{
        return 0;
    }

}
function CaracterControl(NIF) {
    var letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz";
    var letrasControl=['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
    var nums;
    if(letras.includes(NIF.charAt(0))){
        nums=NIF.substr(1,7);
    }else{
        nums=NIF.substr(0,8);
    }
    var resto=nums%23;
    var arrayNIF=NIF.split("");
    if(letrasControl[resto]==arrayNIF[arrayNIF.length-1]){
        return true;
    }else{
        return false;
    }
 
}

function esCIF(CIF){
    var arrayCIF=CIF.split("");
    var letrasInicioTL=["A","B","C","D","E","F","G","H","J","U","V"];
    var letrasInicioTN=["P","Q","R","S","W"];
    var numeros="0123456789";
    var x=false;
    var y=false;
    var PosImpares=[];
    var PosPares=[];
    var LetrasdeControl=["J","A","B","C","D","E","F","G","H","I"];
//COMPROBAR QUE EL CIF NO TIENE UN TAMAÑO MENOR A 9(MAS NO PUEDE TENER POR EL MAXLENGTH)
//COMPROBAR QUE EL CIF TIENE UNA LETRA AL PRINCIPIO
if(isNaN(arrayCIF[0])){
    // COMPROBAR SI LA LETRA INICIAL ESTA BIEN
    if(letrasInicioTL.includes(arrayCIF[0]) || letrasInicioTN.includes(arrayCIF[0])){
        // SI LA LETRA INICIAL ESTA BIEN HAY QUE VER SI LOS SIGUIENTES 7 DIGITOS SON NUMEROS
        for (let index = 1; index < arrayCIF.length-1; index++) {
            if(numeros.includes(arrayCIF[index])){
                x=true;
            }else{
                alert("El caracter "+ arrayCIF[i] +" esta mal");
            }
        }
        //SI YA SABEMOS QUE LOS 7 DIGITOS SON NUMEROS, AHORA HAY QUE HACER LOS CALCULOS PARA VER SI EL CARACTER DE CONTROL COINCIDE 
        if(x){
            let contP=0;
            let contI=0;
            for (let i = 1; i < arrayCIF.length-1; i++) {
                if(i%2==0){
                    PosPares[contP]=arrayCIF[i];
                    contP++;
                }else{
                    PosImpares[contI]=arrayCIF[i];
                    contI++;
                }
            }
            //YA TENGO LOS NUMEROS IMPARES Y LOS PARES SEPARADOS Y GUARDADOS EN UN ARRAY CADA UNO
            let sumaIM=0;
            let sumaPA=0;
            //AHORA SUMAMOS LOS NUMEROS IMPARES MULTIPLICADOS POR DOS(SI EL NUMERO RESULTANTE DE LA MULTIPLICACION ES MENOR A 9 SE QUEDA IGUAL, SI ES MAYOR A 9 SE RESTAN 9 AL NUMERO MULTIPLICADO)
            for (let i = 0; i < PosImpares.length; i++) {
                let aux=PosImpares[i]*2;
                if((PosImpares[i]*2)<=9){
                    sumaIM+=aux;
                }else{
                    sumaIM+=sumarCifras(aux);
                }
            }

            for (let i = 0; i < PosPares.length; i++) {
                sumaPA+=parseInt(PosPares[i]);
            }
            //AQUI DEBERIAMOS TENER LAS SUMAS DE LOS NUMEROS IMPARES, CON SUS RESPECTIVAS NORMAS, Y LA SUMA DE LOS NUMEROS PARES
            const totalSuma=sumaIM+sumaPA;
            var u=totalSuma%10;
            var NumCaracterControl=(10-u);
            console.log(totalSuma);
            console.log(NumCaracterControl);
            //YA TENGO EL NUMERO DEL CARACTER DE CONTROL, AHORA HAY QUE VE SI EL CIF EN CUESTION LO TIENE BIEN PUESTO, EL NUMERO O LA LETRA
            //PRIMERO VAMOS A VER SI EL ULTIMO CARACTER ES UN NUMERO O UNA LETRA
            if(isNaN(arrayCIF[arrayCIF.length-1])){
                //SI ES UNA LETRA, VAMOS A VER SI ES LA MISMA QUE EL NÚMERO
                let numLetra=LetrasdeControl.indexOf(arrayCIF[arrayCIF.length-1]);
                if(numLetra==NumCaracterControl){
                    return 2;
                }else{
                    return 1;
                }
            }else{
                //SI ES UN NUMERO, VAMOS A VER SI ES IGUAL AL DEL CONTROL
                if(parseInt(arrayCIF[arrayCIF.length-1])==NumCaracterControl){
                    return 2;
                }else{
                    return 1;
                }
            }
            

        }
    }else{
        //alert("La letra inicial esta mal");
    }
}else{
    return 0;
}
}


function sumarCifras(num){
    var numString=num.toString();
    var resultado=0;
    for (let i = 0; i < numString.length; i++) {
        resultado+=parseInt(numString[i]);
    }
    return resultado;
}

function esNIFCIF(cadena){
    //RETURN C1: Se ha introducido un cif correcto.(2)
    //RETURN C2: Se ha introducido un cif erróneo. El carácter de control es erróneo.(1)
    //RETURN N1: Se ha introducido un NIF correcto(3)
    //RETURN N2: Se ha introducido un NIF erróneo. El carácter de control es erróneo.(1)
    //RETURN N3: Se ha introducido un DNI, se ha pasado un número de entre 6 y 8 dígitos con un valor mínimo de 100000.(2)
    //RETURN 0:  Se ha introducido un dato no válido. No es CIF.
    if(isNaN(cadena.charAt(0))){
        if(esCIF(cadena)==2){
            return "C1";
        }else if(esCIF(cadena)==1){
            return "C2";
        }else{
            return "0";
        }
    }else{
        if(esNIF(cadena)==3){
            return "N1";
        }else if(esNIF(cadena)==2){
            return "N3";
        }else if(esNIF(cadena)==1){
            return "N2";
        }else{
            return "0";
        }
    }
}


function codigosControl(codigoBanco,nSucursal,nCuenta){
    //RETURN CODIGO DE CONTROL CUENTA (2 DIGITOS) 
    //VER SI HAN METIDO BIEN LOS DATOS
    //SI NO ES VALIDO RETORNA UN NUMERO ENTERO QUE REPRESENTE EL ERROR
    var codigoControl;
    if(codigoBanco.length!=4 || nSucursal.length!=4 || nCuenta.length!=10){
        return "A";
    }else{
    // CODIGO BANCO
        var primeraCifraBanco=codigoBanco.substr(0,1);
        var segundaCifraBanco=codigoBanco.substr(1,1);
        var teceraCifraBanco=codigoBanco.substr(2,1);
        var cuartaCifraBanco=codigoBanco.substr(3,1);
        var numero1=(primeraCifraBanco*4)+(segundaCifraBanco*8)+(teceraCifraBanco*5)+(cuartaCifraBanco*10);
    // Nº SUCURSAL
        var primeraCifraSucursal=nSucursal.substr(0,1);
        var segundaCifraSucursal=nSucursal.substr(1,1);
        var terceraCifraSucursal=nSucursal.substr(2,1);
        var cuartaCifraSucursal=nSucursal.substr(3,1);
        var numero2=(primeraCifraSucursal*9)+(segundaCifraSucursal*7)+(terceraCifraSucursal*3)+(cuartaCifraSucursal*6);
        var sumaNum1Num2=numero1+numero2;
        var resto1=sumaNum1Num2%11;
        var primerNumCodControl=(11-resto1)%10;
        if(primerNumCodControl==10){
            primerNumCodControl=1;
        }else if(primerNumCodControl==11){
            primerNumCodControl=0;
        }
    //Nº CUENTA
        var primerDigitoCuenta=nCuenta.substr(0,1);
        var segundoDigitoCuenta=nCuenta.substr(1,1);
        var tercerDigitoCuenta=nCuenta.substr(2,1);
        var cuartoDigitoCuenta=nCuenta.substr(3,1);
        var quintoDigitoCuenta=nCuenta.substr(4,1);
        var sextoDigitoCuenta=nCuenta.substr(5,1);
        var septimoDigitoCuenta=nCuenta.substr(6,1);
        var octavoDigitoCuenta=nCuenta.substr(7,1);
        var novenoDigitoCuenta=nCuenta.substr(8,1);
        var decimoprimerDigitoCuenta=nCuenta.substr(9,1);
        var numero3=(primerDigitoCuenta*1)+(segundoDigitoCuenta*2)+(tercerDigitoCuenta*4)+(cuartoDigitoCuenta*8)+(quintoDigitoCuenta*5)+(sextoDigitoCuenta*10)+(septimoDigitoCuenta*9)+(octavoDigitoCuenta*7)+(novenoDigitoCuenta*3)+(decimoprimerDigitoCuenta*6);
        var resto2=numero3%11;
        var segundoNumCodControl=(11-resto2)%10;
        if(segundoNumCodControl==10){
            segundoNumCodControl=1;
        }else if(segundoNumCodControl==11){
            segundoNumCodControl=0;
        }
        codigoControl=String(primerNumCodControl)+String(segundoNumCodControl);
        return codigoControl;
    }
    
}

function calculoIBANEspanya(codigoCuenta) {
    codigoCuenta= codigoCuenta + "142800";
    var parte1=codigoCuenta.substr(0,16);
    var parte2=codigoCuenta.substr(16,16);
    var resto1=parte1%97;
    var codControlIBAN=98-resto1;
    parte2=String(resto1)+ String(parte2);
    parte2=parseInt(parte2);
    var resto2=parte2%97;
    var codControlIBAN=98-resto2;
    if(codControlIBAN<10){
        codControlIBAN="0"+String(codControlIBAN);
    }
    var codIBAN="ES"+codControlIBAN;
    return codIBAN;
}   

function comprobarIBAN(IBAN){
let x;
//RETURN TRUE OR FALSE 
console.log(IBAN);
let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numeros= "1234567890";
var pais=IBAN.substr(0,2);

//AHORA HAY QUE VER SI EL IBAN ES CORRECTO
let cont=10;
for (let i = 0; i < letras.length; i++) {
    IBAN=IBAN.replaceAll(letras[i],(cont+i).toString());
}
console.log(IBAN);
let parte1=IBAN.substr(0, (IBAN.length/2))
let parte2=IBAN.substr((IBAN.length/2), IBAN.length)
console.log(parte2);
return x;
}

function comprobarInputIBAN(IBAN) {
    let x;
    if(isNaN(pais)){
        x=true
    }else{
        return false
    }
    
    if(isNaN(IBAN.substr(2,2))){
        return false;
    }else{
        x=true;
    }
    for (let i = 3; i < IBAN.length; i++) {
        if(letras.includes(IBAN[i]) || numeros.includes(IBAN[i])){
            x=true;
        }else{
            x=false;
            break
        }
    }
    return x;
    //AQUI SABEMOS SI HAN INTRODUCIDO BIEN EL IBAN
}