class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallBack() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
		<my-component image="https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/30dd8syYR9JAPhV759qTQe/66e1f4978d8a6ff11201bc1c6dd7b7f9/acm-boxshot.jpg?imwidth=360"></my-component>
		`;
	}
}
