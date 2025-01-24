
const SubmitButton = ({type, disabled}) => {
  return (
    <button type="submit" disabled={disabled} className="w-full bg-primary text-white py-2 rounded hover:bg-secondary">
     {type}
    </button>
  )
}

export default SubmitButton