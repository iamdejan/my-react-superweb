# My React Superweb

A dummy project for me to learn React.

List of expected features:
- calculator
- to-do list
- kilometer to mile converter
- BMI ideal weight
    - See https://bmisite.net/ideal-weight/168cm for reference.
- Password hasher
    - See https://www.lastpass.com/features/password-generator for reference.

## Development

### Prerequisites

1) Install Node and NPM.
    - My favorite method is to use [Node Version Manager](https://github.com/nvm-sh/nvm).
2) Install `rimraf`.
    - NPM: `npm i -g rimraf`
    - PNPM: `pnpm i -g rimraf`
3) Install `pnpm` with this command: `npm i -g pnpm`

### Pre-Commit Hook

We have to install `pre-commit`, as well as setting up the hook so that it can be executed by `git`.

1) Install `pre-commit`:
    - Homebrew: `brew install pre-commit`
    - PIP: `pip3 install pre-commit`
2) Ensure that the steps from the file `.pre-commit-config.yaml` are executed **before pushing** the code: `pre-commit install --hook-type pre-push`
    - You can change the hook type based on `pre-commit` documentation [here](https://pre-commit.com/#supported-git-hooks).

Why we don't use `husky`? Because, in my opinion, `pre-commit` is easy enough to setup compared to `husky`. All I need to do before pushing the code is to run some validation commands (linter, build, etc.). `pre-commit` makes it easy to automate those validation commands.

### Running The Program

`pnpm run dev`

This will run the website in port `3000`. You can change the port by editing `package.json`.
