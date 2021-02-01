# React Calculator

A simple calculator built with React.


[Check the calculator working in the browser](https://douglasdemoura.github.io/calculadora-react/).

## Usage

You can use your keyboard to interact with the calculator:

- Use <kbd>C</kbd>, <kbd>ESC</kbd> or <kbd>Delete</kbd> to clear the display;
- Use number keys, parenthesis and <kbd>.</kbd> to input data.

## The solution

The starting point for this calculator was a [workshop of programming languages](https://www.youtube.com/watch?v=h5aF9lyHe5Q) hosted by [Luciano Ramalho](https://ramalho.org) at [Garoa Hacker Clube](https://garoa.net.br) (way far from [my last attempt](https://github.com/DouglasdeMoura/javascript-calculator)). After watching the presentation, I've tried, unsucessfully, to read [John McCarthy's paper](http://www-formal.stanford.edu/jmc/recursive.pdf) on which [this algorithm](https://github.com/DouglasdeMoura/calculadora-react/blob/main/src/components/Calculadora/utils/evaluate.ts) is based on (if you want to dive in, [this article](http://www.paulgraham.com/rootsoflisp.html) by Paul Graham is a more accessible introduction to McCarthy's work).

After implementing the [evaluate function](https://github.com/DouglasdeMoura/calculadora-react/blob/main/src/components/Calculadora/utils/evaluate.ts), I've implemented [tokenizer](https://github.com/DouglasdeMoura/calculadora-react/blob/main/src/components/Calculadora/utils/tokenizer.ts), [operators](https://github.com/DouglasdeMoura/calculadora-react/blob/main/src/components/Calculadora/utils/operadores.ts) and an [infix-to-prefix function](https://github.com/DouglasdeMoura/calculadora-react/blob/main/src/components/Calculadora/utils/infixToPrefix.ts) (I'm not happy with this last one, therefore, it must change in the future). For the rest, is a React application started with [CRA](https://create-react-app.dev/).

## TODO

- Use <kbd>←</kbd> or <kbd>↑</kbd> to go backwards in the input history;
- Use <kbd>→</kbd> or <kbd>↓</kbd> to go forward in the input history;

## Contribution

Feel free to contribute with the solution and give me tips and counseling to make it better :)

## Author

[Douglas Moura](http://douglasmoura.dev)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
