import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      input: {
        home: 'index.html',
        retailDemandForecasting: 'projects/retail-demand-forecasting.html',
        roommateExpenseTracker: 'projects/roommate-expense-tracker.html',
        diabetesPrediction: 'projects/diabetes-prediction.html',
        abTestEfficiency: 'projects/ab-test-efficiency.html',
        airlineOverbooking: 'projects/airline-overbooking.html',
        dataAnalysisEda: 'projects/data-analysis-eda.html',
        dexcom: 'experience/dexcom.html',
        itBusinessAnalyst: 'experience/it-business-analyst.html',
        tripleThreatServices: 'experience/triple-threat-services.html',
        runnings: 'experience/runnings.html',
      },
    },
  },
})
