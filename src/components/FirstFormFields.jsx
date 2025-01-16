import { Input } from "./Input";

export const FirstFormFields = ({ formValues, formErrors, handleChange }) => {
  return (
    <div className="flex flex-col gap-3 mt-[28px]">
      <Input
        label={"First Name"}
        type={"text"}
        placeholder={"Your first name"}
        value={formValues.firstName}
        onChange={handleChange}
        error={formErrors.firstName}
        name={"firstName"}
      />
      <Input
        label={"Last Name"}
        type={"text"}
        placeholder={"Your last name"}
        value={formValues.lastName}
        onChange={handleChange}
        error={formErrors.lastName}
        name={"lastName"}
      />
      <Input
        label={"Username"}
        type={"text"}
        placeholder={"Your username"}
        value={formValues.userName}
        onChange={handleChange}
        error={formErrors.userName}
        name={"userName"}
      />
    </div>
  );
};
