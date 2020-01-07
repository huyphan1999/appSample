
import Icon from 'react-native-vector-icons/FontAwesome5';
import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';

import {IN_REQUESTING} from '../../actionTypes/in.actiontypes';

class Input_OutPut_Activity extends Component {

    static navigationOptions = () => ({
       
        headerTitle: () => (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 18 }}>
                    Vào - Ra Ca
                 </Text>
            </View>
        ),
    });
  

    constructor(props) {
        super(props);
    }
    render() {
        return (
           

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                {
                    this.props.isIn ?

                        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => this.props.dispatch({type:IN_REQUESTING})}>
                            <Icon
                                name='user-clock'
                                size={100}
                                color='#ff4000'
                            />
                            <Text style={{ marginTop: 10, }}>Ra ca</Text>
                        </TouchableOpacity>

                        :
                        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => this.props.dispatch({type:IN_REQUESTING})}>
                            <Icon
                                name='user-lock'
                                size={100}
                                color='#0bd967'
                            />
                            <Text style={{ marginTop: 10, }}>Vào ca</Text>
                        </TouchableOpacity>

                }

            </View>

        );
    }
}

const mapStateToProps = (state) => ({
    isIn: state.user.isIn
});

export default connect(mapStateToProps, null)(Input_OutPut_Activity)