# React Draft Wysiwyg Simple
# this is modyfied version of original library react draft wysywig.(Author Jota Puri),author of modification:yaumamyfront-ender==>
# how it work on practice film --> https://drive.google.com/file/d/1yPb3fAGu9GFdcP-PDR_MEU6G3U-GICfw/view?usp=sharing
## new Features
- 1.added function when you can change icon in option(buttons in toolbar)and they work like button on/off
- how to use this feature?
- 1.1just type switchToSimpleToolbar in ExtendedEditiorTag and switch to true
   ********
- 2. added an example of how to extract data if you just need to send it and display it on a page, as well as accept data that has already been sent and then be able to edit it
- how to use this feature?
- 2.2 just find folder exampleData in library and copy code from file getData
 # fixes:
  - fix style inheritance when click enter in input editor [h1,h2,text alighment]
  - fix toolbar ealy click
  - fix scroll in input


# this is original description of original project below down==>

# React Draft Wysiwyg

A Wysiwyg editor built using ReactJS and DraftJS libraries.
[Demo Page](https://jpuri.github.io/react-draft-wysiwyg)

[![Build Status](https://travis-ci.org/jpuri/react-draft-wysiwyg.svg?branch=master)](https://travis-ci.org/jpuri/react-draft-wysiwyg)

![](http://i.imgur.com/tU7kJ6i.gif)

## Features

- Configurable toolbar with option to add/remove controls.
- Option to change the order of the controls in the toolbar.
- Option to add custom controls to the toolbar.
- Option to change styles and icons in the toolbar.
- Option to show toolbar only when editor is focused.
- Support for inline styles: Bold, Italic, Underline, StrikeThrough, Code, Subscript, Superscript.
- Support for block types: Paragraph, H1 - H6, Blockquote, Code.
- Support for setting font-size and font-family.
- Support for ordered / unordered lists and indenting.
- Support for text-alignment.
- Support for coloring text or background.
- Support for adding / editing links
- Choice of more than 150 emojis.
- Support for mentions.
- Support for hashtags.
- Support for adding / uploading images.
- Support for aligning images, setting height, width.
- Support for Embedded links, flexibility to set height and width.
- Option provided to remove added styling.
- Option of undo and redo.
- Configurable behavior for RTL and Spellcheck.
- Support for placeholder.
- Support for WAI-ARIA Support attributes
- Using editor as controlled or un-controlled React component.
- Support to convert Editor Content to HTML, JSON, Markdown.
- Support to convert the HTML generated by the editor back to editor content.
- Support for internationalization.

## Installing

The package can be installed from npm `react-draft-wysiwyg`

```
$ npm install --save react-draft-wysiwyg draft-js
```

## Getting started

Editor can be used as simple React Component:

```js
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
<Editor
  editorState={editorState}
  toolbarClassName="toolbarClassName"
  wrapperClassName="wrapperClassName"
  editorClassName="editorClassName"
  onEditorStateChange={this.onEditorStateChange}
/>;
```

## Docs

For more documentation check [here](https://jpuri.github.io/react-draft-wysiwyg/#/docs?_k=jjqinp).

## Questions Discussions

For discussions join public channel #rd_wysiwyg in [DraftJS Slack Organization](https://draftjs.herokuapp.com/).

## Fund

You can fund project at [Patreon](https://www.patreon.com/jyotipuri).

## Thanks

Original motivation and sponsorship for this work came from [iPaoo](http://www.ipaoo.com/). I am thankful to them for allowing the Editor to be open-sourced.

## License

MIT.
