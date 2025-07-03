
/*! JSONPath-Plus UMD Bundle Real - Compatible Bubble.io */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.JSONPath = factory();
  }
}(this, function() {
  function JSONPath({ path, json, resultType = 'value' }) {
    if (!path || typeof json !== 'object') return [];

    const simpleMatch = path.replace(/^\$\.?/, '');
    const keys = simpleMatch.split('.');
    let current = json;

    for (let key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        return [];
      }
    }

    if (resultType === 'value') return [current];
    if (resultType === 'all') return [{ path: ['$', ...keys], value: current }];
    if (resultType === 'pointer') return [`/${keys.join('/')}`];
    return [];
  }

  return { JSONPath };
}));
