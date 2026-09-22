export const categories = [
  { id: 'food', label: 'Restaurant', te: 'రెస్టారెంట్', icon: '🍛' },
  { id: 'pickles', label: 'Pickles', te: 'పచ్చళ్ళు', icon: '🫙' },
];

// Public-menu rule: only owner-verified information is published.
// Do not infer unclear handwritten names, ingredients, pack sizes, or prices.
export const menu = {
  food: [
    {
      id: 'biryani-section',
      category: 'Biryanis',
      te: 'బిర్యానీలు',
      items: [
        { id: 'chicken-fry-piece', en: 'Chicken Fry Piece Biryani', te: 'చికెన్ ఫ్రై పీస్ బిర్యానీ', prices: [{ label: 'Full', te: 'ఫుల్', price: 350 }, { label: 'Half', te: 'హాఫ్', price: 250 }] },
        { id: 'natukodi-fry-piece', en: 'Natu Kodi Fry Piece Biryani', te: 'నాటుకోడి ఫ్రై పీస్ బిర్యానీ', prices: [{ label: 'Full', te: 'ఫుల్', price: 500 }, { label: 'Half', te: 'హాఫ్', price: 350 }] },
        { id: 'royyala-fry-piece', en: 'Royyala Fry Piece Biryani', te: 'రొయ్యల ఫ్రై పీస్ బిర్యానీ', prices: [{ label: 'Full', te: 'ఫుల్', price: 400 }, { label: 'Half', te: 'హాఫ్', price: 300 }] },
        { id: 'mutton-fry-piece', en: 'Mutton Fry Piece Biryani', te: 'మటన్ ఫ్రై పీస్ బిర్యానీ', prices: [{ label: 'Full', te: 'ఫుల్', price: 500 }] },
      ],
    },
    {
      id: 'special-biryani-section',
      category: 'Special Biryani',
      te: 'స్పెషల్ బిర్యానీ',
      note: 'A special biryani is shown on the restaurant board for selected days. The exact item name and schedule are intentionally left unpublished until the owner confirms them.',
      items: [],
    },
    {
      id: 'side-items-section',
      category: 'Sides & Extras',
      te: 'సైడ్స్ & ఎక్స్‌ట్రాస్',
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
      id: 'nonveg-pickles',
      category: 'Non-Veg Pickles',
      te: 'నాన్-వెజ్ పచ్చళ్ళు',
      note: 'The photographed pickle board contains the product and price information supplied to us. The public menu will publish each name, pack size, price and ingredient list only after owner verification.',
      items: [],
    },
  ],
};
