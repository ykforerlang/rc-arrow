import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import Arrow from 'rc-arrow'

const degreeArray = [120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10]
class HelloWorld extends Component {
    state = {
        more: false
    }


    render() {
        return (
            <div>
                <div className="urdl">
                    <Arrow size="20px" color="red"/>
                    <Arrow degree={45} size="10px"/>
                    <Arrow degree={90} size="10px"/>
                    <Arrow degree={120} offsetDegree={90} size="10px" color="#aaaaaa"/>
                    <Arrow degree={120} offsetDegree={135} size="10px" color="blue"/>
                    <Arrow degree={120} offsetDegree={160} size="10px" color="green"/>
                    <Arrow degree={150} offsetDegree={180} size="10px"/>
                    <Arrow offsetDegree={270} size="10px"/>
                </div>

                <div className="selectfake">
                    <input
                        onClick={() => {
                            this.setState({
                                more: !this.state.more
                            })
                        }}
                        value="江苏"
                    />
                    <Arrow
                        degree={120}
                        offsetDegree={this.state.more ? 270 : 90}
                        size="10px"
                        style={{
                            position: 'absolute',
                            top: this.state.more ? '43px' : '40px',
                            left: '120px',
                            transition: 'all 0.1s'
                        }}
                    />
                    {
                        this.state.more && (
                            <div>
                                <div>江苏</div>
                                <div>上海</div>
                                <div>北京</div>
                            </div>
                        )
                    }
                </div>

                <div className="moreArrow">
                    {
                        degreeArray.map(deg => {
                            const size = 150 / Math.cos(deg / 360 * Math.PI);
                            const colorPart = 240 - deg * 2
                            return (
                                <Arrow
                                    degree={deg}
                                    size={`${size}px`}
                                    color={`rgb(${colorPart}, ${colorPart}, ${colorPart})`}
                                    style={{
                                        left: 250 - size / 2,
                                        top: 300 - size / 2,
                                        borderStyle: 'dashed',
                                    }}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

ReactDOM.render(<HelloWorld/>, document.getElementById("root"))
