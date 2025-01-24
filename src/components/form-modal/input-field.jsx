const InputField = ({ 
  label, 
  id, 
  type = "text", 
  placeholder, 
  register, 
  error, 
  disabled = false, 
  className = "" 
}) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium">{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        {...register}
        disabled={disabled}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
      />
      {error && (
        <span className="text-red-500 text-sm">{error.message}</span>
      )}
    </div>
  );
};

export default InputField;
