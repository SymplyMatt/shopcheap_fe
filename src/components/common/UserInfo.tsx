import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { setAuthPage } from '../../redux/states/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { setSearchMode, setShowLogout } from '../../redux/states/app';

const UserInfo = () => {
    const { loggedInUser } = useSelector((state: RootState) => state.app);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [showLanguages, setShowLanguages] = useState(false);
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent): void => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setShowLanguages(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const toggleDropdown = (e: React.MouseEvent<HTMLDivElement>): void => {
        e.stopPropagation();
        setShowLanguages(prev => !prev);
    };
  return (
    <div className="hidden tmd:flex items-center gap-[16px]" ref={wrapperRef}>
        <div className="">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" style={{ height: "32px"}} className='cursor-pointer' onClick={() => dispatch(setAuthPage("emaillogin"))}><path d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z"/></svg>
        </div>
        {loggedInUser && 
            <div className="relative" onClick={toggleDropdown}>
                <div className="flex gap-[8px] cursor-pointer">
                    <img src="/images/userimage.svg"/>
                    <div className="flex flex-col justify-between h-full">
                        <div className="text-[12px] font-medium">Hello {loggedInUser.firstname}</div>
                        <div className="text-[14px] font-semibold">My Account</div>
                    </div>
                    {!showLanguages && <img src="/images/caretdownsm.svg" />}
                    {showLanguages && <img src="/images/caretupsm.svg" />}
                </div>
                {showLanguages && <div className="absolute top-[50px] right-0 w-[200px] bg-white border border-[#F3F3F3] shadow-lang z-10 flex flex-col py-[8px]">
                    <div className="h-[36px] p-[16px] cursor-pointer hover:bg-[#F4F4F4] w-full text-[#0F172A] text-[14px] flex items-center" onClick={()=> navigate('/profile')}>My Profile</div>
                    <div className="h-[36px] p-[16px] cursor-pointer hover:bg-[#F4F4F4] w-full text-[#0F172A] text-[14px] flex items-center" onClick={()=> navigate('/orders')}>Orders</div>
                    <div className="h-[36px] p-[16px] cursor-pointer hover:bg-[#F4F4F4] w-full text-[#0F172A] text-[14px] flex items-center" onClick={()=> navigate('/addresses')} >Addresses</div>
                    <div className="h-[36px] p-[16px] cursor-pointer hover:bg-[#F4F4F4] w-full text-[#0F172A] text-[14px] flex items-center">Security Settings</div>
                    <div className="h-[36px] p-[16px] cursor-pointer hover:bg-[#F4F4F4] w-full text-[#C74332] text-[14px] flex items-center font-semibold gap-[8px]"
                    onClick={()=>{
                        dispatch(setShowLogout(true));
                    }}>
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.25 9.79999H2.25" stroke="#C74332" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M2.96094 12.8C4.06569 15.0207 6.35169 16.55 9.00069 16.55C12.7289 16.55 15.7507 13.5282 15.7507 9.79999C15.7507 6.07174 12.7289 3.04999 9.00069 3.04999C6.35169 3.04999 4.06569 4.57924 2.96094 6.79999" stroke="#C74332" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9 7.54999L11.25 9.79999L9 12.05" stroke="#C74332" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Logout
                    </div>
                </div>}
            </div>
        }
        <img src="/images/wish.svg" className="cursor-pointer" onClick={()=>navigate('/cart')}/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" style={{ height: "32px"}} className='cursor-pointer' onClick={() => dispatch(setSearchMode('empty'))}><path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"/></svg>
    </div>
  )
}

export default UserInfo