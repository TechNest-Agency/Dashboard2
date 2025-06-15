import AverageDailySalesCard from "../../../components/Dashboard__/Cards/AverageDailySalesCard";
import EarningReports from "../../../components/Dashboard__/Cards/EarningReports";
import MonthlyCampaignState from "../../../components/Dashboard__/Cards/MonthlyCampaignState";
import SalesOverviewCard from "../../../components/Dashboard__/Cards/SalesOverviewCard";
import SupportTracker from "../../../components/Dashboard__/Cards/SupportTracker";

export default function Analytics() {
    return (
        <div className='p-2'>
            <MonthlyCampaignState />
            <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row gap-3 p-2 mt-4">

                <div className="md:w-[55%] lg:w-full xl:w-[55%] w-full">
                    <EarningReports />
                </div>

                <div className="md:w-[45%] lg:w-full xl:w-[45%]  w-full">
                    <SupportTracker />

                </div>
            </div>


            <div className="flex flex-row gap-6 p-5">
                <AverageDailySalesCard />
                <SalesOverviewCard />
            </div>
        </div>


    )
}
