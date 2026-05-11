const {createClient} = require('@sanity/client')
const client = createClient({projectId:'8xla3ony',dataset:'production',apiVersion:'2024-01-01',token:'sk5ncOmk3Z8erUHhn7rXevoh5rC5WkQaNk3qQYrdtwqCO7rhKUwxveq3HEE8GWJn68zu7HKoKJE1ltCur',useCdn:false})

const data = [
  {cat:'Drinks & Juices',slug:'drinks-juices',catId:'u2c7X9a99uVUgCuK9HYetn',p:'Mango Fruit Drink 3L',ps:'mango-fruit-drink',desc:'Premium quality Mango fruit drink in 3L pet bottle. 25% pulp.',weight:'3 Liter'},
  {cat:'Bulk Dry Fruits/Nuts',slug:'dry-fruits-nuts',catId:'yX7EXDtihs8pMiZoUS1VYk',p:'Mixed Dry Fruits',ps:'mixed-dry-fruits',desc:'Premium quality mixed dry fruits including cashews, almonds, and raisins.',weight:'1kg'},
  {cat:'Spices',slug:'spices',catId:'u2c7X9a99uVUgCuK9HYfJq',p:'Himalayan Pink Salt',ps:'himalayan-pink-salt',desc:'Pure Himalayan pink salt, rich in minerals. Perfect for cooking and seasoning.',weight:'500g'},
  {cat:'Vermicelli',slug:'vermicelli',catId:'7miJbm64XgYIxsADFr0cTA',p:'Fine Vermicelli',ps:'fine-vermicelli',desc:'Premium quality fine vermicelli for desserts and savory dishes.',weight:'400g'},
  {cat:'Tea',slug:'tea',catId:'yX7EXDtihs8pMiZoUS1W9O',p:'Premium Green Tea',ps:'premium-green-tea',desc:'High quality green tea leaves from Pakistan.',weight:'250g'},
  {cat:'Snacks',slug:'snacks',catId:'yX7EXDtihs8pMiZoURz6Ag',p:'Chana Chaat',ps:'chana-chaat',desc:'Spicy and tangy Pakistani chana chaat snack.',weight:'200g'},
  {cat:'Honey',slug:'honey',catId:'yX7EXDtihs8pMiZoUS1WWI',p:'Pure Sidr Honey',ps:'pure-sidr-honey',desc:'100% pure natural Sidr honey from Pakistan.',weight:'500g'},
  {cat:'Arqiyaat',slug:'arqiyaat',catId:'yX7EXDtihs8pMiZoUS1YVy',p:'Rose Water Arq',ps:'rose-water-arq',desc:'Pure distilled rose water for culinary and wellness use.',weight:'500ml'},
  {cat:'Miscellaneous',slug:'miscellaneous',catId:'yX7EXDtihs8pMiZoUS1X6w',p:'Grocery Pack',ps:'grocery-pack',desc:'Assorted Pakistani grocery items pack.',weight:'1kg'},
  {cat:'Exclusive Products',slug:'exclusive-products',catId:'7miJbm64XgYIxsADFr0ay0',p:'Punjabi Saag Tin',ps:'punjabi-saag-tin',desc:'Authentic tin-packed Punjabi Saag ready to eat.',weight:'800g'},
  {cat:'Utensils & Kitchenware',slug:'utensils-kitchenware',catId:'7miJbm64XgYIxsADFr0bMW',p:'Karahi Set',ps:'karahi-set',desc:'Traditional Pakistani cooking karahi set.',weight:'2kg'},
  {cat:'Pickle/Achar',slug:'pickle-achar',catId:'7miJbm64XgYIxsADFr0bg8',p:'Mixed Achar',ps:'mixed-achar',desc:'Traditional Pakistani mixed pickle/achar.',weight:'500g'},
  {cat:'Sauces',slug:'sauces',catId:'7miJbm64XgYIxsADFr0c9Y',p:'Tamarind Sauce',ps:'tamarind-sauce',desc:'Tangy tamarind sauce for dipping and cooking.',weight:'300g'},
]

async function run(){
  for(const d of data){
    const r = await client.create({
      _type:'product',
      title:d.p,
      slug:{_type:'slug',current:d.ps},
      description:d.desc,
      weight:d.weight,
      category:{_type:'reference',_ref:d.catId}
    })
    console.log('Created product:',r.title)
  }
}
run().catch(console.error)
