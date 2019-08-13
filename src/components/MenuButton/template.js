import styles, { locals as s } from "./styles.scss";

const template = document.createElement("template");

//this HTML will be injected into the page using the template and slot functionality
template.innerHTML = `
	<style>
		${styles.toString()}
	</style>
	<button class="${s.wrapper}">
		<div class="${s.icon}">
			<div class="${s.bar} ${s.bar1}"></div>
			<div class="${s.bar} ${s.bar2}"></div>
			<div class="${s.bar} ${s.bar3}"></div>
		</div>
		<slot name="label">
			Default
		</slot>
	</button>
`;

export default template;