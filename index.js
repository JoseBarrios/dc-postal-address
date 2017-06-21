'use strict'

const Thing = require('@josebarrios/thing');
const Intangible = require('@josebarrios/intangible');
const StructuredValue = require('@josebarrios/structured-value');
const ContactPoint = require('@josebarrios/contact-point');
const Multiple = require('aggregation/es6');
const EMPTY = '';

class PostalAddress extends Multiple(Thing, Intangible, StructuredValue, ContactPoint) {

  constructor(model){
    model = model || {};
    super(model);

    this.xxx = model.xxx;

  }

  get xxx(){ return this.computed.xxx; }
  set xxx(value){
    if(Thing.isEmpty(value)){ this.computed.xxx = EMPTY}
    else if(Thing.isString(value)){ this.computed.xxx = value }
    else if(Thing.isObject(value)){ this.computed.xxx = value }
    else if(Thing.isArray(value)){ this.computed.xxx = value }
    else { Thing.logError(this.constructor.name+': xxx must be a string, object, or array', 'type') }
  }

}

module.exports = PostalAddress;
