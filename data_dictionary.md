# Sweet Seoul Korean Bakery Data Dictionary

## CUSTOMERS

| Field | Data Type | Description | Constraints |
|-------|-----------|-------------|------------|
| customer_id | INT | Unique identifier for each customer | Primary Key, Auto-increment |
| first_name | STRING | Customer's first name | Not Null |
| last_name | STRING | Customer's last name | Not Null |
| email | STRING | Customer's email address | Unique, Not Null |
| phone | STRING | Customer's phone number | Not Null |
| join_date | DATE | Date when customer first registered | Not Null, Default Current Date |
| address | STRING | Customer's street address | Not Null |
| city | STRING | Customer's city | Not Null |
| state | STRING | Customer's state/province | Not Null |
| postal_code | STRING | Customer's postal/zip code | Not Null |
| is_online_customer | BOOLEAN | Flag indicating if customer shops online | Not Null, Default False |
| is_in_store_customer | BOOLEAN | Flag indicating if customer shops in-store | Not Null, Default False |
| loyalty_points | INT | Current loyalty points balance | Not Null, Default 0 |
| loyalty_status | STRING | Current loyalty tier status | Not Null, Default 'Standard' |
| preferred_communication_method | STRING | Customer's preferred contact method (email/SMS/phone) | Default 'Email' |
| created_at | TIMESTAMP | Record creation timestamp | Not Null, Default Current Timestamp |
| updated_at | TIMESTAMP | Record last update timestamp | Not Null, Default Current Timestamp |

## ORDERS

| Field | Data Type | Description | Constraints |
|-------|-----------|-------------|------------|
| order_id | INT | Unique identifier for each order | Primary Key, Auto-increment |
| customer_id | INT | Foreign key to CUSTOMERS table | Foreign Key, Not Null |
| order_date | DATE | Date when order was placed | Not Null, Default Current Date |
| total_amount | DECIMAL | Total order amount including tax and discounts | Not Null |
| order_status | STRING | Current status of order (pending/processing/shipped/delivered/canceled) | Not Null, Default 'Pending' |
| payment_method | STRING | Method used for payment | Not Null |
| marketing_channel_id | INT | Foreign key to MARKETING_CHANNELS table | Foreign Key, Nullable |
| platform | STRING | Whether order was placed online or in-store | Not Null, Values: 'online'/'in-store' |
| is_gift | BOOLEAN | Flag indicating if order is a gift | Not Null, Default False |
| gift_card_id | INT | Foreign key to GIFT_CARDS table if redeemed | Foreign Key, Nullable |
| created_at | TIMESTAMP | Record creation timestamp | Not Null, Default Current Timestamp |
| updated_at | TIMESTAMP | Record last update timestamp | Not Null, Default Current Timestamp |

## ORDER_STATUS_HISTORY

| Field | Data Type | Description | Constraints |
|-------|-----------|-------------|------------|
| history_id | INT | Unique identifier for each status history record | Primary Key, Auto-increment |
| order_id | INT | Foreign key to ORDERS table | Foreign Key, Not Null |
| previous_status | STRING | Previous order status | Not Null |
| new_status | STRING | New order status | Not Null |
| status_change_date | TIMESTAMP | Date and time when status changed | Not Null, Default Current Timestamp |
| updated_by | STRING | Name or ID of staff who updated the status | Not Null |
| created_at | TIMESTAMP | Record creation timestamp | Not Null, Default Current Timestamp |
| updated_at | TIMESTAMP | Record last update timestamp | Not Null, Default Current Timestamp |

## ORDER_ITEMS

| Field | Data Type | Description | Constraints |
|-------|-----------|-------------|------------|
| order_item_id | INT | Unique identifier for each order item | Primary Key, Auto-increment |
| order_id | INT | Foreign key to ORDERS table | Foreign Key, Not Null |
| product_id | INT | Foreign key to PRODUCTS table | Foreign Key, Not Null |
| quantity | INT | Quantity of product ordered | Not Null, Min 1 |
| unit_price | DECIMAL | Price per unit at time of purchase | Not Null |
| discount | DECIMAL | Discount amount applied to this item | Default 0.00 |
| created_at | TIMESTAMP | Record creation timestamp | Not Null, Default Current Timestamp |
| updated_at | TIMESTAMP | Record last update timestamp | Not Null, Default Current Timestamp |

## PRODUCTS

| Field | Data Type | Description | Constraints |
|-------|-----------|-------------|------------|
| product_id | INT | Unique identifier for each product | Primary Key, Auto-increment |
| product_name | STRING | Name of the product | Not Null, Unique |
| description | STRING | Detailed description of the product | Not Null |
| category | STRING | Product category | Not Null |
| origin | STRING | Country or region of origin | Not Null |
| base_price | DECIMAL | Standard price of the product | Not Null |
| seasonal | BOOLEAN | Flag indicating if product is seasonal | Not Null, Default False |
| expiry_date | DATE | Date when product availability ends (for seasonal items) | Nullable |
| limited_edition | BOOLEAN | Flag indicating if product is limited edition | Not Null, Default False |
| kpop_anime_tie_in | STRING | K-pop group or anime reference if applicable | Nullable |
| online_exclusive | BOOLEAN | Flag indicating if product is online-exclusive | Not Null, Default False |
| in_store_exclusive | BOOLEAN | Flag indicating if product is in-store-exclusive | Not Null, Default False |
| min_inventory_level | INT | Minimum stock level before reordering | Not Null |
| created_at | TIMESTAMP | Record creation timestamp | Not Null, Default Current Timestamp |
| updated_at | TIMESTAMP | Record last update timestamp | Not Null, Default Current Timestamp |

## INVENTORY

| Field | Data Type | Description | Constraints |
|-------|-----------|-------------|------------|
| inventory_id | INT | Unique identifier for each inventory record | Primary Key, Auto-increment |
| product_id | INT | Foreign key to PRODUCTS table | Foreign Key, Not Null, Unique |
| current_stock | INT | Current quantity in stock | Not Null, Default 0 |
| reorder_point | INT | Stock level that triggers reordering | Not Null |
| last_restock_date | DATE | Date of last inventory restock | Nullable |
| expected_arrival | DATE | Expected date for next stock arrival | Nullable |
| storage_requirements | STRING | Special storage instructions | Nullable |
| min_stock_level | INT | Absolute minimum stock to maintain | Not Null |
| max_stock_level | INT | Maximum stock capacity | Not Null |
| created_at | TIMESTAMP | Record creation timestamp | Not Null, Default Current Timestamp |
| updated_at | TIMESTAMP | Record last update timestamp | Not Null, Default Current Timestamp |

## SUBSCRIPTIONS

| Field | Data Type | Description | Constraints |
|-------|-----------|-------------|------------|
| subscription_id | INT | Unique identifier for each subscription | Primary Key, Auto-increment |
| customer_id | INT | Foreign key to CUSTOMERS table | Foreign Key, Not Null |
| start_date | DATE | Date when subscription started | Not Null |
| next_delivery_date | DATE | Date of next scheduled box delivery | Not Null |
| subscription_status | STRING | Current status (active/paused/canceled) | Not Null, Default 'Active' |
| monthly_price | DECIMAL | Monthly subscription price | Not Null |
| billing_cycle | INT | Number of months between billing | Not Null, Default 1 |
| subscription_type | STRING | Subscription tier (standard/premium) | Not Null, Default 'Standard' |
| is_gift | BOOLEAN | Flag indicating if subscription is a gift | Not Null, Default False |
| delivery_address | STRING | Address for subscription delivery (may differ from customer address) | Not Null |
| created_at | TIMESTAMP | Record creation timestamp | Not Null, Default Current Timestamp |
| updated_at | TIMESTAMP | Record last update timestamp | Not Null, Default Current Timestamp |

## SUBSCRIPTION_ITEMS

| Field | Data Type | Description | Constraints |
|-------|-----------|-------------|------------|
| subscription_item_id | INT | Unique identifier for each subscription item | Primary Key, Auto-increment |
| subscription_id | INT | Foreign key to SUBSCRIPTIONS table | Foreign Key, Not Null |
| product_id | INT | Foreign key to PRODUCTS table | Foreign Key, Not Null |
| month | INT | Month number (1-12) | Not Null |
| year | INT | Year (YYYY) | Not Null |
| quantity | INT | Quantity of product included | Not Null, Default 1 |
| created_at | TIMESTAMP | Record creation timestamp | Not Null, Default Current Timestamp |
| updated_at | TIMESTAMP | Record last update timestamp | Not Null, Default Current Timestamp |

## MARKETING_CHANNELS

| Field | Data Type | Description | Constraints |
|-------|-----------|-------------|------------|
| marketing_channel_id | INT | Unique identifier for each marketing channel | Primary Key, Auto-increment |
| channel_name | STRING | Name of the marketing channel | Not Null, Unique |
| channel_type | STRING | Type of channel (social/local) | Not Null |
| specific_platform | STRING | Specific platform or medium | Not Null |
| customer_acquisition_cost | DECIMAL | Average cost to acquire a customer through this channel | Default 0.00 |
| conversion_rate | INT | Conversion rate percentage | Default 0 |
| created_at | TIMESTAMP | Record creation timestamp | Not Null, Default Current Timestamp |
| updated_at | TIMESTAMP | Record last update timestamp | Not Null, Default Current Timestamp |

## PROMOTIONS

| Field | Data Type | Description | Constraints |
|-------|-----------|-------------|------------|
| promotion_id | INT | Unique identifier for each promotion | Primary Key, Auto-increment |
| promotion_name | STRING | Name of the promotion | Not Null |
| description | STRING | Detailed description of the promotion | Not Null |
| start_date | DATE | Date when promotion starts | Not Null |
| end_date | DATE | Date when promotion ends | Not Null |
| discount_amount | DECIMAL | Discount amount or percentage | Not Null |
| discount_type | STRING | Type of discount (percentage/fixed) | Not Null |
| platform | STRING | Whether promotion applies online, in-store, or both | Not Null, Values: 'online'/'in-store'/'both' |
| kpop_anime_reference | STRING | K-pop group or anime reference if applicable | Nullable |
| is_gift_card_promo | BOOLEAN | Flag indicating if promotion applies to gift cards | Not Null, Default False |
| promotion_type | STRING | Type of promotion (discount/bundle/offer) | Not Null |
| min_purchase | DECIMAL | Minimum purchase amount required | Default 0.00 |
| created_at | TIMESTAMP | Record creation timestamp | Not Null, Default Current Timestamp |
| updated_at | TIMESTAMP | Record last update timestamp | Not Null, Default Current Timestamp |

## CUSTOMER_PROMOTION

| Field | Data Type | Description | Constraints |
|-------|-----------|-------------|------------|
| customer_promotion_id | INT | Unique identifier for each customer promotion record | Primary Key, Auto-increment |
| customer_id | INT | Foreign key to CUSTOMERS table | Foreign Key, Not Null |
| promotion_id | INT | Foreign key to PROMOTIONS table | Foreign Key, Not Null |
| is_used | BOOLEAN | Flag indicating if promotion has been used by this customer | Not Null, Default False |
| date_offered | DATE | Date when promotion was offered to customer | Not Null, Default Current Date |
| expiry_date | DATE | Expiration date for this customer's promotion | Not Null |
| times_used | INT | Number of times customer has used this promotion | Not Null, Default 0 |
| usage_limit | INT | Maximum number of times customer can use this promotion | Not Null, Default 1 |
| created_at | TIMESTAMP | Record creation timestamp | Not Null, Default Current Timestamp |
| updated_at | TIMESTAMP | Record last update timestamp | Not Null, Default Current Timestamp |

## PRODUCT_PROMOTIONS

| Field | Data Type | Description | Constraints |
|-------|-----------|-------------|------------|
| product_promotion_id | INT | Unique identifier for each product promotion record | Primary Key, Auto-increment |
| product_id | INT | Foreign key to PRODUCTS table | Foreign Key, Not Null |
| promotion_id | INT | Foreign key to PROMOTIONS table | Foreign Key, Not Null |
| special_price | DECIMAL | Special promotional price of the product | Nullable |
| created_at | TIMESTAMP | Record creation timestamp | Not Null, Default Current Timestamp |
| updated_at | TIMESTAMP | Record last update timestamp | Not Null, Default Current Timestamp |

## CUSTOMER_PREFERENCES

| Field | Data Type | Description | Constraints |
|-------|-----------|-------------|------------|
| preference_id | INT | Unique identifier for each preference record | Primary Key, Auto-increment |
| customer_id | INT | Foreign key to CUSTOMERS table | Foreign Key, Not Null, Unique |
| flavor_preference | STRING | Preferred flavors | Nullable |
| product_category_preference | STRING | Preferred product categories | Nullable |
| subscription_interest | BOOLEAN | Flag indicating interest in subscriptions | Default False |
| kpop_anime_interest | STRING | Preferred K-pop groups or anime series | Nullable |
| created_at | TIMESTAMP | Record creation timestamp | Not Null, Default Current Timestamp |
| updated_at | TIMESTAMP | Record last update timestamp | Not Null, Default Current Timestamp |

## FEEDBACK

| Field | Data Type | Description | Constraints |
|-------|-----------|-------------|------------|
| feedback_id | INT | Unique identifier for each feedback record | Primary Key, Auto-increment |
| customer_id | INT | Foreign key to CUSTOMERS table | Foreign Key, Not Null |
| order_id | INT | Foreign key to ORDERS table | Foreign Key, Nullable |
| product_id | INT | Foreign key to PRODUCTS table | Foreign Key, Nullable |
| rating | INT | Rating on scale 1-5 | Not Null, Min 1, Max 5 |
| comment | STRING | Customer's written feedback | Nullable |
| feedback_date | DATE | Date feedback was provided | Not Null, Default Current Date |
| created_at | TIMESTAMP | Record creation timestamp | Not Null, Default Current Timestamp |
| updated_at | TIMESTAMP | Record last update timestamp | Not Null, Default Current Timestamp |

## GIFT_CARDS

| Field | Data Type | Description | Constraints |
|-------|-----------|-------------|------------|
| gift_card_id | INT | Unique identifier for each gift card | Primary Key, Auto-increment |
| issuer_customer_id | INT | Foreign key to CUSTOMERS table (purchaser) | Foreign Key, Not Null |
| recipient_customer_id | INT | Foreign key to CUSTOMERS table (recipient) | Foreign Key, Nullable |
| gift_card_code | STRING | Unique code for gift card redemption | Not Null, Unique |
| initial_amount | DECIMAL | Original gift card value | Not Null |
| current_balance | DECIMAL | Remaining balance on gift card | Not Null |
| issue_date | DATE | Date gift card was issued | Not Null, Default Current Date |
| expiry_date | DATE | Date gift card expires | Not Null |
| is_redeemed | BOOLEAN | Flag indicating if gift card has been used | Not Null, Default False |
| created_at | TIMESTAMP | Record creation timestamp | Not Null, Default Current Timestamp |
| updated_at | TIMESTAMP | Record last update timestamp | Not Null, Default Current Timestamp |
