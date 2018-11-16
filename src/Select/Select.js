import React, { Component } from 'react';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];

class CustomSelect extends Component {
    state = {
        selectedOption: null,
    }
    
    componentDidUpdate = () => {
        console.log(this.state.selectedOption)
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      }

    render() {
        const { selectedOption } = this.state;
        return(
            <div className='Select'>
                <Select
                    className='myCustomSelect'
                    value={selectedOption}
                    defaultValue={options[2]}
                    onChange={this.handleChange}
                    options={options}
                    isMulti
                    isSearchable
                />
            </div>
        )
    }
}

export default CustomSelect