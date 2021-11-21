import React from "react";

const InputSelect = ({ id, label, options, onChange, ...props }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <select
        className="form-control"
        name={id}
        id={id}
        onChange={(e) => onChange(e)}
        placeholder="Select Item"
      >
        {options.map(({ key, value, label }, index) => (
          <option key={key + index} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export { InputSelect };
