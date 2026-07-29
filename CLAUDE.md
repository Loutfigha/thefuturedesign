# The Future Design — website

Statische marketingsite voor The Future Design (webdesign & digital marketing, Utrecht).
Nederlandstalig. Geen build-stap, geen framework: platte HTML met één gedeelde CSS en JS.

## Structuur

| Bestand | Inhoud |
|---|---|
| `index.html` | Homepage |
| `diensten.html` | Overzicht diensten |
| `webdesign.html`, `e-commerce.html`, `strategie.html`, `campagnes.html` | Dienst-detailpagina's |
| `cases.html` | Projectoverzicht |
| `case-rebrand.html`, `case-webshop.html` | Case-detailpagina's |
| `over-ons.html`, `contact.html` | Bureau en contact |
| `style.css` | Alle styling (design tokens bovenin) |
| `main.js` | Scroll-reveal, count-up cijfers, tijdslots, contactformulier |

Lokaal bekijken: `python3 -m http.server 8000` en open `http://localhost:8000`.

## Design system

Tokens staan als CSS-variabelen bovenin `style.css`. Gebruik altijd de variabelen, geen losse hex-waarden.

- Merkkleuren komen uit het logo: `--purple #7C3AED`, `--purple-l #A78BFA`, `--pink #F0426E`, `--orange #FB8A3C`, `--cyan #2FC8F2`
- Gradiënten: `--grad` (paars, primaire CTA's), `--grad-hot` (roze→oranje), `--grad-flame` (roze→paars→cyaan, alleen voor accentwoorden en kleine details)
- Neutraal: `--ink` tekst, `--gray` bijschrift, `--line` randen, `--soft` lichte vlakken, `--dark` donkere secties
- Fonts: Space Grotesk voor koppen, Inter voor tekst
- Container `max-width: 1040px`, secties `padding: 104px 0`

**Toon van het ontwerp:** rustig en zakelijk. Veel witruimte, kleur uitsluitend als accent, subtiele animaties. Geen drukke achtergronden of zwevende UI-elementen die over kaartranden vallen.

## Terugkerende componenten

Header (`nav.navpill`), boekingssectie (`section.plan`) en footer zijn op elke pagina identiek. Wijzig je er één, wijzig ze dan overal — of gebruik het generatorscript (zie hieronder).

Andere bouwstenen: `.sh` + `.lbl` (sectiekop met eyebrow), `.svcgrid`/`.svccard` (diensten), `.cgrid`/`.ccard` (cases), `.steps`/`.step` (aanpak), `.stats`/`.stat` (cijfers), `.split` (twee kolommen), `.faq`, `.darkin` (donker blok), `.rv` (scroll-reveal, verplicht voor nieuwe secties).

## Werkwijze

Alle HTML-bestanden worden handmatig onderhouden — bewerk ze direct, er is geen generator of build-stap.

Let op bij wijzigingen aan header, boekingssectie of footer: die staan op elke pagina afzonderlijk in de HTML. Pas je er één aan, pas ze dan overal aan (11 bestanden).

## Nog te doen

- Placeholders vervangen: cases (`case-*.html`), teamleden (`over-ons.html`), telefoonnummer `+31 0 000 000 00`, klantlogo's in de marquee
- Contactformulier koppelen aan een endpoint (nu een `alert()` in `main.js`)
- Agenda-embed plaatsen in `.calbox` (Cal.com of Calendly) ter vervanging van de statische tijdslots
- Privacybeleid en algemene voorwaarden aanmaken (footerlinks staan op `#`)
- Favicon en `opengraph.jpg` toevoegen

## Afspraken

- Nederlandse teksten, je/jij-vorm, korte zinnen
- Geen frameworks of build-tools toevoegen zonder overleg
- Nieuwe animaties moeten `prefers-reduced-motion` respecteren (regel staat onderin `style.css`)
- Semantische HTML en toegankelijke contrasten; teksten niet in afbeeldingen
