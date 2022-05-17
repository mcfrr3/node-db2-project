// STRETCH
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cars').truncate();
  await knex('cars').insert([
    { vin: '1FVACYDT19HAJ2694', make: 'Chevrolet', model: 'Malibu', mileage: 800, title: 'clean', transmission: 'Auto' },
    { vin: '1G8MC35B38Y119771', make: 'Ford', model: 'F150', mileage: 160000, title: 'clean', transmission: '4WD' },
    { vin: '4UZAAZAL53CL74424', make: 'Dodge', model: '2500', mileage: 9_000_000, title: 'salvage', transmission: '4WD' },
  ]);
};