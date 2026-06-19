export enum Phase {
  Beginning = 'BEGINNING',
  Main = 'MAIN',
  Combat = 'COMBAT',
  Ending = 'ENDING',
}

export enum Step {
  Untap = 'UNTAP',
  Upkeep = 'UPKEEP',
  Draw = 'DRAW',
  PrecombatMain = 'PRECOMBAT_MAIN',
  BeginningOfCombat = 'BEGINNING_OF_COMBAT',
  DeclareAttackers = 'DECLARE_ATTACKERS',
  DeclareBlockers = 'DECLARE_BLOCKERS',
  CombatDamage = 'COMBAT_DAMAGE',
  EndOfCombat = 'END_OF_COMBAT',
  PostcombatMain = 'POSTCOMBAT_MAIN',
  EndStep = 'END_STEP',
  Cleanup = 'CLEANUP',
}

export class Game {
  static readonly MAX_PLAYERS = 2;

}