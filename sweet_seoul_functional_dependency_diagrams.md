# Functional Dependency Diagrams (Normalization Diagrams)

## CUSTOMERS
```
customer_id -> first_name, last_name, email, phone, join_date, address, city, state, postal_code,
               is_online_customer, is_in_store_customer, loyalty_points, loyalty_status,
               preferred_communication_method, created_at, updated_at
```

## ORDERS
```
order_id -> customer_id, order_date, total_amount, order_status, payment_method, 
            marketing_channel_id, platform, is_gift, gift_card_id, created_at, updated_at

customer_id -->> CUSTOMERS.customer_id
marketing_channel_id -->> MARKETING_CHANNELS.marketing_channel_id
gift_card_id -->> GIFT_CARDS.gift_card_id
```

## ORDER_STATUS_HISTORY
```
history_id -> order_id, previous_status, new_status, status_change_date, updated_by, created_at, updated_at

order_id -->> ORDERS.order_id
```

## ORDER_ITEMS
```
order_item_id -> order_id, product_id, quantity, unit_price, discount, created_at, updated_at

order_id -->> ORDERS.order_id
product_id -->> PRODUCTS.product_id
```

## PRODUCTS
```
product_id -> product_name, description, category, origin, base_price, seasonal, expiry_date, 
              limited_edition, kpop_anime_tie_in, online_exclusive, in_store_exclusive, 
              min_inventory_level, created_at, updated_at
```

## INVENTORY
```
inventory_id -> product_id, current_stock, reorder_point, last_restock_date, expected_arrival,
                storage_requirements, min_stock_level, max_stock_level, created_at, updated_at

product_id -->> PRODUCTS.product_id
```

## MARKETING_CHANNELS
```
marketing_channel_id -> channel_name, channel_type, specific_platform, customer_acquisition_cost,
                        conversion_rate, created_at, updated_at
```

## SUBSCRIPTIONS
```
subscription_id -> customer_id, start_date, next_delivery_date, subscription_status, 
                   monthly_price, billing_cycle, subscription_type, is_gift, 
                   delivery_address, created_at, updated_at

customer_id -->> CUSTOMERS.customer_id
```

## SUBSCRIPTION_ITEMS
```
subscription_item_id -> subscription_id, product_id, month, year, quantity, created_at, updated_at

subscription_id -->> SUBSCRIPTIONS.subscription_id
product_id -->> PRODUCTS.product_id
```

## PROMOTIONS
```
promotion_id -> promotion_name, description, start_date, end_date, discount_amount, discount_type, 
                platform, kpop_anime_reference, is_gift_card_promo, promotion_type, min_purchase,
                created_at, updated_at
```

## CUSTOMER_PROMOTION
```
customer_promotion_id -> customer_id, promotion_id, is_used, date_offered, expiry_date, times_used,
                         usage_limit, created_at, updated_at

customer_id -->> CUSTOMERS.customer_id
promotion_id -->> PROMOTIONS.promotion_id
```

## PRODUCT_PROMOTIONS
```
product_promotion_id -> product_id, promotion_id, special_price, created_at, updated_at

product_id -->> PRODUCTS.product_id
promotion_id -->> PROMOTIONS.promotion_id
```

## CUSTOMER_PREFERENCES
```
preference_id -> customer_id, flavor_preference, product_category_preference, subscription_interest,
                 kpop_anime_interest, created_at, updated_at

customer_id -->> CUSTOMERS.customer_id
```

## FEEDBACK
```
feedback_id -> customer_id, order_id, product_id, rating, comment, feedback_date, created_at, updated_at

customer_id -->> CUSTOMERS.customer_id
order_id -->> ORDERS.order_id
product_id -->> PRODUCTS.product_id
```

## GIFT_CARDS
```
gift_card_id -> issuer_customer_id, recipient_customer_id, gift_card_code, initial_amount, 
                current_balance, issue_date, expiry_date, is_redeemed, created_at, updated_at

issuer_customer_id -->> CUSTOMERS.customer_id
recipient_customer_id -->> CUSTOMERS.customer_id
```

## Legend:
- `A -> B, C, D` means that attribute A functionally determines attributes B, C, and D
- `A -->> B` means that attribute A references attribute B in another entity (foreign key relationship)
