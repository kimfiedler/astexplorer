import defaultParserInterface from '../utils/defaultParserInterface';
import pkg from 'tak-lang/package.json';

const ID = 'tak-lang';

export default {
  ...defaultParserInterface,

  id: ID,
  displayName: ID,
  version: pkg.version,
  homepage: pkg.homepage,
  locationProps: new Set(['start', 'end']),

  loadParser(callback) {
    require(['tak-lang'], callback);
  },

  parse(parser, code) {
    return parser.tryParse(code);
  },

  getNodeName(node) {
    return node.type;
  },

  nodeToRange(node) {
    if (typeof node.start !== 'undefined' && typeof node.end !== 'undefined') {
      return [node.start.offset, node.end.offset];
    }
  },
};
