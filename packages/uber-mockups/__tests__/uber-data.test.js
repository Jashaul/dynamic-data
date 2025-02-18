'use strict';

const {
  products,
  productDetails,
  priceEstimates,
  timeEstimates,
  userInfo,
  userHistory,
  savedPlaces,
  rideDetails,
  rideMapDetails,
  rideReceiptDetails
} = require('@dynamic-data/uber-mockups');

describe('@dynamic-data/uber-data', () => {
  it('check if products of type object', () => {
    expect(typeof products).toBe('object');
    expect(!Array.isArray(products)).toBeTruthy();
    expect(Object.keys(products).length).not.toBe(0);
  });
  it('check if productDetails of type object', () => {
    const val = productDetails();
    
    expect(typeof val).toBe('object');
    expect(!Array.isArray(val)).toBeTruthy();
    expect(Object.keys(val).length).not.toBe(0);
  });
  it('check if priceEstimates of type object', () => {
    expect(typeof priceEstimates).toBe('object');
    expect(!Array.isArray(priceEstimates)).toBeTruthy();
    expect(Object.keys(priceEstimates).length).not.toBe(0);
  });
  it('check if timeEstimates of type object', () => {
    expect(typeof timeEstimates).toBe('object');
    expect(!Array.isArray(timeEstimates)).toBeTruthy();
    expect(Object.keys(timeEstimates).length).not.toBe(0);
  });
  it('check if userInfo of type object', () => {
    expect(typeof userInfo).toBe('object');
    expect(!Array.isArray(userInfo)).toBeTruthy();
    expect(Object.keys(userInfo).length).not.toBe(0);
  });
  it('check if userHistory of type object', () => {
    expect(typeof userHistory).toBe('object');
    expect(!Array.isArray(userHistory)).toBeTruthy();
    expect(Object.keys(userHistory).length).not.toBe(0);
  });
  it('check if savedPlaces of type object', () => {
    expect(typeof savedPlaces).toBe('object');
    expect(!Array.isArray(savedPlaces)).toBeTruthy();
    expect(Object.keys(savedPlaces).length).not.toBe(0);
  });
  it('check if rideDetails of type object', () => {
    expect(typeof rideDetails).toBe('object');
    expect(!Array.isArray(rideDetails)).toBeTruthy();
    expect(Object.keys(rideDetails).length).not.toBe(0);
  });
  it('check if rideMapDetails of type object', () => {
    expect(typeof rideMapDetails).toBe('object');
    expect(!Array.isArray(rideMapDetails)).toBeTruthy();
    expect(Object.keys(rideMapDetails).length).not.toBe(0);
  });
  it('check if rideReceiptDetails of type object', () => {
    expect(typeof rideReceiptDetails).toBe('object');
    expect(!Array.isArray(rideReceiptDetails)).toBeTruthy();
    expect(Object.keys(rideReceiptDetails).length).not.toBe(0);
  });
});