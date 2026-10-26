// 1. Import all your optimized images here (Method A)
import img20s from '../assets/strans/Srb20s.png';
import img30s from '../assets/strans/Srb30s.png';
import img40s from '../assets/strans/Srb40s.png';
import img430s from '../assets/strans/Srb430s.png';
import img435s from '../assets/strans/Srb435s.png';
import img50s from '../assets/strans/Srb50s.png';
import img70s from '../assets/strans/Srb70s.png';
import img81s from '../assets/strans/Srb81s.png';
import img121s from '../assets/strans/Srb121s.png';
import img131s from '../assets/strans/Srb131s.png';

// FIXED: Restructured the data to include the brand, the image, and the nested "specs" object!
export const stransBreakers = [
  { id: 1, brand: "STRANS", model: "SRB20S", image: img20s, specs: { weight: "130 kg", pressure: "90-120 bar", flow: "20-30 L/min", hose: "1/2\"", toolDia: "45 mm", bpm: "700-1200", carrier: "1.2-3.0 Ton" } },
  { id: 2, brand: "STRANS", model: "SRB30S", image: img30s, specs: { weight: "155 kg", pressure: "90-120 bar", flow: "25-50 L/min", hose: "1/2\"", toolDia: "53 mm", bpm: "600-1100", carrier: "2.5-4.5 Ton" } },
  { id: 3, brand: "STRANS", model: "SRB40S", image: img40s, specs: { weight: "360 kg", pressure: "110-140 bar", flow: "40-70 L/min", hose: "1/2\"", toolDia: "68 mm", bpm: "500-900", carrier: "4.5-7.0 Ton" } },
  { id: 4, brand: "STRANS", model: "SRB430S", image: img430s, specs: { weight: "440 kg", pressure: "120-150 bar", flow: "50-90 L/min", hose: "1/2\"", toolDia: "75 mm", bpm: "400-800", carrier: "6.0-9.0 Ton" } },
  { id: 5, brand: "STRANS", model: "SRB435S", image: img435s, specs: { weight: "451 kg", pressure: "120-160 bar", flow: "50-100 L/min", hose: "1/2\"", toolDia: "80 mm", bpm: "400-800", carrier: "6.0-9.0 Ton" } },
  { id: 6, brand: "STRANS", model: "SRB50S", image: img50s, specs: { weight: "895 kg", pressure: "150-170 bar", flow: "80-110 L/min", hose: "3/4\"", toolDia: "100 mm", bpm: "350-700", carrier: "10-15 Ton" } },
  { id: 7, brand: "STRANS", model: "SRB70S", image: img70s, specs: { weight: "1650 kg", pressure: "160-180 bar", flow: "130-150 L/min", hose: "1\"", toolDia: "135 mm", bpm: "400-800", carrier: "18-26 Ton" } },
  { id: 8, brand: "STRANS", model: "SRB81S", image: img81s, specs: { weight: "1950 kg", pressure: "160-180 bar", flow: "145-180 L/min", hose: "1\"", toolDia: "140 mm", bpm: "350-500", carrier: "18-26 Ton" } },
  { id: 9, brand: "STRANS", model: "SRB121S", image: img121s, specs: { weight: "2910 kg", pressure: "160-180 bar", flow: "180-240 L/min", hose: "1\"", toolDia: "155 mm", bpm: "300-450", carrier: "28-35 Ton" } },
  { id: 10, brand: "STRANS", model: "SRB131S", image: img131s, specs: { weight: "2970 kg", pressure: "160-180 bar", flow: "200-260 L/min", hose: "1 1/4\"", toolDia: "165 mm", bpm: "300-450", carrier: "30-45 Ton" } }
];