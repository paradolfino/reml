module.exports = {
  REM_REACT: function() {
    return 'import React from "react";';
  },
  REM_DOM: function() {
    return 'import ReactDOM from "react-dom"';
  },
  REM_IMPORT: function(ref, path) {
    return `import ${ref} from "${path}";`;
  },
  REM_COMP: function(ref, options) {
    return `
    class ${ref} extends React.Component{
        constructor(props){
          super(props);
        }
        
        render() {
            return null;
        }
    }`;
  }
};
