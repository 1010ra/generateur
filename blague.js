 const tab = [
    "J'ai une blague sur les magasins. ...",
    "Le gouvernement de Belgique vient de décider qu’au 1er janvier de cette année, sur tout le territoire, les automobiles devront rouler à gauche, non plus à droite.",
    "Si l’expérience est concluante, à partir du 1er février la mesure sera adoptée pour les camions…",
    "Pierre-Louis, pourquoi n'irais-tu pas sur le balcon ? Comme ça, tu nous raconteras tout ce qui se passe en bas.",
    " Un chameau discute avec un dromadaire : « Comment ça va ? » « Bien, je bosse, et toi ? » « Je bosse, je bosse. »"
 ];
 function newQuote() {
    let randomNumbre = Math.floor(Math.random() * (tab.length));
    const quoteVar = document.getElementById('quoteDisplay').innerHTML = tab[randomNumbre];
    return quoteVar;
   
 }

 


