'use strict'

const Thing = require('@josebarrios/thing');
const Intangible = require('@josebarrios/intangible');
const StructuredValue = require('@josebarrios/structured-value');
const ContactPoint = require('@josebarrios/contact-point');
const Multiple = require('aggregation/es6');
const EMPTY = '';
const TYPE = 'PostalAddress'

class PostalAddress extends Multiple(Thing, Intangible, StructuredValue, ContactPoint) {

  get static type(){ return TYPE; }

  constructor(model){
    model = model || {};
    super(model);

    this.addressCountry = model.addressCountry;
    this.addressLocality = model.addressLocality;
    this.addressRegion = model.addressRegion;
    this.postOfficeBoxNumber = model.postOfficeBoxNumber;
    this.postalCode = model.postalCode;
    this.streetAddress = model.streetAddress;
  }

  get type(){ return PostalAddress.type; }
  set type(value) {}

  get addressCountry(){ return this.computed.addressCountry; }
  set addressCountry(value){
    if(Thing.isEmpty(value)){ this.computed.addressCountry = EMPTY}
    else if(Thing.isString(value)){ this.computed.addressCountry = value }
    else if(Thing.isObject(value)){ this.computed.addressCountry = value }
    else { Thing.logError(this.constructor.name+': addressCountry must be a string, or object', 'type') }
  }
  get addressLocality(){ return this.computed.addressLocality; }
  set addressLocality(value){
    if(Thing.isEmpty(value)){ this.computed.addressLocality = EMPTY}
    else if(Thing.isString(value)){ this.computed.addressLocality = value }
    else { Thing.logError(this.constructor.name+': addressLocality must be a string', 'type') }
  }
  get addressRegion(){ return this.computed.addressRegion; }
  set addressRegion(value){
    if(Thing.isEmpty(value)){ this.computed.addressRegion = EMPTY}
    else if(Thing.isString(value)){ this.computed.addressRegion = value }
    else { Thing.logError(this.constructor.name+': addressRegion must be a string', 'type') }
  }
  get postOfficeBoxNumber(){ return this.computed.postOfficeBoxNumber; }
  set postOfficeBoxNumber(value){
    if(Thing.isEmpty(value)){ this.computed.postOfficeBoxNumber = EMPTY}
    else if(Thing.isString(value)){ this.computed.postOfficeBoxNumber = value }
    else { Thing.logError(this.constructor.name+': postPOfficeBoxNumber must be a string', 'type') }
  }
  get postalCode(){ return this.computed.postalCode; }
  set postalCode(value){
    if(Thing.isEmpty(value)){ this.computed.postalCode = EMPTY}
    else if(Thing.isString(value)){ this.computed.postalCode = value }
    else { Thing.logError(this.constructor.name+': postalCode must be a string', 'type') }
  }
  get streetAddress(){ return this.computed.streetAddress; }
  set streetAddress(value){
    if(Thing.isEmpty(value)){ this.computed.streetAddress = EMPTY}
    else if(Thing.isString(value)){ this.computed.streetAddress = value }
    else { Thing.logError(this.constructor.name+': streetAddresstreetAddress must be a string', 'type') }
  }
}

module.exports = PostalAddress;
