
const Modal = ({error, success, title, onClose, children}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg relative">
        
            <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>&times;</button>

            <h1 className="text-2xl font-bold text-center mb-4">
                <span className="text-secondary">Room</span>
                <span className="text-primary">Bridge</span>
            </h1>

            <h2 className="text-xl font-bold mb-4 text-center">{title}</h2>

            {error && <h3 className="text-red-500">{error}</h3>}  {/* Display error message */}
            {success && <h3 className="text-green-500">{success}</h3>}  {/* Display success message */}
            {children}
        </div>
    </div>
  )
}

export default Modal;