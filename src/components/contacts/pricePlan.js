import React from 'react'
import PricePlanBasic from './pricePlanBasic'
import PricePlanStandard from './pricePlanStandard'
import PricePlanPremium from './pricePlanPremium'





const pricePlan = () => {
    return (
        <section className="pricePlan container mb-4 dflex">
            <PricePlanBasic />
            <PricePlanStandard />
            <PricePlanPremium />
        </section>
    )
}

export default pricePlan
