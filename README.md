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
  			<h1 className="greeting">Hello, World</h1>
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