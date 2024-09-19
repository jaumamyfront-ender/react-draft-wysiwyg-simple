// import React, { useState } from "react";
// import { EditorState, convertToRaw } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import css from "./stylesModule/extendedArea.module.css";
// import { toolbarOptions } from "./settings";
// import draftToHtml from "draftjs-to-html";

// const ExtendedEditor: React.FC = () => {
//   const [editorState, setEditorState] = useState(EditorState.createEmpty());
//   //SET ALL TO STATE
//   const onEditorStateChange = (newState: EditorState) => {
//     setEditorState(newState);
//   };
//   //PREPARE DATA AND STRUCTURE AND SEND THIS TO SERVER
//   const getHtmlContent = () => {
//     const rawContentState = convertToRaw(editorState.getCurrentContent());
//     const htmlContent = draftToHtml(rawContentState);
//     console.log(htmlContent);
//     return htmlContent;
//   };

//   return (
//     <div className={css.preWrapper}>
//       <Editor
//         editorState={editorState}
//         wrapperClassName={css.wrapper}
//         toolbarClassName={css.wrapperToolbar}
//         editorClassName={css.wrapperEditor}
//         onEditorStateChange={onEditorStateChange}
//         onBlur={getHtmlContent}
//         toolbar={toolbarOptions}
//       />
//     </div>
//   );
// };

// export default ExtendedEditor;
