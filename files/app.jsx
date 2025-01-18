function render (vnode) {
    if (vnode.split) return document.createTextNode(vnode);

    let n = document.createElement(vnode.nodeName);

    let a = vnode.attributes || {};
    Object.keys(a).forEach( k => n.setAttribute(k, a[k]) );
    (vnode.children || []).forEach( c => n.appendChild(render(c)) );

    return n;
}
function h(nodeName, attributes, ...args) {
    let children = args.length ? [].concat(...args) : null;
    return {nodeName, attributes, children}
}
const items = ['a1', 'a2', 'a3'];

const item = (text) => {
    return <li>{text}</li>
}

const vdom = (
    <div id="foo">
        <h2>JSX part</h2>
        Hey! It's working!
        <p>Look at this cool list:</p>
        {items.map ((i) => item(i))}
    </div>
);


const dom = render(vdom);

document.body.appendChild(dom);