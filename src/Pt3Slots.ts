import { hbs } from '@glimmerx/component';

const Profile = hbs`
    <div class="max-w-xs rounded border-2 overflow-hidden shadow-lg my-2">
        <div class="px-6 py-4">
            <h2 class="font-bold text-xl mb-2">
                {{#if (has-block "header")}}
                    {{yield to="header"}}
                {{else}}
                    {{#if @header}}
                        {{@header}}
                    {{else}}
                        [ Empty header ]
                    {{/if}}
                {{/if}}
            </h2>
            <p class="text-grey-darker text-base">
                {{#if (has-block "body")}}
                    {{yield to="body"}}
                {{else}}
                    {{#if @body}}
                        {{@body}}
                    {{else}}
                        [ Empty body ]
                    {{/if}}
                {{/if}}
            </p>
        </div>
    </div>
`;


const Header = hbs`<pre>It's custom {{@name}} component</pre>`;


export default hbs`
    <div class="m-6">
       <Profile @header={{component Header name="foo"}}>
            <:body>
                Body
            </:body>
       </Profile>
    </div>
`