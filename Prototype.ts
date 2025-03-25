/*
Prototype este un model de proiectare creațional care permite crearea de obiecte noi prin clonarea unui obiect 
existent. Acesta este util atunci când instanțierea unui obiect este costisitoare sau complexă, 
iar în schimb se preferă copierea unui obiect existent și personalizarea acestuia.
*/

/*
Avantaje:
Reducerea costurilor de creare a obiectelor – Clonarea unui obiect existent este adesea mai rapidă și mai eficientă decât crearea unui obiect de la zero, mai ales în cazul obiectelor complexe.

Flexibilitate în configurare – Clonarea unui obiect permite personalizarea fiecărei copii după necesitățile specifice ale aplicației, fără a afecta obiectul original.

Evita repetarea logicii – Dacă mai multe obiecte trebuie să aibă configurații similare, clonarea unui prototype poate reduce codul duplicat și poate îmbunătăți reutilizarea codului.

Implementare simplă în aplicațiile cu obiecte complexe – În loc să construiești un obiect complex de fiecare dată, poți clona un obiect deja configurat și să-l modifici pe parcurs.

Dezavantaje:
Creșterea complexității – În unele cazuri, clonarea poate deveni complexă, în special atunci când obiectele au relații adânci (nested objects), care necesită clonare profundă și gestionarea corectă a referințelor.

Gestionarea referințelor circulare – Clonarea obiectelor care conțin referințe circulare (unde un obiect face referire la sine) poate crea dificultăți suplimentare în gestionarea integrității obiectelor și a referințelor.

Nu este întotdeauna eficientă – Dacă obiectele care trebuie clonate sunt foarte simple, clonarea poate introduce o complexitate inutilă și poate nu aduce niciun beneficiu semnificativ în ceea ce privește performanța.

Suprasolicitarea memoriei – Clonarea multor obiecte mari poate duce la creșterea consumului de memorie și poate afecta performanța aplicației pe termen lung.
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
