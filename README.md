# Github instructions

## Basics

```
git init
git commit -m "commit here"
git branch -b "main"
git remote add origin "..@github.git"
git push -u origin main
```

## Pushing

```
git push <remote-name> <branch-name>
git push origin main
git push -f origin main
git push -u origin main
```

## Pulling
```
git pull <remote-name> <branch-name>
```

## Merging 
On local
```
git checkout <branch-name>
git merge <other-branch-name>
```

## Commits
Initially once indexed, the files are considered unstaged
```
git add .                   //for all
git add <file-name>         //for individual
git add <next-file-name>
```

Use commit to staged the files
```
git commit -m "<commit>"
```

After staging, all staged files will be able to be pushed to remote directories
```
git push origin main        //unstaged files are not pushed or touched while merging
```

Use Log/Status for checking the current condition of the working tree
```
git status
git log
git log --pretty=format:"%h %s" --graph
```