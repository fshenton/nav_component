import styles, { locals as s } from "./styles.scss";

const template = document.createElement("template");

template.innerHTML = `
	<style>
		${styles.toString()};
	</style>
	<nav class="${s.navMenu}" aria-expanded="false">
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
		</ul>
	</nav>
`;

export default template;