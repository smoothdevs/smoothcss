# Contributing Guidelines

## Tech Stack

The App is built using React.js, Next.js and TypeScript.

## Folder Structure

| folder     | content                                     |
| ---------- | ------------------------------------------- |
| blocks     | contains the various components and presets |
| components | the react components the app uses           |
| configs    | meta info and theme config for the app      |
| css        | nprogress css file                          |
| mixins     | contains the styled-components mixin        |
| pages      | the next.js pages are situated here         |
| public     | all public assets are stored here           |
| stores     | contains the unstated-next store            |
| utils      | helpers functions                           |

## How to Add a New Block/Preset

### Adding a New Component

Step 1. modify the `BlocksSet` enum in `blocks/types.ts` file, adding the component.

Step 2. create a directory with the component name

Step 3. add an `index.ts` file in the directory created in step 2.

Step 4. add a preset in the directory, you can also copy paste the content from any other component

Step 5. export the component with presets and add it to the `blocks/index.ts` file also, and you are good to go

### Adding a Preset

Step 1. If the preset you are trying on add doesn't exist in the `PresetSet` in `blocks/types.ts` file, add it there

Step 2. Create a `[preset].ts` file in the respective component directory, replacing `[preset]` with the preset name

Step 3. Export the preset from the `index.ts` file
