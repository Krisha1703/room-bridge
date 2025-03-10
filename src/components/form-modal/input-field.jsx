const InputField = ({ 
  label, 
  id, 
  type = "text", 
  placeholder, 
  register, 
  options = [], // for select dropdown options
  readOnly, 
  error, 
  disabled = false, 
  className = "", 
  onChange // Add onChange for file input handling
}) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium">{label}</label>

      {type === "select" ? (
        <select
          id={id}
          {...register}
          disabled={disabled}
          className={`w-full px-3 py-2 border rounded ${
            disabled ? "bg-gray-100 focus:ring-0" : "focus:ring-2"
          } focus:outline-none focus:ring-primary`}
        >
          <option value="" disabled>
            Select {label}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === "file" ? (
        <>
          <input
            type="file"
            id={id}
            {...register}
            disabled={disabled}
            onChange={onChange} // Handle file upload separately
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </>
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          {...register}
          disabled={disabled}
          readOnly={readOnly}
          className={`w-full px-3 py-2 border rounded ${
            readOnly ? "bg-gray-100 focus:ring-0" : "focus:ring-2"
          } focus:outline-none focus:ring-primary`}
        />
      )}

      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  );
};

export default InputField;
