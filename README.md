# Migration code procedures
tu clones le repo que tu souhaites dupliquer, sur ton pc
tu supprimes le .git du repo
git init (initalise le nouveau repo git)
git add . && git commit -m "commit message" 
git remote add origin "repo-url"
git push -u origin main (ou autre branche existance) OU git push --set-upstream origin "ta branche actuelle"
# start commit after migration from ADEO DELL PC