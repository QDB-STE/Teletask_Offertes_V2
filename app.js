
// Artikelen met groepen (volledige lijst)
const artikelen = [
  // Centrale
  { code: "TDS10300", naam: "PALAS", groep: "Centrale", aantal: 0 },
  { code: "TDS10309", naam: "DOMUS", groep: "Centrale", aantal: 0 },
  { code: "TDS15009", naam: "DOMUS+ Licentie", groep: "Centrale", aantal: 0 },
  { code: "TDS10132", naam: "Voeding 2A", groep: "Centrale", aantal: 0 },
  { code: "TDS10134", naam: "Voeding 4A", groep: "Centrale", aantal: 0 },
  { code: "TDS10202", naam: "Uitbreidingsinterface", groep: "Centrale", aantal: 0 },

  // Buskabel
  { code: "TDS90004ZH", naam: "AUTOBUS kabel 100m", groep: "Buskabel", aantal: 0 },
  { code: "TDS90005ZH", naam: "AUTOBUS kabel 100m FLEX", groep: "Buskabel", aantal: 0 },

  // Relais interfaces
  { code: "TDS13504", naam: "Relaismodule 4 x 10A", groep: "Relais interfaces", aantal: 0 },
  { code: "TDS13512", naam: "Relaismodule 8 x 10A", groep: "Relais interfaces", aantal: 0 },
  { code: "TDS13510", naam: "Relaismodule 8 x 16A", groep: "Relais interfaces", aantal: 0 },

  // Dimmer interfaces
  { code: "TDS13609", naam: "Dimmodule 8 x 0-10V", groep: "Dimmer interfaces", aantal: 0 },
  { code: "TDS13611", naam: "Dimmodule 8 x 1-10V", groep: "Dimmer interfaces", aantal: 0 },
  { code: "TDS13621", naam: "DALI/DMX interface", groep: "Dimmer interfaces", aantal: 0 },
  { code: "TDS13632", naam: "PWM dimmer 2 x 6,25A", groep: "Dimmer interfaces", aantal: 0 },
  { code: "TDS13634", naam: "PWM dimmer 4 x 3,1A", groep: "Dimmer interfaces", aantal: 0 },
  { code: "TDS13642", naam: "Universele FET Power dimmer 2 x 350W", groep: "Dimmer interfaces", aantal: 0 },
  { code: "TDS13644", naam: "Universele FET Power dimmer 4 x 250W", groep: "Dimmer interfaces", aantal: 0 },

  // Motoren
  { code: "TDS13526", naam: "Motormodule 4 x 230V AC", groep: "Motoren", aantal: 0 },

  // Digitale ingangen
  { code: "TDS12117", naam: "Digitale ingangsinterface", groep: "Digitale ingangen", aantal: 0 },
  { code: "TDS12134", naam: "Cookie", groep: "Digitale ingangen", aantal: 0 },
  { code: "TDS12136", naam: "Box met 10x Cookie", groep: "Digitale ingangen", aantal: 0 },
  { code: "TDS12135", naam: "Cookie met feedback & PT100 ingang", groep: "Digitale ingangen", aantal: 0 },

  // Bedieningspanelen
  { code: "TDS12019BL", naam: "AURUS-1", groep: "Bedieningspanelen", aantal: 0 },
  { code: "TDS12020BL", naam: "AURUS-2", groep: "Bedieningspanelen", aantal: 0 },
  { code: "TDS12025BL", naam: "AURUS-2 SENSE", groep: "Bedieningspanelen", aantal: 0 },
  { code: "TDS12024BL", naam: "AURUS-4S", groep: "Bedieningspanelen", aantal: 0 },
  { code: "TDS12026BL", naam: "AURUS-4 TEMP", groep: "Bedieningspanelen", aantal: 0 },
  { code: "TDS12027BL", naam: "AURUS-6", groep: "Bedieningspanelen", aantal: 0 },
  { code: "TDS12028BL", naam: "AURUS-6 TEMP", groep: "Bedieningspanelen", aantal: 0 },
  { code: "TDS12022BL", naam: "AURUS-OLED", groep: "Bedieningspanelen", aantal: 0 },
  { code: "TDS12045", naam: "PENTUS", groep: "Bedieningspanelen", aantal: 0 },
  { code: "TDS12070", naam: "OPUS", groep: "Bedieningspanelen", aantal: 0 },

  // Analoge ingangen & sensoren
  { code: "TDS12150WH", naam: "SIRIUS plafondbewegingsmelder", groep: "Analoge ingangen & sensoren", aantal: 0 },
  { code: "TDS12270WH", naam: "Lichtsensor", groep: "Analoge ingangen & sensoren", aantal: 0 },
  { code: "TDS12250WH", naam: "Temperatuursensor", groep: "Analoge ingangen & sensoren", aantal: 0 },
  { code: "TDS12251", naam: "Temperatuursensor buiten (Cookie-T)", groep: "Analoge ingangen & sensoren", aantal: 0 },
  { code: "TDS12260WH", naam: "Vochtigheidssensor", groep: "Analoge ingangen & sensoren", aantal: 0 },
  { code: "TDS12280", naam: "Water(lek) sensor", groep: "Analoge ingangen & sensoren", aantal: 0 },
  { code: "TDS12285", naam: "Optische regensensor", groep: "Analoge ingangen & sensoren", aantal: 0 },
  { code: "TDS12287", naam: "Windsnelheidsmeter", groep: "Analoge ingangen & sensoren", aantal: 0 },
  { code: "TDS12301", naam: "Cookie-AD", groep: "Analoge ingangen & sensoren", aantal: 0 },
  { code: "TDS12311", naam: "Analoge ingangsmodule", groep: "Analoge ingangen & sensoren", aantal: 0 },
  { code: "TDS12310", naam: "Universele analoge ingangsmodule", groep: "Analoge ingangen & sensoren", aantal: 0 },
  { code: "TDS12340BE", naam: "P1 interface digitale meter", groep: "Analoge ingangen & sensoren", aantal: 0 },

  // IR
  { code: "TDS14065", naam: "IR-Cookie", groep: "IR", aantal: 0 },

  // Proximity
  { code: "TDS12142GB", naam: "Proximity reader zwart glas", groep: "Proximity", aantal: 0 },
  { code: "TDS12202", naam: "Proximity kaart", groep: "Proximity", aantal: 0 },
  { code: "TDS12203", naam: "Proximity tag", groep: "Proximity", aantal: 0 },

  // Software
  { code: "TSF16101", naam: "ATMOS subscriptie 1 jaar", groep: "Software", aantal: 0 },
  { code: "TSF16103", naam: "ATMOS subscriptie 3 jaar", groep: "Software", aantal: 0 },
  { code: "TSF16105", naam: "ATMOS subscriptie 5 jaar", groep: "Software", aantal: 0 },
  { code: "TSF16110", naam: "ATMOS subscriptie 10 jaar", groep: "Software", aantal: 0 },
  { code: "TDS15240", naam: "Audio IP Licentie", groep: "Software", aantal: 0 },
  { code: "TDS15105", naam: "GUI+ Visualisatie", groep: "Software", aantal: 0 },

  // MAIOR
{ code: "TDS12052CA", naam: "MAIOR 15\" touchscreen", groep: "MAIOR", aantal: 0 },
{ code: "TDS12053CA", naam: "MAIOR 19\" touchscreen", groep: "MAIOR", aantal: 0 },

// DIVUS CIRCLE
{ code: "CIRCLE", naam: "DIVUS CIRCLE", groep: "DIVUS CIRCLE", aantal: 0 },
{ code: "UP-CIRCLE-PS24", naam: "Voeding 24V", groep: "DIVUS CIRCLE", aantal: 0 },
{ code: "MU-CIRCLE", naam: "Inbouwdoos", groep: "DIVUS CIRCLE", aantal: 0 },

// DIVUS CIRCLE SMALL
{ code: "CIRCLE SMALL+", naam: "DIVUS CIRCLE SMALL+", groep: "DIVUS CIRCLE SMALL", aantal: 0 },
{ code: "CIRCLE SMALL", naam: "DIVUS CIRCLE SMALL", groep: "DIVUS CIRCLE SMALL", aantal: 0 },
{ code: "MU-CIRCLE-SMALL", naam: "Inbouwdoos", groep: "DIVUS CIRCLE SMALL", aantal: 0 },

// DIVUS CIRCLE small Corian
{ code: "CIRCLE SMALL C-DN", naam: "Zwart", groep: "DIVUS CIRCLE small Corian", aantal: 0 },
{ code: "CIRCLE SMALL C-DW", naam: "Wit", groep: "DIVUS CIRCLE small Corian", aantal: 0 },
{ code: "CIRCLE SMALL C-SG", naam: "Grijs", groep: "DIVUS CIRCLE small Corian", aantal: 0 },
{ code: "MU-CIRCLE-SMALL", naam: "Inbouwdoos", groep: "DIVUS CIRCLE small Corian", aantal: 0 },

// DIVUS SQUARE small Corian
{ code: "SQUARE SMALL C-DN", naam: "Zwart", groep: "DIVUS SQUARE small Corian", aantal: 0 },
{ code: "SQUARE SMALL C-DW", naam: "Wit", groep: "DIVUS SQUARE small Corian", aantal: 0 },
{ code: "SQUARE SMALL C-SG", naam: "Grijs", groep: "DIVUS SQUARE small Corian", aantal: 0 },
{ code: "MU-CIRCLE-SMALL", naam: "Inbouwdoos", groep: "DIVUS SQUARE small Corian", aantal: 0 },

// I/O Module
{ code: "UP-CIRCLE-I/O MODULE", naam: "I/O Module", groep: "I/O Module", aantal: 0 },
{ code: "UP-CIRCLE-PS24", naam: "Voeding 24V", groep: "I/O Module", aantal: 0 },

// DEHN
{ code: "952315", naam: "Voedingsnet 3N400V", groep: "DEHN", aantal: 0 },
{ code: "952305", naam: "Voedingsnet 3x230V", groep: "DEHN", aantal: 0 },
{ code: "952115", naam: "Voedingsnet monofasig TT", groep: "DEHN", aantal: 0 },
{ code: "952205", naam: "Voedingsnet monofasig TN", groep: "DEHN", aantal: 0 },
{ code: "953920-TT", naam: "AUTOBUS kabel", groep: "DEHN", aantal: 0 },
{ code: "909703", naam: "Kabeldistributie", groep: "DEHN", aantal: 0 },
{ code: "922220", naam: "Telefoniekabel", groep: "DEHN", aantal: 0 },
{ code: "900913", naam: "PV systeem DC (1 MPP ing. 2 strings)", groep: "DEHN", aantal: 0 },
{ code: "900921", naam: "PV systeem DC (2 MPP ing. 1 string)", groep: "DEHN", aantal: 0 },
{ code: "900923", naam: "PV systeem DC (2 MPP ing. 2 strings)", groep: "DEHN", aantal: 0 },

// JUNG
{ code: "TSA230NCWW", naam: "Thermisch ventielaandrijving 230V", groep: "JUNG", aantal: 0 },

];

// Artikelen tabel vullen met groepen
function vulArtikelen() {
  const table = document.getElementById("artikelen");
  table.innerHTML = "<tr><th>Artikel</th><th>Code</th><th>Aantal</th><th>Acties</th></tr>";

  const groepen = [...new Set(artikelen.map(a => a.groep))];

  groepen.forEach(groepNaam => {
    const groepArtikelen = artikelen.filter(a => a.groep === groepNaam);

    let row = table.insertRow();
    let cell = row.insertCell();
    cell.colSpan = 4;
    cell.textContent = groepNaam;
    cell.style.fontWeight = "bold";
    cell.style.background = "#f0f0f0";

    groepArtikelen.forEach(a => {
      let row = table.insertRow();
      row.insertCell(0).textContent = a.naam;
      row.insertCell(1).textContent = a.code;
      row.insertCell(2).textContent = a.aantal;

      const acties = row.insertCell(3);
      const plus = document.createElement("button");
      const min = document.createElement("button");

      plus.textContent = "+";
      min.textContent = "-";

      plus.onclick = () => {
        a.aantal++;
        row.cells[2].textContent = a.aantal;
      };

      min.onclick = () => {
        if (a.aantal > 0) {
          a.aantal--;
          row.cells[2].textContent = a.aantal;
        }
      };

      acties.append(min, plus);
    });
  });
}

// Excel export
function downloadExcel() {
  const klant = document.getElementById("klant").value;
  const project = document.getElementById("project").value;

  if (!klant || !project) {
    alert("Klant en project zijn verplicht.");
    return;
  }

  let rijNummer = 10000;
  const exportData = [];

  const groepen = [...new Set(artikelen.map(a => a.groep))];

  groepen.forEach(groep => {
    const groepArtikelen = artikelen.filter(a => a.groep === groep && a.aantal > 0);
    if (groepArtikelen.length === 0) return;

    groepArtikelen.forEach(a => {
      exportData.push({
        A: rijNummer,
        Q: groep,
        E: a.code,
        AD: a.aantal
      });
      rijNummer += 10000;
    });
  });

  if (exportData.length === 0) {
    alert("Geen artikelen geselecteerd.");
    return;
  }

  const ws = XLSX.utils.json_to_sheet(exportData, {
    header: ["A", "Q", "E", "AD"],
    skipHeader: true
  });

  XLSX.utils.book_append_sheet(
    XLSX.utils.book_new(),
    ws,
    "Export"
  );

  XLSX.writeFile(
    { SheetNames: ["Export"], Sheets: { Export: ws } },
    `${klant}_${project}.xlsx`
  );
}

// Init
window.onload = vulArtikelen;
