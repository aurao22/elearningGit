/* 
Activité : gestion des contacts

Chaque contact a un nom et un prénom. Le programme gère un tableau de contacts et offre à l’utilisateur le choix entre les fonctionnalités suivantes :
    Afficher chaque contact du tableau.
    Quitter.

Le programme doit “boucler” jusqu’à ce que l’utilisateur choisisse de quitter. Il doit également utiliser des objets pour gérer les contacts.

Les deux contacts à insérer initialement dans le tableau sont :
    Carole Lévisse
    Mélodie Nelsonne

Pour obtenir le maximum de points possibles, ajoutez la possibilité pour l’utilisateur de saisir un nouveau contact qui sera inséré dans le tableau.
*/

var Contact = {
    // Initialise le contact
    initContact: function (nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },
    
    // Informations du contact
    decrire: function () {
        return ("Nom : " + this.nom + ", prénom : " + this.prenom);
    }
};

console.log("Bienvenue dans le gestionnaire de contacts !");

/* Initialisation avec les 2 premiers contacts */
var contact1 = Object.create(Contact);
contact1.initContact("Lévisse", "Carole");

var contact2 = Object.create(Contact);
contact2.initContact("Nelsonne", "Mélodie");

/* Initialisation de la liste de contacts */
var contacts = [contact1, contact2];

/* boucle d'affichage du menu et du traitement */
var choix = -1;
while(choix != 0){
	choix = afficherMenu();
	switch (choix) {
	    case 0:
	        break;
	    case 1:
	        afficherContacts();
	        break;
	    case 2:
	        ajouterContact();
	        break;
    }
}
console.log("Le programme est terminé.");

/* Fonction pour afficher le menu, retourne la saisie de l'utilisateur */
function afficherMenu() {
	console.log("\n~~~~~~~~~~~~~~~~~~~~~~\n1 : Lister les contacts");
	console.log("2 : Ajouter un contact");
	console.log("0 : Quitter\n~~~~~~~~~~~~~~~~~~~~~~\n");
    var saisie = Number(prompt("Choisissez une option :"));
    return saisie;
};

/* Fonction pour afficher la liste de contacts*/
function afficherContacts(){
	console.log("Voici la liste de tous vos contacts :");
	contacts.forEach(function (Contact) {
	    console.log(Contact.decrire());
	});
	
}

/* Fonction pour ajouter un contact */
function ajouterContact(){
	var newNom = prompt("Nom :");
	var newPrenom = prompt("Prenom :");
	var newContact = Object.create(Contact);
	newContact.initContact(newNom, newPrenom);
	contacts.push(newContact);
	console.log("Le nouveau contact "+newContact.decrire()+" a été ajouté");
}
