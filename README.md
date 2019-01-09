# lucky-numbers
> Just some number methods (lottery, random & between)

## install

```sh
npm install lucky-numbers --save
```
or

```sh
yarn add lucky-numbers
```

## usage
```js
import {lottery, random, between} from 'lucky-numbers';
// 7 numbers
// greatest number 99
lottery(7, 100) // [1, 99, 40, 70, 33, 55, 77]

// 7 numbers
// greatest number 9
lottery(7, 10) // [1, 9, 4, 7, 3, 5, 7]

// 5 numbers
// greatest number 5
lottery(5, 6) // [1, 5, 4, 0, 3]

// 5 numbers
// greatest number 9
lottery(5, 10) // [1, 9, 4, 7, 3]
```

## License

[MIT](LICENSE) © 2019 Glenn Vandeuren <vandeurenglenn@gmail.com>
