/*
Singleton este un model de proiectare creațional care asigură existența unei singure instanțe a unei clase 
și oferă un punct de acces global la aceasta. Acest model este util atunci când este necesară o resursă unică,
cum ar fi o conexiune la bază de date, un logger sau un manager de configurare.*/
/*
Avantaje:
Instanță unică – Asigură că există o singură instanță a clasei, evitând conflictele de resurse.

Control asupra accesului – Oferă un punct centralizat de acces la instanță.

Economisirea resurselor – Evită crearea și distrugerea repetată a obiectelor costisitoare.

Util în gestionarea stării globale – Ideal pentru manageri de configurare, conexiuni la baze de date sau loggeri.

Dezavantaje:
Dificultăți în testare – Poate îngreuna testele unitare din cauza dependențelor globale.

Încălcarea principiului responsabilității unice (SRP) – Clasa gestionează atât instanțierea, cât și logica de business.

Probleme în medii multi-thread – Dacă nu este implementat corect, poate duce la probleme de concurență.

Dificil de extins – Restricționează moștenirea și reutilizarea codului în mod flexibil.
*/
class Singleton {
    static #instance: Singleton;

    private constructor() { }

    public static get instance(): Singleton {
        if (!Singleton.#instance) {
            Singleton.#instance = new Singleton();
        }
        return Singleton.#instance;
    }

    public someBusinessLogic() {
    }
}

function clientCode() {
    const s1 = Singleton.instance;
    const s2 = Singleton.instance;

    if (s1 === s2) {
        console.log(
            'Singleton works, both variables contain the same instance.'
        );
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }
}

clientCode();
