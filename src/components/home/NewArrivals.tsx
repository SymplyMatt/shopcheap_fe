import { useSelector } from 'react-redux';
import GridSlider from './GridSlider'
import { RootState } from '../../redux/store';

const NewArrivals = () => {
  const { newArrivals } = useSelector((state: RootState) => state.app);
  return (
    <div className="w-full flex flex-col items-center gap-[40px] tmd:gap-[20px] mb-[40px] overflow-visible">
        <div className="w-full flex flex-col tmd:flex-row items-center justify-between h-[48px] px-[20px] tmd:px-[50px] overflow-visible gap-[16px] text-center mb-[24px] tmd:mb-[24px]">
            <div className="text-[28px] tmd:text-[48px] font-normal leading-[32.78px] tracking-[0%] text-center">Featured</div>
            <div className="h-[48px] bg-white border border-black px-[36px] py-[12px] cursor-pointer flex items-center justify-center font-semibold leading-[24px] tracking-[0%] whitespace-nowrap transition-transform duration-200 hover:scale-[0.9]">VIEW ALL NEW</div>
        </div>
        <GridSlider categoriesAndProducts={newArrivals}/>
    </div>
  )
}

export default NewArrivals