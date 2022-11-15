// tests main.pug


const main = require('../public/javascripts/main')

test('the availability', () => {
    expect(main.increaseCartCount());
  });