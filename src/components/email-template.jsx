export const EmailTemplate = ({ firstName, lastName, verificationLink }) => {
    return (
      <div>
        <h1>Welcome, {firstName} {lastName}!</h1>
        <p>Thank you for signing up with Roombridge.</p>
        <p>Please verify your email address by clicking the link below:</p>
        <a href={verificationLink}>Verify Email</a>
        <p>If you did not sign up, please ignore this email.</p>
      </div>
    );
  };
  