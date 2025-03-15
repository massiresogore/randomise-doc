# 🎲 **Bien randomiser en JavaScript : une erreur que j’ai corrigée !**  

## Test en ligne !
[https://www.randomise-emcer](https://massiresogore.github.io/randomise-emcer/)

En travaillant sur un projet, je voulais simuler un **lancer de dé** 🎲 en JavaScript. Au départ, j’utilisais cette fonction :  

```javascript
const randomDice = (): number => {
  return 1 + Math.floor(Math.random() * Math.floor(Math.random() * 6));
};
```

🔴 **Problème** : Cette approche me donnait **trop souvent des valeurs basses** (1, 2, 3). Cela faussait complètement la répartition aléatoire et rendait mon tirage biaisé.  

✅ **Solution** : J’ai corrigé mon code en simplifiant l’opération :  

```javascript
const randomDice = () => {
  return 1 + Math.floor(Math.random() * 6);
};
```

Cette fois, la distribution des valeurs est **équitable**, et chaque nombre entre 1 et 6 a la même probabilité d’apparaître.  

📌 **Leçon** : Ne jamais imbriquer plusieurs `Math.random()` sans raison ! Cela peut créer des distributions inattendues.  
