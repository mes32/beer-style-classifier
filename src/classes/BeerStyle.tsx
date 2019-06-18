class BeerStyle {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    static loadQuery(query: Array<any>) {
        return query.map(row => new BeerStyle(row.id, row.name));
    }
}

export default BeerStyle;