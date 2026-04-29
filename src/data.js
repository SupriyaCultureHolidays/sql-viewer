export const tables = {
  roles: {
    columns: ["id", "name", "description", "permissions", "created_at", "updated_at"],
    rows: [
      { id: 1, name: "admin", description: "Platform administrator", permissions: '["all"]', created_at: "2024-01-01 00:00:00", updated_at: "2024-01-01 00:00:00" },
      { id: 2, name: "vendor", description: "Merchant/seller account", permissions: '["products.manage","orders.view"]', created_at: "2024-01-01 00:00:00", updated_at: "2024-01-01 00:00:00" },
      { id: 3, name: "customer", description: "Regular buyer account", permissions: '["orders.place","reviews.write"]', created_at: "2024-01-01 00:00:00", updated_at: "2024-01-01 00:00:00" },
    ],
  },
  users: {
    columns: ["id", "role_id", "name", "email", "phone", "is_email_verified", "status", "last_login_at", "created_at"],
    rows: [
      { id: 1,   role_id: 1, name: "Admin 1",         email: "admin1@estore.com",    phone: "+91900000001", is_email_verified: 1, status: "active",   last_login_at: "2025-07-01 10:00:00", created_at: "2024-01-01 00:00:00" },
      { id: 2,   role_id: 1, name: "Admin 2",         email: "admin2@estore.com",    phone: "+91900000002", is_email_verified: 1, status: "active",   last_login_at: "2025-07-02 09:30:00", created_at: "2024-01-01 00:00:00" },
      { id: 6,   role_id: 2, name: "Rajesh Kumar 1",  email: "vendor1@shop.com",     phone: "+91800000001", is_email_verified: 1, status: "active",   last_login_at: "2025-06-28 14:00:00", created_at: "2024-02-10 00:00:00" },
      { id: 206, role_id: 3, name: "Aarav Shah #1",   email: "customer1@gmail.com",  phone: "+91700000001", is_email_verified: 1, status: "inactive", last_login_at: "2025-07-03 08:00:00", created_at: "2024-03-15 00:00:00" },
      { id: 207, role_id: 3, name: "Ishaan Patel #2", email: "customer2@gmail.com",  phone: "+91700000002", is_email_verified: 0, status: "banned",   last_login_at: null,                  created_at: "2024-04-20 00:00:00" },
    ],
  },
  vendors: {
    columns: ["id", "user_id", "store_name", "contact_email", "city", "commission_rate", "rating", "status", "approved_at"],
    rows: [
      { id: 1, user_id: 6,  store_name: "TechZone #1",     contact_email: "vendor1@shop.com", city: "Mumbai",    commission_rate: "12.50", rating: "4.20", status: "active",    approved_at: "2024-02-15 00:00:00" },
      { id: 2, user_id: 7,  store_name: "FashionHub #2",   contact_email: "vendor2@shop.com", city: "Delhi",     commission_rate: "11.00", rating: "3.80", status: "active",    approved_at: "2024-03-01 00:00:00" },
      { id: 3, user_id: 8,  store_name: "GadgetPlanet #3", contact_email: "vendor3@shop.com", city: "Bangalore", commission_rate: "13.75", rating: "4.50", status: "pending",   approved_at: null },
      { id: 4, user_id: 9,  store_name: "HomeNest #4",     contact_email: "vendor4@shop.com", city: "Chennai",   commission_rate: "10.25", rating: "3.60", status: "suspended", approved_at: "2024-03-10 00:00:00" },
      { id: 5, user_id: 10, store_name: "SportsPro #5",    contact_email: "vendor5@shop.com", city: "Hyderabad", commission_rate: "14.00", rating: "4.10", status: "active",    approved_at: "2024-04-05 00:00:00" },
    ],
  },
  categories: {
    columns: ["id", "parent_id", "name", "slug", "is_active", "display_order", "created_at"],
    rows: [
      { id: 1, parent_id: null, name: "Electronics", slug: "electronics", is_active: 1, display_order: 1, created_at: "2024-01-01 00:00:00" },
      { id: 2, parent_id: null, name: "Fashion", slug: "fashion", is_active: 1, display_order: 2, created_at: "2024-01-01 00:00:00" },
      { id: 3, parent_id: null, name: "Home & Living", slug: "home-living", is_active: 1, display_order: 3, created_at: "2024-01-01 00:00:00" },
      { id: 11, parent_id: 1, name: "Smartphones", slug: "smartphones", is_active: 1, display_order: 1, created_at: "2024-01-01 00:00:00" },
      { id: 12, parent_id: 1, name: "Laptops", slug: "laptops", is_active: 1, display_order: 2, created_at: "2024-01-01 00:00:00" },
    ],
  },
  products: {
    columns: ["id", "vendor_id", "category_id", "title", "sku", "price", "sale_price", "status", "is_featured", "created_at"],
    rows: [
      { id: 1, vendor_id: 2, category_id: 2, title: "Ultra HD Smart TV 55 inch - Model 1", sku: "SKU-000001", price: "32500.00", sale_price: null, status: "active", is_featured: 0, created_at: "2024-05-10 00:00:00" },
      { id: 2, vendor_id: 3, category_id: 3, title: "Running Shoes Air Cushion - Model 2", sku: "SKU-000002", price: "2999.00", sale_price: "2499.00", status: "inactive", is_featured: 0, created_at: "2024-05-11 00:00:00" },
      { id: 3, vendor_id: 4, category_id: 4, title: "Organic Green Tea 200g - Model 3", sku: "SKU-000003", price: "450.00", sale_price: "380.00", status: "draft", is_featured: 0, created_at: "2024-05-12 00:00:00" },
      { id: 4, vendor_id: 5, category_id: 5, title: "Leather Office Chair Ergonomic - Model 4", sku: "SKU-000004", price: "12800.00", sale_price: null, status: "deleted", is_featured: 0, created_at: "2024-05-13 00:00:00" },
      { id: 5, vendor_id: 1, category_id: 1, title: "DSLR Camera 24MP Kit - Model 5", sku: "SKU-000005", price: "48500.00", sale_price: null, status: "active", is_featured: 1, created_at: "2024-05-14 00:00:00" },
    ],
  },
  product_inventory: {
    columns: ["id", "product_id", "quantity_in_stock", "reserved_quantity", "reorder_level", "warehouse_location", "last_restocked_at"],
    rows: [
      { id: 1, product_id: 1, quantity_in_stock: 342, reserved_quantity: 5, reorder_level: 10, warehouse_location: "WH-2-BIN-001", last_restocked_at: "2025-06-01 00:00:00" },
      { id: 2, product_id: 2, quantity_in_stock: 87, reserved_quantity: 12, reorder_level: 10, warehouse_location: "WH-3-BIN-002", last_restocked_at: "2025-06-10 00:00:00" },
      { id: 3, product_id: 3, quantity_in_stock: 500, reserved_quantity: 0, reorder_level: 5, warehouse_location: "WH-4-BIN-003", last_restocked_at: "2025-05-20 00:00:00" },
      { id: 4, product_id: 4, quantity_in_stock: 23, reserved_quantity: 3, reorder_level: 10, warehouse_location: "WH-1-BIN-004", last_restocked_at: "2025-06-15 00:00:00" },
      { id: 5, product_id: 5, quantity_in_stock: 9, reserved_quantity: 1, reorder_level: 5, warehouse_location: "WH-5-BIN-005", last_restocked_at: "2025-07-01 00:00:00" },
    ],
  },
  carts: {
    columns: ["id", "user_id", "status", "total_amount", "coupon_code", "discount_amount", "created_at", "abandoned_at"],
    rows: [
      { id: 1, user_id: 207, status: "active", total_amount: "1299.00", coupon_code: null, discount_amount: "0.00", created_at: "2025-07-01 10:00:00", abandoned_at: null },
      { id: 2, user_id: 208, status: "abandoned", total_amount: "5499.00", coupon_code: null, discount_amount: "0.00", created_at: "2025-06-28 14:00:00", abandoned_at: "2025-06-29 10:00:00" },
      { id: 3, user_id: 209, status: "converted", total_amount: "3200.00", coupon_code: "SAVE20", discount_amount: "200.00", created_at: "2025-06-25 09:00:00", abandoned_at: null },
      { id: 4, user_id: 210, status: "active", total_amount: "899.00", coupon_code: null, discount_amount: "0.00", created_at: "2025-07-03 08:30:00", abandoned_at: null },
      { id: 5, user_id: 211, status: "abandoned", total_amount: "7800.00", coupon_code: null, discount_amount: "0.00", created_at: "2025-06-20 16:00:00", abandoned_at: "2025-06-21 12:00:00" },
    ],
  },
  cart_items: {
    columns: ["id", "cart_id", "product_id", "quantity", "unit_price", "added_at"],
    rows: [
      { id: 1, cart_id: 1, product_id: 7, quantity: 1, unit_price: "1299.00", added_at: "2025-07-01 10:05:00" },
      { id: 2, cart_id: 2, product_id: 14, quantity: 2, unit_price: "2749.50", added_at: "2025-06-28 14:10:00" },
      { id: 3, cart_id: 3, product_id: 21, quantity: 1, unit_price: "3200.00", added_at: "2025-06-25 09:15:00" },
      { id: 4, cart_id: 4, product_id: 3, quantity: 3, unit_price: "299.67", added_at: "2025-07-03 08:35:00" },
      { id: 5, cart_id: 5, product_id: 52, quantity: 1, unit_price: "7800.00", added_at: "2025-06-20 16:05:00" },
    ],
  },
  orders: {
    columns: ["id", "user_id", "order_number", "order_status", "payment_status", "total_amount", "subtotal", "shipping_amount", "tax_amount", "created_at"],
    rows: [
      { id: 1, user_id: 207, order_number: "ORD-2025-000001", order_status: "pending",    payment_status: "pending",            total_amount: "1599.00",  subtotal: "1500.00",  shipping_amount: "99.00", tax_amount: "0.00",   created_at: "2025-01-10 10:00:00" },
      { id: 2, user_id: 208, order_number: "ORD-2025-000002", order_status: "confirmed",  payment_status: "paid",               total_amount: "3499.00",  subtotal: "3200.00",  shipping_amount: "99.00", tax_amount: "200.00", created_at: "2025-02-14 11:30:00" },
      { id: 3, user_id: 209, order_number: "ORD-2025-000003", order_status: "processing", payment_status: "paid",               total_amount: "899.00",   subtotal: "850.00",   shipping_amount: "49.00", tax_amount: "0.00",   created_at: "2025-03-05 09:00:00" },
      { id: 4, user_id: 210, order_number: "ORD-2025-000004", order_status: "shipped",    payment_status: "failed",             total_amount: "12800.00", subtotal: "12500.00", shipping_amount: "0.00",  tax_amount: "300.00", created_at: "2025-04-01 08:00:00" },
      { id: 5, user_id: 211, order_number: "ORD-2025-000005", order_status: "delivered",  payment_status: "refunded",           total_amount: "5200.00",  subtotal: "5000.00",  shipping_amount: "0.00",  tax_amount: "200.00", created_at: "2025-04-18 14:00:00" },
      { id: 6, user_id: 212, order_number: "ORD-2025-000006", order_status: "cancelled",  payment_status: "partially_refunded", total_amount: "2100.00",  subtotal: "2000.00",  shipping_amount: "0.00",  tax_amount: "100.00", created_at: "2025-05-22 10:00:00" },
      { id: 7, user_id: 213, order_number: "ORD-2025-000007", order_status: "refunded",   payment_status: "refunded",           total_amount: "4750.00",  subtotal: "4500.00",  shipping_amount: "0.00",  tax_amount: "250.00", created_at: "2025-06-15 09:00:00" },
    ],
  },
  order_items: {
    columns: ["id", "order_id", "product_id", "vendor_id", "quantity", "unit_price", "total_price", "status", "return_status", "return_reason"],
    rows: [
      { id: 1, order_id: 1, product_id: 4, vendor_id: 5, quantity: 1, unit_price: "3200.00", total_price: "3200.00", status: "pending",   return_status: null,       return_reason: null },
      { id: 2, order_id: 2, product_id: 5, vendor_id: 1, quantity: 1, unit_price: "12500.00", total_price: "12500.00", status: "confirmed", return_status: null,       return_reason: null },
      { id: 3, order_id: 3, product_id: 2, vendor_id: 3, quantity: 2, unit_price: "425.00",   total_price: "850.00",   status: "shipped",   return_status: null,       return_reason: null },
      { id: 4, order_id: 4, product_id: 1, vendor_id: 2, quantity: 1, unit_price: "5000.00",  total_price: "5000.00",  status: "delivered", return_status: null,       return_reason: null },
      { id: 5, order_id: 5, product_id: 3, vendor_id: 4, quantity: 3, unit_price: "500.00",   total_price: "1500.00",  status: "cancelled", return_status: null,       return_reason: null },
      { id: 6, order_id: 6, product_id: 6, vendor_id: 3, quantity: 1, unit_price: "2000.00",  total_price: "2000.00",  status: "returned",  return_status: "approved", return_reason: "Defective product received" },
    ],
  },
  payments: {
    columns: ["id", "order_id", "user_id", "transaction_id", "payment_method", "payment_gateway", "amount", "status", "failure_reason", "created_at"],
    rows: [
      { id: 1, order_id: 1, user_id: 207, transaction_id: "TXN-abc123def456", payment_method: "upi",         payment_gateway: "razorpay", amount: "1599.00",  status: "pending",            failure_reason: null,                created_at: "2025-01-10 10:02:00" },
      { id: 2, order_id: 2, user_id: 208, transaction_id: "TXN-bcd234efg567", payment_method: "credit_card", payment_gateway: "stripe",   amount: "3499.00",  status: "success",            failure_reason: null,                created_at: "2025-02-14 11:32:00" },
      { id: 3, order_id: 3, user_id: 209, transaction_id: "TXN-cde345fgh678", payment_method: "debit_card",  payment_gateway: "paytm",    amount: "899.00",   status: "success",            failure_reason: null,                created_at: "2025-03-05 09:02:00" },
      { id: 4, order_id: 4, user_id: 210, transaction_id: "TXN-def456ghi789", payment_method: "netbanking",  payment_gateway: "cashfree", amount: "12800.00", status: "failed",             failure_reason: "Card declined",     created_at: "2025-04-01 08:02:00" },
      { id: 5, order_id: 5, user_id: 211, transaction_id: "TXN-efg567hij890", payment_method: "wallet",      payment_gateway: "paypal",   amount: "5200.00",  status: "refunded",           failure_reason: null,            created_at: "2025-04-18 14:02:00" },
      { id: 6, order_id: 6, user_id: 212, transaction_id: "TXN-fgh678ijk901", payment_method: "cod",         payment_gateway: "paytm",    amount: "2100.00",  status: "partially_refunded", failure_reason: null,            created_at: "2025-05-22 10:02:00" },
      { id: 7, order_id: 7, user_id: 213, transaction_id: "TXN-ghi789jkl012", payment_method: "emi",         payment_gateway: "cashfree", amount: "4750.00",  status: "refunded",           failure_reason: null,            created_at: "2025-06-15 09:02:00" },
      { id: 8, order_id: 1, user_id: 207, transaction_id: "TXN-hij890klm123", payment_method: "netbanking",  payment_gateway: "razorpay", amount: "1599.00",  status: "success",            failure_reason: null,            created_at: "2025-01-10 10:05:00" },
    ],
  },
  shipments: {
    columns: ["id", "order_id", "vendor_id", "tracking_number", "courier_partner", "shipping_method", "status", "estimated_delivery_date", "shipping_cost"],
    rows: [
      { id: 1, order_id: 1, vendor_id: 5, tracking_number: "TRACK-ABC123", courier_partner: "Delhivery",  shipping_method: "standard",  status: "pending",          estimated_delivery_date: "2025-01-15", shipping_cost: "0.00" },
      { id: 2, order_id: 2, vendor_id: 1, tracking_number: "TRACK-BCD234", courier_partner: "Bluedart",   shipping_method: "express",   status: "packed",           estimated_delivery_date: "2025-02-19", shipping_cost: "99.00" },
      { id: 3, order_id: 3, vendor_id: 3, tracking_number: "TRACK-CDE345", courier_partner: "FedEx",      shipping_method: "overnight", status: "dispatched",       estimated_delivery_date: "2025-03-10", shipping_cost: "49.00" },
      { id: 4, order_id: 4, vendor_id: 4, tracking_number: "TRACK-DEF456", courier_partner: "XpressBees", shipping_method: "standard",  status: "in_transit",       estimated_delivery_date: "2025-04-06", shipping_cost: "149.00" },
      { id: 5, order_id: 5, vendor_id: 2, tracking_number: "TRACK-EFG567", courier_partner: "DTDC",       shipping_method: "express",   status: "out_for_delivery", estimated_delivery_date: "2025-04-23", shipping_cost: "0.00" },
      { id: 6, order_id: 6, vendor_id: 3, tracking_number: "TRACK-FGH678", courier_partner: "Delhivery",  shipping_method: "standard",  status: "delivered",        estimated_delivery_date: "2025-05-27", shipping_cost: "0.00" },
      { id: 7, order_id: 7, vendor_id: 1, tracking_number: "TRACK-GHI789", courier_partner: "Bluedart",   shipping_method: "overnight", status: "returned",         estimated_delivery_date: "2025-06-20", shipping_cost: "99.00" },
      { id: 8, order_id: 2, vendor_id: 5, tracking_number: "TRACK-HIJ890", courier_partner: "FedEx",      shipping_method: "express",   status: "lost",             estimated_delivery_date: "2025-02-20", shipping_cost: "199.00" },
    ],
  },
  reviews: {
    columns: ["id", "product_id", "user_id", "order_id", "rating", "title", "is_verified_purchase", "helpful_votes", "status", "created_at"],
    rows: [
      { id: 1, product_id: 4, user_id: 207, order_id: 1, rating: 5, title: "Excellent product, highly recommend!", is_verified_purchase: 1, helpful_votes: 23, status: "published", created_at: "2025-02-10 00:00:00" },
      { id: 2, product_id: 5, user_id: 208, order_id: 2, rating: 4, title: "Good value for money",                 is_verified_purchase: 1, helpful_votes: 11, status: "published", created_at: "2025-03-01 00:00:00" },
      { id: 3, product_id: 2, user_id: 209, order_id: 3, rating: 3, title: "Average product, nothing special",     is_verified_purchase: 1, helpful_votes: 4,  status: "pending",   created_at: "2025-04-05 00:00:00" },
      { id: 4, product_id: 1, user_id: 210, order_id: 4, rating: 2, title: "Quality could be better",              is_verified_purchase: 1, helpful_votes: 7,  status: "rejected",  created_at: "2025-05-20 00:00:00" },
      { id: 5, product_id: 3, user_id: 211, order_id: 5, rating: 5, title: "Loved it! Will buy again",             is_verified_purchase: 1, helpful_votes: 31, status: "published", created_at: "2025-07-03 00:00:00" },
    ],
  },
};

export const tableTypes = {
  roles: {
    id: "INT", name: "VARCHAR", description: "TEXT", permissions: "JSON", created_at: "DATETIME", updated_at: "DATETIME",
  },
  users: {
    id: "INT", role_id: "INT", name: "VARCHAR", email: "VARCHAR", phone: "VARCHAR",
    is_email_verified: "TINYINT", status: "ENUM", last_login_at: "DATETIME", created_at: "DATETIME",
  },
  vendors: {
    id: "INT", user_id: "INT", store_name: "VARCHAR", contact_email: "VARCHAR", city: "VARCHAR",
    commission_rate: "DECIMAL", rating: "DECIMAL", status: "ENUM", approved_at: "DATETIME",
  },
  categories: {
    id: "INT", parent_id: "INT", name: "VARCHAR", slug: "VARCHAR",
    is_active: "TINYINT", display_order: "INT", created_at: "DATETIME",
  },
  products: {
    id: "INT", vendor_id: "INT", category_id: "INT", title: "VARCHAR", sku: "VARCHAR",
    price: "DECIMAL", sale_price: "DECIMAL", status: "ENUM", is_featured: "TINYINT", created_at: "DATETIME",
  },
  product_inventory: {
    id: "INT", product_id: "INT", quantity_in_stock: "INT", reserved_quantity: "INT",
    reorder_level: "INT", warehouse_location: "VARCHAR", last_restocked_at: "DATETIME",
  },
  carts: {
    id: "INT", user_id: "INT", status: "ENUM", total_amount: "DECIMAL",
    coupon_code: "VARCHAR", discount_amount: "DECIMAL", created_at: "DATETIME", abandoned_at: "DATETIME",
  },
  cart_items: {
    id: "INT", cart_id: "INT", product_id: "INT", quantity: "INT", unit_price: "DECIMAL", added_at: "DATETIME",
  },
  orders: {
    id: "INT", user_id: "INT", order_number: "VARCHAR", order_status: "ENUM", payment_status: "ENUM",
    total_amount: "DECIMAL", subtotal: "DECIMAL", shipping_amount: "DECIMAL", tax_amount: "DECIMAL", created_at: "DATETIME",
  },
  order_items: {
    id: "INT", order_id: "INT", product_id: "INT", vendor_id: "INT",
    quantity: "INT", unit_price: "DECIMAL", total_price: "DECIMAL", status: "VARCHAR",
    return_status: "VARCHAR", return_reason: "TEXT",
  },
  payments: {
    id: "INT", order_id: "INT", user_id: "INT", transaction_id: "VARCHAR",
    payment_method: "ENUM", payment_gateway: "ENUM", amount: "DECIMAL",
    status: "ENUM", failure_reason: "VARCHAR", created_at: "DATETIME",
  },
  shipments: {
    id: "INT", order_id: "INT", vendor_id: "INT", tracking_number: "VARCHAR",
    courier_partner: "VARCHAR", shipping_method: "ENUM", status: "ENUM",
    estimated_delivery_date: "DATE", shipping_cost: "DECIMAL",
  },
  reviews: {
    id: "INT", product_id: "INT", user_id: "INT", order_id: "INT", rating: "TINYINT",
    title: "VARCHAR", is_verified_purchase: "TINYINT", helpful_votes: "INT", status: "ENUM", created_at: "DATETIME",
  },
};

export const tableKeys = {
  roles:             { pk: "id", fk: {} },
  users:             { pk: "id", fk: { role_id: "roles.id" } },
  vendors:           { pk: "id", fk: { user_id: "users.id" } },
  categories:        { pk: "id", fk: { parent_id: "categories.id" } },
  products:          { pk: "id", fk: { vendor_id: "vendors.id", category_id: "categories.id" } },
  product_inventory: { pk: "id", fk: { product_id: "products.id" } },
  carts:             { pk: "id", fk: { user_id: "users.id" } },
  cart_items:        { pk: "id", fk: { cart_id: "carts.id", product_id: "products.id" } },
  orders:            { pk: "id", fk: { user_id: "users.id" } },
  order_items:       { pk: "id", fk: { order_id: "orders.id", product_id: "products.id", vendor_id: "vendors.id" } },
  payments:          { pk: "id", fk: { order_id: "orders.id", user_id: "users.id" } },
  shipments:         { pk: "id", fk: { order_id: "orders.id", vendor_id: "vendors.id" } },
  reviews:           { pk: "id", fk: { product_id: "products.id", user_id: "users.id", order_id: "orders.id" } },
};

export const tableIcons = {
  roles: "🔐",
  users: "👤",
  vendors: "🏪",
  categories: "📂",
  products: "📦",
  product_inventory: "🏭",
  carts: "🛒",
  cart_items: "🧺",
  orders: "📋",
  order_items: "🧾",
  payments: "💳",
  shipments: "🚚",
  reviews: "⭐",
};

export const questions = [
  { id: "Q1",  text: "List all users who registered in the last 30 days.", tables: ["users"],
    answer: `SELECT *\nFROM users\nWHERE created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY);` },
  { id: "Q2",  text: "Find all products with a price greater than ₹10,000.", tables: ["products"],
    answer: `SELECT *\nFROM products\nWHERE price > 10000;` },
  { id: "Q3",  text: "Retrieve all orders currently in 'delivered' status.", tables: ["orders"],
    answer: `SELECT *\nFROM orders\nWHERE order_status = 'delivered';` },
  { id: "Q4",  text: "Show all vendors whose status is 'active'.", tables: ["vendors"],
    answer: `SELECT *\nFROM vendors\nWHERE status = 'active';` },
  { id: "Q5",  text: "List all product categories along with their parent category name.", tables: ["categories"],
    answer: `SELECT\n    c.id,\n    c.name  AS category_name,\n    p.name  AS parent_category_name\nFROM categories c\nLEFT JOIN categories p ON c.parent_id = p.id;` },
  { id: "Q6",  text: "Find all customers (role = 'customer') who have verified their email.", tables: ["users", "roles"],
    answer: `SELECT u.*\nFROM users u\nJOIN roles r ON u.role_id = r.id\nWHERE r.name = 'customer'\n  AND u.is_email_verified = 1;` },
  { id: "Q7",  text: "Retrieve all products that belong to the 'Electronics' category.", tables: ["products", "categories"],
    answer: `SELECT p.*\nFROM products p\nJOIN categories c ON p.category_id = c.id\nWHERE c.name = 'Electronics';` },
  { id: "Q8",  text: "Show all orders placed by a specific user (user_id = 300).", tables: ["orders"],
    answer: `SELECT *\nFROM orders\nWHERE user_id = 300;` },
  { id: "Q9",  text: "List all cart items for a specific cart (cart_id = 50).", tables: ["cart_items"],
    answer: `SELECT *\nFROM cart_items\nWHERE cart_id = 50;` },
  { id: "Q10", text: "Find all reviews with a 5-star rating.", tables: ["reviews"],
    answer: `SELECT *\nFROM reviews\nWHERE rating = 5;` },
  { id: "Q11", text: "Retrieve all payments that failed.", tables: ["payments"],
    answer: `SELECT *\nFROM payments\nWHERE status = 'failed';` },
  { id: "Q12", text: "List all shipments handled by courier_partner = 'Delhivery'.", tables: ["shipments"],
    answer: `SELECT *\nFROM shipments\nWHERE courier_partner = 'Delhivery';` },
  { id: "Q13", text: "Find all products whose sale_price is NOT NULL (currently on discount).", tables: ["products"],
    answer: `SELECT *\nFROM products\nWHERE sale_price IS NOT NULL;` },
  { id: "Q14", text: "Show all users who have been banned.", tables: ["users"],
    answer: `SELECT *\nFROM users\nWHERE status = 'banned';` },
  { id: "Q15", text: "List all orders that used a coupon_code.", tables: ["orders"],
    answer: `SELECT *\nFROM orders\nWHERE coupon_code IS NOT NULL;` },
  { id: "Q16", text: "Retrieve the 10 most recently created products.", tables: ["products"],
    answer: `SELECT *\nFROM products\nORDER BY created_at DESC\nLIMIT 10;` },
  { id: "Q17", text: "Find all vendors located in the city 'Bangalore'.", tables: ["vendors"],
    answer: `SELECT *\nFROM vendors\nWHERE city = 'Bangalore';` },
  { id: "Q18", text: "Show all order_items for a specific order (order_id = 200).", tables: ["order_items"],
    answer: `SELECT *\nFROM order_items\nWHERE order_id = 200;` },
  { id: "Q19", text: "List all products in the 'Smartphones' sub-category.", tables: ["products", "categories"],
    answer: `SELECT p.*\nFROM products p\nJOIN categories c ON p.category_id = c.id\nWHERE c.name = 'Smartphones';` },
  { id: "Q20", text: "Retrieve all shipments currently in 'in_transit' status.", tables: ["shipments"],
    answer: `SELECT *\nFROM shipments\nWHERE status = 'in_transit';` },
  { id: "Q21", text: "Show all reviews that are pending moderation (status = 'pending').", tables: ["reviews"],
    answer: `SELECT *\nFROM reviews\nWHERE status = 'pending';` },
  { id: "Q22", text: "Find all products marked as featured (is_featured = 1).", tables: ["products"],
    answer: `SELECT *\nFROM products\nWHERE is_featured = 1;` },
  { id: "Q23", text: "List all orders where payment_status = 'paid'.", tables: ["orders"],
    answer: `SELECT *\nFROM orders\nWHERE payment_status = 'paid';` },
  { id: "Q24", text: "Retrieve all carts marked as 'abandoned'.", tables: ["carts"],
    answer: `SELECT *\nFROM carts\nWHERE status = 'abandoned';` },
  { id: "Q25", text: "Show the total count of products in the database.", tables: ["products"],
    answer: `SELECT COUNT(*) AS total_products\nFROM products;` },
  { id: "Q26", text: "Find all users whose phone number is NULL.", tables: ["users"],
    answer: `SELECT *\nFROM users\nWHERE phone IS NULL;` },
  { id: "Q27", text: "List all products with quantity_in_stock = 0 in the inventory table.", tables: ["products", "product_inventory"],
    answer: `SELECT p.*\nFROM products p\nJOIN product_inventory pi ON p.id = pi.product_id\nWHERE pi.quantity_in_stock = 0;` },
  { id: "Q28", text: "Show all orders created in the year 2024.", tables: ["orders"],
    answer: `SELECT *\nFROM orders\nWHERE YEAR(created_at) = 2024;` },
  { id: "Q29", text: "Retrieve all payments made via the 'upi' payment method.", tables: ["payments"],
    answer: `SELECT *\nFROM payments\nWHERE payment_method = 'upi';` },
  { id: "Q30", text: "List all products belonging to vendors with vendor_id between 10 and 20.", tables: ["products"],
    answer: `SELECT *\nFROM products\nWHERE vendor_id BETWEEN 10 AND 20;` },

  { id: "Q31", text: "Count total orders per order_status, sorted by count descending.", tables: ["orders"],
    answer: `SELECT\n    order_status,\n    COUNT(*) AS total_orders\nFROM orders\nGROUP BY order_status\nORDER BY total_orders DESC;` },
  { id: "Q32", text: "Calculate total revenue from all orders with payment_status = 'paid'.", tables: ["orders"],
    answer: `SELECT\n    SUM(total_amount) AS total_revenue\nFROM orders\nWHERE payment_status = 'paid';` },
  { id: "Q33", text: "Find the average product rating per product (using the reviews table).", tables: ["reviews"],
    answer: `SELECT\n    product_id,\n    ROUND(AVG(rating), 2) AS avg_rating,\n    COUNT(*)              AS review_count\nFROM reviews\nGROUP BY product_id\nORDER BY avg_rating DESC;` },
  { id: "Q34", text: "Show the number of products listed by each vendor, sorted highest first.", tables: ["products"],
    answer: `SELECT\n    vendor_id,\n    COUNT(*) AS product_count\nFROM products\nGROUP BY vendor_id\nORDER BY product_count DESC;` },
  { id: "Q35", text: "Find total orders placed per month in 2024.", tables: ["orders"],
    answer: `SELECT\n    MONTH(created_at)                AS month_number,\n    DATE_FORMAT(created_at, '%b %Y') AS month_label,\n    COUNT(*)                         AS total_orders\nFROM orders\nWHERE YEAR(created_at) = 2024\nGROUP BY MONTH(created_at), DATE_FORMAT(created_at, '%b %Y')\nORDER BY month_number;` },
  { id: "Q36", text: "Calculate total sales amount (SUM of total_price) per product from order_items.", tables: ["order_items"],
    answer: `SELECT\n    product_id,\n    SUM(total_price) AS total_sales_amount\nFROM order_items\nGROUP BY product_id\nORDER BY total_sales_amount DESC;` },
  { id: "Q37", text: "Find the top 5 categories by number of active products.", tables: ["categories", "products"],
    answer: `SELECT\n    c.id,\n    c.name          AS category_name,\n    COUNT(p.id)     AS active_product_count\nFROM categories c\nJOIN products p ON c.id = p.category_id\nWHERE p.status = 'active'\nGROUP BY c.id, c.name\nORDER BY active_product_count DESC\nLIMIT 5;` },
  { id: "Q38", text: "Show average order value per user — only users with 3 or more orders.", tables: ["orders"],
    answer: `SELECT\n    user_id,\n    COUNT(*)                    AS order_count,\n    ROUND(AVG(total_amount), 2) AS avg_order_value\nFROM orders\nGROUP BY user_id\nHAVING order_count >= 3\nORDER BY avg_order_value DESC;` },
  { id: "Q39", text: "Count failed payments per payment_gateway.", tables: ["payments"],
    answer: `SELECT\n    payment_gateway,\n    COUNT(*) AS failed_count\nFROM payments\nWHERE status = 'failed'\nGROUP BY payment_gateway\nORDER BY failed_count DESC;` },
  { id: "Q40", text: "Find all vendors who have listed more than 50 products.", tables: ["products"],
    answer: `SELECT\n    vendor_id,\n    COUNT(*) AS product_count\nFROM products\nGROUP BY vendor_id\nHAVING product_count > 50\nORDER BY product_count DESC;` },
  { id: "Q41", text: "Calculate the total refund_amount issued across all payments.", tables: ["payments"],
    answer: `SELECT\n    SUM(refund_amount) AS total_refund_amount\nFROM payments;` },
  { id: "Q42", text: "Show the number of reviews per rating value (1 through 5).", tables: ["reviews"],
    answer: `SELECT\n    rating,\n    COUNT(*) AS review_count\nFROM reviews\nGROUP BY rating\nORDER BY rating;` },
  { id: "Q43", text: "Find the total shipping_cost per courier_partner.", tables: ["shipments"],
    answer: `SELECT\n    courier_partner,\n    SUM(shipping_cost) AS total_shipping_cost\nFROM shipments\nGROUP BY courier_partner\nORDER BY total_shipping_cost DESC;` },
  { id: "Q44", text: "List products where discount percentage exceeds 30%.", tables: ["products"],
    answer: `SELECT\n    id,\n    title,\n    price,\n    sale_price,\n    ROUND((price - sale_price) / price * 100, 2) AS discount_pct\nFROM products\nWHERE sale_price IS NOT NULL\n  AND (price - sale_price) / price * 100 > 30\nORDER BY discount_pct DESC;` },
  { id: "Q45", text: "Count abandoned carts per user — show only users with 2 or more abandoned carts.", tables: ["carts"],
    answer: `SELECT\n    user_id,\n    COUNT(*) AS abandoned_count\nFROM carts\nWHERE status = 'abandoned'\nGROUP BY user_id\nHAVING abandoned_count >= 2\nORDER BY abandoned_count DESC;` },
  { id: "Q46", text: "Calculate total revenue per vendor for delivered orders only.", tables: ["order_items", "orders"],
    answer: `SELECT\n    oi.vendor_id,\n    SUM(oi.total_price) AS total_revenue\nFROM order_items oi\nJOIN orders o ON oi.order_id = o.id\nWHERE o.order_status = 'delivered'\nGROUP BY oi.vendor_id\nORDER BY total_revenue DESC;` },
  { id: "Q47", text: "Find the month with the highest number of new user registrations.", tables: ["users"],
    answer: `SELECT\n    DATE_FORMAT(created_at, '%b %Y') AS month_label,\n    COUNT(*)                         AS registrations\nFROM users\nGROUP BY DATE_FORMAT(created_at, '%b %Y'), YEAR(created_at), MONTH(created_at)\nORDER BY registrations DESC\nLIMIT 1;` },
  { id: "Q48", text: "Show products that have been reviewed more than 10 times.", tables: ["reviews"],
    answer: `SELECT\n    product_id,\n    COUNT(*) AS review_count\nFROM reviews\nGROUP BY product_id\nHAVING review_count > 10\nORDER BY review_count DESC;` },
  { id: "Q49", text: "Calculate the payment success rate (success / total) per payment_method.", tables: ["payments"],
    answer: `SELECT\n    payment_method,\n    COUNT(*)                                                        AS total_payments,\n    SUM(CASE WHEN status = 'success' THEN 1 ELSE 0 END)            AS successful,\n    ROUND(\n        SUM(CASE WHEN status = 'success' THEN 1 ELSE 0 END)\n        / COUNT(*) * 100, 2)                                        AS success_rate_pct\nFROM payments\nGROUP BY payment_method\nORDER BY success_rate_pct DESC;` },
  { id: "Q50", text: "Find the average delivery time in days for all delivered orders.", tables: ["orders"],
    answer: `SELECT\n    ROUND(AVG(DATEDIFF(delivered_at, created_at)), 2) AS avg_delivery_days\nFROM orders\nWHERE order_status = 'delivered'\n  AND delivered_at IS NOT NULL;` },
  { id: "Q51", text: "Show the number of orders placed per day of the week (Mon–Sun).", tables: ["orders"],
    answer: `SELECT\n    DAYOFWEEK(created_at) AS day_number,\n    DAYNAME(created_at)   AS day_name,\n    COUNT(*)              AS order_count\nFROM orders\nGROUP BY DAYOFWEEK(created_at), DAYNAME(created_at)\nORDER BY day_number;` },
  { id: "Q52", text: "Find the top 10 products by total quantity sold.", tables: ["order_items"],
    answer: `SELECT\n    product_id,\n    SUM(quantity) AS total_qty_sold\nFROM order_items\nGROUP BY product_id\nORDER BY total_qty_sold DESC\nLIMIT 10;` },
  { id: "Q53", text: "Calculate cart abandonment rate: abandoned carts ÷ total carts × 100.", tables: ["carts"],
    answer: `SELECT\n    COUNT(*)                                                        AS total_carts,\n    SUM(CASE WHEN status = 'abandoned' THEN 1 ELSE 0 END)          AS abandoned_carts,\n    ROUND(\n        SUM(CASE WHEN status = 'abandoned' THEN 1 ELSE 0 END)\n        / COUNT(*) * 100, 2)                                        AS abandonment_rate_pct\nFROM carts;` },
  { id: "Q54", text: "Show total revenue and order count grouped by order_status.", tables: ["orders"],
    answer: `SELECT\n    order_status,\n    COUNT(*)          AS order_count,\n    SUM(total_amount) AS total_revenue\nFROM orders\nGROUP BY order_status\nORDER BY total_revenue DESC;` },
  { id: "Q55", text: "Find vendors whose average product price exceeds ₹5,000.", tables: ["products"],
    answer: `SELECT\n    vendor_id,\n    ROUND(AVG(price), 2) AS avg_price\nFROM products\nGROUP BY vendor_id\nHAVING avg_price > 5000\nORDER BY avg_price DESC;` },
  { id: "Q56", text: "Count total products per category including sub-categories.", tables: ["categories", "products"],
    answer: `SELECT\n    c.id,\n    c.name          AS category_name,\n    COUNT(p.id)     AS product_count\nFROM categories c\nLEFT JOIN products p ON c.id = p.category_id\nGROUP BY c.id, c.name\nORDER BY product_count DESC;` },
  { id: "Q57", text: "Show number of shipments per shipping_method.", tables: ["shipments"],
    answer: `SELECT\n    shipping_method,\n    COUNT(*) AS shipment_count\nFROM shipments\nGROUP BY shipping_method\nORDER BY shipment_count DESC;` },
  { id: "Q58", text: "Find all orders where discount_amount > 500 and payment_status = 'paid'.", tables: ["orders"],
    answer: `SELECT *\nFROM orders\nWHERE discount_amount > 500\n  AND payment_status = 'paid';` },
  { id: "Q59", text: "Calculate the average vendor rating from reviews (joined through products).", tables: ["reviews", "products"],
    answer: `SELECT\n    p.vendor_id,\n    ROUND(AVG(r.rating), 2) AS avg_vendor_rating,\n    COUNT(r.id)             AS total_reviews\nFROM reviews r\nJOIN products p ON r.product_id = p.id\nGROUP BY p.vendor_id\nORDER BY avg_vendor_rating DESC;` },
  { id: "Q60", text: "Show total and average order value per quarter for the past year.", tables: ["orders"],
    answer: `SELECT\n    QUARTER(created_at)         AS quarter,\n    COUNT(*)                    AS order_count,\n    SUM(total_amount)           AS total_revenue,\n    ROUND(AVG(total_amount), 2) AS avg_order_value\nFROM orders\nWHERE created_at >= DATE_SUB(NOW(), INTERVAL 1 YEAR)\nGROUP BY QUARTER(created_at)\nORDER BY quarter;` },
  { id: "Q61", text: "Find products per vendor that are currently out of stock (quantity_in_stock = 0).", tables: ["products", "product_inventory"],
    answer: `SELECT\n    p.vendor_id,\n    COUNT(*) AS out_of_stock_count\nFROM products p\nJOIN product_inventory pi ON p.id = pi.product_id\nWHERE pi.quantity_in_stock = 0\nGROUP BY p.vendor_id\nORDER BY out_of_stock_count DESC;` },
  { id: "Q62", text: "List payment failure reasons with their frequency count.", tables: ["payments"],
    answer: `SELECT\n    failure_reason,\n    COUNT(*) AS frequency\nFROM payments\nWHERE status = 'failed'\n  AND failure_reason IS NOT NULL\nGROUP BY failure_reason\nORDER BY frequency DESC;` },
  { id: "Q63", text: "Show the percentage of orders that used a coupon_code.", tables: ["orders"],
    answer: `SELECT\n    COUNT(*)                                                        AS total_orders,\n    SUM(CASE WHEN coupon_code IS NOT NULL THEN 1 ELSE 0 END)       AS coupon_orders,\n    ROUND(\n        SUM(CASE WHEN coupon_code IS NOT NULL THEN 1 ELSE 0 END)\n        / COUNT(*) * 100, 2)                                        AS coupon_usage_pct\nFROM orders;` },
  { id: "Q64", text: "Find users who have placed orders but never written a review.", tables: ["orders", "reviews"],
    answer: `SELECT DISTINCT o.user_id\nFROM orders o\nLEFT JOIN reviews r ON o.user_id = r.user_id\nWHERE r.user_id IS NULL;` },
  { id: "Q65", text: "Calculate total tax collected per month.", tables: ["orders"],
    answer: `SELECT\n    DATE_FORMAT(created_at, '%b %Y') AS month_label,\n    SUM(tax_amount)                  AS total_tax\nFROM orders\nGROUP BY DATE_FORMAT(created_at, '%b %Y'), YEAR(created_at), MONTH(created_at)\nORDER BY YEAR(created_at), MONTH(created_at);` },
  { id: "Q66", text: "Show the top 5 vendor cities by total revenue.", tables: ["order_items", "vendors"],
    answer: `SELECT\n    v.city,\n    SUM(oi.total_price) AS total_revenue\nFROM order_items oi\nJOIN vendors v ON oi.vendor_id = v.id\nGROUP BY v.city\nORDER BY total_revenue DESC\nLIMIT 5;` },
  { id: "Q67", text: "Find the average number of items per order.", tables: ["order_items"],
    answer: `SELECT\n    ROUND(AVG(item_count), 2) AS avg_items_per_order\nFROM (\n    SELECT order_id, COUNT(*) AS item_count\n    FROM order_items\n    GROUP BY order_id\n) AS order_item_counts;` },
  { id: "Q68", text: "Count orders by both order_status and payment_status as a cross-tab matrix.", tables: ["orders"],
    answer: `SELECT\n    order_status,\n    SUM(CASE WHEN payment_status = 'pending'            THEN 1 ELSE 0 END) AS pay_pending,\n    SUM(CASE WHEN payment_status = 'paid'               THEN 1 ELSE 0 END) AS pay_paid,\n    SUM(CASE WHEN payment_status = 'failed'             THEN 1 ELSE 0 END) AS pay_failed,\n    SUM(CASE WHEN payment_status = 'refunded'           THEN 1 ELSE 0 END) AS pay_refunded,\n    SUM(CASE WHEN payment_status = 'partially_refunded' THEN 1 ELSE 0 END) AS pay_partial_refunded,\n    COUNT(*)                                                                AS row_total\nFROM orders\nGROUP BY order_status\nORDER BY order_status;` },
  { id: "Q69", text: "Show vendors ranked by commission_rate, highest first.", tables: ["vendors"],
    answer: `SELECT\n    id,\n    store_name,\n    commission_rate\nFROM vendors\nORDER BY commission_rate DESC;` },
  { id: "Q70", text: "Calculate total inventory value (quantity_in_stock × price) per category.", tables: ["categories", "products", "product_inventory"],
    answer: `SELECT\n    c.id,\n    c.name                              AS category_name,\n    SUM(pi.quantity_in_stock * p.price) AS total_inventory_value\nFROM categories c\nJOIN products p    ON c.id = p.category_id\nJOIN product_inventory pi ON p.id = pi.product_id\nGROUP BY c.id, c.name\nORDER BY total_inventory_value DESC;` },

  { id: "Q71", text: "Join users, vendors, and products — show vendor name, store name, and product count.", tables: ["users", "vendors", "products"],
    answer: `SELECT\n    u.name          AS vendor_user_name,\n    v.store_name,\n    COUNT(p.id)     AS product_count\nFROM vendors v\nJOIN users u    ON v.user_id   = u.id\nJOIN products p ON v.id        = p.vendor_id\nGROUP BY v.id, u.name, v.store_name\nORDER BY product_count DESC;` },

  { id: "Q72", text: "Get all orders with customer name, email, order_number, and total_amount.", tables: ["orders", "users"],
    answer: `SELECT\n    u.name          AS customer_name,\n    u.email,\n    o.order_number,\n    o.total_amount\nFROM orders o\nJOIN users u ON o.user_id = u.id\nORDER BY o.created_at DESC;` },

  { id: "Q73", text: "List all order_items with product title, vendor store name, quantity, and unit_price.", tables: ["order_items", "products", "vendors"],
    answer: `SELECT\n    p.title         AS product_title,\n    v.store_name    AS vendor_store_name,\n    oi.quantity,\n    oi.unit_price\nFROM order_items oi\nJOIN products p ON oi.product_id = p.id\nJOIN vendors  v ON oi.vendor_id  = v.id;` },

  { id: "Q74", text: "Show all reviews with reviewer name, product title, rating, and review body.", tables: ["reviews", "users", "products"],
    answer: `SELECT\n    u.name          AS reviewer_name,\n    p.title         AS product_title,\n    r.rating,\n    r.body          AS review_body\nFROM reviews r\nJOIN users    u ON r.user_id    = u.id\nJOIN products p ON r.product_id = p.id;` },

  { id: "Q75", text: "Join orders, payments, and users — show order with payment method and status.", tables: ["orders", "payments", "users"],
    answer: `SELECT\n    u.name              AS customer_name,\n    o.order_number,\n    o.total_amount,\n    py.payment_method,\n    py.status           AS payment_status\nFROM orders o\nJOIN users    u  ON o.user_id  = u.id\nJOIN payments py ON py.order_id = o.id;` },

  { id: "Q76", text: "Retrieve all shipments with order_number, customer name, courier, and current status.", tables: ["shipments", "orders", "users"],
    answer: `SELECT\n    o.order_number,\n    u.name              AS customer_name,\n    s.courier_partner,\n    s.status            AS shipment_status\nFROM shipments s\nJOIN orders o ON s.order_id  = o.id\nJOIN users  u ON o.user_id   = u.id;` },

  { id: "Q77", text: "Show abandoned carts with customer name, total_amount, and product titles in the cart.", tables: ["carts", "users", "cart_items", "products"],
    answer: `SELECT\n    u.name              AS customer_name,\n    c.total_amount,\n    GROUP_CONCAT(p.title SEPARATOR ' | ') AS products_in_cart\nFROM carts c\nJOIN users      u  ON c.user_id    = u.id\nJOIN cart_items ci ON ci.cart_id   = c.id\nJOIN products   p  ON ci.product_id = p.id\nWHERE c.status = 'abandoned'\nGROUP BY c.id, u.name, c.total_amount;` },

  { id: "Q78", text: "List products with category name, sub-category name, vendor name, and current stock level.", tables: ["products", "categories", "vendors", "product_inventory"],
    answer: `SELECT\n    p.title                 AS product_title,\n    parent.name             AS category_name,\n    cat.name                AS sub_category_name,\n    v.store_name            AS vendor_name,\n    pi.quantity_in_stock\nFROM products p\nJOIN categories     cat    ON p.category_id   = cat.id\nLEFT JOIN categories parent ON cat.parent_id  = parent.id\nJOIN vendors         v     ON p.vendor_id     = v.id\nJOIN product_inventory pi  ON p.id            = pi.product_id;` },

  { id: "Q79", text: "Join order_items and products to find revenue per product with vendor info.", tables: ["order_items", "products", "vendors"],
    answer: `SELECT\n    p.id            AS product_id,\n    p.title         AS product_title,\n    v.store_name    AS vendor_name,\n    SUM(oi.total_price) AS total_revenue\nFROM order_items oi\nJOIN products p ON oi.product_id = p.id\nJOIN vendors  v ON p.vendor_id   = v.id\nGROUP BY p.id, p.title, v.store_name\nORDER BY total_revenue DESC;` },

  { id: "Q80", text: "Show each vendor's total orders, total revenue, and average order value.", tables: ["vendors", "order_items"],
    answer: `SELECT\n    v.id            AS vendor_id,\n    v.store_name,\n    COUNT(DISTINCT oi.order_id)      AS total_orders,\n    SUM(oi.total_price)              AS total_revenue,\n    ROUND(SUM(oi.total_price) / COUNT(DISTINCT oi.order_id), 2) AS avg_order_value\nFROM vendors v\nJOIN order_items oi ON v.id = oi.vendor_id\nGROUP BY v.id, v.store_name\nORDER BY total_revenue DESC;` },

  { id: "Q81", text: "Get all users who have never placed an order (LEFT JOIN with NULL check).", tables: ["users", "orders"],
    answer: `SELECT\n    u.id,\n    u.name,\n    u.email\nFROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nWHERE o.id IS NULL;` },

  { id: "Q82", text: "List all products that are in active carts but have never been ordered.", tables: ["cart_items", "carts", "products", "order_items"],
    answer: `SELECT DISTINCT\n    p.id,\n    p.title\nFROM cart_items ci\nJOIN carts   c  ON ci.cart_id    = c.id\nJOIN products p ON ci.product_id = p.id\nLEFT JOIN order_items oi ON p.id = oi.product_id\nWHERE c.status  = 'active'\n  AND oi.id IS NULL;` },

  { id: "Q83", text: "Show all orders with their shipment tracking number and estimated delivery date.", tables: ["orders", "shipments"],
    answer: `SELECT\n    o.order_number,\n    s.tracking_number,\n    s.estimated_delivery_date\nFROM orders o\nJOIN shipments s ON o.id = s.order_id;` },

  { id: "Q84", text: "Find customers who placed orders but have not yet received them.", tables: ["orders", "users"],
    answer: `SELECT DISTINCT\n    u.id,\n    u.name,\n    u.email,\n    o.order_number,\n    o.order_status\nFROM orders o\nJOIN users u ON o.user_id = u.id\nWHERE o.order_status NOT IN ('delivered','cancelled','refunded');` },

  { id: "Q85", text: "Join products and product_inventory to list items below reorder_level.", tables: ["products", "product_inventory"],
    answer: `SELECT\n    p.id,\n    p.title,\n    pi.quantity_in_stock,\n    pi.reorder_level\nFROM products p\nJOIN product_inventory pi ON p.id = pi.product_id\nWHERE pi.quantity_in_stock <= pi.reorder_level\nORDER BY pi.quantity_in_stock;` },

  { id: "Q86", text: "Show all reviews that have vendor replies, including product and vendor name.", tables: ["reviews", "products", "vendors"],
    answer: `SELECT\n    r.id            AS review_id,\n    p.title         AS product_title,\n    v.store_name    AS vendor_name,\n    r.rating,\n    r.body,\n    r.reply\nFROM reviews r\nJOIN products p ON r.product_id = p.id\nJOIN vendors  v ON p.vendor_id  = v.id\nWHERE r.reply IS NOT NULL;` },

  { id: "Q87", text: "List all orders that contain products from more than one vendor.", tables: ["order_items"],
    answer: `SELECT\n    oi.order_id,\n    COUNT(DISTINCT oi.vendor_id) AS vendor_count\nFROM order_items oi\nGROUP BY oi.order_id\nHAVING vendor_count > 1\nORDER BY vendor_count DESC;` },

  { id: "Q88", text: "Find products where the vendor is suspended but the product is still active.", tables: ["products", "vendors"],
    answer: `SELECT\n    p.id,\n    p.title,\n    v.store_name,\n    v.status AS vendor_status\nFROM products p\nJOIN vendors v ON p.vendor_id = v.id\nWHERE v.status  = 'suspended'\n  AND p.status  = 'active';` },

  { id: "Q89", text: "Show product title, vendor name, category, and total revenue for featured products only.", tables: ["products", "vendors", "categories", "order_items"],
    answer: `SELECT\n    p.title             AS product_title,\n    v.store_name        AS vendor_name,\n    c.name              AS category_name,\n    SUM(oi.total_price) AS total_revenue\nFROM products p\nJOIN vendors     v  ON p.vendor_id   = v.id\nJOIN categories  c  ON p.category_id = c.id\nLEFT JOIN order_items oi ON p.id     = oi.product_id\nWHERE p.is_featured = 1\nGROUP BY p.id, p.title, v.store_name, c.name\nORDER BY total_revenue DESC;` },

  { id: "Q90", text: "Get the full order lifecycle in one query: order → payment → shipment.", tables: ["orders", "payments", "shipments"],
    answer: `SELECT\n    o.order_number,\n    o.order_status,\n    py.payment_method,\n    py.status        AS payment_status,\n    s.courier_partner,\n    s.status         AS shipment_status,\n    s.tracking_number\nFROM orders o\nLEFT JOIN payments  py ON o.id = py.order_id\nLEFT JOIN shipments s  ON o.id = s.order_id;` },

  { id: "Q91", text: "Show each category with count of active products and average price.", tables: ["categories", "products"],
    answer: `SELECT\n    c.id,\n    c.name              AS category_name,\n    COUNT(p.id)         AS active_product_count,\n    ROUND(AVG(p.price), 2) AS avg_price\nFROM categories c\nLEFT JOIN products p ON c.id = p.category_id AND p.status = 'active'\nGROUP BY c.id, c.name\nORDER BY active_product_count DESC;` },

  { id: "Q92", text: "List users who have purchased from at least 3 different product categories.", tables: ["orders", "order_items", "products"],
    answer: `SELECT\n    o.user_id,\n    COUNT(DISTINCT p.category_id) AS category_count\nFROM orders o\nJOIN order_items oi ON o.id  = oi.order_id\nJOIN products    p  ON oi.product_id = p.id\nGROUP BY o.user_id\nHAVING category_count >= 3\nORDER BY category_count DESC;` },

  { id: "Q93", text: "Show the vendor with the highest-rated products (avg rating + product count).", tables: ["vendors", "products", "reviews"],
    answer: `SELECT\n    v.id,\n    v.store_name,\n    ROUND(AVG(r.rating), 2) AS avg_rating,\n    COUNT(DISTINCT p.id)    AS product_count\nFROM vendors v\nJOIN products p ON v.id = p.vendor_id\nJOIN reviews  r ON p.id = r.product_id\nGROUP BY v.id, v.store_name\nORDER BY avg_rating DESC, product_count DESC\nLIMIT 10;` },

  { id: "Q94", text: "Join carts and cart_items to find total active cart value per user.", tables: ["carts", "cart_items"],
    answer: `SELECT\n    c.user_id,\n    SUM(ci.unit_price * ci.quantity) AS total_cart_value\nFROM carts c\nJOIN cart_items ci ON c.id = ci.cart_id\nWHERE c.status = 'active'\nGROUP BY c.user_id\nORDER BY total_cart_value DESC;` },

  { id: "Q95", text: "Show multi-item orders with item breakdown, vendor names, and per-item totals.", tables: ["orders", "order_items", "products", "vendors"],
    answer: `SELECT\n    o.order_number,\n    p.title         AS product_title,\n    v.store_name    AS vendor_name,\n    oi.quantity,\n    oi.unit_price,\n    oi.total_price\nFROM orders o\nJOIN order_items oi ON o.id         = oi.order_id\nJOIN products    p  ON oi.product_id = p.id\nJOIN vendors     v  ON oi.vendor_id  = v.id\nWHERE o.id IN (\n    SELECT order_id\n    FROM order_items\n    GROUP BY order_id\n    HAVING COUNT(*) > 1\n)\nORDER BY o.order_number, oi.id;` },

  { id: "Q96", text: "Verify that all reviews belong to actually purchased products (reviews → order_items).", tables: ["reviews", "order_items"],
    answer: `SELECT\n    r.id            AS review_id,\n    r.user_id,\n    r.product_id,\n    r.order_id\nFROM reviews r\nWHERE NOT EXISTS (\n    SELECT 1\n    FROM order_items oi\n    WHERE oi.order_id   = r.order_id\n      AND oi.product_id = r.product_id\n);` },

  { id: "Q97", text: "Show order totals alongside payment amounts to detect discrepancies.", tables: ["orders", "payments"],
    answer: `SELECT\n    o.order_number,\n    o.total_amount      AS order_total,\n    py.amount           AS payment_amount,\n    CASE\n        WHEN py.amount IS NULL        THEN 'No payment found'\n        WHEN o.total_amount = py.amount THEN 'Match'\n        ELSE 'Mismatch'\n    END AS reconciliation_status\nFROM orders o\nLEFT JOIN payments py ON o.id = py.order_id\nORDER BY reconciliation_status DESC;` },

  { id: "Q98", text: "List all vendors with their approved_at date and orders received since then.", tables: ["vendors", "order_items", "orders"],
    answer: `SELECT\n    v.id,\n    v.store_name,\n    v.approved_at,\n    COUNT(DISTINCT oi.order_id) AS orders_since_approval\nFROM vendors v\nLEFT JOIN order_items oi ON v.id = oi.vendor_id\nLEFT JOIN orders      o  ON oi.order_id = o.id\n    AND o.created_at >= v.approved_at\nGROUP BY v.id, v.store_name, v.approved_at\nORDER BY orders_since_approval DESC;` },

  { id: "Q99", text: "Get users with role name, total orders, total spent, and account status.", tables: ["users", "roles", "orders"],
    answer: `SELECT\n    u.id,\n    u.name,\n    r.name              AS role_name,\n    u.status            AS account_status,\n    COUNT(o.id)         AS total_orders,\n    ROUND(SUM(o.total_amount), 2) AS total_spent\nFROM users u\nJOIN roles r         ON u.role_id = r.id\nLEFT JOIN orders o   ON u.id      = o.user_id\nGROUP BY u.id, u.name, r.name, u.status\nORDER BY total_spent DESC;` },

  { id: "Q100", text: "Find categories that have no products currently listed.", tables: ["categories", "products"],
    answer: `SELECT\n    c.id,\n    c.name\nFROM categories c\nLEFT JOIN products p ON c.id = p.category_id\nWHERE p.id IS NULL;` },

  { id: "Q101", text: "Show all products with inventory status: in-stock / low-stock / out-of-stock.", tables: ["products", "product_inventory"],
    answer: `SELECT\n    p.id,\n    p.title,\n    pi.quantity_in_stock,\n    pi.reorder_level,\n    CASE\n        WHEN pi.quantity_in_stock = 0                         THEN 'out-of-stock'\n        WHEN pi.quantity_in_stock <= pi.reorder_level         THEN 'low-stock'\n        ELSE                                                       'in-stock'\n    END AS inventory_status\nFROM products p\nJOIN product_inventory pi ON p.id = pi.product_id\nORDER BY inventory_status, p.title;` },

  { id: "Q102", text: "List shipments that were delivered earlier than estimated_delivery_date.", tables: ["shipments"],
    answer: `SELECT\n    s.id,\n    s.tracking_number,\n    s.estimated_delivery_date,\n    s.actual_delivery_date,\n    DATEDIFF(s.estimated_delivery_date, s.actual_delivery_date) AS days_early\nFROM shipments s\nWHERE s.actual_delivery_date IS NOT NULL\n  AND s.actual_delivery_date < s.estimated_delivery_date;` },

  { id: "Q103", text: "Show customers who ordered, reviewed, and also have an active cart.", tables: ["users", "orders", "reviews", "carts"],
    answer: `SELECT DISTINCT u.id, u.name, u.email\nFROM users u\nWHERE EXISTS (\n    SELECT 1 FROM orders o WHERE o.user_id = u.id\n)\nAND EXISTS (\n    SELECT 1 FROM reviews r WHERE r.user_id = u.id\n)\nAND EXISTS (\n    SELECT 1 FROM carts c WHERE c.user_id = u.id AND c.status = 'active'\n);` },

  { id: "Q104", text: "Find orders that are paid but not yet shipped.", tables: ["orders", "shipments"],
    answer: `SELECT\n    o.id,\n    o.order_number,\n    o.order_status,\n    o.payment_status\nFROM orders o\nLEFT JOIN shipments s ON o.id = s.order_id\nWHERE o.payment_status = 'paid'\n  AND (s.id IS NULL OR s.status = 'pending')\n  AND o.order_status NOT IN ('cancelled','refunded');` },

  { id: "Q105", text: "Retrieve all vendors and the date of their most recent sale.", tables: ["vendors", "order_items", "orders"],
    answer: `SELECT\n    v.id,\n    v.store_name,\n    MAX(o.created_at) AS last_sale_date\nFROM vendors v\nLEFT JOIN order_items oi ON v.id = oi.vendor_id\nLEFT JOIN orders      o  ON oi.order_id = o.id\nGROUP BY v.id, v.store_name\nORDER BY last_sale_date DESC;` },

  { id: "Q106", text: "Show order_items with return_status NOT NULL, with customer name and reason.", tables: ["order_items", "orders", "users", "products"],
    answer: `SELECT\n    u.name              AS customer_name,\n    o.order_number,\n    p.title             AS product_title,\n    oi.return_status,\n    oi.return_reason\nFROM order_items oi\nJOIN orders   o  ON oi.order_id   = o.id\nJOIN users    u  ON o.user_id     = u.id\nJOIN products p  ON oi.product_id = p.id\nWHERE oi.return_status IS NOT NULL;` },

  { id: "Q107", text: "Find the most popular product in each category by total units sold.", tables: ["order_items", "products", "categories"],
    answer: `SELECT\n    c.name              AS category_name,\n    p.title             AS product_title,\n    SUM(oi.quantity)    AS total_units_sold\nFROM order_items oi\nJOIN products    p ON oi.product_id = p.id\nJOIN categories  c ON p.category_id = c.id\nWHERE (p.category_id, SUM(oi.quantity)) IN (\n    SELECT p2.category_id, MAX(sub.total_qty)\n    FROM (\n        SELECT product_id, SUM(quantity) AS total_qty\n        FROM order_items\n        GROUP BY product_id\n    ) sub\n    JOIN products p2 ON sub.product_id = p2.id\n    GROUP BY p2.category_id\n)\nGROUP BY c.name, p.id, p.title\nORDER BY total_units_sold DESC;` },

  { id: "Q108", text: "List all payments with refund_amount > 0, with order and user details.", tables: ["payments", "orders", "users"],
    answer: `SELECT\n    u.name          AS customer_name,\n    o.order_number,\n    py.transaction_id,\n    py.amount,\n    py.refund_amount,\n    py.refunded_at\nFROM payments py\nJOIN orders o ON py.order_id = o.id\nJOIN users  u ON py.user_id  = u.id\nWHERE py.refund_amount > 0\nORDER BY py.refund_amount DESC;` },

  { id: "Q109", text: "Join users, carts, and cart_items to find average cart value per role.", tables: ["users", "roles", "carts", "cart_items"],
    answer: `SELECT\n    r.name              AS role_name,\n    ROUND(AVG(ci.unit_price * ci.quantity), 2) AS avg_cart_item_value\nFROM users u\nJOIN roles      r  ON u.role_id    = r.id\nJOIN carts      c  ON u.id         = c.user_id\nJOIN cart_items ci ON c.id         = ci.cart_id\nGROUP BY r.name;` },

  { id: "Q110", text: "Show all products sold by inactive or suspended vendors.", tables: ["products", "vendors"],
    answer: `SELECT\n    p.id,\n    p.title,\n    v.store_name,\n    v.status AS vendor_status\nFROM products p\nJOIN vendors v ON p.vendor_id = v.id\nWHERE v.status IN ('inactive', 'suspended');` },

  { id: "Q111", text: "Calculate monthly revenue for the past 12 months with month-over-month growth %.", tables: ["orders"],
    answer: `SELECT\n    DATE_FORMAT(created_at, '%Y-%m') AS month,\n    SUM(total_amount)                 AS revenue,\n    ROUND(\n        (SUM(total_amount) - LAG(SUM(total_amount)) OVER (ORDER BY DATE_FORMAT(created_at, '%Y-%m')))\n        / LAG(SUM(total_amount)) OVER (ORDER BY DATE_FORMAT(created_at, '%Y-%m')) * 100\n    , 2) AS mom_growth_pct\nFROM orders\nWHERE payment_status = 'paid'\n  AND created_at >= DATE_SUB(NOW(), INTERVAL 12 MONTH)\nGROUP BY DATE_FORMAT(created_at, '%Y-%m')\nORDER BY month;` },

  { id: "Q112", text: "Build a vendor performance report: revenue, order count, avg rating, return rate, fulfillment speed.", tables: ["vendors", "order_items", "orders", "products", "reviews", "shipments"],
    answer: `SELECT\n    v.id                                AS vendor_id,\n    v.store_name,\n    SUM(oi.total_price)                 AS total_revenue,\n    COUNT(DISTINCT oi.order_id)         AS total_orders,\n    ROUND(AVG(r.rating), 2)             AS avg_rating,\n    ROUND(\n        SUM(CASE WHEN oi.return_status IS NOT NULL THEN 1 ELSE 0 END)\n        / COUNT(*) * 100, 2)            AS return_rate_pct,\n    ROUND(AVG(DATEDIFF(s.delivered_at, o.created_at)), 1) AS avg_fulfillment_days\nFROM vendors v\nLEFT JOIN order_items oi ON v.id          = oi.vendor_id\nLEFT JOIN orders      o  ON oi.order_id   = o.id\nLEFT JOIN products    p  ON oi.product_id = p.id\nLEFT JOIN reviews     r  ON p.id          = r.product_id\nLEFT JOIN shipments   s  ON o.id          = s.order_id AND s.vendor_id = v.id\nGROUP BY v.id, v.store_name\nORDER BY total_revenue DESC;` },

  { id: "Q113", text: "Rank products within each category by units sold — show top 3 per category.", tables: ["order_items", "products", "categories"],
    answer: `SELECT *\nFROM (\n    SELECT\n        c.name              AS category_name,\n        p.title             AS product_title,\n        SUM(oi.quantity)    AS units_sold,\n        RANK() OVER (\n            PARTITION BY p.category_id\n            ORDER BY SUM(oi.quantity) DESC\n        ) AS rnk\n    FROM order_items oi\n    JOIN products   p ON oi.product_id = p.id\n    JOIN categories c ON p.category_id = c.id\n    GROUP BY p.category_id, c.name, p.id, p.title\n) ranked\nWHERE rnk <= 3;` },

  { id: "Q114", text: "Calculate total lost revenue from items sitting in abandoned carts.", tables: ["carts", "cart_items"],
    answer: `SELECT\n    SUM(ci.unit_price * ci.quantity) AS lost_revenue\nFROM carts c\nJOIN cart_items ci ON c.id = ci.cart_id\nWHERE c.status = 'abandoned';` },

  { id: "Q115", text: "Calculate refund rate per vendor and flag those above 10%.", tables: ["vendors", "order_items", "orders", "payments"],
    answer: `SELECT\n    v.id,\n    v.store_name,\n    COUNT(DISTINCT oi.order_id)     AS total_orders,\n    SUM(py.refund_amount)           AS total_refunded,\n    SUM(oi.total_price)             AS total_revenue,\n    ROUND(SUM(py.refund_amount) / NULLIF(SUM(oi.total_price), 0) * 100, 2) AS refund_rate_pct,\n    CASE WHEN SUM(py.refund_amount) / NULLIF(SUM(oi.total_price), 0) * 100 > 10\n         THEN 'FLAGGED' ELSE 'OK' END AS flag\nFROM vendors v\nJOIN order_items oi ON v.id          = oi.vendor_id\nJOIN orders      o  ON oi.order_id   = o.id\nJOIN payments    py ON o.id          = py.order_id\nGROUP BY v.id, v.store_name\nORDER BY refund_rate_pct DESC;` },

  { id: "Q116", text: "Identify top-selling categories by revenue and their % of platform total.", tables: ["order_items", "products", "categories"],
    answer: `SELECT\n    c.name                          AS category_name,\n    SUM(oi.total_price)             AS category_revenue,\n    ROUND(\n        SUM(oi.total_price)\n        / SUM(SUM(oi.total_price)) OVER () * 100\n    , 2)                            AS pct_of_total\nFROM order_items oi\nJOIN products   p ON oi.product_id = p.id\nJOIN categories c ON p.category_id = c.id\nGROUP BY c.id, c.name\nORDER BY category_revenue DESC;` },

  { id: "Q117", text: "Find returning customers: 2+ orders, retention period, and total lifetime spend.", tables: ["orders"],
    answer: `SELECT\n    user_id,\n    COUNT(*)                                          AS order_count,\n    MIN(created_at)                                   AS first_order,\n    MAX(created_at)                                   AS last_order,\n    DATEDIFF(MAX(created_at), MIN(created_at))        AS retention_days,\n    ROUND(SUM(total_amount), 2)                       AS lifetime_spend\nFROM orders\nGROUP BY user_id\nHAVING order_count >= 2\nORDER BY lifetime_spend DESC;` },

  { id: "Q118", text: "Detect inventory alerts: products at or below reorder_level with days-to-stockout.", tables: ["products", "product_inventory", "order_items", "orders"],
    answer: `SELECT\n    p.id,\n    p.title,\n    pi.quantity_in_stock,\n    pi.reorder_level,\n    COALESCE(\n        ROUND(pi.quantity_in_stock / NULLIF(\n            (SELECT SUM(oi2.quantity)\n             FROM order_items oi2\n             WHERE oi2.product_id = p.id\n               AND oi2.order_id IN (\n                   SELECT id FROM orders WHERE created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)\n               )\n            ) / 30.0\n        , 0), 0)\n    , 999) AS days_to_stockout\nFROM products p\nJOIN product_inventory pi ON p.id = pi.product_id\nWHERE pi.quantity_in_stock <= pi.reorder_level\nORDER BY days_to_stockout;` },

  { id: "Q119", text: "Track average time between order status transitions (pending→confirmed, confirmed→delivered).", tables: ["orders"],
    answer: `SELECT\n    ROUND(AVG(DATEDIFF(confirmed_at, created_at)), 2)  AS avg_days_pending_to_confirmed,\n    ROUND(AVG(DATEDIFF(delivered_at, confirmed_at)), 2) AS avg_days_confirmed_to_delivered\nFROM orders\nWHERE confirmed_at IS NOT NULL\n  AND delivered_at IS NOT NULL;` },

  { id: "Q120", text: "Calculate payment failure rate per gateway per month.", tables: ["payments"],
    answer: `SELECT\n    payment_gateway,\n    DATE_FORMAT(created_at, '%Y-%m') AS month,\n    COUNT(*) AS total_payments,\n    SUM(CASE WHEN status = 'failed' THEN 1 ELSE 0 END) AS failed,\n    ROUND(\n        SUM(CASE WHEN status = 'failed' THEN 1 ELSE 0 END)\n        / COUNT(*) * 100, 2) AS failure_rate_pct\nFROM payments\nGROUP BY payment_gateway, DATE_FORMAT(created_at, '%Y-%m')\nORDER BY month, payment_gateway;` },

  { id: "Q121", text: "Identify delayed shipments: dispatched 7+ days ago and still not delivered.", tables: ["shipments"],
    answer: `SELECT\n    s.id,\n    s.tracking_number,\n    s.courier_partner,\n    s.dispatched_at,\n    s.status,\n    DATEDIFF(NOW(), s.dispatched_at) AS days_since_dispatch\nFROM shipments s\nWHERE s.status NOT IN ('delivered','returned','lost')\n  AND s.dispatched_at IS NOT NULL\n  AND DATEDIFF(NOW(), s.dispatched_at) >= 7\nORDER BY days_since_dispatch DESC;` },

  { id: "Q122", text: "Fraud detection: users with 3+ failed payments in the last 7 days.", tables: ["payments"],
    answer: `SELECT\n    user_id,\n    COUNT(*) AS failed_payment_count\nFROM payments\nWHERE status = 'failed'\n  AND created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)\nGROUP BY user_id\nHAVING failed_payment_count >= 3\nORDER BY failed_payment_count DESC;` },

  { id: "Q123", text: "Calculate customer lifetime value: total spend with tenure in months and avg monthly spend.", tables: ["users", "orders"],
    answer: `SELECT\n    u.id,\n    u.name,\n    ROUND(SUM(o.total_amount), 2)                AS lifetime_spend,\n    TIMESTAMPDIFF(MONTH, u.created_at, NOW())    AS tenure_months,\n    ROUND(\n        SUM(o.total_amount)\n        / NULLIF(TIMESTAMPDIFF(MONTH, u.created_at, NOW()), 0)\n    , 2)                                          AS avg_monthly_spend\nFROM users u\nJOIN orders o ON u.id = o.user_id\nWHERE o.payment_status = 'paid'\nGROUP BY u.id, u.name, u.created_at\nORDER BY lifetime_spend DESC;` },

  { id: "Q124", text: "Compute a rating quality score per product: % 5-star minus % 1-2 star reviews.", tables: ["reviews"],
    answer: `SELECT\n    product_id,\n    COUNT(*)                                                         AS total_reviews,\n    ROUND(SUM(CASE WHEN rating = 5 THEN 1 ELSE 0 END) / COUNT(*) * 100, 2) AS pct_5star,\n    ROUND(SUM(CASE WHEN rating <= 2 THEN 1 ELSE 0 END) / COUNT(*) * 100, 2) AS pct_1_2star,\n    ROUND(\n        SUM(CASE WHEN rating = 5 THEN 1 ELSE 0 END) / COUNT(*) * 100 -\n        SUM(CASE WHEN rating <= 2 THEN 1 ELSE 0 END) / COUNT(*) * 100\n    , 2) AS quality_score\nFROM reviews\nGROUP BY product_id\nORDER BY quality_score DESC;` },

  { id: "Q125", text: "Monthly cohort: for each registration month, how many users ordered within 30 days.", tables: ["users", "orders"],
    answer: `SELECT\n    DATE_FORMAT(u.created_at, '%Y-%m')  AS cohort_month,\n    COUNT(DISTINCT u.id)                 AS total_registered,\n    COUNT(DISTINCT o.user_id)            AS ordered_within_30d,\n    ROUND(\n        COUNT(DISTINCT o.user_id) / COUNT(DISTINCT u.id) * 100\n    , 2)                                 AS conversion_rate_pct\nFROM users u\nLEFT JOIN orders o\n    ON u.id = o.user_id\n   AND DATEDIFF(o.created_at, u.created_at) BETWEEN 0 AND 30\nGROUP BY DATE_FORMAT(u.created_at, '%Y-%m')\nORDER BY cohort_month;` },

  { id: "Q126", text: "Find products with high review volume but low rating (>20 reviews, avg < 3.0).", tables: ["reviews"],
    answer: `SELECT\n    product_id,\n    COUNT(*)            AS review_count,\n    ROUND(AVG(rating), 2) AS avg_rating\nFROM reviews\nGROUP BY product_id\nHAVING review_count > 20\n   AND avg_rating < 3.0\nORDER BY avg_rating;` },

  { id: "Q127", text: "Calculate average time between user registration and their very first order.", tables: ["users", "orders"],
    answer: `SELECT\n    ROUND(AVG(DATEDIFF(first_order.first_order_date, u.created_at)), 2) AS avg_days_to_first_order\nFROM users u\nJOIN (\n    SELECT user_id, MIN(created_at) AS first_order_date\n    FROM orders\n    GROUP BY user_id\n) first_order ON u.id = first_order.user_id;` },

  { id: "Q128", text: "Identify peak shopping hours: count orders per hour of day.", tables: ["orders"],
    answer: `SELECT\n    HOUR(created_at)    AS hour_of_day,\n    COUNT(*)            AS order_count\nFROM orders\nGROUP BY HOUR(created_at)\nORDER BY order_count DESC;` },

  { id: "Q129", text: "Show the top 10 customers by GMV in the last 90 days.", tables: ["orders", "users"],
    answer: `SELECT\n    u.id,\n    u.name,\n    u.email,\n    ROUND(SUM(o.total_amount), 2) AS gmv_90d\nFROM orders o\nJOIN users u ON o.user_id = u.id\nWHERE o.created_at >= DATE_SUB(NOW(), INTERVAL 90 DAY)\n  AND o.payment_status = 'paid'\nGROUP BY u.id, u.name, u.email\nORDER BY gmv_90d DESC\nLIMIT 10;` },

  { id: "Q130", text: "Calculate vendor commission earned per month (revenue × rate ÷ 100).", tables: ["vendors", "order_items", "orders"],
    answer: `SELECT\n    v.id,\n    v.store_name,\n    DATE_FORMAT(o.created_at, '%Y-%m')      AS month,\n    SUM(oi.total_price)                     AS gross_revenue,\n    v.commission_rate,\n    ROUND(SUM(oi.total_price) * v.commission_rate / 100, 2) AS commission_earned\nFROM vendors v\nJOIN order_items oi ON v.id        = oi.vendor_id\nJOIN orders      o  ON oi.order_id = o.id\nWHERE o.payment_status = 'paid'\nGROUP BY v.id, v.store_name, DATE_FORMAT(o.created_at, '%Y-%m'), v.commission_rate\nORDER BY month, commission_earned DESC;` },

  { id: "Q131", text: "Show cart-to-order conversion rate by month.", tables: ["carts"],
    answer: `SELECT\n    DATE_FORMAT(c.created_at, '%Y-%m')      AS month,\n    COUNT(DISTINCT c.id)                    AS total_carts,\n    COUNT(DISTINCT CASE WHEN c.status = 'converted' THEN c.id END) AS converted_carts,\n    ROUND(\n        COUNT(DISTINCT CASE WHEN c.status = 'converted' THEN c.id END)\n        / COUNT(DISTINCT c.id) * 100\n    , 2) AS conversion_rate_pct\nFROM carts c\nGROUP BY DATE_FORMAT(c.created_at, '%Y-%m')\nORDER BY month;` },

  { id: "Q132", text: "Identify products that were sold but are now inactive or deleted.", tables: ["order_items", "products"],
    answer: `SELECT DISTINCT\n    p.id,\n    p.title,\n    p.status AS product_status\nFROM order_items oi\nJOIN products p ON oi.product_id = p.id\nWHERE p.status IN ('inactive','deleted');` },

  { id: "Q133", text: "Find customers who ordered, then went inactive for 90+ days.", tables: ["orders"],
    answer: `SELECT\n    user_id,\n    MAX(created_at) AS last_order_date,\n    DATEDIFF(NOW(), MAX(created_at)) AS days_inactive\nFROM orders\nGROUP BY user_id\nHAVING days_inactive >= 90\nORDER BY days_inactive DESC;` },

  { id: "Q134", text: "Show seasonal trends: compare Q1 vs Q2 vs Q3 vs Q4 revenue.", tables: ["orders"],
    answer: `SELECT\n    YEAR(created_at) AS year,\n    SUM(CASE WHEN QUARTER(created_at) = 1 THEN total_amount ELSE 0 END) AS Q1,\n    SUM(CASE WHEN QUARTER(created_at) = 2 THEN total_amount ELSE 0 END) AS Q2,\n    SUM(CASE WHEN QUARTER(created_at) = 3 THEN total_amount ELSE 0 END) AS Q3,\n    SUM(CASE WHEN QUARTER(created_at) = 4 THEN total_amount ELSE 0 END) AS Q4\nFROM orders\nWHERE payment_status = 'paid'\nGROUP BY YEAR(created_at)\nORDER BY year;` },

  { id: "Q135", text: "Calculate ROI per category: total revenue vs total cost_price of sold items.", tables: ["order_items", "products", "categories"],
    answer: `SELECT\n    c.name                          AS category_name,\n    SUM(oi.total_price)             AS total_revenue,\n    SUM(p.cost_price * oi.quantity) AS total_cost,\n    ROUND(\n        (SUM(oi.total_price) - SUM(p.cost_price * oi.quantity))\n        / NULLIF(SUM(p.cost_price * oi.quantity), 0) * 100\n    , 2)                            AS roi_pct\nFROM order_items oi\nJOIN products   p ON oi.product_id = p.id\nJOIN categories c ON p.category_id = c.id\nWHERE p.cost_price IS NOT NULL\nGROUP BY c.id, c.name\nORDER BY roi_pct DESC;` },

  { id: "Q136", text: "Segment users into Bronze / Silver / Gold tiers by total spend.", tables: ["users", "orders"],
    answer: `SELECT\n    u.id,\n    u.name,\n    ROUND(SUM(o.total_amount), 2) AS total_spend,\n    CASE\n        WHEN SUM(o.total_amount) >= 100000 THEN 'Gold'\n        WHEN SUM(o.total_amount) >= 30000  THEN 'Silver'\n        ELSE                                    'Bronze'\n    END AS tier\nFROM users u\nJOIN orders o ON u.id = o.user_id\nWHERE o.payment_status = 'paid'\nGROUP BY u.id, u.name\nORDER BY total_spend DESC;` },

  { id: "Q137", text: "Show daily unique buyers (distinct users who placed an order) for the last 30 days.", tables: ["orders"],
    answer: `SELECT\n    DATE(created_at)              AS order_date,\n    COUNT(DISTINCT user_id)       AS unique_buyers\nFROM orders\nWHERE created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)\nGROUP BY DATE(created_at)\nORDER BY order_date;` },

  { id: "Q138", text: "Compute first-order vs repeat-order revenue split.", tables: ["orders"],
    answer: `SELECT\n    SUM(CASE WHEN rn = 1 THEN total_amount ELSE 0 END) AS first_order_revenue,\n    SUM(CASE WHEN rn > 1 THEN total_amount ELSE 0 END) AS repeat_order_revenue\nFROM (\n    SELECT\n        total_amount,\n        ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at) AS rn\n    FROM orders\n    WHERE payment_status = 'paid'\n) ranked;` },

  { id: "Q139", text: "Find products with zero sales in 60 days but still active and in stock.", tables: ["products", "product_inventory", "order_items", "orders"],
    answer: `SELECT\n    p.id,\n    p.title,\n    pi.quantity_in_stock\nFROM products p\nJOIN product_inventory pi ON p.id = pi.product_id\nWHERE p.status = 'active'\n  AND pi.quantity_in_stock > 0\n  AND p.id NOT IN (\n      SELECT DISTINCT oi.product_id\n      FROM order_items oi\n      JOIN orders o ON oi.order_id = o.id\n      WHERE o.created_at >= DATE_SUB(NOW(), INTERVAL 60 DAY)\n  );` },

  { id: "Q140", text: "Show vendor growth: this month's revenue vs same month last year with YoY growth %.", tables: ["vendors", "order_items", "orders"],
    answer: `SELECT\n    v.id,\n    v.store_name,\n    SUM(CASE\n        WHEN YEAR(o.created_at) = YEAR(NOW())\n         AND MONTH(o.created_at) = MONTH(NOW())\n        THEN oi.total_price ELSE 0 END) AS this_month_revenue,\n    SUM(CASE\n        WHEN YEAR(o.created_at) = YEAR(NOW()) - 1\n         AND MONTH(o.created_at) = MONTH(NOW())\n        THEN oi.total_price ELSE 0 END) AS same_month_last_year,\n    ROUND(\n        (SUM(CASE\n             WHEN YEAR(o.created_at) = YEAR(NOW())\n              AND MONTH(o.created_at) = MONTH(NOW())\n             THEN oi.total_price ELSE 0 END)\n        - SUM(CASE\n              WHEN YEAR(o.created_at) = YEAR(NOW()) - 1\n               AND MONTH(o.created_at) = MONTH(NOW())\n              THEN oi.total_price ELSE 0 END))\n        / NULLIF(SUM(CASE\n              WHEN YEAR(o.created_at) = YEAR(NOW()) - 1\n               AND MONTH(o.created_at) = MONTH(NOW())\n              THEN oi.total_price ELSE 0 END), 0) * 100\n    , 2) AS yoy_growth_pct\nFROM vendors v\nJOIN order_items oi ON v.id        = oi.vendor_id\nJOIN orders      o  ON oi.order_id = o.id\nWHERE o.payment_status = 'paid'\nGROUP BY v.id, v.store_name\nORDER BY yoy_growth_pct DESC;` },

  { id: "Q141", text: "Use ROW_NUMBER() to find the single most recent order per user.", tables: ["orders"],
    answer: `SELECT\n    *\nFROM (\n    SELECT\n        *,\n        ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at DESC) AS rn\n    FROM orders\n) ranked\nWHERE rn = 1;` },

  { id: "Q142", text: "Use RANK() to rank products by revenue within each category, showing all ties.", tables: ["order_items", "products", "categories"],
    answer: `SELECT\n    c.name              AS category_name,\n    p.title             AS product_title,\n    SUM(oi.total_price) AS revenue,\n    RANK() OVER (\n        PARTITION BY p.category_id\n        ORDER BY SUM(oi.total_price) DESC\n    ) AS revenue_rank\nFROM order_items oi\nJOIN products   p ON oi.product_id = p.id\nJOIN categories c ON p.category_id = c.id\nGROUP BY p.category_id, c.name, p.id, p.title;` },

  { id: "Q143", text: "Use LAG() to compare each month's revenue to the previous month.", tables: ["orders"],
    answer: `WITH monthly_revenue AS (\n    SELECT\n        DATE_FORMAT(created_at, '%Y-%m') AS month,\n        SUM(total_amount)                 AS revenue\n    FROM orders\n    WHERE payment_status = 'paid'\n    GROUP BY DATE_FORMAT(created_at, '%Y-%m')\n)\nSELECT\n    month,\n    revenue,\n    LAG(revenue) OVER (ORDER BY month)  AS prev_month_revenue,\n    ROUND(\n        (revenue - LAG(revenue) OVER (ORDER BY month))\n        / NULLIF(LAG(revenue) OVER (ORDER BY month), 0) * 100\n    , 2) AS mom_change_pct\nFROM monthly_revenue\nORDER BY month;` },

  { id: "Q144", text: "Use LEAD() to show each order and the same user's next order timestamp.", tables: ["orders"],
    answer: `SELECT\n    id              AS order_id,\n    user_id,\n    order_number,\n    created_at      AS order_date,\n    LEAD(created_at) OVER (PARTITION BY user_id ORDER BY created_at) AS next_order_date\nFROM orders\nORDER BY user_id, created_at;` },

  { id: "Q145", text: "Write a CTE to find users who placed orders in both Q1 and Q4 of the same year.", tables: ["orders"],
    answer: `WITH q1_orders AS (\n    SELECT DISTINCT user_id, YEAR(created_at) AS yr\n    FROM orders\n    WHERE QUARTER(created_at) = 1\n),\nq4_orders AS (\n    SELECT DISTINCT user_id, YEAR(created_at) AS yr\n    FROM orders\n    WHERE QUARTER(created_at) = 4\n)\nSELECT q1.user_id, q1.yr AS year\nFROM q1_orders q1\nJOIN q4_orders q4 ON q1.user_id = q4.user_id AND q1.yr = q4.yr\nORDER BY q1.yr, q1.user_id;` },

  { id: "Q146", text: "Use a recursive CTE to traverse the full category hierarchy.", tables: ["categories"],
    answer: `WITH RECURSIVE category_tree AS (\n    SELECT\n        id, parent_id, name, 0 AS depth,\n        CAST(name AS CHAR(1000)) AS path\n    FROM categories\n    WHERE parent_id IS NULL\n\n    UNION ALL\n\n    SELECT\n        c.id, c.parent_id, c.name, ct.depth + 1,\n        CONCAT(ct.path, ' > ', c.name)\n    FROM categories c\n    JOIN category_tree ct ON c.parent_id = ct.id\n)\nSELECT id, depth, path\nFROM category_tree\nORDER BY path;` },

  { id: "Q147", text: "Write a correlated subquery to rank each product within its vendor's catalog by revenue.", tables: ["products", "order_items"],
    answer: `SELECT\n    p.id            AS product_id,\n    p.title,\n    p.vendor_id,\n    (\n        SELECT SUM(oi2.total_price)\n        FROM order_items oi2\n        WHERE oi2.product_id = p.id\n    ) AS product_revenue,\n    (\n        SELECT COUNT(*) + 1\n        FROM products p2\n        WHERE p2.vendor_id = p.vendor_id\n          AND (\n              SELECT SUM(oi3.total_price) FROM order_items oi3 WHERE oi3.product_id = p2.id\n          ) > (\n              SELECT SUM(oi4.total_price) FROM order_items oi4 WHERE oi4.product_id = p.id\n          )\n    ) AS vendor_rank\nFROM products p\nORDER BY p.vendor_id, vendor_rank;` },

  { id: "Q148", text: "Use DENSE_RANK() to identify the top-3 vendors by monthly revenue for the last 6 months.", tables: ["vendors", "order_items", "orders"],
    answer: `SELECT *\nFROM (\n    SELECT\n        v.id            AS vendor_id,\n        v.store_name,\n        DATE_FORMAT(o.created_at, '%Y-%m') AS month,\n        SUM(oi.total_price) AS revenue,\n        DENSE_RANK() OVER (\n            PARTITION BY DATE_FORMAT(o.created_at, '%Y-%m')\n            ORDER BY SUM(oi.total_price) DESC\n        ) AS rnk\n    FROM vendors v\n    JOIN order_items oi ON v.id        = oi.vendor_id\n    JOIN orders      o  ON oi.order_id = o.id\n    WHERE o.created_at >= DATE_SUB(NOW(), INTERVAL 6 MONTH)\n      AND o.payment_status = 'paid'\n    GROUP BY v.id, v.store_name, DATE_FORMAT(o.created_at, '%Y-%m')\n) ranked\nWHERE rnk <= 3\nORDER BY month, rnk;` },

  { id: "Q149", text: "Use conditional aggregation to pivot payment statuses into columns per month.", tables: ["payments"],
    answer: `SELECT\n    DATE_FORMAT(created_at, '%Y-%m') AS month,\n    SUM(CASE WHEN status = 'pending'            THEN 1 ELSE 0 END) AS pending,\n    SUM(CASE WHEN status = 'success'            THEN 1 ELSE 0 END) AS success,\n    SUM(CASE WHEN status = 'failed'             THEN 1 ELSE 0 END) AS failed,\n    SUM(CASE WHEN status = 'refunded'           THEN 1 ELSE 0 END) AS refunded,\n    SUM(CASE WHEN status = 'partially_refunded' THEN 1 ELSE 0 END) AS partially_refunded\nFROM payments\nGROUP BY DATE_FORMAT(created_at, '%Y-%m')\nORDER BY month;` },

  { id: "Q150", text: "Write a CTE chain to calculate the 7-day rolling average revenue per vendor.", tables: ["order_items", "orders"],
    answer: `WITH daily_vendor_revenue AS (\n    SELECT\n        oi.vendor_id,\n        DATE(o.created_at)  AS sale_date,\n        SUM(oi.total_price) AS daily_revenue\n    FROM order_items oi\n    JOIN orders o ON oi.order_id = o.id\n    WHERE o.payment_status = 'paid'\n    GROUP BY oi.vendor_id, DATE(o.created_at)\n)\nSELECT\n    vendor_id,\n    sale_date,\n    daily_revenue,\n    ROUND(AVG(daily_revenue) OVER (\n        PARTITION BY vendor_id\n        ORDER BY sale_date\n        ROWS BETWEEN 6 PRECEDING AND CURRENT ROW\n    ), 2) AS rolling_7d_avg\nFROM daily_vendor_revenue\nORDER BY vendor_id, sale_date;` },

  { id: "Q151", text: "Use NTILE(4) to segment customers into revenue quartiles.", tables: ["orders"],
    answer: `SELECT\n    user_id,\n    ROUND(SUM(total_amount), 2) AS total_spend,\n    NTILE(4) OVER (ORDER BY SUM(total_amount)) AS quartile\nFROM orders\nWHERE payment_status = 'paid'\nGROUP BY user_id\nORDER BY quartile DESC, total_spend DESC;` },

  { id: "Q152", text: "Write a query using EXISTS to find products in both an active cart and a pending order.", tables: ["products", "cart_items", "carts", "order_items", "orders"],
    answer: `SELECT DISTINCT p.id, p.title\nFROM products p\nWHERE EXISTS (\n    SELECT 1\n    FROM cart_items ci\n    JOIN carts c ON ci.cart_id = c.id\n    WHERE ci.product_id = p.id AND c.status = 'active'\n)\nAND EXISTS (\n    SELECT 1\n    FROM order_items oi\n    JOIN orders o ON oi.order_id = o.id\n    WHERE oi.product_id = p.id AND o.order_status = 'pending'\n);` },

  { id: "Q153", text: "Use window SUM to calculate running total of revenue per vendor month-by-month.", tables: ["order_items", "orders"],
    answer: `WITH monthly AS (\n    SELECT\n        oi.vendor_id,\n        DATE_FORMAT(o.created_at, '%Y-%m') AS month,\n        SUM(oi.total_price)                 AS monthly_revenue\n    FROM order_items oi\n    JOIN orders o ON oi.order_id = o.id\n    WHERE o.payment_status = 'paid'\n    GROUP BY oi.vendor_id, DATE_FORMAT(o.created_at, '%Y-%m')\n)\nSELECT\n    vendor_id,\n    month,\n    monthly_revenue,\n    SUM(monthly_revenue) OVER (\n        PARTITION BY vendor_id\n        ORDER BY month\n        ROWS UNBOUNDED PRECEDING\n    ) AS running_total\nFROM monthly\nORDER BY vendor_id, month;` },

  { id: "Q154", text: "Use FIRST_VALUE() to show the first product ever listed in each category.", tables: ["products"],
    answer: `SELECT DISTINCT\n    category_id,\n    FIRST_VALUE(title) OVER (\n        PARTITION BY category_id\n        ORDER BY created_at\n    ) AS first_product_listed,\n    FIRST_VALUE(created_at) OVER (\n        PARTITION BY category_id\n        ORDER BY created_at\n    ) AS listed_at\nFROM products\nORDER BY category_id;` },

  { id: "Q155", text: "Write a correlated subquery to check each order's total matches its order_items sum.", tables: ["orders", "order_items"],
    answer: `SELECT\n    o.id            AS order_id,\n    o.order_number,\n    o.total_amount  AS order_total,\n    (\n        SELECT SUM(oi.total_price)\n        FROM order_items oi\n        WHERE oi.order_id = o.id\n    )               AS items_sum,\n    CASE\n        WHEN ABS(o.total_amount - (\n            SELECT SUM(oi2.total_price) FROM order_items oi2 WHERE oi2.order_id = o.id\n        )) < 1 THEN 'Match'\n        ELSE 'Mismatch'\n    END AS status\nFROM orders o\nORDER BY status DESC;` },

  { id: "Q156", text: "Use PERCENT_RANK() to show where each product falls in the overall price distribution.", tables: ["products"],
    answer: `SELECT\n    id,\n    title,\n    price,\n    ROUND(PERCENT_RANK() OVER (ORDER BY price) * 100, 2) AS price_percentile\nFROM products\nWHERE status = 'active'\nORDER BY price_percentile DESC;` },

  { id: "Q157", text: "Write a CTE + window function for 3-month moving average of orders per category.", tables: ["order_items", "products", "orders"],
    answer: `WITH monthly_category_orders AS (\n    SELECT\n        p.category_id,\n        DATE_FORMAT(o.created_at, '%Y-%m') AS month,\n        COUNT(DISTINCT o.id)               AS order_count\n    FROM order_items oi\n    JOIN orders   o ON oi.order_id   = o.id\n    JOIN products p ON oi.product_id = p.id\n    GROUP BY p.category_id, DATE_FORMAT(o.created_at, '%Y-%m')\n)\nSELECT\n    category_id,\n    month,\n    order_count,\n    ROUND(AVG(order_count) OVER (\n        PARTITION BY category_id\n        ORDER BY month\n        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW\n    ), 2) AS moving_avg_3m\nFROM monthly_category_orders\nORDER BY category_id, month;` },

  { id: "Q158", text: "Flag users as 'at risk' using CASE WHEN if their last order was 60+ days ago.", tables: ["orders"],
    answer: `SELECT\n    user_id,\n    MAX(created_at) AS last_order_date,\n    DATEDIFF(NOW(), MAX(created_at)) AS days_since_last_order,\n    CASE\n        WHEN DATEDIFF(NOW(), MAX(created_at)) >= 60 THEN 'At Risk'\n        ELSE 'Active'\n    END AS user_segment\nFROM orders\nGROUP BY user_id\nORDER BY days_since_last_order DESC;` },

  { id: "Q159", text: "Write a pivot-style query showing product revenue by month (Jan–Dec) as separate columns.", tables: ["order_items", "orders"],
    answer: `SELECT\n    oi.product_id,\n    SUM(CASE WHEN MONTH(o.created_at) =  1 THEN oi.total_price ELSE 0 END) AS Jan,\n    SUM(CASE WHEN MONTH(o.created_at) =  2 THEN oi.total_price ELSE 0 END) AS Feb,\n    SUM(CASE WHEN MONTH(o.created_at) =  3 THEN oi.total_price ELSE 0 END) AS Mar,\n    SUM(CASE WHEN MONTH(o.created_at) =  4 THEN oi.total_price ELSE 0 END) AS Apr,\n    SUM(CASE WHEN MONTH(o.created_at) =  5 THEN oi.total_price ELSE 0 END) AS May,\n    SUM(CASE WHEN MONTH(o.created_at) =  6 THEN oi.total_price ELSE 0 END) AS Jun,\n    SUM(CASE WHEN MONTH(o.created_at) =  7 THEN oi.total_price ELSE 0 END) AS Jul,\n    SUM(CASE WHEN MONTH(o.created_at) =  8 THEN oi.total_price ELSE 0 END) AS Aug,\n    SUM(CASE WHEN MONTH(o.created_at) =  9 THEN oi.total_price ELSE 0 END) AS Sep,\n    SUM(CASE WHEN MONTH(o.created_at) = 10 THEN oi.total_price ELSE 0 END) AS Oct,\n    SUM(CASE WHEN MONTH(o.created_at) = 11 THEN oi.total_price ELSE 0 END) AS Nov,\n    SUM(CASE WHEN MONTH(o.created_at) = 12 THEN oi.total_price ELSE 0 END) AS Decm\nFROM order_items oi\nJOIN orders o ON oi.order_id = o.id\nWHERE o.payment_status = 'paid'\nGROUP BY oi.product_id\nORDER BY oi.product_id;` },

  { id: "Q160", text: "Use a self-join on orders to find orders from the same user placed within 5 minutes.", tables: ["orders"],
    answer: `SELECT\n    a.id            AS order_1,\n    b.id            AS order_2,\n    a.user_id,\n    a.created_at    AS time_1,\n    b.created_at    AS time_2,\n    ABS(TIMESTAMPDIFF(SECOND, a.created_at, b.created_at)) AS seconds_apart\nFROM orders a\nJOIN orders b\n    ON a.user_id = b.user_id\n   AND a.id      < b.id\n   AND ABS(TIMESTAMPDIFF(SECOND, a.created_at, b.created_at)) <= 300\nORDER BY seconds_apart;` },

  { id: "Q161", text: "Write multiple CTEs to build a funnel: carts → orders → paid payments.", tables: ["carts", "orders", "shipments"],
    answer: `WITH carts_cte AS (\n    SELECT COUNT(*) AS total_carts FROM carts\n),\norders_cte AS (\n    SELECT COUNT(*) AS total_orders FROM orders\n),\npaid_cte AS (\n    SELECT COUNT(*) AS paid_orders FROM orders WHERE payment_status = 'paid'\n),\nshipped_cte AS (\n    SELECT COUNT(DISTINCT order_id) AS shipped_orders FROM shipments WHERE status != 'pending'\n)\nSELECT\n    c.total_carts,\n    o.total_orders,\n    p.paid_orders,\n    s.shipped_orders,\n    ROUND(o.total_orders / c.total_carts * 100, 2)   AS cart_to_order_pct,\n    ROUND(p.paid_orders  / o.total_orders * 100, 2)  AS order_to_paid_pct,\n    ROUND(s.shipped_orders / p.paid_orders * 100, 2) AS paid_to_shipped_pct\nFROM carts_cte c, orders_cte o, paid_cte p, shipped_cte s;` },

  { id: "Q162", text: "Use window SUM to calculate each order's % contribution to user's total lifetime spend.", tables: ["orders"],
    answer: `SELECT\n    user_id,\n    id          AS order_id,\n    total_amount,\n    SUM(total_amount) OVER (PARTITION BY user_id) AS lifetime_spend,\n    ROUND(total_amount / SUM(total_amount) OVER (PARTITION BY user_id) * 100, 2) AS pct_of_lifetime\nFROM orders\nWHERE payment_status = 'paid'\nORDER BY user_id, pct_of_lifetime DESC;` },

  { id: "Q163", text: "Write a NOT EXISTS subquery to find vendors with no orders in the last 30 days.", tables: ["vendors", "order_items", "orders"],
    answer: `SELECT\n    v.id,\n    v.store_name\nFROM vendors v\nWHERE NOT EXISTS (\n    SELECT 1\n    FROM order_items oi\n    JOIN orders o ON oi.order_id = o.id\n    WHERE oi.vendor_id = v.id\n      AND o.created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)\n);` },

  { id: "Q164", text: "Use ROW_NUMBER with PARTITION BY to keep only one review per user per product.", tables: ["reviews"],
    answer: `SELECT *\nFROM (\n    SELECT\n        *,\n        ROW_NUMBER() OVER (\n            PARTITION BY user_id, product_id\n            ORDER BY created_at DESC\n        ) AS rn\n    FROM reviews\n) deduped\nWHERE rn = 1;` },

  { id: "Q165", text: "Detect duplicate payments: same order_id, same amount, within 10 minutes.", tables: ["payments"],
    answer: `SELECT\n    a.id            AS payment_1,\n    b.id            AS payment_2,\n    a.order_id,\n    a.amount,\n    a.created_at    AS time_1,\n    b.created_at    AS time_2,\n    ABS(TIMESTAMPDIFF(MINUTE, a.created_at, b.created_at)) AS minutes_apart\nFROM payments a\nJOIN payments b\n    ON a.order_id = b.order_id\n   AND a.amount   = b.amount\n   AND a.id       < b.id\n   AND ABS(TIMESTAMPDIFF(MINUTE, a.created_at, b.created_at)) <= 10;` },

  { id: "Q166", text: "Use CUME_DIST() to find the top 20% of customers by total spend.", tables: ["orders"],
    answer: `SELECT *\nFROM (\n    SELECT\n        user_id,\n        ROUND(SUM(total_amount), 2) AS total_spend,\n        CUME_DIST() OVER (ORDER BY SUM(total_amount)) AS cume_dist_val\n    FROM orders\n    WHERE payment_status = 'paid'\n    GROUP BY user_id\n) dist\nWHERE cume_dist_val >= 0.80\nORDER BY total_spend DESC;` },

  { id: "Q167", text: "Write a CTE to calculate monthly churn: ordered last month but not this month.", tables: ["orders"],
    answer: `WITH last_month AS (\n    SELECT DISTINCT user_id\n    FROM orders\n    WHERE YEAR(created_at)  = YEAR(DATE_SUB(NOW(), INTERVAL 1 MONTH))\n      AND MONTH(created_at) = MONTH(DATE_SUB(NOW(), INTERVAL 1 MONTH))\n),\nthis_month AS (\n    SELECT DISTINCT user_id\n    FROM orders\n    WHERE YEAR(created_at)  = YEAR(NOW())\n      AND MONTH(created_at) = MONTH(NOW())\n)\nSELECT\n    lm.user_id,\n    'Churned' AS status\nFROM last_month lm\nLEFT JOIN this_month tm ON lm.user_id = tm.user_id\nWHERE tm.user_id IS NULL;` },

  { id: "Q168", text: "Use a derived table in FROM to pre-aggregate order_items before joining to orders.", tables: ["orders", "order_items"],
    answer: `SELECT\n    o.order_number,\n    o.total_amount      AS order_total,\n    oi_agg.items_subtotal,\n    oi_agg.item_count\nFROM orders o\nJOIN (\n    SELECT\n        order_id,\n        SUM(total_price) AS items_subtotal,\n        COUNT(*)         AS item_count\n    FROM order_items\n    GROUP BY order_id\n) oi_agg ON o.id = oi_agg.order_id\nORDER BY o.id;` },

  { id: "Q169", text: "Use a derived table to get the top 2 products sold per vendor.", tables: ["order_items"],
    answer: `SELECT *\nFROM (\n    SELECT\n        vendor_id,\n        product_id,\n        total_qty_sold,\n        ROW_NUMBER() OVER (\n            PARTITION BY vendor_id\n            ORDER BY total_qty_sold DESC\n        ) AS rn\n    FROM (\n        SELECT vendor_id, product_id, SUM(quantity) AS total_qty_sold\n        FROM order_items\n        GROUP BY vendor_id, product_id\n    ) product_sales\n) ranked\nWHERE rn <= 2\nORDER BY vendor_id, rn;` },

  { id: "Q170", text: "Use conditional aggregation to show order counts by status per vendor in one row.", tables: ["order_items", "orders"],
    answer: `SELECT\n    vendor_id,\n    SUM(CASE WHEN o.order_status = 'pending'    THEN 1 ELSE 0 END) AS pending,\n    SUM(CASE WHEN o.order_status = 'confirmed'  THEN 1 ELSE 0 END) AS confirmed,\n    SUM(CASE WHEN o.order_status = 'processing' THEN 1 ELSE 0 END) AS processing,\n    SUM(CASE WHEN o.order_status = 'shipped'    THEN 1 ELSE 0 END) AS shipped,\n    SUM(CASE WHEN o.order_status = 'delivered'  THEN 1 ELSE 0 END) AS delivered,\n    SUM(CASE WHEN o.order_status = 'cancelled'  THEN 1 ELSE 0 END) AS cancelled,\n    SUM(CASE WHEN o.order_status = 'refunded'   THEN 1 ELSE 0 END) AS refunded,\n    COUNT(DISTINCT oi.order_id)                                      AS total_orders\nFROM order_items oi\nJOIN orders o ON oi.order_id = o.id\nGROUP BY oi.vendor_id\nORDER BY total_orders DESC;` },

  { id: "Q171", text: "Build a full cohort retention table: for each monthly cohort show retention % for months 1–6.", tables: ["orders"],
    answer: `WITH cohorts AS (\n    SELECT\n        user_id,\n        DATE_FORMAT(MIN(created_at), '%Y-%m') AS cohort_month\n    FROM orders\n    GROUP BY user_id\n),\ncohort_orders AS (\n    SELECT\n        c.cohort_month,\n        c.user_id,\n        TIMESTAMPDIFF(MONTH,\n            STR_TO_DATE(CONCAT(c.cohort_month, '-01'), '%Y-%m-%d'),\n            o.created_at\n        ) AS month_number\n    FROM cohorts c\n    JOIN orders o ON c.user_id = o.user_id\n)\nSELECT\n    cohort_month,\n    COUNT(DISTINCT CASE WHEN month_number = 0 THEN user_id END) AS m0,\n    COUNT(DISTINCT CASE WHEN month_number = 1 THEN user_id END) AS m1,\n    COUNT(DISTINCT CASE WHEN month_number = 2 THEN user_id END) AS m2,\n    COUNT(DISTINCT CASE WHEN month_number = 3 THEN user_id END) AS m3,\n    COUNT(DISTINCT CASE WHEN month_number = 4 THEN user_id END) AS m4,\n    COUNT(DISTINCT CASE WHEN month_number = 5 THEN user_id END) AS m5,\n    COUNT(DISTINCT CASE WHEN month_number = 6 THEN user_id END) AS m6,\n    ROUND(COUNT(DISTINCT CASE WHEN month_number = 1 THEN user_id END)\n        / NULLIF(COUNT(DISTINCT CASE WHEN month_number = 0 THEN user_id END), 0) * 100, 1) AS ret_m1_pct,\n    ROUND(COUNT(DISTINCT CASE WHEN month_number = 3 THEN user_id END)\n        / NULLIF(COUNT(DISTINCT CASE WHEN month_number = 0 THEN user_id END), 0) * 100, 1) AS ret_m3_pct,\n    ROUND(COUNT(DISTINCT CASE WHEN month_number = 6 THEN user_id END)\n        / NULLIF(COUNT(DISTINCT CASE WHEN month_number = 0 THEN user_id END), 0) * 100, 1) AS ret_m6_pct\nFROM cohort_orders\nGROUP BY cohort_month\nORDER BY cohort_month;` },

  { id: "Q172", text: "Detect payment fraud: orders with 2+ payment attempts using different methods within 1 hour.", tables: ["payments"],
    answer: `SELECT\n    a.order_id,\n    a.id            AS payment_1,\n    b.id            AS payment_2,\n    a.payment_method AS method_1,\n    b.payment_method AS method_2,\n    a.created_at    AS attempt_1,\n    b.created_at    AS attempt_2,\n    ABS(TIMESTAMPDIFF(MINUTE, a.created_at, b.created_at)) AS minutes_apart\nFROM payments a\nJOIN payments b\n    ON a.order_id        = b.order_id\n   AND a.id              < b.id\n   AND a.payment_method != b.payment_method\n   AND ABS(TIMESTAMPDIFF(MINUTE, a.created_at, b.created_at)) <= 60;` },

  { id: "Q173", text: "Reconcile order totals: find orders where total ≠ subtotal + shipping − discount + tax.", tables: ["orders"],
    answer: `SELECT\n    id,\n    order_number,\n    total_amount,\n    ROUND(subtotal + shipping_amount - discount_amount + tax_amount, 2) AS expected_total,\n    ROUND(total_amount - (subtotal + shipping_amount - discount_amount + tax_amount), 2) AS discrepancy\nFROM orders\nWHERE ABS(total_amount - (subtotal + shipping_amount - discount_amount + tax_amount)) > 1\nORDER BY ABS(discrepancy) DESC;` },

  { id: "Q174", text: "Build a real-time inventory dashboard: stock, reserved, available, days-to-stockout per product.", tables: ["products", "product_inventory", "order_items", "orders"],
    answer: `SELECT\n    p.id,\n    p.title,\n    pi.quantity_in_stock,\n    pi.reserved_quantity,\n    pi.quantity_in_stock - pi.reserved_quantity AS available_stock,\n    COALESCE(ROUND(\n        pi.quantity_in_stock / NULLIF(\n            (SELECT SUM(oi.quantity) FROM order_items oi\n             JOIN orders o ON oi.order_id = o.id\n             WHERE oi.product_id = p.id\n               AND o.created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)\n            ) / 30.0\n        , 0)\n    , 0), 9999) AS days_to_stockout,\n    CASE\n        WHEN pi.quantity_in_stock = 0                        THEN 'OUT OF STOCK'\n        WHEN pi.quantity_in_stock <= pi.reorder_level        THEN 'REORDER NOW'\n        WHEN pi.quantity_in_stock <= pi.reorder_level * 2    THEN 'LOW STOCK'\n        ELSE 'HEALTHY'\n    END AS stock_status\nFROM products p\nJOIN product_inventory pi ON p.id = pi.product_id\nWHERE p.status = 'active'\nORDER BY days_to_stockout;` },

  { id: "Q175", text: "Build a vendor payout report: gross sales, platform commission, net payout per vendor/month.", tables: ["vendors", "order_items", "orders"],
    answer: `SELECT\n    v.id,\n    v.store_name,\n    DATE_FORMAT(o.created_at, '%Y-%m')         AS month,\n    ROUND(SUM(oi.total_price), 2)              AS gross_sales,\n    v.commission_rate,\n    ROUND(SUM(oi.total_price) * v.commission_rate / 100, 2) AS platform_commission,\n    ROUND(SUM(oi.total_price) * (1 - v.commission_rate / 100), 2) AS net_payout\nFROM vendors v\nJOIN order_items oi ON v.id        = oi.vendor_id\nJOIN orders      o  ON oi.order_id = o.id\nWHERE o.payment_status = 'paid'\nGROUP BY v.id, v.store_name, DATE_FORMAT(o.created_at, '%Y-%m'), v.commission_rate\nORDER BY month, net_payout DESC;` },

  { id: "Q176", text: "Detect fake review patterns: users who submitted 5+ reviews in a single day.", tables: ["reviews"],
    answer: `SELECT\n    user_id,\n    DATE(created_at)  AS review_date,\n    COUNT(*)          AS review_count\nFROM reviews\nGROUP BY user_id, DATE(created_at)\nHAVING review_count >= 5\nORDER BY review_count DESC;` },

  { id: "Q177", text: "Build an order funnel: cart created → order placed → payment success → shipment dispatched.", tables: ["carts", "orders", "shipments"],
    answer: `WITH funnel AS (\n    SELECT\n        (SELECT COUNT(*) FROM carts)                                              AS step1_carts,\n        (SELECT COUNT(*) FROM orders)                                             AS step2_orders,\n        (SELECT COUNT(*) FROM orders WHERE payment_status = 'paid')              AS step3_paid,\n        (SELECT COUNT(DISTINCT order_id) FROM shipments WHERE status != 'pending') AS step4_dispatched\n)\nSELECT\n    step1_carts,\n    step2_orders,\n    step3_paid,\n    step4_dispatched,\n    ROUND(step2_orders     / step1_carts       * 100, 2) AS cart_to_order_pct,\n    ROUND(step3_paid       / step2_orders      * 100, 2) AS order_to_paid_pct,\n    ROUND(step4_dispatched / step3_paid        * 100, 2) AS paid_to_dispatched_pct\nFROM funnel;` },

  { id: "Q178", text: "Calculate LTV prediction: average monthly spend × estimated remaining customer lifetime.", tables: ["users", "orders"],
    answer: `SELECT\n    u.id,\n    u.name,\n    TIMESTAMPDIFF(MONTH, u.created_at, NOW())          AS tenure_months,\n    ROUND(SUM(o.total_amount), 2)                       AS lifetime_spend,\n    ROUND(SUM(o.total_amount) / NULLIF(TIMESTAMPDIFF(MONTH, u.created_at, NOW()), 0), 2) AS avg_monthly_spend,\n    24                                                  AS estimated_remaining_months,\n    ROUND(\n        (SUM(o.total_amount) / NULLIF(TIMESTAMPDIFF(MONTH, u.created_at, NOW()), 0)) * 24\n    , 2)                                                AS predicted_ltv\nFROM users u\nJOIN orders o ON u.id = o.user_id\nWHERE o.payment_status = 'paid'\nGROUP BY u.id, u.name, u.created_at\nORDER BY predicted_ltv DESC;` },

  { id: "Q179", text: "Identify flash sale abuse: same product bought 3+ times in 24 hours by the same user.", tables: ["order_items", "orders"],
    answer: `SELECT\n    o.user_id,\n    oi.product_id,\n    DATE(o.created_at) AS order_date,\n    SUM(oi.quantity)   AS total_qty_ordered\nFROM order_items oi\nJOIN orders o ON oi.order_id = o.id\nGROUP BY o.user_id, oi.product_id, DATE(o.created_at)\nHAVING total_qty_ordered >= 3\nORDER BY total_qty_ordered DESC;` },

  { id: "Q180", text: "Build a product co-purchase query: top 5 product pairs ordered together most often.", tables: ["order_items"],
    answer: `SELECT\n    a.product_id AS product_a,\n    b.product_id AS product_b,\n    COUNT(*)     AS times_bought_together\nFROM order_items a\nJOIN order_items b\n    ON a.order_id  = b.order_id\n   AND a.product_id < b.product_id\nGROUP BY a.product_id, b.product_id\nORDER BY times_bought_together DESC\nLIMIT 5;` },

  { id: "Q181", text: "Write a multi-CTE vendor health score using revenue trend, return rate, rating, speed.", tables: ["vendors", "order_items", "orders", "products", "reviews", "shipments"],
    answer: `WITH vendor_revenue AS (\n    SELECT\n        oi.vendor_id,\n        SUM(oi.total_price) AS total_revenue\n    FROM order_items oi\n    JOIN orders o ON oi.order_id = o.id\n    WHERE o.payment_status = 'paid'\n    GROUP BY oi.vendor_id\n),\nvendor_returns AS (\n    SELECT\n        vendor_id,\n        ROUND(\n            SUM(CASE WHEN return_status IS NOT NULL THEN 1 ELSE 0 END)\n            / COUNT(*) * 100, 2) AS return_rate\n    FROM order_items\n    GROUP BY vendor_id\n),\nvendor_ratings AS (\n    SELECT\n        p.vendor_id,\n        ROUND(AVG(r.rating), 2) AS avg_rating\n    FROM reviews r\n    JOIN products p ON r.product_id = p.id\n    GROUP BY p.vendor_id\n),\nvendor_speed AS (\n    SELECT\n        s.vendor_id,\n        ROUND(AVG(DATEDIFF(s.delivered_at, o.created_at)), 1) AS avg_days\n    FROM shipments s\n    JOIN orders o ON s.order_id = o.id\n    WHERE s.delivered_at IS NOT NULL\n    GROUP BY s.vendor_id\n)\nSELECT\n    v.id,\n    v.store_name,\n    COALESCE(vr.total_revenue, 0)   AS total_revenue,\n    COALESCE(ret.return_rate, 0)    AS return_rate,\n    COALESCE(rat.avg_rating, 0)     AS avg_rating,\n    COALESCE(spd.avg_days, 99)      AS avg_delivery_days,\n    ROUND(\n        (COALESCE(rat.avg_rating, 0) / 5 * 40)\n        + ((1 - COALESCE(ret.return_rate, 0) / 100) * 30)\n        + (GREATEST(0, (14 - COALESCE(spd.avg_days, 14))) / 14 * 30)\n    , 2) AS health_score\nFROM vendors v\nLEFT JOIN vendor_revenue vr  ON v.id = vr.vendor_id\nLEFT JOIN vendor_returns ret ON v.id = ret.vendor_id\nLEFT JOIN vendor_ratings rat ON v.id = rat.vendor_id\nLEFT JOIN vendor_speed   spd ON v.id = spd.vendor_id\nORDER BY health_score DESC;` },

  { id: "Q182", text: "Build an RFM segmentation query: score all customers on Recency, Frequency, Monetary.", tables: ["orders"],
    answer: `WITH rfm_base AS (\n    SELECT\n        user_id,\n        DATEDIFF(NOW(), MAX(created_at))    AS recency_days,\n        COUNT(*)                            AS frequency,\n        ROUND(SUM(total_amount), 2)         AS monetary\n    FROM orders\n    WHERE payment_status = 'paid'\n    GROUP BY user_id\n)\nSELECT\n    user_id,\n    recency_days,\n    frequency,\n    monetary,\n    NTILE(5) OVER (ORDER BY recency_days DESC) AS r_score,\n    NTILE(5) OVER (ORDER BY frequency)         AS f_score,\n    NTILE(5) OVER (ORDER BY monetary)          AS m_score\nFROM rfm_base\nORDER BY m_score DESC, f_score DESC, r_score DESC;` },

  { id: "Q183", text: "Combine RFM scores into named tiers: Champions, Loyal, At Risk, Lost.", tables: ["orders"],
    answer: `WITH rfm_base AS (\n    SELECT\n        user_id,\n        DATEDIFF(NOW(), MAX(created_at)) AS recency_days,\n        COUNT(*)                         AS frequency,\n        SUM(total_amount)                AS monetary\n    FROM orders\n    WHERE payment_status = 'paid'\n    GROUP BY user_id\n),\nrfm_scored AS (\n    SELECT\n        user_id,\n        NTILE(5) OVER (ORDER BY recency_days DESC) AS r_score,\n        NTILE(5) OVER (ORDER BY frequency)         AS f_score,\n        NTILE(5) OVER (ORDER BY monetary)          AS m_score\n    FROM rfm_base\n)\nSELECT\n    user_id,\n    r_score, f_score, m_score,\n    CASE\n        WHEN r_score >= 4 AND f_score >= 4 AND m_score >= 4 THEN 'Champion'\n        WHEN f_score >= 3 AND m_score >= 3                  THEN 'Loyal'\n        WHEN r_score <= 2 AND f_score >= 2                  THEN 'At Risk'\n        WHEN r_score = 1  AND f_score = 1                   THEN 'Lost'\n        ELSE 'Potential Loyalist'\n    END AS rfm_tier\nFROM rfm_scored\nORDER BY rfm_tier, m_score DESC;` },

  { id: "Q184", text: "Find products with demand surge: 3× more orders than their 30-day average in last 7 days.", tables: ["order_items", "orders"],
    answer: `SELECT\n    product_id,\n    recent_qty,\n    avg_daily_30d,\n    ROUND(recent_qty / NULLIF(avg_daily_30d * 7, 0), 2) AS surge_multiplier\nFROM (\n    SELECT\n        oi.product_id,\n        SUM(CASE WHEN o.created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)  THEN oi.quantity ELSE 0 END) AS recent_qty,\n        SUM(CASE WHEN o.created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY) THEN oi.quantity ELSE 0 END) / 30.0 AS avg_daily_30d\n    FROM order_items oi\n    JOIN orders o ON oi.order_id = o.id\n    GROUP BY oi.product_id\n) demand\nWHERE recent_qty >= avg_daily_30d * 7 * 3\n  AND avg_daily_30d > 0\nORDER BY surge_multiplier DESC;` },

  { id: "Q185", text: "Build a dynamic pricing signal: products in top 10% demand but fewer than 20 units in stock.", tables: ["products", "product_inventory", "order_items", "orders"],
    answer: `SELECT\n    p.id,\n    p.title,\n    pi.quantity_in_stock,\n    demand.units_sold_30d,\n    PERCENT_RANK() OVER (ORDER BY demand.units_sold_30d) AS demand_pct_rank\nFROM products p\nJOIN product_inventory pi ON p.id = pi.product_id\nJOIN (\n    SELECT oi.product_id, SUM(oi.quantity) AS units_sold_30d\n    FROM order_items oi\n    JOIN orders o ON oi.order_id = o.id\n    WHERE o.created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)\n    GROUP BY oi.product_id\n) demand ON p.id = demand.product_id\nWHERE pi.quantity_in_stock < 20\n  AND (\n      SELECT COUNT(*) FROM (\n          SELECT product_id, SUM(quantity) AS qty\n          FROM order_items oi2\n          JOIN orders o2 ON oi2.order_id = o2.id\n          WHERE o2.created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)\n          GROUP BY product_id\n      ) sub WHERE sub.qty > demand.units_sold_30d\n  ) / (\n      SELECT COUNT(DISTINCT product_id)\n      FROM order_items oi3\n      JOIN orders o3 ON oi3.order_id = o3.id\n      WHERE o3.created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)\n  ) <= 0.10\nORDER BY units_sold_30d DESC;` },

  { id: "Q186", text: "Audit price integrity: order_items where unit_price differs from current price by > 20%.", tables: ["order_items", "products"],
    answer: `SELECT\n    oi.id           AS order_item_id,\n    oi.order_id,\n    oi.product_id,\n    oi.unit_price   AS sold_price,\n    p.price         AS current_price,\n    ROUND(ABS(oi.unit_price - p.price) / p.price * 100, 2) AS price_drift_pct\nFROM order_items oi\nJOIN products p ON oi.product_id = p.id\nWHERE ABS(oi.unit_price - p.price) / p.price * 100 > 20\nORDER BY price_drift_pct DESC;` },

  { id: "Q187", text: "Build an SLA breach report: confirmed 2+ days ago, shipment still in 'pending'.", tables: ["orders", "shipments"],
    answer: `SELECT\n    o.id,\n    o.order_number,\n    o.confirmed_at,\n    s.status AS shipment_status,\n    DATEDIFF(NOW(), o.confirmed_at) AS days_since_confirmation\nFROM orders o\nLEFT JOIN shipments s ON o.id = s.order_id\nWHERE o.confirmed_at IS NOT NULL\n  AND DATEDIFF(NOW(), o.confirmed_at) >= 2\n  AND (s.id IS NULL OR s.status = 'pending')\n  AND o.order_status NOT IN ('cancelled','refunded')\nORDER BY days_since_confirmation DESC;` },

  { id: "Q188", text: "Build a chargeback risk model: refund_amount > 50% of total spend in last 90 days.", tables: ["users", "orders", "payments"],
    answer: `SELECT\n    u.id,\n    u.name,\n    SUM(o.total_amount)     AS total_spend_90d,\n    SUM(py.refund_amount)   AS total_refunded_90d,\n    ROUND(SUM(py.refund_amount) / NULLIF(SUM(o.total_amount), 0) * 100, 2) AS refund_ratio_pct\nFROM users u\nJOIN orders   o  ON u.id      = o.user_id\nJOIN payments py ON o.id      = py.order_id\nWHERE o.created_at >= DATE_SUB(NOW(), INTERVAL 90 DAY)\nGROUP BY u.id, u.name\nHAVING refund_ratio_pct > 50\nORDER BY refund_ratio_pct DESC;` },

  { id: "Q189", text: "Detect inventory shrinkage: total sold + current stock vs total restocked.", tables: ["products", "product_inventory", "order_items"],
    answer: `SELECT\n    p.id,\n    p.title,\n    pi.quantity_in_stock               AS current_stock,\n    COALESCE(sold.total_sold, 0)       AS total_sold,\n    pi.quantity_in_stock + COALESCE(sold.total_sold, 0) AS accounted_for,\n    pi.reorder_quantity                AS last_reorder_qty,\n    (pi.quantity_in_stock + COALESCE(sold.total_sold, 0)) - pi.reorder_quantity AS shrinkage_estimate\nFROM products p\nJOIN product_inventory pi ON p.id = pi.product_id\nLEFT JOIN (\n    SELECT product_id, SUM(quantity) AS total_sold\n    FROM order_items\n    GROUP BY product_id\n) sold ON p.id = sold.product_id\nWHERE (pi.quantity_in_stock + COALESCE(sold.total_sold, 0)) < pi.reorder_quantity\nORDER BY shrinkage_estimate;` },

  { id: "Q190", text: "Build a demand forecast baseline: 12-month sales history → projected next month demand.", tables: ["order_items", "orders"],
    answer: `WITH monthly_sales AS (\n    SELECT\n        oi.product_id,\n        DATE_FORMAT(o.created_at, '%Y-%m') AS month,\n        SUM(oi.quantity)                    AS monthly_qty\n    FROM order_items oi\n    JOIN orders o ON oi.order_id = o.id\n    WHERE o.created_at >= DATE_SUB(NOW(), INTERVAL 12 MONTH)\n    GROUP BY oi.product_id, DATE_FORMAT(o.created_at, '%Y-%m')\n)\nSELECT\n    product_id,\n    ROUND(AVG(monthly_qty), 0)                                   AS avg_monthly_demand,\n    MAX(monthly_qty)                                             AS peak_demand,\n    ROUND(AVG(monthly_qty) * 1.10, 0)                           AS projected_next_month\nFROM monthly_sales\nGROUP BY product_id\nORDER BY projected_next_month DESC;` },

  { id: "Q191", text: "Detect account sharing: different shipping addresses from same user in the same hour.", tables: ["orders"],
    answer: `SELECT\n    o1.user_id,\n    COUNT(DISTINCT o1.id)   AS orders_in_hour,\n    COUNT(DISTINCT o1.shipping_address) AS distinct_addresses\nFROM orders o1\nJOIN orders o2\n    ON o1.user_id = o2.user_id\n   AND o1.id      < o2.id\n   AND ABS(TIMESTAMPDIFF(MINUTE, o1.created_at, o2.created_at)) <= 60\nWHERE o1.shipping_address != o2.shipping_address\n  AND o1.shipping_address IS NOT NULL\n  AND o2.shipping_address IS NOT NULL\nGROUP BY o1.user_id\nHAVING distinct_addresses > 1\nORDER BY distinct_addresses DESC;` },

  { id: "Q192", text: "Use JSON_EXTRACT to analyze payment gateway_response error codes.", tables: ["payments"],
    answer: `SELECT\n    payment_gateway,\n    JSON_UNQUOTE(JSON_EXTRACT(gateway_response, '$.error_code'))    AS error_code,\n    JSON_UNQUOTE(JSON_EXTRACT(gateway_response, '$.error_message')) AS error_message,\n    COUNT(*)                                                          AS frequency\nFROM payments\nWHERE status = 'failed'\n  AND gateway_response IS NOT NULL\nGROUP BY payment_gateway,\n         JSON_EXTRACT(gateway_response, '$.error_code'),\n         JSON_EXTRACT(gateway_response, '$.error_message')\nORDER BY frequency DESC;` },

  { id: "Q193", text: "Build a supplier scorecard: on-time delivery %, returned shipments %, order volume.", tables: ["shipments"],
    answer: `SELECT\n    s.courier_partner,\n    COUNT(*)                                                             AS total_shipments,\n    ROUND(\n        SUM(CASE WHEN s.actual_delivery_date <= s.estimated_delivery_date THEN 1 ELSE 0 END)\n        / NULLIF(COUNT(CASE WHEN s.actual_delivery_date IS NOT NULL THEN 1 END), 0) * 100\n    , 2)                                                                 AS on_time_delivery_pct,\n    ROUND(\n        SUM(CASE WHEN s.status = 'returned' THEN 1 ELSE 0 END)\n        / COUNT(*) * 100\n    , 2)                                                                 AS return_rate_pct\nFROM shipments s\nGROUP BY s.courier_partner\nORDER BY on_time_delivery_pct DESC;` },

  { id: "Q194", text: "Write an alert query: vendor has not updated shipment status in 48 hours post-confirmation.", tables: ["vendors", "order_items", "orders", "shipments"],
    answer: `SELECT\n    v.id            AS vendor_id,\n    v.store_name,\n    o.order_number,\n    o.confirmed_at,\n    s.status        AS shipment_status,\n    s.created_at    AS shipment_created_at,\n    DATEDIFF(NOW(), o.confirmed_at) AS hours_since_confirmation\nFROM vendors v\nJOIN order_items oi ON v.id       = oi.vendor_id\nJOIN orders      o  ON oi.order_id = o.id\nLEFT JOIN shipments s ON o.id     = s.order_id AND s.vendor_id = v.id\nWHERE o.confirmed_at IS NOT NULL\n  AND TIMESTAMPDIFF(HOUR, o.confirmed_at, NOW()) >= 48\n  AND (s.id IS NULL OR s.status = 'pending')\n  AND o.order_status NOT IN ('cancelled','refunded','delivered')\nORDER BY hours_since_confirmation DESC;` },

  { id: "Q195", text: "Build smart reorder suggestions: (30-day velocity × 14) > current stock.", tables: ["order_items", "orders", "products", "product_inventory"],
    answer: `WITH velocity AS (\n    SELECT\n        oi.product_id,\n        SUM(oi.quantity) / 30.0 AS daily_velocity\n    FROM order_items oi\n    JOIN orders o ON oi.order_id = o.id\n    WHERE o.created_at >= DATE_SUB(NOW(), INTERVAL 30 DAY)\n    GROUP BY oi.product_id\n)\nSELECT\n    p.id,\n    p.title,\n    pi.quantity_in_stock,\n    ROUND(v.daily_velocity, 2)              AS daily_velocity,\n    ROUND(v.daily_velocity * 14, 0)         AS units_needed_14d,\n    ROUND(v.daily_velocity * 14 - pi.quantity_in_stock, 0) AS reorder_qty_suggestion\nFROM products p\nJOIN product_inventory pi ON p.id = pi.product_id\nJOIN velocity v            ON p.id = v.product_id\nWHERE v.daily_velocity * 14 > pi.quantity_in_stock\n  AND p.status = 'active'\nORDER BY reorder_qty_suggestion DESC;` },

  { id: "Q196", text: "Write a weekly active user (WAU) trend query for the past 12 weeks.", tables: ["orders"],
    answer: `SELECT\n    YEAR(created_at)                 AS yr,\n    WEEK(created_at, 1)              AS week_number,\n    MIN(DATE(created_at))            AS week_start,\n    COUNT(DISTINCT user_id)          AS weekly_active_users\nFROM orders\nWHERE created_at >= DATE_SUB(NOW(), INTERVAL 12 WEEK)\nGROUP BY YEAR(created_at), WEEK(created_at, 1)\nORDER BY yr, week_number;` },

  { id: "Q197", text: "Identify revenue leakage: delivered orders with no matching payment record.", tables: ["orders", "payments"],
    answer: `SELECT\n    o.id,\n    o.order_number,\n    o.total_amount,\n    o.order_status,\n    o.payment_status\nFROM orders o\nLEFT JOIN payments py ON o.id = py.order_id\nWHERE o.order_status  = 'delivered'\n  AND py.id IS NULL\nORDER BY o.total_amount DESC;` },

  { id: "Q198", text: "Build a new vs returning customer revenue split per month.", tables: ["orders"],
    answer: `WITH first_orders AS (\n    SELECT user_id, MIN(created_at) AS first_order_date\n    FROM orders\n    GROUP BY user_id\n)\nSELECT\n    DATE_FORMAT(o.created_at, '%Y-%m') AS month,\n    SUM(CASE\n        WHEN DATE_FORMAT(o.created_at, '%Y-%m') = DATE_FORMAT(fo.first_order_date, '%Y-%m')\n        THEN o.total_amount ELSE 0 END) AS new_customer_revenue,\n    SUM(CASE\n        WHEN DATE_FORMAT(o.created_at, '%Y-%m') != DATE_FORMAT(fo.first_order_date, '%Y-%m')\n        THEN o.total_amount ELSE 0 END) AS returning_customer_revenue,\n    COUNT(DISTINCT CASE\n        WHEN DATE_FORMAT(o.created_at, '%Y-%m') = DATE_FORMAT(fo.first_order_date, '%Y-%m')\n        THEN o.user_id END) AS new_customers,\n    COUNT(DISTINCT CASE\n        WHEN DATE_FORMAT(o.created_at, '%Y-%m') != DATE_FORMAT(fo.first_order_date, '%Y-%m')\n        THEN o.user_id END) AS returning_customers\nFROM orders o\nJOIN first_orders fo ON o.user_id = fo.user_id\nWHERE o.payment_status = 'paid'\nGROUP BY DATE_FORMAT(o.created_at, '%Y-%m')\nORDER BY month;` },

  { id: "Q199", text: "Rank vendors by composite score: (revenue×0.4)+(rating×0.3)+(fulfillment_speed×0.3).", tables: ["vendors", "order_items", "orders", "products", "reviews", "shipments"],
    answer: `WITH vendor_stats AS (\n    SELECT\n        v.id,\n        v.store_name,\n        SUM(oi.total_price)             AS total_revenue,\n        ROUND(AVG(r.rating), 2)         AS avg_rating,\n        ROUND(AVG(DATEDIFF(s.delivered_at, o.created_at)), 1) AS avg_fulfillment_days\n    FROM vendors v\n    LEFT JOIN order_items oi ON v.id          = oi.vendor_id\n    LEFT JOIN orders      o  ON oi.order_id   = o.id\n    LEFT JOIN products    p  ON oi.product_id = p.id\n    LEFT JOIN reviews     r  ON p.id          = r.product_id\n    LEFT JOIN shipments   s  ON o.id          = s.order_id AND s.vendor_id = v.id\n    WHERE o.payment_status = 'paid'\n    GROUP BY v.id, v.store_name\n),\nnormalized AS (\n    SELECT\n        id, store_name, total_revenue, avg_rating, avg_fulfillment_days,\n        (total_revenue - MIN(total_revenue) OVER ()) /\n            NULLIF(MAX(total_revenue) OVER () - MIN(total_revenue) OVER (), 0) AS rev_score,\n        avg_rating / 5.0 AS rat_score,\n        1 - (avg_fulfillment_days - MIN(avg_fulfillment_days) OVER ()) /\n            NULLIF(MAX(avg_fulfillment_days) OVER () - MIN(avg_fulfillment_days) OVER (), 0) AS speed_score\n    FROM vendor_stats\n    WHERE avg_fulfillment_days IS NOT NULL\n)\nSELECT\n    id, store_name, total_revenue, avg_rating, avg_fulfillment_days,\n    ROUND(rev_score * 0.4 + rat_score * 0.3 + speed_score * 0.3, 4) AS composite_score\nFROM normalized\nORDER BY composite_score DESC;` },

  { id: "Q200", text: "Build the platform health-check CTE: GMV, AOV, take rate, refund rate, abandonment rate, new vs returning — current vs last month.", tables: ["orders", "payments", "carts"],
    answer: `WITH current_month AS (\n    SELECT\n        SUM(total_amount)       AS gmv,\n        COUNT(*)                AS order_count,\n        AVG(total_amount)       AS aov,\n        SUM(discount_amount)    AS total_discount,\n        SUM(tax_amount)         AS total_tax\n    FROM orders\n    WHERE payment_status = 'paid'\n      AND YEAR(created_at)  = YEAR(NOW())\n      AND MONTH(created_at) = MONTH(NOW())\n),\nlast_month AS (\n    SELECT\n        SUM(total_amount)       AS gmv,\n        COUNT(*)                AS order_count,\n        AVG(total_amount)       AS aov\n    FROM orders\n    WHERE payment_status = 'paid'\n      AND YEAR(created_at)  = YEAR(DATE_SUB(NOW(), INTERVAL 1 MONTH))\n      AND MONTH(created_at) = MONTH(DATE_SUB(NOW(), INTERVAL 1 MONTH))\n),\nrefund_stats AS (\n    SELECT SUM(refund_amount) AS total_refunds\n    FROM payments\n    WHERE YEAR(created_at)  = YEAR(NOW())\n      AND MONTH(created_at) = MONTH(NOW())\n),\ncart_stats AS (\n    SELECT\n        COUNT(*) AS total_carts,\n        SUM(CASE WHEN status = 'abandoned' THEN 1 ELSE 0 END) AS abandoned_carts\n    FROM carts\n    WHERE YEAR(created_at)  = YEAR(NOW())\n      AND MONTH(created_at) = MONTH(NOW())\n),\nnew_vs_returning AS (\n    SELECT\n        COUNT(DISTINCT CASE WHEN first_order_month = current_order_month THEN user_id END) AS new_customers,\n        COUNT(DISTINCT CASE WHEN first_order_month != current_order_month THEN user_id END) AS returning_customers\n    FROM (\n        SELECT\n            user_id,\n            DATE_FORMAT(created_at, '%Y-%m') AS current_order_month,\n            DATE_FORMAT(MIN(created_at) OVER (PARTITION BY user_id), '%Y-%m') AS first_order_month\n        FROM orders\n        WHERE payment_status = 'paid'\n          AND YEAR(created_at) = YEAR(NOW()) AND MONTH(created_at) = MONTH(NOW())\n    ) sub\n)\nSELECT\n    ROUND(cm.gmv, 2)                                            AS current_gmv,\n    ROUND(lm.gmv, 2)                                            AS last_month_gmv,\n    ROUND((cm.gmv - lm.gmv) / NULLIF(lm.gmv, 0) * 100, 2)    AS gmv_growth_pct,\n    ROUND(cm.aov, 2)                                            AS current_aov,\n    ROUND(lm.aov, 2)                                            AS last_month_aov,\n    ROUND(rs.total_refunds / NULLIF(cm.gmv, 0) * 100, 2)       AS refund_rate_pct,\n    ROUND(cs.abandoned_carts / NULLIF(cs.total_carts, 0) * 100, 2) AS cart_abandonment_pct,\n    nvr.new_customers,\n    nvr.returning_customers,\n    ROUND(nvr.new_customers / NULLIF(nvr.new_customers + nvr.returning_customers, 0) * 100, 2) AS new_customer_pct\nFROM current_month cm\nCROSS JOIN last_month lm\nCROSS JOIN refund_stats rs\nCROSS JOIN cart_stats cs\nCROSS JOIN new_vs_returning nvr;` },
];

export const statusColors = {
  active: "#22c55e",
  inactive: "#f59e0b",
  banned: "#ef4444",
  pending: "#f59e0b",
  confirmed: "#3b82f6",
  processing: "#8b5cf6",
  shipped: "#06b6d4",
  delivered: "#22c55e",
  cancelled: "#ef4444",
  refunded: "#f97316",
  success: "#22c55e",
  failed: "#ef4444",
  paid: "#22c55e",
  published: "#22c55e",
  rejected: "#ef4444",
  suspended: "#ef4444",
  converted: "#22c55e",
  abandoned: "#f59e0b",
  in_transit: "#06b6d4",
  dispatched: "#8b5cf6",
  packed: "#3b82f6",
  out_for_delivery: "#06b6d4",
  returned: "#f97316",
  lost: "#ef4444",
  draft: "#94a3b8",
  deleted: "#64748b",
  partially_refunded: "#f97316",
  // payment_method
  upi:         "#8b5cf6",
  credit_card: "#3b82f6",
  debit_card:  "#06b6d4",
  netbanking:  "#f59e0b",
  wallet:      "#22c55e",
  cod:         "#94a3b8",
  emi:         "#ec4899",
  // payment_gateway
  razorpay:  "#3b82f6",
  stripe:    "#8b5cf6",
  paytm:     "#06b6d4",
  cashfree:  "#22c55e",
  paypal:    "#f59e0b",
};
