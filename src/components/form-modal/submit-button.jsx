
const SubmitButton = ({type, disabled, profile}) => {
  return (
    <button type="submit" disabled={disabled} className={`${profile ? "w-1/3" : "w-full" } bg-primary text-white py-2 rounded hover:bg-secondary`}>
     {type}
    </button>
  )
}

export default SubmitButton