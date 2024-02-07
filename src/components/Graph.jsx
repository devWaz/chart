import { spendings } from "../utils/data";

const Graph = () => {
    return ( 
        <div className="mt-4 bg-[#fffaf5] rounded-xl p-4">
            <h1 className="text-[22px] font-bold">Spending - Last 7 days</h1>

            <div className="flex justify-between mt-[2rem] mb-[1rem]">
                {
                    spendings.map((spending, index) => (
                        
                        <div key={index} className=" w-[10%] flex flex-col text-center">
                            <div 
                                style={{ height: `${spending.amount / 4}em` }}
                                className={`bg-[#ec775f] hover:bg-[#76b5bc] active:bg-[#76b5bc] rounded mt-auto`}></div>
                            <p className="mt-2 text-[.9rem] opacity-[0.7]">{spending.day}</p>
                        </div>
                    ))
                }
            </div>

            <div className="flex justify-between pt-5 pb-3 border-t-[2px] mt-4">
                <div>
                    <p className="text-[.9rem] opacity-[0.6]">Total this month</p>
                    <span className="text-[27px] font-bold">$478.33</span>
                </div>

                <div className="text-right mt-auto">
                    <p className="text-[.9rem] font-bold">+2.4%</p>
                    <span className="text-[.9rem] opacity-[0.6]">from last month</span>
                </div>
            </div>
        </div>
     );
}
 
export default Graph;