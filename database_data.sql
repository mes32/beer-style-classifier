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

INSERT INTO style 
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
        , abv_min
        , abv_max
    )
VALUES
    (1, 'A', 'American Light Lager', 8, 12, 2, 3, 1.028, 1.040, 0.998, 1.008, 2.8, 4.2)
    , (1, 'B', 'American Lager', 8, 18, 2, 4, 1.040, 1.050, 1.004, 1.010, 4.2, 5.3)
    , (1, 'C', 'Cream Ale', 8, 20, 2.5, 5, 1.042, 1.055, 1.006, 1.012, 4.2, 5.6)
    , (1, 'D', 'American Wheat Beer', 15, 30, 3, 6, 1.040, 1.055, 1.008, 1.013, 4.0, 5.5)
    , (2, 'A', 'International Pale Lager', 18, 25, 2, 6, 1.042, 1.050, 1.008, 1.012, 4.6, 6.0)
    , (2, 'B', 'International Amber Lager', 8, 25, 7, 14, 1.042, 1.055, 1.008, 1.014, 4.6, 6.0)
    , (2, 'C', 'International Dark Lager', 8, 20, 14, 22, 1.044, 1.056, 1.008, 1.012, 4.2, 6.0)
    , (3, 'A', 'Czech Pale Lager', 20, 35, 3, 6, 1.028, 1.044, 1.008, 1.014, 3.0, 4.1)
    , (3, 'B', 'Czech Premium Pale Lager', 30, 45, 3.5, 6, 1.044, 1.060, 1.013, 1.017, 4.2, 5.8)
    , (3, 'C', 'Czech Amber Lager', 20, 35, 10, 16, 1.044, 1.060, 1.013, 1.017, 4.4, 5.8)
    , (3, 'D', 'Czech Dark Lager', 18, 34, 14, 35, 1.044, 1.060, 1.013, 1.017, 4.4, 5.8)
    , (4, 'A', 'Munich Helles', 16, 22, 3, 5, 1.044, 1.048, 1.006, 1.012, 4.7, 5.4)
    , (4, 'B', 'Festbier', 18, 25, 4, 7, 1.054, 1.057, 1.010, 1.012, 5.8, 6.3)
    , (4, 'C', 'Helles Bock', 23, 35, 6, 11, 1.064, 1.072, 1.011, 1.018, 6.3, 7.4)
    , (5, 'A', 'German Leichtbier', 15, 28, 2, 5, 1.026, 1.034, 1.006, 1.010, 2.4, 3.6)
    , (5, 'B', 'Kölsch', 18, 30, 3.5, 5, 1.044, 1.050, 1.007, 1.011, 4.4, 5.2)
    , (5, 'C', 'German Helles Exportbier', 20, 30, 4, 7, 1.048, 1.056, 1.010, 1.015, 4.8, 6.0)
    , (5, 'D', 'German Pils', 22, 40, 2, 5, 1.044, 1.050, 1.008, 1.013, 4.4, 5.2)
    , (6, 'A', 'Märzen', 18, 24, 8, 17, 1.054, 1.060, 1.010, 1.014, 5.8, 6.3)
    , (6, 'B', 'Rauchbier', 20, 30, 12, 22, 1.050, 1.057, 1.012, 1.016, 4.8, 6)
    , (6, 'C', 'Dunkles Bock', 20, 27, 14, 22, 1.064, 1.072, 1.013, 1.019, 6.3, 7.2)
    , (7, 'A', 'Vienna Lager', 18, 30, 9, 15, 1.048, 1.055, 1.010, 1.014, 4.7, 5.5)
    , (7, 'B', 'Altbier', 25, 50, 11, 17, 1.044, 1.052, 1.008, 1.014, 4.3, 5.5)
    , (7, 'C', 'Kellerbier', 20, 35, 3, 7, 1.045, 1.051, 1.008, 1.012, 4.7, 5.4)
    , (8, 'A', 'Munich Dunkel', 18, 28, 14, 28, 1.048, 1.056, 1.010, 1.016, 4.5, 5.6)
    , (8, 'B', 'Schwarzbier', 20, 30, 17, 30, 1.046, 1.052, 1.010, 1.016, 4.4, 5.6)
    , (9, 'A', 'Doppelbock', 16, 26, 6, 25, 1.072, 1.112, 1.016, 1.024, 7.0, 10.0)
    , (9, 'B', 'Eisbock', 25, 35, 18, 30, 1.078, 1.120, 1.020, 1.035, 9.0, 14.0)
    , (9, 'C', 'Baltic Porter', 20, 40, 17, 30, 1.060, 1.090, 1.016, 1.024, 6.5, 9.5)
    , (10, 'A', 'Weissbier', 8, 15, 2, 6, 1.044, 1.052, 1.010, 1.014, 4.3, 5.6)
    , (10, 'B', 'Dunkles Weissbier', 10, 18, 14, 23, 1.044, 1.056, 1.010, 1.014, 4.3, 5.6)
    , (10, 'C', 'Weizenbock', 15, 30, 6, 25, 1.064, 1.090, 1.015, 1.022, 6.5, 9.0)
    , (11, 'A', 'Ordinary Bitter', 25, 35, 8, 14, 1.030, 1.039, 1.007, 1.011, 3.2, 3.8)
    , (11, 'B', 'Best Bitter', 25, 40, 8, 16, 1.040, 1.048, 1.008, 1.012, 3.8, 4.6)
    , (11, 'C', 'Strong Bitter', 30, 50, 8, 18, 1.048, 1.060, 1.010, 1.016, 4.6, 6.2)
    , (12, 'A', 'British Golden Ale', 20, 45, 2, 6, 1.038, 1.053, 1.006, 1.012, 3.8, 5.0)
    , (12, 'B', 'Australian Sparkling Ale', 20, 35, 4, 7, 1.038, 1.050, 1.004, 1.006, 4.5, 6.0)
    , (12, 'C', 'English IPA', 40, 60, 6, 14, 1.050, 1.075, 1.010, 1.018, 5.0, 7.5)
    , (13, 'A', 'Dark Mild', 10, 25, 12, 25, 1.030, 1.038, 1.008, 1.013, 3.0, 3.8)
    , (13, 'B', 'British Brown Ale', 20, 30, 12, 22, 1.040, 1.052, 1.008, 1.013, 4.2, 5.4)
    , (13, 'C', 'English Porter', 18, 35, 20, 30, 1.040, 1.052, 1.008, 1.014, 4.0, 5.4)
    , (14, 'A', 'Scottish Light', 10, 20, 17, 22, 1.030, 1.035, 1.010, 1.013, 2.5, 3.2)
    , (14, 'B', 'Scottish Heavy', 10, 20, 13, 22, 1.035, 1.040, 1.010, 1.015, 3.2, 3.9)
    , (14, 'C', 'Scottish Export', 15, 30, 13, 22, 1.040, 1.060, 1.010, 1.016, 3.9, 6.0)
    , (15, 'A', 'Irish Red Ale', 18, 28, 9, 14, 1.036, 1.046, 1.010, 1.014, 3.8, 5.0)
    , (15, 'B', 'Irish Stout', 25, 45, 25, 40, 1.036, 1.044, 1.007, 1.011, 4.0, 4.5)
    , (15, 'C', 'Irish Extra Stout', 35, 50, 25, 40, 1.052, 1.062, 1.010, 1.014, 5.5, 6.5)
    , (16, 'A', 'Sweet Stout', 20, 40, 30, 40, 1.044, 1.060, 1.012, 1.024, 4.0, 6.0)
    , (16, 'B', 'Oatmeal Stout', 25, 40, 22, 40, 1.045, 1.065, 1.010, 1.018, 4.2, 5.9)
    , (16, 'C', 'Tropical Stout', 30, 50, 30, 40, 1.056, 1.075, 1.010, 1.018, 5.5, 8.0)
    , (16, 'D', 'Foreign Extra Stout', 50, 70, 30, 40, 1.056, 1.075, 1.010, 1.018, 6.3, 8.0)
    , (17, 'A', 'British Strong Ale', 30, 60, 8, 22, 1.055, 1.080, 1.015, 1.022, 5.5, 8.0)
    , (17, 'B', 'Old Ale', 30, 60, 10, 22, 1.055, 1.088, 1.015, 1.022, 5.5, 9.0)
    , (17, 'C', 'Wee Heavy', 17, 35, 14, 25, 1.070, 1.130, 1.018, 1.040, 6.5, 10.0)
    , (17, 'D', 'English Barleywine', 35, 70, 8, 22, 1.080, 1.120, 1.018, 1.030, 8.0, 12.0)
    , (18, 'A', 'Blonde Ale', 15, 28, 3, 6, 1.038, 1.054, 1.008, 1.013, 3.8, 5.5)
    , (18, 'B', 'American Pale Ale', 30, 50, 5, 10, 1.045, 1.060, 1.010, 1.015, 4.5, 6.2)
    , (19, 'A', 'American Amber Ale', 25, 40, 10, 17, 1.045, 1.060, 1.010, 1.015, 4.5, 6.2)
    , (19, 'B', 'California Common', 30, 45, 10, 14, 1.048, 1.054, 1.011, 1.014, 4.5, 5.5)
    , (19, 'C', 'American Brown Ale', 20, 30, 18, 35, 1.045, 1.060, 1.010, 1.016, 4.3, 6.2)
    , (20, 'A', 'American Porter', 25, 50, 22, 40, 1.050, 1.070, 1.012, 1.018, 4.8, 6.5)
    , (20, 'B', 'American Stout', 35, 75, 30, 40, 1.050, 1.075, 1.010, 1.022, 5.0, 7.0)
    , (20, 'C', 'Imperial Stout', 50, 90, 30, 40, 1.075, 1.115, 1.018, 1.030, 8.0, 12.0)
    , (21, 'A', 'American IPA', 40, 70, 6, 14, 1.056, 1.070, 1.008, 1.014, 5.5, 7.5)
    , (22, 'A', 'Double IPA', 60, 120, 6, 14, 1.065, 1.085, 1.008, 1.018, 7.5, 10.0)
    , (22, 'B', 'American Strong Ale', 50, 100, 7, 19, 1.062, 1.090, 1.014, 1.024, 6.3, 10.0)
    , (22, 'C', 'American Barleywine', 50, 100, 10, 19, 1.080, 1.120, 1.016, 1.030, 8.0, 12.0)
    ;

INSERT INTO characteristic_ingredient
    (ingredient_name)
VALUES
    ('2-row Barley Malt')
    , ('6-row Barley Malt')
    , ('Ale Yeast')
    , ('Corn Adjunct')
    , ('Lager Yeast')
    , ('Rice Adjunct')
    , ('Weissbier Yeast')
    , ('Wheat');

INSERT INTO ingredient_in_style
    (style_id, ingredient_id)
VALUES
    (1, 1)
    , (1, 2)
    , (1, 4)
    , (1, 5)
    , (1, 6);