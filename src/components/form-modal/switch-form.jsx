
const SwitchForm = ({text, onClick, main}) => {
  return (
    <>
        <p className="text-sm text-gray-500">{text}</p>

        <button
            className="text-primary hover:text-secondary text-sm"
            onClick={onClick}
        >
            {main}
        </button>
    </>
  )
}

export default SwitchForm