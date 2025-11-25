import React from "react";

const Meeting = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params; //destructure directly

  return <div>Meeting Room : #{id}</div>;
};

export default Meeting;
