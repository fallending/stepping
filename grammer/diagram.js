function Diagram() {

}

Diagram.data = [];
Diagram.currentDomain = {};
Diagram.lastType = {
  key: '',
  value: []
};

Diagram.TYPE = {
  CHILD: 'ADD',
};

Diagram.LEVEL = {
  'domain': 0,
  'aggregate': 1,
  'entity': 2,
  'model': 3,
  'event': 4,
  'command': 5,
};

Diagram.currentLevel = function (type) {
  return Diagram.LEVEL[type];
};

Diagram.isSubLevel = function (type1, type2) {
  return Diagram.LEVEL[type1] < Diagram.LEVEL[type2];
};

Diagram.store = function (actor, type, value) {
  let items = {};
  items[type + ''] = value;

  let subLevel = Diagram.isSubLevel(Diagram.lastType['key'], type);

  Diagram.lastType['key'] = type;
  Diagram.lastType['value'].push(items);

  Diagram.currentDomain[type + ''] = Diagram.lastType;
  return [actor, type, value];
};

Diagram.unescape = function (input) {
  return input;
};

Diagram.signal = function (input, $2) {
  return input;
};

Diagram.storeLastDomain = function () {
  if (Diagram.currentDomain.domain !== undefined) {
    this.data.push(Diagram.currentDomain);
  }
};

Diagram.createDomain = function (input) {
  this.storeLastDomain();

  let currentDomain = {
    domain: {
      key: input,
      aggregate: []
    }
  };

  Diagram.currentDomain = currentDomain;
};

Diagram.parse = function (input) {
  let parser = new esDsl.Parser();
  parser.yy = new Diagram();
  return parser.parse(input);
};

Diagram.getResult = function () {
  this.data.push(Diagram.currentDomain);
  return this.data;
};