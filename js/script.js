const marcas = [
    "Abarth","Acura","Alfa Romeo","Alpine","Aston Martin","Audi","Bentley",
    "BMW","Brilliance","Bugatti","Buick","BYD","Cadillac","Changan","Chery",
    "Chevrolet","Chrysler","Citroën","Cupra","Dacia","Daewoo","Daihatsu",
    "Dodge","DS Automobiles","Ferrari","Fiat","Fisker","Ford","Geely","Genesis",
    "GMC","Great Wall","Honda","Hummer","Hyundai","Infiniti","Isuzu","Iveco",
    "Jaguar","Jeep","Kia","Koenigsegg","KTM","Lada","Lamborghini","Lancia",
    "Land Rover","Lexus","Lincoln","Lotus","Lucid Motors","Maserati","Maybach",
    "Mazda","McLaren","Mercedes-Benz","MG","Mini","Mitsubishi","NIO","Nissan",
    "Opel","Pagani","Peugeot","Pininfarina","Porsche","Proton","Ram","Renault",
    "Rimac","Rolls-Royce","Rover","Saab","SEAT","Škoda","Smart","SsangYong",
    "Subaru","Suzuki","Tata Motors","Tesla","Toyota","Vinfast","Volkswagen",
    "Volvo","Wuling","Zotye"
];

const contenedor = document.getElementById("contenedor-marcas");

const tabla = document.getElementById("tabla-marcas");

function mostrarMarcas(filtro = "") {
    tabla.innerHTML = "";

    const filtradas = marcas.filter(m =>
        m.toLowerCase().includes(filtro.toLowerCase())
    );

    for (let i = 0; i < filtradas.length; i += 3) {
        const fila = document.createElement("tr");

        for (let j = 0; j < 3; j++) {
            const celda = document.createElement("td");
            celda.textContent = filtradas[i + j] || "";
            fila.appendChild(celda);
        }

        tabla.appendChild(fila);
    }
}


mostrarMarcas();

document.getElementById("buscador").addEventListener("input", e => {
    mostrarMarcas(e.target.value);
});
