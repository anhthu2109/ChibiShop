import React from "react";
import { Steps } from 'antd';

const StepComponet = ({ current = 0, items = [] }) => {
    const { Step } = Steps
    return (
        <Steps current={current}>
            {items.map((item) => {
                return (
                    <Step key={item.title} title={item.title} description={item.description} />
                )
            })}
        </Steps>
    )
}

export default StepComponet