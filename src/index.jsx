import ForgeUI, {
  CustomField,
  CustomFieldEdit,
  render,
  Text,
  TextField,
  useProductContext,
} from "@forge/ui";

const View = () => {
  const {
    extensionContext: { fieldValue },
  } = useProductContext();

  return (
    <CustomField>
      <Text content={`Hello ${fieldValue || "world"}!`} />
    </CustomField>
  );
};

const App = () => {
  const {
    extensionContext: { fieldValue },
  } = useProductContext();

  const fieldAppearance = (value) => {
    switch (value) {
      case "medium":
        return "success";
      case "high":
        return "removed";
      default:
        return "default";
    }
  };

  return (
    <CustomField>
      <Text>"hello"</Text>
    </CustomField>
  );
};

export const run = render(<App />);
