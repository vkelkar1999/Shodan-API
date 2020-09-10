/*
  Copyright Jesús Rubio <jesusprubio@gmail.com>

  This code may only be used under the MIT license found at
  https://opensource.org/licenses/MIT.
*/

'use strict';

const test = require('ava');
const client = require('../../..');

test('should fail if "countries" parameter no present', async t => {
  await t.throwsAsync(
    async () => { await client.streams.countries() },
    { message: /Required parameter: countries/ }
  );
});

test('should fail if "key" parameter no present', async t => {
  await t.throwsAsync(
    async () => { await client.streams.countries('a') },
    { message: 'You must provide a valid API key' }
  );
});

test('should have into account the "timeout" option', async t => {
  await t.throwsAsync(
    async () => { await client.streams.countries('a', 'a', { timeout: 1 }) },
    { message: /got.get : Timeout awaiting/ }
  );
});
