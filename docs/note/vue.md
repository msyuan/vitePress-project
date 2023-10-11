# Vue学习笔记-调试测试

``` javascript
const VNode = {
  type: 'div',
  props: {
    class: 'name'
  },
  children: '我是文本'
}

// 创建 render 渲染函数
function render(vnode) {
  // 根据 type 生成 element
  const ele = document.createElement(vnode.type)
  // 把 props 中的 class 赋值给 ele 的 className
  ele.className = vnode.props.class
  // 把 children 赋值给 ele 的 innerText
  ele.innerText = vnode.children
  // 把 ele 作为子节点插入 body 中
  document.body.appendChild(ele)
}

render(VNode)

```
