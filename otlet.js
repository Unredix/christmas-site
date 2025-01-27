let gender;

document.getElementById("fiu-button").addEventListener("click", () => {
  document.getElementById("fiu").classList.add("selected");
  document.getElementById("lany").classList.remove("selected");
  if (gender == "fiu") {
    gender = null;
    document.getElementById("fiu").classList.remove("selected");
  } else {
    gender = "fiu";
  }
});

document.getElementById("lany-button").addEventListener("click", () => {
  document.getElementById("lany").classList.add("selected");
  document.getElementById("fiu").classList.remove("selected");
  if (gender == "lany") {
    gender = null;
    document.getElementById("lany").classList.remove("selected");
  } else {
    gender = "lany";
  }
});

function genderChange(button1, button2) {
  const but1 = document.getElementById(button1);
  const but2 = document.getElementById(button2);

  if (but1.checked) {
    but2.checked = false;
  }
}

function getAge() {
  let age = document.getElementById("age");
  if (age.value == "") {
    alert("Add meg az ajándékozott korát!");
  }
  return age.value;
}

document.getElementById("submit").addEventListener("click", () => {
  presentSelect(gender, getAge());
});

function presentSelect(gender, age) {
  const output = document.getElementById("result");
  const randomNum = Math.floor(Math.random() * 20);
  if (!gender) {
    alert("Add meg az ajándékozott nemét!");
  }
  if (gender == "fiu") {
    if (age == "") {
      alert("Add meg az ajánkékozott korát!");
    }
    if (age == "0-4") {
      let otletek = [
        "Plüssállatok",
        "Építőkockák (nagy méretű)",
        "Interaktív zenélő játékok",
        "Mesekönyvek kemény lapokkal",
        "Járássegítő játék",
        "Kisautók",
        "Fürdőjátékok",
        "Húzható vagy tolható játékok",
        "Puzzle (nagy darabos)",
        "Fajátékok",
        "Szerepjáték készlet (pl. szerszámosláda)",
        "Gyerek gitár vagy dob",
        "Interaktív állatfigurák",
        "Homokozó játékok",
        "Formaillesztő játékok",
        "Színes labda",
        "Baba hintaszék",
        "Játékvonat",
        "Plüss matrac vagy párna",
        "Kézzel festett fa járművek",
      ];
      output.innerHTML = otletek[randomNum];
    }
    if (age == "4-12") {
      let otletek = [
        "LEGO szettek",
        "Távirányítós autó",
        "Tudományos készlet",
        "Társasjátékok",
        "Sporteszközök (pl. focilabda, kosárlabda)",
        "Akciófigura gyűjtemény",
        "Mesekönyvsorozat",
        "Dinoszaurusz figurák",
        "Mini drón",
        "Játékkatonák",
        "Elektronikus játékok (pl. Tamagotchi)",
        "Kreatív rajzszett",
        "Gyerek mikroszkóp",
        "Bicikli vagy roller",
        "Modellvasút szett",
        "Játékvár szettek",
        "Fejhallgató gyerekeknek",
        "Gyerek tablet vagy interaktív könyvek",
        "Festő szett",
        "Kis horgászfelszerelés",
      ];
      output.innerHTML = otletek[randomNum];
    }
    if (age == "12-16") {
      let otletek = [
        "Gamer kiegészítők (pl. egér, fejhallgató)",
        "Távirányítós autók vagy drónok",
        "LEGO Technic",
        "Modellkészletek (pl. autók, repülők)",
        "Tudományos játékok (pl. robot építő szett)",
        "Sporteszközök (pl. kosárlabda palánk)",
        "Futócipő vagy sportcipő",
        "Márkás hátizsák",
        "Bűvész szett",
        "Társasjátékok tinédzsereknek",
        "Elektronikus eszközök (pl. okosóra)",
        "Bluetooth hangszóró",
        "Fejhallgató",
        "Képregények vagy mangák",
        "Kalandregények",
        "Videójáték ajándékkártya",
        "Puzzle (bonyolultabb, 3D)",
        "Ruházat (pl. póló kedvenc karakterekkel)",
        "Szoba dekorációs LED fények",
        "Bicikli vagy gördeszka",
      ];
      output.innerHTML = otletek[randomNum];
    }
    if (age == "16-18") {
      let otletek = [
        "Edzőtermi bérlet vagy eszközök",
        "Videójátékok",
        "Bluetooth fejhallgató",
        "Márkás ruha",
        "Kiegészítők (pl. sapka, napszemüveg)",
        "Sportfelszerelés (pl. futócipő)",
        "Streaming előfizetés (pl. Netflix, Spotify)",
        "Könyvek (pl. önfejlesztés, sci-fi)",
        "Távirányítós drón",
        "Elektronikus kütyük (pl. power bank)",
        "Bicikli kiegészítők",
        "Gamer szék",
        "Poszterek vagy műalkotások",
        "Mini projektor",
        "Képregény- vagy mangagyűjtemény",
        "Okosóra vagy fitnesz karkötő",
        "Stílusos hátizsák",
        "Gitár vagy hangszer",
        "Focilabda autogramokkal",
        "Pénztárca vagy karóra",
      ];
      output.innerHTML = otletek[randomNum];
    }
    if (age == "18+") {
      let otletek = [
        "Okostelefon kiegészítők",
        "Sörfőző készlet",
        "Elektronikai eszközök (pl. okosóra)",
        "Márkás pénztárca",
        "Laptop vagy gamer periféria",
        "Sportfelszerelés",
        "Streaming előfizetés (pl. HBO Max, Spotify)",
        "Könyvek (pl. történelmi vagy önfejlesztő)",
        "Férfiparfüm",
        "Kávéfőző gép",
        "Távirányítós drón",
        "Borospohár készlet",
        "Fitness eszközök",
        "Bicikli",
        "Stílusos ruházat",
        "Napszemüveg",
        "Férfi ékszerek (pl. karkötő)",
        "Egyedi poszterek vagy dekoráció",
        "Szerszámkészlet",
        "Koncertjegy",
      ];
      output.innerHTML = otletek[randomNum];
    }
  }
  if (gender == "lany") {
    if (age == "0-4") {
      let otletek = [
        "Plüssállatok",
        "Interaktív babák",
        "Mesekönyvek",
        "Hintaló",
        "Játékkonyha vagy kiegészítők",
        "Fürdőjátékok",
        "Építőkockák",
        "Kis kézműves készlet (pl. matricák, zsírkréták)",
        "Zenélő forgójáték",
        "Babaágy",
        "Virágos játék szett",
        "Játék pónik",
        "Színes bababútorok",
        "Kis hinta vagy csúszda",
        "Babaház (egyszerűbb változat)",
        "Formaillesztő játékok",
        "Zenélő dobozka",
        "Puzzle (nagy darabos)",
        "Interaktív plüssfigurák",
        "Táncszőnyeg gyerekeknek",
      ];
      output.innerHTML = otletek[randomNum];
    }
    if (age == "4-12") {
      let otletek = [
        "LEGO Friends szettek",
        "Társasjátékok",
        "Kreatív ékszerkészítő szett",
        "Tündérmesekönyvek",
        "Sporteszközök (pl. ugrókötél, tollaslabda szett)",
        "Babaház kiegészítőkkel",
        "Kis varrógép gyerekeknek",
        "Sminkkészlet gyerekeknek",
        "Szerepjáték készletek (pl. orvosi táska)",
        "Interaktív plüssállatok",
        "Kézműves készlet",
        "Táncoló baba vagy robotfigura",
        "Tündérjelmez vagy hercegnős ruha",
        "Mesefigurás hátizsák",
        "Hajformázó játék készlet",
        "Kis akvárium kezdő szett",
        "Sütisütő játékszett",
        "Könyvsorozatok (pl. Harry Potter első kötetei)",
        "DIY díszítő szettek",
        "Rajztábla vagy festőállvány",
      ];
      output.innerHTML = otletek[randomNum];
    }
    if (age == "12-16") {
      let otletek = [
        "DIY ékszerkészítő szett",
        "Smink- vagy körömlakkszett",
        "Kreatív napló",
        "Társasjátékok tiniknek",
        "Márkás hátizsák",
        "Scrapbook készlet",
        "Hajformázó eszközök",
        "Elektronikus eszközök (pl. okosóra)",
        "Polaroid vagy instant kamera",
        "Divat magazin előfizetés",
        "Könyvek (pl. romantikus regények)",
        "Bluetooth hangszóró",
        "Festő- és rajzkészlet",
        "Parfüm (tini illatok)",
        "Puha pléd",
        "Szoba dekorációs LED fények",
        "Fülbevalók vagy karkötők",
        "DIY kozmetikai szett",
        "Fitnesz matrac vagy jóga készlet",
        "Népszerű sorozatok vagy filmek díszdoboza",
      ];
      output.innerHTML = otletek[randomNum];
    }
    if (age == "16-18") {
      let otletek = [
        "Sminkszett vagy kozmetikai csomag",
        "Népszerű parfüm",
        "Elegáns táska",
        "Divatos ruha vagy cipő",
        "Ékszerek (pl. karkötők)",
        "DIY dekorációs készletek",
        "Könyvek (pl. romantikus vagy fantasy regények)",
        "Laptop vagy tablet tartozékok",
        "Puha takaró vagy párna",
        "Fényképezőgép kiegészítők",
        "Jóga matrac",
        "Streaming előfizetés (pl. Netflix, Spotify)",
        "Hajformázó eszközök",
        "Bluetooth hangszóró",
        "Edzőruha szett",
        "Stílusos telefon tok",
        "Népszerű sorozatok vagy filmek ajándékcsomagja",
        "Instant kamera",
        "Szoba dekorációs kellékek",
        "Kreatív DIY ékszer- vagy sminkkészlet",
      ];
      output.innerHTML = otletek[randomNum];
    }
    if (age == "18+") {
      let otletek = [
        "Elegáns kézitáska",
        "Parfüm ajándékcsomag",
        "Divatékszerek",
        "Smink készlet",
        "Otthoni wellness csomag",
        "Laptop vagy telefon kiegészítők",
        "Könyvek (pl. romantikus vagy önfejlesztő)",
        "Napszemüveg",
        "DIY készletek (pl. kötés, hímzés)",
        "Streaming előfizetés (pl. Netflix)",
        "Puha pléd vagy párna",
        "Kávéfőző gép",
        "Főző- vagy sütőkészlet",
        "Fitnesz matrac",
        "Okosóra vagy karkötő",
        "Szoba dekorációs LED-ek",
        "Instant kamera vagy Polaroid",
        "Divatos cipő vagy ruhadarab",
        "Koncert- vagy színházjegy",
        "Elegáns bögre vagy teáskészlet",
      ];
      output.innerHTML = otletek[randomNum];
    }
  }
}

getAge();
