import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  ReferenceLine,
  Tooltip
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div style={{
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      padding: '12px',
      borderRadius: '4px'
    }}>
      <p style={{ color: '#fff', margin: '0 0 8px', fontSize: '14px' }}>{`Quarter: ${label}`}</p>
      {payload.map((entry, index) => {
        let name = entry.dataKey === 'historical' ? 'Consumption' :
                  entry.dataKey === 'aiForecast' ? 'AI Forecast' :
                  'Final Forecast';
        return (
          <p key={index} style={{ 
            color: entry.color,
            margin: '4px 0',
            fontSize: '12px'
          }}>
            {`${name}: ${entry.value.toLocaleString()}`}
          </p>
        );
      })}
    </div>
  );
};

const DetailLineChart = ({ 
  data, 
  showAIForecast, 
  showFinalForecast, 
  showConfidenceInterval,
  showHistorical 
}) => {
  if (!data || data.length === 0) return null;

  // Find where forecast starts
  const forecastStartIndex = data.findIndex(item => item.aiForecast !== undefined);
  const forecastStartQuarter = forecastStartIndex !== -1 ? data[forecastStartIndex].quarter : null;

  // Calculate min and max values for better Y axis range
  const allValues = data.flatMap(item => [
    showHistorical ? item.historical : null,
    showAIForecast ? item.aiForecast : null,
    showFinalForecast ? item.finalForecast : null
  ].filter(Boolean));
  
  const minValue = Math.min(...allValues);
  const maxValue = Math.max(...allValues);
  const padding = (maxValue - minValue) * 0.1;

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{ top: 10, right: 30, left: 10, bottom: 5 }}
      >
        <CartesianGrid 
          vertical={true}
          stroke="rgba(255,255,255,0.1)"
        />
        <XAxis 
          dataKey="quarter" 
          stroke="#ffffff"
          tick={{ fill: '#ffffff', fontSize: 12 }}
          axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
        />
        <YAxis 
          stroke="#ffffff"
          tick={{ fill: '#ffffff', fontSize: 12 }}
          axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
          domain={[Math.floor(minValue - padding), Math.ceil(maxValue + padding)]}
          tickFormatter={value => (value / 1000).toFixed(0)}
          label={{ 
            value: 'CONSUMPTION (FT, THOUSANDS)', 
            angle: -90, 
            position: 'insideLeft',
            style: { 
              fill: 'rgba(255,255,255,0.6)',
              fontSize: 12,
              textAnchor: 'middle'
            }
          }}
        />
        
        <Tooltip content={<CustomTooltip />} />
        
        {forecastStartQuarter && (
          <ReferenceLine
            x={forecastStartQuarter}
            stroke="rgba(255,255,255,0.3)"
            strokeDasharray="3 3"
          />
        )}
        
        {showHistorical && (
          <Line
            type="monotone"
            dataKey="historical"
            stroke="#ffffff"
            dot={false}
            strokeWidth={2}
            connectNulls
          />
        )}
        
        {showAIForecast && (
          <Line
            type="monotone"
            dataKey="aiForecast"
            stroke="#00E6C3"
            dot={false}
            strokeWidth={2}
            connectNulls
            strokeDasharray="5 5"
          />
        )}
        
        {showFinalForecast && (
          <Line
            type="monotone"
            dataKey="finalForecast"
            stroke="#FFD700"
            dot={false}
            strokeWidth={2}
            connectNulls
            strokeDasharray="5 5"
          />
        )}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DetailLineChart;