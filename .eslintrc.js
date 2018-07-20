module.exports = {
  "extends": "eslint:recommended",
  "plugins": ["react"],
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "jsx": true,
      "modules": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "rules": {
    "indent": [1, 2],
    "eqeqeq": [2, "always"],
    "no-plusplus": [2, {"allowForLoopAfterthoughts": true}],
    "comma-dangle": 2,
    "no-cond-assign": 2,
    "no-debugger": 2,
    "no-ex-assign": 2,
    "no-empty": 2,
    "no-empty-character-class": 2,
    "no-func-assign": 2,
    "no-unreachable": 2,
    "no-alert": 2,
    "curly": 2,
    
    "quotes": [1, "single"],
    "space-infix-ops": 1,
    "spaced-comment": [1, "always"],
    "no-trailing-spaces": 1,
    "no-underscore-dangle": 1,
    "no-lonely-if": 1,
    "key-spacing": [1, {"beforeColon": false, "afterColon": true}],
    "brace-style": 1,
    "no-console": 1,
    
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/jsx-no-undef": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/prop-types": 2,
    "react/react-in-jsx-scope": 2,
    "react/self-closing-comp": 2,
    "no-var": 2,
    
  }
  
};
