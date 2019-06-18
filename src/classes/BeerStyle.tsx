class BeerStyle {
    id: number;
    code: string;
    category: string;
    name: string;
    ibuMin: number;
    ibuMax: number;
    srmMin: number;
    srmMax: number;
    ogMin: number;
    ogMax: number;
    fgMin: number;
    fgMax: number;
    abvMin: number;
    abvMax: number;

    constructor(id: number, code: string, category: string, name: string, ibuMin: number, ibuMax: number, srmMin: number, srmMax: number, ogMin: number, ogMax: number, fgMin: number, fgMax: number, abvMin: number, abvMax: number) {
        this.id = id;
        this.code = code;
        this.category = category;
        this.name = name;
        this.ibuMin = ibuMin;
        this.ibuMax = ibuMax;
        this.srmMin = srmMin;
        this.srmMax = srmMax;
        this.ogMin = ogMin;
        this.ogMax = ogMax;
        this.fgMin = fgMin;
        this.fgMax = fgMax;
        this.abvMin = abvMin;
        this.abvMax = abvMax;
    }

    static loadQuery(query: Array<any>) {
        return query.map(
            row => {
                return new BeerStyle(
                    row.id, 
                    row.code, 
                    row.category, 
                    row.name,
                    row.ibu_min,
                    row.ibu_max,
                    row.srm_min,
                    row.srm_max,
                    row.og_min,
                    row.og_max,
                    row.fg_min,
                    row.fg_max,
                    row.abv_min,
                    row.abv_max
                );
            });
    }
}

export default BeerStyle;