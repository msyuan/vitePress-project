---
url: /en\note/vue.md
---
# Vue Study Notes - Debugging Test

```javascript
const VNode = {
  type: 'div',
  props: {
    class: 'name'
  },
  children: 'I am text'
}

// Create the render function
function render(vnode) {
  // Generate an element based on type
  const ele = document.createElement(vnode.type)
  // Assign the class in props to the className of ele
  ele.className = vnode.props.class
  // Assign children to the innerText of ele
  ele.innerText = vnode.children
  // Insert ele into body as a child node
  document.body.appendChild(ele)
}

render(VNode)

```
