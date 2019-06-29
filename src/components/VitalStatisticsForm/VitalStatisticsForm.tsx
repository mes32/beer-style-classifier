import React, { Component } from 'react';

import SRMBadge from '../SRMBadge/SRMBadge';

interface VitalStatisticsFormProps {
    search: (state: VitalStatisticsFormState) => void;
};

interface VitalStatisticsFormState {
    ibu: string;
    srm: string;
    og: string;
    fg: string;
    abv: string;
};

class VitalStatisticsForm extends Component<VitalStatisticsFormProps, VitalStatisticsFormState> {
    state: VitalStatisticsFormState = {
        ibu: '',
        srm: '',
        og: '',
        fg: '',
        abv: ''
    };

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        }, () => {
            this.props.search(this.state);
        });
    };

    render() {
        return (
            <div>
                <h3>Vital Statistics</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>IBUs</td>
                            <td><input name="ibu" type="number" onChange={this.handleChange} value={this.state.ibu} /></td>
                        </tr>
                        <tr>
                            <td>SRM</td>
                            <td><input name="srm" type="number" onChange={this.handleChange} value={this.state.srm} /></td>
                            <td><SRMBadge srm={Number(this.state.srm)} /></td>
                        </tr>
                        <tr>
                            <td>O.G.</td>
                            <td><input name="og" type="number" onChange={this.handleChange} value={this.state.og} /></td>
                        </tr>
                        <tr>
                            <td>F.G.</td>
                            <td><input name="fg" type="number" onChange={this.handleChange} value={this.state.fg} /></td>
                        </tr>
                        <tr>
                            <td>ABV</td>
                            <td><input name="abv" type="number" onChange={this.handleChange} value={this.state.abv} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default VitalStatisticsForm;
