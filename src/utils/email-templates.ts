export const getOrderConfirmationTemplate = (order) => {
  return `
        <div
            style="
            margin: 0;
            padding: 0;
            background-color: #f9fafb;
            font-family:
                -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, sans-serif;
            line-height: 1.6;
            "
        >
            <table
            width="100%"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="background-color: #f9fafb; padding: 24px 0; min-height: 100vh"
            >
            <tr>
                <td align="center">
                <!-- Container -->
                <table
                    width="100%"
                    cellpadding="0"
                    cellspacing="0"
                    border="0"
                    style="max-width: 800px; margin: 0 auto"
                >
                    <tr>
                    <td>
                        <!-- Success Card -->
                        <table
                        width="100%"
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        style="
                            background: #ffffff;
                            border-radius: 16px;
                            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
                            margin: 0 16px;
                        "
                        >
                        <!-- Logo Icon & Heading -->
                        <tr>
                            <td align="center" style="padding: 24px 24px 32px">
                            <!-- Logo Icon -->
                            <div style="margin-bottom: 24px">
                                <img src="https://79luxeclothing.com/79luxe.png" alt="79LUXE" height="40" />
                            </div>

                            <h1
                                style="margin: 0 0 16px; font-size: 32px; font-weight: 700; color: #111827"
                            >
                                Order Confirmation
                            </h1>
                            <p
                                style="
                                margin: 0 0 32px;
                                font-size: 18px;
                                color: #6b7280;
                                max-width: 600px;
                                line-height: 1.6;
                                "
                            >
                                Thank you for your purchase. Your order has been confirmed and we'll prepare
                                it for shipping.
                            </p>
                            </td>
                        </tr>

                        <!-- Order Reference -->
                        <tr>
                            <td align="center" style="padding: 0 24px 32px">
                            <div
                                style="
                                background: #f9fafb;
                                border: 1px solid #e5e7eb;
                                border-radius: 8px;
                                padding: 16px;
                                font-family: monospace;
                                "
                            >
                                <strong style="color: #111827; font-size: 14px">Order Reference: </strong>
                                <span style="color: #059669; font-weight: 600; font-size: 14px"
                                >${order.reference}</span
                                >
                            </div>
                            </td>
                        </tr>

                        <!-- Order Details Section -->
                        <tr>
                            <td style="padding: 0 12px 24px">
                            <!-- Order Details Container -->
                            <div style="background: #f9fafb; border-radius: 12px; padding: 16px">
                                <h2
                                style="
                                    margin: 0 0 32px;
                                    font-size: 24px;
                                    font-weight: 600;
                                    color: #111827;
                                    text-align: center;
                                    padding-bottom: 16px;
                                    border-bottom: 1px solid #e5e7eb;
                                "
                                >
                                Order Summary
                                </h2>

                                <!-- Customer Information -->
                                <h3
                                style="
                                    margin: 0 0 16px 0;
                                    font-size: 18px;
                                    font-weight: 600;
                                    color: #111827;
                                "
                                >
                                Customer Information
                                </h3>

                                <div
                                style="
                                    background: #ffffff;
                                    padding: 16px;
                                    border-radius: 8px;
                                    border: 1px solid #e5e7eb;
                                    margin-bottom: 24px;
                                "
                                >
                                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                    <tr>
                                    <td style="padding-bottom: 12px; color: #6b7280; font-size: 14px">
                                        <strong style="color: #111827; margin-right: 8px">Name:</strong>
                                        ${order.customerName}
                                    </td>
                                    </tr>
                                    <tr>
                                    <td style="padding-bottom: 12px; color: #6b7280; font-size: 14px">
                                        <strong style="color: #111827; margin-right: 8px">Email:</strong>
                                        ${order.customerEmail}
                                    </td>
                                    </tr>
                                    <tr>
                                    <td style="padding-bottom: 12px; color: #6b7280; font-size: 14px">
                                        <strong style="color: #111827; margin-right: 8px">Phone:</strong>
                                        ${order.customerPhone}
                                    </td>
                                    </tr>
                                    <tr>
                                    <td style="color: #6b7280; font-size: 14px">
                                        <strong style="color: #111827; margin-right: 8px">Address:</strong>
                                        ${order.customerAddress}
                                    </td>
                                    </tr>
                                </table>
                                </div>

                                <!-- Items Ordered -->
                                <h3
                                style="
                                    margin: 0 0 16px 0;
                                    font-size: 18px;
                                    font-weight: 600;
                                    color: #111827;
                                "
                                >
                                Items Ordered
                                </h3>

                                ${
                                  order.orderItems &&
                                  order.orderItems.length > 0
                                    ? order.orderItems
                                        .map(
                                          (item, index) => `
                                <!-- Item ${index + 1} -->
                                <div
                                style="
                                    display: flex;
                                    align-items: center;
                                    gap: 16px;
                                    padding: 16px;
                                    background: #ffffff;
                                    border: 1px solid #e5e7eb;
                                    border-radius: 8px;
                                    margin-bottom: 12px;
                                "
                                >
                                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                    <tr>
                                    <td width="60" valign="top">
                                        <img
                                        src="https://placehold.co/60x60/e5e7eb/6b7280?text=${encodeURIComponent(item.productName.split(" ")[0])}"
                                        width="60"
                                        height="60"
                                        style="border-radius: 6px; display: block; object-fit: cover"
                                        alt="${item.productName}"
                                        />
                                    </td>
                                    <td valign="top" style="padding-left: 16px">
                                        <h4
                                        style="
                                            margin: 0 0 4px;
                                            font-size: 14px;
                                            color: #111827;
                                            font-weight: 500;
                                        "
                                        >
                                        ${item.productName}
                                        </h4>
                                        <p style="margin: 0 0 2px; font-size: 12px; color: #6b7280">
                                        Quantity: ${item.quantity}
                                        </p>
                                        <p style="margin: 0; font-size: 12px; color: #6b7280">
                                        ${item.color ? `<span style="color: #059669; font-weight: 500">${item.color}</span>` : ""}
                                        ${item.color && item.size ? " • " : ""}
                                        ${item.size ? `<span style="font-weight: 500">Size ${item.size}</span>` : ""}
                                        </p>
                                    </td>
                                    <td
                                        valign="top"
                                        align="right"
                                        style="font-size: 14px; color: #111827; font-weight: 600"
                                    >
                                        ₦${item.price?.toLocaleString() || "0"}
                                    </td>
                                    </tr>
                                </table>
                                </div>
                                `
                                        )
                                        .join("")
                                    : `
                                <div
                                style="
                                    padding: 16px;
                                    background: #ffffff;
                                    border: 1px solid #e5e7eb;
                                    border-radius: 8px;
                                    margin-bottom: 12px;
                                    text-align: center;
                                    color: #6b7280;
                                "
                                >
                                No items found in this order.
                                </div>
                                `
                                }

                                <!-- Total -->
                                <div
                                style="
                                    margin-top: 24px;
                                    padding-top: 24px;
                                    border-top: 1px solid #e5e7eb;
                                "
                                >
                                <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                    ${
                                      order.subtotal
                                        ? `
                                    <tr>
                                        <td style="font-size: 14px; color: #6b7280; padding-bottom: 8px;">Subtotal:</td>
                                        <td style="font-size: 14px; color: #111827; text-align: right; padding-bottom: 8px;">₦${order.subtotal.toLocaleString()}</td>
                                    </tr>
                                    `
                                        : ""
                                    }
                                    ${
                                      order.shipping
                                        ? `
                                    <tr>
                                        <td style="font-size: 14px; color: #6b7280; padding-bottom: 8px;">Shipping:</td>
                                        <td style="font-size: 14px; color: #111827; text-align: right; padding-bottom: 8px;">₦${order.shipping.toLocaleString()}</td>
                                    </tr>
                                    `
                                        : ""
                                    }
                                    ${
                                      order.tax
                                        ? `
                                    <tr>
                                        <td style="font-size: 14px; color: #6b7280; padding-bottom: 16px;">Tax:</td>
                                        <td style="font-size: 14px; color: #111827; text-align: right; padding-bottom: 16px;">₦${order.tax.toLocaleString()}</td>
                                    </tr>
                                    `
                                        : ""
                                    }
                                    <tr>
                                        <td style="font-size: 20px; font-weight: 700; color: #111827;">Total:</td>
                                        <td style="font-size: 20px; font-weight: 700; color: #111827; text-align: right;">₦${order.totalAmount?.toLocaleString() || "0"}</td>
                                    </tr>
                                </table>
                                </div>

                                <!-- Payment Method -->
                                <div style="margin-top: 24px">
                                <p style="margin: 0; font-size: 14px; color: #6b7280">
                                    <strong style="color: #111827">Payment Method:</strong> ${order.paymentMethod}
                                </p>
                                </div>
                            </div>
                            </td>
                        </tr>

                        <!-- Footer -->
                        <tr>
                            <td align="center" style="padding: 32px 24px 24px">
                            <p style="margin: 0 0 16px; font-size: 14px; color: #6b7280">
                                Thank you for shopping with <strong style="color: #111827">79Luxe</strong>
                            </p>
                            <p style="margin: 0; font-size: 12px; color: #9ca3af">
                                If you have any questions, please contact us at <a href="mailto:79luxe@gmail.com">79luxe@gmail.com</a>
                            </p>
                            </td>
                        </tr>
                        </table>
                    </td>
                    </tr>
                </table>
                </td>
            </tr>
            </table>
        </div>
    `;
};
