export const categories = [
  { id: 'food', label: 'Restaurant', te: 'రెస్టారెంట్', icon: '🍛' },
  { id: 'pickles', label: 'Pickles', te: 'ఊరగాయలు', icon: '🫙' },
];

// Only verified menu data should be published here.
// The handwritten pickle names are intentionally left out until the owner verifies them.
export const menu = {
  food: [
    {
      id: 'biryani-section',
      category: 'Biryani',
      te: 'బిర్యానీలు',
      items: [
        { id: 'chicken-fry-piece', en: 'Chicken Fry Piece Biryani', te: 'చికెన్ ఫ్రై పీస్ బిర్యానీ', prices: [{ label: 'Full', te: 'ఫుల్', price: 350 }, { label: 'Half', te: 'హాఫ్', price: 250 }] },
        { id: 'natukodi-fry-piece', en: 'Natu Kodi Fry Piece Biryani', te: 'నాటుకోడి ఫ్రై పీస్ బిర్యానీ', prices: [{ label: 'Full', te: 'ఫుల్', price: 500 }, { label: 'Half', te: 'హాఫ్', price: 350 }] },
        { id: 'royyala-fry-piece', en: 'Royyala Fry Piece Biryani', te: 'రొయ్యల ఫ్రై పీస్ బిర్యానీ', prices: [{ label: 'Full', te: 'ఫుల్', price: 400 }, { label: 'Half', te: 'హాఫ్', price: 300 }] },
        { id: 'mutton-fry-piece', en: 'Mutton Fry Piece Biryani', te: 'మటన్ ఫ్రై పీస్ బిర్యానీ', prices: [{ label: 'Full', te: 'ఫుల్', price: 500 }] },
      ],
    },
    {
      id: 'specials-section',
      category: 'Specials',
      te: 'స్పెషల్ ఐటమ్స్',
      items: [],
    },
  ],
  pickles: [
    {
      id: 'nonveg-pickles',
      category: 'Non-Veg Pickles',
      te: 'నాన్-వెజ్ ఊరగాయలు',
      items: [],
    },
  ],
};
