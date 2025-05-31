# Sweet Seoul Korean Bakery - Database Assumptions
*Oracle 19c Enhanced Schema Implementation*

## **1. Customer Identity Management**
- **Unique Email Addresses:** Each customer must have a unique email address serving as primary identifier
- **Multi-Channel Shopping:** Customers can be both online and in-store shoppers (not mutually exclusive)
- **Loyalty Program:** Available to all customers with automatic point accumulation and tier progression
- **Loyalty Tiers:** Standard (0-199), Silver (200-399), Gold (400-599), Platinum (600+) points
- **Communication Preferences:** Customers can specify preferred contact method (Email, SMS, Phone, Mail)
- **Data Integrity:** Customer deletion restricted if active orders, subscriptions, or gift cards exist

## **2. Order Processing**
- **Customer Association:** All orders are associated with exactly one customer (no guest orders)
- **Multi-Channel Orders:** Orders can be placed either online or in-store with platform-specific handling
- **Financial Breakdown:** Orders track subtotal, tax_amount, shipping_cost, and discount_amount separately
- **Total Calculation:** total_amount = subtotal + tax_amount + shipping_cost - discount_amount (enforced by constraints)
- **Status Tracking:** Orders can be tracked through multiple status changes with complete audit trail
- **Order Items Requirement:** Each order must have at least one order item
- **Gift Orders:** Orders can be marked as gifts with special handling and recipient information
- **Payment Methods:** Support for Credit Card, Debit Card, PayPal, Gift Card, Cash, Apple Pay

## **3. Product Management**
- **Inventory Relationship:** Each product must have corresponding inventory information (1:1 relationship)
- **Product Categories:** K-pop Albums, Anime Figures, Merchandise, Accessories, Collectibles, Apparel
- **Origin Tracking:** Products tracked by origin (South Korea, Japan, China, USA, Other)
- **Seasonal Products:** Can be seasonal or limited edition with expiry dates for availability windows
- **K-pop/Anime Integration:** Products can have tie-ins as core marketing and curation strategy
- **Channel Exclusivity:** Products can be exclusive to either online or in-store channels (mutually exclusive)
- **Inventory Automation:** Stock levels automatically adjust based on order status changes via triggers
- **Storage Requirements:** Complex storage instructions stored in CLOB fields for specialized handling

## **4. Subscription Model**
- **Recurring Billing:** Subscriptions support 1, 3, 6, or 12-month billing cycles
- **Subscription Types:** Standard and Premium tiers with different pricing and product selections
- **Multi-Product Delivery:** Each subscription delivery can include multiple products
- **Gift Subscriptions:** Can be gifted to others with separate issuer and recipient tracking
- **Auto-Renewal:** Configurable auto-renewal with different defaults for purchased vs. gift subscriptions
- **Delivery Tracking:** Individual tracking for each product within subscription deliveries
- **Personalized Curation:** Product selection based on customer preferences and K-pop/anime interests
- **Flexible Addressing:** Delivery addresses can differ from customer billing addresses (stored in CLOB)

## **5. Promotion Structure**
- **Product-Specific Promotions:** Promotions can apply to specific products through PRODUCT_PROMOTIONS junction table
- **Customer Targeting:** Promotions can be individually assigned to customers through CUSTOMER_PROMOTION junction table
- **Usage Limitations:** Each promotion can have specific usage limits per customer with automatic tracking
- **Discount Types:** Support for both percentage and fixed amount discounts
- **Platform Targeting:** Promotions can target online, in-store, or both channels
- **Override Pricing:** Product promotions can override general promotion discount amounts
- **Expiry Enforcement:** Automatic expiry date checking prevents use of expired promotions
- **K-pop/Anime Themed:** Promotions can reference specific K-pop groups or anime series

## **6. Marketing Attribution**
- **Single Channel Attribution:** Each order can be attributed to at most one marketing channel
- **Channel Types:** Social Media, Email, PPC, SEO, Direct, Referral, Display
- **Platform Specificity:** Channels specify exact platforms (Instagram, TikTok, Google Ads, etc.)
- **ROI Tracking:** Marketing effectiveness tracked through customer acquisition cost and conversion rates
- **Performance Analytics:** Automatic calculation of channel performance metrics via database views
- **Attribution Optional:** In-store orders may not have marketing channel attribution

## **7. Gift Card System**
- **Issuer Requirement:** Gift cards are always issued by a customer (tracked for relationship management)
- **Optional Recipients:** May or may not have recipient customer (physical cards or transfers)
- **Multi-Order Usage:** Gift cards can be used across multiple orders until balance is depleted
- **Balance Tracking:** Automatic balance reduction and redemption status updates
- **Expiration Enforcement:** Gift cards have expiration dates enforced at transaction time
- **Code Uniqueness:** Gift card codes must be globally unique across all cards
- **Revenue Recognition:** Immediate revenue recognition upon gift card purchase

## **8. Customer Feedback System**
- **Multi-Level Feedback:** Can be order-specific, product-specific, or general feedback
- **Rating Scale:** 1-5 star rating system with 1 being lowest satisfaction
- **Verified Purchases:** Automatic verification flag for feedback linked to actual purchases
- **Review Text:** Optional detailed review text in addition to numeric ratings
- **Temporal Tracking:** Feedback date automatically captured for trend analysis
- **Business Intelligence:** Aggregate ratings and satisfaction metrics calculated via database views

## **9. Temporal Data Management**
- **Universal Audit Trails:** All entities track created_at and updated_at timestamps via triggers
- **Immutable History:** ORDER_STATUS_HISTORY provides immutable audit trail for order changes
- **Date Validation:** Start dates must precede end dates across all temporal data
- **Status Change Tracking:** Complete tracking of who made changes and when
- **Oracle TIMESTAMP:** Precise timestamp tracking using Oracle SYSTIMESTAMP for accuracy
- **Automatic Updates:** updated_at timestamps automatically maintained by database triggers

## **10. Customer Preferences**
- **One-to-One Relationship:** Each customer can have at most one preference record
- **CLOB Storage:** Flavor and product category preferences stored in flexible CLOB fields
- **Structured Interests:** K-pop/anime interests stored in VARCHAR2(1000) for targeted recommendations
- **Subscription Interest:** Binary flag indicating interest in subscription services
- **Curation Impact:** Preferences directly influence subscription box curation algorithms
- **Auto-Creation:** Preference records can be auto-created on first subscription or feedback

## **11. Business Logic Automation (Oracle 19c Enhanced)**
- **Trigger-Based Automation:** Inventory updates, timestamp management, and business rule enforcement
- **Identity Columns:** Auto-incrementing primary keys using Oracle GENERATED BY DEFAULT AS IDENTITY
- **Check Constraints:** Complex business rules enforced at database level
- **Referential Integrity:** Foreign key constraints with strategic CASCADE options
- **CLOB Utilization:** Flexible storage for complex data (preferences, storage requirements, addresses)
- **Real-Time Validation:** Gift card balance and expiry checking at transaction time

## **12. Korean Bakery Specialization**
- **Cultural Integration:** K-pop and anime tie-ins throughout product and marketing systems
- **Multi-Cultural Products:** Support for Korean, Japanese, Chinese, and other origins
- **Gift-Centric Features:** Enhanced gift handling aligning with Korean cultural practices
- **Seasonal Awareness:** Special handling for seasonal products and limited editions
- **Community Building:** Loyalty programs and feedback systems foster customer community
- **Personalization Focus:** Individual customer preferences drive product recommendations and curation

## **13. Data Quality and Integrity**
- **Unique Constraints:** Email addresses, gift card codes, product names must be unique
- **Null Handling:** Strategic use of nullable fields for optional relationships
- **Business Rule Validation:** Database-level validation prevents invalid business states
- **Financial Accuracy:** Monetary calculations enforced by constraints and triggers
- **Audit Compliance:** Complete change tracking supports regulatory and business requirements

## **14. Performance and Scalability**
- **Strategic Indexing:** Indexes on frequently queried fields (loyalty_status, order_status, etc.)
- **View-Based Reporting:** Pre-calculated business intelligence views for performance
- **Normalized Design:** Proper normalization reduces data redundancy and ensures consistency
- **Oracle Optimization:** Leverages Oracle 19c features for optimal performance
- **Scalable Architecture:** Design supports growth in customers, orders, and product catalog

## **15. Security and Privacy**
- **Data Protection:** Customer personal information properly secured through access controls
- **Audit Requirements:** Complete audit trails support compliance requirements
- **Business Continuity:** Referential integrity prevents accidental data loss
- **Privacy Considerations:** Customer preferences and feedback properly isolated and protected

These assumptions form the foundation for Sweet Seoul Korean Bakery's Oracle 19c database design, ensuring robust support for their unique business model combining traditional Korean bakery operations with modern K-pop/anime culture, subscription services, and sophisticated customer relationship management.