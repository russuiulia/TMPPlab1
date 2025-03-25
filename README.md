# Șabloane Creționale


## 1. Singleton

### Descriere:
Patternul **Singleton** asigură că o clasă are o singură instanță și oferă un punct de acces global pentru aceasta. Acesta este util atunci când ai nevoie de o singură instanță a unei clase pentru a controla resursele sau setările aplicației.

### Avantaje:
- Asigură controlul asupra instanțierii obiectului.
- Permite acces global la instanța unică.
  
### Dezavantaje:
- Poate duce la dificultăți în testarea unităților, deoarece nu poate fi instanțiat mai multe ori.
- Poate fi greu de extins dacă nu este implementat corect.

---

## 2. Factory Method

### Descriere:
Patternul **Factory Method** definește o interfață pentru crearea unui obiect, dar permite subclasei să decidă ce clasă să instanțieze. Acesta ajută la abstractizarea procesului de instanțiere a obiectelor și este util când tipul obiectului nu este cunoscut dinainte.

### Avantaje:
- Permite decuplarea între client și obiectele pe care le creează.
- Ajută la extinderea codului fără a modifica clasele existente.

### Dezavantaje:
- Poate duce la creșterea numărului de clase în proiect.
- Poate deveni mai complex atunci când sunt multe tipuri de produse care trebuie create.

---

## 3. Abstract Factory

### Descriere:
Patternul **Abstract Factory** oferă o interfață pentru crearea de familii de obiecte fără a specifica clasele concrete. Acesta se folosește atunci când este necesar să creezi obiecte care aparțin aceleași "familii", iar obiectele dintr-o familie sunt compatibile între ele.

### Avantaje:
- Permite crearea de obiecte care sunt compatibile între ele.
- Permite extinderea cu ușurință, adăugând noi familii de produse fără a modifica codul existent.

### Dezavantaje:
- Crește complexitatea codului datorită interfețelor și claselor suplimentare.
- Poate face mai greu de înțeles și de utilizat atunci când sunt multe variante de produse.

---

## 4. Prototype

### Descriere:
Patternul **Prototype** permite clonarea obiectelor, creând copii ale unui obiect existent, fără a depinde de constructorii acestuia. Este util când obiectele sunt complexe și au mai multe stări care trebuie copiate rapid.

### Avantaje:
- Permite clonarea rapidă a obiectelor complexe.
- Reduce costul creării unor noi instanțe ale obiectelor.

### Dezavantaje:
- Clonarea obiectelor cu referințe înapoi poate deveni complexă și necesită gestionarea atentă a acestor referințe.
- Poate duce la un consum mai mare de memorie dacă nu este implementat corect.

---

## 5. Builder

### Descriere:
Patternul **Builder** separă construcția unui obiect complex de reprezentarea acestuia. Acesta permite crearea treptată a unui obiect prin pași specifici și este folosit atunci când obiectele au multe părți care pot varia.

### Avantaje:
- Permite crearea de obiecte complexe într-un mod flexibil și controlat.
- Separa logică de construcție de utilizarea obiectului final.

### Dezavantaje:
- Poate duce la crearea unui număr mare de clase pentru fiecare tip de Builder.
- Crește complexitatea codului atunci când sunt multe variante de produse.

---
