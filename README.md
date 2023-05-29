
# Faire une page interactive avec JS

Tu sais coder en JS, tu sais parcourir le DOM, tu sais le modifier et maintenant tu sais détecter les évènements. En mettant tout ensemble, on rend une page interactive !

## 1. Introduction

À présent tu sais coder en JS, parcourir le DOM, modifier des éléments HTML et détecter des évènements utilisateurs : il est temps de réunir toutes ces connaissances ! Tu vas enfin créer ta première page interactive.

Dans ce projet nous allons te donner une page HTML déjà faite (et qui ne sera pas sans te rappeler un projet passé…). Tu vas rajouter un tas de fonctionnalités sur cette page afin qu'elle réagisse aux actions d'un visiteur. À toi de jouer !

PS : tout comme le projet sur les modifications du DOM : **il est interdit de toucher au fichier HTML** ! On va tout faire par JavaScript.

## 2. Le projet

### Mise en place de l'exo

Commence par télécharger [ce repo GitHub](https://github.com/TheHackingProject/JS_events) : il contient la page HTML `exo_events.html` que nous allons pimper.

Maintenant rajoute dans le même dossier un fichier `script.js` qui va contenir ton code JavaScript (je l'ai déjà appelé dans le fichier HTML donc pas besoin de le faire).

### Avant de se lancer…

On va te rabâcher les oreilles avec le même genre de conseils que pour la journée précédente… Mais si tu ne les as pas bien en tête, tu vas passer une sale après-midi !

- **Quand tu cherches à modifier un élément ou à réagir à un event le concernant, assure-toi d'abord que tu pointes bien dessus** (quitte à l'imprimer en console). Ensuite seulement tu peux essayer de lui appliquer la modification. Si tu fais les 3 choses en même temps et que ça marche pas, tu ne sais pas quelle étape tu as raté : tu pointes vers un mauvais élément ? C'est la fonction de modification qui est mal écrite ? Ou bien c'est l'évènement que tu n'arrives pas à détecter ? **Fais les choses pas à pas** !
- **"si ça bogue, mets des `console.log`"** ! Affiches tes variables, tes éléments HTML et confirment qu'ils ont les valeurs auxquelles tu t'attends.
- Rappelle-toi : de nombreuses fonctions pour parcourir le DOM renvoient des listes d'éléments (qui s'apparentent à des arrays). **Et on ne peut pas appliquer une fonction de modification sur une liste** : il faut l'appliquer sur un élément de cette liste (sinon on obtient une erreur). En gros, si tu fais `document.getElementsByClassName("coucou").innerHTML = "salut"` tu as une erreur. Il faut rajouter un `[x]` pour choisir un élément de la liste sur lequel appliquer la modification : `document.getElementsByClassName("coucou")[0].innerHTML = "salut"` ça marche.
- Les modifications demandées sont nombreuses : **essaye a minima d'implémenter toutes les fonctionnalités jusqu'à la n°5**. Les autres c'est bonus !

On va te mettre des petits **Indices** afin de te guider ✨✨✨.

### Fonctionnalité 1 :

On commence par un petit échauffement : lorsque l'utilisateur va cliquer sur le footer (portant le tag `<footer>`), tu vas afficher le mot "clique" en console.

Cette fonctionnalité doit être codée avec un `addEventListener("click", function(){ }` car c'est une bonne habitude à prendre ! 😇

### Fonctionnalité 1-bis :

Maintenant on va upgrader cette première fonctionnalité : lorsque l'utilisateur va cliquer sur le footer, tu vas afficher en console "clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic.

**Indice :** Rien de très compliqué par rapport à la version précédente : déclare une variable qui va servir de compteur et incrémente-la quand l'évènement a lieu !

### Fonctionnalité 2 :

On va enfin faire fonctionner ce satané "Hamburger Menu" qui s'affiche depuis le début mais qui n'actionne rien quand on clique dessus. C'est quoi un "hamburger menu" ? [C'est ça](https://fr.wikipedia.org/wiki/Menu_lat%C3%A9ral), ce bouton avec trois lignes horizontales en haut à droite de la navbar.

Tu vas faire que si quelqu'un clique sur ce bouton, l'élément HTML portant l'Id `navbarHeader` perde sa classe `collapse`. Une fois que ça, ça marche, fait que si on clique à nouveau dessus, la classe `collapse` soit rajoutée à nouveau à l'élément portant l'Id `navbarHeader`

**Indice :** Il existe une fonction qui permet de rajouter une classe si elle n'est pas déjà présente et l'enlever si elle est déjà présente. C'est "toggle". Tu peux l'utiliser ainsi : elementDuDOM.classList.toggle("nomDeLaClasse")

### Fonctionnalité 3 :

À présent, on va faire cela : si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page). À toi de jouer !

**Indice :** Commence par bien pointer sur la première card en entier (stocke-la dans une variable puis affiche-la en console pour confirmer que tu l'as bien pointé).  
  
Puis pointe vers le bouton Edit de cette card (idem : stocke-le dans une variable et affiche-le en console).  
  
Une fois que ça c'est bien fait, tu peux facilement rajoute un style ="color: red" au texte de la card !

### Fonctionnalité 4 :

On va faire quelque chose de similaire à la fonctionnalité 3 mais un peu plus complexe : si on clique sur le bouton "Edit" de la **deuxième** card, le texte de la card va se mettre en vert. Si on re-clique dessus, il redevient comme avant ! Tu l'as compris, il va falloir que tu cherches comment faire un "toggle" sur le style du texte. C'est plus compliqué que sur une classe.

**Indice :** Reprend le code de la fonctionnalité 3 et adapte-le pour qu'il marche sur la 2ème card (et en remplaçant le rouge par du vert).  
  
Maintenant, pour le toggle, il va falloir te faire un petit if / else dans ton AddEventListener. On te donne le début :  
  
if (secondCard.style.color === 'green'){  
  
secondCard.style.color = '' ;  
  
}else …

### Fonctionnalité 5 :

Pour le fun, on va implémenter une fonctionnalité à la sauce ☢"nucléaire"🤯. Et comme elle est un peu dangereuse, on va la cacher… Voici comment elle doit marcher : si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS. Si possible, rends cette fonctionnalité réversible (un nouveau double-clic fait tout revenir à la normale).

**Indice :** Cherche sur Google comment désactiver le tag `<link>` avec JavaScript.

### Fonctionnalité 6 :

T'as déjà implémenté 5 fonctionnalités d'interaction ! C'est top ! On va commencer à corser les choses.

La fonctionnalité sera la suivante : si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle), celle-ci va se réduire. Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent visibles. Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale !

**Indice 1 :** Commence par implémenter cette fonctionnalité sur une card avant d'essayer de les faire toutes.

**Indice 2 :** Tu vas devoir appliquer les leçons apprises sur la fonctionnalité 2 (toggle de la classe "collapse") et sur la fonctionnalité 3 (toggle sur le style appliqué à l'image : tantôt on lui rajoute "width: 20 %;", tantôt on lui enlève).

**Indice 3 :** Une fois que ça marche sur une card, fait une boucle for sur la liste des 6 cards (a priori tu as extrait la card d'une liste d'éléments HTML non?) pour appliquer un addEventListener à chacune. /!\ mets bien le compteur de ta boucle en "let", sinon tu vas avoir des surprises… => [clique ici pour accéder à une ressource qui parle de ça](https://pawelgrzybek.com/loop-through-a-collection-of-dom-elements/).

### Fonctionnalité 7 :

Allez on va rajouter un peu de WTF dans la page : si un utilisateur clique sur le bouton gris `==>`, la dernière card (en bas à droite) va passer en premier (en haut à gauche). On va pouvoir faire tourner les cards !

**Indice :** Cette fonctionnalité n'est pas ultra complexe en fait : il faut pointer sur le noeud-parent des 6 cards puis déplacer la card n°6 en premier avec un insertBefore.

**Petite remarque :** tu vas réaliser que si tu mélanges les cards, il est fort probable que la fonctionnalité 6 va se mettre à faire n'importe quoi. Si tu survoles un bouton "View", c'est une autre card qui va se réduire. Si tu arrives à corriger ça, c'est cool mais la consigne est d'ignorer ce souci pour le moment.

### Fonctionnalité 8 :

Évidemment tu t'y attendais : on va faire tourner les card dans l'autre sens aussi. Donc si un utilisateur clique sur le bouton bleu `<==`, la première card devra passer en dernier. À première vue, tu te dis que si tu as réussi à faire la fonctionnalité précédente, celle-ci c'est du gateau... sauf qu'il y a quelques pièges. 😈

**Indice 1 :** Premier piège : il y a un lien HTML sur le bouton et si tu cliques dessus, une page s'ouvre ! Il faut que tu bloques ce comportement par défaut (via l'objet event - cf le cours).

**Indice 2 :** Deuxième piège : tu as utilisé "insertBefore" pour la fonctionnalité précédente mais il n'y a pas de "insertAfter". Une solution est de considérer qu'un "insertAfter un élément A" serait, s'il existait, équivalent à faire un "insertBefore sur le nœud APRES l'élément A". Et tu peux pointer sur un noeud APRES un élément en faisant "lastCard.nextSibling".

### Fonctionnalité 9 :

Bon si t'es arrivé jusque-là, c'est que t'as besoin d'un peu de challenge. Du coup je t'ai concocté une fonctionnalité de derrière les fagots, spécialement conçue pour les moussaillons pas piqués des hannetons (this sentence is brought to you by [www.vieilles-expressions.fr](http://www.vieilles-expressions.fr/)). Voici ce qu'elle va devoir faire :

- La fonctionnalité se déclenchera si le logo de la page (JS & Events) est sélectionné et qu'on appuie sur une touche spécifique du clavier.
- Si l'utilisateur presse la touche "a", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à gauche de l'écran.
- Si l'utilisateur presse la touche "y", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap au milieu de l'écran.
- Si l'utilisateur presse la touche "p", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à droite de l'écran.
- Si l'utilisateur presse la touche "b", tout redevient normal.

**Indice 1 :** L'event à utiliser est "keypress", appliqué au texte "JS & Events" (ou, mieux, à une div le contenant).

**Indice 2 :** Pour modifier le rendu visuel de toute la page, il faut que tu joues avec les classes de `<body>`.

**Indice 3 :** Pour mettre tout sur 4 colonnes, rajoute la classe col-4. Pour les placer au milieu ou à droite, rajoute la classe offset-md-4 ou offset-md-8.

**Indice 4 :** Pour éviter que les classes s'accumulent, et pour que chaque touche ait un comportement propre, retire toutes les classes du `<body>` à chaque fois qu'un "keypress" est détecté. Ensuite seulement tu rajoutes les classes nécessaires.

## 3. Rendu attendu

Un repo GitHub par groupe de pair-programming contenant la page HTML mais surtout le fichier `script.js` avec tout le code dedans !