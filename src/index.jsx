const { CustomField, render } = require("@forge/bridge");

async function createCustomField() {
  const iframeUrl = "https://your-iframe-url.com";

  const iframeContent = `<iframe src="${iframeUrl}" width="100%" height="400"></iframe>`;

  const customField = await CustomField.create({
    name: "Embedded IFrame",
    schema: {
      type: "string",
      custom: "com.example.embedded-iframe",
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
