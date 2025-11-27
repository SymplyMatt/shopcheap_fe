
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setSearchMode, setProducts, setTotalPages } from "../../redux/states/app";
import { useState, useEffect } from "react";
import { apiRequest, Response } from "../../utils/utils";
import { useNavigate } from "react-router-dom";

const EmptySearch = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const [input, setInput] = useState<string>("");
    const [popularSearches, setPopularSearches] = useState<string[]>([]);
    const [searchHistory, setSearchHistory] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    // Load search history from localStorage
    useEffect(() => {
        const history = localStorage.getItem('searchHistory');
        if (history) {
            try {
                const parsedHistory = JSON.parse(history);
                setSearchHistory(Array.isArray(parsedHistory) ? parsedHistory : []);
            } catch (error) {
                console.error('Error parsing search history:', error);
                setSearchHistory([]);
            }
        }
    }, []);

    // Fetch popular searches from backend
    useEffect(() => {
        const fetchPopularSearches = async () => {
            try {
                const response: Response = await apiRequest("products/popular-searches?limit=3");
                if (response.status === 200 && response.data?.results) {
                    setPopularSearches(response.data.results);
                }
            } catch (error) {
                console.error('Error fetching popular searches:', error);
            }
        };
        fetchPopularSearches();
    }, []);

    // Save search to history
    const saveToHistory = (searchTerm: string) => {
        if (!searchTerm.trim()) return;
        
        const trimmedTerm = searchTerm.trim();
        const updatedHistory = [
            trimmedTerm,
            ...searchHistory.filter(item => item.toLowerCase() !== trimmedTerm.toLowerCase())
        ].slice(0, 7); // Keep only last 7 searches
        
        setSearchHistory(updatedHistory);
        localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
    };

    // Remove from search history
    const removeFromHistory = (searchTerm: string, e: React.MouseEvent) => {
        e.stopPropagation();
        const updatedHistory = searchHistory.filter(item => item !== searchTerm);
        setSearchHistory(updatedHistory);
        localStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
    };

    // Handle search
    const handleSearch = async (searchTerm?: string) => {
        const term = searchTerm || input.trim();
        if (!term) return;

        setLoading(true);
        try {
            const response: Response = await apiRequest(`products/search?q=${encodeURIComponent(term)}&page=1&limit=10`);
            if (response.status === 200) {
                dispatch(setProducts(response.data?.results || []));
                dispatch(setTotalPages(response.data?.pagination?.totalPages || 0));
                saveToHistory(term);
                navigate(`/search/allresults?search=${encodeURIComponent(term)}&type=all`);
                dispatch(setSearchMode(null));
            }
        } catch (error) {
            console.error('Error searching products:', error);
        } finally {
            setLoading(false);
        }
    };

    // Handle Enter key press
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.4, ease: "easeOut" }} className="min-w-[100%] w-[100vw] h-[100vh] fixed top-0 right-0 bg-[#1415114D] z-10 flex tmd:flex justify-center pt-[0px] tmd:pt-[42px]">
        <div className="w-full h-full tmd:h-fit tmd:w-[70%] bg-white h_content border border-[#D6D6D5] py-[40px] pb-[100px] tmd:py-[40px] px-[20px] tmd:p-[40px] flex flex-col items-center gap-[40px] overflow-scroll">
            <div className="w-full tmd:hidden flex items-center justify-end">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => dispatch(setSearchMode(null))}>
                    <path d="M12.9233 12.4976L23.6519 23.2262" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.4127 23.4129L23.1413 12.6843" stroke="#141511" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className="w-full flex items-center justify-between gap-[40px] mt-[-20px] tmd:mt-[0px]">
                <div className="w-full flex items-center justify-center border border-black h-[48px]">
                    <div className="border-r border-black h-[48px] flag-container min-w-[85px] flex items-center justify-center p-[8px] gap-[4px] cursor-pointer font-semibold">
                        ALL
                        <img src="/images/caretflag.svg" className="w-[24px] h-[24px]"/>
                    </div>
                    <input 
                        type="text" 
                        placeholder="Search for product" 
                        className="w-full h-full border-none outline-none p-[16px] text-[#6B6B6B]" 
                        onChange={(e)=>setInput(e.currentTarget.value)} 
                        value={input}
                        onKeyPress={handleKeyPress}
                        disabled={loading}
                    />
                    {input && <img src="/images/cancelxsm.svg" className="h-full cursor-pointer h-[18px] relative right-[10px]" onClick={() => setInput('')}/>}
                    <img src="/images/searchIcon.svg" className="h-full cursor-pointer" onClick={() => handleSearch()} style={{ opacity: loading ? 0.5 : 1 }}/>
                </div>
                <div className="text-[#6B6B6B] cursor-pointer text-[14px] hidden tmd:flex" onClick={() => dispatch(setSearchMode(null))}>CANCEL</div>
            </div>
            {popularSearches.length > 0 && (
                <div className="w-full flex flex-col tmd:items-center justify-center gap-[18px] w-[70%]">
                    <div className="flex items-center gap-[8px] text-[#141511]"><img src="/images/arrowcurve.svg" className="h-full"/>Popular searches this week</div>
                    <div className="flex items-center justify-center gap-[12px] flex-wrap">
                        {popularSearches.map((search, index) => (
                            <div 
                                key={index}
                                className="flex items-center justify-center gap-[4px] h-[40px] bg-[#F3F3F3] border border-[#D6D6D5] py-[8px] px-[12px] text-[#4F4F4D] text-[14px] cursor-pointer" 
                                onClick={() => handleSearch(search)}
                            >
                                <img src="/images/searchfade.svg"/> {search}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {searchHistory.length > 0 && (
                <div className="w-full flex flex-col tmd:items-center justify-center gap-[8px] w-[70%]">
                    <div className="flex items-center gap-[8px] text-[#141511]">Search history</div>
                    <div className="flex tmd:items-center tmd:justify-center gap-[12px] flex-wrap">
                        {searchHistory.map((search, index) => (
                            <div 
                                key={index}
                                className="flex items-center justify-center gap-[4px] h-[40px] border border-[#D6D6D5] py-[8px] px-[12px] text-[#4F4F4D] text-[14px] cursor-pointer" 
                                onClick={() => handleSearch(search)}
                            >
                                {search} <img src="/images/x_sm.svg" onClick={(e) => removeFromHistory(search, e)}/>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    </motion.div>
    );
};

export default EmptySearch;