// generisanje menija

let meni = ["Pocetna", "O nama", "Proizvodi", "Kontakt", "Autor", "Dokumentacija", "Preuzmi projekat"];
let meniPutanje = ["#", "#o_nama", "#proizvodi", "#kontakt", "autor.html", "DOKUMENTACIJA.pdf", "GadgetHub.zip"];

function meniGenerisanje() {
  let output = "<ul> <h2>Menu</h2>";
  for (let i = 0; i < meni.length; i++) {
    output += `<li><a href="${meniPutanje[i]}">${meni[i]}</a></li>`;
  }
  output += "</ul>";
  return output;
}

document.getElementById("menu").innerHTML = meniGenerisanje(meni, meniPutanje);

// liste proizvoda

let proizvodi = [
  {
    ime: "Apple iPhone 17",
    slika: "images/iphone3.jpeg",
    opis: "Apple iPhone 17 Pro Max 2 TB Silver",
    kategorija: "Telefon",
  },
  {
    ime: "Apple iPhone 16",
    slika: "images/iphone1.jpeg",
    opis: "Apple iPhone16 512 GB Ultramarine",
    kategorija: "Telefon",
  },
  {
    ime: "Apple iPhone 15",
    slika: "images/iphone2.webp",
    opis: "Apple iPhone 15 Plus 512GB Black",
    kategorija: "Telefon",
  },
  {
    ime: "MSI Laptop",
    slika: "images/msilaptop.jpeg",
    opis: 'MSI Laptop 9S7-15K111-1027 15,6"/Intel i7-13620H/16 GB/512 GB SSD/NVIDIA GEFORCE RTX 4050',
    kategorija: "Laptop",
  },
  {
    ime: "HP Laptop",
    slika: "images/hplaptop.jpeg",
    opis: 'HP Laptop B4TN1EA 16,1"/Intel Core i5-14450HX/16 GB/1 TB SSD/NVIDIA GeForce RTX 4060',
    kategorija: "Laptop",
  },
  {
    ime: "Acer Laptop",
    slika: "images/acerlaptop.jpeg",
    opis: 'Acer Laptop ANV15-52-97B6 15,6"/Intel Core i9-13900H/16 GB/1 TB SSD/NVIDIA GeForce RTX 5060/Linux',
    kategorija: "Laptop",
  },
  {
    ime: "VOX Smart televizor",
    slika: "images/voxtv.jpeg",
    opis: "VOX Smart televizor LED 43VYF683",
    kategorija: "Televizor",
  },
  {
    ime: "LG Smart televizor",
    slika: "images/lgtv.jpeg",
    opis: "LG Smart televizor 50QNED70A6A",
    kategorija: "Televizor",
  },
  {
    ime: "Samsung Smart televizor",
    slika: "images/samsungtv.jpeg",
    opis: "Samsung Smart televizor UE50U8072FUXXH",
    kategorija: "Televizor",
  },
];

// generisanje proizvoda i prikazivanje proizvoda po katerogijama

function prikaziProizvode(filtrirani) {
  let output = "";
  for (let p of filtrirani) {
    output += `<article class="style1">
      <span class="image"><img src="${p.slika}" alt="" /></span>
      <a href="#"><h2>${p.ime}</h2>
      <div class="content"><p>${p.opis}</p></div></a>
    </article>`;
  }
  document.getElementById("proizvodi").innerHTML = output;
}

document
  .getElementById("kategorija-select")
  .addEventListener("change", function (e) {
    const kat = e.target.value;
    const filtrirani = kat
      ? proizvodi.filter((p) => p.kategorija === kat)
      : proizvodi;
    prikaziProizvode(filtrirani);
  });

prikaziProizvode(proizvodi);

// forma regularni izrazi

const imeInput = document.getElementById("ime");
const prezimeInput = document.getElementById("prezime");
const emailInput = document.getElementById("email");
const razlogSelect = document.getElementById("razlog");
const porukaTextarea = document.getElementById("poruka");

const imeError = document.getElementById("imeError");
const prezimeError = document.getElementById("prezimeError");
const emailError = document.getElementById("emailError");
const razlogError = document.getElementById("razlogError");
const porukaError = document.getElementById("porukaError");

function validirajIme() {
  imeError.textContent = "";
  const imeRegex = /^[A-ZČĆŽŠĐ][a-zčćžšđ]{1,20}( [A-ZČĆŽŠĐ][a-zčćžšđ]{1,20})*$/;
  if (!imeInput.value.trim()) {
    imeError.textContent = "Ime ne sme biti prazno.";
    return false;
  } else if (!imeRegex.test(imeInput.value.trim())) {
    imeError.textContent = "Ime nije u pravilnom formatu.";
    return false;
  }
  return true;
}

function validirajPrezime() {
  prezimeError.textContent = "";
  const prezimeRegex =
    /^[A-ZČĆŽŠĐ][a-zčćžšđ]{1,20}( [A-ZČĆŽŠĐ][a-zčćžšđ]{1,20})*$/;
  if (!prezimeInput.value.trim()) {
    prezimeError.textContent = "Prezime ne sme biti prazno.";
    return false;
  } else if (!prezimeRegex.test(prezimeInput.value.trim())) {
    prezimeError.textContent = "Prezime nije u pravilnom formatu.";
    return false;
  }
  return true;
}

function validirajEmail() {
  emailError.textContent = "";
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  if (!emailInput.value.trim()) {
    emailError.textContent = "Email ne sme biti prazan.";
    return false;
  } else if (!emailRegex.test(emailInput.value.trim())) {
    emailError.textContent = "Email nije u pravilnom formatu.";
    return false;
  }
  return true;
}

function validirajRazlog() {
  razlogError.textContent = "";
  if (!razlogSelect.value) {
    razlogError.textContent = "Morate izabrati razlog.";
    return false;
  }
  return true;
}

function validirajPoruku() {
  porukaError.textContent = "";
  const porukaRegex = /^.{5,}$/;
  if (!porukaTextarea.value.trim()) {
    porukaError.textContent = "Poruka ne sme biti prazna.";
    return false;
  } else if (!porukaRegex.test(porukaTextarea.value.trim())) {
    porukaError.textContent = "Poruka mora imati bar 5 karaktera.";
    return false;
  }
  return true;
}

imeInput.addEventListener("blur", validirajIme);
prezimeInput.addEventListener("blur", validirajPrezime);
razlogSelect.addEventListener("blur", validirajRazlog);
emailInput.addEventListener("input", validirajEmail);
porukaTextarea.addEventListener("input", validirajPoruku);

const uspehPoruka = document.getElementById("uspehPoruka");
const kontaktForma = document.querySelector("#kontakt form");
if (kontaktForma) {
  kontaktForma.addEventListener("submit", function (e) {
    let validno = true;
    if (!validirajIme()) validno = false;
    if (!validirajPrezime()) validno = false;
    if (!validirajEmail()) validno = false;
    if (!validirajRazlog()) validno = false;
    if (!validirajPoruku()) validno = false;
    if (!validno) {
      e.preventDefault();
      uspehPoruka.textContent = "";
    } else {
      e.preventDefault();
      kontaktForma.reset();
      imeError.textContent = "";
      prezimeError.textContent = "";
      emailError.textContent = "";
      razlogError.textContent = "";
      porukaError.textContent = "";
      uspehPoruka.textContent = "Forma je uspešno poslata!";
    }
  });
}

// sekcija o nama

const naslovi = [
  "Širok Asortiman Proizvoda",
  "Stručna Podrška Kupcima",
  "Kvalitet i Pouzdanost",
];

const podnaslovi = [
  "Sve na jednom mestu",
  "Saveti i pomoć pri kupovini",
  "Provereni brendovi i garancija",
];

const tekstovi = [
  "U našoj prodavnici pronaći ćete najnoviju tehničku opremu – od računara i laptopova, preko pametnih telefona, do dodatne opreme i gedžeta. Pratimo trendove i redovno obnavljamo ponudu kako bismo zadovoljili sve vaše potrebe na jednom mestu.",
  "Naš tim stručnjaka je uvek spreman da vam pomogne pri izboru odgovarajuće opreme. Bilo da ste profesionalac ili entuzijasta, dobićete korisne savete, preporuke i podršku tokom i nakon kupovine.",
  "Saradjujemo isključivo sa proverenim brendovima i nudimo proizvode sa garancijom. Naš cilj je da svaki kupac bude zadovoljan kvalitetom i pouzdanošću kupljene opreme, uz sigurnu i brzu isporuku.",
];

function oNamaGenerisanje() {
  let output = "<h1>O nama</h1>";
  output += `

  <div class="container">
  <div class="row aln-center aln-middle">

  `;
  for (let i = 0; i < naslovi.length; i++) {
    output += `
    
      <div class="col-12 aln-center aln-middle" id="o_nama_artikli" >
      <h2>${naslovi[i]}</h2>
      <span class="o-nama-podnaslov" style="display:block;">${podnaslovi[i]}</span><br/>
      <p class="onama-tekst" style="display:none;">${tekstovi[i]}</p>
        <button type="button" class="onama-btn" data-index="${i}">Prikaži više</button>
        
      </div>
      `;
  }

  output += "</div></div>";
  return output;
}

document.getElementById("o_nama").innerHTML = oNamaGenerisanje();

// o nama prikazi vise/prikazi manje
document.querySelectorAll(".onama-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const tekst = this.parentElement.querySelector(".onama-tekst");
    const podnaslov = this.parentElement.querySelector(".o-nama-podnaslov");
    if (tekst.style.display === "none") {
      tekst.style.display = "block";
      podnaslov.style.display = "none";
      this.textContent = "Prikaži manje";
    } else {
      tekst.style.display = "none";
      podnaslov.style.display = "block";
      this.textContent = "Prikaži više";
    }
  });
});
