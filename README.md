# About the bot

# Local setup
## What is required
1. Node.js version >= 20 (for Windows NVM is recommended)
2. Yarn

## How to
1. Copy `.env.example` into `.env` and write right data into it. More info about ids here: https://discordjs.guide/creating-your-bot/command-deployment.html#command-registration

# Tests

# How to add new commands
### 👉🏻 1. Write a new command in `/commands and export it
#### Export the command as an object following THIS PATTERN (all fields are required):
```
export const yourCommand = {
  data,
  name,
  execute,
};
```

- `name` <string>: the same as a filename, it's the official command's name
- `data` <SlashCommandBuilder>: built command based on builder from `discord.js`
- `execute` <async function>: command's action

#### 📖 Example of a `data` object:
```
const data = new SlashCommandBuilder()
  .setName(name)
  .setDescription(TEXTS.ROLL_DESCRIPTION)
  .addStringOption((option) =>
    option.setName('dice-type').setDescription(TEXTS.ROLL_PARAM_DESCRIPTION).setRequired(true),
  );
```

#### 📖 Example of an `execute` function:
```
const execute = async (interaction) => {
  // your code goes here
  // interaction is an argument from Discord to handle user input, response itp.
};
```
... or with "classic" function style, but this one above is preferred to keep the code readable
```
async function execute (interaction) => {
  // your code goes here
  // interaction is an argument from Discord to handle user input, response itp.
};
```
#### ✨ Do you wish to use some texts?
If yes, write it to the `/data/texts.js` file as a new field and then import `TEXTS` and use your new text. Please keep new names organized.

#### ✨ Do you wish to use some errors?
If yes, write it's text to the `/data/errorTexts.js` file as a new field and then import `ERROR_TEXTS` and use your new text. Please keep new names organized.

### 👉🏻 2. Import your new command to the `/commands/index.js`
#### Your new command goes to the `allCommandsMap` object.
```
export const allCommandsMap = new Map([
  [rollCommand.name, rollCommand],
  [rollsCommand.name, rollsCommand],
  [your-command-name, your-command]
]);
```
### 👉🏻 3. Run `yarn deploy:commands` to deploy new commands

# Deploy the full app
TODO

# Available scripts
- `yarn dev`
- `yarn `
