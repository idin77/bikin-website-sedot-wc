export const trackConversion = (eventName: string, details?: object) => {
  console.log(`[GTM Simulation] Event: ${eventName}`, details);
  
  // Simulate GTM dataLayer push
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...details,
      timestamp: new Date().toISOString(),
    });
  }
};
