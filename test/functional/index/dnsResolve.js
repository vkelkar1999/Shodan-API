/*
  Copyright Jesús Rubio <jesusprubio@gmail.com>

  This code may only be used under the MIT license found at
  https://opensource.org/licenses/MIT.
*/

'use strict';

const test = require('ava');
const net = require('net');
const client = require('../../..');
const helpers = require('../../helpers');

test('should fail if "hostname" parameter no present', async t => {
  await t.throwsAsync(
    async () => { await client.dnsResolve() },
    { message: /Required parameter: hostnames/ }
  );
});

test('should fail if "key" parameter no present', async t => {
  await t.throwsAsync(
    async () => { await client.dnsResolve('ibm.com,google.com') },
    { message: 'You must provide a valid API key' }
  );
});

test('should fail if the API key is not valid', async t => {
  await t.throwsAsync(
    async () => { await client.dnsResolve('ibm.com,google.com', 'a') },
    { message: /got.get : Response code 401/ }
  );
});

test('should have into account the "timeout" option', async t => {
  await t.throwsAsync(
    async () => { await client.dnsResolve('ibm.com,google.com', 'a', { timeout: 1 }) },
    { message: /got.get : Timeout awaiting/ }
  );
});

test('should return correct result for valid hostnames', async t => {
  await helpers.sleep();

  const res = await client.dnsResolve('ibm.com,google.com', process.env.API_KEY);

  t.deepEqual(Object.keys(res), ['google.com', 'ibm.com']);
  t.truthy(net.isIP(res['ibm.com']));
});
