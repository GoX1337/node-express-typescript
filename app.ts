import express from 'express';
import { Utils } from './utils';
import { Foo } from './foo';

const app = express();
const port = 3000;

const foo = new Foo("mdr");

app.get('/', (req, res) => {
  res.send(Utils.get());
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.log(foo.toString());
  return console.log(`server is listening on ${port}`);
});
