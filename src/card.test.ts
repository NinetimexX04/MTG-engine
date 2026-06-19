import { describe, it, expect } from 'vitest';
import { Card } from './card.js';

describe('Card.fromScryfallData', () => {
  it('should create a Card instance from Scryfall data', () => {
    const scryfallData = {
      name: 'Hulking Goblin',
      mana_cost: '{1}{R}',
      type_line: 'Creature — Goblin',
      oracle_text: "This creature can't block.",
      power: '2',
      toughness: '2',
      colors: ['R'],
      color_identity: ['R'],
      cmc: 2,
      keywords: [],
      id: '12345',
      oracle_id: '67890',
    };

    const card = Card.fromScryfallData(scryfallData);

    expect(card.name).toBe('Hulking Goblin');
    expect(card.manaCost).toBe('{1}{R}');
    expect(card.typeLine).toBe('Creature — Goblin');
    expect(card.oracleText).toBe("This creature can't block.");
    expect(card.power).toBe(2);
    expect(card.toughness).toBe(2);
    expect(card.colors).toEqual(['R']);
    expect(card.colorIdentity).toEqual(['R']);
    expect(card.cmc).toBe(2);
    expect(card.id).toBe('12345');
    expect(card.oracleId).toBe('67890');
    expect(card.instanceId).toBeDefined();
  });
});
