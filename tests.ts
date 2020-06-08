import * as tape from 'tape';

tape('all entry points parse', (test: tape.Test): void => {
  test.doesNotThrow((): void => require('./index'), 'index does not throw');
  test.end();
});
