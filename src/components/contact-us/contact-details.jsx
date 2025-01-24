const ContactDetails = () => {
    return (
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Contact Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone */}
          <div className="flex items-center space-x-4">
            <div className="p-4 bg-blue-100 rounded-full">
              <svg
                className="w-6 h-6 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10l9-9m0 0l9 9m-9-9v14"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-800">Phone</h4>
              <p className="text-gray-600">+1 234 567 890</p>
            </div>
          </div>
          {/* Email */}
          <div className="flex items-center space-x-4">
            <div className="p-4 bg-green-100 rounded-full">
              <svg
                className="w-6 h-6 text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12h6M6 12H4m8-8l4 4-4-4zm0 16l4-4-4 4z"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-800">Email</h4>
              <p className="text-gray-600">info@roombridge.com</p>
            </div>
          </div>
          {/* Location */}
          <div className="flex items-center space-x-4">
            <div className="p-4 bg-yellow-100 rounded-full">
              <svg
                className="w-6 h-6 text-yellow-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 2C8.686 2 6 4.686 6 8c0 4.419 6 12 6 12s6-7.581 6-12c0-3.314-2.686-6-6-6z"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-800">Location</h4>
              <p className="text-gray-600">123 Main St, New York, NY 10001</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactDetails;
  