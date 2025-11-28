"use client";

import Loader from "@/components/Loader";
import MeetingGroup from "@/components/MeetingGroup";
import MeetingSetup from "@/components/MeetingSetup";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useState } from "react";

const Meeting = ({ params: { id } }: { params: { id: string } }) => {
  const { call, isCallLoading } = useGetCallById(id);
  const { user, isLoaded } = useUser();
  const [isSetupComplete, setisSetupComplete] = useState(false);

  if (!isLoaded || isCallLoading) return <Loader />;

  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? <MeetingSetup /> : <MeetingGroup />}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Meeting;
