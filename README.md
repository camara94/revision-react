# La révision en React JS
Dans ce j'ai repris ma formation de la spécialisation de développement
Full Stack de coursera de Hong Kong University of science and technology

Tout d'abord un développeur Full Stack doit comprendre et assimiler 
les differente couches:
* **la couche présentation(HTML, CSS, JavaScript, Angular, ReactJS, JQuery, ...)** 
  pour tout ce conserne la génération du contenu au près du client(browser ou navigateur);
* **la couche logique ou métier(NodeJS, Java, PHP, Python,C#, ...)** conserne la logique 
  métier ou le traitement des données entre le client et la couche d'accès 
  aux données.
* **la couche d'accèss aux données(MYSQL, MongoDB, Cassandara, ...)** conserve 
    la persistance des données c'est leurs sauvegardes et leurs protections

## I-Développement Full Stack
1.  -<a href="https://www.laurencegellert.com/2012/08/what-is-a-full-stack-developer/">https://www.laurencegellert.com/2012/08/what-is-a-full-stack-developer/</a>
2. 	-<a href="https://edward-designer.com/web/full-stack-web-developer/">
		https://edward-designer.com/web/full-stack-web-developer/</a>
3. 	-<a href="https://www.andyshora.com/full-stack-developers.html">
		https://www.andyshora.com/full-stack-developers.html</a>
4. 	-<a href="https://en.wikipedia.org/wiki/Multitier_architecture">
		https://en.wikipedia.org/wiki/Multitier_architecture</a>
5. 	-<a href="http://www.tonymarston.net/php-mysql/3-tier-architecture.html">
		http://www.tonymarston.net/php-mysql/3-tier-architecture.html</a>

## II-Mise en place de l'environnement de travail
*   Git et Github
1. -<a href="https://git-scm.com/">https://git-scm.com/</a>
2. -<a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git">
	https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
	</a>
3. -<a href="https://git-scm.com/docs">https://git-scm.com/docs</a>
4. -<a href="http://ndpsoftware.com/git-cheatsheet.html">
	http://ndpsoftware.com/git-cheatsheet.html
	</a>
5. -<a href="https://www.atlassian.com/git/tutorials">
	https://www.atlassian.com/git/tutorials
	</a>
*   Node et NPM
1. -<a href="https://nodejs.org/en/">https://nodejs.org/en/</a>
2. -<a href="https://www.npmjs.com/">https://www.npmjs.com/</a>
3. -<a href="https://nodejs.org/api/">https://nodejs.org/api/</a>
4. -<a href="https://docs.npmjs.com/">https://docs.npmjs.com/</a>
5. -<a href="https://github.com/johnpapa/lite-server">https://github.com/johnpapa/lite-server</a>

## III-Pourquoi une libraire ou Framework JavaScript
1. d'abord pour les manipulations complexe du **DOM** et la mise à jour 
   des données dans une page HTML
2. Ils nous permetent d'implementer les applications web qui respectent
    l'architecture **MVC** OU **MVVM**
3. Ils nous facilitent la liaisions des données (data binding)
4. Leurs respects de certaines patternes 
5. leurs comportements de réutilisabilité
6. leurs modularités 

## IV-Difference entre Framework et Bibliothèque en JavaScript
* premièrement une **bibliothèque JS** est une collection de fonctionnalité 
	ou fonctions qui facilite le développement d'une application mais n'impose pas
	une structure propre à l'application donc elle se bas sur l'approche **imperative**
	c'est à dire que le développeur impose sa propre structure(comment l'app doit être executer et structruré par exemple).
	<code>Exemple: jQuery, Meteor, Polymer, knockout, Vue, Mercury...</code>
* alors que le **Framework** impose une structure bien determinée et le développeur 
   l'adapte son bésoin en ajoutant son code et les **Framework** ils utilisent l'approche dite declarative avec eventuellement l'**inversion de control**
   <code>Exemple: Angular, React, Ember, Backbone, Aurelia, ...</code>

## V-Demarrer avec React JS
    Pour installer React JS Dans ce cours, on utilise deux gestionnaires de packages à savoir NPM(Node Package Manager) et yarn qui est aussi un autre Gestionnaire 
*  pour installer React globalement dans son, on utilise:
1.    <code>yarn global add create-react-app@latest</code> ou son équivalent **NPM** 
2.    <code>npm install -g create-react-app@latest</code>
*  pour avoir une idée comment l'utiliser on tappe la commande suivante:
1. <code>create-react-app --help</code>

## VI-Création d'un projet React
    Pour créer un projet react JS
*   <code>create-react-app nomDuProject</code> 
    dans cas <code>create-react-app confusion</code>
*   pour demarrer je vais dans le dossier <code>cd confusion</code> et puis
    <code>yarn start</code> ou <code>npm start</code>

## VII JSX (JavaScript Extension)

* Syntaxe d'extension JavaScript 
* une courte notation des functions JavaScript qui sera appelée et evaluée
  en objet JavaScript.
* une separation artificielle de la logique de génération à partir d'autre
  logique UI (User Interface).

  Ex: <code>

### Syntaxe JSX:
   <pre>
  		const element = (
  			&lt;h1&gt; className="greeting">Hello, World&lt;/h1&gt;
  		)

   </pre>

### Syntaxe React:
   <pre>
  		const element = ReactDom.render(
  			'h1',
  			{className:'greeting'},
  		    'Hello, World'
  		)

   </pre>

### Syntaxe d'objet JavaScript:
   <pre>
  		const element = {
  			type: 'h1',
  			props: {
  				className: 'greeting',
  			    children: 'Hello, World'
  			}
  		}

   </pre>
</code>

**NB**: les JSX comme, vous pouvez la remarqué on constate qu'il ya peu 
		de ligne de code.

## Configuration de notre app pour l'adaption à notre bésoin
Ici nous allons utiliser **bootstrap(Reactstrap)**
* pour installer la dernière version de **Bootstrap** :
1.  <code>yarn add bootstrap@latest</code> ou
2.  <code>npm install -g bootstrap@latest --save</code>
* ensuit on install **reactstrap** 
1.  <code>yarn add reatstrap</code> ou
2.  <code>npm install -g reatstrap --save</code>
* ensuit on install  **react-popper**
1.  <code>yarn add react-popper</code> ou
2.  <code>npm install -g react-popper --save</code><br/>
**NB**: ces dependances nous permettent les differentes fonctionnalités
        de **react** en **bootstrap**
pour les utilisés, je dois importer **bootstrap** dans mon fichier **src/index.js**
 <code>import 'bootstrap/dist/css/bootstrap.min.css'</code> 

* Voici un exemple de code, qui permet d'ajouter une barre de navigation en **react**
<code>

<pre>
		import { Navbar, NavbarBrand } from 'reactstrap';

		    const nav = (
		      &lt;div className="App"&gt;
		        &lt;Navbar dark color="primary"&gt;
		          &lt;div className="container"&gt;
		            &lt;NavbarBrand href="/"&gt;Ristorante Con Fusion&lt;/NavbarBrand&gt;
		          &lt;/div&gt;
		        &lt;/Navbar&gt;
		      &lt;/div&gt;
		    );
	</pre>
</code>

### Quelques liens utils
#### Quelques Ressources en React 
*   <a href="https://reactjs.org/">https://reactjs.org/</a>
*   <a href="https://github.com/facebook/create-react-app">https://github.com/facebook/create-react-app</a>
*   <a href="https://reactstrap.github.io/">https://reactstrap.github.io/</a>
*   <a href="https://reactstrap.github.io/components/navbar/">https://reactstrap.github.io/components/navbar/</a>
*   <a href="https://reactstrap.github.io/components/navbar/">https://reactstrap.github.io/components/navbar/</a>
*   <a href="https://reactjs.org/docs/introducing-jsx.html">https://reactjs.org/docs/introducing-jsx.html</a>
*   <a href="https://babeljs.io/repl">https://babeljs.io/repl</a>
#### Quelques Définitions
*   <a href="https://en.wikipedia.org/wiki/Software_framework">https://en.wikipedia.org/wiki/Software_framework</a>
*   <a href="https://en.wikipedia.org/wiki/Inversion_of_control">https://en.wikipedia.org/wiki/Inversion_of_control</a>
*   <a href="https://www.netguru.com/blog/imperative-vs-declarative">https://www.netguru.com/blog/imperative-vs-declarative</a>
*   <a href="http://latentflip.com/imperative-vs-declarative">http://latentflip.com/imperative-vs-declarative</a>
#### Quelques Blog et Articles 
*   <a href="https://hackernoon.com/5-best-javascript-frameworks-in-2017-7a63b3870282#.tt1k09l1d">https://hackernoon.com/5-best-javascript-frameworks-in-2017-7a63b3870282#.tt1k09l1d</a>
*   <a href="https://medium.com/javascript-scene/top-javascript-frameworks-topics-to-learn-in-2017-700a397b711#.pe809bf0u">https://medium.com/javascript-scene/top-javascript-frameworks-topics-to-learn-in-2017-700a397b711#.pe809bf0u</a>
*   <a href="">https://medium.com/javascript-scene/top-javascript-frameworks-topics-to-learn-in-2017-700a397b711#.pe809bf0u</a>
*   <a href="http://codenugget.co/2015/03/05/declarative-vs-imperative-programming-web.html">http://codenugget.co/2015/03/05/declarative-vs-imperative-programming-web.html</a>
*   <a href="https://develoger.com/is-reactjs-library-or-a-framework-a14786f681a0">https://develoger.com/is-reactjs-library-or-a-framework-a14786f681a0</a>
*   <a href="https://www.quora.com/Is-React-a-library-or-a-framework-and-why">https://www.quora.com/Is-React-a-library-or-a-framework-and-why</a>
*   <a href="https://www.upwork.com/hire/react-js-developers/">https://www.upwork.com/hire/react-js-developers/</a>
*   <a href="https://www.sohamkamani.com/blog/2016/11/16/react-is-a-framework/">https://www.sohamkamani.com/blog/2016/11/16/react-is-a-framework/</a>
*   <a href="https://hashnode.com/post/why-isnt-react-called-framework-what-does-it-lack-to-be-a-framework-ciwm324og010xzx53wjfq354i">https://hashnode.com/post/why-isnt-react-called-framework-what-does-it-lack-to-be-a-framework-ciwm324og010xzx53wjfq354i</a>

## React Components: Objectifs et résultats
   Dans cette partie, vous découvrirez les components en **React** et comment nous construisons un component en **React** et concevons ses vues. À la fin de cette leçon, vous pourrez:
*         Créer un component en React
*         Construisez le code du component en React et la vue de votre 
		  component à l'aide de **JSX** et **JavaScript**
*         comprendre les **states** et **props**

## Importance des components en React
*  Un composant renvoie un ensemble d'éléments React qui
devrait apparaître à l'écran
*  Les composants vous permettent de diviser votre interface utilisateur en
pièces indépendantes et réutilisables
*  Les composants acceptent également les entrées
*  Différents types de composants peuvent être définis dans React

## Composants React: State & Props
### State
* Chaque component peut stocker ses propres informations 
  locales dans son **state** 
1.  Privé et entièrement contrôlé par le component
2.  Peut être transmis comme **props** aux enfants
* Seuls les components de classe peuvent avoir un **state** local

### Props
Les attributs **JSX** sont passés dans un component comme un seul objet
* Disponible dans le component comme **props**
* Peut passer dans plusieurs attributs
* Impossible de modifier les **props** dans le component

## Gestion des événements
* La gestion des événements est similaire à la façon dont vous gérez
événements sur les éléments DOM:
1. Utilisez camelCase pour spécifier les événements
2. Fonction Pass en tant que gestionnaire d'événements
* Exemple:
        <code> &lt;Card onClick = {() => this.onDishSelect (plat)}&gt;</code>

## Partage d'information ou donnée entre components
* Parfois, plusieurs components peuvent partager les
mêmes données
* Les modifications des données dans un composant doivent être
réfléchi vers un autre component
* Mieux vaut déplacer l’état partagé vers un commun
component ancêtre

## Components React: méthodes de cycle de vie
### React Component Lifecycle
*    Le component React passe par les étapes suivantes
     étapes du cycle de vie:
      1. Mounting
      2. Updating
      3. Unmounting

### Plusieurs méthodes de cycle de vie disponibles à chaque étape
* Mounting Lifecycle Methods
 Appelé lors de la création d'une instance d'un component
 et inséré dans le DOM:
1. <code>constructor()</code>
2. <code>getDerivedStateFromProps()</code>
3. <code>render()</code>
4. <code>componentDidMount()</code>

### Updating(Mise à jour des méthodes de cycle de vie)
 Appelé lors du rendu d'un component
 qui peut être causée par le chnangement du **props** ou **state**
1. <code>getDerivedStateFromProps()</code>
2. <code>shouldComponentUpdate()</code>
3. <code>render()</code>
4. <code>getSnapshotBeforeUpdate()</code>
5. <code>componentDidUpdate()</code>
* Deux méthodes désormais obsolètes:
<code>componentWillReceiveProps ()</code> et <code>componentWillUpdate ()</code>

### Unmounting Lifecycle Methods
 Est appelé lorsque le component est supprimé
du DOM:
 <code>componentWillUnmount ()</code>
* Traitement des erreurs: appelé en cas d'erreur
pendant le rendu, dans une méthode de cycle de vie ou dans le
constructeur de tout component enfant
 <code>componentDidCatch ()</code>

## React Resources
*  <a href="https://reactjs.org/docs/components-and-props.html">https://reactjs.org/docs/components-and-props.html</a>
*  <a href="https://reactjs.org/docs/state-and-lifecycle.html">https://reactjs.org/docs/state-and-lifecycle.html</a>
*  <a href="https://reactstrap.github.io/components/media/">https://reactstrap.github.io/components/media/</a>
*  <a href="https://reactjs.org/docs/react-component.html">https://reactjs.org/docs/react-component.html</a>
*  <a href="https://reactstrap.github.io/components/card/">https://reactstrap.github.io/components/card/</a>
*  <a href="https://getbootstrap.com/docs/4.0/content/typography/#unstyled">https://getbootstrap.com/docs/4.0/content/typography/#unstyled</a>
*  <a href="https://github.com/facebook/react-devtools">https://github.com/facebook/react-devtools</a>
*  <a href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi">https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi</a>

## Assignment 1 Ideatation Resources

*  <a href="https://en.wikipedia.org/wiki/Ideation_(creative_process)">https://en.wikipedia.org/wiki/Ideation_(creative_process)</a>
*  <a href="https://www.volunteermatch.org/">https://www.volunteermatch.org/</a>
*  <a href="https://www.freecodecamp.org/">https://www.freecodecamp.org/</a>