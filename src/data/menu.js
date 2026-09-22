export const categories = [
  { id: 'food', label: 'Restaurant', te: 'రెస్టారెంట్', icon: '🍛' },
  { id: 'pickles', label: 'Pickles', te: 'ఊరగాయలు', icon: '🫙' },
];

// Only owner-verified information belongs in this public menu.
// Ingredients and unclear pickle names are intentionally not invented from photographs.
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
      note: 'The board indicates a Wednesday & Sunday special. The exact item name must be owner-verified before publication.',
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
      te: 'నాన్-వెజ్ ఊరగాయలు',
      note: 'Product names and prices will be published only after the handwritten board is verified by the owner.',
      items: [],
    },
  ],
};
