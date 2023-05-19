import { useCallback } from "react"; // Importing the useCallback hook from React
import Quill from "quill"; // Importing the Quill library
import "quill/dist/quill.snow.css"; // Importing the Quill Snow theme CSS
const TOOLBAR_OPTIONS = [
  // Definition of the toolbar options for the Quill editor
  [{ header: [1, 2, 3, 4, 5, 6, false] }], // Header options
  [{ font: [] }], // Font options
  [{ list: "ordered" }, { list: "bullet" }], // List options
  ["bold", "italic", "underline"], // Text formatting options
  [{ color: [] }, { background: [] }], // Color options
  [{ script: "sub" }, { script: "super" }], // Subscript and Superscript options
  [{ align: [] }], // Text alignment options
  ["image", "blockquote", "code-block"], // Additional options
  ["clean"], // Clean formatting option
];

export default function TextEditor() {
  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;

    wrapper.innerHTML = ""; // Clear the wrapper's content
    const editor = document.createElement("div"); // Create a div element for the Quill editor
    wrapper.append(editor); // Append the editor div to the wrapper
    const q = new Quill(editor, {
      theme: "snow", // Set the editor theme to "snow" (Quill Snow theme)
      modules: { toolbar: TOOLBAR_OPTIONS }, // Set the toolbar options for the editor
    });
  }, []);
  return <div className="container" ref={wrapperRef}></div>; // Render the container div with the ref for the wrapperRef callback
}
