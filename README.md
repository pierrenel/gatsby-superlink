# gatsby-superlink

Wraps `gatsby-link` and `a href` and switches between then based on the url in the `to` prop.

## Install

`npm install --save gatsby-plugin-superlink`

## How to use

```javascript
// in your component
import Superlink from 'gatsby-plugin-superlink';

// uses gatsby link, by magic
<p><Superlink to='/about-us'>foo</Superlink></p>

// uses a href
<p><Superlink to='https://pierre.io'>bar</Superlink></p>
```
