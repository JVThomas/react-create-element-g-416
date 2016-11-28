const title = React.createElement('h1', {}, 'My first React Code');
const paragraph = React.createElement('p', {}, 'My first paragraph in React');

const list =
  React.createElement('div', {},
    React.createElement('h1', {}, 'My favorite ice cream flavors'),
    React.createElement('ul', {},
      [
        React.createElement('li', { className: 'brown' }, 'Chocolate'),
        React.createElement('li', { className: 'white' }, 'Vanilla'),
        React.createElement('li', { className: 'yellow' }, 'Banana')
      ]
    ));

const container = React.createElement('div', {}, [title,paragraph, list]);

ReactDOM.render(container, document.getElementById('main'));
//ReactDOM.render(list, document.getElementById('main'));
