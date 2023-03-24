## Contribution

For Merge Requests please use described convention:

| Type     | Description                                                      | Example branch name                | Example commit message              |
|----------|------------------------------------------------------------------|------------------------------------|-------------------------------------|
| feat     | a new feature                                                    | feat/add-theme-switch              | feat: add theme switch              |
| test     | adding missing tests                                             | test/add-renderer-tests            | test: add renderer test             |
| fix      | a bug fix                                                        | fix/player-validation              | fix: player validation              |
| refactor | code change that neither fixes a bug or introduces a new feature | refactor/optimize-player-rendering | refactor: optimize player rendering |
| chore    | changes to the build process or auxiliary tools                  | chore/update-ci                    | chore: update ci                    |

Commit messages should follow <https://www.conventionalcommits.org/> convention.
TL;DR: they should contain type and scope

### How to commit to master

1. Checkout to `master`
2. Update (pull) newest master version from remote repository
3. Create new branch from `master` (Use naming convention as above)
4. Commit your changes
5. Push changes to remote repository
6. Create pull request
7. Ask for code review
8. After getting pull request approval, merge it to master