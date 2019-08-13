import styles, { locals as s } from "./styles.scss";

const template = document.createElement("template");

template.innerHTML = `
	<style>
		${styles.toString()};
	</style>
	<nav class="${s.navMenu}" aria-expanded="false">
		<menu-button>
			<span slot="label">
				MENU
			</span>
		</menu-button>
		<ul class="${s.list}">
			<li>
				<slot name="list-item-1">List Item</slot>
			</li>
			<li>
				<slot name="list-item-2">List Item</slot>
			</li>
			<li>
				<slot name="list-item-3">List Item</slot>
			</li>
		</ul>
	</nav>
`;

export default template;