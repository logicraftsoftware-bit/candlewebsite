import test from 'node:test';
import assert from 'node:assert/strict';
import { sanitizeCart, cartTotal } from '../src/cart.js';
const catalog=[{id:'amber',price:899},{id:'rose',price:849}];
test('rejects malformed persisted cart data and unknown products',()=>{
 assert.deepEqual(sanitizeCart(null,catalog),[]);
 assert.deepEqual(sanitizeCart([{id:'missing',quantity:2},{id:'amber',quantity:-1},{id:'rose',quantity:2.5},null],catalog),[]);
});
test('merges duplicate products and enforces the quantity limit',()=>{
 assert.deepEqual(sanitizeCart([{id:'amber',quantity:18},{id:'amber',quantity:8},{id:'rose',quantity:2}],catalog),[{id:'amber',quantity:20},{id:'rose',quantity:2}]);
});
test('calculates totals using catalog prices rather than browser-provided prices',()=>{
 assert.equal(cartTotal([{id:'amber',quantity:2,price:1},{id:'rose',quantity:1}],catalog),2647);
 assert.equal(cartTotal([],catalog),0);
});
