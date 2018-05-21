import React, {Component} from 'react'
import config from './config.json';

class Greeter extends Component{
    render() {
        return (
            // 添加类名
            <div >
                <div >
                    {config.greetText}
                </div>
            </div>
        );
    }
}

export default Greeter