function buscar() {
    // 1. Capturamos los datos
    const u = document.getElementById("u").value;
    const c = document.getElementById("c").value;
    const nom = document.getElementById("nom").value;
    const est = parseFloat(document.getElementById("est").value);
    const pk = parseFloat(document.getElementById("pk").value);

    // 2. Definimos los usuarios
    const user1 = "jose"; const contra1 = "1";
    const user2 = "humberto"; const contra2 = "2";
    const user3 = "cardona"; const contra3 = "3";

    // 3. Validación de acceso (Todo el proceso debe estar dentro de este if)
    if ((u == user1 && c == contra1) || (u == user2 && c == contra2) || (u == user3 && c == contra3)) {
        
        // 4. Calculamos el IMC
        const imc = pk / (est * est);
        let categoria = "";

        // 5. Clasificación del IMC
        if (imc < 18.5) {
            categoria = "Peso inferior al normal";
        } else if (imc >= 18.5 && imc <= 24.9) {
            categoria = "Normal";
        } else if (imc >= 25.0 && imc <= 29.9) {
            categoria = "Superior a lo normal";
        } else {
            categoria = "Obeso";
        }

        // 6. Reporte final unificado
        alert(
             "\n nombre: " + nom +
            "\n Estatura registrada: " + est + " mts" +
            "\n Peso registrado: " + pk + " kg" +
            "\n ************************************************************ " +
            "\n ***** RESULTADO DE MASA MUSCULAR (IMC)     ***** " +
            "\n ************************************************************ " +
            "\n IMC Calculado: " + imc.toFixed(2) + " kg/m²" +
            "\n Clasificación: " + categoria +
            "\n ************************************************************ "
        );"Reporte para: " + nom + "\nIMC: " + imc.toFixed(2) + "\nCategoría: " + categoria
        
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

 
        

