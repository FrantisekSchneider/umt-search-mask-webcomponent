import {html, LitElement, property} from "lit-element";

interface City {
	name: string
}

class SearchMask extends LitElement {

	@property({type: String}) fromCity: string = ""
	@property({type: Array}) fromCities: Array<City> = []

	cities: Array<City> = []
	toCity: string = ""

	constructor() {
		super();

		fetch('http://0.0.0.0:9000/cities?country=CZ&country=DE').then(data => {
			return data.json()
		}).then(cities => {
			this.cities = cities;
		});
	}


	protected render() {

		return html`

<style>
	@import url('https://honeycomb.flixbus.com/dist/3.8.0/css/honeycomb.min.css');
	
	@media(min-width: 1200px) {
		.umt-centered {
		  margin: auto;
		  width: 50%;
		  padding: 10px;
		}
	}
	
	.umt-search-button {
		padding-left: 7px;
	}
	
	li {
		list-style: none;
	}
	li:hover {
		border: aqua 1px solid;
		background-color: green;
		color: white;
	}
	
</style>

<div class="flix-box flix-box--highlighted umt-centered">
	   <div class="flix-col">
	        <div class="flix-control">
	            <div class="flix-input">
	                <label class="flix-label flix-input__label" for="form-control-from">From</label>
	                <input id="form-control-from" type="text" class="flix-input__field"  value=${this.fromCity} @keyup="${this.handleChange}" />
	            </div>
	               <div id="cities" class="flix-box umt-centered">
					    <ul>${this.fromCities
			.map(item => html`<li>${item.name}</li>`)}</ul>
	               </div>
	    </div>
	   <div class="flix-col">
	        <div class="flix-control">
	            <div class="flix-input">
	                <label class="flix-label flix-input__label" for="form-control-to">To</label>
	                <input id="form-control-to" type="text" class="flix-input__field" .value=${this.toCity} placeholder="" />
	            </div>
	        </div>
	   </div>
    
    <div class="flix-control umt-search-button">
	    <button type="button" class="flix-btn flix-btn--has-icon flix-btn--secondary">
	        <i class="flix-btn__icon flix-icon flix-icon-magnifier-solid"></i>
	        <span class="flix-btn__text">Search</span>
	    </button>
	</div>
 
 
</div>
		`
	}

	handleChange() {
		let value = this.shadowRoot.getElementById("form-control-from")['value']
		this.fromCities = this.cities.filter(i => i.name.includes(value))
	}
}

customElements.define('umt-search-mask', SearchMask)

const umtSearchMask = html`<umt-search-mask> </umt-search-mask>`
export {umtSearchMask}
