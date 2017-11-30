# reml
RemL stands for 'React Eventually Made with Less'. It is a Markup language for generating React source code.

It's actually just a transpilation tool. You write some syntax like:

[component App is dumb]

which compiles to

export default const App = () => {
  return null;
}

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
 Neat, right? I hate typing - that's why I made RemL.
 
