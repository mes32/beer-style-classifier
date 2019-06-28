import React, { Component } from 'react';

import SRMBadge from '../SRMBadge/SRMBadge';

interface VitalStatisticsFormProps {
    searchBeerStyles: (state: VitalStatisticsFormState) => void;
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

    changeIBU = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ibu: event.target.value
        }, () => {
            this.props.searchBeerStyles(this.state);
        });
    };

    changeSRM = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            srm: event.target.value
        }, () => {
            this.props.searchBeerStyles(this.state);
        });
    };

    changeOG = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            og: event.target.value
        }, () => {
            this.props.searchBeerStyles(this.state);
        });
    };

    changeFG = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            fg: event.target.value
        }, () => {
            this.props.searchBeerStyles(this.state);
        });
    };

    changeABV = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            abv: event.target.value
        }, () => {
            this.props.searchBeerStyles(this.state);
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
                            <td><input name="ibu" type="number" onChange={this.changeIBU} value={this.state.ibu} /></td>
                        </tr>
                        <tr>
                            <td>SRM</td>
                            <td><input name="srm" type="number" onChange={this.changeSRM} value={this.state.srm} /></td>
                            <td><SRMBadge srm={Number(this.state.srm)} /></td>
                        </tr>
                        <tr>
                            <td>O.G.</td>
                            <td><input name="og" type="number" onChange={this.changeOG} value={this.state.og} /></td>
                        </tr>
                        <tr>
                            <td>F.G.</td>
                            <td><input name="fg" type="number" onChange={this.changeFG} value={this.state.fg} /></td>
                        </tr>
                        <tr>
                            <td>ABV</td>
                            <td><input name="abv" type="number" onChange={this.changeABV} value={this.state.abv} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default VitalStatisticsForm;
