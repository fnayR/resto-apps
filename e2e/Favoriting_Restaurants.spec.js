const assert = require('assert');

Feature('Favoriting Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing no favorited restaurant', ({ I }) => {
  I.seeElement('#query');
  I.see('No restaurant to show', '#resto-item__not__found');
});

Scenario('favoriting one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('#resto');

  const firstResto = locate('#resto-title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.waitForElement('#favoriteButton');
  I.click('#favoriteButton');
  I.amOnPage('/#/favorite');

  I.seeElement('#resto');
  const favoritedRestoTitle = await I.grabTextFrom('#resto-title');

  assert.strictEqual(firstRestoTitle.trim(), favoritedRestoTitle.trim());
});

Scenario('unfavoriting one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('#resto');

  const firstResto = locate('#resto-title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.waitForElement('#favoriteButton');
  I.click('#favoriteButton');
  I.amOnPage('/#/favorite');

  I.click(firstResto);
  I.waitForElement('#favoriteButton');
  I.click('#favoriteButton');
  I.amOnPage('/#/favorite');

  I.see('No restaurant to show', '#resto-item__not__found');
});