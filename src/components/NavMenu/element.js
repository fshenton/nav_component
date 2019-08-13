import template from "./template.js";
import { locals as s } from "./styles.scss";

class NavMenu extends HTMLElement {
	constructor(){
		super();

		//SHADOW DOM AND TEMPLATE CLONE
		const shadow = this.shadow = this.attachShadow({"mode": "open"});
		const clone = document.importNode(template.content, true);

		//BINDING CLASS FUNCTIONS
		this.toggleExpanded = this.toggleExpanded.bind(this);
		this.updateMenuVisibility = this.updateMenuVisibility.bind(this);

		//CLASS VARIABLES
		this.expanded = this.getAttribute("aria-expanded");
		this.nav = clone.querySelector("nav");

		//EVENTS AND LISTENERS
		this.event = new CustomEvent("menuToggled");
		this.nav.addEventListener("menuToggled", this.updateMenuVisibility);

		shadow.appendChild(clone);
	}
	connectedCallback(){
		const toggleTimer = window.setInterval(this.toggleExpanded, 1000);
	}
	toggleExpanded(){
		this.expanded = !this.expanded;
		
		this.nav.setAttribute("aria-expanded", this.expanded);

		this.nav.dispatchEvent(this.event);
	}
	updateMenuVisibility(event){
		const {
			target
		} = event;

		target.classList.toggle(s.open);
	}
}

export default NavMenu;