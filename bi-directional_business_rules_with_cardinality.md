# Sweet Seoul Korean Bakery - Bi-Directional Business Rules with Cardinality
*Oracle 19c Enhanced Database Schema*

## **CUSTOMERS Entity Relationships**

### 1. **CUSTOMERS to ORDERS (1:N)**
**Cardinality:** One-to-Many
- One customer can place zero or many orders
- Each order must be placed by exactly one customer
- **Business Rule:** Customer deletion restricted if active orders exist
- **Referential Integrity:** CASCADE DELETE disabled to preserve order history

### 2. **CUSTOMERS to SUBSCRIPTIONS (1:N)**
**Cardinality:** One-to-Many
- One customer can have zero or many subscriptions
- Each subscription must belong to exactly one customer
- **Business Rule:** Customers can have multiple subscription types simultaneously
- **Gift Logic:** Gift subscriptions link issuer and recipient customers

### 3. **CUSTOMERS to CUSTOMER_PREFERENCES (1:0..1)**
**Cardinality:** One-to-Zero or One
- One customer can have zero or one customer preferences record
- Each customer preferences record must belong to exactly one customer
- **Business Rule:** Preferences auto-created on first subscription or feedback
- **CLOB Storage:** Flexible preference data using Oracle CLOB fields

### 4. **CUSTOMERS to FEEDBACK (1:N)**
**Cardinality:** One-to-Many
- One customer can provide zero or many feedback records
- Each feedback record must be provided by exactly one customer
- **Business Rule:** Verified purchase flag set automatically for order-linked feedback
- **Rating System:** 1-5 star scale with review text

### 5. **CUSTOMERS to CUSTOMER_PROMOTION (1:N)**
**Cardinality:** One-to-Many
- One customer can be assigned zero or many promotional offers
- Each customer promotion assignment must belong to exactly one customer
- **Business Rule:** Individual promotion tracking with usage limits and expiry dates
- **Usage Tracking:** times_used increments automatically with each redemption

### 6. **CUSTOMERS to GIFT_CARDS (as issuer) (1:N)**
**Cardinality:** One-to-Many
- One customer can issue zero or many gift cards
- Each gift card must be issued by exactly one customer
- **Business Rule:** Issuer tracked for relationship management and marketing
- **Revenue Recognition:** Immediate recognition on gift card purchase

### 7. **CUSTOMERS to GIFT_CARDS (as recipient) (1:N)**
**Cardinality:** One-to-Many (Optional)
- One customer can receive zero or many gift cards
- Each gift card may be received by zero or one customer (nullable for physical cards)
- **Business Rule:** Physical gift cards may have null recipient until first use
- **Transfer Logic:** Gift cards can be transferred between customers

## **ORDERS Entity Relationships**

### 1. **ORDERS to ORDER_ITEMS (1:N)**
**Cardinality:** One-to-Many
- One order must contain one or many order items
- Each order item must belong to exactly one order
- **Business Rule:** Orders cannot exist without at least one order item
- **Inventory Impact:** Stock reduced when order moves to "Processing" status

### 2. **ORDERS to ORDER_STATUS_HISTORY (1:N)**
**Cardinality:** One-to-Many
- One order must have one or many status history records
- Each order status history record must belong to exactly one order
- **Audit Trail:** Automatic logging of all status changes with timestamps
- **Business Rule:** Initial status record created automatically on order insertion

### 3. **ORDERS to MARKETING_CHANNELS (N:0..1)**
**Cardinality:** Many-to-Zero or One
- Each order may be attributed to zero or one marketing channel
- One marketing channel can be attributed to zero or many orders
- **Attribution Logic:** Used for ROI analysis and marketing performance tracking
- **Business Rule:** In-store orders may not have marketing channel attribution

### 4. **ORDERS to GIFT_CARDS (N:0..1)**
**Cardinality:** Many-to-Zero or One
- One order can redeem zero or one gift card
- One gift card can be redeemed across zero or many orders (partial redemptions)
- **Balance Logic:** Automatic balance reduction and redemption status updates
- **Validation:** Gift card balance and expiry checked before order processing

### 5. **ORDERS to FEEDBACK (1:N)**
**Cardinality:** One-to-Many
- One order can generate zero or many feedback records
- Each order-specific feedback record must belong to exactly one order
- **Business Rule:** Customers can provide feedback on overall order and individual products
- **Verification:** Order-linked feedback automatically marked as verified purchase

## **PRODUCTS Entity Relationships**

### 1. **PRODUCTS to ORDER_ITEMS (1:N)**
**Cardinality:** One-to-Many
- One product can be included in zero or many order items
- Each order item must reference exactly one product
- **Business Rule:** Products cannot be deleted if referenced in order history
- **Pricing:** unit_price captured at time of order for historical accuracy

### 2. **PRODUCTS to SUBSCRIPTION_ITEMS (1:N)**
**Cardinality:** One-to-Many
- One product can be featured in zero or many subscription items
- Each subscription item must feature exactly one product
- **Curation Logic:** Products selected based on customer preferences and K-pop/anime interests
- **Delivery Tracking:** Individual delivery status for each subscription item

### 3. **PRODUCTS to INVENTORY (1:1)**
**Cardinality:** One-to-One
- One product must be tracked in exactly one inventory record
- Each inventory record must track exactly one product
- **Business Rule:** Inventory record automatically created when product is added
- **Stock Management:** Real-time tracking with reorder alerts and storage requirements

### 4. **PRODUCTS to PRODUCT_PROMOTIONS (1:N)**
**Cardinality:** One-to-Many
- One product may be featured in zero or many product promotions
- Each product promotion must feature exactly one product
- **Override Logic:** Product-specific discounts can override general promotion rates
- **Date Logic:** Effective date ranges can differ from parent promotion dates

### 5. **PRODUCTS to FEEDBACK (1:N)**
**Cardinality:** One-to-Many
- One product can receive zero or many feedback records
- Each product-specific feedback record must reference exactly one product
- **Rating Aggregation:** Average ratings calculated for product recommendations
- **Business Rule:** Both general and order-specific product feedback allowed

## **PROMOTIONS Entity Relationships**

### 1. **PROMOTIONS to PRODUCT_PROMOTIONS (1:N)**
**Cardinality:** One-to-Many
- One promotion may include zero or many product-specific overrides
- Each product promotion must belong to exactly one promotion
- **Business Rule:** General promotions can apply to all products or be product-specific
- **Override Logic:** Product promotions can specify different discount amounts or dates

### 2. **PROMOTIONS to CUSTOMER_PROMOTION (1:N)**
**Cardinality:** One-to-Many
- One promotion can be assigned to zero or many customers
- Each customer promotion assignment must belong to exactly one promotion
- **Assignment Logic:** Promotions must be individually assigned to customers
- **Usage Control:** Expiry dates, usage limits, and redemption tracking per customer

## **SUBSCRIPTIONS Entity Relationships**

### 1. **SUBSCRIPTIONS to SUBSCRIPTION_ITEMS (1:N)**
**Cardinality:** One-to-Many
- One subscription must include one or many subscription items (across time)
- Each subscription item must belong to exactly one subscription
- **Curation Logic:** Items selected based on subscription type and customer preferences
- **Delivery Scheduling:** Items scheduled across multiple delivery dates

### 2. **SUBSCRIPTIONS to CUSTOMERS (N:1)**
**Cardinality:** Many-to-One
- Multiple subscriptions can belong to one customer
- Each subscription must belong to exactly one customer
- **Business Rule:** Customers can have multiple active subscriptions of different types
- **Gift Subscriptions:** Special handling for gift subscription delivery and billing

## **MARKETING_CHANNELS Entity Relationships**

### 1. **MARKETING_CHANNELS to ORDERS (1:N)**
**Cardinality:** One-to-Many
- One marketing channel can be attributed to zero or many orders
- Each order may be attributed to zero or one marketing channel
- **Attribution Logic:** Used for ROI calculation and marketing budget allocation
- **Performance Tracking:** Conversion rates and customer acquisition costs tracked per channel

## **INVENTORY Entity Relationships**

### 1. **INVENTORY to PRODUCTS (1:1)**
**Cardinality:** One-to-One (Reverse of PRODUCTS to INVENTORY)
- Each inventory record tracks exactly one product
- Each product must have exactly one inventory record
- **Stock Automation:** Automatic updates via triggers when orders change status
- **Alert System:** Reorder alerts when stock hits minimum levels

## **New Junction Table Relationships**

### **CUSTOMER_PROMOTION Entity**
**Bridges:** CUSTOMERS (N:1) and PROMOTIONS (N:1)
- Enables many-to-many relationship between customers and promotions
- Tracks individual usage, limits, and expiry per customer-promotion pair
- **Unique Constraint:** One record per customer-promotion combination

### **PRODUCT_PROMOTIONS Entity**
**Bridges:** PRODUCTS (N:1) and PROMOTIONS (N:1)
- Enables many-to-many relationship between products and promotions
- Allows product-specific discount overrides and effective date ranges
- **Business Logic:** Supports complex promotional strategies

### **ORDER_STATUS_HISTORY Entity**
**References:** ORDERS (N:1)
- Provides complete audit trail for order lifecycle
- Tracks status changes with timestamps and responsible users
- **Immutable Records:** History records cannot be modified, only appended

## **Enhanced Business Rules Summary**

### **Referential Integrity:**
- **CASCADE DELETE** selectively applied to preserve business data
- **Foreign Key Constraints** enforce relationship validity
- **Unique Constraints** prevent duplicate business entities

### **Automatic Data Management:**
- **Triggers** maintain audit timestamps and business logic
- **Identity Columns** provide auto-incrementing primary keys
- **Check Constraints** enforce business rules at database level

### **Korean Bakery Specific Logic:**
- **K-pop/Anime Tie-ins** tracked for targeted marketing
- **Multi-Channel Operations** support online and in-store integration
- **Subscription Curation** based on customer preferences
- **Gift-Centric Features** align with Korean cultural practices

### **Oracle 19c Enhancements:**
- **CLOB Fields** provide flexible storage for complex data
- **TIMESTAMP Precision** ensures accurate audit trails
- **Advanced Constraints** enforce complex business rules
- **Performance Optimization** through strategic indexing

This comprehensive cardinality model ensures data integrity while supporting Sweet Seoul Korean Bakery's unique business requirements for K-pop/anime themed products, subscription services, and sophisticated customer relationship management.