import { getOrderConfirmationTemplate } from "../../../../utils/email-templates";

// Track processed orders to prevent duplicate emails
const processedOrders = new Set<string>();

export default {
  async afterCreate(event) {
    // Connected to "Save" button in admin panel
    const { result } = event;

    // Use documentId or id as unique identifier
    const orderId = result.documentId || result.id;

    if (processedOrders.has(orderId)) {
      console.log(
        `Duplicate event detected for order ${orderId}, skipping email send.`
      );
      return;
    }

    // Add to processed set to prevent future duplicates
    processedOrders.add(orderId);

    try {
      if (!result.customerEmail) {
        console.log("No customer email found, skipping email send.");
        return;
      }
      // Manually fetch the complete order with the orderItems component populated
      const populatedOrder = await strapi.db.query("api::order.order").findOne({
        where: { id: result.id },
        populate: ["orderItems"],
      });

      await strapi.plugins["email"].services.email.send({
        to: populatedOrder.customerEmail,
        cc: "79luxe@gmail.com",
        subject: `Order Confirmation - ${populatedOrder.reference}`,
        text: `Hi ${populatedOrder.customerName}, your order ${populatedOrder.reference} has been confirmed.`,
        html: getOrderConfirmationTemplate(populatedOrder),
      });
      console.log(
        "Order confirmation email sent to:",
        populatedOrder.customerEmail
      );
    } catch (err) {
      console.log("Error sending order confirmation email:", err);
      // Remove from processed set on error so it can be retried
      processedOrders.delete(orderId);
    }
  },
};
