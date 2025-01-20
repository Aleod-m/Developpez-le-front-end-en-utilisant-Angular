/**
 * Type for the data for each participation of a country.
 * Example of participation:
 *   {
 *       id: 1,
 *       year: 2012,
 *       city: "Londres",
 *       medalsCount: 28,
 *       athleteCount: 372
 *   }
*/
export interface Participation {
  /** Identifier of the participation. */
  id: number,
  /** Year of the olympic games. */
  year: number,
  /** Location of the olympic games. */
  city: string,
  /** Total medal count of the country this year. */
  medalsCount: number,
  /** Total number of athlete participation for the country this year. */
  athleteCount: number,
}
