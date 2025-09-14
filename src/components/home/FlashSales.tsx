import UpsellSlider from '../product/UpsellSlider'
import homeimageone from '../../assets/images/homeimageone.jpg';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const FlashSales = () => {
  const { products } = useSelector((state: RootState) => state.app);

  return (
    <>
      <div className="w-full flex-col items-center justify-center">
          <div className="w-full tmd:h-[60px] bg-[#10583E] flex tmd:items-center justify-between py-[16px] px-[20px] tmd:px-[50px] flex-col tmd:flex-row relative tmd:static">
              <div className="text-[#FFFFFF] font-bold flex items-center gap-[8px]">
                IN SEASON</div>
              <div className="uppercase text-white underline text-[16px] font-medium leading-[24px] tracking-[0%] cursor-pointer absolute right-[16px] top-1/2 -translate-y-1/2 tmd:static  tmd:top-auto tmd:translate-y-0">see all</div>
          </div>
          { products.length > 0 ? <UpsellSlider showTitle={false} products={ products }/> : <></> }
      </div>
      <img src={homeimageone} className="w-full h-auto" />
    </>
  )
}

export default FlashSales