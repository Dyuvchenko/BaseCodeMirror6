import {basicSetup, EditorView} from "codemirror";
import {EditorState} from "@codemirror/state";
import {javascript} from "@codemirror/lang-javascript";

const state = EditorState.create({
    doc:
        '// Пример кода на JS в CodeMirror 6 \n' +
        'let x = 5; \n' +
        'return x; \n',
    extensions: [
        basicSetup,
        javascript()
    ],
});

const view = new EditorView({
    state: state,
    parent: document.getElementById("targetCodeMirrorDiv")
});

global.CodeMirror = view;