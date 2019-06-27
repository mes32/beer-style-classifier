import React from 'react';

import BeerStyle from '../../classes/BeerStyle';
import SRMBadge from '../SRMBadge/SRMBadge';

interface BeerStyleListProps {
    styleList: Array<BeerStyle>;
};

const BeerStyleList: React.FC<BeerStyleListProps> = (props) => {
    return (
        <div>
            <h3>Predicted Beer Styles</h3>
            <table>
                <thead>
                    {props.styleList.length > 0 &&
                        <tr>
                            <th>
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Category
                            </th>
                            <th>
                                IBUs
                            </th>
                            <th>
                                SRM
                            </th>
                            <th>
                                O.G.
                            </th>
                            <th>
                                F.G.
                            </th>
                            <th>
                                ABV
                            </th>
                        </tr>
                    }
                </thead>
                <tbody>
                    {props.styleList.map(style =>
                        <tr key={style.code}>
                            <td>
                                {style.code}.
                            </td>
                            <td>
                                {style.name}
                            </td>
                            <td>
                                {style.category}
                            </td>
                            <td>
                                [{style.ibuMin}, {style.ibuMax}]
                            </td>
                            <td>
                                [{style.srmMin}, {style.srmMax}]
                                <SRMBadge srm={(Number(style.srmMin) + Number(style.srmMax)) / 2.0} />
                            </td>
                            <td>
                                [{style.ogMin}, {style.ogMax}]
                            </td>
                            <td>
                                [{style.fgMin}, {style.fgMax}]
                            </td>
                            <td>
                                [{style.abvMin}, {style.abvMax}]
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default BeerStyleList;
