/*
Abstract Factory este un model de proiectare creațional care permite crearea de familii de obiecte fără a
specifica clasele concrete. Acest model oferă o interfață comună pentru fabricile care produc obiecte
interconectate, asigurând compatibilitatea între ele.
*/
/*
Avantaje:
Separare între client și logica de creare – Clientul nu trebuie să cunoască clasele concrete ale obiectelor create.

Asigură compatibilitatea obiectelor – Produsele create sunt garantat compatibile între ele, evitând probleme de incompatibilitate.

Respectă principiul deschis/închis (Open/Closed) – Permite adăugarea de noi variante de produse fără a modifica codul existent.

Simplifică gestionarea configurațiilor multiple – Este ideal pentru aplicații care trebuie să suporte mai multe stiluri, teme sau platforme.

Dezavantaje:
Complexitate crescută – Necesită crearea unui număr mare de clase și interfețe, ceea ce poate complica arhitectura aplicației.

Extinderea unui produs individual este dificilă – Adăugarea unui nou tip de produs în familie necesită modificarea tuturor fabricilor existente.

Poate introduce dependențe suplimentare – Creșterea numărului de interfețe și clase poate face codul mai greu de întreținut.
*/

interface AbstractFactory {
    createProductA(): AbstractProductA;
    createProductB(): AbstractProductB;
}

class ConcreteFactory1 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB1();
    }
}

class ConcreteFactory2 implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA2();
    }

    public createProductB(): AbstractProductB {
        return new ConcreteProductB2();
    }
}

interface AbstractProductA {
    usefulFunctionA(): string;
}

class ConcreteProductA1 implements AbstractProductA {
    public usefulFunctionA(): string {
        return 'The result of the product A1.';
    }
}

class ConcreteProductA2 implements AbstractProductA {
    public usefulFunctionA(): string {
        return 'The result of the product A2.';
    }
}

interface AbstractProductB {
    usefulFunctionB(): string;
    anotherUsefulFunctionB(collaborator: AbstractProductA): string;
}

class ConcreteProductB1 implements AbstractProductB {
    public usefulFunctionB(): string {
        return 'The result of the product B1.';
    }

    public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return `The result of the B1 collaborating with the (${result})`;
    }
}

class ConcreteProductB2 implements AbstractProductB {
    public usefulFunctionB(): string {
        return 'The result of the product B2.';
    }

    public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
        const result = collaborator.usefulFunctionA();
        return `The result of the B2 collaborating with the (${result})`;
    }
}

function clientCode(factory: AbstractFactory) {
    const productA = factory.createProductA();
    const productB = factory.createProductB();

    console.log(productB.usefulFunctionB());
    console.log(productB.anotherUsefulFunctionB(productA));
}

console.log('Client: Testing client code with the first factory type...');
clientCode(new ConcreteFactory1());

console.log('');

console.log('Client: Testing the same client code with the second factory type...');
clientCode(new ConcreteFactory2());
