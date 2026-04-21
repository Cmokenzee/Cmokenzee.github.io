# Maturita 2026

Studijní rozcestník — všechny materiály k maturitě 2026 na jednom místě.

## Co to je

Statická HTML stránka s 6 předměty a 70 detailními rozbory/otázkami:

| Předmět | Počet | Popis |
|---|---|---|
| Čeština — didaktický test | 1 | Literární druhy, žánry, období, tropy, figury, verš, rým, strategie |
| Maturitní četba | 20 | Rozbory povinné četby |
| KYB — Kybernetická bezpečnost | 13 | CIA triáda, malware, útoky, šifrování, autentizace, incidenty |
| MPIV — Mikroprocesory a periferie | 13 | MCU, GPIO, čítače, IoT, procesory, paměti, GPU |
| OSY — Operační systémy | 10 | Vývoj, stavba, procesy, souběh, paměť, souborové systémy |
| PST — Počítačové sítě | 13 | OSI, Ethernet, VLAN, TCP/UDP, IPv4/6, Wi-Fi, směrování |

## Struktura

```
maturita/
├── index.html          # hlavní rozcestník
├── cestina/            # didaktický test
├── cetba/              # 20 rozborů
├── kyb/                # 13 otázek KYB
├── mpiv/               # 13 otázek MPIV
├── osy/                # 10 otázek OSY
└── pst/                # 13 otázek PST
```

V každé předmětové složce je `index.html` s přehledem, ostatní HTML soubory jsou detailní stránky. Každá detailní stránka má nahoře navigační pruh zpět na rozcestník a na přehled předmětu.

## Lokální spuštění

```bash
cd maturita
python3 -m http.server 8000
```

Pak otevři http://localhost:8000/ v prohlížeči.

## Publikace na GitHub Pages

```bash
cd maturita
git init
git add .
git commit -m "Initial commit – maturita hub"
```

### Varianta A — přes `gh` CLI

```bash
gh repo create maturita --public --source=. --push
```

### Varianta B — ručně

1. Vytvoř nové veřejné repo na <https://github.com/new> (název: `maturita`)
2. Přidej remote a pushni:
   ```bash
   git remote add origin git@github.com:USERNAME/maturita.git
   git branch -M main
   git push -u origin main
   ```

### Zapnutí GitHub Pages

1. Na GitHubu: **Settings → Pages**
2. **Source**: Deploy from a branch
3. **Branch**: `main`, folder: `/ (root)` → Save

Po ~1 minutě bude web dostupný na:

```
https://USERNAME.github.io/maturita/
```

Díky souboru `.nojekyll` GitHub Pages servíruje soubory tak, jak jsou, bez Jekyll zpracování.
