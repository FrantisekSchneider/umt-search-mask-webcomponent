import {html, LitElement, property} from "lit-element";


class SearchMask extends LitElement {

	@property() clickCount: number = 1;

	protected render(): unknown {
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
	
</style>


<div  class="flix-box flix-box--highlighted umt-centered">
	   <div class="flix-col">
	        <div class="flix-control">
	            <div class="flix-input">
	                <label class="flix-label flix-input__label" for="form-control-simple">From</label>
	                <input id="form-control-simple" type="text" class="flix-input__field" placeholder="" />
	            </div>
	        </div>
	    </div>
	   <div class="flix-col">
	        <div class="flix-control">
	            <div class="flix-input">
	                <label class="flix-label flix-input__label" for="form-control-simple">To</label>
	                <input id="form-control-simple" type="text" class="flix-input__field" placeholder="" />
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

}

customElements.define('umt-search-mask', SearchMask)

const umtSearchMask = html`<umt-search-mask> </umt-search-mask>`
export {umtSearchMask}
