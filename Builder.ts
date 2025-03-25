/*
Patternul Builder se folosește pentru a construi un obiect complex (care are mai multe părți) printr-o serie de pași, fiecare pas fiind gestionat de un constructor.
Fiecare variantă a constructorului poate crea un obiect complex diferit, 
dar folosind aceleași pași de construcție. Aceasta permite o flexibilitate mai mare în crearea obiectelor 
fără a încurca clientul cu detaliile procesului de construcție.
*/
/*
Avantaje ale Patternului Builder:
Separarea procesului de construcție de reprezentare: Permite construirea unui obiect complex în mod gradual, fără a amesteca detaliile de construcție cu logica de afaceri.

Flexibilitate: Poți crea variante diferite ale unui obiect, având pași comuni dar cu rezultate finale diferite, prin simpla modificare a pașilor în Builder.

Ușurința în utilizare: Codul client nu are nevoie să cunoască detaliile de implementare ale construcției obiectului complex, doar interfața Builder-ului.

Îmbunătățirea întreținerii codului: De obicei, constructorii sunt mai ușor de modificat și extins, iar schimbările în structura obiectului pot fi realizate fără a afecta clientul.

Reducerea complexității: Permite construirea unui obiect complex pas cu pas, fără a crea constructori multipli cu argumente care sunt greu de gestionat.

Dezavantaje ale Patternului Builder:
Creșterea complexității codului: Dacă există multe variante de produse și pași de construcție, codul poate deveni greu de gestionat, având o mulțime de clase Builder și Product.

Suprasolicitarea constructorilor: Este necesar să se creeze mai multe clase pentru fiecare tip de Builder, ceea ce poate duce la o mulțime de clase similare care trebuie întreținute.

Posibile duplicări: Dacă nu este implementat corect, unele părți ale constructorilor pot avea implementări similare sau duplicate, crescând astfel complexitatea întreținerii acestora.

Dependență de Director: În anumite cazuri, Director-ul este esențial, ceea ce înseamnă că nu este întotdeauna posibil să utilizezi Builder-ul fără a avea o clasă Director.
*/
interface Builder {
    producePartA(): void;
    producePartB(): void;
    producePartC(): void;
}

class ConcreteBuilder1 implements Builder {
    private product: Product1;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new Product1();
    }

    public producePartA(): void {
        this.product.parts.push('PartA1');
    }

    public producePartB(): void {
        this.product.parts.push('PartB1');
    }

    public producePartC(): void {
        this.product.parts.push('PartC1');
    }

    public getProduct(): Product1 {
        const result = this.product;
        this.reset();
        return result;
    }
}

class Product1 {
    public parts: string[] = [];

    public listParts(): void {
        console.log(`Product parts: ${this.parts.join(', ')}\n`);
    }
}

class Director {
    private builder: Builder;

    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    public buildMinimalViableProduct(): void {
        this.builder.producePartA();
    }

    public buildFullFeaturedProduct(): void {
        this.builder.producePartA();
        this.builder.producePartB();
        this.builder.producePartC();
    }
}

function clientCode(director: Director) {
    const builder = new ConcreteBuilder1();
    director.setBuilder(builder);

    console.log('Standard basic product:');
    director.buildMinimalViableProduct();
    builder.getProduct().listParts();

    console.log('Standard full featured product:');
    director.buildFullFeaturedProduct();
    builder.getProduct().listParts();

    console.log('Custom product:');
    builder.producePartA();
    builder.producePartC();
    builder.getProduct().listParts();
}

const director = new Director();
clientCode(director);
