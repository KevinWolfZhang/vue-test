export default class Person {
	constructor(first,last) {
	    this.firstName = first
		this.lastName = last
	}
}

export function createPerson(first, last) {
	return new Person(first, last)
}

export class Text {
	constructor(id, text, isComplete) {
	    this.id = id
		this.text = text
		this.isComplete = isComplete
	}
}