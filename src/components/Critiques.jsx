export default function Review() {
    return (
        <div className = "bg-orange space-y-5 p-3">
            <h1 className = "text-5xl text-center font-amaticsc font-bold text-cream">Critiques</h1>

            <div className = "p-5 gap-5 grid md:grid-cols-3">
                <div className = "bg-cream p-5 rounded-xl space-3-gap">
                    <h1 className = "text-center text-xl font-bold">Potential Statistical Biases</h1>

                    <div>
                        Reported crimes may not be representative of all crimes. 
                        Crime reporting rates are related to several factors, including but not limited to race and socioeconomic status.
                        <br/>
                        <br/>
                        → The model can lead to increasing policing of already overpoliced areas
                    </div>
                </div>

                <div className = "bg-cream p-5 rounded-xl space-3-gap">
                    <h1 className = "text-center text-xl font-bold">Runaway Feedback Loop</h1>

                    <div>
                        Police patrol may depend more on past beliefs than actual crime rates.
                        When crime rates in two areas are equal, police tend to continue to patrol in areas they did in the past.
                        When crime rates in two areas are unequal, police may focus on the area with the higher crime rate to the point of ignoring the other.
                        <br/>
                        <br/>
                        → Police may continue to concentrate on previously overpoliced areas regardless of the model's conclusions
                    </div>
                </div>

                <div className = "bg-cream p-5 rounded-xl space-3-gap">
                    <h1 className = "text-center text-xl font-bold">Crime is value-laden</h1>
                        
                    <div>
                        What is defined as crime may not be neutral but social or political.
                        Predictive policing, therefore, may inherit these social and political values.
                        <br/>
                        <br/>
                        → Crime data may be laden with social and political ideas
                    </div>
                </div>
            </div>
        </div>
    )
}