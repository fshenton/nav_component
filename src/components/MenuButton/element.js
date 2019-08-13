import template from "./template.js";
import { locals as s } from "./styles.scss";

class MenuButton extends HTMLElement {
	constructor(){
		super();

		//CREATE SHADOW DOM AND CLONE TEMPLATE
		const shadow = this.attachShadow({ "mode": "open" });
		const clone = document.importNode(template.content, true);

		console.log(clone);

		//SET CLASS VARIABLES
		const button = clone.querySelector("button");

		//EVENTS
		button.addEventListener("click", this.menuButtonPressed);

		shadow.appendChild(clone);
	}
	menuButtonPressed(event){
		//set the "change" class
		event.target.classList.toggle(s.change);
	}
}

export default MenuButton;