import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setLoggedInUser, setShowLogout } from "../../redux/states/app";
import { useNavigate } from "react-router-dom";
import utils from "../../utils/utils";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.4, ease: "easeOut" }} className="min-w-[100%] w-[100vw] min-h-[100%] h-[100vh] fixed top-0 right-0 bg-[#1415114D] z-10 flex justify-center items-center tmd:pt-[46px] pb-[80px]">
      <div className="w-fit bg-white border border-[#D6D6D5] justify-center flex flex-col h-fit overflow-y-scroll gap-[20px] py-[20px] max-w-[400px] tmd:max-w-[520px]">
        <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="pl-[24px]">
        <g clip-path="url(#clip0_855_38976)">
        <path d="M29.0977 0H66.9727C69.9727 0 72.3946 2.42188 72.3946 5.42188V74.5625C72.3946 77.5625 69.9727 79.9844 66.9727 79.9844H29.0977C26.0977 79.9844 23.6759 77.5625 23.6759 74.5625V5.42188C23.6602 2.42188 26.0977 0 29.0977 0Z" fill="url(#paint0_linear_855_38976)"/>
        <path d="M66.9727 0H45.8164V80H66.9727C69.9727 80 72.3945 77.5781 72.3945 74.5781V5.42188C72.3945 2.42188 69.9727 0 66.9727 0Z" fill="url(#paint1_linear_855_38976)"/>
        <path d="M23.6602 41.9844V74.5781C23.6602 77.5781 26.082 80 29.082 80H66.957C69.957 80 72.3789 77.5781 72.3789 74.5781V41.9844H23.6602Z" fill="url(#paint2_linear_855_38976)"/>
        <path d="M60.332 41.7188L72.3945 53.7813V37.7813L68.332 33.7032L60.332 41.7188Z" fill="url(#paint3_linear_855_38976)"/>
        <path d="M32.25 5.84372H63.7969C64.6562 5.84372 65.3594 6.54684 65.3594 7.40622V27.9375C65.3594 28.7968 64.6562 29.5 63.7969 29.5H32.25C31.3906 29.5 30.6875 28.7968 30.6875 27.9375V7.40622C30.6875 6.53122 31.3906 5.84372 32.25 5.84372Z" fill="url(#paint4_linear_855_38976)"/>
        <path d="M56.8594 15.4688L39.25 23.0469L45.7031 29.5H63.8125C64.6719 29.5 65.375 28.7969 65.375 27.9375V23.9687L56.8594 15.4688Z" fill="url(#paint5_linear_855_38976)"/>
        <path d="M46.4688 5.84372V29.5H32.25C31.3906 29.5 30.6875 28.7968 30.6875 27.9375V7.40622C30.6875 6.54684 31.3906 5.84372 32.25 5.84372H46.4688Z" fill="url(#paint6_linear_855_38976)"/>
        <path d="M65.3594 7.40622V17.0937H30.6875V7.40622C30.6875 6.54684 31.3906 5.84372 32.25 5.84372H63.7969C64.6719 5.84372 65.3594 6.53122 65.3594 7.40622Z" fill="url(#paint7_linear_855_38976)"/>
        <path d="M32.25 34.2812H63.7969C64.6562 34.2812 65.3594 34.9843 65.3594 35.8437V72.5937C65.3594 73.4531 64.6562 74.1562 63.7969 74.1562H32.25C31.3906 74.1562 30.6875 73.4531 30.6875 72.5937V35.8437C30.6875 34.9843 31.3906 34.2812 32.25 34.2812Z" fill="url(#paint8_linear_855_38976)"/>
        <path d="M46.4688 34.2812V74.1562H32.25C31.3906 74.1562 30.6875 73.4531 30.6875 72.5937V35.8437C30.6875 34.9843 31.3906 34.2812 32.25 34.2812H46.4688Z" fill="url(#paint9_linear_855_38976)"/>
        <path d="M63.7969 34.2812H32.25C31.3906 34.2812 30.6875 34.9843 30.6875 35.8437V51.8125H65.3594V35.8437C65.3594 34.9843 64.6719 34.2812 63.7969 34.2812Z" fill="url(#paint10_linear_855_38976)"/>
        <path d="M72.3906 74.5781V65.4531L43.125 36.1875H23.6562V74.5781C23.6562 77.5781 26.0781 80 29.0781 80H66.9531C69.9687 80 72.3906 77.5781 72.3906 74.5781Z" fill="url(#paint11_linear_855_38976)"/>
        <path d="M64.332 43.3594C67.4559 43.3594 69.9883 40.827 69.9883 37.7032C69.9883 34.5793 67.4559 32.0469 64.332 32.0469C61.2082 32.0469 58.6758 34.5793 58.6758 37.7032C58.6758 40.827 61.2082 43.3594 64.332 43.3594Z" fill="url(#paint12_linear_855_38976)"/>
        <path d="M58.6758 37.7032C58.6758 40.8282 61.207 43.3594 64.332 43.3594C67.457 43.3594 69.9883 40.8282 69.9883 37.7032C69.9883 37.2969 69.9414 36.9063 69.8633 36.5157H58.8008C58.7227 36.9063 58.6758 37.2969 58.6758 37.7032Z" fill="url(#paint13_linear_855_38976)"/>
        <path d="M64.332 43.375C67.457 43.375 69.9883 40.8438 69.9883 37.7188C69.9883 34.5938 67.457 32.0625 64.332 32.0625C63.9258 32.0625 63.5352 32.1094 63.1445 32.1875V43.25C63.5195 43.3282 63.9258 43.375 64.332 43.375Z" fill="url(#paint14_linear_855_38976)"/>
        <path d="M60.332 41.7188C62.5352 43.9219 66.1289 43.9219 68.332 41.7188C70.5352 39.5157 70.5352 35.9219 68.332 33.7188C68.0508 33.4375 67.7383 33.1875 67.4102 32.9688L59.582 40.7813C59.7852 41.1094 60.0352 41.4219 60.332 41.7188Z" fill="url(#paint15_linear_855_38976)"/>
        <path d="M39.9141 15.1562H56.1641C56.6953 15.1562 57.1172 15.5781 57.1172 16.1094V22.375C57.1172 22.9063 56.6953 23.3281 56.1641 23.3281H39.9141C39.3828 23.3281 38.9609 22.9063 38.9609 22.375V16.0938C38.9609 15.5781 39.3828 15.1562 39.9141 15.1562Z" fill="url(#paint16_linear_855_38976)"/>
        <path d="M57.1016 18.9688V22.3594C57.1016 22.8906 56.6797 23.3125 56.1484 23.3125H39.8984C39.3672 23.3125 38.9453 22.8906 38.9453 22.3594V18.9688H57.1016Z" fill="url(#paint17_linear_855_38976)"/>
        <path d="M56.1641 15.1562H48.1641V23.3125H56.1641C56.6953 23.3125 57.1172 22.8906 57.1172 22.3594V16.0937C57.1016 15.5781 56.6797 15.1562 56.1641 15.1562Z" fill="url(#paint18_linear_855_38976)"/>
        <path d="M9.56641 37.875L20.2539 28.2812C22.0977 26.625 25.0195 27.9375 25.0195 30.4062V35.6562H41.9258C42.8477 35.6562 43.5977 36.4062 43.5977 37.3281V42.6562C43.5977 43.5781 42.8477 44.3281 41.9258 44.3281H25.0195V49.5781C25.0195 52.0468 22.0977 53.3593 20.2539 51.7031L9.56641 42.125C8.30078 40.9843 8.30078 39.0156 9.56641 37.875Z" fill="url(#paint19_linear_855_38976)"/>
        <path d="M25.0195 44.3437V49.5937C25.0195 52.0624 22.0977 53.3749 20.2539 51.7187L12.0352 44.3437H25.0195Z" fill="url(#paint20_linear_855_38976)"/>
        <path d="M25.0195 35.6562V30.4062C25.0195 27.9375 22.0977 26.625 20.2539 28.2812L12.0352 35.6562H25.0195Z" fill="url(#paint21_linear_855_38976)"/>
        <path d="M41.9258 35.6562H32.6758V44.3281H41.9258C42.8477 44.3281 43.5977 43.5781 43.5977 42.6563V37.3438C43.5977 36.4063 42.8477 35.6562 41.9258 35.6562Z" fill="url(#paint22_linear_855_38976)"/>
        </g>
        <defs>
        <linearGradient id="paint0_linear_855_38976" x1="24.2169" y1="25.0416" x2="65.7884" y2="51.1542" gradientUnits="userSpaceOnUse">
        <stop stop-color="#EAF6FF"/>
        <stop offset="0.2651" stop-color="#E5F3FE"/>
        <stop offset="0.5398" stop-color="#D9EDFE"/>
        <stop offset="0.8179" stop-color="#C4E3FE"/>
        <stop offset="1" stop-color="#B3DAFE"/>
        </linearGradient>
        <linearGradient id="paint1_linear_855_38976" x1="63.6209" y1="40" x2="72.902" y2="40" gradientUnits="userSpaceOnUse">
        <stop stop-color="#8AC9FE" stop-opacity="0"/>
        <stop offset="0.1291" stop-color="#89C8FD" stop-opacity="0.019"/>
        <stop offset="0.2629" stop-color="#88C6FB" stop-opacity="0.075"/>
        <stop offset="0.3989" stop-color="#87C4F8" stop-opacity="0.168"/>
        <stop offset="0.5365" stop-color="#85C0F4" stop-opacity="0.298"/>
        <stop offset="0.6753" stop-color="#83BBEF" stop-opacity="0.466"/>
        <stop offset="0.8151" stop-color="#7FB5E9" stop-opacity="0.672"/>
        <stop offset="0.9532" stop-color="#7CAEE1" stop-opacity="0.911"/>
        <stop offset="1" stop-color="#7BACDF"/>
        </linearGradient>
        <linearGradient id="paint2_linear_855_38976" x1="48.0308" y1="71.168" x2="48.0308" y2="78.9491" gradientUnits="userSpaceOnUse">
        <stop stop-color="#8AC9FE" stop-opacity="0"/>
        <stop offset="0.1291" stop-color="#89C8FD" stop-opacity="0.019"/>
        <stop offset="0.2629" stop-color="#88C6FB" stop-opacity="0.075"/>
        <stop offset="0.3989" stop-color="#87C4F8" stop-opacity="0.168"/>
        <stop offset="0.5365" stop-color="#85C0F4" stop-opacity="0.298"/>
        <stop offset="0.6753" stop-color="#83BBEF" stop-opacity="0.466"/>
        <stop offset="0.8151" stop-color="#7FB5E9" stop-opacity="0.672"/>
        <stop offset="0.9532" stop-color="#7CAEE1" stop-opacity="0.911"/>
        <stop offset="1" stop-color="#7BACDF"/>
        </linearGradient>
        <linearGradient id="paint3_linear_855_38976" x1="76.0428" y1="48.4246" x2="65.9066" y2="40.0707" gradientUnits="userSpaceOnUse">
        <stop stop-color="#8AC9FE" stop-opacity="0"/>
        <stop offset="0.1291" stop-color="#89C8FD" stop-opacity="0.019"/>
        <stop offset="0.2629" stop-color="#88C6FB" stop-opacity="0.075"/>
        <stop offset="0.3989" stop-color="#87C4F8" stop-opacity="0.168"/>
        <stop offset="0.5365" stop-color="#85C0F4" stop-opacity="0.298"/>
        <stop offset="0.6753" stop-color="#83BBEF" stop-opacity="0.466"/>
        <stop offset="0.8151" stop-color="#7FB5E9" stop-opacity="0.672"/>
        <stop offset="0.9532" stop-color="#7CAEE1" stop-opacity="0.911"/>
        <stop offset="1" stop-color="#7BACDF"/>
        </linearGradient>
        <linearGradient id="paint4_linear_855_38976" x1="5.39047" y1="-2.63878" x2="86.4239" y2="35.9565" gradientUnits="userSpaceOnUse">
        <stop stop-color="#8AC9FE" stop-opacity="0"/>
        <stop offset="0.1291" stop-color="#89C8FD" stop-opacity="0.019"/>
        <stop offset="0.2629" stop-color="#88C6FB" stop-opacity="0.075"/>
        <stop offset="0.3989" stop-color="#87C4F8" stop-opacity="0.168"/>
        <stop offset="0.5365" stop-color="#85C0F4" stop-opacity="0.298"/>
        <stop offset="0.6753" stop-color="#83BBEF" stop-opacity="0.466"/>
        <stop offset="0.8151" stop-color="#7FB5E9" stop-opacity="0.672"/>
        <stop offset="0.9532" stop-color="#7CAEE1" stop-opacity="0.911"/>
        <stop offset="1" stop-color="#7BACDF"/>
        </linearGradient>
        <linearGradient id="paint5_linear_855_38976" x1="56.548" y1="34.113" x2="49.8647" y2="17.405" gradientUnits="userSpaceOnUse">
        <stop stop-color="#8AC9FE" stop-opacity="0"/>
        <stop offset="0.1291" stop-color="#89C8FD" stop-opacity="0.019"/>
        <stop offset="0.2629" stop-color="#88C6FB" stop-opacity="0.075"/>
        <stop offset="0.3989" stop-color="#87C4F8" stop-opacity="0.168"/>
        <stop offset="0.5365" stop-color="#85C0F4" stop-opacity="0.298"/>
        <stop offset="0.6753" stop-color="#83BBEF" stop-opacity="0.466"/>
        <stop offset="0.8151" stop-color="#7FB5E9" stop-opacity="0.672"/>
        <stop offset="0.9532" stop-color="#7CAEE1" stop-opacity="0.911"/>
        <stop offset="1" stop-color="#7BACDF"/>
        </linearGradient>
        <linearGradient id="paint6_linear_855_38976" x1="34.8973" y1="17.6679" x2="30.0261" y2="17.6679" gradientUnits="userSpaceOnUse">
        <stop stop-color="#8AC9FE" stop-opacity="0"/>
        <stop offset="0.1291" stop-color="#89C8FD" stop-opacity="0.019"/>
        <stop offset="0.2629" stop-color="#88C6FB" stop-opacity="0.075"/>
        <stop offset="0.3989" stop-color="#87C4F8" stop-opacity="0.168"/>
        <stop offset="0.5365" stop-color="#85C0F4" stop-opacity="0.298"/>
        <stop offset="0.6753" stop-color="#83BBEF" stop-opacity="0.466"/>
        <stop offset="0.8151" stop-color="#7FB5E9" stop-opacity="0.672"/>
        <stop offset="0.9532" stop-color="#7CAEE1" stop-opacity="0.911"/>
        <stop offset="1" stop-color="#7BACDF"/>
        </linearGradient>
        <linearGradient id="paint7_linear_855_38976" x1="48.0269" y1="11.8858" x2="48.0269" y2="5.36106" gradientUnits="userSpaceOnUse">
        <stop stop-color="#8AC9FE" stop-opacity="0"/>
        <stop offset="0.1291" stop-color="#89C8FD" stop-opacity="0.019"/>
        <stop offset="0.2629" stop-color="#88C6FB" stop-opacity="0.075"/>
        <stop offset="0.3989" stop-color="#87C4F8" stop-opacity="0.168"/>
        <stop offset="0.5365" stop-color="#85C0F4" stop-opacity="0.298"/>
        <stop offset="0.6753" stop-color="#83BBEF" stop-opacity="0.466"/>
        <stop offset="0.8151" stop-color="#7FB5E9" stop-opacity="0.672"/>
        <stop offset="0.9532" stop-color="#7CAEE1" stop-opacity="0.911"/>
        <stop offset="1" stop-color="#7BACDF"/>
        </linearGradient>
        <linearGradient id="paint8_linear_855_38976" x1="-8.80125" y1="27.1578" x2="72.2322" y2="65.7531" gradientUnits="userSpaceOnUse">
        <stop stop-color="#8AC9FE" stop-opacity="0"/>
        <stop offset="0.1291" stop-color="#89C8FD" stop-opacity="0.019"/>
        <stop offset="0.2629" stop-color="#88C6FB" stop-opacity="0.075"/>
        <stop offset="0.3989" stop-color="#87C4F8" stop-opacity="0.168"/>
        <stop offset="0.5365" stop-color="#85C0F4" stop-opacity="0.298"/>
        <stop offset="0.6753" stop-color="#83BBEF" stop-opacity="0.466"/>
        <stop offset="0.8151" stop-color="#7FB5E9" stop-opacity="0.672"/>
        <stop offset="0.9532" stop-color="#7CAEE1" stop-opacity="0.911"/>
        <stop offset="1" stop-color="#7BACDF"/>
        </linearGradient>
        <linearGradient id="paint9_linear_855_38976" x1="35.8997" y1="54.2242" x2="29.3752" y2="54.2242" gradientUnits="userSpaceOnUse">
        <stop stop-color="#8AC9FE" stop-opacity="0"/>
        <stop offset="0.1291" stop-color="#89C8FD" stop-opacity="0.019"/>
        <stop offset="0.2629" stop-color="#88C6FB" stop-opacity="0.075"/>
        <stop offset="0.3989" stop-color="#87C4F8" stop-opacity="0.168"/>
        <stop offset="0.5365" stop-color="#85C0F4" stop-opacity="0.298"/>
        <stop offset="0.6753" stop-color="#83BBEF" stop-opacity="0.466"/>
        <stop offset="0.8151" stop-color="#7FB5E9" stop-opacity="0.672"/>
        <stop offset="0.9532" stop-color="#7CAEE1" stop-opacity="0.911"/>
        <stop offset="1" stop-color="#7BACDF"/>
        </linearGradient>
        <linearGradient id="paint10_linear_855_38976" x1="48.0269" y1="40.4564" x2="48.0269" y2="33.7648" gradientUnits="userSpaceOnUse">
        <stop stop-color="#8AC9FE" stop-opacity="0"/>
        <stop offset="0.1291" stop-color="#89C8FD" stop-opacity="0.019"/>
        <stop offset="0.2629" stop-color="#88C6FB" stop-opacity="0.075"/>
        <stop offset="0.3989" stop-color="#87C4F8" stop-opacity="0.168"/>
        <stop offset="0.5365" stop-color="#85C0F4" stop-opacity="0.298"/>
        <stop offset="0.6753" stop-color="#83BBEF" stop-opacity="0.466"/>
        <stop offset="0.8151" stop-color="#7FB5E9" stop-opacity="0.672"/>
        <stop offset="0.9532" stop-color="#7CAEE1" stop-opacity="0.911"/>
        <stop offset="1" stop-color="#7BACDF"/>
        </linearGradient>
        <linearGradient id="paint11_linear_855_38976" x1="41.082" y1="55.8587" x2="34.3988" y2="41.657" gradientUnits="userSpaceOnUse">
        <stop stop-color="#8AC9FE" stop-opacity="0"/>
        <stop offset="0.1291" stop-color="#89C8FD" stop-opacity="0.019"/>
        <stop offset="0.2629" stop-color="#88C6FB" stop-opacity="0.075"/>
        <stop offset="0.3989" stop-color="#87C4F8" stop-opacity="0.168"/>
        <stop offset="0.5365" stop-color="#85C0F4" stop-opacity="0.298"/>
        <stop offset="0.6753" stop-color="#83BBEF" stop-opacity="0.466"/>
        <stop offset="0.8151" stop-color="#7FB5E9" stop-opacity="0.672"/>
        <stop offset="0.9532" stop-color="#7CAEE1" stop-opacity="0.911"/>
        <stop offset="1" stop-color="#7BACDF"/>
        </linearGradient>
        <linearGradient id="paint12_linear_855_38976" x1="60.7006" y1="34.0811" x2="67.7044" y2="41.085" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FEF0AE"/>
        <stop offset="0.1466" stop-color="#FDEEA9"/>
        <stop offset="0.2986" stop-color="#FDEB9D"/>
        <stop offset="0.4531" stop-color="#FDE688"/>
        <stop offset="0.6093" stop-color="#FCDF6B"/>
        <stop offset="0.7669" stop-color="#FBD646"/>
        <stop offset="0.9233" stop-color="#FACC18"/>
        <stop offset="1" stop-color="#FAC600"/>
        </linearGradient>
        <linearGradient id="paint13_linear_855_38976" x1="64.3298" y1="38.5903" x2="64.3298" y2="43.7527" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FE9738" stop-opacity="0"/>
        <stop offset="0.1207" stop-color="#FE9738" stop-opacity="0.016"/>
        <stop offset="0.2459" stop-color="#FE9738" stop-opacity="0.065"/>
        <stop offset="0.3731" stop-color="#FE9738" stop-opacity="0.147"/>
        <stop offset="0.5018" stop-color="#FE9738" stop-opacity="0.262"/>
        <stop offset="0.6317" stop-color="#FE9738" stop-opacity="0.41"/>
        <stop offset="0.7625" stop-color="#FE9738" stop-opacity="0.59"/>
        <stop offset="0.8916" stop-color="#FE9738" stop-opacity="0.8"/>
        <stop offset="1" stop-color="#FE9738"/>
        </linearGradient>
        <linearGradient id="paint14_linear_855_38976" x1="65.2098" y1="37.7105" x2="70.372" y2="37.7105" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FE9738" stop-opacity="0"/>
        <stop offset="0.1207" stop-color="#FE9738" stop-opacity="0.016"/>
        <stop offset="0.2459" stop-color="#FE9738" stop-opacity="0.065"/>
        <stop offset="0.3731" stop-color="#FE9738" stop-opacity="0.147"/>
        <stop offset="0.5018" stop-color="#FE9738" stop-opacity="0.262"/>
        <stop offset="0.6317" stop-color="#FE9738" stop-opacity="0.41"/>
        <stop offset="0.7625" stop-color="#FE9738" stop-opacity="0.59"/>
        <stop offset="0.8916" stop-color="#FE9738" stop-opacity="0.8"/>
        <stop offset="1" stop-color="#FE9738"/>
        </linearGradient>
        <linearGradient id="paint15_linear_855_38976" x1="66.7719" y1="40.1524" x2="68.703" y2="42.0835" gradientUnits="userSpaceOnUse">
        <stop stop-color="#F5FBFF" stop-opacity="0"/>
        <stop offset="0.1205" stop-color="#F5FBFF" stop-opacity="0.016"/>
        <stop offset="0.2454" stop-color="#F5FBFF" stop-opacity="0.065"/>
        <stop offset="0.3724" stop-color="#F5FBFF" stop-opacity="0.147"/>
        <stop offset="0.5008" stop-color="#F5FBFF" stop-opacity="0.261"/>
        <stop offset="0.6304" stop-color="#F5FBFF" stop-opacity="0.408"/>
        <stop offset="0.761" stop-color="#F5FBFF" stop-opacity="0.588"/>
        <stop offset="0.8898" stop-color="#F5FBFF" stop-opacity="0.797"/>
        <stop offset="1" stop-color="#F5FBFF"/>
        </linearGradient>
        <linearGradient id="paint16_linear_855_38976" x1="47.5391" y1="15.1417" x2="48.5666" y2="23.6192" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FEF0AE"/>
        <stop offset="0.1466" stop-color="#FDEEA9"/>
        <stop offset="0.2986" stop-color="#FDEB9D"/>
        <stop offset="0.4531" stop-color="#FDE688"/>
        <stop offset="0.6093" stop-color="#FCDF6B"/>
        <stop offset="0.7669" stop-color="#FBD646"/>
        <stop offset="0.9233" stop-color="#FACC18"/>
        <stop offset="1" stop-color="#FAC600"/>
        </linearGradient>
        <linearGradient id="paint17_linear_855_38976" x1="48.0347" y1="21.0948" x2="48.0347" y2="23.4908" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FE9738" stop-opacity="0"/>
        <stop offset="0.1207" stop-color="#FE9738" stop-opacity="0.016"/>
        <stop offset="0.2459" stop-color="#FE9738" stop-opacity="0.065"/>
        <stop offset="0.3731" stop-color="#FE9738" stop-opacity="0.147"/>
        <stop offset="0.5018" stop-color="#FE9738" stop-opacity="0.262"/>
        <stop offset="0.6317" stop-color="#FE9738" stop-opacity="0.41"/>
        <stop offset="0.7625" stop-color="#FE9738" stop-opacity="0.59"/>
        <stop offset="0.8916" stop-color="#FE9738" stop-opacity="0.8"/>
        <stop offset="1" stop-color="#FE9738"/>
        </linearGradient>
        <linearGradient id="paint18_linear_855_38976" x1="55.1917" y1="19.2312" x2="57.5798" y2="19.2312" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FE9738" stop-opacity="0"/>
        <stop offset="0.1207" stop-color="#FE9738" stop-opacity="0.016"/>
        <stop offset="0.2459" stop-color="#FE9738" stop-opacity="0.065"/>
        <stop offset="0.3731" stop-color="#FE9738" stop-opacity="0.147"/>
        <stop offset="0.5018" stop-color="#FE9738" stop-opacity="0.262"/>
        <stop offset="0.6317" stop-color="#FE9738" stop-opacity="0.41"/>
        <stop offset="0.7625" stop-color="#FE9738" stop-opacity="0.59"/>
        <stop offset="0.8916" stop-color="#FE9738" stop-opacity="0.8"/>
        <stop offset="1" stop-color="#FE9738"/>
        </linearGradient>
        <linearGradient id="paint19_linear_855_38976" x1="20.3655" y1="26.7296" x2="30.0561" y2="47.1132" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FF4565"/>
        <stop offset="0.2377" stop-color="#F53A60"/>
        <stop offset="0.6488" stop-color="#DB1E54"/>
        <stop offset="1" stop-color="#C00148"/>
        </linearGradient>
        <linearGradient id="paint20_linear_855_38976" x1="22.8078" y1="48.3967" x2="25.4811" y2="48.3967" gradientUnits="userSpaceOnUse">
        <stop stop-color="#C41926" stop-opacity="0"/>
        <stop offset="0.1865" stop-color="#C01926" stop-opacity="0.038"/>
        <stop offset="0.3798" stop-color="#B61C26" stop-opacity="0.152"/>
        <stop offset="0.5761" stop-color="#A62126" stop-opacity="0.343"/>
        <stop offset="0.7747" stop-color="#8F2826" stop-opacity="0.609"/>
        <stop offset="0.9732" stop-color="#713126" stop-opacity="0.949"/>
        <stop offset="1" stop-color="#6D3326"/>
        </linearGradient>
        <linearGradient id="paint21_linear_855_38976" x1="21.4712" y1="31.6032" x2="25.2612" y2="31.6032" gradientUnits="userSpaceOnUse">
        <stop stop-color="#C41926" stop-opacity="0"/>
        <stop offset="0.1865" stop-color="#C01926" stop-opacity="0.038"/>
        <stop offset="0.3798" stop-color="#B61C26" stop-opacity="0.152"/>
        <stop offset="0.5761" stop-color="#A62126" stop-opacity="0.343"/>
        <stop offset="0.7747" stop-color="#8F2826" stop-opacity="0.609"/>
        <stop offset="0.9732" stop-color="#713126" stop-opacity="0.949"/>
        <stop offset="1" stop-color="#6D3326"/>
        </linearGradient>
        <linearGradient id="paint22_linear_855_38976" x1="39.6391" y1="40" x2="43.13" y2="40" gradientUnits="userSpaceOnUse">
        <stop stop-color="#C41926" stop-opacity="0"/>
        <stop offset="0.1865" stop-color="#C01926" stop-opacity="0.038"/>
        <stop offset="0.3798" stop-color="#B61C26" stop-opacity="0.152"/>
        <stop offset="0.5761" stop-color="#A62126" stop-opacity="0.343"/>
        <stop offset="0.7747" stop-color="#8F2826" stop-opacity="0.609"/>
        <stop offset="0.9732" stop-color="#713126" stop-opacity="0.949"/>
        <stop offset="1" stop-color="#6D3326"/>
        </linearGradient>
        <clipPath id="clip0_855_38976">
        <rect width="80" height="80" fill="white" transform="translate(0.5)"/>
        </clipPath>
        </defs>
        </svg>
        <div className="flex flex-col gap-[8px] py-[10px] px-[24px] border-b border-[#D6D6D5]">
          <div className="text-[#141511] text-[20px]">Are you sure want to logout</div>
          <div className="text-[#4F4F4D] max-w-[520px]">Logging out will end your current session. Make sure you've saved any important information. Do you wish to proceed with logging out?</div>
        </div>
        <div className="w-full flex items-center justify-between px-[24px] gap-[12px]">
          <div className="w-full tmd:w-fit h-[48px] cursor-pointer bg-[#fff] flex items-center justify-center py-[8px] px-[24px] text-[#141511] border border-[#D6D6D5]" onClick={()=>dispatch(setShowLogout(false))}>NO, KEEP HERE</div>
          <div className="w-full tmd:w-fit h-[48px] cursor-pointer bg-[#C74332] flex items-center justify-center py-[8px] px-[24px] text-[#FFFFFF] transition-transform duration-200 hover:scale-95" 
          onClick={()=>{
            dispatch(setLoggedInUser(null));
            dispatch(setShowLogout(false));
            navigate('/');
            utils.clearUserData();
            utils.createSuccessNotification("Logged Out Successfully", 3000)
          }}>YES, LOG OUT</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Logout;