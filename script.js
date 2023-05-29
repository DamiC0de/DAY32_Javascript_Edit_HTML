// Fonctionnalité 1 : clic sur le footer
var footer = document.getElementsByTagName('footer')[0];

footer.addEventListener("click", function() {
  console.log("clique");
});

// Fonctionnalité 1-bis : clic sur le footer

var footer = document.getElementsByTagName('footer')[0];
var clickCount = 0;

footer.addEventListener("click", function() {
  clickCount++;
  console.log("clic numéro " + clickCount);
});

// Fonctionnalité 2 : hamburger menu
var hamburgerButton = document.getElementsByClassName('navbar-toggler')[0];
var navbarHeader = document.getElementById('navbarHeader');

hamburgerButton.addEventListener("click", function() {
  navbarHeader.classList.toggle("collapse");
});

// Fonctionnalité 3 : texte en rouge

var firstCard = document.getElementsByClassName('card-body')[0];
console.log(firstCard);  // Pour confirmer que nous avons bien pointé la première card

var editButton = firstCard.getElementsByClassName('btn btn-sm btn-outline-secondary')[0]; // suppose que 'btn-edit' est la classe du bouton Edit
console.log(editButton);  // Pour confirmer que nous avons bien pointé le bouton Edit

editButton.addEventListener("click", function() {
  firstCard.style.color = "red";
});

// Fonctionnalité 4 : texte en vert

var secondCard = document.getElementsByClassName('card-body')[1]; // Nous voulons la deuxième carte, donc l'indice est 1
var secondEditButton = secondCard.getElementsByClassName('btn btn-sm btn-outline-secondary')[0]; // suppose que 'btn-edit' est la classe du bouton Edit

secondEditButton.addEventListener("click", function() {
  if (secondCard.style.color === 'green'){
    secondCard.style.color = '' ; // Remet la couleur par défaut
  } else {
    secondCard.style.color = "green";
  }
});

// Fonctionnalité 5 : Bootstrap désactivé

var navbarHeader = document.getElementById('navbarHeader');
var bootstrapLink = document.querySelector('link[rel=stylesheet]'); 

navbarHeader.addEventListener("dblclick", function() {
  if (bootstrapLink.disabled) {
    bootstrapLink.disabled = false;
  } else {
    bootstrapLink.disabled = true;
  }
});

// Fonctionnalité 6 : réduction des cards

var viewButtons = document.getElementsByClassName('btn-success'); // suppose que 'btn-success' est la classe du bouton View

for (let i = 0; i < viewButtons.length; i++) {
  let card = viewButtons[i].closest('.card'); // trouve la carte correspondante pour le bouton View
  let cardText = card.getElementsByClassName('card-text')[0];
  let cardImg = card.getElementsByTagName('img')[0];

  viewButtons[i].addEventListener("mouseover", function() {
    cardText.style.display = "none";
    cardImg.style.width = "20%";
  });

  viewButtons[i].addEventListener("mouseout", function() {
    cardText.style.display = "";
    cardImg.style.width = "";
  });
}

// Fonctionnalité 7 : déplacement de la dernière card

var greyButton = document.querySelector('.btn.btn-secondary.my-2');
var cardContainer = document.querySelector('.bg-light .container .row');

greyButton.addEventListener("click", function() {
  var cards = cardContainer.querySelectorAll('.col-md-4');
  cardContainer.insertBefore(cards[cards.length-1], cards[0]);
});

// Fonctionnalité 8 : déplacement de la première card

var blueButton = document.querySelector('.btn.btn-primary.my-2');
var cardContainer = document.querySelector('.bg-light .container .row');

blueButton.addEventListener("click", function(event) {
  // Bloquer le comportement par défaut du lien
  event.preventDefault();

  var cards = cardContainer.querySelectorAll('.col-md-4');
  

  if (cards[0].nextSibling) {
    cardContainer.insertBefore(cards[0], cards[cards.length-1].nextSibling);
  } else {
   
    cardContainer.appendChild(cards[0]);
  }
});

// Fonctionnalité 9 : Logo

document.querySelector(".navbar-brand").addEventListener("click", function(event) {
    event.preventDefault(); 
    this.classList.add("selected"); 
  });
  
  document.addEventListener("keydown", function(event) {
    if (document.querySelector(".navbar-brand.selected")) {
      switch(event.key) {
        case "a":
          document.body.classList.add("col-4");
          break;
        case "y":
          document.body.classList.add("offset-md-4");
          break;
        case "p":
          document.body.classList.add("offset-md-8");
          break;
        case "b":
          document.body.className = "";
          break;
      }
    }
  });
  





