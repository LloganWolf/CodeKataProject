# MES RECETTES
*1/ Informations générales*
Ce projet est un site internet communautaire permettant de gérer ses recettes de cuisine. Sur ce site, il est possible de :
   - créer des recettes de cuisine
   - modifier ses recettes de cuisine
   - supprimer ses recettes de cuisine

*2/ Informations sur le projet*
Le projet est composé de 2 parties :
   - Une API, faite en NodeJS, permet de gérer les informations et les routes du projet
   - Le frontend, fait en ReactJS, permet l'affichage des informations
   - Une base de données MySql pour le stockage des données

*3/ Installation du projet*
- Ouvrir une ligne de commande
- Se situer à l'endroit désiré :
```
cd path/de/mon/repertoire
```
- Verifier si NodeJS, NPM et CRA sont déja installés sur votre machine

[Si rien d'installé] :
   - Installer [NodeJS](https://nodejs.org/en/) (prendre la version LTS)
   - Installer NPM :
   ```
   npm install --global npm
   ```
   - Installer CRA :
   ```
   npm install --global create-react-app
   ```

[Si/Dès que tout est installé]:
   - Faire un clone du repository git :
   ```
   git clone https://github.com/LloganWolf/CodeKataProject.git
   ```
   - Récuperer le fichier "katacode.sql" dans le répertoire "backend/bdd"
   - Importer la base MySql et la rendre disponible 
   - Changer les crédentials de la base de données dans le fichier "config.json" qui se trouve dans le répertoire "backend/assets"
   - Se mettre sur le répertoire "backend" :
   ```
   cd backend
   ```
   - Installer les modules NodeJS nécessaire :
   ```
   npm install
   ```
   - Lancer le serveur NodeJS : 
   ```
   npm start
   ```
   - Se mettre sur le répertoire "frontend" : 
   ```
   cd ../frontend
   ```
   - Installer les modules ReactJS nécessaire : 
   ```
   npm install
   ```
   - Lancer l'application CRA : 
   ```
   yarn start
   ```

Bonne utilisation !

