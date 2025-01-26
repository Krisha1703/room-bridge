export const EmailTemplate = ({ firstName, lastName, verificationLink }) => {
    return (
      <div className=" p-8 w-full">

        <h1 className="text-2xl font-bold mb-4">
            <span className="text-secondary">Room</span>
            <span className="text-primary">Bridge</span>
        </h1>

        <h1>Welcome, <span className="italic">{firstName} {lastName}!</span></h1>
        <p>Thank you for signing up with Roombridge.</p>
        <p className="my-2">Please verify your email address by clicking the button below</p>
        
        <button className="bg-primary my-1 p-2 w-1/5 hover:bg-secondary mb-10 text-white font-semibold">
          <a href={verificationLink}>Verify Email</a>
        </button>
        
        <p className="">If you did not sign up, please ignore this email.</p>

      </div>
    );
  };
  