DROP TABLE IF EXISTS ingredient_in_style;
DROP TABLE IF EXISTS style;
DROP TABLE IF EXISTS characteristic_ingredient;
DROP TABLE IF EXISTS style_category;


-- BJCP beer style categories
CREATE TABLE style_category (
    id INTEGER PRIMARY KEY CHECK(id > 0)
    , category_name TEXT NOT NULL
);

-- BJCP beer styles
CREATE TABLE style (
    id SERIAL PRIMARY KEY
    , category_id INTEGER REFERENCES style_category(id)
    , letter VARCHAR(1)
    , CONSTRAINT unique_category_and_letter UNIQUE(category_id, letter)
    , style_name VARCHAR(100) NOT NULL
    , ibu_min NUMERIC NOT NULL CHECK(ibu_min >= 0)
    , ibu_max NUMERIC NOT NULL CHECK(ibu_max >= 0 AND ibu_max >= ibu_min)
    , srm_min NUMERIC NOT NULL CHECK(srm_min >= 0)
    , srm_max NUMERIC NOT NULL CHECK(srm_max >= 0 AND srm_max >= srm_min)
    , og_min NUMERIC NOT NULL CHECK(og_min >= 1)
    , og_max NUMERIC NOT NULL CHECK(og_max >= 1 AND og_max >= og_min)
    , fg_min NUMERIC NOT NULL CHECK(fg_min >= 1 AND fg_min <= og_min)
    , fg_max NUMERIC NOT NULL CHECK(fg_max >= 1 AND fg_max <= og_max AND fg_max >= fg_min)
);

-- Characteristic ingredients that might differentiate styles between beers with
-- otherwise identical properties
CREATE TABLE characteristic_ingredient (
    id SERIAL PRIMARY KEY
    , ingredient_name VARCHAR(100)
);

-- Many-to-many mapping between 'characteristic_ingredient' and 'style'
CREATE TABLE ingredient_in_style (
    ingredient_id INTEGER REFERENCES characteristic_ingredient (id)
    , style_id INTEGER REFERENCES style(id)
    , CONSTRAINT unique_mapping PRIMARY KEY(ingredient_id, style_id)
);