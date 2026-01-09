function splitJobCharacters(str) {
    // Your code here
    let hasil = []; //ini untuk menyimpan hasil data array di akhir
    let pSem = ""; //ini untuk penyimpanan sementara
    for (let i = 0; i < str.length; i++) { //perulangan untuk mengecek setiat karakter satu-satu
        if (str[i] === ',' || str[i] === '-') { //jika string idex = , atau - maka
            hasil.push(pSem); //push karakter yg sudah di cek tadi ke hasil
            pSem = ""; // lalu pSem reset, klo gk reset yg selanjutnya akan terus bertambah dari sebelumnya
        } else {
            pSem = pSem + str[i]; //tambah satu persatu
        }
    }
    hasil.push(pSem);
    return hasil; //untuk menampilkan hasil
}

console.log("Memisahkan input str menjadi arraydengan urutan nama dan job")
console.log(splitJobCharacters("idaz-sfmutvi,anggara-sfutqji,dear-sfldbi"));
console.log(splitJobCharacters("kurnia-sfutqji,adi-sfldbi,anggara-sfmutvi"));
console.log("===============================================================");

function reverseJobCharacters(arr) {
    // Your code here
    let hasil = [];

    for (let i = 0; i < arr.length; i++) {
        //untuk mengecek job
        if (i % 2 === 1) {
            let kata = arr[i];
            let balik = "";
            for (let j = kata.length - 1; j >= 0; j--) {
                balik = balik + kata[j];
            }
            hasil.push(balik);
        } else { //untuk nama
            hasil.push(arr[i]);
        }
    }
    return hasil;
}

console.log("Membalik value job");
console.log(
    reverseJobCharacters([
        "idaz",
        "sfmutvi",
        "anggara",
        "sfutqji",
        "dear",
        "sfldbi",
    ])
);

console.log(
    reverseJobCharacters([
        "kurnia",
        "sfutqji",
        "adi",
        "sfldbi",
        "anggara",
        "sfmutvi",
    ])
);
console.log("===============================================================");

function decryptJobCharacters(arr) {
    // Your code here
    let hasil = [];

    for (let i = 0; i < arr.length; i++) {
        // cek untuk job
        if (i % 2 === 1) {
            let kata = arr[i];
            let decrypt = "";
            for (let j = 0; j < kata.length; j++) {
                let kode = kata[j].charCodeAt(0);
                if (kode === 97) {
                    decrypt = decrypt + "z";
                } else {
                    decrypt = decrypt + String.fromCharCode(kode - 1);
                }
            }
            hasil.push(decrypt);
        } else //cek nama
            hasil.push(arr[i]);
    }

    return hasil;
}

console.log("Decrypt menggeser setiap huruf menjadi huruf sebelumnya");
console.log(
    decryptJobCharacters([
        "idaz",
        "ivtumfs",
        "anggara",
        "ijqtufs",
        "dear",
        "ibdlfs",
    ])
);

console.log(
    decryptJobCharacters([
        "kurnia",
        "ijqtufs",
        "adi",
        "ibdlfs",
        "anggara",
        "ivtumfs",
    ])
);
console.log("===============================================================")

function makingDreamTeam(arr) {
    // Your code here
    let hasil = [];

    for (let i = 0; i < arr.length; i = i + 2) {
        let gabung = [];
        gabung.push(arr[i]);
        gabung.push(arr[i + 1]);
        hasil.push(gabung);
    }
    return hasil;
}

console.log("Membuat Tim Start-Up Array 2 Dimensi ")
console.log(
    makingDreamTeam(["idaz", "hustler", "anggara", "hipster", "dear", "hacker"]));
console.log(
    makingDreamTeam(["kurnia", "hipster", "adi", "hacker", "anggara", "hustler"]));
console.log("===============================================================")

function startUpMatchMaking(str) {
    // Your code here
    let hasilSplit = splitJobCharacters(str);
    let hasilReverse = reverseJobCharacters(hasilSplit);
    let hasilDecrypt = decryptJobCharacters(hasilReverse);
    let tim = makingDreamTeam(hasilDecrypt);

    let infoTim = "";
    for (let i = 0; i < tim.length; i++) {
        infoTim = infoTim + tim[i][0] + " - " + tim[i][1] + "\n";
    }

    if (tim.length < 3) {
        return infoTim + "Minimal 3 member";
    }

    let jobHustler = false;
    let jobHipster = false;
    let jobHacker = false;

    for (let i = 0; i < tim.length; i++) {
        if (tim[i][1] === "hustler") {
            jobHustler = true;
        } else if
            (tim[i][1] === "hipster") {
            jobHipster = true;
        } else if (tim[i][1] === "hacker") {
            jobHacker = true;
        }
    }

    if (jobHustler && jobHipster && jobHacker) {
        return infoTim + "Match your Dream Start-Up team";
    } else {
        return infoTim + "The job composition in the team is not suitable";
    }
}

console.log(startUpMatchMaking("idaz-sfmutvi,anggara-sfutqji,fika-sfldbi"));
// Match your Dream Start-Up Team
console.log("-------------------------------------------------");
console.log(
    startUpMatchMaking(
        "eko-sfldbi,fajrin-sfmutvi,abdullah-sfutqji,anggara-sfutqji"
    )
);
// Match your Dream Start-Up Team
console.log("-------------------------------------------------");
console.log(
    startUpMatchMaking(
        "abdullah-sfldbi,fajrin-sfmutvi,samir-sfldbi,eko-sfmutvi,basil-sfmutvi"
    )
);
// The job composition in the team is not suitable
console.log("-------------------------------------------------");
console.log(startUpMatchMaking("samir-sfmutvi,basil-sfutqji,eko-sfmutvi"));
// The job composition in the team is not suitable
console.log("-------------------------------------------------");
console.log(startUpMatchMaking("samir-sfmutvi,basil-sfutqji"));
// Minimum 3 members in the team