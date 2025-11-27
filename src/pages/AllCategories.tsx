import Layout from "./Layout";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Category } from "../utils/utils";
import { useNavigate } from "react-router-dom";

const AllCategories = () => {
  const navigate = useNavigate();
  const { categories } = useSelector((state: RootState) => state.app);

  const handleCategoryClick = (categoryId: string) => {
    if (!categoryId) return;
    navigate(`/categories/${categoryId}`);
  };

  return (
    <Layout>
      <div className="w-full flex flex-col items-center gap-[24px] mb-[50px] px-[20px] tmd:px-[50px]">
        <div className="w-full flex flex-col gap-[16px] pt-[24px]">
          <h1 className="text-[24px] tmd:text-[32px] font-semibold leading-[130%] tracking-[-0.04em]">
            All Categories
          </h1>
          <p className="text-[14px] tmd:text-[16px] text-[#4B5563]">
            Browse all product categories and discover items curated just for you.
          </p>
        </div>

        <div className="w-full mt-[12px]">
          {(!categories || categories.length === 0) ? (
            <div className="w-full flex items-center justify-center py-[60px] text-[14px] text-[#6B7280]">
              No categories available yet.
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[16px] tmd:gap-[24px]">
              {categories.map((category: Category) => (
                <button
                  key={category.id}
                  className="group flex flex-col items-center gap-[10px] bg-white border border-[#E5E7EB] rounded-[16px] p-[16px] hover:shadow-md hover:border-[#8F0024]/60 transition-all duration-200 text-left"
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <div className="w-[80px] h-[80px] tmd:w-[96px] tmd:h-[96px] rounded-full bg-[#F9FAFB] flex items-center justify-center overflow-hidden">
                    {category.image ? (
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[12px] text-[#9CA3AF]">
                        No image
                      </div>
                    )}
                  </div>

                  <div className="w-full flex flex-col items-center gap-[4px]">
                    <span className="text-[14px] tmd:text-[15px] font-semibold text-[#111827] text-center line-clamp-2">
                      {category.name.replace(/&amp;/g, "&")}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AllCategories;


