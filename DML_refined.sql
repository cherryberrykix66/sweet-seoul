-- =====================================================
-- K-pop/Anime Merchandise Sample Data Insert Script
-- =====================================================

-- CUSTOMERS table (NO CHANGES NEEDED - ALREADY CORRECT)
INSERT INTO CUSTOMERS (first_name, last_name, email, phone, join_date, address, city, state, postal_code, is_online_customer, is_in_store_customer, loyalty_points, loyalty_status, preferred_communication_method)
VALUES ('Jiwoo', 'Kim', 'jiwoo.kim@email.com', '303-555-0101', SYSDATE-180, '123 Cherry St', 'Denver', 'CO', '80202', 1, 1, 350, 'Gold', 'Email');

INSERT INTO CUSTOMERS (first_name, last_name, email, phone, join_date, address, city, state, postal_code, is_online_customer, is_in_store_customer, loyalty_points, loyalty_status, preferred_communication_method)
VALUES ('Minho', 'Park', 'minho.park@email.com', '303-555-0102', SYSDATE-165, '456 Oak Ave', 'Denver', 'CO', '80203', 1, 0, 200, 'Silver', 'SMS');

INSERT INTO CUSTOMERS (first_name, last_name, email, phone, join_date, address, city, state, postal_code, is_online_customer, is_in_store_customer, loyalty_points, loyalty_status, preferred_communication_method)
VALUES ('Soyeon', 'Lee', 'soyeon.lee@email.com', '303-555-0103', SYSDATE-150, '789 Pine Blvd', 'Boulder', 'CO', '80301', 1, 1, 450, 'Gold', 'Email');

INSERT INTO CUSTOMERS (first_name, last_name, email, phone, join_date, address, city, state, postal_code, is_online_customer, is_in_store_customer, loyalty_points, loyalty_status, preferred_communication_method)
VALUES ('Jaehyun', 'Choi', 'jaehyun.choi@email.com', '303-555-0104', SYSDATE-135, '101 Maple Dr', 'Denver', 'CO', '80202', 0, 1, 100, 'Standard', 'Phone');

INSERT INTO CUSTOMERS (first_name, last_name, email, phone, join_date, address, city, state, postal_code, is_online_customer, is_in_store_customer, loyalty_points, loyalty_status, preferred_communication_method)
VALUES ('Yuna', 'Jung', 'yuna.jung@email.com', '303-555-0105', SYSDATE-120, '202 Elm St', 'Aurora', 'CO', '80010', 1, 0, 175, 'Silver', 'Email');

INSERT INTO CUSTOMERS (first_name, last_name, email, phone, join_date, address, city, state, postal_code, is_online_customer, is_in_store_customer, loyalty_points, loyalty_status, preferred_communication_method)
VALUES ('Taehyung', 'Kim', 'taehyung.kim@email.com', '303-555-0106', SYSDATE-105, '303 Birch Ave', 'Lakewood', 'CO', '80215', 1, 1, 525, 'Platinum', 'SMS');

INSERT INTO CUSTOMERS (first_name, last_name, email, phone, join_date, address, city, state, postal_code, is_online_customer, is_in_store_customer, loyalty_points, loyalty_status, preferred_communication_method)
VALUES ('Nayeon', 'Kang', 'nayeon.kang@email.com', '303-555-0107', SYSDATE-90, '404 Walnut Blvd', 'Denver', 'CO', '80205', 0, 1, 75, 'Standard', 'Phone');

INSERT INTO CUSTOMERS (first_name, last_name, email, phone, join_date, address, city, state, postal_code, is_online_customer, is_in_store_customer, loyalty_points, loyalty_status, preferred_communication_method)
VALUES ('Jimin', 'Seo', 'jimin.seo@email.com', '303-555-0108', SYSDATE-75, '505 Cedar Dr', 'Boulder', 'CO', '80303', 1, 1, 275, 'Silver', 'Email');

INSERT INTO CUSTOMERS (first_name, last_name, email, phone, join_date, address, city, state, postal_code, is_online_customer, is_in_store_customer, loyalty_points, loyalty_status, preferred_communication_method)
VALUES ('Soojin', 'Yoon', 'soojin.yoon@email.com', '303-555-0109', SYSDATE-60, '606 Spruce Ave', 'Denver', 'CO', '80206', 1, 0, 400, 'Gold', 'SMS');

INSERT INTO CUSTOMERS (first_name, last_name, email, phone, join_date, address, city, state, postal_code, is_online_customer, is_in_store_customer, loyalty_points, loyalty_status, preferred_communication_method)
VALUES ('Jihyo', 'Hwang', 'jihyo.hwang@email.com', '303-555-0110', SYSDATE-45, '707 Aspen St', 'Fort Collins', 'CO', '80525', 0, 1, 150, 'Silver', 'Email');

-- MARKETING_CHANNELS table (CORRECTED - Fixed channel_type values)
INSERT INTO MARKETING_CHANNELS (channel_name, channel_type, specific_platform, customer_acquisition_cost, conversion_rate)
VALUES ('Instagram K-pop Ads', 'Social Media', 'Instagram', 15.50, 8.25);

INSERT INTO MARKETING_CHANNELS (channel_name, channel_type, specific_platform, customer_acquisition_cost, conversion_rate)
VALUES ('Facebook Anime Ads', 'Social Media', 'Facebook', 12.75, 6.50);

INSERT INTO MARKETING_CHANNELS (channel_name, channel_type, specific_platform, customer_acquisition_cost, conversion_rate)
VALUES ('Google Search Ads', 'PPC', 'Google Ads', 18.25, 10.75);

INSERT INTO MARKETING_CHANNELS (channel_name, channel_type, specific_platform, customer_acquisition_cost, conversion_rate)
VALUES ('TikTok K-pop Promotion', 'Social Media', 'TikTok', 10.50, 12.30);

INSERT INTO MARKETING_CHANNELS (channel_name, channel_type, specific_platform, customer_acquisition_cost, conversion_rate)
VALUES ('Organic Search', 'SEO', 'Google Organic', 8.00, 7.85);

INSERT INTO MARKETING_CHANNELS (channel_name, channel_type, specific_platform, customer_acquisition_cost, conversion_rate)
VALUES ('Email Newsletter', 'Email', 'Mailchimp', 5.25, 9.40);

INSERT INTO MARKETING_CHANNELS (channel_name, channel_type, specific_platform, customer_acquisition_cost, conversion_rate)
VALUES ('YouTube Display Ads', 'Display', 'YouTube', 22.50, 4.20);

INSERT INTO MARKETING_CHANNELS (channel_name, channel_type, specific_platform, customer_acquisition_cost, conversion_rate)
VALUES ('Anime Convention Referral', 'Referral', 'Denver Anime Con', 35.00, 14.60);

INSERT INTO MARKETING_CHANNELS (channel_name, channel_type, specific_platform, customer_acquisition_cost, conversion_rate)
VALUES ('K-pop Event Referral', 'Referral', 'Denver K-Pop Festival', 30.00, 15.20);

INSERT INTO MARKETING_CHANNELS (channel_name, channel_type, specific_platform, customer_acquisition_cost, conversion_rate)
VALUES ('University Direct Marketing', 'Direct', 'CU Denver Campus', 7.50, 5.80);

-- PROMOTIONS table (UPDATED - Changed to K-pop/Anime merchandise focus)
INSERT INTO PROMOTIONS (promotion_name, description, start_date, end_date, discount_amount, discount_type, platform, kpop_anime_reference, is_gift_card_promo, promotion_type, min_purchase)
VALUES ('BTS Army Special', 'Get 15% off all BTS merchandise for ARMY members!', TO_DATE('2023-06-01', 'YYYY-MM-DD'), TO_DATE('2023-08-31', 'YYYY-MM-DD'), 15, 'percentage', 'both', 'BTS', 0, 'discount', 50.00);

INSERT INTO PROMOTIONS (promotion_name, description, start_date, end_date, discount_amount, discount_type, platform, kpop_anime_reference, is_gift_card_promo, promotion_type, min_purchase)
VALUES ('Anime Figure Bundle', 'Buy 3 anime figures, get 1 free!', TO_DATE('2023-07-15', 'YYYY-MM-DD'), TO_DATE('2023-07-17', 'YYYY-MM-DD'), 25, 'percentage', 'both', 'Multiple Anime Series', 0, 'bundle', 100.00);

INSERT INTO PROMOTIONS (promotion_name, description, start_date, end_date, discount_amount, discount_type, platform, kpop_anime_reference, is_gift_card_promo, promotion_type, min_purchase)
VALUES ('Online Exclusive Deal', '$10 off your first online order!', TO_DATE('2023-06-15', 'YYYY-MM-DD'), TO_DATE('2023-09-15', 'YYYY-MM-DD'), 10, 'fixed', 'online', NULL, 0, 'discount', 30.00);

INSERT INTO PROMOTIONS (promotion_name, description, start_date, end_date, discount_amount, discount_type, platform, kpop_anime_reference, is_gift_card_promo, promotion_type, min_purchase)
VALUES ('Gift Card Bonus', 'Get a $10 bonus when you purchase a $100 gift card', TO_DATE('2023-07-01', 'YYYY-MM-DD'), TO_DATE('2023-08-01', 'YYYY-MM-DD'), 10, 'fixed', 'both', NULL, 1, 'offer', 100.00);

INSERT INTO PROMOTIONS (promotion_name, description, start_date, end_date, discount_amount, discount_type, platform, kpop_anime_reference, is_gift_card_promo, promotion_type, min_purchase)
VALUES ('Back to School Discount', '10% off all merchandise for students', TO_DATE('2023-08-15', 'YYYY-MM-DD'), TO_DATE('2023-09-15', 'YYYY-MM-DD'), 10, 'percentage', 'in-store', NULL, 0, 'discount', 25.00);

INSERT INTO PROMOTIONS (promotion_name, description, start_date, end_date, discount_amount, discount_type, platform, kpop_anime_reference, is_gift_card_promo, promotion_type, min_purchase)
VALUES ('Blackpink Special Week', 'Special pricing on all Blackpink merchandise', TO_DATE('2023-09-01', 'YYYY-MM-DD'), TO_DATE('2023-09-07', 'YYYY-MM-DD'), 20, 'percentage', 'both', 'Blackpink', 0, 'discount', 40.00);

INSERT INTO PROMOTIONS (promotion_name, description, start_date, end_date, discount_amount, discount_type, platform, kpop_anime_reference, is_gift_card_promo, promotion_type, min_purchase)
VALUES ('Subscription Sign-up Special', 'First month 50% off when you sign up for subscription box', TO_DATE('2023-07-01', 'YYYY-MM-DD'), TO_DATE('2023-10-01', 'YYYY-MM-DD'), 50, 'percentage', 'online', NULL, 0, 'discount', 0.00);

INSERT INTO PROMOTIONS (promotion_name, description, start_date, end_date, discount_amount, discount_type, platform, kpop_anime_reference, is_gift_card_promo, promotion_type, min_purchase)
VALUES ('Holiday Gift Bundle', 'Special holiday gift pack with assorted K-pop/Anime items', TO_DATE('2023-11-15', 'YYYY-MM-DD'), TO_DATE('2023-12-25', 'YYYY-MM-DD'), 25, 'fixed', 'both', NULL, 0, 'bundle', 75.00);

INSERT INTO PROMOTIONS (promotion_name, description, start_date, end_date, discount_amount, discount_type, platform, kpop_anime_reference, is_gift_card_promo, promotion_type, min_purchase)
VALUES ('Naruto Fan Special', 'Limited time offerings of Naruto themed merchandise', TO_DATE('2023-10-01', 'YYYY-MM-DD'), TO_DATE('2023-10-15', 'YYYY-MM-DD'), 15, 'percentage', 'both', 'Naruto', 0, 'discount', 35.00);

INSERT INTO PROMOTIONS (promotion_name, description, start_date, end_date, discount_amount, discount_type, platform, kpop_anime_reference, is_gift_card_promo, promotion_type, min_purchase)
VALUES ('Loyalty Member Month', 'Double points for all loyalty members this month', TO_DATE('2023-08-01', 'YYYY-MM-DD'), TO_DATE('2023-08-31', 'YYYY-MM-DD'), 0, 'percentage', 'both', NULL, 0, 'offer', 0.00);

-- PRODUCTS table (CORRECTED - Updated categories, origins, and products for K-pop/Anime merchandise)
INSERT INTO PRODUCTS (product_name, description, category, origin, base_price, seasonal, limited_edition, kpop_anime_tie_in, online_exclusive, in_store_exclusive, min_inventory_level)
VALUES ('BTS Love Yourself Album', 'Official BTS Love Yourself: Tear album with photo cards and poster', 'K-pop Albums', 'South Korea', 24.99, 0, 0, 'BTS', 0, 0, 20);

INSERT INTO PRODUCTS (product_name, description, category, origin, base_price, seasonal, limited_edition, kpop_anime_tie_in, online_exclusive, in_store_exclusive, min_inventory_level)
VALUES ('Blackpink Official Lightstick', 'Official Blackpink concert lightstick with Bluetooth connectivity', 'Merchandise', 'South Korea', 65.00, 0, 0, 'Blackpink', 0, 0, 15);

INSERT INTO PRODUCTS (product_name, description, category, origin, base_price, limited_edition, kpop_anime_tie_in, online_exclusive, in_store_exclusive, min_inventory_level)
VALUES ('Naruto Uzumaki Figure', 'Premium 6-inch Naruto Uzumaki action figure with accessories', 'Anime Figures', 'Japan', 45.99, 1, 'Naruto', 0, 0, 10);

INSERT INTO PRODUCTS (product_name, description, category, origin, base_price, seasonal, kpop_anime_tie_in, online_exclusive, in_store_exclusive, min_inventory_level)
VALUES ('Stray Kids Keychain Set', 'Set of 8 member keychains from Stray Kids', 'Accessories', 'South Korea', 18.99, 0, 'Stray Kids', 0, 0, 30);

INSERT INTO PRODUCTS (product_name, description, category, origin, base_price, limited_edition, kpop_anime_tie_in, online_exclusive, in_store_exclusive, min_inventory_level)
VALUES ('Attack on Titan Poster Set', 'Limited edition poster set featuring main characters', 'Collectibles', 'Japan', 29.99, 1, 'Attack on Titan', 0, 0, 25);

INSERT INTO PRODUCTS (product_name, description, category, origin, base_price, seasonal, kpop_anime_tie_in, online_exclusive, in_store_exclusive, min_inventory_level)
VALUES ('TWICE Official T-Shirt', 'Official TWICE concert tour t-shirt in multiple sizes', 'Apparel', 'South Korea', 32.00, 0, 'TWICE', 0, 0, 40);

INSERT INTO PRODUCTS (product_name, description, category, origin, base_price, limited_edition, kpop_anime_tie_in, online_exclusive, in_store_exclusive, min_inventory_level)
VALUES ('Dragon Ball Z Collectible Cards', 'Premium Dragon Ball Z trading card booster pack', 'Collectibles', 'Japan', 15.99, 1, 'Dragon Ball Z', 0, 0, 50);

INSERT INTO PRODUCTS (product_name, description, category, origin, base_price, seasonal, kpop_anime_tie_in, online_exclusive, in_store_exclusive, min_inventory_level)
VALUES ('NewJeans Phone Case', 'Official NewJeans smartphone case for iPhone and Samsung', 'Accessories', 'South Korea', 22.50, 0, 'NewJeans', 1, 0, 35);

INSERT INTO PRODUCTS (product_name, description, category, origin, base_price, limited_edition, kpop_anime_tie_in, online_exclusive, in_store_exclusive, min_inventory_level)
VALUES ('Demon Slayer Sword Replica', 'High-quality replica of Tanjiro''s sword from Demon Slayer', 'Collectibles', 'Japan', 89.99, 1, 'Demon Slayer', 0, 0, 8);

INSERT INTO PRODUCTS (product_name, description, category, origin, base_price, kpop_anime_tie_in, online_exclusive, in_store_exclusive, min_inventory_level)
VALUES ('ITZY Hoodie', 'Official ITZY oversized hoodie in black and pink', 'Apparel', 'South Korea', 55.00, 'ITZY', 0, 0, 25);

INSERT INTO PRODUCTS (product_name, description, category, origin, base_price, limited_edition, kpop_anime_tie_in, online_exclusive, in_store_exclusive, min_inventory_level)
VALUES ('One Piece Luffy Figure', 'Premium Monkey D. Luffy figure in Gear 5 transformation', 'Anime Figures', 'Japan', 68.99, 1, 'One Piece', 1, 0, 12);

INSERT INTO PRODUCTS (product_name, description, category, origin, base_price, kpop_anime_tie_in, online_exclusive, in_store_exclusive, min_inventory_level)
VALUES ('BTS Map of the Soul Album', 'BTS Map of the Soul: 7 album with exclusive photo book', 'K-pop Albums', 'South Korea', 27.99, 'BTS', 0, 0, 30);

-- INVENTORY table (CORRECTED - Updated storage requirements for merchandise)
INSERT INTO INVENTORY (product_id, current_stock, reorder_point, last_restock_date, expected_arrival, storage_requirements, min_stock_level, max_stock_level)
VALUES (1, 45, 25, SYSDATE-7, NULL, 'Keep in original packaging, room temperature', 20, 100);

INSERT INTO INVENTORY (product_id, current_stock, reorder_point, last_restock_date, expected_arrival, storage_requirements, min_stock_level, max_stock_level)
VALUES (2, 30, 20, SYSDATE-5, NULL, 'Store in original box, handle with care', 15, 80);

INSERT INTO INVENTORY (product_id, current_stock, reorder_point, last_restock_date, expected_arrival, storage_requirements, min_stock_level, max_stock_level)
VALUES (3, 25, 15, SYSDATE-3, NULL, 'Fragile - handle with extreme care, original packaging required', 10, 60);

INSERT INTO INVENTORY (product_id, current_stock, reorder_point, last_restock_date, expected_arrival, storage_requirements, min_stock_level, max_stock_level)
VALUES (4, 75, 35, SYSDATE-10, NULL, 'Small items - secure storage to prevent loss', 30, 150);

INSERT INTO INVENTORY (product_id, current_stock, reorder_point, last_restock_date, expected_arrival, storage_requirements, min_stock_level, max_stock_level)
VALUES (5, 40, 30, SYSDATE-2, NULL, 'Store flat to prevent creasing, dry environment', 25, 90);

INSERT INTO INVENTORY (product_id, current_stock, reorder_point, last_restock_date, expected_arrival, storage_requirements, min_stock_level, max_stock_level)
VALUES (6, 50, 45, SYSDATE-6, NULL, 'Hang or fold neatly, separated by size', 40, 120);

INSERT INTO INVENTORY (product_id, current_stock, reorder_point, last_restock_date, expected_arrival, storage_requirements, min_stock_level, max_stock_level)
VALUES (7, 85, 55, SYSDATE-1, NULL, 'Keep in sealed packaging to maintain mint condition', 50, 200);

INSERT INTO INVENTORY (product_id, current_stock, reorder_point, last_restock_date, expected_arrival, storage_requirements, min_stock_level, max_stock_level)
VALUES (8, 42, 40, SYSDATE-8, SYSDATE+2, 'Small electronic accessories - anti-static storage', 35, 100);

INSERT INTO INVENTORY (product_id, current_stock, reorder_point, last_restock_date, expected_arrival, storage_requirements, min_stock_level, max_stock_level)
VALUES (9, 12, 10, SYSDATE-4, NULL, 'High-value items - secure locked storage required', 8, 30);

INSERT INTO INVENTORY (product_id, current_stock, reorder_point, last_restock_date, expected_arrival, storage_requirements, min_stock_level, max_stock_level)
VALUES (10, 35, 30, SYSDATE-9, NULL, 'Apparel storage - separated by size and color', 25, 80);

INSERT INTO INVENTORY (product_id, current_stock, reorder_point, last_restock_date, expected_arrival, storage_requirements, min_stock_level, max_stock_level)
VALUES (11, 18, 15, SYSDATE-2, SYSDATE+5, 'Fragile collectible - climate controlled storage', 12, 40);

INSERT INTO INVENTORY (product_id, current_stock, reorder_point, last_restock_date, expected_arrival, storage_requirements, min_stock_level, max_stock_level)
VALUES (12, 55, 35, SYSDATE-5, NULL, 'Keep in original packaging, room temperature', 30, 120);

-- SUBSCRIPTIONS table (CORRECTED - Fixed column name billing_cycle_months)
INSERT INTO SUBSCRIPTIONS (customer_id, start_date, next_delivery_date, subscription_status, monthly_price, billing_cycle_months, subscription_type, is_gift, auto_renewal, delivery_address)
VALUES (1, SYSDATE-60, SYSDATE+10, 'Active', 35.00, 1, 'Standard', 0, 1, '123 Cherry St, Denver, CO 80202');

INSERT INTO SUBSCRIPTIONS (customer_id, start_date, next_delivery_date, subscription_status, monthly_price, billing_cycle_months, subscription_type, is_gift, auto_renewal, delivery_address)
VALUES (3, SYSDATE-45, SYSDATE+5, 'Active', 55.00, 1, 'Premium', 0, 1, '789 Pine Blvd, Boulder, CO 80301');

INSERT INTO SUBSCRIPTIONS (customer_id, start_date, next_delivery_date, subscription_status, monthly_price, billing_cycle_months, subscription_type, is_gift, auto_renewal, delivery_address)
VALUES (5, SYSDATE-90, SYSDATE+15, 'Paused', 35.00, 1, 'Standard', 0, 1, '202 Elm St, Aurora, CO 80010');

INSERT INTO SUBSCRIPTIONS (customer_id, start_date, next_delivery_date, subscription_status, monthly_price, billing_cycle_months, subscription_type, is_gift, auto_renewal, delivery_address)
VALUES (6, SYSDATE-120, SYSDATE+3, 'Active', 55.00, 1, 'Premium', 0, 1, '303 Birch Ave, Lakewood, CO 80215');

INSERT INTO SUBSCRIPTIONS (customer_id, start_date, next_delivery_date, subscription_status, monthly_price, billing_cycle_months, subscription_type, is_gift, auto_renewal, delivery_address)
VALUES (8, SYSDATE-30, SYSDATE+20, 'Active', 35.00, 1, 'Standard', 0, 1, '505 Cedar Dr, Boulder, CO 80303');

INSERT INTO SUBSCRIPTIONS (customer_id, start_date, next_delivery_date, subscription_status, monthly_price, billing_cycle_months, subscription_type, is_gift, auto_renewal, delivery_address)
VALUES (2, SYSDATE-150, SYSDATE+7, 'Canceled', 55.00, 1, 'Premium', 0, 0, '456 Oak Ave, Denver, CO 80203');

INSERT INTO SUBSCRIPTIONS (customer_id, start_date, next_delivery_date, subscription_status, monthly_price, billing_cycle_months, subscription_type, is_gift, auto_renewal, delivery_address)
VALUES (9, SYSDATE-75, SYSDATE+12, 'Active', 35.00, 1, 'Standard', 0, 1, '606 Spruce Ave, Denver, CO 80206');

INSERT INTO SUBSCRIPTIONS (customer_id, start_date, next_delivery_date, subscription_status, monthly_price, billing_cycle_months, subscription_type, is_gift, auto_renewal, delivery_address)
VALUES (4, SYSDATE-100, SYSDATE+4, 'Active', 55.00, 2, 'Premium', 1, 0, '101 Maple Dr, Denver, CO 80202');

INSERT INTO SUBSCRIPTIONS (customer_id, start_date, next_delivery_date, subscription_status, monthly_price, billing_cycle_months, subscription_type, is_gift, auto_renewal, delivery_address)
VALUES (10, SYSDATE-110, SYSDATE+18, 'Paused', 35.00, 1, 'Standard', 0, 1, '707 Aspen St, Fort Collins, CO 80525');

INSERT INTO SUBSCRIPTIONS (customer_id, start_date, next_delivery_date, subscription_status, monthly_price, billing_cycle_months, subscription_type, is_gift, auto_renewal, delivery_address)
VALUES (7, SYSDATE-85, SYSDATE+9, 'Active', 35.00, 1, 'Standard', 0, 1, '404 Walnut Blvd, Denver, CO 80205');

-- CUSTOMER_PREFERENCES table (UPDATED for K-pop/Anime preferences)
INSERT INTO CUSTOMER_PREFERENCES (customer_id, flavor_preference, product_category_preference, subscription_interest, kpop_anime_interest)
VALUES (1, 'BTS merchandise, Limited editions', 'K-pop Albums, Merchandise', 1, 'BTS, Blackpink, Stray Kids');

INSERT INTO CUSTOMER_PREFERENCES (customer_id, flavor_preference, product_category_preference, subscription_interest, kpop_anime_interest)
VALUES (2, 'Anime figures, Collectibles', 'Anime Figures, Collectibles', 1, 'Naruto, One Piece, Attack on Titan');

INSERT INTO CUSTOMER_PREFERENCES (customer_id, flavor_preference, product_category_preference, subscription_interest, kpop_anime_interest)
VALUES (3, 'Girl group merchandise, Accessories', 'Accessories, Apparel', 1, 'TWICE, Blackpink, NewJeans');

INSERT INTO CUSTOMER_PREFERENCES (customer_id, flavor_preference, product_category_preference, subscription_interest, kpop_anime_interest)
VALUES (4, 'Shonen anime, Action figures', 'Anime Figures, Collectibles', 1, 'Dragon Ball Z, One Piece, Demon Slayer');

INSERT INTO CUSTOMER_PREFERENCES (customer_id, flavor_preference, product_category_preference, subscription_interest, kpop_anime_interest)
VALUES (5, 'Girl group albums, Fashion items', 'K-pop Albums, Apparel', 1, 'Blackpink, ITZY, NewJeans');

INSERT INTO CUSTOMER_PREFERENCES (customer_id, flavor_preference, product_category_preference, subscription_interest, kpop_anime_interest)
VALUES (6, 'Boy group merchandise, Albums', 'K-pop Albums, Merchandise', 1, 'BTS, Stray Kids, ENHYPEN');

INSERT INTO CUSTOMER_PREFERENCES (customer_id, flavor_preference, product_category_preference, subscription_interest, kpop_anime_interest)
VALUES (7, 'Anime collectibles, Figures', 'Anime Figures, Collectibles', 0, 'Naruto, Attack on Titan');

INSERT INTO CUSTOMER_PREFERENCES (customer_id, flavor_preference, product_category_preference, subscription_interest, kpop_anime_interest)
VALUES (8, 'K-pop accessories, Albums', 'Accessories, K-pop Albums', 1, 'TWICE, ITZY, Stray Kids');

INSERT INTO CUSTOMER_PREFERENCES (customer_id, flavor_preference, product_category_preference, subscription_interest, kpop_anime_interest)
VALUES (9, 'Girl group items, Apparel', 'Apparel, Accessories', 1, 'Blackpink, TWICE, NewJeans');

INSERT INTO CUSTOMER_PREFERENCES (customer_id, flavor_preference, product_category_preference, subscription_interest, kpop_anime_interest)
VALUES (10, 'Anime and K-pop mix, Limited items', 'Collectibles, K-pop Albums', 1, 'BTS, One Piece, Demon Slayer');

-- GIFT_CARDS table (NO CHANGES NEEDED)
INSERT INTO GIFT_CARDS (issuer_customer_id, recipient_customer_id, gift_card_code, initial_amount, current_balance, issue_date, expiry_date, is_redeemed)
VALUES (1, 3, 'GC-2023-1001', 50.00, 50.00, SYSDATE-30, ADD_MONTHS(SYSDATE, 12), 0);

INSERT INTO GIFT_CARDS (issuer_customer_id, recipient_customer_id, gift_card_code, initial_amount, current_balance, issue_date, expiry_date, is_redeemed)
VALUES (2, 5, 'GC-2023-1002', 25.00, 15.75, SYSDATE-45, ADD_MONTHS(SYSDATE, 12), 0);

INSERT INTO GIFT_CARDS (issuer_customer_id, recipient_customer_id, gift_card_code, initial_amount, current_balance, issue_date, expiry_date, is_redeemed)
VALUES (6, 8, 'GC-2023-1003', 100.00, 100.00, SYSDATE-60, ADD_MONTHS(SYSDATE, 12), 0);

INSERT INTO GIFT_CARDS (issuer_customer_id, recipient_customer_id, gift_card_code, initial_amount, current_balance, issue_date, expiry_date, is_redeemed)
VALUES (3, 7, 'GC-2023-1004', 75.00, 0.00, SYSDATE-90, ADD_MONTHS(SYSDATE, 12), 1);

INSERT INTO GIFT_CARDS (issuer_customer_id, recipient_customer_id, gift_card_code, initial_amount, current_balance, issue_date, expiry_date, is_redeemed)
VALUES (9, 4, 'GC-2023-1005', 50.00, 23.50, SYSDATE-75, ADD_MONTHS(SYSDATE, 12), 0);

INSERT INTO GIFT_CARDS (issuer_customer_id, recipient_customer_id, gift_card_code, initial_amount, current_balance, issue_date, expiry_date, is_redeemed)
VALUES (5, 10, 'GC-2023-1006', 30.00, 30.00, SYSDATE-15, ADD_MONTHS(SYSDATE, 12), 0);

INSERT INTO GIFT_CARDS (issuer_customer_id, recipient_customer_id, gift_card_code, initial_amount, current_balance, issue_date, expiry_date, is_redeemed)
VALUES (8, 2, 'GC-2023-1007', 40.00, 18.25, SYSDATE-120, ADD_MONTHS(SYSDATE, 12), 0);

INSERT INTO GIFT_CARDS (issuer_customer_id, recipient_customer_id, gift_card_code, initial_amount, current_balance, issue_date, expiry_date, is_redeemed)
VALUES (7, 1, 'GC-2023-1008', 25.00, 0.00, SYSDATE-150, ADD_MONTHS(SYSDATE, 12), 1);

INSERT INTO GIFT_CARDS (issuer_customer_id, recipient_customer_id, gift_card_code, initial_amount, current_balance, issue_date, expiry_date, is_redeemed)
VALUES (4, 6, 'GC-2023-1009', 60.00, 60.00, SYSDATE-20, ADD_MONTHS(SYSDATE, 12), 0);

INSERT INTO GIFT_CARDS (issuer_customer_id, recipient_customer_id, gift_card_code, initial_amount, current_balance, issue_date, expiry_date, is_redeemed)
VALUES (10, 9, 'GC-2023-1010', 50.00, 35.50, SYSDATE-45, ADD_MONTHS(SYSDATE, 12), 0);

-- ORDERS table (CORRECTED - Added required financial breakdown fields)
INSERT INTO ORDERS (customer_id, order_date, subtotal, tax_amount, shipping_cost, discount_amount, total_amount, order_status, payment_method, marketing_channel_id, platform, is_gift, gift_card_id, shipping_address, billing_address)
VALUES (1, SYSDATE-25, 16.87, 1.35, 5.99, 5.71, 18.50, 'Delivered', 'Credit Card', 3, 'online', 0, NULL, '123 Cherry St, Denver, CO 80202', '123 Cherry St, Denver, CO 80202');

INSERT INTO ORDERS (customer_id, order_date, subtotal, tax_amount, shipping_cost, discount_amount, total_amount, order_status, payment_method, marketing_channel_id, platform, is_gift, gift_card_id, shipping_address, billing_address)
VALUES (3, SYSDATE-20, 24.98, 2.00, 7.99, 7.22, 27.75, 'Delivered', 'Credit Card', 1, 'online', 0, NULL, '789 Pine Blvd, Boulder, CO 80301', '789 Pine Blvd, Boulder, CO 80301');

INSERT INTO ORDERS (customer_id, order_date, subtotal, tax_amount, shipping_cost, discount_amount, total_amount, order_status, payment_method, marketing_channel_id, platform, is_gift, gift_card_id, shipping_address, billing_address)
VALUES (5, SYSDATE-18, 8.25, 0.66, 5.99, 5.65, 9.25, 'Delivered', 'PayPal', 4, 'online', 0, NULL, '202 Elm St, Aurora, CO 80010', '202 Elm St, Aurora, CO 80010');

INSERT INTO ORDERS (customer_id, order_date, subtotal, tax_amount, shipping_cost, discount_amount, total_amount, order_status, payment_method, marketing_channel_id, platform, is_gift, gift_card_id, shipping_address, billing_address)
VALUES (2, SYSDATE-15, 11.50, 0.92, 0.00, 0.00, 12.42, 'Delivered', 'Credit Card', 2, 'online', 1, NULL, '456 Oak Ave, Denver, CO 80203', '456 Oak Ave, Denver, CO 80203');

INSERT INTO ORDERS (customer_id, order_date, subtotal, tax_amount, shipping_cost, discount_amount, total_amount, order_status, payment_method, marketing_channel_id, platform, is_gift, gift_card_id, shipping_address, billing_address)
VALUES (7, SYSDATE-10, 22.00, 1.76, 0.00, 1.76, 22.00, 'Delivered', 'Cash', NULL, 'in-store', 0, NULL, NULL, NULL);

INSERT INTO ORDERS (customer_id, order_date, subtotal, tax_amount, shipping_cost, discount_amount, total_amount, order_status, payment_method, marketing_channel_id, platform, is_gift, gift_card_id, shipping_address, billing_address)
VALUES (4, SYSDATE-7, 30.95, 2.48, 7.99, 7.17, 34.25, 'Shipped', 'Gift Card', NULL, 'online', 0, 4, '101 Maple Dr, Denver, CO 80202', '101 Maple Dr, Denver, CO 80202');

INSERT INTO ORDERS (customer_id, order_date, subtotal, tax_amount, shipping_cost, discount_amount, total_amount, order_status, payment_method, marketing_channel_id, platform, is_gift, gift_card_id, shipping_address, billing_address)
VALUES (9, SYSDATE-5, 14.42, 1.15, 5.99, 4.81, 16.75, 'Processing', 'Credit Card', 5, 'online', 0, NULL, '606 Spruce Ave, Denver, CO 80206', '606 Spruce Ave, Denver, CO 80206');

INSERT INTO ORDERS (customer_id, order_date, subtotal, tax_amount, shipping_cost, discount_amount, total_amount, order_status, payment_method, marketing_channel_id, platform, is_gift, gift_card_id, shipping_address, billing_address)
VALUES (6, SYSDATE-3, 40.00, 3.20, 7.99, 6.19, 45.00, 'Processing', 'Credit Card', 1, 'online', 1, NULL, '303 Birch Ave, Lakewood, CO 80215', '303 Birch Ave, Lakewood, CO 80215');

INSERT INTO ORDERS (customer_id, order_date, subtotal, tax_amount, shipping_cost, discount_amount, total_amount, order_status, payment_method, marketing_channel_id, platform, is_gift, gift_card_id, shipping_address, billing_address)
VALUES (8, SYSDATE-2, 8.50, 0.68, 0.00, 0.68, 8.50, 'Processing', 'Cash', NULL, 'in-store', 0, NULL, NULL, NULL);

INSERT INTO ORDERS (customer_id, order_date, subtotal, tax_amount, shipping_cost, discount_amount, total_amount, order_status, payment_method, marketing_channel_id, platform, is_gift, gift_card_id, shipping_address, billing_address)
VALUES (10, SYSDATE-1, 17.50, 1.40, 5.99, 5.64, 19.25, 'Pending', 'Credit Card', 4, 'online', 0, NULL, '707 Aspen St, Fort Collins, CO 80525', '707 Aspen St, Fort Collins, CO 80525');

-- FEEDBACK table (CORRECTED - Removed manual FEEDBACK_ID, added review_text and is_verified_purchase)
INSERT INTO FEEDBACK (customer_id, order_id, product_id, rating, review_text, feedback_date, is_verified_purchase)
VALUES (1, 1, 1, 5, 'Amazing BTS album! Great quality and fast shipping.', SYSDATE-20, 1);

INSERT INTO FEEDBACK (customer_id, order_id, product_id, rating, review_text, feedback_date, is_verified_purchase)
VALUES (3, 2, 3, 4, 'Beautiful Naruto figure, very detailed craftsmanship.', SYSDATE-15, 1);

INSERT INTO FEEDBACK (customer_id, order_id, product_id, rating, review_text, feedback_date, is_verified_purchase)
VALUES (5, 3, 4, 3, 'Keychains are nice but smaller than expected.', SYSDATE-12, 1);

INSERT INTO FEEDBACK (customer_id, order_id, product_id, rating, review_text, feedback_date, is_verified_purchase)
VALUES (2, 4, 6, 5, 'Love this TWICE t-shirt! Perfect fit and quality material.', SYSDATE-10, 1);

INSERT INTO FEEDBACK (customer_id, order_id, product_id, rating, review_text, feedback_date, is_verified_purchase)
VALUES (7, 5, 2, 4, 'Blackpink lightstick works perfectly at concerts!', SYSDATE-8, 1);

INSERT INTO FEEDBACK (customer_id, order_id, product_id, rating, review_text, feedback_date, is_verified_purchase)
VALUES (4, 6, 7, 5, 'Dragon Ball cards are in mint condition, great for collecting.', SYSDATE-5, 1);

INSERT INTO FEEDBACK (customer_id, order_id, product_id, rating, review_text, feedback_date, is_verified_purchase)
VALUES (9, 7, 5, 4, 'Attack on Titan posters look amazing on my wall.', SYSDATE-3, 1);

INSERT INTO FEEDBACK (customer_id, order_id, product_id, rating, review_text, feedback_date, is_verified_purchase)
VALUES (6, 8, 1, 5, 'Second BTS album purchase, always satisfied with quality.', SYSDATE-1, 1);

INSERT INTO FEEDBACK (customer_id, order_id, product_id, rating, review_text, feedback_date, is_verified_purchase)
VALUES (1, 1, 2, 4, 'Lightstick is great quality, batteries last long.', SYSDATE-19, 1);

INSERT INTO FEEDBACK (customer_id, order_id, product_id, rating, review_text, feedback_date, is_verified_purchase)
VALUES (3, 2, 8, 5, 'NewJeans phone case fits perfectly and looks stylish.', SYSDATE-14, 1);

-- ORDER_ITEMS table (CORRECTED - Updated products and prices to match new PRODUCTS table)
INSERT INTO ORDER_ITEMS (order_id, product_id, quantity, unit_price, discount)
VALUES (1, 1, 1, 24.99, 3.75);  -- BTS Album with 15% discount

INSERT INTO ORDER_ITEMS (order_id, product_id, quantity, unit_price, discount)
VALUES (1, 4, 1, 18.99, 2.85);  -- Stray Kids Keychain with 15% discount

INSERT INTO ORDER_ITEMS (order_id, product_id, quantity, unit_price, discount)
VALUES (2, 3, 1, 45.99, 6.90);  -- Naruto Figure with 15% discount

INSERT INTO ORDER_ITEMS (order_id, product_id, quantity, unit_price, discount)
VALUES (2, 8, 1, 22.50, 3.38);  -- NewJeans Phone Case with 15% discount

INSERT INTO ORDER_ITEMS (order_id, product_id, quantity, unit_price, discount)
VALUES (3, 4, 2, 18.99, 5.70);  -- Stray Kids Keychain Set (2x) with discount

INSERT INTO ORDER_ITEMS (order_id, product_id, quantity, unit_price, discount)
VALUES (4, 6, 1, 32.00, 0.00);  -- TWICE T-Shirt

INSERT INTO ORDER_ITEMS (order_id, product_id, quantity, unit_price, discount)
VALUES (4, 4, 1, 18.99, 0.00);  -- Stray Kids Keychain

INSERT INTO ORDER_ITEMS (order_id, product_id, quantity, unit_price, discount)
VALUES (5, 2, 1, 65.00, 0.00);  -- Blackpink Lightstick

INSERT INTO ORDER_ITEMS (order_id, product_id, quantity, unit_price, discount)
VALUES (5, 5, 1, 29.99, 1.76);  -- Attack on Titan Poster with discount

INSERT INTO ORDER_ITEMS (order_id, product_id, quantity, unit_price, discount)
VALUES (6, 7, 2, 15.99, 0.00);  -- Dragon Ball Cards (2 packs)

INSERT INTO ORDER_ITEMS (order_id, product_id, quantity, unit_price, discount)
VALUES (6, 12, 1, 27.99, 7.17);  -- BTS Map of Soul Album with discount

INSERT INTO ORDER_ITEMS (order_id, product_id, quantity, unit_price, discount)
VALUES (7, 5, 1, 29.99, 4.50);  -- Attack on Titan Poster with discount

INSERT INTO ORDER_ITEMS (order_id, product_id, quantity, unit_price, discount)
VALUES (7, 4, 1, 18.99, 2.85);  -- Stray Kids Keychain with discount

INSERT INTO ORDER_ITEMS (order_id, product_id, quantity, unit_price, discount)
VALUES (8, 1, 1, 24.99, 3.75);  -- BTS Album with discount

INSERT INTO ORDER_ITEMS (order_id, product_id, quantity, unit_price, discount)
VALUES (8, 6, 1, 32.00, 4.80);  -- TWICE T-Shirt with discount

INSERT INTO ORDER_ITEMS (order_id, product_id, quantity, unit_price, discount)
VALUES (9, 10, 1, 55.00, 0.00);  -- ITZY Hoodie

INSERT INTO ORDER_ITEMS (order_id, product_id, quantity, unit_price, discount)
VALUES (9, 4, 1, 18.99, 0.68);  -- Stray Kids Keychain with small discount

INSERT INTO ORDER_ITEMS (order_id, product_id, quantity, unit_price, discount)
VALUES (10, 3, 1, 45.99, 5.64);  -- Naruto Figure with discount

INSERT INTO ORDER_ITEMS (order_id, product_id, quantity, unit_price, discount)
VALUES (11, 8, 1, 22.50, 0.00);  -- NewJeans Phone Case

-- SUBSCRIPTION_ITEMS table (CORRECTED - Using delivery_date instead of month/year)
INSERT INTO SUBSCRIPTION_ITEMS (subscription_id, product_id, delivery_date, quantity, delivery_status)
VALUES (1, 1, TO_DATE('2023-06-15', 'YYYY-MM-DD'), 1, 'Delivered');

INSERT INTO SUBSCRIPTION_ITEMS (subscription_id, product_id, delivery_date, quantity, delivery_status)
VALUES (1, 4, TO_DATE('2023-06-15', 'YYYY-MM-DD'), 1, 'Delivered');

INSERT INTO SUBSCRIPTION_ITEMS (subscription_id, product_id, delivery_date, quantity, delivery_status)
VALUES (2, 3, TO_DATE('2023-06-20', 'YYYY-MM-DD'), 1, 'Delivered');

INSERT INTO SUBSCRIPTION_ITEMS (subscription_id, product_id, delivery_date, quantity, delivery_status)
VALUES (2, 6, TO_DATE('2023-06-20', 'YYYY-MM-DD'), 1, 'Delivered');

INSERT INTO SUBSCRIPTION_ITEMS (subscription_id, product_id, delivery_date, quantity, delivery_status)
VALUES (3, 5, TO_DATE('2023-06-25', 'YYYY-MM-DD'), 1, 'Shipped');

INSERT INTO SUBSCRIPTION_ITEMS (subscription_id, product_id, delivery_date, quantity, delivery_status)
VALUES (4, 1, TO_DATE('2023-07-01', 'YYYY-MM-DD'), 1, 'Planned');

INSERT INTO SUBSCRIPTION_ITEMS (subscription_id, product_id, delivery_date, quantity, delivery_status)
VALUES (4, 7, TO_DATE('2023-07-01', 'YYYY-MM-DD'), 2, 'Planned');

INSERT INTO SUBSCRIPTION_ITEMS (subscription_id, product_id, delivery_date, quantity, delivery_status)
VALUES (5, 2, TO_DATE('2023-07-05', 'YYYY-MM-DD'), 1, 'Planned');

INSERT INTO SUBSCRIPTION_ITEMS (subscription_id, product_id, delivery_date, quantity, delivery_status)
VALUES (5, 8, TO_DATE('2023-07-05', 'YYYY-MM-DD'), 1, 'Planned');

INSERT INTO SUBSCRIPTION_ITEMS (subscription_id, product_id, delivery_date, quantity, delivery_status)
VALUES (7, 12, TO_DATE('2023-07-10', 'YYYY-MM-DD'), 1, 'Planned');

INSERT INTO SUBSCRIPTION_ITEMS (subscription_id, product_id, delivery_date, quantity, delivery_status)
VALUES (7, 6, TO_DATE('2023-07-10', 'YYYY-MM-DD'), 1, 'Planned');

INSERT INTO SUBSCRIPTION_ITEMS (subscription_id, product_id, delivery_date, quantity, delivery_status)
VALUES (8, 3, TO_DATE('2023-07-15', 'YYYY-MM-DD'), 1, 'Planned');

-- ORDER_STATUS_HISTORY table (CORRECTED - Removed manual HISTORY_ID, updated to match order IDs)
INSERT INTO ORDER_STATUS_HISTORY (order_id, previous_status, new_status, updated_by, status_change_date, change_reason)
VALUES (1, NULL, 'Pending', 'SYSTEM', SYSDATE-25, 'Order created');

INSERT INTO ORDER_STATUS_HISTORY (order_id, previous_status, new_status, updated_by, status_change_date, change_reason)
VALUES (1, 'Pending', 'Processing', 'SYSTEM', SYSDATE-25, 'Payment confirmed');

INSERT INTO ORDER_STATUS_HISTORY (order_id, previous_status, new_status, updated_by, status_change_date, change_reason)
VALUES (1, 'Processing', 'Shipped', 'SYSTEM', SYSDATE-24, 'Items shipped via UPS');

INSERT INTO ORDER_STATUS_HISTORY (order_id, previous_status, new_status, updated_by, status_change_date, change_reason)
VALUES (1, 'Shipped', 'Delivered', 'SYSTEM', SYSDATE-23, 'Package delivered successfully');

INSERT INTO ORDER_STATUS_HISTORY (order_id, previous_status, new_status, updated_by, status_change_date, change_reason)
VALUES (2, NULL, 'Pending', 'SYSTEM', SYSDATE-20, 'Order created');

INSERT INTO ORDER_STATUS_HISTORY (order_id, previous_status, new_status, updated_by, status_change_date, change_reason)
VALUES (2, 'Pending', 'Processing', 'SYSTEM', SYSDATE-20, 'Payment confirmed');

INSERT INTO ORDER_STATUS_HISTORY (order_id, previous_status, new_status, updated_by, status_change_date, change_reason)
VALUES (2, 'Processing', 'Shipped', 'SYSTEM', SYSDATE-19, 'Items shipped via FedEx');

INSERT INTO ORDER_STATUS_HISTORY (order_id, previous_status, new_status, updated_by, status_change_date, change_reason)
VALUES (2, 'Shipped', 'Delivered', 'SYSTEM', SYSDATE-18, 'Package delivered successfully');

INSERT INTO ORDER_STATUS_HISTORY (order_id, previous_status, new_status, updated_by, status_change_date, change_reason)
VALUES (3, NULL, 'Pending', 'SYSTEM', SYSDATE-18, 'Order created');

INSERT INTO ORDER_STATUS_HISTORY (order_id, previous_status, new_status, updated_by, status_change_date, change_reason)
VALUES (3, 'Pending', 'Processing', 'SYSTEM', SYSDATE-18, 'Payment confirmed');

-- PRODUCT_PROMOTIONS table (CORRECTED - Removed special_price, added override_discount_amount and dates)
INSERT INTO PRODUCT_PROMOTIONS (product_id, promotion_id, override_discount_amount, effective_start_date, effective_end_date)
VALUES (1, 1, 20.00, TO_DATE('2023-06-01', 'YYYY-MM-DD'), TO_DATE('2023-08-31', 'YYYY-MM-DD'));  -- BTS Album in BTS promotion

INSERT INTO PRODUCT_PROMOTIONS (product_id, promotion_id, override_discount_amount, effective_start_date, effective_end_date)
VALUES (2, 1, 15.00, TO_DATE('2023-06-01', 'YYYY-MM-DD'), TO_DATE('2023-08-31', 'YYYY-MM-DD'));  -- Blackpink Lightstick in BTS promotion

INSERT INTO PRODUCT_PROMOTIONS (product_id, promotion_id, override_discount_amount, effective_start_date, effective_end_date)
VALUES (12, 1, 25.00, TO_DATE('2023-06-01', 'YYYY-MM-DD'), TO_DATE('2023-08-31', 'YYYY-MM-DD'));  -- BTS Map Album in BTS promotion

INSERT INTO PRODUCT_PROMOTIONS (product_id, promotion_id, effective_start_date, effective_end_date)
VALUES (3, 2, TO_DATE('2023-07-15', 'YYYY-MM-DD'), TO_DATE('2023-07-17', 'YYYY-MM-DD'));  -- Naruto Figure in Bundle

INSERT INTO PRODUCT_PROMOTIONS (product_id, promotion_id, effective_start_date, effective_end_date)
VALUES (9, 2, TO_DATE('2023-07-15', 'YYYY-MM-DD'), TO_DATE('2023-07-17', 'YYYY-MM-DD'));  -- Demon Slayer Sword in Bundle

INSERT INTO PRODUCT_PROMOTIONS (product_id, promotion_id, effective_start_date, effective_end_date)
VALUES (11, 2, TO_DATE('2023-07-15', 'YYYY-MM-DD'), TO_DATE('2023-07-17', 'YYYY-MM-DD'));  -- One Piece Figure in Bundle

INSERT INTO PRODUCT_PROMOTIONS (product_id, promotion_id, override_discount_amount, effective_start_date, effective_end_date)
VALUES (1, 3, 12.00, TO_DATE('2023-06-15', 'YYYY-MM-DD'), TO_DATE('2023-09-15', 'YYYY-MM-DD'));  -- BTS Album online exclusive

INSERT INTO PRODUCT_PROMOTIONS (product_id, promotion_id, override_discount_amount, effective_start_date, effective_end_date)
VALUES (4, 3, 8.00, TO_DATE('2023-06-15', 'YYYY-MM-DD'), TO_DATE('2023-09-15', 'YYYY-MM-DD'));  -- Stray Kids Keychain online exclusive

INSERT INTO PRODUCT_PROMOTIONS (product_id, promotion_id, override_discount_amount, effective_start_date, effective_end_date)
VALUES (2, 6, 25.00, TO_DATE('2023-09-01', 'YYYY-MM-DD'), TO_DATE('2023-09-07', 'YYYY-MM-DD'));  -- Blackpink items in Blackpink week

INSERT INTO PRODUCT_PROMOTIONS (product_id, promotion_id, override_discount_amount, effective_start_date, effective_end_date)
VALUES (3, 9, 12.00, TO_DATE('2023-10-01', 'YYYY-MM-DD'), TO_DATE('2023-10-15', 'YYYY-MM-DD'));  -- Naruto in Naruto special

-- CUSTOMER_PROMOTION table (CORRECTED - Updated to use existing customer IDs 1-10)
INSERT INTO CUSTOMER_PROMOTION (customer_id, promotion_id, is_used, date_offered, expiry_date, times_used, usage_limit)
VALUES (1, 1, 1, SYSDATE-30, SYSDATE+30, 1, 2);  -- Customer 1 used BTS promotion

INSERT INTO CUSTOMER_PROMOTION (customer_id, promotion_id, is_used, date_offered, expiry_date, times_used, usage_limit)
VALUES (1, 3, 1, SYSDATE-60, SYSDATE-10, 1, 1);  -- Customer 1 used online exclusive

INSERT INTO CUSTOMER_PROMOTION (customer_id, promotion_id, is_used, date_offered, expiry_date, times_used, usage_limit)
VALUES (2, 2, 0, SYSDATE-20, SYSDATE+40, 0, 1);  -- Customer 2 has anime bundle promo

INSERT INTO CUSTOMER_PROMOTION (customer_id, promotion_id, is_used, date_offered, expiry_date, times_used, usage_limit)
VALUES (3, 6, 0, SYSDATE-15, SYSDATE+15, 0, 1);  -- Customer 3 has Blackpink week promo

INSERT INTO CUSTOMER_PROMOTION (customer_id, promotion_id, is_used, date_offered, expiry_date, times_used, usage_limit)
VALUES (4, 9, 0, SYSDATE-10, SYSDATE+50, 0, 3);  -- Customer 4 has Naruto special promo

INSERT INTO CUSTOMER_PROMOTION (customer_id, promotion_id, is_used, date_offered, expiry_date, times_used, usage_limit)
VALUES (5, 5, 1, SYSDATE-45, SYSDATE-5, 2, 2);  -- Customer 5 used student discount

INSERT INTO CUSTOMER_PROMOTION (customer_id, promotion_id, is_used, date_offered, expiry_date, times_used, usage_limit)
VALUES (6, 1, 0, SYSDATE-30, SYSDATE+30, 1, 2);  -- Customer 6 has BTS promotion

INSERT INTO CUSTOMER_PROMOTION (customer_id, promotion_id, is_used, date_offered, expiry_date, times_used, usage_limit)
VALUES (7, 10, 0, SYSDATE-5, SYSDATE+25, 0, 1);  -- Customer 7 has loyalty member promo

INSERT INTO CUSTOMER_PROMOTION (customer_id, promotion_id, is_used, date_offered, expiry_date, times_used, usage_limit)
VALUES (8, 3, 0, SYSDATE-25, SYSDATE+35, 0, 1);  -- Customer 8 has online exclusive

INSERT INTO CUSTOMER_PROMOTION (customer_id, promotion_id, is_used, date_offered, expiry_date, times_used, usage_limit)
VALUES (9, 7, 0, SYSDATE-40, SYSDATE+20, 0, 1);  -- Customer 9 has subscription special

INSERT INTO CUSTOMER_PROMOTION (customer_id, promotion_id, is_used, date_offered, expiry_date, times_used, usage_limit)
VALUES (10, 4, 1, SYSDATE-50, SYSDATE-15, 1, 1);  -- Customer 10 used gift card bonus

-- Additional entries to show multiple promotions per customer
INSERT INTO CUSTOMER_PROMOTION (customer_id, promotion_id, is_used, date_offered, expiry_date, times_used, usage_limit)
VALUES (1, 5, 0, SYSDATE-15, SYSDATE+45, 0, 1);  -- Customer 1 has student discount

INSERT INTO CUSTOMER_PROMOTION (customer_id, promotion_id, is_used, date_offered, expiry_date, times_used, usage_limit)
VALUES (3, 1, 0, SYSDATE-30, SYSDATE+30, 0, 2);  -- Customer 3 has BTS promotion

INSERT INTO CUSTOMER_PROMOTION (customer_id, promotion_id, is_used, date_offered, expiry_date, times_used, usage_limit)
VALUES (5, 7, 0, SYSDATE-10, SYSDATE+50, 0, 1);  -- Customer 5 has subscription special

INSERT INTO CUSTOMER_PROMOTION (customer_id, promotion_id, is_used, date_offered, expiry_date, times_used, usage_limit)
VALUES (6, 2, 0, SYSDATE-20, SYSDATE+40, 0, 1);  -- Customer 6 has anime bundle

-- Commit all changes
COMMIT;

-- =====================================================
-- VERIFICATION QUERIES - SMOKE TESTS
-- =====================================================

-- Set basic formatting options
SET LINESIZE 200
SET PAGESIZE 1000
SET TRIMOUT ON
SET TRIMSPOOL ON
SET TAB OFF
SET WRAP ON
SET HEADING ON
SET UNDERLINE ON
ALTER SESSION SET NLS_DATE_FORMAT = 'YYYY-MM-DD';

-- Test CUSTOMERS table
PROMPT ===== CUSTOMERS TABLE =====
COLUMN customer_id FORMAT 999999 HEADING 'ID'
COLUMN first_name FORMAT A12 HEADING 'First Name'
COLUMN last_name FORMAT A12 HEADING 'Last Name'
COLUMN email FORMAT A25 HEADING 'Email'
COLUMN loyalty_status FORMAT A10 HEADING 'Status'

SELECT customer_id, first_name, last_name, email, loyalty_points, loyalty_status 
FROM CUSTOMERS ORDER BY customer_id;

-- Test MARKETING_CHANNELS table
PROMPT ===== MARKETING_CHANNELS TABLE =====
COLUMN marketing_channel_id FORMAT 999 HEADING 'ID'
COLUMN channel_name FORMAT A25 HEADING 'Channel Name'
COLUMN channel_type FORMAT A15 HEADING 'Type'
COLUMN conversion_rate FORMAT 990.99 HEADING 'Conv Rate'

SELECT marketing_channel_id, channel_name, channel_type, conversion_rate 
FROM MARKETING_CHANNELS ORDER BY marketing_channel_id;

-- Test PROMOTIONS table
PROMPT ===== PROMOTIONS TABLE =====
COLUMN promotion_id FORMAT 999 HEADING 'ID'
COLUMN promotion_name FORMAT A25 HEADING 'Promotion'
COLUMN discount_amount FORMAT 990.9 HEADING 'Discount'
COLUMN discount_type FORMAT A10 HEADING 'Type'
COLUMN platform FORMAT A8 HEADING 'Platform'

SELECT promotion_id, promotion_name, discount_amount, discount_type, platform 
FROM PROMOTIONS ORDER BY promotion_id;

-- Test PRODUCTS table
PROMPT ===== PRODUCTS TABLE =====
COLUMN product_id FORMAT 999 HEADING 'ID'
COLUMN product_name FORMAT A25 HEADING 'Product Name'
COLUMN category FORMAT A15 HEADING 'Category'
COLUMN origin FORMAT A12 HEADING 'Origin'
COLUMN base_price FORMAT $999.99 HEADING 'Price'
COLUMN kpop_anime_tie_in FORMAT A15 HEADING 'K-Pop/Anime'

SELECT product_id, product_name, category, origin, base_price, kpop_anime_tie_in 
FROM PRODUCTS ORDER BY product_id;

-- Test INVENTORY table
PROMPT ===== INVENTORY TABLE =====
COLUMN inventory_id FORMAT 999 HEADING 'Inv ID'
COLUMN product_id FORMAT 999 HEADING 'Prod ID'
COLUMN current_stock FORMAT 999 HEADING 'Stock'
COLUMN reorder_point FORMAT 999 HEADING 'Reorder'
COLUMN min_stock_level FORMAT 999 HEADING 'Min'
COLUMN max_stock_level FORMAT 999 HEADING 'Max'

SELECT inventory_id, product_id, current_stock, reorder_point, min_stock_level, max_stock_level 
FROM INVENTORY ORDER BY product_id;

-- Test SUBSCRIPTIONS table
PROMPT ===== SUBSCRIPTIONS TABLE =====
COLUMN subscription_id FORMAT 999 HEADING 'Sub ID'
COLUMN customer_id FORMAT 999 HEADING 'Cust ID'
COLUMN subscription_status FORMAT A10 HEADING 'Status'
COLUMN monthly_price FORMAT $99.99 HEADING 'Monthly'
COLUMN billing_cycle_months FORMAT 99 HEADING 'Cycle'
COLUMN subscription_type FORMAT A10 HEADING 'Type'

SELECT subscription_id, customer_id, subscription_status, monthly_price, billing_cycle_months, subscription_type 
FROM SUBSCRIPTIONS ORDER BY subscription_id;

-- Test CUSTOMER_PREFERENCES table
PROMPT ===== CUSTOMER_PREFERENCES TABLE =====
COLUMN preference_id FORMAT 999 HEADING 'Pref ID'
COLUMN customer_id FORMAT 999 HEADING 'Cust ID'
COLUMN product_category_preference FORMAT A30 HEADING 'Category Preferences'
COLUMN subscription_interest FORMAT 9 HEADING 'Sub'
COLUMN kpop_anime_interest FORMAT A25 HEADING 'K-Pop/Anime Interests'

SELECT preference_id, customer_id, product_category_preference, subscription_interest, kpop_anime_interest 
FROM CUSTOMER_PREFERENCES ORDER BY customer_id;

-- Test GIFT_CARDS table
PROMPT ===== GIFT_CARDS TABLE =====
COLUMN gift_card_id FORMAT 999 HEADING 'Card ID'
COLUMN issuer_customer_id FORMAT 999 HEADING 'Issuer'
COLUMN recipient_customer_id FORMAT 999 HEADING 'Recipient'
COLUMN gift_card_code FORMAT A15 HEADING 'Code'
COLUMN initial_amount FORMAT $999.99 HEADING 'Initial'
COLUMN current_balance FORMAT $999.99 HEADING 'Balance'
COLUMN is_redeemed FORMAT 9 HEADING 'Used'

SELECT gift_card_id, issuer_customer_id, recipient_customer_id, gift_card_code, initial_amount, current_balance, is_redeemed 
FROM GIFT_CARDS ORDER BY gift_card_id;

-- Test ORDERS table
PROMPT ===== ORDERS TABLE =====
COLUMN order_id FORMAT 999999 HEADING 'Order ID'
COLUMN customer_id FORMAT 999999 HEADING 'Cust ID'
COLUMN order_date FORMAT A12 HEADING 'Date'
COLUMN subtotal FORMAT $999.99 HEADING 'Subtotal'
COLUMN total_amount FORMAT $999.99 HEADING 'Total'
COLUMN order_status FORMAT A12 HEADING 'Status'
COLUMN platform FORMAT A10 HEADING 'Platform'

SELECT order_id, customer_id, order_date, subtotal, total_amount, order_status, platform 
FROM ORDERS ORDER BY order_id;

-- Test FEEDBACK table
PROMPT ===== FEEDBACK TABLE =====
COLUMN feedback_id FORMAT 999 HEADING 'ID'
COLUMN customer_id FORMAT 999 HEADING 'Cust'
COLUMN order_id FORMAT 999999 HEADING 'Order'
COLUMN product_id FORMAT 999 HEADING 'Prod'
COLUMN rating FORMAT 9 HEADING 'Rating'
COLUMN review_text FORMAT A40 HEADING 'Review'
COLUMN is_verified_purchase FORMAT 9 HEADING 'Ver'

SELECT feedback_id, customer_id, order_id, product_id, rating, review_text, is_verified_purchase 
FROM FEEDBACK ORDER BY feedback_id;

-- Test ORDER_ITEMS table
PROMPT ===== ORDER_ITEMS TABLE =====
COLUMN order_item_id FORMAT 999999 HEADING 'Item ID'
COLUMN order_id FORMAT 999999 HEADING 'Order'
COLUMN product_id FORMAT 999 HEADING 'Prod'
COLUMN quantity FORMAT 999 HEADING 'Qty'
COLUMN unit_price FORMAT $99.99 HEADING 'Price'
COLUMN discount FORMAT $99.99 HEADING 'Disc'

SELECT order_item_id, order_id, product_id, quantity, unit_price, discount 
FROM ORDER_ITEMS ORDER BY order_id, order_item_id;

-- Test SUBSCRIPTION_ITEMS table
PROMPT ===== SUBSCRIPTION_ITEMS TABLE =====
COLUMN subscription_item_id FORMAT 999999 HEADING 'Item ID'
COLUMN subscription_id FORMAT 999 HEADING 'Sub'
COLUMN product_id FORMAT 999 HEADING 'Prod'
COLUMN delivery_date FORMAT A12 HEADING 'Delivery'
COLUMN quantity FORMAT 999 HEADING 'Qty'
COLUMN delivery_status FORMAT A10 HEADING 'Status'

SELECT subscription_item_id, subscription_id, product_id, delivery_date, quantity, delivery_status 
FROM SUBSCRIPTION_ITEMS ORDER BY subscription_id, delivery_date;

-- Test ORDER_STATUS_HISTORY table
PROMPT ===== ORDER_STATUS_HISTORY TABLE =====
COLUMN history_id FORMAT 999999 HEADING 'Hist ID'
COLUMN order_id FORMAT 999999 HEADING 'Order'
COLUMN previous_status FORMAT A12 HEADING 'From'
COLUMN new_status FORMAT A12 HEADING 'To'
COLUMN updated_by FORMAT A10 HEADING 'By'
COLUMN change_reason FORMAT A25 HEADING 'Reason'

SELECT history_id, order_id, previous_status, new_status, updated_by, change_reason 
FROM ORDER_STATUS_HISTORY ORDER BY order_id, status_change_date;

-- Test PRODUCT_PROMOTIONS table
PROMPT ===== PRODUCT_PROMOTIONS TABLE =====
COLUMN product_promotion_id FORMAT 999999 HEADING 'PP ID'
COLUMN product_id FORMAT 999 HEADING 'Prod'
COLUMN promotion_id FORMAT 999 HEADING 'Promo'
COLUMN override_discount_amount FORMAT $999.99 HEADING 'Override'
COLUMN effective_start_date FORMAT A12 HEADING 'Start'
COLUMN effective_end_date FORMAT A12 HEADING 'End'

SELECT product_promotion_id, product_id, promotion_id, override_discount_amount, effective_start_date, effective_end_date 
FROM PRODUCT_PROMOTIONS ORDER BY product_id, promotion_id;

-- Test CUSTOMER_PROMOTION table
PROMPT ===== CUSTOMER_PROMOTION TABLE =====
COLUMN customer_promotion_id FORMAT 999 HEADING 'CP ID'
COLUMN customer_id FORMAT 999 HEADING 'Cust'
COLUMN promotion_id FORMAT 999 HEADING 'Promo'
COLUMN is_used FORMAT 9 HEADING 'Used'
COLUMN date_offered FORMAT A12 HEADING 'Offered'
COLUMN expiry_date FORMAT A12 HEADING 'Expires'
COLUMN times_used FORMAT 999 HEADING 'Times'
COLUMN usage_limit FORMAT 999 HEADING 'Limit'

SELECT customer_promotion_id, customer_id, promotion_id, is_used, date_offered, expiry_date, times_used, usage_limit 
FROM CUSTOMER_PROMOTION ORDER BY customer_id, promotion_id;

-- Summary counts
PROMPT ===== DATA SUMMARY =====
SELECT 'CUSTOMERS' AS table_name, COUNT(*) AS record_count FROM CUSTOMERS
UNION ALL
SELECT 'MARKETING_CHANNELS', COUNT(*) FROM MARKETING_CHANNELS
UNION ALL
SELECT 'PROMOTIONS', COUNT(*) FROM PROMOTIONS
UNION ALL
SELECT 'PRODUCTS', COUNT(*) FROM PRODUCTS
UNION ALL
SELECT 'INVENTORY', COUNT(*) FROM INVENTORY
UNION ALL
SELECT 'SUBSCRIPTIONS', COUNT(*) FROM SUBSCRIPTIONS
UNION ALL
SELECT 'CUSTOMER_PREFERENCES', COUNT(*) FROM CUSTOMER_PREFERENCES
UNION ALL
SELECT 'GIFT_CARDS', COUNT(*) FROM GIFT_CARDS
UNION ALL
SELECT 'ORDERS', COUNT(*) FROM ORDERS
UNION ALL
SELECT 'FEEDBACK', COUNT(*) FROM FEEDBACK
UNION ALL
SELECT 'ORDER_ITEMS', COUNT(*) FROM ORDER_ITEMS
UNION ALL
SELECT 'SUBSCRIPTION_ITEMS', COUNT(*) FROM SUBSCRIPTION_ITEMS
UNION ALL
SELECT 'ORDER_STATUS_HISTORY', COUNT(*) FROM ORDER_STATUS_HISTORY
UNION ALL
SELECT 'PRODUCT_PROMOTIONS', COUNT(*) FROM PRODUCT_PROMOTIONS
UNION ALL
SELECT 'CUSTOMER_PROMOTION', COUNT(*) FROM CUSTOMER_PROMOTION
ORDER BY table_name;

PROMPT ===== SAMPLE DATA INSERT COMPLETED SUCCESSFULLY =====
PROMPT K-pop/Anime Merchandise Database is now populated with sample data!
PROMPT =================================================================