import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const ProfileForm = () => {
  const { loggedInUser } = useSelector((state: RootState) => state.app);
  
  function formatDate(date: Date | string): string {
    const d = typeof date === "string" ? new Date(date) : date;
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return (
    <div className="tmd:col-span-3 h-full flex flex-col justify-start gap-[20px] p-[20px] tmd:p-[24px] border-b border-[#D6D6D5]">
        <div className="text-[#141511] font-medium text-[24px]">Profile Details</div>
        <div className="col-span-1 flex flex-col gap-[8px]">
            <label className="text-[#141511] font-semibold">First name</label>
            <input type="text" className="h-[48px] border border-[#D6D6D5] p-[12px] w-full bg-[#F3F3F3] text-[#676764] outline-none" placeholder="First name" value={loggedInUser?.firstname || ""} readOnly/>
        </div>
        <div className="col-span-1 flex flex-col gap-[8px]">
            <label className="text-[#141511] font-semibold">Last name</label>
            <input type="text" className="h-[48px] border border-[#D6D6D5] p-[12px] w-full bg-[#F3F3F3] text-[#676764] outline-none" placeholder="Last name" value={loggedInUser?.lastname || ""} readOnly/>
        </div>
        <div className="col-span-1 flex flex-col gap-[8px]">
            <label className="text-[#141511] font-semibold">Email</label>
            <input type="text" className="h-[48px] border border-[#D6D6D5] p-[12px] w-full bg-[#F3F3F3] text-[#676764] outline-none" placeholder="Email" value={loggedInUser?.email || ""} readOnly/>
        </div>
        <div className="col-span-1 flex flex-col gap-[8px]">
            <label className="text-[#141511] font-semibold">Phone</label>
            <input type="text" className="h-[48px] border border-[#D6D6D5] p-[12px] w-full bg-[#F3F3F3] text-[#676764] outline-none" placeholder="Phone" value={loggedInUser?.phone || ""} readOnly/>
        </div>
        <div className="col-span-1 flex flex-col gap-[8px]">
            <label className="text-[#141511] font-semibold">Member Since</label>
            <input type="text" className="h-[48px] border border-[#D6D6D5] p-[12px] w-full bg-[#F3F3F3] text-[#676764] outline-none" placeholder="Member Since" value={loggedInUser?.createdAt ? formatDate(loggedInUser.createdAt) : ""} readOnly/>
        </div>
    </div>
  )
}

export default ProfileForm