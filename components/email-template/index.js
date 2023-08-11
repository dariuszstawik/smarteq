import * as React from "react";

export const EmailTemplate = ({
  message,
  firstName,
  lastName,
  email,
  phone,
}) => (
  <div>
    <div>
      <h2>
        Message from{" "}
        <span>
          {firstName} {lastName} {email} {phone}
        </span>
      </h2>
      <p>{message}</p>{" "}
    </div>
  </div>
);
