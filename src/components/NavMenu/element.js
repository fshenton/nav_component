import template from "./template.js";
import { locals as s } from "./styles.scss";

class NavMenu extends HTMLElement {
	constructor(){
		super();

		//SHADOW DOM AND TEMPLATE CLONE
		const shadow = this.shadow = this.attachShadow({"mode": "open"});
		const clone = document.importNode(template.content, true);

		//BINDING CLASS FUNCTIONS
		this.updateMenuVisibility = this.updateMenuVisibility.bind(this);

		//CLASS VARIABLES
		this.expanded = this.getAttribute("aria-expanded");
		this.nav = clone.querySelector("nav");
		this.list = clone.querySelector("ul");

		//EVENTS AND LISTENERS
		this.nav.addEventListener("menuToggled", this.updateMenuVisibility);

		shadow.appendChild(clone);
	}
	updateMenuVisibility(event){
		const {
			target //(HTMLElement) nav
		} = event;

		this.expanded = !this.expanded; //toggle true/false
		this.nav.setAttribute("aria-expanded", this.expanded); //update aria

		this.list.classList.toggle(s.open); //toggles between visible/invisible
	}
}

export default NavMenu;