import { useLocation, useNavigate } from "react-router-dom";

const ProfileNavigation = () => {
  const location = useLocation();
  const currentPath = location.pathname.split('/')[1];
  const navigate = useNavigate();
  return (
    <>
        <div className="tmd:hidden h-[48px] flex w-full items-center justify-between px-[20px] border-b border-[#D6D6D5]">
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.16797 5H12.8346" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.33464 0.833336L1.16797 5" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.33464 9.16667L1.16797 5" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div className="text-[12px] text-[#7E7E7C] gap-[4px] flex items-center justify-center">Account/<span className="text-[#912A1D] font-semibold">Orders</span></div>
            <div className=""></div>
        </div>
        <div className="hidden w-[360px] h-full tmd:flex flex-col px-[30px] py-[24px] border-b border-r border-[#D6D6D5] gap-[4px]">
            <div className={`uppercase font-medium flex items-center h-[48px] cursor-pointer text-left px-[20px] hover:border-[#D6D6D5] hover:border hover:text-[#FFFFFF] hover:border hover:bg-[#141511] ${currentPath.includes('profile') ? 'border-[#D6D6D5] bg-[#141511] text-[#FFFFFF]' : 'text-[#141511] bg-white'}`} onClick={()=>navigate('/profile')}>PROFILE</div>
            <div className={`uppercase font-medium flex items-center h-[48px] cursor-pointer text-left px-[20px] hover:border-[#D6D6D5] hover:border hover:text-[#FFFFFF] hover:border hover:bg-[#141511] ${currentPath.includes('orders') ? 'border-[#D6D6D5] bg-[#141511] text-[#FFFFFF]' : 'text-[#141511] bg-white'}`} onClick={()=>navigate('/orders')}>Orders</div>
        </div>
    </>
  )
}

export default ProfileNavigation