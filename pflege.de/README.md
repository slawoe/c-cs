# Aufgabe Junior Web Developer

## Entscheidungshilfe Mittagsessen

Um die tägliche Entscheidung, wo es zum Mittagessen hingeht, zu erleichtern, soll ein Zufallsgenerator entwickelt werden, der aus einer Liste von möglichen Zielen anhand von angegebenen Kriterien wie Preis und Entfernung die passenden Ziele anzeigt.

### Wireframe / Konzept

[Link](https://bit.ly/3bpFlyG)

### Mögliche Kategorien der Ziele / Restaurants:

- Alles
- Burger
- Pizza / Pasta
- Asiatisch
- Hausmannskost
- Sonstiges

Es dürfen mehrere Kategorien gleichzeitig ausgewählt werden. Alles beinhaltet sämtliche anderen Kategorien.

### Randomize-Button

Guckt aufgrund der vorhandenen / angeklickten Filter in der Liste nach geeigneten Essensplätzen und gibt diese in zufälliger Sortierung aus.

### Reset-Button

Stellt die Filterwerte auf den Initialzustand zurück und leert die Liste.

### Filter Entfernung, Preis, Veggietauglich

Berücksichtigt die Sterne der Restaurants in der entsprechenden Kategorie. Bsp. Preis: „egal“ – max. 3 Sterne, „nicht zu viel“ – max. 2 Sterne, „Ende des Monats“ – max. 1 Stern.

### Eigenschaften eines Ziels / Restaurants

- Name
- Adresse
- Kategorie(n) der angebotenen Speisen
- Entfernung zum Büro: \* = kurze Entfernung, \*\*\* = weite Entfernung
- Preis: \* = günstig, \*\*\* = teuer
- Veggie-geeignet: \* = wenig Auswahl, \*\*\* = gute Veggie-Auswahl

### Erlaubte Technologien

JS, PHP, HTML / CSS, MySQL

### Zur Verfügung stehende Zeit

Nimm dir soviel Zeit, wie Du möchtest, max. jedoch sechs Stunden. Setze Dir gerne selbst einen deinen Fähigkeiten entsprechenden Schwerpunkt, welchen Du uns demonstrieren möchtest: Z.B. eine gut bedienbare Oberfläche, eine ausgereifte Datenstruktur oder eine intelligente Filter-Logik.

### Daten

Folgen...

| Name                  | Entfernung | Preis  | Veggie-Tauglich |                      Adresse                       | Kategorie     |
| --------------------- | :--------: | :----: | :-------------: | :------------------------------------------------: | :------------ |
| Perle                 |     \*     |   \*   |     \*\*\*      |          Spitalerstraße 22, 20095 Hamburg          | Alles         |
| Europapassagen        |     \*     |  \*\*  |     \*\*\*      |          Ballindamm 40 EG2, 20095 Hamburg          | Alles         |
| Max & Consorten       |   \*\*\*   |   \*   |      \*\*       |            Spadenteich 1, 20099 Hamburg            | Hausmannskost |
| Luigi's               |   \*\*\*   |  \*\*  |     \*\*\*      |        Ditmar-Koel-Straße 21, 20459 Hamburg        | Pizza/Pasta   |
| Bella Italia          |    \*\*    |   \*   |      \*\*       |           Brandstwiete 58, 20457 Hamburg           | Pizza/Pasta   |
| Restaurant Kabul      |   \*\*\*   |   \*   |      \*\*       |            Steindamm 53, 20099 Hamburg             | Sonstiges     |
| Goot                  |    \*\*    | \*\*\* |       \*        |             Depenau 10, 20095 Hamburg              | Hausmannskost |
| O-ren Ishii           |    \*\*    | \*\*\* |     \*\*\*      |       Kleine Reichenstraße 18, 20457 Hamburg       | Asiatisch     |
| Better Burger Company |     \*     |  \*\*  |     \*\*\*      | Rosenstraße Ecke, Gertrudenkirchhof, 20095 Hamburg | Burger        |
| Bucks Burger          |    \*\*    |  \*\*  |     \*\*\*      |           Kurze Mühren 13, 20095 Hamburg           | Burger        |
| Mr. Cheng             |    \*\*    | \*\*\* |     \*\*\*      |             Speersort 1, 20095 Hamburg             | Asiatisch     |
| Franco Rathauspassage |    \*\*    |  \*\*  |     \*\*\*      |           Rathausmarkt 7, 20095 Hamburg            | Pizza/Pasta   |
