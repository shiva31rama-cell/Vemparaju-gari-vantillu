export const categories = [
  { id: 'food', label: 'Restaurant', te: 'రెస్టారెంట్', icon: '🍛' },
  { id: 'pickles', label: 'Pickles', te: 'పచ్చళ్ళు', icon: '🫙' },
];

// Menu transcribed from the restaurant-provided menu photographs.
// Ingredients are intentionally omitted until the restaurant supplies the exact ingredient/allergen list.
export const menu = {
  food: [
    {
      id: 'biryani-section', category: 'Biryanis', te: 'బిర్యానీలు',
      items: [
        { id: 'chicken-fry-piece', en: 'Chicken Fry Piece Biryani', te: 'చికెన్ ఫ్రై పీస్ బిర్యానీ', prices: [{ label: 'Full', te: 'ఫుల్', price: 350 }, { label: 'Half', te: 'హాఫ్', price: 250 }] },
        { id: 'natukodi-fry-piece', en: 'Natu Kodi Fry Piece Biryani', te: 'నాటుకోడి ఫ్రై పీస్ బిర్యానీ', prices: [{ label: 'Full', te: 'ఫుల్', price: 500 }, { label: 'Half', te: 'హాఫ్', price: 350 }] },
        { id: 'royyala-fry-piece', en: 'Royyala Fry Piece Biryani', te: 'రొయ్యల ఫ్రై పీస్ బిర్యానీ', prices: [{ label: 'Full', te: 'ఫుల్', price: 400 }, { label: 'Half', te: 'హాఫ్', price: 300 }] },
        { id: 'mutton-fry-piece', en: 'Mutton Fry Piece Biryani', te: 'మటన్ ఫ్రై పీస్ బిర్యానీ', prices: [{ label: 'Full', te: 'ఫుల్', price: 500 }] },
      ],
    },
    {
      id: 'special-biryani-section', category: 'Sunday & Wednesday Special', te: 'బుధ, ఆదివారం స్పెషల్',
      items: [
        { id: 'dampudu-pothu-biryani', en: 'Dampudu Pothu Biryani', te: 'దంపుడు పోతు బిర్యానీ', prices: [{ label: 'Price', te: 'ధర', price: 600 }] },
      ],
    },
    {
      id: 'side-items-section', category: 'Sides & Extras', te: 'సైడ్స్ & ఎక్స్‌ట్రాస్',
      items: [
        { id: 'chicken-fry', en: 'Chicken Fry', te: 'చికెన్ ఫ్రై', prices: [{ label: 'Price', te: 'ధర', price: 250 }] },
        { id: 'royyala-fry', en: 'Royyala Fry', te: 'రొయ్యల ఫ్రై', prices: [{ label: 'Price', te: 'ధర', price: 300 }] },
        { id: 'natukodi-fry', en: 'Natu Kodi Fry', te: 'నాటుకోడి ఫ్రై', prices: [{ label: 'Price', te: 'ధర', price: 350 }] },
        { id: 'biryani-rice', en: 'Biryani Rice', te: 'బిర్యానీ రైస్', prices: [{ label: 'Price', te: 'ధర', price: 200 }] },
        { id: 'sambar', en: 'Sambar', te: 'సాంబార్', prices: [{ label: 'Price', te: 'ధర', price: 40 }] },
      ],
    },
  ],
  pickles: [
    {
      id: 'veg-pickles', category: 'Veg Pickles', te: 'వెజ్ పచ్చళ్ళు',
      items: [
        { id: 'kakarakaya-avakaya', en: 'Bitter Gourd Avakaya', te: 'కాకరకాయ ఆవకాయ', prices: [{ label: '1 kg', te: '1 కేజీ', price: 700 }] },
        { id: 'mamidikaya-avakaya', en: 'Mango Avakaya', te: 'మామిడికాయ ఆవకాయ', prices: [{ label: '1 kg', te: '1 కేజీ', price: 700 }] },
        { id: 'munaga-avakaya', en: 'Drumstick Avakaya', te: 'మునగ ఆవకాయ', prices: [{ label: '1 kg', te: '1 కేజీ', price: 700 }] },
        { id: 'usirikaya', en: 'Amla Pickle', te: 'ఉసిరికాయ', prices: [{ label: '1 kg', te: '1 కేజీ', price: 700 }] },
        { id: 'gongura', en: 'Gongura Pickle', te: 'గోంగూర', prices: [{ label: '1 kg', te: '1 కేజీ', price: 700 }] },
        { id: 'kothimeera', en: 'Coriander Pickle', te: 'కొత్తిమీర', prices: [{ label: '1 kg', te: '1 కేజీ', price: 700 }] },
        { id: 'tomato-pickle', en: 'Tomato Pickle', te: 'టమాటా', prices: [{ label: '1 kg', te: '1 కేజీ', price: 700 }] },
        { id: 'allam-pickle', en: 'Ginger Pickle', te: 'అల్లం', prices: [{ label: '1 kg', te: '1 కేజీ', price: 700 }] },
      ],
    },
    {
      id: 'nonveg-pickles', category: 'Non-Veg Pickles', te: 'నాన్-వెజ్ పచ్చళ్ళు',
      items: [
        { id: 'chicken-pickle', en: 'Chicken Pickle', te: 'చికెన్', prices: [{ label: '1 kg', te: '1 కేజీ', price: 900 }] },
        { id: 'boneless-chicken-pickle', en: 'Boneless Chicken Pickle', te: 'బోన్‌లెస్ చికెన్', prices: [{ label: '1 kg', te: '1 కేజీ', price: 1200 }] },
        { id: 'prawns-pickle', en: 'Prawns Pickle', te: 'రొయ్యలు', prices: [{ label: '1 kg', te: '1 కేజీ', price: 1500 }] },
        { id: 'natu-kodi-pickle', en: 'Natu Kodi Pickle', te: 'నాటుకోడి', prices: [{ label: '1 kg', te: '1 కేజీ', price: 1300 }] },
        { id: 'mutton-pickle', en: 'Mutton Pickle', te: 'మటన్', prices: [{ label: '1 kg', te: '1 కేజీ', price: 1600 }] },
        { id: 'pottelu-pickle', en: 'Pottelu Pickle', te: 'పొట్టేలు', prices: [{ label: '1 kg', te: '1 కేజీ', price: 1600 }] },
      ],
    },
  ],
};
