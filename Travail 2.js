<script>
var prixDeArticle = prompt("Nome le prix de votre artice") 
alert("Le prix est " + prixDeArticle + "$")
var nombreDeArticle = prompt("Done nous le nombre d'articles")
alert("Tu a choisi " + nombreDeArticle + " articles")
alert("le prix totale est " + calcul(prixDeArticle,nombreDeArticle) + "$")
 
function calcul(x,y) {
  return  (x*y)*1.13
}
</script>
