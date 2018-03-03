# rc-arrow
任意大小，任意方向， 任意角度的箭头

示例截图

|简单箭头|模拟select |发散箭头 |
| :----:|:----:|:----:|
|![简单箭头][1]|![模拟select][2]|![发散箭头][3]|

## Install
`npm install rc-arrow --save`

```javascript
import Arrow from 'rc-arrow'

class Hw extends Component {
    render() {
        return (
            <Arrow size="20px" color="red"/>
        )
    }
}
```

## Example
[online example](https://ykforerlang.github.io/rc-arrow/example/helloworld/index.html) 
[示例代码](https://github.com/ykforerlang/rc-arrow/tree/master/example/helloworld)



## props
| name | type | default | description|
| :----: |:----:  |:----:     |:----:        |
| degree| number| 90| 箭头的张角, 角度制|
| offsetDegree| number| 0| 箭头的方向，默认指向右边|
| color| string| -| 箭头的颜色|
| size| string|10px| ![简单箭头][1]|





---


  [1]: https://raw.githubusercontent.com/ykforerlang/rc-arrow/master/static/arrow1.png
  [2]: https://raw.githubusercontent.com/ykforerlang/rc-arrow/master/static/rc2.gif
  [3]: https://raw.githubusercontent.com/ykforerlang/rc-arrow/master/static/rc4.png