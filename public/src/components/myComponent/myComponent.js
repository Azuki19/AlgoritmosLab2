class myComponent extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['image', 'title', 'icons'];
	}

	connectedCallBack() {
		this.render();
	}

	attributeChangedCallBack(propName, oldValue, newValue) {
		this[propName] = newValue;
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./src/components/myComponent/myComponent.css">

		<img src=${image} />
    <h3>${this.tittle || `Por defecto`}</h3>
		<img src="${icons}" />


    `;
	}
}

customElements.define('my-component', myComponent);
export default myComponent;
