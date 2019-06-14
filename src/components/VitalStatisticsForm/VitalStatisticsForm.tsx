import React from 'react';

const VitalStatisticsForm: React.FC = () => {
    return (
        <div>
            <h3>Vital Statistics</h3>
            <table>
                <tbody>
                    <tr>
                        <td>IBUs</td>
                        <td><input name="ibu" type="number" /></td>
                    </tr>
                    <tr>
                        <td>SRM</td>
                        <td><input name="srm" type="number" /></td>
                    </tr>
                    <tr>
                        <td>O.G.</td>
                        <td><input name="og" type="number" /></td>
                    </tr>
                    <tr>
                        <td>F.G.</td>
                        <td><input name="fg" type="number" /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default VitalStatisticsForm;
