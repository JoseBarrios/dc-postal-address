'use strict'

const ContactPointDataController = require('dc-contact-point');
const TYPE = 'PostalAddressDataController'

class PostalAddressDataController extends ContactPointDataController {

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

	get addressCountry(){ return this.model.addressCountry; }
	set addressCountry(value){
		if(ContactPointDataController.isEmpty(value)){}
		else if(ContactPointDataController.isString(value)){ this.model.addressCountry = value }
		else if(ContactPointDataController.isObject(value)){ this.model.addressCountry = value }
		else { ContactPointDataController.logError(this.constructor.name+': addressCountry must be a string, or object', 'type') }
	}
	get addressLocality(){ return this.model.addressLocality; }
	set addressLocality(value){
		if(ContactPointDataController.isEmpty(value)){}
		else if(ContactPointDataController.isString(value)){ this.model.addressLocality = value }
		else { ContactPointDataController.logError(this.constructor.name+': addressLocality must be a string', 'type') }
	}
	get addressRegion(){ return this.model.addressRegion; }
	set addressRegion(value){
		if(ContactPointDataController.isEmpty(value)){}
		else if(ContactPointDataController.isString(value)){ this.model.addressRegion = value }
		else { ContactPointDataController.logError(this.constructor.name+': addressRegion must be a string', 'type') }
	}
	get postOfficeBoxNumber(){ return this.model.postOfficeBoxNumber; }
	set postOfficeBoxNumber(value){
		if(ContactPointDataController.isEmpty(value)){}
		else if(ContactPointDataController.isString(value)){ this.model.postOfficeBoxNumber = value }
		else { ContactPointDataController.logError(this.constructor.name+': postPOfficeBoxNumber must be a string', 'type') }
	}
	get postalCode(){ return this.model.postalCode; }
	set postalCode(value){
		if(ContactPointDataController.isEmpty(value)){}
		else if(ContactPointDataController.isString(value)){ this.model.postalCode = value }
		else { ContactPointDataController.logError(this.constructor.name+': postalCode must be a string', 'type') }
	}
	get streetAddress(){ return this.model.streetAddress; }
	set streetAddress(value){
		if(ContactPointDataController.isEmpty(value)){}
		else if(ContactPointDataController.isString(value)){ this.model.streetAddress = value }
		else { ContactPointDataController.logError(this.constructor.name+': streetAddresstreetAddress must be a string', 'type') }
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

module.exports = PostalAddressDataController;
