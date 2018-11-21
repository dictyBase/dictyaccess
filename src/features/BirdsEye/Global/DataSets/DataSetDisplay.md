```js
const BrowserRouter = require("react-router-dom").BrowserRouter

let match = {
  params: {
    dataset: "genes",
  },
}
;<BrowserRouter>
  <DataSetDisplay match={match} />
</BrowserRouter>
```
