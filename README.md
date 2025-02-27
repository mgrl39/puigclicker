# Exercici 4: Puig Clicker
## Descripció:
> [!NOTE]  
> Objectiu: Aprofundir en els conceptes relacionats amb els events, components i React.

> Desenvolupament: Individual.

> Lliurament: No s’entrega.

## Enunciat

El concepte dels jocs clicker es va popularitzar el 2013 amb la sortida del joc Cookie Clicker, però el gènere havia nascut abans, amb jocs com Progress Quest (2002) o Cow Clicker (2010).

La premissa és simple, a través de clics o alguna altra eina simple, aconseguim una moneda que podem gastar per aconseguir millores, les quals ens generen més monedes. En alguns llocs, el clic acaba sent irrellevant i només s’utilitza per comprar més millores.

L’objectiu és aconseguir muntar un clicker senzill, es pot fer de qualsevol temàtica, però ha de complir uns requisits mínims:

- Dues pàgines, Inici i Joc
- El progrés s’ha de guardar
- Inici amb dos botons: 
    - Un per anar al joc
    - Un per esborrar les dades per començar de 0 (amb confirmació!)
- Dos components a reutilitzar:
    - Component Moneda: Hi haurà diverses monedes que generen diners, cada una quan es fa clic genera una quantitat diferent. Això significa que podem identificar mínim tres paràmetres: nom, valor i que fa en afegir.
    - Component Millora: Hi haurà diverses millores. Cada millora es pagarà amb la moneda global i podem comprar-ho diversos cops. Això significa que podem identificar mínim quatre paràmetres: nom, cost, que fa en afegir i quantes vegades ho he comprat.
- Joc:
    - S’utilitzaren tantes vegades com vulguem els components anteriors.
    - Recuperarem les dades guardades
    - Guardarem les dades cada cop que canvien.
    - Portarem control de les monedes i de les millores
