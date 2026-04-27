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
      { id: 1, role_id: 1, name: "Admin 1", email: "admin1@estore.com", phone: "+91900000001", is_email_verified: 1, status: "active", last_login_at: "2025-07-01 10:00:00", created_at: "2024-01-01 00:00:00" },
      { id: 2, role_id: 1, name: "Admin 2", email: "admin2@estore.com", phone: "+91900000002", is_email_verified: 1, status: "active", last_login_at: "2025-07-02 09:30:00", created_at: "2024-01-01 00:00:00" },
      { id: 6, role_id: 2, name: "Rajesh Kumar 1", email: "vendor1@shop.com", phone: "+91800000001", is_email_verified: 1, status: "active", last_login_at: "2025-06-28 14:00:00", created_at: "2024-02-10 00:00:00" },
      { id: 206, role_id: 3, name: "Aarav Shah #1", email: "customer1@gmail.com", phone: "+91700000001", is_email_verified: 1, status: "active", last_login_at: "2025-07-03 08:00:00", created_at: "2024-03-15 00:00:00" },
      { id: 207, role_id: 3, name: "Ishaan Patel #2", email: "customer2@gmail.com", phone: "+91700000002", is_email_verified: 1, status: "inactive", last_login_at: "2025-05-10 11:00:00", created_at: "2024-04-20 00:00:00" },
    ],
  },
  vendors: {
    columns: ["id", "user_id", "store_name", "contact_email", "city", "commission_rate", "rating", "status", "approved_at"],
    rows: [
      { id: 1, user_id: 6, store_name: "TechZone #1", contact_email: "vendor1@shop.com", city: "Mumbai", commission_rate: "12.50", rating: "4.20", status: "active", approved_at: "2024-02-15 00:00:00" },
      { id: 2, user_id: 7, store_name: "FashionHub #2", contact_email: "vendor2@shop.com", city: "Delhi", commission_rate: "11.00", rating: "3.80", status: "active", approved_at: "2024-03-01 00:00:00" },
      { id: 3, user_id: 8, store_name: "GadgetPlanet #3", contact_email: "vendor3@shop.com", city: "Bangalore", commission_rate: "13.75", rating: "4.50", status: "active", approved_at: "2024-03-10 00:00:00" },
      { id: 4, user_id: 9, store_name: "HomeNest #4", contact_email: "vendor4@shop.com", city: "Chennai", commission_rate: "10.25", rating: "3.60", status: "pending", approved_at: null },
      { id: 5, user_id: 10, store_name: "SportsPro #5", contact_email: "vendor5@shop.com", city: "Hyderabad", commission_rate: "14.00", rating: "4.10", status: "active", approved_at: "2024-04-05 00:00:00" },
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
      { id: 2, vendor_id: 3, category_id: 3, title: "Running Shoes Air Cushion - Model 2", sku: "SKU-000002", price: "2999.00", sale_price: "2499.00", status: "active", is_featured: 0, created_at: "2024-05-11 00:00:00" },
      { id: 3, vendor_id: 4, category_id: 4, title: "Organic Green Tea 200g - Model 3", sku: "SKU-000003", price: "450.00", sale_price: "380.00", status: "active", is_featured: 0, created_at: "2024-05-12 00:00:00" },
      { id: 4, vendor_id: 5, category_id: 5, title: "Leather Office Chair Ergonomic - Model 4", sku: "SKU-000004", price: "12800.00", sale_price: null, status: "active", is_featured: 0, created_at: "2024-05-13 00:00:00" },
      { id: 5, vendor_id: 1, category_id: 1, title: "DSLR Camera 24MP Kit - Model 5", sku: "SKU-000005", price: "48500.00", sale_price: null, status: "active", is_featured: 0, created_at: "2024-05-14 00:00:00" },
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
      { id: 1, user_id: 207, order_number: "ORD-2025-000001", order_status: "delivered", payment_status: "paid", total_amount: "3499.00", subtotal: "3200.00", shipping_amount: "99.00", tax_amount: "200.00", created_at: "2025-01-10 10:00:00" },
      { id: 2, user_id: 208, order_number: "ORD-2025-000002", order_status: "shipped", payment_status: "paid", total_amount: "12800.00", subtotal: "12500.00", shipping_amount: "0.00", tax_amount: "300.00", created_at: "2025-02-14 11:30:00" },
      { id: 3, user_id: 209, order_number: "ORD-2025-000003", order_status: "processing", payment_status: "paid", total_amount: "899.00", subtotal: "850.00", shipping_amount: "49.00", tax_amount: "0.00", created_at: "2025-03-05 09:00:00" },
      { id: 4, user_id: 210, order_number: "ORD-2025-000004", order_status: "cancelled", payment_status: "refunded", total_amount: "5200.00", subtotal: "5000.00", shipping_amount: "0.00", tax_amount: "200.00", created_at: "2025-04-18 14:00:00" },
      { id: 5, user_id: 211, order_number: "ORD-2025-000005", order_status: "pending", payment_status: "pending", total_amount: "1599.00", subtotal: "1500.00", shipping_amount: "99.00", tax_amount: "0.00", created_at: "2025-07-03 08:00:00" },
    ],
  },
  order_items: {
    columns: ["id", "order_id", "product_id", "vendor_id", "quantity", "unit_price", "total_price", "status"],
    rows: [
      { id: 1, order_id: 1, product_id: 4, vendor_id: 5, quantity: 1, unit_price: "3200.00", total_price: "3200.00", status: "delivered" },
      { id: 2, order_id: 2, product_id: 5, vendor_id: 1, quantity: 1, unit_price: "12500.00", total_price: "12500.00", status: "shipped" },
      { id: 3, order_id: 3, product_id: 2, vendor_id: 3, quantity: 2, unit_price: "425.00", total_price: "850.00", status: "confirmed" },
      { id: 4, order_id: 4, product_id: 1, vendor_id: 2, quantity: 1, unit_price: "5000.00", total_price: "5000.00", status: "cancelled" },
      { id: 5, order_id: 5, product_id: 3, vendor_id: 4, quantity: 3, unit_price: "500.00", total_price: "1500.00", status: "pending" },
    ],
  },
  payments: {
    columns: ["id", "order_id", "user_id", "transaction_id", "payment_method", "payment_gateway", "amount", "status", "failure_reason", "created_at"],
    rows: [
      { id: 1, order_id: 1, user_id: 207, transaction_id: "TXN-abc123def456", payment_method: "upi", payment_gateway: "razorpay", amount: "3499.00", status: "success", failure_reason: null, created_at: "2025-01-10 10:02:00" },
      { id: 2, order_id: 2, user_id: 208, transaction_id: "TXN-bcd234efg567", payment_method: "credit_card", payment_gateway: "stripe", amount: "12800.00", status: "success", failure_reason: null, created_at: "2025-02-14 11:32:00" },
      { id: 3, order_id: 3, user_id: 209, transaction_id: "TXN-cde345fgh678", payment_method: "debit_card", payment_gateway: "paytm", amount: "899.00", status: "success", failure_reason: null, created_at: "2025-03-05 09:02:00" },
      { id: 4, order_id: 4, user_id: 210, transaction_id: "TXN-def456ghi789", payment_method: "netbanking", payment_gateway: "cashfree", amount: "5200.00", status: "refunded", failure_reason: null, created_at: "2025-04-18 14:02:00" },
      { id: 5, order_id: 5, user_id: 211, transaction_id: "TXN-efg567hij890", payment_method: "wallet", payment_gateway: "razorpay", amount: "1599.00", status: "failed", failure_reason: "Insufficient funds", created_at: "2025-07-03 08:02:00" },
    ],
  },
  shipments: {
    columns: ["id", "order_id", "vendor_id", "tracking_number", "courier_partner", "shipping_method", "status", "estimated_delivery_date", "shipping_cost"],
    rows: [
      { id: 1, order_id: 1, vendor_id: 5, tracking_number: "TRACK-ABC123", courier_partner: "Delhivery", shipping_method: "standard", status: "delivered", estimated_delivery_date: "2025-01-15", shipping_cost: "0.00" },
      { id: 2, order_id: 2, vendor_id: 1, tracking_number: "TRACK-BCD234", courier_partner: "Bluedart", shipping_method: "express", status: "in_transit", estimated_delivery_date: "2025-02-19", shipping_cost: "99.00" },
      { id: 3, order_id: 3, vendor_id: 3, tracking_number: "TRACK-CDE345", courier_partner: "FedEx", shipping_method: "standard", status: "dispatched", estimated_delivery_date: "2025-03-10", shipping_cost: "49.00" },
      { id: 4, order_id: 5, vendor_id: 4, tracking_number: "TRACK-DEF456", courier_partner: "XpressBees", shipping_method: "overnight", status: "pending", estimated_delivery_date: "2025-07-04", shipping_cost: "149.00" },
      { id: 5, order_id: 2, vendor_id: 2, tracking_number: "TRACK-EFG567", courier_partner: "DTDC", shipping_method: "standard", status: "packed", estimated_delivery_date: "2025-02-20", shipping_cost: "0.00" },
    ],
  },
  reviews: {
    columns: ["id", "product_id", "user_id", "order_id", "rating", "title", "is_verified_purchase", "helpful_votes", "status", "created_at"],
    rows: [
      { id: 1, product_id: 4, user_id: 207, order_id: 1, rating: 5, title: "Excellent product, highly recommend!", is_verified_purchase: 1, helpful_votes: 23, status: "published", created_at: "2025-02-10 00:00:00" },
      { id: 2, product_id: 5, user_id: 208, order_id: 2, rating: 4, title: "Good value for money", is_verified_purchase: 1, helpful_votes: 11, status: "published", created_at: "2025-03-01 00:00:00" },
      { id: 3, product_id: 2, user_id: 209, order_id: 3, rating: 3, title: "Average product, nothing special", is_verified_purchase: 1, helpful_votes: 4, status: "published", created_at: "2025-04-05 00:00:00" },
      { id: 4, product_id: 1, user_id: 210, order_id: 4, rating: 2, title: "Quality could be better", is_verified_purchase: 1, helpful_votes: 7, status: "published", created_at: "2025-05-20 00:00:00" },
      { id: 5, product_id: 3, user_id: 211, order_id: 5, rating: 5, title: "Loved it! Will buy again", is_verified_purchase: 1, helpful_votes: 31, status: "pending", created_at: "2025-07-03 00:00:00" },
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
};
