/*
Metoda Factory (Factory Method) este un model de proiectare creational utilizat pentru a crea obiecte
fără a specifica exact clasa obiectului care va fi instanțiat. În loc să creeze obiecte direct,
o clasă delegă această responsabilitate unor subclase printr-o metodă abstractă,
permițând astfel extinderea și modificarea comportamentului fără a altera codul existent.

Acest model promovează principiul Open/Closed, facilitând adăugarea de noi tipuri de produse
fără a modifica codul existent. De asemenea, ajută la separarea logicii de creare a obiectelor 
de utilizarea acestora, făcând codul mai flexibil și mai ușor de întreținut.

Un exemplu clasic al metodei Factory este implementarea unui Creator abstract, 
care definește metoda fabricării, iar subclasele concrete (creatori specifici)
implementează această metodă pentru a returna diferite tipuri de produse.
*/
/*
Avantaje:
Principiul deschis/închis (Open/Closed) – Permite extinderea aplicației fără a modifica codul existent.

Separarea logicii de creare a obiectelor – Îmbunătățește modularitatea și face codul mai ușor de întreținut.

Flexibilitate – Permite crearea de obiecte diferite fără a modifica clientul.

Respectă principiul responsabilității unice (SRP) – Creatorul și produsul sunt gestionate separat.

Dezavantaje:
Crește complexitatea codului – Adaugă mai multe clase și interfețe, ceea ce poate complica structura aplicației.

Poate afecta performanța – Crearea de obiecte prin metode virtuale poate avea un impact asupra performanței în anumite cazuri.

Necesită mai mult efort de proiectare – Este nevoie de o bună înțelegere a relațiilor dintre clase pentru a fi implementat corect.
*/

abstract class Creator {
    public abstract factoryMethod(): Product;

    public someOperation(): string {
        const product = this.factoryMethod();
        return `Creator: The same creator's code has just worked with ${product.operation()}`;
    }
}

class ConcreteCreator1 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}

class ConcreteCreator2 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}

interface Product {
    operation(): string;
}

class ConcreteProduct1 implements Product {
    public operation(): string {
        return '{Result of the ConcreteProduct1}';
    }
}

class ConcreteProduct2 implements Product {
    public operation(): string {
        return '{Result of the ConcreteProduct2}';
    }
}

function clientCode(creator: Creator) {
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.someOperation());
}

console.log('App: Launched with the ConcreteCreator1.');
clientCode(new ConcreteCreator1());
console.log('');

console.log('App: Launched with the ConcreteCreator2.');
clientCode(new ConcreteCreator2());
