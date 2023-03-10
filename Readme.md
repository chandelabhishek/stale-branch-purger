# This repo contains script for deleting stale branches from github

# CAUTION

Double check branches before deleting it. Verify that all the branches which are there in `stale-branches.txt` is not active branch.
Check if you are ignoring all the important branches like `develop`, `master`, `main` etc.

## prerequisites

1. Python3
2. Nodejs 16.4+

## Installing Dependencies

`npm i`

## Steps

### if you want to fetch all the stale branches and delete it

1. `python3 delete_stale.py -u <user-whose-token-is-being-used> -a <github-token> -r <owner>/<repository>` &nbsp;&nbsp;&nbsp;// fetch all the stale branches
2. `node delete_stale_branch.js` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// delete all the stale branches

### if you have a list of branches to delete

1. Create a file in the root folder and name it `stale-branches.txt`
2. Add all the branches you want to delete in the file `stale-branches.txt`. You need to add one branch per line.
3. `node delete_stale_branch.js`
