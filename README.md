# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup
- [webstorm](https://www.jetbrains.com/webstorm/)
- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Setup project
- `yarn i` to install all dependencies
- `yarn storybook` just run
- open [http://localhost:6006/](http://localhost:6006/)

## Flow to develop
- We use only develop to create branch from
- First pull all changes and create branch
- Preferred naming of branches
  - `feature/[feature-name]`
  - `hotfix/[fix-name]`
- Preferred commit message
  - `update([file[s]-name]): [message]` for example - `update(main.css, header.vue): change header to .header`
  - `fix([file[s]-name]): [message]`
  - `add([file[s]-name]): [message]`
- After you ready to push just `merge`(not `rebase`) develop to current branch 
- Fix merge conflicts if you have
- Next create pull request to develop (you can do squash when merging)
- After pull request is merged to develop you can see it in staging [-----]()
- Only after test staging you can create merge request from `develop` to `master`
- After merge to master patch version will up x.x.^x and you can use this version in package
