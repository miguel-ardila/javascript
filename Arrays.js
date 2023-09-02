// listas o Arrays

//ejemplo 1
let autos = [];
autos [0] = "BMW";
autos [1] = "Audi";
autos [2] = "Mercedes";
autos [3] = "Volkswagen";


//ejemplo 2
let frutas = [];

frutas [0] = "Banana";
frutas [1] = "Pera";
frutas [2] = "Kiwi";
frutas [3] = "Mango";

frutas [2] = "mandarinas"


let frutas2 = ["Banana", "Pera", "Kiwi", "Mango"];

console.log(frutas2);

//Practica Declara 1 arreglo llamado miFamilia o myFamily.

let miFamilia = ["Miguel", "Amy", "Stefanny"];
//conloe.log(miFamilia);

//cilco for
for (let i = 0; i < miFamilia.length; i++) {
    if(miFamilia[i] === "Amy") {
        console.log(miFamilia[i]);
    }
}
