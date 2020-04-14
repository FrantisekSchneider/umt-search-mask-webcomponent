import page from "page";
import {html, render, TemplateResult} from 'lit-html';
import {umtSearchMask} from "./components/SearchMask";

const appElement: Element = document.querySelector('#app')

const layout: TemplateResult = html`
		
<div class="flix-grid">
  <div class="flix-col-12">
        <div id="shell">
             <h2> Use my truck shell </h2>
                ${umtSearchMask}
		</div>
  </div>
</div>

		
			
`;

page('/',() => {
	render(layout, appElement);
})

page()
