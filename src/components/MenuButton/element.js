import template from "./template.js";
import { locals as s } from "./styles.scss";

class MenuButton extends HTMLElement {
	constructor(){
		super();

		//CREATE SHADOW DOM AND CLONE TEMPLATE
		const shadow = this.attachShadow({ "mode": "open" });
		const clone = document.importNode(template.content, true);

		//SET CLASS VARIABLES
		const button = clone.querySelector("button");
		this.state = {
			open: false
		};

		//BINDING CLASS METHODS
		this.toggleOpen = this.toggleOpen.bind(this, this.state);

		//EVENTS
		this.event = new CustomEvent("menuToggled", { bubbles: true, composed: true });
		button.addEventListener("click", this.toggleOpen);

		shadow.appendChild(clone);
	}
	toggleOpen(state, event){
		const { open : currOpen } = state;
		const { target } = event;
		
		state.open = !currOpen;
		console.log(state.open);

		target.classList.toggle(s.open);

		target.dispatchEvent(this.event); //"menuToggled"
	}
}

export default MenuButton;