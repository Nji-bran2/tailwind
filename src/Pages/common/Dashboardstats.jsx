import React from 'react'

export default function Dashboardstats() {
  return (
    <div className="flex flex-col gap-1">
    <div className="text-sm">Account</div>
    <div className="flex flex-row gap-4">
    
 <BoxWrapper className="flex justify-between ">
    <div className="flex justify-between items-center w-full pl-4">
        <div>
            <strong className="text-xl text-white font-semibold">Checking</strong>
            <div>
                <span className="text-sm  text-dimWhite font-light">x54232</span>
            </div>
        </div>
        <div>
            <strong className="text-xl text-white font-semibold">$54232</strong>
            <div>
                <span className="text-sm text-dimWhite font-light">Avaliable</span>
            </div>
        </div>
    </div>
</BoxWrapper>
<BoxWrapper className="flex justify-between ">
    <div className="flex justify-between items-center w-full pl-4">
        <div>
            <strong className="text-sm text-white font-semibold">Checking</strong>
            <div>
                <span className="text-xl  text-dimWhite font-light">x54232</span>
            </div>
        </div>
        <div>
            <strong className="text-xl text-white font-semibold">$54232</strong>
            <div>
                <span className="text-sm text-dimWhite font-light">Avaliable</span>
            </div>
        </div>
    </div>
</BoxWrapper>


<BoxWrapper className="flex justify-between ">
    <div className="flex justify-between items-center w-full">
        <div>
            <strong className="text-sm text-white font-semibold">Savings</strong>
            <span className="text-xl text-white font-light">$54232</span>
        </div>
        <span className="text-sm text-green-500">+343</span>
    </div>
</BoxWrapper>



</div>
</div>
  )
}

function BoxWrapper({ children }) {
	return <div className= "bg-green-600 rounded-xl p-2 flex-1 border border-gray-200 flex items-center">{children}</div>
}
