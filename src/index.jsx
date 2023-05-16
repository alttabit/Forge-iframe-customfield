const { macro, render, CustomField } = require("@forge/bridge");

macro(async (context, params) => {
  const issueKey = context.platformContext.issueKey;
  const customField = await CustomField.get(issueKey, "custom_field_id");

  if (!customField) {
    return "Custom field not found.";
  }

  const bookingPageUrl = customField.value;

  if (!bookingPageUrl) {
    return "Booking page URL not found.";
  }

  return `
    <a href="${bookingPageUrl}" target="_blank">Open Booking Page</a>
  `;
});
