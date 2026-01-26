import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

export default function Model() {
    return (
        <div className = "bg-orange p-5 gap-5 grid md:grid-cols-3">
            <div className = "bg-cream p-5 rounded-xl space-3-gap">
                <h1 className = "text-center">Probabilisitc rate of events in box n at time t</h1>
                
                <BlockMath 
                    math = {
                        '\\lambda_n(t) = \\mu_n + \\sum_{t^j_n \\lt t} \\theta \\omega e^{-\\omega(t - t^j_n)}'
                    }
                />
            </div>

            <div className = "bg-cream p-5 rounded-xl space-3-gap">
                <h1 className = "text-center">E-step</h1>

                <BlockMath 
                    math = {
                        `p^{ij}_n = \\frac{\\theta \\omega e^{-\\omega(t - t^j_n)}}{\\lambda_n(t^j_n)}`
                    }
                />

                <BlockMath
                    math = {
                        `p^{j}_n = \\frac{\\mu_n}{\\lambda_n(t^j_n)}`
                    }
                />
            </div>

            <div className = "bg-cream p-5 rounded-xl space-3-gap">
                <h1 className = "text-center">M-step</h1>

                <BlockMath
                    math = {
                        `\\omega = \\frac{\\sum_n \\sum_{i \\lt j} p^{ij}_n}{\\sum_n \\sum_{i \\lt j} p^{ij}_n (t^j_n - t^i_n)}`
                    }
                />

                <BlockMath
                    math = {
                        `\\theta = \\frac{\\sum_n \\sum_{i \\lt j} p^{ij}}{\\sum_n \\sum_j 1}`
                    }
                />

                <BlockMath
                    math = {
                        `\\mu = \\frac{\\sum_n \\sum_j p^j_n}{T}`
                    }
                />
            </div>
        </div>
    )
}