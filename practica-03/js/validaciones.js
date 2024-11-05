window.onload=comienzo;
function comienzo() {
    document.formulario.onsubmit=validar;
    document.formulario.codigoPostal.onblur=imprimirProvincia;
}
var mensajeAlert="";
function validar() {
    //NOMBRE
    var nombre=document.formulario.nombre.value;
    var ExpNombre=/^[A-Za-záéíóíú][A-Za-z0-9ºª\-\/]*[A-Za-z0-9\.]$/;

    if(ExpNombre.test(nombre)){
        mensajeAlert+="El nombre esta bien introducido\n";
    }else{
        mensajeAlert+="El nombre esta mal introducido\n";
    }

    //CODIGO DE EMPRESA
    var codigoEmpresa=document.formulario.codigoEmpresa.value;
    var ExpCodEmpresa=/^[a-zA-Z0-9]*\d{5,10}$/;

    if(ExpCodEmpresa.test(codigoEmpresa)){
        mensajeAlert+="El código de la empresa es correcto.\n";
    }else{
        mensajeAlert+="El código de la empresa no tiene el formato adecuado.\n";
    }

    //DIRECCION
    var direccion=document.formulario.Direccion.value;
    var ExpDir=/^[A-Za-z][A-Za-z0-9ºª\-\/]*[A-Za-z0-9]$/;

    if(ExpDir.test(direccion)){
        mensajeAlert+="La dirección está bien introducida.\n";
    }else{
        mensajeAlert+="La dirección no tiene el formato adecuado.\n";
    }

    //LOCALIDAD
    var localidad=document.formulario.localidad.value
    var ExpLocalidad=/^[A-Za-z][A-Za-z\s]+[A-Za-z]$/;

    if(ExpLocalidad.test(localidad)){
        mensajeAlert+="La localidad está bien introducida.\n";
    }else{
        mensajeAlert+="La localidad no tiene el formato adecuado.\n";
    }
    
    //TELEFONO
    var telefono=document.formulario.telefono.value;
    var ExpTelefono=/^[6-9][0-9]\d{7}$/;
    if (ExpTelefono.test(telefono)) {
        mensajeAlert += "El teléfono está bien introducido.\n";
    } else {
        mensajeAlert += "El teléfono no tiene el formato adecuado.\n";
    }

    //FECHA
    var fecha = document.formulario.fechaEmpresa.value;
    var ExpFechaFormato=/^\d{1,2}[\-\/]\d{1,2}[\-\/]\d{1,4}$/;

    if(!ExpFechaFormato.test(fecha)){
        mensajeAlert+="La fecha no tiene el formato adecuado.\n";
    }

    //NUMERO DE TRABAJADORES
    var numTrabajadores=document.formulario.nTrabajadores.value;
    var ExpNumTrabajadores=/^(4[5-9]|[5-9][0-9]|[0-9]\d{2,5})$/;


    if(!ExpNumTrabajadores.test(numTrabajadores)){
        mensajeAlert+="Los trabajadores tienen que ser entre 45 y 999999.\n";
    }


    //NUMERO DE FABRICAS
    var numFabricas=document.formulario.nFabricas.value;
    var ExpNumFabricas=/^([2-9]|[0-9]\d{1,3})$/;
    if (!ExpNumFabricas.test(numFabricas)) {
        mensajeAlert+= "Las fabricas tienen que estar entre 2 y 9999\n";
    }

    //COMUNIDADES
    var ElemntosComunidades=document.formulario.elements["Comunidades"];
    var comunidades=0;
    for (var i=0;i<ElemntosComunidades.length;i++){
        if (ElemntosComunidades.options[i].selected){
            comunidades++;
        }
    }
    if (comunidades==0 || comunidades==1) {
        mensajeAlert+="Debe elegir al menos dos comunidades.\n";
    }

    //VALIDAR NIFCIF

    var NIFCIF=document.formulario.NIFCIF.value;

    if(esNIFCIF(NIFCIF)=="C1"){

    }else if(esNIFCIF(NIFCIF)=="C2"){
        mensajeAlert+="Se ha introducido un CIF erróneo. El carácter de control es erróneo\n";
    }else if(esNIFCIF(NIFCIF)=="N1"){

    }else if(esNIFCIF(NIFCIF)=="N2"){
        mensajeAlert+="Se ha introducido un NIF erróneo. El carácter de control es erróneo\n";
    }else if(esNIFCIF(NIFCIF)=="N3"){

    }else{
        mensajeAlert+="No se ha introducido un NIF o CIF\n";
    }

    //DATOS BANCARIOS 
    var codigoBanco=document.formulario.codigoBanco.value;
    var expCodigoBanco = /^\d{4}$/;
    if (!expCodigoBanco.test(codigoBanco)) {
        mensajeAlert += "El código del banco tiene que tener 4 dígitos.\n";
    }

    var nSucursal=document.formulario.nSucursal.value;
    var expNSucursal = /^\d{4}$/;
    if (!expNSucursal.test(nSucursal)) {
        mensajeAlert += "La sucursal del banco tiene que tener 4 dígitos.\n";
    }

    var codigoControl=document.formulario.codigoControl.value;
    var expCodigoControl = /^\d{2}$/;
    if (!expCodigoControl.test(codigoControl)) {
        mensajeAlert += "El código de control tiene que tener 2 dígitos.\n";
    }

    var nCuenta=document.formulario.nCuenta.value;
    var expNCuenta = /^\d{10}$/;
    if (!expNCuenta.test(nCuenta)) {
        mensajeAlert +="La cuenta bancaria tiene que tener 10 dígitos.\n";
    }

    if(codigosControl(codigoBanco,nSucursal,nCuenta)!=codigoControl){
        mensajeAlert+= "Error en el cálculo del código de control. Compruebe los datos ingresados.\n" ;
    }

    var CodCuenta=String(codigoBanco)+String(nSucursal)+String(codigoControl)+String(nCuenta);
    var IBAN=document.formulario.IBAN.value;
    var codigoIBAN=String(IBAN[0])+String(IBAN[1])+String(IBAN[2])+String(IBAN[3]);
    var codigoBancoIBAN=String(IBAN[4])+String(IBAN[5])+String(IBAN[6])+String(IBAN[7])
    var nSucursalIBAN=String(IBAN[8])+String(IBAN[9])+String(IBAN[10])+String(IBAN[11])
    var CodControlIBAN=String(IBAN[12])+String(IBAN[13])
    var nCuentaIBAN=""
    for (let i = 14; i < IBAN.length; i++) {
        nCuentaIBAN=nCuentaIBAN+String(IBAN[i]);
    }
    var ExpIBAN=/^[A-Za-z]{2}[0-9]{2}[0-9A-Za-z]*$/
    if(ExpIBAN.test(IBAN)){
        if(calculoIBANEspanya(CodCuenta)==codigoIBAN){
            if(codigoBancoIBAN!=codigoBanco || nCuentaIBAN!=nCuenta || nSucursalIBAN!=nSucursal || CodControlIBAN!=codigoControl){
                mensajeAlert+="Los datos del IBAN no coinciden con los de arriba\n"
            }
        }else{
            mensajeAlert+="Error en la generación del Codigo IBAN. Compruebe los datos ingresados.\n" ;
        }
    }else{
        mensajeAlert+="Formato incorrecto para el IBAN\n";
    }


    alert(mensajeAlert);
}  


function imprimirProvincia() {
    var codigoPostal=document.formulario.codigoPostal.value;
    var ExpCodPostal=/^([1-9][0-9]{3}|[1-4][0-9]{4}|5[0-2][0-9]{3})$/;

    if(ExpCodPostal.test(codigoPostal)){
        var provincia=provincias(codigoPostal);
    }else{
        mensajeAlert+="El código postal no tiene el formato adecuado.\n";
    }
    document.formulario.provincia.value = provincia;
}


function provincias(codigoPostal) {
    var arrayProvincias=["","Álava","Albacete","Alicante","Almería","Ávila","Badajoz","Baleares","Barcelona","Burgos","Cáceres","Cádiz","Castellón","Ciudad-Real","Córdoba","La-Coruña","Cuenca","Girona","Granada","Guadalajara","Guipúzcoa","Huelva","Huesca","Jaén","León","Lérida","La-Rioja","Lugo","Madrid","Málaga","Murcia","Navarra","Ourense","Asturias","Palencia","Las-Palmas","Pontevedra","Salamanca","Santa-Cruz-de-Tenerife","Cantabria","Segovia","Sevilla","Soria","Tarragona","Teruel","Toledo","Valencia","Valladolid","Vizcaya","Zamora","Zaragoza","Ceuta","Melilla"]
    var cadenaCodPostal=codigoPostal.toString();
    var dosDigCod=cadenaCodPostal.slice(0,2);
    for (let i = 0; i < arrayProvincias.length; i++) {     
        if((i)==parseInt(dosDigCod)){
            return arrayProvincias[i];
        } 
    }
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
