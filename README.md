## Text Processor

<div style="display: flex;">
  <img src="https://cdn.worldvectorlogo.com/logos/react.svg" height="50" alt="React" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2000px-Sass_Logo_Color.svg.png" height="50" alt="Sass" />
</div>

#### Web application for processing sheet-like colections of data.

## Inspiration

Development of this app is a result of a need to quickly make reapetable changes to chunks of data being a part of a larger collection. Initially created in vanilla JavaScript - later rewritten entirely in React.js (with new design and features).

## Usage

The data inserted in `Input` gets cut into smaller phrases at the given `Divider`. Every phrase is modified seperately (supports adding characters to its start, end; removing from the start, end, middle - every single character or a set of characters; replacing characters; removing accents; etc.). Modified phrases are then put together using given `Connector` and displayed in `Output`.
The app supports *undo* and *redo* for the `Output`.

## Production

Live version available at: [text-processor.netlify.com](https://text-processor.netlify.com/)
