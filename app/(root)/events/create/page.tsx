import EventForm from "@/components/shared/EventForm";
import { auth } from "@clerk/nextjs";

const CreateEvent = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover py-5 md:py-10 bg-center">
        <h3 className="wrapper h3-bold text-center">Create Event</h3>
        <div className="wrapper my-8">
          <EventForm userId={userId} type="Create" />
        </div>
      </section>
      ;
    </>
  );
};

export default CreateEvent;
