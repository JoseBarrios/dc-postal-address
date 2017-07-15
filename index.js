'use strict'

const ContactPoint = require('@josebarrios/contact-point');

const EMPTY = '';
const TYPE = 'PostalAddress'

class PostalAddress extends ContactPoint {

  static get type(){ return TYPE; }

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

  get type(){ return TYPE; }
  set type(value) {}

  get addressCountry(){ return this.computed.addressCountry; }
  set addressCountry(value){
    if(ContactPoint.isEmpty(value)){ this.computed.addressCountry = EMPTY}
    else if(ContactPoint.isString(value)){ this.computed.addressCountry = value }
    else if(ContactPoint.isObject(value)){ this.computed.addressCountry = value }
    else { ContactPoint.logError(this.constructor.name+': addressCountry must be a string, or object', 'type') }
  }
  get addressLocality(){ return this.computed.addressLocality; }
  set addressLocality(value){
    if(ContactPoint.isEmpty(value)){ this.computed.addressLocality = EMPTY}
    else if(ContactPoint.isString(value)){ this.computed.addressLocality = value }
    else { ContactPoint.logError(this.constructor.name+': addressLocality must be a string', 'type') }
  }
  get addressRegion(){ return this.computed.addressRegion; }
  set addressRegion(value){
    if(ContactPoint.isEmpty(value)){ this.computed.addressRegion = EMPTY}
    else if(ContactPoint.isString(value)){ this.computed.addressRegion = value }
    else { ContactPoint.logError(this.constructor.name+': addressRegion must be a string', 'type') }
  }
  get postOfficeBoxNumber(){ return this.computed.postOfficeBoxNumber; }
  set postOfficeBoxNumber(value){
    if(ContactPoint.isEmpty(value)){ this.computed.postOfficeBoxNumber = EMPTY}
    else if(ContactPoint.isString(value)){ this.computed.postOfficeBoxNumber = value }
    else { ContactPoint.logError(this.constructor.name+': postPOfficeBoxNumber must be a string', 'type') }
  }
  get postalCode(){ return this.computed.postalCode; }
  set postalCode(value){
    if(ContactPoint.isEmpty(value)){ this.computed.postalCode = EMPTY}
    else if(ContactPoint.isString(value)){ this.computed.postalCode = value }
    else { ContactPoint.logError(this.constructor.name+': postalCode must be a string', 'type') }
  }
  get streetAddress(){ return this.computed.streetAddress; }
  set streetAddress(value){
    if(ContactPoint.isEmpty(value)){ this.computed.streetAddress = EMPTY}
    else if(ContactPoint.isString(value)){ this.computed.streetAddress = value }
    else { ContactPoint.logError(this.constructor.name+': streetAddresstreetAddress must be a string', 'type') }
  }


  formatted(type='canada'){
    type = type.toUpperCase();
    var format = '';
    switch(type){
      case 'CANADA':
        format = `${this.streetAddress}.
        ${this.addressLocality}, ${this.addressRegion} ${this.postalCode}
        ${this.addressCountry}`
        break;
      default:
        console.error('NO FORMAT FOUND');
    }
    return format;
  }
}

module.exports = PostalAddress;
