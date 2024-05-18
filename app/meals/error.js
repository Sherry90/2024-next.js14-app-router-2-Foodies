"use client"

const Error = ({ error }) => {
  return (
    <main className={"error"}>
      <h1>An error occurred!</h1>
      <p>{error}</p>
    </main>
  );
};

export default Error;
