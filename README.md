# The Hill : JavaScript Part II

(re)bienvenue dans le dossier JavaScript, les deux dernières séries.

Je vous renvoie au [README de la première partie](../../01-the-field/javascript/README.md) pour plus d'informations.

### Serveur local

Les exercices des séries 10 & 11 ont besoin de tourner sur un **serveur local**.

Dans le cas présent, nous vous avons tout préparé, vous allez utiliser un petit serveur local nommé [`seve`](https://github.com/leny/seve).

Avant toute chose, installez [node.js](https://nodejs.org/en) sur votre machine.
Une fois fait, utilisez votre terminal pour *naviguer* dans le dossier du présent repo, puis entrez les commandes suivantes :

	npm install
	npm start

Si tout se passe bien, votre navigateur par défaut s'ouvrira sur l'adresse [localhost:8000](https://localhost:8000).

> 👉 Ne vous tracassez pas trop de node.js pour le moment. Nous y reviendrons bien assez tôt...

### Consignes spécifiques

#### Section 11 - fetch

Pour les exercices concernant fetch, vous allez avoir besoin d'interroger une API REST.
Nous vous avons prévu un petit script pour faire tourner cette API en local.

Ouvrez un second terminal, puis _naviguez_ jusqu'au dossier du repo. Ensuite, lancez les commandes suivantes :

    npm run api

À partir de là, vous aurez une API REST disponible à l'adresse `http://localhost:3000`

* * *

Bon travail !

![javascript](starwarsjs.gif)
