module.exports = {
  "extends": "airbnb-base",
  rules://modified linter rules to stay sane
  {
    'brace-style': ["error", "allman"],//changes one true brace style to allman
    "arrow-body-style": ["error", "always"]
  },
  "plugins": [
    "import"
  ]
};
