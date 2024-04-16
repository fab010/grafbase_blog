import Image from "next/image";


export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const Contact = () => {
  return (
    <div className="flex justify-center gap-[100px]">
      <div className="flex-1 relative h-[400px]">
        <Image src="/contact.png" alt="" fill className="object-contain" />
      </div>
      <div className="flex-1">
        <form action="" className="flex flex-col gap-5">
          <input type="text" placeholder="Name and Surname" className="p-5 rounded-md border-none outline-none bg-[--bgSoft] text-[--text]"/>
          <input type="text" placeholder="Email Address"  className="p-5 rounded-md border-none outline-none bg-[--bgSoft] text-[--text]"/>
          <input type="text" placeholder="Phone Number (Optional)"  className="p-5 rounded-md border-none outline-none bg-[--bgSoft] text-[--text]"/>
          <textarea
            name="name"
            rows={5}
            placeholder="Message"
            className="p-5 rounded-md border-none outline-none bg-[--bgSoft] text-[--text]"
          ></textarea>
          <button className="p-5 rounded-md border-none font-bold cursor-pointer bg-[--btn] text-[--text]">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
