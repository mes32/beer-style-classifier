INSERT 
    INTO style_category
        (id, category_name)
    VALUES
        (1, 'Standard American Beer')
        , (2, 'International Lager')
        , (3, 'Czech Lager')
        , (4, 'Pale Malty European Lager')
        , (5, 'Pale Bitter European Beer')
        , (6, 'Amber Malty European Lager')
        , (7, 'Amber Bitter European Lager')
        , (8, 'Dark European Lager')
        , (9, 'Strong European Beer')
        , (10, 'German Wheat Beer')
        , (11, 'British Bitter')
        , (12, 'Pale Commonwealth Beer')
        , (13, 'Brown British Beer')
        , (14, 'Scottish Ale')
        , (15, 'Irish Beer')
        , (16, 'Dark British Beer')
        , (17, 'Strong British Ale')
        , (18, 'Pale American Ale')
        , (19, 'Amber and Brown American Beer')
        , (20, 'American Porter and Stout')
        , (21, 'IPA')
        , (22, 'Strong American Ale')
        , (23, 'European Sour Ale')
        , (24, 'Belgian Ale')
        , (25, 'Strong Belgian Ale')
        , (26, 'Trappist Ale')
        , (27, 'Historical Beer')
        , (28, 'American Wild Ale')
        , (29, 'Fruit Beer')
        , (30, 'Spiced Beer')
        , (31, 'Alternative Fermentables Beer')
        , (32, 'Smoked Beer')
        , (33, 'Wood Beer')
        , (34, 'Specialty Beer');

INSERT 
    INTO style 
        (
            category_id
            , letter 
            , style_name 
            , ibu_min
            , ibu_max 
            , srm_min 
            , srm_max 
            , og_min 
            , og_max 
            , fg_min 
            , fg_max
        )
    VALUES
        (1, 'A', 'American Light Lager', 8, 12, 2, 3, 1.028, 1.040, 0.998, 1.008)
        , (1, 'B', 'American Lager', 8, 20, 2.5, 5, 1.042, 1.055, 1.006, 1.012);
