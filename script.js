
    // if (tebakanuser == angkabenar){
    //     alert(`Tebakan Anda Benar \n Angka Yang Benar Adalah ${angkabenar}`);
    //     break;
    // } else {
    //     alert("Tebakan Anda Salah");
    // }




    let angkabenar;
let salah = new Audio('sound/yang-bener-aja-made-with-Voicemod.mp3');
let benar = new Audio('sound/aku-mah-masih-pemula-ajarin-dong-puh-sepuh-made-with-Voicemod.mp3');

function mulaiGame() {
    document.getElementById('startButton').style.display = 'none';
    const namaPemain = prompt("Kenalan Dulu");
    if (namaPemain) {
        alert(`Oke, jadi bang ${namaPemain} lu punya 3 kesempatan untuk menebak angka antara 1 sampai 10.`);
        angkabenar = Math.floor(Math.random() * 11) + 1;
        mainkanGame();
    } else {
        alert("Kenalan Dulu");
        document.getElementById('startButton').style.display = 'block';
    }
}

function mainkanGame() {
    for (let nyawa = 3; nyawa >= 1; nyawa--) {
        const tebakanuser = prompt("Coba Tebak");

        if (tebakanuser == angkabenar) {
            alert(`Hoki Bang \n Angka Yang Benar Adalah ${angkabenar}`);
            benar.play();
            break;
        } else if (tebakanuser > angkabenar) {
            alert(`Terlalu tinggi! Kamu memiliki ${nyawa - 1} kesempatan lagi.`);
        } else if (tebakanuser < angkabenar) {
            alert(`Terlalu rendah! Kamu memiliki ${nyawa - 1} kesempatan lagi.`);
        }

        if (nyawa == 1) {
            alert(`Kasihan, kesempatan habis. Angka Yang Benar Adalah ${angkabenar}`);
            salah.play();
        }
    }

    document.getElementById('startButton').style.display = 'block';
}

document.getElementById("startButton").addEventListener("click", mulaiGame);
