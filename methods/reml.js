require('./commands');

const reml = {
  init: function(input) {
    let script = input.split("\\s+(?![^\\[]*\\])");
    script = script.join("").split("\n");
    script.forEach(i => {
      reml.each(i);
    });
  },
  each: function(input) {
    let x = input.indexOf("[");
    let y = input.indexOf("]");
    let script = input.substring(x + 1, y);
    script = script.split(" ");
    read(script[0], script[1], script[2], script[3]);
  },
  read: function(command, ref, path, options) {
    let methods = {
            REACT: REM_REACT(),
            DOM: REM_DOM(),
            IMPORT: REM_IMPORT(ref, path),
            COMPONENT: REM_COMP(ref, options)
    };
    return methods[command.toUpperCase()];
  }
};

export default reml;
