const clothes_stock = {
	jeans : 24 ,
	jackets : 17,
};

const highQuality = true ;

const brands_by_clothes = {
	jeans : 'levis',
	jackets :['jules', 'nike', 'adidas'],
};
const brands_available = ['levis', 'jules','nike','adidas','puma'];

const size_by_clothes_available = {

	jeans : [32,34,38,40,42,44,46],
	jackets :['XS','S','M','L','XL','XXL'],
};

console.log(brands_by_clothes.jackets[2]);
// une cliente vient nous voir car elle formule une demande pour obtenir un jean en taille 42
const jean_size_customer1 = 42;

if(jean_size_customer1 === 42) {
   console.log("nous l'avons");
}
else{
	console.log("nous ne l'avons pas, désolé")
}
//un client vient nous voir car il formule une demande pour obtenir une veste taille XL

const jacket_size_customer2 = 'XL';

if(jacket_size_customer2 === 'XS') {
	console.log ('nous avons ce produit en stock !')
}
else{
	console.log("désolé, nous n'avons plus ce produit en stock")

}
//une cliente vient nous voir car elle aimerait savoir si nous avons en stocks des vestes de la marque nike et de taille M

const wish_user3 = brands_available [2];
const jacket_size_customer3 = size_by_clothes_available.jackets[2];
console.log(wish_user3);
console.log(jacket_size_customer3);
if (wish_user3&jacket_size_customer3 === wish_user3&jacket_size_customer3 ) {
	console.log ('nous avons cela en stock !')
}
else {
	console.log("désolé, nous n'avons pas cela en stock !")
}
//le magasin doit faire face aux mesures dites de sécurité pour faire face au Coronavirus, il faut donc que nous commandons du gel hydroalcoolique pour que les clients puisse se désinfecter à l'enrrée et à la sortie du shop.
// Après des études, nous avons quantifié le besoin de 50 litre de gel par mois.
const gel_per_month = 50;
const gel_per_weeks = 12;
const gel_per_days = 2;
console.log('Pour lutter contre le Covid, nous avons mis en place du gel hydralcolique. Les quantités mensuels sont de ' + gel_per_month + ' litre par mois')

// si la quantité de gel dépasse les 40 litres, alors un message indiquera une notification de réapprovisionnement.
if (gel_per_month> 50) {
	console.log("Attention, les quantités de gel hydroalcoolique sont faibles, veuillez vous en faire une nouvelle commande.")
}
else{
	console.log("Stock de gel hydroalcoolique bon, il n'est pas necessaire de se réapprovisionner pour le moment.")
}
//Maintenant on va parlé argent, on définit le prix des vêtements déclarés auparavant :

const jackets_price = 39;
const jeans_price = 29;
const clothes_price = [jackets_price , jeans_price];
console.log(clothes_price);

console.log("le prix d'un jean de n'importe quelle marque est de " + jackets_price + " euros. Le prix d'une veste de n'importe quelle marque est de " + jeans_price + " euros.");