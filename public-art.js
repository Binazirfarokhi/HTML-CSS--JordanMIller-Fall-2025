class NameOfComponent extends HTMLElement {
  // Place attributes as comma-separated list of Strings within the array
  static observedAttributes = [];

  // Declare internal properties here
  #internalPropertyOfElement;

  constructor() {
    super(); 
  }
  
  connectedCallback() {
    
    console.log("Custom element added to the page.");

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
    <style>
      /* CSS styles go here */
      :host {
        /* styles of the top-level host element go here */
      }
      /* styles of elements slotted into custom element */
      ::slotted() {
      
      }
    </style>
    <!-- HTML goes here --> 
    <!-- properties of the custom element can be embeded like this: ${this.#internalPropertyOfElement} -->
    <slot>Slotted Elements will go here</slot>
    `;
  }

  disconnectedCallback() {
    console.log("Custom element removed from page.");
  }

  connectedMoveCallback() {
    console.log("Custom element moved with moveBefore()");
  }

  adoptedCallback() {
    console.log("Custom element moved to new page.");
  }

  attributeChangedCallback(name, oldValue, newValue) {
      console.log(`The attribute named ${name} has been changed from ${oldValue} to ${newValue}.`);
  }
}

// Register the element
customElements.define("name-of-component", NameOfComponent);
