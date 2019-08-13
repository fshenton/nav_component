import template from "./template.js";

class NavMenu extends HTMLElement {
	constructor(){
		super();
		console.dir(template);

		const shadow = this.attachShadow({"mode": "open"});
		const clone = document.importNode(template.content, true);



		shadow.appendChild(clone);
	}
}

export default NavMenu;