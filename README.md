Steps to deploy in gh-pages

git clone https://github.com/Qwinix/gopherconindia.github.io.git
git pull origin master
git checkout gh-pages
git status
git fetch
git merge master

add below line in _config.yml
github_project_name: /gopherconindia.github.io
(add this line only if this is not present in _config.yml in gh-pages)

git add .
git commit -m “adding line in config.yml”
git status
git push origin gh-pages
(latest changes will be auto deployed to gh-pages. check the changes in below link)

http://qwinix.github.io/gopherconindia.github.io/

