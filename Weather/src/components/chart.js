import React, {Component} from 'react';
import _ from 'lodash';
import {Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesSpots} from 'react-sparklines';

export default class Chart extends Component {
    constructor(){
        super();
    }
    averageData(data){
        return _.round(_.sum(data)/data.length) - 273;
    }
    render() {
        return (
            <div>
            <Sparklines height={100} width={200} data={this.props.data}>
                <SparklinesLine color={this.props.color}/>
                <SparklinesSpots />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>
                {this.averageData(this.props.data)}
            </div>
            </div>
        );
    }
}
