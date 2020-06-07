const colors = {
  char: 'rgb(189, 147, 249)',
  comment: '#999999',
  keyword: 'rgb(241, 250, 140)',
  primitive: 'rgb(80, 250, 123)',
  string: 'rgb(255, 184, 108)',
  variable: '#d7deea',
  boolean: '#ff8b50',
  punctuation: '#5FB3B3',
  tag: '#fc929e',
  function: '#79b6f2',
  className: '#FAC863',
  method: '#6699CC',
  operator: '#fc929e',
};
const theme = {
  plain: {
    backgroundColor: '#282c34',
    color: '#ffffff',
  },
  styles: [
    {
      types: ['attr-name'],
      style: {
        color: colors.keyword,
      },
    },
    {
      types: ['attr-value'],
      style: {
        color: colors.string,
      },
    },
    {
      types: ['comment', 'block-comment', 'prolog', 'doctype', 'cdata', 'shebang'],
      style: {
        color: colors.comment,
      },
    },
    {
      types: ['property', 'number', 'function-name', 'constant', 'symbol', 'deleted'],
      style: {
        color: colors.primitive,
      },
    },
    {
      types: ['boolean'],
      style: {
        color: colors.boolean,
      },
    },
    {
      types: ['tag'],
      style: {
        color: colors.tag,
      },
    },
    {
      types: ['string'],
      style: {
        color: colors.string,
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: colors.string,
      },
    },
    {
      types: ['selector', 'char', 'builtin', 'inserted'],
      style: {
        color: colors.char,
      },
    },
    {
      types: ['function'],
      style: {
        color: colors.function,
      },
    },
    {
      types: ['operator', 'entity', 'url', 'variable'],
      style: {
        color: colors.variable,
      },
    },
    {
      types: ['keyword'],
      style: {
        color: colors.keyword,
      },
    },
    {
      types: ['at-rule', 'class-name'],
      style: {
        color: colors.className,
      },
    },
  ],
};

export default theme;
