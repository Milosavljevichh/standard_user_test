
# Automatizovani Testovi za Proces Narudžbine na SauceDemo

Ovaj repozitorijum sadrži automatizovane testove za proces narudžbine na sajtu [SauceDemo](https://www.saucedemo.com/). Testovi su implementirani koristeći Mocha kao test framework i Selenium WebDriver za automatizaciju browsera.

## Sadržaj

- [Instalacija](#instalacija)
- [Test Scenariji](#test-scenariji)
- [Pokretanje Testova](#pokretanje-testova)
- [Struktura Testova](#struktura-testova)
- [Izveštavanje](#izveštavanje)
- [Doprinos](#doprinos)
- [Licenca](#licenca)

## Instalacija

### Preduslovi

- Instalirani [Node.js](https://nodejs.org/) i npm na vašem računaru
- Instaliran Google Chrome ili neki drugi WebDriver-kompatibilan browser

### Postavljanje Projekta

1. Klonirajte ovaj repozitorijum:
   ```bash
   git clone https://github.com/vasusername/saucedemo-automation.git
   cd saucedemo-automation
   ```

2. Instalirajte zavisnosti:
   ```bash
   npm install
   ```

3. Uverite se da imate najnoviju verziju ChromeDriver-a:
   ```bash
   npm install chromedriver --save-dev
   ```

4. Konfigurišite environment varijable (opciono):
   - Kreirajte `.env` datoteku u glavnom direktorijumu i dodajte sledeće:
     ```bash
     SAUCEDEMO_URL=https://www.saucedemo.com/
     SAUCEDEMO_USERNAME=standard_user
     SAUCEDEMO_PASSWORD=secret_sauce
     ```

## Test Scenariji

Sledeći test scenariji su pokriveni:

1. **Prijava kao Standardni Korisnik**
   - Provera da li standardni korisnik može uspešno da se prijavi.
  
2. **Dodavanje Artikala u Korpu**
   - Provera da li se artikli mogu dodati u korpu.

3. **Prelazak na Plaćanje**
   - Provera da li korisnik može da pređe na stranicu za plaćanje.
  
4. **Završetak Narudžbine**
   - Provera da li korisnik može uspešno da završi narudžbinu.

## Pokretanje Testova

Da biste pokrenuli testove, koristite sledeću komandu:

```bash
npm test
```

Ova komanda će izvršiti sve test slučajeve redom.

## Struktura Testova

- **`test/`**: Sadrži sve test datoteke.
- **`pages/`**: Sadrži page object klase koje predstavljaju različite stranice na sajtu.
- **`utils/`**: Sadrži pomoćne funkcije i alate.

### Primer Strukture Test Datoteka

```bash
saucedemo-automation/
│
├── test/
│   ├── login.test.js
│   ├── add_to_cart.test.js
│   └── checkout.test.js
│
├── pages/
│   ├── login.page.js
│   ├── inventory.page.js
│   ├── cart.page.js
│   └── checkout.page.js
│
├── utils/
│   └── helpers.js
│
└── .env
```

## Izveštavanje

Rezultati testova će biti prikazani u konzoli nakon izvršenja. Za detaljnije izveštavanje, možete integrisati Mocha sa drugim alatima za izveštavanje kao što je `mochawesome`.