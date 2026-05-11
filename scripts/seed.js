const {createClient} = require('@sanity/client')
const client = createClient({
  projectId: '8xla3ony',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: 'sk5ncOmk3Z8erUHhn7rXevoh5rC5WkQaNk3qQYrdtwqCO7rhKUwxveq3HEE8GWJn68zu7HKoKJE1ltCur',
  useCdn: false,
})
async function seed() {
  const categories = [
    {_type:'category', title:'Drinks & Juices', slug:{_type:'slug',current:'drinks-juices'}},
    {_type:'category', title:'Bulk Dry Fruits/Nuts', slug:{_type:'slug',current:'dry-fruits-nuts'}},
    {_type:'category', title:'Spices', slug:{_type:'slug',current:'spices'}},
    {_type:'category', title:'Tea', slug:{_type:'slug',current:'tea'}},
    {_type:'category', title:'Snacks', slug:{_type:'slug',current:'snacks'}},
    {_type:'category', title:'Honey', slug:{_type:'slug',current:'honey'}},
    {_type:'category', title:'Miscellaneous', slug:{_type:'slug',current:'miscellaneous'}},
    {_type:'category', title:'Exclusive Products', slug:{_type:'slug',current:'exclusive-products'}},
    {_type:'category', title:'Utensils & Kitchenware', slug:{_type:'slug',current:'utensils-kitchenware'}},
    {_type:'category', title:'Pickle/Achar', slug:{_type:'slug',current:'pickle-achar'}},
    {_type:'category', title:'Sauces', slug:{_type:'slug',current:'sauces'}},
    {_type:'category', title:'Vermicelli', slug:{_type:'slug',current:'vermicelli'}},
    {_type:'category', title:'Arqiyaat', slug:{_type:'slug',current:'arqiyaat'}},
  ]
  for(const cat of categories){
    const r = await client.create(cat)
    console.log('Created:', r.title)
  }
}
seed().catch(console.error)
