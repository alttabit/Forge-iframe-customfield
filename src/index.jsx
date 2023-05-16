const { CustomField, render } = require("@forge/bridge");

const bookingPageUrl =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0YlvobJROz7x8c6lLCAakiL4c1Y6YKQU9JV-Qdmu1OMX6PVV-RhZ-QHnyZZipLEKT35QroPuV_?gv=true";

async function createCustomField() {
  const iframeContent = `<iframe src="${bookingPageUrl}" width="100%" height="400"></iframe>`;

  const customField = await CustomField.create({
    name: "Google Calendar Booking Page",
    schema: {
      type: "string",
      custom: "com.example.google-calendar",
    },
    view: {
      type: "web_resource",
      format: "iframe",
      items: {
        iframe: iframeContent,
      },
    },
  });

  return customField;
}

exports.run = async (context) => {
  const customField = await createCustomField();

  console.log(`Custom field created with ID: ${customField.id}`);

  return (
    <div>
      <h1>Custom Field Created</h1>
      <p>ID: {customField.id}</p>
    </div>
  );
};
