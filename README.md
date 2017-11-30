# reml
RemL stands for 'React Eventually Made with Less'. It is a Markup language for generating React source code.

It's actually just a helper tool for writing less code to do the same function. You write some syntax like:


```javascript
[component App]
```

which transforms to

```javascript
export default const App = () => {
  return null;
}
```

That's the idea.

So far RemL can create this:

```javascript

import React from 'react';
import ReactDOM from 'react-dom';
import OtherComponent from './other-component';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return null;
  }
 }
```


 by typing:
 
 ```javascript
 [React] [DOM] [import OtherComponent other-component] [component App]
 ```
That being said, the project itself is simple. My intentions for it are not. I'd like to make it in a way that other languages and frameworks can benefit from it.

Here's a quick and dirty rundown of syntax in RemL.

So everything within [] is a command. RemL commands can be grouped inline or on multi lines, but insure that each command is separated by at least a space - else the code generated will return undefined.

Within the [], there are a series of arguments. First is the command type, such as import, export, component, React, and DOM. Next is the reference/class/component name. Then, a file path. At this time it is not necessary to include quotes around the path. So './other-component' can just be ./other-component or other-component (if it is an import like React).
 
