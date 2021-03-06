var color = require(".."),
	assert = require("assert");

assert.deepEqual(color("blue").toRgbaArray(), [0, 0, 255, 1]);
assert.deepEqual(color("blue").toHslaArray(), [240, 100, 50, 1]);
assert.deepEqual(color("blue").toHexString(), '#0000ff');
assert.deepEqual(color("rgb(255, 255, 255)").toRgbaArray(), [255, 255, 255, 1]);
assert.deepEqual(color("rgb(100%, 100%, 100%)").toRgbaArray(), [255, 255, 255, 1]);
assert.deepEqual(color("rgb(100%, 100%, 100%)").toHslaArray(), [0, 0, 100, 1]);
assert.deepEqual(color("rgba(100%, 100%, 100%, .5)").toHexString(), '#ffffff7f');
assert.deepEqual(color("rgba(255, 255, 255, .5)").toRgbaArray(), [255, 255, 255, .5]);
assert.deepEqual(color("rgba(255, 255, 255, .5)").toHslaArray(), [0, 0, 100, .5]);
assert.equal(color().fromRgb([255, 255, 255]).toRgbString(), 'rgb(255, 255, 255)');
assert.equal(color().fromRgba([255, 255, 255, 1]).toRgbString(), 'rgb(255, 255, 255)');
assert.equal(color().fromRgba([255, 255, 255, .5]).toRgbString(), 'rgba(255, 255, 255, 0.5)');
assert.equal(color().fromRgba([255, 255, 255, 1]).toHslString(), 'hsl(0, 0%, 100%)');
assert.equal(color().fromRgba([255, 255, 255, .5]).toHslString(), 'hsla(0, 0%, 100%, 0.5)');
assert.equal(color().fromRgba([255, 255, 255, 1]).toHexString(), '#ffffff');
assert.equal(color().fromRgba([255, 255, 255, .5]).toHexString(), '#ffffff7f');
assert.deepEqual(color("hsl(0, 0%, 100%)").toHslaArray(), [0, 0, 100, 1]);
assert.deepEqual(color("hsl(0, 0%, 100%)").toRgbaArray(), [255, 255, 255, 1]);
assert.deepEqual(color("hsla(0, 0%, 100%, .5)").toHslaArray(), [0, 0, 100, .5]);
assert.deepEqual(color("hsla(0, 0%, 100%, .5)").toRgbaArray(), [255, 255, 255, .5]);
assert.equal(color().fromHsl([0, 0, 100]).toHslString(), 'hsl(0, 0%, 100%)');
assert.equal(color().fromHsla([0, 0, 100, 1]).toRgbString(), 'rgb(255, 255, 255)');
assert.equal(color().fromHsla([0, 0, 100, .5]).toRgbString(), 'rgba(255, 255, 255, 0.5)');
assert.equal(color().fromHsla([0, 0, 100, 1]).toHslString(), 'hsl(0, 0%, 100%)');
assert.equal(color().fromHsla([0, 0, 100, .5]).toHslString(), 'hsla(0, 0%, 100%, 0.5)');
assert.equal(color().fromHsla([0, 0, 100, 1]).toHexString(), '#ffffff');
assert.equal(color().fromHsla([0, 0, 100, .5]).toHexString(), '#ffffff7f');
assert.deepEqual(color("#ffffff").toRgbaArray(), [255, 255, 255, 1]);
assert.deepEqual(color("#ffffff").toHslaArray(), [0, 0, 100, 1]);
assert.deepEqual(color("#ffffffff").toRgbaArray(), [255, 255, 255, 1]);
assert.deepEqual(color("#ffffffff").toHslaArray(), [0, 0, 100, 1]);
assert.deepEqual(color("#fff").toRgbaArray(), [255, 255, 255, 1]);
assert.deepEqual(color("#fff").toHslaArray(), [0, 0, 100, 1]);
assert.deepEqual(color("#ffff").toRgbaArray(), [255, 255, 255, 1]);
assert.deepEqual(color("#ffff").toHslaArray(), [0, 0, 100, 1]);
assert.deepEqual(color("#ffffff7f").toRgbaArray(), [255, 255, 255, .5]);
assert.deepEqual(color("#ffffff7f").toHslaArray(), [0, 0, 100, .5]);
assert.deepEqual(color("#ffffff").toHexString(), '#ffffff');
assert.equal(color("#ffffff").toRgbString(), 'rgb(255, 255, 255)');
assert.equal(color("#ffffff7f").toRgbString(), 'rgba(255, 255, 255, 0.5)');
assert.equal(color("#ffffff").toHslString(), 'hsl(0, 0%, 100%)');
assert.equal(color("#ffffff7f").toHslString(), 'hsla(0, 0%, 100%, 0.5)');
assert.equal(color("#ffffff").toHexString(), '#ffffff');
assert.equal(color("#ffffff7f").toHexString(), '#ffffff7f');
