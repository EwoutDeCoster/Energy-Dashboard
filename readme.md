# Home Wizard Energy dashboard

Dashboard gemaakt om je energie verbruik thuis te monitoren per fase.
Voor dit project gebruikte ik een [Home Wizard P1 Meter](https://www.homewizard.com/p1-meter/).

![1673008125936](image/readme/1673008125936.png)

## Functionaliteit

**Elektriciteit**

* `Actief verbruik` : Toont het actief verbruik van je huis. Als je zonnepanelen hebt kan dit ook negatief gaan. In dit geval lever je energie terug aan het net.
* `Fase 1` : Elektriciteit verbruik op fase 1.
* `Fase 2` : Elektriciteit verbruik op fase 2.
* `Fase 3` : Elektriciteit verbruik op fase 3. (In mijn geval is hier een auto lader op aangesloten. Daarom het oplader icoon.)

**Gas**

* `Meterstand`: Geeft de meterstand van je gasteller door. Onderaan staat telkens het tijdstip van de laatste meting.

## Setup

In `assets\js\data.js` op regel 1 staat er `192.168.0.160` . Verander dit IP adress naar het IP adress van jouw Home Wizard meter om de applicatie te doen werken.
