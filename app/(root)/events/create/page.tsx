import EventForm from "@/components/shared/EventForm"
import { auth } from "@clerk/nextjs";
import mongoose from "mongoose";

const CreateEvent = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;
  const isValidObjectId = mongoose.Types.ObjectId.isValid(userId);

  return (
    <>
      <section className="bg-primary-50 w-full bg-dotted-pattern bg-cover bg-center py-5 md:py-10 px-5">
        <h3 className="wrapper h3-bold text-center sm:text-left">Create Event</h3>
      </section>

      <div className="wrapper my-8">
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  )
}

export default CreateEvent